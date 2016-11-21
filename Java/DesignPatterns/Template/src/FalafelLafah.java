/**
 * Created by mitchell on 2/23/14.
 */
public class FalafelLafah  extends Hoagie{
    String[] proteinUsed = {"Chick Peas", "Tempeh", "Tofu", "Gluten"};
    String[] veggiesUsed = {"Broccoli", "Spinach", "Zucchini"};
    String[] condimentsUsed = {"Tahini", "Hummus", "Tzatziki"};

    boolean wantCheese() { return false; }


    void addCheese() {}

    void addProtein() {
        System.out.println("Adding the Protein:");
        for (String pro : proteinUsed) {
            System.out.print(pro + " ");
        }
    }


    void addVeggies() {
        System.out.println("Adding the Veggies:");
        for (String pro : veggiesUsed) {
            System.out.print(pro + " ");
        }
    }
    void addCondiments() {
        System.out.println("Adding the Condiments:");
        for (String pro : condimentsUsed) {
            System.out.print(pro + " ");
        }
    }


}
