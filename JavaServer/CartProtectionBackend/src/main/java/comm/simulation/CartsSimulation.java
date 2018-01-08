package comm.simulation;
import com.vividsolutions.jts.geom.*;

import java.util.Arrays;
import java.util.Comparator;

public class CartsSimulation {


    public CartsSimulation(int numberOfInstancesToSimulate, Coordinate[] ramiLevyPerimeter, Coordinate[] thiefPerimeter) {

        //  Run and Join on all threads
        //  Rami levy haifa lon lat - 32.8186625, 35.0535584, Delta :32.818607, 35.053874
        //Thread t = new Thread(new RandomPosCartSimulator(0, perimiter));
        Thread t = new Thread(
                new LineTravelingCartSimulator(0
                        , ramiLevyPerimeter ,new Coordinate(ramiLevyPerimeter[1])
                        , new Coordinate(thiefPerimeter[1])
                        , 20, thiefPerimeter
                        , LineTravelingCartSimulator.typeOfLineAgent.travelLineToThiefPerimeter));
        t.start();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for (int i = 1; i < numberOfInstancesToSimulate; i++) {
//            try {
//                Thread.sleep(1000);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
            (new Thread(new RandomPosCartSimulator(i,ramiLevyPerimeter))).start();
        }
    }



    public static void main(String[] args) {
        //  Set up the perimiter using the give coordinates
        Coordinate[] ramiLevyPerimeter = new Coordinate[5];
        //  Rami levy haifa square polygon geo location
        //  Right: 32.818971, 35.053503
        //  Left:  32.818775, 35.053329
        //  Up:    32.818441, 35.053820
        //  Down:  32.818646, 35.054005

        //  TODO - Replace with something from configuration
        ramiLevyPerimeter[0] = new Coordinate(32.818975, 35.053501);
        ramiLevyPerimeter[1] = new Coordinate(32.818775, 35.053328);
        ramiLevyPerimeter[2] = new Coordinate(32.818437, 35.053823);
        ramiLevyPerimeter[3] = new Coordinate(32.818646, 35.054010);
        ramiLevyPerimeter[4] = new Coordinate(32.818975, 35.053501);

        //  Thief location
        //  Right: 32.819397, 35.055494
        //  Left: 32.819255, 35.055379
        //  Right Bottom: 32.819260, 35.055805
        //  Left Bottom: 32.819161, 35.055655
        Coordinate[] thiefPerimeter = new Coordinate[5];
        thiefPerimeter[0] = new Coordinate(32.819397, 35.055494);
        thiefPerimeter[1] = new Coordinate(32.819255, 35.055379);
        thiefPerimeter[2] = new Coordinate(32.819260, 35.055805);
        thiefPerimeter[3] = new Coordinate(32.819161, 35.055655);
        thiefPerimeter[4] = new Coordinate(32.819397, 35.055494);

        new CartsSimulation(50, ramiLevyPerimeter, thiefPerimeter);

//        PerimeterUtility pu = new PerimeterUtility(coordinates);
//        Coordinate[] cords = pu.getPointsOnLineWithInterval(coordinates[1], coordinates[0], 10);

//        Arrays.sort(cords, new Comparator<Coordinate>() {
//            @Override
//            public int compare(final Coordinate entry1, final Coordinate entry2) {
//                final double time1 = entry1.x;
//                final double time2 = entry2.x;
//                if(time1 > time2) {
//                    return -1;
//                }
//                return (int) (time1 - time2);
//            }
//        });


    }
}
