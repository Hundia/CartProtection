package application;

public class Greeting {

    private final long id;
    private final String content;
    private final double longtitude;
    private final double latitude;

    public Greeting(long id, String content, double longtitude, double latitude) {
        this.id = id;
        this.content = content;
        this.longtitude = longtitude;
        this.latitude = latitude;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }


    public double getLongtitude() {
        return longtitude;
    }

    public double getLatitude() {
        return latitude;
    }

}