package spring;

import comm.icd.CartToServerMsg;
import comm.udp.UdpServer;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicInteger counter = new AtomicInteger();
    private double longitude = 150.644;
    private double latitude = -34.397;
    private int cartId = 1;
    private int batteryPercentage = 1;
    private int isBatteryConnected = 0;
    //  List to be returned
    List<Greeting> gtr = new ArrayList<Greeting>();
    final static Logger logger = Logger.getLogger(GreetingController.class);

    @CrossOrigin(origins = "http://127.0.0.1:3000")
    @GetMapping("/greeting")
    public List<Greeting> greeting(@RequestParam(value="name", defaultValue="World") String name) {

        gtr.clear();

        List<CartToServerMsg> msgsList = UdpServer.getLatestMessagesFromDevices();
        logger.debug("!!!!!!");
        for (CartToServerMsg msg: msgsList)
        {
            logger.debug("--------------------------------------------------------------------------");
            logger.debug(msg.toString());
            logger.debug("--------------------------------------------------------------------------");
            cartId = msg.general.ID;
            batteryPercentage = msg.health.Percentage;
            isBatteryConnected = msg.health.Status;
            longitude = msg.pos.Longtitude;
            latitude = msg.pos.Latitude;

            gtr.add(new Greeting(counter.incrementAndGet(),
                    batteryPercentage, isBatteryConnected, longitude, latitude, cartId));
        }
        msgsList.clear();
        logger.debug("!!!!!!");
        return gtr;
    }
}