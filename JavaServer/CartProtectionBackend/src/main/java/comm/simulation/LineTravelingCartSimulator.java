package comm.simulation;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.LineSegment;

import java.util.ArrayList;

public class LineTravelingCartSimulator extends CartSimulator {

    private typeOfLineAgent agentType;

    enum typeOfLineAgent {
        lineTraveler,
        travelLineToThiefPerimeter
    }
    int currentPointIndex = 0;
    int numOfPoints = 0;
    ArrayList<Coordinate> points = null;
    public LineTravelingCartSimulator(int cartID, Coordinate[] perimeter
            , Coordinate lineStartingPoint, Coordinate lineEndPoint
            , int numOfPoints, Coordinate[] thiefPerimeter, typeOfLineAgent agentType) {

        super(cartID, thiefPerimeter);
        this.agentType = agentType;
        this.numOfPoints = numOfPoints;
        Coordinate[] pointsOnLine = pu.getPointsOnLineWithInterval(lineStartingPoint, lineEndPoint, numOfPoints);
        points = new ArrayList<Coordinate>(numOfPoints*2);

        int i = 0;
        //  Add the points to the local array and then add them in reverse
        //  to get the loop effect
        for (int j = 0; j < numOfPoints; j++) {
            points.add(new Coordinate(pointsOnLine[j]));
        }
//        //  Now add the reverse
//        for (int j = numOfPoints-1; j >= 0; j--) {
//            points.add(new Coordinate(pointsOnLine[j]));
//        }

//        for (int j = 0; j < points.size()*2; j++) {
//            System.out.println(getNextPosition());
//        }
    }

    @Override
    public Coordinate getNextPosition() {
        Coordinate cor = null;
        if(agentType == typeOfLineAgent.lineTraveler) {
            currentPointIndex = (currentPointIndex + 1) % (numOfPoints*2);
            cor = points.get(currentPointIndex);
        }
        else if(agentType == typeOfLineAgent.travelLineToThiefPerimeter) {
            if(currentPointIndex < numOfPoints) {
                cor = points.get(currentPointIndex);
                currentPointIndex++;
                System.out.println("On line: " + cor);
            }
            else {
                cor = pu.getRandomPositionInPerimiter();
                System.out.println("In Thief Perimeter: " + cor);
            }
        }
        if(null == cor) {
            System.out.println("[LineTravelingCartSimulator]: We got an error :-|");
        }
        return cor;
    }
}
