//---------------------------------------------------
//|	Created By XmlMessagesGenerator Version: 5.5
//---------------------------------------------------

package comm.icd;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

   public class Battery {
	// fields
	public int Percentage;
	public short Status;
	public short Health;

       // local fields
       private static final int SIZE = 8;
       protected ByteBuffer byteBufferGet = null;
       protected ByteBuffer byteBufferSet = null;

       // constructor
       public Battery() {
       		initGetByteBuffer(true);
			    initLocalMembers();
       }


       // constructor
       public Battery(boolean allocateGetByteBuffer) {
       		    initGetByteBuffer(allocateGetByteBuffer);
			    initLocalMembers();
       }
      public int getSize() {
           return SIZE;
      }

      protected void initLocalStructures() {

      }


     /**
     * create (new) all the arrays & structs
     */
     protected void initLocalMembers() {
     }
      private void initGetByteBuffer(boolean initGetByteBuffer) {

      		if (initGetByteBuffer) {
          		 byteBufferGet = ByteBuffer.allocate(SIZE);
     		         byteBufferGet.order(ByteOrder.LITTLE_ENDIAN);
       		}
       }


       /**
       * @return byte[] of this class
       */
       public byte[] getData() {
              byteBufferGet.clear();
              byteBufferGet.putInt((int) (Percentage & 0XFFFFFFFFL));
              byteBufferGet.putShort((short) (Status & 0XFFFF));
              byteBufferGet.putShort((short) (Health & 0XFFFF));
              return byteBufferGet.array();
       }


       /**
       * Update the bf (ByteBuffer) with the message data
       * @param bf - ByteBuffer
       */
       public void getData(ByteBuffer bf) {
              bf.putInt((int) (Percentage & 0XFFFFFFFFL));
              bf.putShort((short) (Status & 0XFFFF));
              bf.putShort((short) (Health & 0XFFFF));
       }


       /**
       * This function will set byte[] into the class fields
       * @param bytes - byte[] to set
       * @param startOffset - start index in bytes[] to set
       * @param length - number of bytes to set
       */
       public void setData(byte[] bytes, int startOffset, int length) {
              byteBufferSet = ByteBuffer.wrap(bytes, startOffset, length);
              byteBufferSet.order(ByteOrder.LITTLE_ENDIAN);
              setData(byteBufferSet, 0);
       }


       /**
       * This function will set the ByteBuffer byte[] into the class fields
       * @param bf - Bytebuffer to set
       */
       public void setData(ByteBuffer bf, int pos) {
              Percentage = (int) (0xFFFFFFFFL & bf.getInt(pos + 0));
              Status = (short) (0xFFFF & bf.getShort(pos + 4));
              Health = (short) (0xFFFF & bf.getShort(pos + 6));
       }

}

