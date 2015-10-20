/**
 * Created by mitchell on 2/25/14.
 */
public class TestEnemyAttacker {

    public static void main (String[] args) {
        EnemyTank mTank = new EnemyTank();
        EnemyRobot fred = new EnemyRobot();

        EnemyAttacker robotAdapter = new EnemyRobotAdapter(fred);

        System.out.println("The Robot");
        fred.reactToHuman("Paul");
        fred.walkForward();
        fred.smashWithHands();

        System.out.println("The Enemy Tank");
        mTank.assignDriver("Frank");
        mTank.driveForward();
        mTank.fireWeapon();


        System.out.println("Robot with Adapter");
        robotAdapter.assignDriver("Bob");
        robotAdapter.fireWeapon();
        robotAdapter.driveForward();

    }
}
