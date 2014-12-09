/**
 * Created by mitchell on 2/22/14.
 */
public class PizzaShop {
   SimplePizzaFactory factory;

    public PizzaShop(SimplePizzaFactory factory) {
        this.factory = factory;
    }

    Pizza orderPizza(String type) {
        Pizza pizza;
        pizza = factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

}


