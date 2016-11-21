/**
 * Created by mitchell on 2/22/14.
 */
public class AnimalPlay {

    public static void main(String[] args) {
        Animal sparky = new Dog();
        Animal tweety = new Bird();

        System.out.println("Dog: " + sparky.tryToFly());
        System.out.println("Bird: " + tweety.tryToFly());

        sparky.setFlyingType(new ItFlys());
        System.out.println("Dog: " + sparky.tryToFly());

    }
}
