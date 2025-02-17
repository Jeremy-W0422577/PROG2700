import java.util.Random; //Used to generate random numbers
import java.util.Scanner; //Allows reading of user input

public class Craps {

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in); //Takes input from the player
        Random random=new Random(); //Generate random numbers for dice rolls

        while (true) { //Loop for repeated rounds of the game
            System.out.println("Rolling the dice...");

            //Store the first and second die values
            int firstDie=getFirstDie(random);
            int secondDie=getSecondDie(random);
            int sum=firstDie+secondDie; //Calculate total of dice
            
            //Check outcome of the first roll
            if (sum==2 || sum==3 || sum==12) {
                System.out.printf("You rolled: %d + %d = %d%n", firstDie, secondDie, sum); //Display the roll
                System.out.println("Craps! You lose."); //Handles losing condition
            } else if (sum==7 || sum==11) {
                System.out.printf("You rolled: %d + %d = %d%n", firstDie, secondDie, sum); //Display the roll
                System.out.println("Natural! You win!"); //Handles winning condition
            } else { //If neither win or loss, establish a point
                System.out.printf("You rolled: %d + %d = %d%n", firstDie, secondDie, sum); //Display the roll
                System.out.println("Point established: "+sum);
                int point=sum; //Save the point to compare in future rolls

                //Loop continues until a win or loss
                while (true) {
                    System.out.println("Rolling again...");
                    firstDie=getFirstDie(random); //Roll again for the first die
                    secondDie=getSecondDie(random); //Roll again for the second die
                    sum=firstDie+secondDie; //Calculate the new roll
                    System.out.printf("You rolled: %d + %d = %d%n", firstDie, secondDie, sum); //Display the roll

                    //Check outcome of rolls
                    if (sum==7) {
                        System.out.println("You rolled a 7. You lose."); //Handles loss condition by rolling a 7
                        break; //Ends point-roll loop after a loss
                    } else if (sum==point) {
                        System.out.println("You rolled the point! You win!"); //Handles winning condition by matching point
                        break; //Ends point-roll loop after a win
                    }
                }
            }

            //Ask player to decide if they want to play again
            System.out.println("Do you want to play again? (yes/no)");
            if (!scanner.nextLine().equalsIgnoreCase("yes")) {
                break; //Exits the game loop if the player chooses 'no'
            }
        }

        scanner.close(); //Clear up scanner after game is over
        System.out.println("Thanks for playing!"); //Thank the player
    }

    private static int getFirstDie(Random random) {
        return random.nextInt(6)+1; //Generate number for first die (1-6)
    }

    private static int getSecondDie(Random random) {
        return random.nextInt(6)+1; //Generate number for second die (1-6)
    }
}