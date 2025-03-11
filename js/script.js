function getArea(radius) {
  var area = Math.PI * radius * radius;
  return area;
}
function getSqrt(number) {
  var sqrt = Math.sqrt(number);
  return sqrt;
}
function cosAngle(angle) {
  var newAngle = angle * (Math.PI / 180);
  var cos = Math.cos(newAngle);
  return cos.toFixed(4);
}
var radius = prompt("What is the value of circle's radius");
alert("The area of the circle is " + getArea(Number(radius)));

var number = prompt("What is the value you want to calculate its square root");
alert("Square root of " + number + " is " + getSqrt(Number(number)));

var angle = prompt("What is the angle you want to calculate its cos value");
document.writeln("cos " + angle + " is " + cosAngle(Number(angle)));
