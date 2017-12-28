//---------------------------------------------------
//|	Created By XmlMessagesGenerator Version: 5.5
//---------------------------------------------------

package comm.icd;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public abstract class Message {

    public Header header = new Header();
	protected ByteBuffer byteBufferGet = null;
	protected ByteBuffer byteBufferSet = null;
    protected ByteBuffer m_tempBf = ByteBuffer.allocate(8);

  //local message properties
  private final int m_nHeaderlength = 12;
  protected int msgOffset = 0;

	public enum ByteBufferType {
		DirectByteBuffer, NonDirectByteBuffer
	}

  /**
  * @return header length in bytes
  */
  public int getHeaderLength() {
      return header.getSize();
  }
	public abstract byte[] getData();
	public abstract void getData(ByteBuffer bf);
	public abstract void setData(byte[] bytes, int startOffset, int length);
	public abstract void setPayloadData(ByteBuffer bf, int pos);
	public abstract void setData(ByteBuffer bf, int pos);
	public abstract int getMessageOpcode();
	public abstract int getMessageSize();

}
