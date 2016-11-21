/**
 * Created by mitchell on 2/25/14.
 */

import java.util.Random;
public class EnemyTank implements  EnemyAttacker{

    Random generator = new Random();

    public void fireWeapon() {
        int attackDamage = generator.nextInt(10) + 1;
        System.out.println("Enemy tank does " + attackDamage + " Damage");
    }
    public void driveForward() {
        int move = generator.nextInt(5)+1;
        System.out.println("Enemy tank moves " + move + " spaces");

    }
    public void assignDriver(String name) {
        System.out.println(name + " is driving the tank");
    }


}
