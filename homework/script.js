'use strickt'

let age = prompt("How old are you?");
let experience = prompt ("Your experience?");
let color = prompt ("Color of your skin?");
let gender = prompt ("Gender?");

if (age>=30 && experience>=3 && color === "white" && gender === "female") {
    alert('You are accepted');
}  else {(false)
    alert('You are not accepted or you fill incorrect info!')
}

console.log(age);
console.log(experience);
console.log(color);
console.log(gender);