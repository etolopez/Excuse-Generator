/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let createExcuse = function() {
    let randWho = who[Math.floor(Math.random() * who.length)];
    let randAction = action[Math.floor(Math.random() * action.length)];
    let randWhat = what[Math.floor(Math.random() * what.length)];
    let randWhen = when[Math.floor(Math.random() * when.length)];
    return `${randWho} ${randAction} ${randWhat} ${randWhen}`;
  };

  let paragraph = document.getElementById("paragraphBody");
  paragraph.innerText = `${createExcuse()}`;

  document.getElementById("excuseButton").addEventListener("click", function() {
    paragraph.innerHTML = createExcuse();
  });
};
