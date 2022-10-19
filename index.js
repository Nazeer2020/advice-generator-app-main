"use strict";

const text = document.querySelector(".text");
const id = document.querySelector(".id");
const btn = document.querySelector(".btn");

async function getAdvice() {
  const randomNumber = Math.floor(Math.random() * 118);
  try {
    const data = await fetch(
      `https://api.adviceslip.com/advice/${randomNumber}`
    );
    const res = await data.json();

    updatingUI(res);
  } catch (error) {
    console.log(error);
  }
}

function updatingUI(res) {
  text.innerText = `"${res.slip.advice}"`;
  id.innerText = `Advice #${res.slip.id}`;
}

btn.addEventListener("click", getAdvice);


window.addEventListener('load',getAdvice);
