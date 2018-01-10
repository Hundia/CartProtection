package comm.udp;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Location;
import comm.icd.CartToServerMsg;
import comm.simulation.PerimeterUtility;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.DatagramChannel;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class UdpServer {

    private static Queue<CartToServerMsg> mMsgBQ = new ArrayDeque<>(100);
    private static List<CartToServerMsg> msgsLst = new ArrayList<CartToServerMsg>(100);
    private final PerimeterUtility pu = null;
    private Coordinate cartLocation = new Coordinate();
    //  UDP Datagram socket
    DatagramChannel channel;

    //  Socket configuration parameters
    String physicalInterface;
    int bindingPort;

    //  Log4j
    final static Logger logger = Logger.getLogger(UdpServer.class);
    /**
     *  @param physicalInterface
     * @param port
     * @param ramiLevyPerimeter
     */
    public UdpServer(String physicalInterface, int port, Coordinate[] ramiLevyPerimeter) {
        this.physicalInterface = physicalInterface;
        bindingPort = port;

        //  Set up perimeter utility
        pu = new PerimeterUtility(ramiLevyPerimeter);
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

    public static synchronized List<CartToServerMsg> getLatestMessagesFromDevices() {
        //  Drain up the message queue into the messages list
        //logger.debug("Starting cleaning process");
        msgsLst.clear();
        while(!mMsgBQ.isEmpty()) {
            msgsLst.add(mMsgBQ.remove());
        }
        //logger.debug("Finshed cleaning process");
        return msgsLst;
    }

    private static synchronized void addMsgToQueue(CartToServerMsg msg) {
        mMsgBQ.add(msg);
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
                //  TODO: Use messages pool for not allocating a new message every time i get a new msg, the GC will work around the clock here for no good reason.
                CartToServerMsg msgFromCartToQueue = new CartToServerMsg();
                msgFromCartToQueue.setData(buf,0);

                //  Debug print the sender IP and the msg received
                logger.debug("Id Received: " + msgFromCartToQueue.general.ID);

                //  Update the perimeter status of the cart
                cartLocation.x = msgFromCart.pos.Latitude;
                cartLocation.y = msgFromCart.pos.Longtitude;
                if(pu.isInsidePerimiter(cartLocation)) {
                    msgFromCart.isInsidePerimeter = true;
                }
                else {
                    msgFromCart.isInsidePerimeter = false;
                }
                addMsgToQueue(msgFromCartToQueue);

            } catch (IOException e) {
                logger.error(e);
            }
        }

    }

    public static void main(String[] args) {
//        UdpServer srv = new UdpServer("eth0", 5555);
//        srv.init();
//        srv.start();
//        for (int i = 0; i < 3; i++) {
//            CartToServerMsg msgFromCart = new CartToServerMsg();
//            msgFromCart.pos.Longtitude = 10;
//            msgFromCart.pos.Latitude = 20;
//            msgFromCart.general.ID = i;
//            UdpServer.addMsgToQueue(msgFromCart);
//        }
//
//        List<CartToServerMsg> lst = UdpServer.getLatestMessagesFromDevices();
//        for (CartToServerMsg msg: lst
//             ) {
//            System.out.println(msg.toString());
//        }
//        System.out.println(lst);
    }
}
