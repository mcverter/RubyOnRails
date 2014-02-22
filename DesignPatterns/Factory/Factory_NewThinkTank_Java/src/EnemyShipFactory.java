/**
 * Created by mitchell on 2/22/14.
 */
public class EnemyShipFactory {

    public  EnemyShip makeEnemyShip(String newShipType) {
        EnemyShip theEnemy = null;
        if (newShipType.equals("U")){
            theEnemy = new UFOEnemyShip();

        }
        else if (newShipType.equals("R")){
            theEnemy = new RocketEnemyShip();
        }
        else if (newShipType.equals("B")){
            theEnemy = new BigUFOEnemyShip();
        }
        else {}
        return theEnemy;
    }
}
