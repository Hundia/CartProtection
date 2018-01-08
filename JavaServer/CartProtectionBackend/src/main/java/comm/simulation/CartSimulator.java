package comm.simulation;

import com.vividsolutions.jts.geom.Coordinate;
import comm.icd.CartToServerMsg;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.DatagramChannel;

public abstract class CartSimulator implements Runnable{

    int cartID = -1;
    PerimeterUtility pu = null;

    public CartSimulator(int cartID, Coordinate[] perimeter) {
        //  Set cart id
        this.cartID =cartID;

        //  Set up perimeter utility
        pu = new PerimeterUtility(perimeter);

    }

    @Override
    public void run() {
        DatagramChannel channel = null;
        try {
            channel = DatagramChannel.open();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //  Create a new msg and set id and starting position
        CartToServerMsg msgFromCart = new CartToServerMsg();
        msgFromCart.pos.Longtitude = 0;
        msgFromCart.pos.Latitude = 0;
        msgFromCart.general.ID = cartID;
        msgFromCart.general.Uptime = 12354521232353l;
        msgFromCart.general.Owner = 144;


        while(true) {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            Coordinate cor = getNextPosition();
            msgFromCart.pos.Latitude = cor.x;
            msgFromCart.pos.Longtitude = cor.y;

            msgFromCart.getByteBuffer().rewind();

            System.out.println("Cart ID: " + msgFromCart.general.ID + " sending");

            try {
                int bytesSent = channel.send(msgFromCart.getByteBuffer(), new InetSocketAddress("localhost", 5555));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public abstract Coordinate getNextPosition();
}
