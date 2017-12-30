package application;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private final double longitude = 150.644;
    private final double latitude = -34.397;
    private final int cartId = 1;

    @CrossOrigin(origins = "http://127.0.0.1:3000")
    @GetMapping("/greeting")
    public List<Greeting> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        List<Greeting> gtr = new ArrayList<Greeting>();
        System.out.println("==== in greeting ====");
        gtr.add(new  Greeting(counter.incrementAndGet(),
                String.format(template, name), longitude, latitude, cartId));

        gtr.add(new  Greeting(counter.incrementAndGet(),
                String.format(template, name), longitude + 0.005, latitude+0.005, cartId));
        return gtr;
    }
}