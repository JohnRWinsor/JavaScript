"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: John W
   Date: 2023-02-01 
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
var cartHTML = "<table>";
cartHTML += ("<table><tr><tr>Item</tr><tr>Desscription</tr><tr>Price</tr><tr>Qty</tr><tr>Total</tr></tr>");

for (var i = 0; i <= 3; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "<td>";

   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";
   itemCost += orderTotal;
}
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";
document.getElementById('cart').innerHTML = cartHTML;




