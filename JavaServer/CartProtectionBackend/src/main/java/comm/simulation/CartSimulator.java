package comm.simulation;

import com.vividsolutions.jts.geom.Coordinate;
import comm.icd.CartToServerMsg;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.DatagramChannel;

public abstract class CartSimulator implements Runnable{

    int cartID = -1;

    public CartSimulator(int cartID) {
        this.cartID =cartID;
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
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }


            //  Update the position
            //  Rami levy haifa lon lat -
            //  Right: 32.818971, 35.053503
            //  Left:  32.818775, 35.053329
            //  Up:    32.818441, 35.053820
            //  Down:  32.818646, 35.054005

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
