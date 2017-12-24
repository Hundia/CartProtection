package comm.udp;

import comm.icd.CartToServerMsg;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.DatagramChannel;

public class UdpServer {

    //  UDP Datagram socket
    DatagramChannel channel;

    //  Socket configuration parameters
    String physicalInterface;
    int bindingPort;

    //  Log4j
    final static Logger logger = Logger.getLogger(UdpServer.class);
    /**
     *
     * @param physicalInterface
     * @param port
     */
    public UdpServer (String physicalInterface, int port) {
        this.physicalInterface = physicalInterface;
        bindingPort = port;
    }

    /**
     *
     * @return
     */
    public boolean init() {
        //  Attempt to open the connection
        try {
            logger.info("Opening datagram channel with port: " + bindingPort);
            channel = DatagramChannel.open();
            channel.socket().bind(new InetSocketAddress(bindingPort));
        } catch (IOException e) {
            logger.error(e);
            return false;
        }

        logger.info("Succesfully opened the port");
        return true;
    }

    /**
     *
     */
    public void start () {

        //  Create a cart to server message and a buffer to read into
        CartToServerMsg msgFromCart = new CartToServerMsg();
        ByteBuffer buf = ByteBuffer.allocate(msgFromCart.getMessageSize());
        buf.clear();
        buf.order(ByteOrder.LITTLE_ENDIAN);

        logger.info("Started to listen on UDP channel with port: " + bindingPort);

        //  Start listening on the socket
        while(true) {
            try {
                //  Listen on the socket
                InetSocketAddress remoteAddress = (InetSocketAddress) channel.receive(buf);

                buf.rewind();
                //  Set the data received in the designated structure
                msgFromCart.setData(buf,0);

                //  Debug print the sender IP and the msg received
                logger.debug("Received msg from: " + remoteAddress.getHostName() + "\n" + msgFromCart.toString());

            } catch (IOException e) {
                logger.error(e);
            }
        }

    }

    public static void main(String[] args) {
        UdpServer srv = new UdpServer("eth0", 5555);
        srv.init();
        srv.start();
    }
}
