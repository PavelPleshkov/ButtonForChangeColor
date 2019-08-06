"use strict";

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
  if (!document.querySelector('.try')) {
    btn.classList.add('try');
    btn.innerHTML = 'Pull me';
    container.classList.add('newContainer');
  } else {
    btn.classList.remove('try');
    btn.innerHTML = 'Click me';
    container.classList.remove('newContainer');
  }
});

// /**
//  *Function changes color of background and button with text
//  *
//  */
// function changeColor() {
//   if (!document.querySelector('.try')) {
//     btn.classList.add('try');
//     btn.innerHTML = 'Pull me';
//     container.classList.add('newContainer');
//   } else {
//     btn.classList.remove('try');
//     btn.innerHTML = 'Click me';
//     container.classList.remove('newContainer');
//   }
// }