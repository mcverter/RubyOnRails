/**
 * Created by mitchell on 2/23/14.
 */
public abstract class Hoagie {
    final public void makeSandwich(){
        cutBun();;

        if (wantCheese())
        {
            addCheese();
        }
        if (wantProtein())
        {

            addProtein();
        }
        if (wantVeggies())
        {

            addVeggies();
        }
        if (wantCondiments())
        {
            addCondiments();
        }

        wrapHoagie();

    }
    public void cutBun() {
        System.out.println("The Hoagie is Cut");
    }

    // hooks
    abstract void addCondiments();
    abstract void addProtein();
    abstract void addCheese();
    abstract void addVeggies();

     boolean wantProtein() { return  true; }
     boolean wantCheese() { return true; }
     boolean wantVeggies() { return true; }
     boolean wantCondiments() { return true; }

    public void wrapHoagie() {
        System.out.println("The Hoagie is wrapped");
    }

}
