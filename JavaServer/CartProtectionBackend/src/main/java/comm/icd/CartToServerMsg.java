//---------------------------------------------------
//|	Created By XmlMessagesGenerator Version: 5.5
//---------------------------------------------------

package comm.icd;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class CartToServerMsg extends Message {


    StringBuilder sb = new StringBuilder();

    @Override
    public String toString() {
        sb.append("General: ID = " + general.ID);
        sb.append(" General: Owner = " + general.Owner);
        sb.append(" General: Uptime = " + general.Uptime);
        sb.append("\nPos: Latitude = " + pos.Latitude);
        sb.append(" Pos: Latitude = " + pos.Longtitude);
        sb.append("\nBattery Health: Percentage = " + health.Percentage);
        sb.append(" Battery Health: Status = " + health.Status);
        sb.append(" Battery Health: Health = " + health.Health);
        return sb.toString();
    }

    public CartToServerMsg(){
      initGetByteBuffer(true);
      initLocalMembers();
	}


		public CartToServerMsg(boolean allocateGetByteBuffer){
     		 initGetByteBuffer(allocateGetByteBuffer);
			 initLocalMembers();
		}

    protected final int MSG_SIZE = 44;
    protected final int MSG_OPCODE = 1;

 /**
  * @return messages length in bytes (payload + header)
  */
  public int getMessageSize() {
      return this.MSG_SIZE;
  }

 /**
  * @return messages opcode
  */
  public int getMessageOpcode() {
      return MSG_OPCODE;
  }
      private void initGetByteBuffer(boolean initGetByteBuffer) {

      		if (initGetByteBuffer) {
          		 byteBufferGet = ByteBuffer.allocate(MSG_SIZE);
     		         byteBufferGet.order(ByteOrder.LITTLE_ENDIAN);
       		}
       }

     /**
     * create (new) all the arrays & structs
     */
     protected void initLocalMembers() {
     }

  //local message properties

      protected void initLocalStructures() {

      }

	// fields
    public General general = new General();
    public Position pos = new Position();

	/**
	* Battery Health Status
	*/
    public Battery health = new Battery();


   /**
   * @return byte[] of this class
   */
   public byte[] getData() {
      byteBufferGet.clear();
      byteBufferGet.put(header.getData());
      byteBufferGet.put(general.getData());
      byteBufferGet.put(pos.getData());
      byteBufferGet.put(health.getData());
      return byteBufferGet.array();
   }

    public ByteBuffer getByteBuffer() {
        byteBufferGet.clear();
        byteBufferGet.put(header.getData());
        byteBufferGet.put(general.getData());
        byteBufferGet.put(pos.getData());
        byteBufferGet.put(health.getData());
        byteBufferGet.rewind();
        return byteBufferGet;
    }


   /**
   * Update the bf (ByteBuffer) with the message data
   * @param bf - ByteBuffer
   */
   public void getData(ByteBuffer bf) {
      header.getData(bf);
      general.getData(bf);
      pos.getData(bf);
      health.getData(bf);
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
   * This function will set the ByteBuffer byte[] into the payload class fields
   * The header will not be set
   * @param bf - Bytebuffer to set
   */
   public void setPayloadData(ByteBuffer bf, int pos1) {
      general.setData(bf, pos1 + 12);
      pos.setData(bf, pos1 + 28);
      health.setData(bf, pos1 + 36);
   }


   /**
   * This function will set the ByteBuffer byte[] into the class fields
   * @param bf - Bytebuffer to set
   */
   public void setData(ByteBuffer bf, int pos1) {
      header.setData(bf, pos1);
      general.setData(bf, pos1 + 12);
      pos.setData(bf, pos1 + 28);
      health.setData(bf, pos1 + 36);
   }

}
