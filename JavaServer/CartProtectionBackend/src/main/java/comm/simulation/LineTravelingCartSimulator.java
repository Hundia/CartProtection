package comm.simulation;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.LineSegment;

public class LineTravelingCartSimulator extends CartSimulator{
    LineSegment ls = null;

    public LineTravelingCartSimulator(int cartID, Coordinate[] perimeter, Coordinate lineStartingPoint, Coordinate lineEndPoint) {
        super(cartID, perimeter);
        ls = new LineSegment(lineStartingPoint, lineEndPoint);
    }

    @Override
    public Coordinate getNextPosition() {
        return ls.pointAlong(0.1);
    }
}
