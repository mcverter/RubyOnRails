/**
 * Created by mitchell on 2/25/14.
 */
public class EnemyRobotAdapter implements EnemyAttacker {

    EnemyRobot theRobot;

    public EnemyRobotAdapter(EnemyRobot aRobot) {
        theRobot = aRobot;
    }
    public void fireWeapon() {
        theRobot.smashWithHands();
    }

    public void driveForward() {
        theRobot.walkForward();
    }
    public void assignDriver(String name) {
        theRobot.reactToHuman(name);
    }
}
