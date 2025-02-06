"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 2

   Author: Jeremy S
   Date:   Feb 6th
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

//Declare the reportHTML variable
var reportHTML="<h1>"+raceTitle+"</h1>";

//Loop through each race
for (var i=0; i<race.length; i++) {
   //Step a: Create a variable named totalVotes
   var totalVotes=0;

   //Step b: Calculate total votes using the calcSum() function
   totalVotes=calcSum(votes[i]);

   //Step c: Add HTML for the current race to reportHTML
   reportHTML+="<table><caption>"+race[i]+"</caption><tr><th>Candidate</th><th>Votes</th></tr>";

   //Step d: Call candidateRows() and add its returned value to reportHTML
   reportHTML+=candidateRows(i, totalVotes);

   //Step e: Add closing table tag to reportHTML
   reportHTML+="</table>";
}

//Write the final HTML report to the section
var section=document.querySelector("section");
section.innerHTML=reportHTML;

function candidateRows(race, totalVotes) {
   var rowHTML=""; //Empty string for the row HTML

   //Loop through the first three candidates
   for (var j=0; j<3; j++) {
       //Get the current candidate's information
       var candidateName=candidate[race][j];
       var candidateParty=party[race][j];
       var candidateVotes=votes[race][j];

       //Calculate the vote percentage
       var candidatePercent=calcPercent(candidateVotes, totalVotes);

       //Create the table row HTML
       rowHTML+="<tr><td>"+candidateName+" ("+candidateParty+")</td><td>"+candidateVotes.toLocaleString()+" ("+candidatePercent.toFixed(1)+"%)</td>";

       //Step: Insert a for loop to add the bar cells
       for (var k=0; k<Math.round(candidatePercent); k++) {
           rowHTML+=createBar(candidateParty);
       }

       rowHTML+="</tr>"; //Close the table row
   }

   return rowHTML; //Return the constructed row HTML
}

function createBar(partyType, percentage) {
   //Step a: Initialize barHTML as an empty string
   var barHTML="";

   //Step b: Create a switch/case statement to determine the party type
   switch (partyType) {
       case "D":
           barHTML="<td class='dem'></td>";
           break;
       case "R":
           barHTML="<td class='rep'></td>";
           break;
       case "I":
           barHTML="<td class='ind'></td>";
           break;
       default:
           barHTML="<td></td>";
   }

   //Return the base barHTML
   return barHTML.repeat(percentage);
}
