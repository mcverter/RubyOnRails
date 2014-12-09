import java.util.Scanner;

public class EnemyShipTesting {

    public  static void main(String[] args){
        EnemyShipFactory shipFactory = new EnemyShipFactory();
        EnemyShip theEnemy = null;

        Scanner userInput = new Scanner(System.in);

        System.out.println("What type ship? (U / R / B)");

        if (userInput.hasNextLine()) {
            String typeShip = userInput.nextLine();
            theEnemy = shipFactory.makeEnemyShip(typeShip);
        }
        if (theEnemy != null) {
            doStuffEnemy(theEnemy);
        }
        else {
            System.out.println("Please enter U R B next time");
        }
    }


    public static void doStuffEnemy(EnemyShip ES) {
        ES.displayEnemyShip();
        ES.followHeroShip();
        ES.enemyShipShoots();
    }
}