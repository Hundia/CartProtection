package spring;

import com.vividsolutions.jts.geom.Coordinate;
import comm.udp.UdpServer;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    final static Logger logger = Logger.getLogger(Application.class);

    public static void main(String[] args) {
        Coordinate[] ramiLevyPerimeter = SetupPerimeter();

        logger.info("Starting the spring application on its own context.");
        //  Run the spring framework on a different context
        new Thread(new Runnable() {
            @Override
            public void run() {
                SpringApplication.run(Application.class, args);
            }
        }, "Spring Thread").start();


        logger.info("Starting the Udp cart server on the main context");
        UdpServer srv = new UdpServer("eth0", 5555, ramiLevyPerimeter);
        srv.init();
        srv.start();
    }

    private static Coordinate[] SetupPerimeter() {
        //  Set up the perimiter using the give coordinates
        Coordinate[] ramiLevyPerimeter = new Coordinate[5];
        //  Rami levy haifa square polygon geo location
        //  Right: 32.818971, 35.053503
        //  Left:  32.818775, 35.053329
        //  Up:    32.818441, 35.053820
        //  Down:  32.818646, 35.054005

        //  TODO - Replace with something from configuration / args
        ramiLevyPerimeter[0] = new Coordinate(32.818975, 35.053501);
        ramiLevyPerimeter[1] = new Coordinate(32.818775, 35.053328);
        ramiLevyPerimeter[2] = new Coordinate(32.818437, 35.053823);
        ramiLevyPerimeter[3] = new Coordinate(32.818646, 35.054010);
        ramiLevyPerimeter[4] = new Coordinate(32.818975, 35.053501);
        return ramiLevyPerimeter;
    }
}