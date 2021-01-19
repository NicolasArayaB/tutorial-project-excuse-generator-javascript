let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys ", "the car "];
let when = ["before the class ", "right on time ", "when I finished ", "during my lunch ", "when I was playing "];

function rand(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function excuseGen() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = who[rand(3, 0)] + action[rand(3, 0)] + what[rand(2, 0)] + when[rand(4, 0)];
}

window.onload = function() {
  excuseGen();
  document.getElementById("btn").addEventListener("click", excuseGen);
};
