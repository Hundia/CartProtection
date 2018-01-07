package comm.simulation;
import com.vividsolutions.jts.geom.*;

public class UdpCartSimulator {

  
    public UdpCartSimulator(int numberOfInstancesToSimulate, Coordinate[] perimiter) {

        //  Run and Join on all threads
        //  Rami levy haifa lon lat - 32.8186625, 35.0535584, Delta :32.818607, 35.053874
        Thread t = new Thread(new RandomPosCartSimulator(0, perimiter));
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
            (new Thread(new RandomPosCartSimulator(i,perimiter))).start();
        }
    }



    public static void main(String[] args) {
        //  Set up the perimiter using the give coordinates
        Coordinate[] coordinates = new Coordinate[5];

        //  TODO - Replace with something from configuration
        coordinates[0] = new Coordinate(32.818975, 35.053501);
        coordinates[1] = new Coordinate(32.818775, 35.053328);
        coordinates[2] = new Coordinate(32.818437, 35.053823);
        coordinates[3] = new Coordinate(32.818646, 35.054010);
        coordinates[4] = new Coordinate(32.818975, 35.053501);
//        new UdpCartSimulator(200, coordinates);

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
