/**
 * Created by mitchell on 2/22/14.
 */
public class Animal {
    private String name;
    private double height;
    private int weight;
    private String favFood;
    private double speed;
    private String sound;

    public Flys flyingType;


    public void setName(String newName){name=newName;}
    public String getName() {return name;}

    public void setHeight(double newHeight){height=newHeight;}
    public double getHeight() {return height;}


    public void setFavFood(String newFavFood){favFood=newFavFood;}
    public String getFavFood() {return favFood;}

    public void setSpeed(double newSpeed){speed=newSpeed;}
    public double getSpeed() {return speed;}

    public void setSound(String newSound){sound=newSound;}
    public String getSound() {return sound;}

    public void setWeight(int newWeight){weight=newWeight;}
    public int getWeight() {return weight;}

    public String tryToFly() {
        return flyingType.fly();
    }


    public void setFlyingType
                (Flys newFlyType){flyingType=newFlyType;}


}
