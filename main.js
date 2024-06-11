// Functionize Minecraft Fishing Start Code

// fish count
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// variables
let img = document.getElementById("result-img");
let cod = document.getElementById("num-cod");
let salmon = document.getElementById("num-salmon");
let tropical = document.getElementById("num-tropical");
let puffer = document.getElementById("num-puffer");
let plus5btn = document.getElementById("plus5");
let untill200btn = document.getElementById("untill200");
let userfish = document.getElementById("userfish");
let userbtn = document.getElementById("userbtn");
let fishbox = document.getElementById("fishbox");
let sortbnt = document.getElementById("sortbtn");

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5btn.addEventListener("click", plusfive);
untill200btn.addEventListener("click", until200);
userbtn.addEventListener("click", fishinput);

function fishBtnClicked() {
  // determine character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //fish with steve
    // steve fish simulator

    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod - numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.9) {
      img.src = "img/Raw-Salmon.png";

      numSalmon - numSalmon++;
      salmon.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      console.log("tropical fish");
      img.src = "img/Tropical-Fish.png";

      numTropical - numTropical++;
      tropical.innerHTML = numTropical;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer - numPuffer++;
      puffer.innerHTML = numPuffer;
    }
  } else if (character == "alex") {
    //fish with alex

    //alex fishign
    let randNum = Math.random();
    if (randNum < 0.1) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod - numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.2) {
      img.src = "img/Raw-Salmon.png";
      numSalmon - numSalmon++;
      salmon.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      console.log("tropical fish");
      img.src = "img/Tropical-Fish.png";
      numTropical - numTropical++;
      tropical.innerHTML = numTropical;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer - numPuffer++;
      puffer.innerHTML = numPuffer;
    }
  }
  // fish with villager\
  else if (character == villager) {
    let randNum = Math.random();
    if (randNum < 0.25) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod - numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.5) {
      img.src = "img/Raw-Salmon.png";
      numSalmon - numSalmon++;
      salmon.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      console.log("tropical fish");
      img.src = "img/Tropical-Fish.png";
      numTropical - numTropical++;
      tropical.innerHTML = numTropical;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer - numPuffer++;
      puffer.innerHTML = numPuffer;
    }

    let fishImage = document.createElement("img");
    fishImage.src = img.src;
    fishImage.width = "25";
    fishbox.appendChild(fishImage);
  }
}

function plusfive() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
}

function fishinput() {
  let x = 0;
  console.log(+userfish.value);
  while (userfish.value > x) {
    x++;
    fishBtnClicked();
  }
}
