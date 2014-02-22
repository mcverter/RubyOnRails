import java.util.Scanner;


public class EnemyShipTesting {

    public static void main (String[] args) {
	EnemyShip ufoShip = new UFOEnemyShip();

	doStuffEnemy(ufoShip);
    }

    public static void doStuffEnemy(EnemyShip ES) {
	ES.displayEnemyShip();
	ES.followHeroShip();
	ES.enemyShipShoots();
   }
}