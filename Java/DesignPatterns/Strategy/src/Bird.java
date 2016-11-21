/**
 * Created by mitchell on 2/22/14.
 */
    public class Bird extends Animal {
        public Bird()
        {
            super();
            setSound("Tweet");

            flyingType = new ItFlys();
        }

    }
