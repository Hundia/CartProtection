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
    private boolean enableDebugPrints = true;
    //  List to be returned
    List<Greeting> gtr = new ArrayList<Greeting>();
    final static Logger logger = Logger.getLogger(GreetingController.class);

    @CrossOrigin(origins = "http://127.0.0.1:3000")
    @GetMapping("/greeting")
    public List<Greeting> greeting(@RequestParam(value="reqid", defaultValue="World") String reqid) {

        gtr.clear();
        logger.debug("Got request from web..! req id: " + reqid);
        List<CartToServerMsg> msgsList = UdpServer.getLatestMessagesFromDevices();
        for (CartToServerMsg msg: msgsList)
        {
            if(enableDebugPrints) {
                logger.debug("--------------------------------------------------------------------------");
                logger.debug("Id Sent: " + msg.general.ID);
                logger.debug("--------------------------------------------------------------------------");
            }
            cartId = msg.general.ID;
            batteryPercentage = msg.health.Percentage;
            isBatteryConnected = msg.health.Status;
            longitude = msg.pos.Longtitude;
            latitude = msg.pos.Latitude;

            gtr.add(new Greeting(counter.incrementAndGet(),
                    batteryPercentage, isBatteryConnected, longitude, latitude, cartId));
        }
        msgsList.clear();
        return gtr;
    }
}