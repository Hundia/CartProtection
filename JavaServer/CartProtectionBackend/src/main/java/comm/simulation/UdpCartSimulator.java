package comm.simulation;
import com.vividsolutions.jts.shape.random.*;
import com.vividsolutions.jts.geom.*;
import comm.icd.CartToServerMsg;
import org.geotools.geometry.jts.JTSFactoryFinder;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.channels.DatagramChannel;
import java.util.Random;

class location {
    double longtitude = 0;
    double latitude = 0;

    public location(double longtitude, double latitude) {
        this.longtitude = longtitude;
        this.latitude = latitude;
    }

    @Override
    public String toString() {
        return "lon: " + longtitude + " lat: " + latitude;
    }
}

public class UdpCartSimulator {

    protected static Random random = new Random();

    //  Geo location stuff using JTS and geo tools libraries
    private Polygon poly = null;
    private GeometryFactory geometryFactory = null;
    private RandomPointsBuilder rpb = null;

    public static double randomInRange(double min, double max) {
        double range = max - min;
        double scaled = random.nextDouble() * range;
        double shifted = scaled + min;
        return shifted; // == (rand.nextDouble() * (max-min)) + min;
    }

    public Coordinate getRandomPositionInPerimiter() {

        Geometry g = rpb.getGeometry();
        Coordinate[] cr =  g.getCoordinates();
        return cr[0];
    }
    /**
     * Checks if a given coordinate is inside our perimiter or outside
     * @param cor
     * @return
     */
    public boolean isInsidePerimiter(Coordinate cor) {
        Point p = geometryFactory.createPoint(new Coordinate(32.818962, 35.053459));

        return poly.contains(p);
    }

    private class cartSimulator implements Runnable{
        public location loc;
        public int cartId;

        public cartSimulator(int cartId, location loc) {
            this.cartId = cartId;
            this.loc = loc;
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
            msgFromCart.pos.Longtitude = loc.longtitude;
            msgFromCart.pos.Latitude = loc.latitude;
            msgFromCart.general.ID = cartId;
            msgFromCart.general.Uptime = 12354521232353l;
            msgFromCart.general.Owner = 144;

            //  Flag to toggle direction of random update
            double direction = 1;
            location loc = new location(0,0);

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

                Coordinate cor = getRandomPositionInPerimiter();
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
    }

    /**
     * Sets up the perimiter and places it in poly member
     */
    private void setUpPerimiter(Coordinate[] coordinates) {

        geometryFactory = JTSFactoryFinder.getGeometryFactory();

        LinearRing linear = geometryFactory.createLinearRing(coordinates);
        poly = new Polygon(linear, null, geometryFactory);

        //  set up a random point builder - rpb
        rpb = new RandomPointsBuilder(geometryFactory);
        //  Number of points we want
        rpb.setNumPoints(1);
        //  Mask our area only!
        rpb.setExtent(poly);
    }

    public UdpCartSimulator(int numberOfInstancesToSimulate) {
        //  Set up the perimiter using the give coordinates
        Coordinate[] coordinates = new Coordinate[5];

        //  TODO - Replace with something from configuration
        coordinates[0] = new Coordinate(32.818975, 35.053501);
        coordinates[1] = new Coordinate(32.818775, 35.053328);
        coordinates[2] = new Coordinate(32.818437, 35.053823);
        coordinates[3] = new Coordinate(32.818646, 35.054010);
        coordinates[4] = new Coordinate(32.818975, 35.053501);
        setUpPerimiter(coordinates);

        //  Run and Join on all threads
        //  Rami levy haifa lon lat - 32.8186625, 35.0535584, Delta :32.818607, 35.053874
        Thread t = new Thread(new cartSimulator(0, new location(32.8186625,35.0535584)));
        t.start();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for (int i = 1; i < numberOfInstancesToSimulate; i++) {
//            try {
//                Thread.sleep(1000);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
            (new Thread(new cartSimulator(i, new location(46.57608333,8.89241667)))).start();
        }
    }

    public static void randLatLonValPoint(location loc){
        //For x and y, the maximum point is 1 and Minimum point is -1
        //maximum number
        double minLat = 32.818441;
        //minimum number
        double maxLat = 32.818971;

        //maximum number
        double minLon = 35.053329;
        //minimum number
        double maxLon = 35.054005;

        // generates lon values
        double lonVal = randomInRange(minLon,maxLon);
        // generates lat values
        double latVal = randomInRange(minLat,maxLat);

        // update the input param
        loc.latitude = latVal;
        loc.longtitude = lonVal;
    }


    public static void main(String[] args) {
        new UdpCartSimulator(200);

        //  ----------------------------------------
        /*
        Coordinate[] coordinates = new Coordinate[5];

        coordinates[0] = new Coordinate(32.818975, 35.053501);
        coordinates[1] = new Coordinate(32.818775, 35.053328);
        coordinates[2] = new Coordinate(32.818437, 35.053823);
        coordinates[3] = new Coordinate(32.818646, 35.054010);
        coordinates[4] = new Coordinate(32.818975, 35.053501);

        Polygon poly = null;
        GeometryFactory geometryFactory = null;

        geometryFactory = JTSFactoryFinder.getGeometryFactory();

        LinearRing linear = geometryFactory.createLinearRing(coordinates);
        poly = new Polygon(linear, null, geometryFactory);

        RandomPointsBuilder m = new RandomPointsBuilder(geometryFactory);
        //  Number of points we want
        m.setNumPoints(100);
        //  Mask our area only!
        m.setExtent(poly);
        Geometry g = m.getGeometry();
        Coordinate[] cr =  g.getCoordinates();
        Polygon finalPoly = poly;
        GeometryFactory finalGeometryFactory = geometryFactory;
        Arrays.asList(cr).forEach(cor -> {
            Point p = finalGeometryFactory.createPoint(new Coordinate(cor));

            System.out.println("Coordinate generated: " + cor + " Is inside poly: " + finalPoly.contains(p));
        });
        */
        //  ----------------------------------------
        /*
        //  Test out the position randoming
        // lat - 46.57608333 lon - 8.89241667
        double lat = 46.57608333;
        double lon = 8.89241667;
        for (int i = 0; i < 10; i++) {
            double res = UdpCartSimulator.randomInRange(0.0060800, 0.0060900);
            //System.out.println("Rand Res: " + res);
            double newlat = lat + res;
            System.out.println("Lat Before change: " + lat + " Lat After Change: " + newlat);
        }
        */

    }
}
