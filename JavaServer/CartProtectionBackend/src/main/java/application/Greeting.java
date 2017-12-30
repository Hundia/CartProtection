package application;

public class Greeting {

    private final long id;
    private final String content;
    private final double longtitude;
    private final double latitude;
    private final int cartId;

    public Greeting(long id, String content, double longtitude, double latitude, int cartId) {
        this.id = id;
        this.content = content;
        this.longtitude = longtitude;
        this.latitude = latitude;
        this.cartId = cartId;
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

    public int getCartId() {
        return cartId;
    }
}