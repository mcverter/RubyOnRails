/**
 * Created by mitchell on 2/25/14.
 */

import java.util.Random;
public class EnemyRobot {

    Random generator = new Random();

    public void smashWithHands() {
        int attackDamage = generator.nextInt(4) + 1;
        System.out.println("Enemy Robot causes" + attackDamage + " with hands.");

    }

    public void walkForward() {
        int move = generator.nextInt(3) + 1;
        System.out.println("Enemy Robot walks" + move + " spaces.");

    }

    public void reactToHuman (String driverName) {
        System.out.println("Enemy robot tramples on " + driverName);
    }

}
