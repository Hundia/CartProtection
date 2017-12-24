//---------------------------------------------------
//|	Created By XmlMessagesGenerator Version: 5.5
//---------------------------------------------------

package comm.icd;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

   public class Position {
	// fields
	public int Longtitude;
	public int Latitude;

       // local fields
       private static final int SIZE = 8;
       protected ByteBuffer byteBufferGet = null;
       protected ByteBuffer byteBufferSet = null;

       // constructor
       public Position() {
       		initGetByteBuffer(true);
			    initLocalMembers();
       }


       // constructor
       public Position(boolean allocateGetByteBuffer) {
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
              byteBufferGet.putInt((int) (Longtitude & 0XFFFFFFFFL));
              byteBufferGet.putInt((int) (Latitude & 0XFFFFFFFFL));
              return byteBufferGet.array();
       }


       /**
       * Update the bf (ByteBuffer) with the message data
       * @param bf - ByteBuffer
       */
       public void getData(ByteBuffer bf) {
              bf.putInt((int) (Longtitude & 0XFFFFFFFFL));
              bf.putInt((int) (Latitude & 0XFFFFFFFFL));
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
              Longtitude = (int) (0xFFFFFFFFL & bf.getInt(pos + 0));
              Latitude = (int) (0xFFFFFFFFL & bf.getInt(pos + 4));
       }

}

