import java.util.Random; //Importing the Random class

public class RandomMonth {
    //Function to get a random month
    public static String getRandomMonth() {
        String[] months={ //Array of months
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        };

        Random random=new Random(); //Generates random numbers
        int randomIndex=random.nextInt(12); //Generates random number from 0 to 11
        return months[randomIndex]; //Return the month that relates to the random index number
    }

//Main entry point
public static void main(String[] args) {
    String monthName=getRandomMonth(); //Call getRandomMonth and store the returned month
    System.out.println("Randomly selected month: " + monthName); //Print randomly selected month
    }
}