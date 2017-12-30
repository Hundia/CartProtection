package comm.udp;

import comm.icd.CartToServerMsg;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.DatagramChannel;

public class UdpTestClient {
    public static void main(String[] args) {

        CartToServerMsg msgFromCart = new CartToServerMsg();
        msgFromCart.general.ID = 55;
        msgFromCart.general.Uptime = 12354521232353l;
        msgFromCart.general.Owner = 144;
        msgFromCart.pos.Longtitude = 1443223;
        msgFromCart.pos.Latitude = 123000011;

        System.out.println("Sending: " + msgFromCart.toString());

        DatagramChannel channel = null;
        try {
            channel = DatagramChannel.open();
        } catch (IOException e) {
            e.printStackTrace();
        }
//        channel.socket().bind(new InetSocketAddress(5557));

        msgFromCart.getByteBuffer().rewind();
        try {
            int bytesSent = channel.send(msgFromCart.getByteBuffer(), new InetSocketAddress("localhost", 5555));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
