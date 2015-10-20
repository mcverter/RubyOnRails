/**
 * Created by mitchell on 2/22/14.
 */
public interface Flys {
    String fly();
}

class ItFlys implements Flys {
    public String fly() {
        return "Flying High";
    }
}

class CannotFly implements Flys {
    public String fly() {
        return "I can not fly";
    }
}