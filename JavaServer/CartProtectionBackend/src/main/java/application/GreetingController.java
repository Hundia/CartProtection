package application;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private final double longtitude = 19.552;
    private final double latitude = 54.232;

    @RequestMapping("/greeting")
    public List<Greeting> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        List<Greeting> gtr = new ArrayList<Greeting>();

        gtr.add(new  Greeting(counter.incrementAndGet(),
                String.format(template, name), longtitude, latitude));

        gtr.add(new  Greeting(counter.incrementAndGet(),
                String.format(template, name), longtitude, latitude));
        return gtr;
    }
}