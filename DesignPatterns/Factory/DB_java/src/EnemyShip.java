public abstract class EnemyShip {
    public String name;
    public double amtDmg;

    public String getName() {return name;}
    public void setName(String newName){name=newName;}

    public double getDamage() {return amtDmg;}
    public void setDamage (double dmg){amtDmg = dmg;}

    public void followHeroShip () {
	System.out.println(getName() + " is following the hero");
    }
    public void displayEnemyShip () {
	System.out.println(getName() + " is on the screen");
    }
    public void enemyShipShoots () {
	System.out.println(getName() + " attacks and does " +
	    getDamage() + " damage");
    }

}