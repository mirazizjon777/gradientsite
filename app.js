// let a = +prompt('Sonni kiriting: ')

// if(a > 0) {
//     console.log(--a);
// }
// else if(a < 0) {
//     console.log(++a);
// }
// else if(a == 0) {
//     console.log('son nolga teng.');
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzBass", i);
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else if (i % 5 == 0) {
//     console.log("Bass");
//   }
// }

// for(let a = 1; a <= 100; a++) {
//     if(a % 2 == 0) {
//         console.log(a**2);
//     } else{
//         console.log(a**3);
//     }
// }

// let a = +prompt('Sonni kiriting: ')
// let a = Math.trunc(Math.random() * 10 )

// if(a % 2 == 0) {
//     console.log(a**2);
// } else{
//     console.log(a**3);
// }

document.querySelector(".card").addEventListener("click", () => {
  let color1 = getRandom();
  let color2 = getRandom();

  let degRandom = Math.trunc(Math.random() * 360);
  document.body.style.background = `linear-gradient(${degRandom}deg, ${color1} 0%, ${color2} 0%)`;
  document.querySelector('.text').textContent = `linear-gradient(${degRandom}deg, ${color1} 0%, ${color2} 0%)`;
});
function getRandom() {
  let hexCode = "0123456789abcdef";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hexCode[Math.trunc(Math.random() * hexCode.length)];
  }
  return color;
}
// document.querySelector(".card").addEventListener("click", () => {
//   document.body.style.background = `linear-gradient(rgb(${getRandom()},${getRandom()},${getRandom()}), rgb(${getRandom()},${getRandom()},${getRandom()})`;
// });

// function getRandom() {
//   let random = Math.trunc(Math.random() * 255);
//   return random;
// }
