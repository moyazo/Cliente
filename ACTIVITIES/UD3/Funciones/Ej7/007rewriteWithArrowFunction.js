"use strict";

let ask = (question, yes, no) => {confirm(question) == true? yes() : no()};

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

ask();



