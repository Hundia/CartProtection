package comm.simulation;
import com.vividsolutions.jts.geom.*;

public class CartsSimulation {


    public CartsSimulation(int numberOfInstancesToSimulate, Coordinate[] perimiter) {

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
        //  Rami levy haifa square polygon geo location
        //  Right: 32.818971, 35.053503
        //  Left:  32.818775, 35.053329
        //  Up:    32.818441, 35.053820
        //  Down:  32.818646, 35.054005
        //  TODO - Replace with something from configuration
        coordinates[0] = new Coordinate(32.818975, 35.053501);
        coordinates[1] = new Coordinate(32.818775, 35.053328);
        coordinates[2] = new Coordinate(32.818437, 35.053823);
        coordinates[3] = new Coordinate(32.818646, 35.054010);
        coordinates[4] = new Coordinate(32.818975, 35.053501);
        PerimeterUtility pu = new PerimeterUtility(coordinates);

        LineSegment ls = new LineSegment( new Coordinate(32.818975, 35.053501), new Coordinate(32.818775, 35.053328));


        for (int i = 0; i < 10; i++) {
            System.out.println(ls.pointAlongOffset(10,10));
        }
//        new CartsSimulation(200, coordinates);

    }
}
