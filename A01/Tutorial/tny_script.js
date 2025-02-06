@charset "utf-8";

@font-face {
   font-family: Segment14;
   src: url('segment14.woff') format('woff'),
        url('segment14.ttf') format('truetype');
}
"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Jeremy S
   Feb 1st

   Tulsa's New Year's Bash Layout Style Sheet
  
   Filename: tny_styles.css

   Segment14 font designed by Paul Flo Williams. Download at:
   http://www.1001fonts.com/segment14-font.html#styles

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {

   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML =
   dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1, 2021");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}

/* HTML and Body styles */

html {
   background: linear-gradient(to bottom, rgb(120, 23, 84), rgb(51, 51, 51));
   font-family: Verdana, Geneva, sans-serif;
   min-height: 100%;
}

body { 
   margin: 0px auto;
   min-width: 340px;
   max-width: 1020px;  
   width: 100%;
   min-height: 100%;
}


/* Header styles */

header img#logoImg {
   display: block;
   width: 100%;
}

header {
   background: linear-gradient(to bottom, black 70%, rgb(185, 102, 0));
   border-bottom: 1px solid rgb(0, 0, 0);
   color: white;
   position: relative;
   width: 100%;
}

header > h1 {
   position: absolute;
   top: 15px;
   right: 10px;
   text-align: right;  
   font-size: 1.3em;
   letter-spacing: 0.05em;
   line-height: 1em;
   font-family: 'Times New Roman', serif;
   font-weight: normal;
   color: rgba(255, 192, 0, 0.7);
}

header > h2 {
   position: absolute;
   top: 15px;
   left: 10px;
   font-size: 0.9em;
   font-weight: normal;
   color: rgba(255, 192, 82, 0.8);
}

/* Navigation list styles */

header nav.horizontal {
   position: absolute;
   bottom: 0px;
   left: 0px;
   width: 100%;
   -webkit-flex: 0 1;
   flex: 0 1;   
}

body header nav ul {
   display: -webkit-flex;
   display: flex;
   -webkit-flex-flow: row nowrap;
   flex-flow: row nowrap;
}

nav.horizontal ul li {
   -webkit-flex: 1 1;
   flex: 1 1;
   font-size: 0.8em;
   line-height: 1.5em;
   height: 1.5em; 
   font-family: 'Trebuchet MS', Helvetica, sans-serif;
   text-shadow: black 2px 1px 0px, black 4px 2px 5px;     
}

nav.horizontal ul li a {
   background-color: rgba(255, 255, 255, 0.2);
   display: block;
   color: rgba(255, 255, 255, 0.8);
   text-align: center;
}

nav.horizontal ul li a:hover {
   background-color: rgba(255, 192, 88, 0.5);
}

/* Time Clock Styles */

div#dateNow {
   display: block;
   position: absolute;
   top: 35px;
   left: 10px;   
   background-color: transparent;
   border: hidden;
   color: rgba(255, 192, 82, 0.8);
   width: 140px;
   font-size: 0.6em;
   line-height: 1.1em;
   font-family: 'Trebuchet MS', Helvetica, sans-serif;
   font-weight: normal;
}

/* Styles for the Countdown Clock */

div#countdown {
   position: absolute;
   bottom: 50px;
   right: 15px;
   width: 45%;
   display: -webkit-flex;
   display: flex;
   -webkit-flex-flow: row nowrap;
   flex-flow: row nowrap;

}

div#countdown div {
   display: block;
   text-align: center;
   width: 100%;
   line-height: 1.2em;
   font-size: 0.5em;
   font-family: segment14, sans-serif;
   color: white;
   margin: 0px 10px;
   color: white;
   text-align: center;
   text-shadow: 0px 0px 2px black, 0px 0px 4px black, -1px 1px 8px white, 
                1px -1px 8px white, -1px 1px 12px white, 1px -1px 12px white;
}

div#countdown div span {
   font-size: 2em;   
}

/* Article Styles */

article { 
   background: white;
   display: -webkit-flex;
   display: flex;
   -webkit-flex-flow: row wrap;
   flex-flow: row wrap; 
}

article section, article nav.vertical {
   -webkit-flex: 1 1 300px;
   flex: 1 1 300px;
}

section p {
   margin: 20px;
}

/*Section 1 styles */

article section:nth-of-type(1) {
   background-color: rgba(255, 192, 0, 0.6);
}

/* Section 2 styles */

article section:nth-of-type(2) {
   background-color: rgba(255, 192, 0, 0.5);
}


/* Vertical navigation list styles */

nav.vertical {
   background-color: rgba(255, 192, 0, 0.7);
}

nav.vertical h1 {
   color: rgba(255, 255, 255, 0.7);
   text-shadow: rgba(192, 145, 0, 0.8) 2px 2px 5px;
   font-size: 1.35em;
   letter-spacing: 3px;
   text-align: center;
   padding: 10px;
   margin: 0px 0px 15px 0px;
   background-color: rgba(233, 177, 0, 0.5);
}


nav.vertical ul li {
   font-size: 0.82em;
   letter-spacing: 3px;
   text-align: center;
}


nav.vertical ul li a {
   display: block;
   padding-left: 30px;
   height: 32px;
   line-height: 32px;
   width: auto;
   color: rgb(51, 51, 51);
}

nav.vertical ul li a:hover {
   background-color: rgba(255, 192, 0, 0.45);
}


/* Page footer styles */

footer {
   clear: left;
   display: block;
}

footer address {
   display: block;
   font-style: normal;
   text-align: center;
   font-size: 0.5em;
   line-height: 20px;
   height: 20px;
   background-color: rgb(215, 152, 0);
   color: white;
}

/* =============================================
   Tablet and Desktop Styles: greater than 510px
   =============================================
*/
@media only screen and (min-width:511px) {
   
   header > h1 {
      font-size: 1.9em;
   }
   
   header > h2 {
      font-size: 1.1em;
   }
   
   div#dateNow {
      font-size: 0.9em;
      line-height: 1em;
   } 
   
   div#countdown {
      font-size: 1.3em;
   }
   
   footer address {
      font-size: 0.6em;
   }     
}

/* =============================================
   Tablet and Desktop Styles: greater than 640px
   =============================================
*/
@media only screen and (min-width:641px) {
      
   header > h1 {
      font-size: 2.4em;
   }
   
   header > h2 {
      font-size: 1.3em;
   }  
      
   nav.horizontal ul li {
      font-size: 1em;
   }
   
   div#dateNow {
      font-size: 1em;
      line-height: 1.1em;
      top: 40px;
   }   
   
   div#countdown  {
      font-size: 1.5em;
   }    
   
   footer address {
      font-size: 0.8em;
   }   
}

/* =============================================
   Tablet and Desktop Styles: greater than 720px
   =============================================
*/
@media only screen and (min-width: 721px) {
   header > h1 {
      font-size: 3.3em;
   }

   header > h2 {
      font-size: 1.5em;
   }
   
   div#dateNow {
      font-size: 1.1em;
      line-height: 1.2em;
      top: 40px;
   }
   
   div#countdown {
      font-size: 1.7em;
   }      
}

/* =============================================
   Tablet and Desktop Styles: greater than 1020px
   =============================================
*/
@media only screen and (min-width: 1021px) {

   body {
      margin: 40px auto;
   }   
}