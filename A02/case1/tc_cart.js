"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Jeremy S
   Date:   Feb 6th
   
   Filename: tc_cart.js	
*/

// Declare a variable for the total cost of the order
var orderTotal = 0;

// Declare a variable to hold the HTML code for the shopping cart
var cartHTML = "<table>\n" +
               "  <tr>\n" +
               "    <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>\n" +
               "  </tr>\n";

// Define the item arrays
var item = [10582, 23015, 41807, 10041];
var itemDescription = [
    "1975 Green Bay Packers Football (signed), Item 10582",
    "Tom Landry 1955 Football Card (unsigned), Item 23015",
    "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
    "Protective Card Sheets, Item 10041"
];
var itemPrice = [
    149.93,
    89.98,
    334.93,
    22.67
];
var itemQty = [
    1,
    1,
    1,
    4
];

// Loop through each item in the item array
for (var i = 0; i < item.length; i++) {
    cartHTML += "  <tr>\n" +
                "    <td><img src='tc_item.png' alt='" + item[i] + "' /></td>\n" +
                "    <td>" + itemDescription[i] + "</td>\n" +
                "    <td>$" + itemPrice[i].toFixed(2) + "</td>\n" +
                "    <td>" + itemQty[i] + "</td>\n";

    var itemCost = itemPrice[i] * itemQty[i];

    cartHTML += "    <td>$" + itemCost.toFixed(2) + "</td>\n" +
                "  </tr>\n";

    orderTotal += itemCost;
}

// Add subtotal row and close the table
cartHTML += "  <tr>\n" +
            "    <td colspan='4'>Subtotal</td>\n" +
            "    <td>$" + orderTotal.toFixed(2) + "</td>\n" +
            "  </tr>\n" +
            "</table>\n";

// Apply the cartHTML value to the inner HTML of the div element with the ID "cart"
document.getElementById("cart").innerHTML = cartHTML;

// Debugging: Display the order total in the console
console.log("Order Total: $" + orderTotal.toFixed(2));