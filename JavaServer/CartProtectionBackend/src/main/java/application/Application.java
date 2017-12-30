package application;

import comm.udp.UdpServer;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    final static Logger logger = Logger.getLogger(Application.class);

    public static void main(String[] args) {

        logger.info("Starting the spring application on its own context.");
        //  Run the spring framework on a different context
        new Thread(new Runnable() {
            @Override
            public void run() {
                SpringApplication.run(Application.class, args);
            }
        }, "Spring Thread").start();


        logger.info("Starting the Udp cart server on the main context");
        UdpServer srv = new UdpServer("eth0", 5555);
        srv.init();
        srv.start();
    }
}