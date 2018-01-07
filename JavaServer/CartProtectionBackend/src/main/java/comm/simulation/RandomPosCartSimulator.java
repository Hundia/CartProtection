package comm.simulation;


import com.vividsolutions.jts.geom.Coordinate;

/**
 * Extends the basic cart simulator to simulator a random position moving cart inside
 * the given perimeter
 */
public class RandomPosCartSimulator extends CartSimulator{

    public RandomPosCartSimulator(int cartID, Coordinate[] perimeter) {
        super(cartID, perimeter);
    }

    @Override
    public Coordinate getNextPosition() {
        return pu.getRandomPositionInPerimiter();
    }
}
