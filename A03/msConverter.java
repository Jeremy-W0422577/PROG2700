import java.util.Scanner; //Import the Scanner class for user input

public class msConverter {

    //Method converts milliseconds to hours, minutes, and seconds
    public static String convertMillis(long millis) {
        long seconds=millis/1000; //Convert milliseconds to seconds by dividing by 1000
        long hours=seconds/3600; //Convert total seconds to hours by dividing by 3600
        seconds%=3600; //Remaining seconds after extracting hours
        long minutes=seconds/60; //Convert remaining seconds to minutes by dividing by 60
        seconds%=60; //Remaining seconds after extracting minutes

        return hours+":"+minutes+":"+seconds; //Return formatted string as "hours:minutes:seconds"
    }

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in); //Create Scanner object to read input from user

        //Prompt the user to enter milliseconds
        System.out.print("Enter milliseconds: ");
        long millisInput=scanner.nextLong(); //Read integer input from user

        //Call the convertMillis method and display the result
        String result=convertMillis(millisInput);
        System.out.println("Converted time: "+result); //Display time in the format hours:minutes:seconds
        
        scanner.close();
    }
}