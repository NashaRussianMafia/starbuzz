
var scores = [67, 50, 46, 71, 41, 35,];

alert("You have produced the 3dh Solution, you got bubbles = " + scores[3]);
console.log(scores.length);

for( var i = 0; i <  scores.length; i++) {
document.write(" Solution " + i + " produced " + scores [i] + "</br>");
}

var max = Math.max(...scores);

document.write("Max is " + max);

var fruits = ["apple", "orange", "banana", "tomato"];
 max = Math.max (...fruits);
 document.write ( "<br/>" + max);
