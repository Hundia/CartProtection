package comm.simulation;

import com.vividsolutions.jts.geom.*;
import com.vividsolutions.jts.shape.random.RandomPointsBuilder;
import org.geotools.geometry.jts.JTSFactoryFinder;

public class PerimeterUtility {

    //  Geo location stuff using JTS and geo tools libraries
    Polygon poly = null;
    GeometryFactory geometryFactory = null;
    RandomPointsBuilder rpb = null;

    /**
     * Given a set of perimiter coordinates, in which the first and last coordinates
     * must be the safe, will build up a this class that give's perimiter functionality
     * @param perimiterCoordinates
     */
    public PerimeterUtility(Coordinate[] perimiterCoordinates) {
        setUpPerimiter(perimiterCoordinates);
    }

    /**
     * Sets up the perimiter and places it in poly member
     */
    private void setUpPerimiter(Coordinate[] coordinates) {

        geometryFactory = JTSFactoryFinder.getGeometryFactory();

        LinearRing linear = geometryFactory.createLinearRing(coordinates);
        poly = new Polygon(linear, null, geometryFactory);

        //  set up a random point builder - rpb
        rpb = new RandomPointsBuilder(geometryFactory);
        //  Number of points we want
        rpb.setNumPoints(1);
        //  Mask our area only!
        rpb.setExtent(poly);
    }

    /**
     * Gives a random position inside the perimeter
     * @return
     */
    public Coordinate getRandomPositionInPerimiter() {
        rpb.setNumPoints(1);
        Geometry g = rpb.getGeometry();
        Coordinate[] cr =  g.getCoordinates();
        return cr[0];
    }

    /**
     * Gives a random position inside the perimeter
     * @return
     */
    public Coordinate[] getMultipleCoordinates(int numOfCoordinates) {
        //  Number of points we want
        rpb.setNumPoints(numOfCoordinates);
        Geometry g = rpb.getGeometry();
        Coordinate[] cr =  g.getCoordinates();
        return cr;
    }
    /**
     * Checks if a given coordinate is inside our perimiter or outside
     * @param cor
     * @return
     */
    public boolean isInsidePerimiter(Coordinate cor) {
        Point p = geometryFactory.createPoint(new Coordinate(32.818962, 35.053459));

        return poly.contains(p);
    }
}
