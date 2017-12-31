package spring;

public class Greeting {

    private final int seq;
    private final int batteryPercentage;
    private final int batteryConnected;
    private final double longtitude;
    private final double latitude;
    private final int cartId;

    public Greeting(int seq, int batteryPercentage, int batteryConnected, double longtitude, double latitude, int cartId) {
        this.seq = seq;
        this.batteryPercentage = batteryPercentage;
        this.batteryConnected = batteryConnected;
        this.longtitude = longtitude;
        this.latitude = latitude;
        this.cartId = cartId;
    }

    public int getSeq() {
        return seq;
    }

    public int getBatteryPercentage() {
        return batteryPercentage;
    }

    public int getBatteryConnected() {
        return batteryConnected;
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