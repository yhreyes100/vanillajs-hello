/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  var newexcuse =
    who[getRandomInt(3)] +
    " " +
    action[getRandomInt(3)] +
    " " +
    what[getRandomInt(2)] +
    " " +
    when[getRandomInt(4)];
  document.getElementById("excuse").innerHTML = newexcuse;
  console.log("Hello Rigo from the console!");
};
