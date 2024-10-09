const prompt = require("prompt-sync")();
const name = prompt("what's your name? ");
console.log("hi", name, ":)");
const wantPlay = prompt("would u like to play ? (yes,no) ");
if (wantPlay.toLowerCase() === "yes") {
  console.log("ok", name, "will play");
  const leftOrRight = prompt("chose side left or Right to go there...");
  if (leftOrRight.toLowerCase() === "left") {
    const cross = prompt(
      "you went left and there is a bridge in front of you! would you cross it ? (cross) ",
    );

    if (cross.toLowerCase() === "cross") {
      console.log("oh shit you fall into dark whole:(, you lose");
    } else {
      console.log("invalid enter :)");
    }
  } else if (leftOrRight.toLowerCase() === "right") {
    console.log("woow!! you win :) this was easy ");
  } else {
    console.log("wrong entery !!");
  }
} else if (wantPlay.toLowerCase() === "no") {
  console.log("why :( good bye ");
} else {
  console.log("oh", name, "you enter wrrong :(");
}
