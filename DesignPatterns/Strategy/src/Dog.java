/**
 * Created by mitchell on 2/22/14.
 */
public class Dog  extends Animal {
    public Dog()
    {
        super();
        setSound("Woof");

        flyingType = new CannotFly();
    }

}
