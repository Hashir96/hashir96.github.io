const btnRandomPrime = document.getElementById("btn-prime");
const btnRandomRare = document.getElementById("btn-rare");
const btnRandomAll = document.getElementById("btn-all");
const btnRandomKek = document.getElementById("btn-kek");

// Image variables to select the images
const imgActive = document.getElementById("active-img");
const imgRare = document.getElementById("rare-img");
const imgAll = document.getElementById("map-img");
const imgKek = document.getElementById("kek-img");

// Select Text to replace
const textCasePrime = document.querySelector(".selectedPrime");
const textCaseRare = document.querySelector(".selectedRare");
const textCaseAll = document.querySelector(".selectedAll");
const textCaseKek = document.querySelector(".selectedKek");

// Data Arrays

const casePrime = ["Kilowatt Case","Revolution Case","Recoil Case","Fracture Case","Dreams & Nightmares Case"];
const caseRare = ["Chroma 2 Case", "Chroma 3 Case", "Chroma Case", "Clutch Case", "CS:GO Weapon Case", "CS:GO Weapon Case 2", "CS:GO Weapon Case 3", "CS20 Case", "Danger Zone Case", "Dreams & Nightmares Case", "Falchion Case", "Fracture Case", "Gamma 2 Case", "Gamma Case", "Glove Case", "Horizon Case", "Huntsman Weapon Case", "Kilowatt Case", "Operation Bravo Case", "Operation Breakout Weapon Case", "Operation Hydra Case", "Operation Phoenix Weapon Case", "Operation Vanguard Weapon Case", "Operation Wildfire Case", "Prisma 2 Case", "Prisma Case", "Recoil Case", "Revolution Case", "Revolver Case", "Shadow Case", "Snakebite Case", "Spectrum 2 Case", "Spectrum Case", "Winter Offensive Weapon Case"];
const caseAll = ["Chroma 2 Case", "Chroma 3 Case", "Chroma Case", "Clutch Case", "CS:GO Weapon Case", "CS:GO Weapon Case 2", "CS:GO Weapon Case 3", "CS20 Case", "Danger Zone Case", "Dreams & Nightmares Case", "eSports 2013 Case", "eSports 2013 Winter Case", "eSports 2014 Summer Case", "Falchion Case", "Fracture Case", "Gamma 2 Case", "Gamma Case", "Glove Case", "Horizon Case", "Huntsman Weapon Case", "Kilowatt Case", "Operation Bravo Case", "Operation Breakout Weapon Case", "Operation Broken Fang Case", "Operation Hydra Case", "Operation Phoenix Weapon Case", "Operation Riptide Case", "Operation Vanguard Weapon Case", "Operation Wildfire Case", "Prisma 2 Case", "Prisma Case", "Recoil Case", "Revolution Case", "Revolver Case", "Shadow Case", "Shattered Web Case", "Snakebite Case", "Spectrum 2 Case", "Spectrum Case", "Winter Offensive Weapon Case"];
const caseKek = ["Operation Broken Fang Case", "Operation Phoenix Weapon Case", "Horizon Case", "eSports 2014 Summer Case", "Gamma 2 Case", "Chroma Case", "Shattered Web Case", "Dreams & Nightmares Case", "Operation Breakout Weapon Case", "CS:GO Weapon Case 2", "Prisma 2 Case", "Spectrum Case", "Gamma Case", "Glove Case", "Recoil Case", "Chroma 3 Case", "Operation Vanguard Weapon Case", "Operation Riptide Case", "Spectrum 2 Case", "Clutch Case", "Kilowatt Case", "Prisma Case", "Chroma 2 Case", "CS:GO Weapon Case 3", "Huntsman Weapon Case", "Revolver Case", "Snakebite Case", "Shadow Case", "Revolution Case", "Winter Offensive Weapon Case", "Falchion Case", "Operation Wildfire Case", "eSports 2013 Winter Case", "CS20 Case", "Danger Zone Case", "Fracture Case"];

const primeImg = ['./img/kilowatt-case.png','./img/revolution-case.png','./img/recoil-case.png','./img/fracture-case.png','./img/dreams-nightmares.png'];
const rareImg = ['./img/chroma2-case.png','./img/chroma3-case.png','./img/chroma-case.png','./img/clutch-case.png','./img/weapon-case.png','./img/weapon-case2.png','./img/weapon-case3.png','./img/cs20-case.png','./img/danger-zone-case.png','./img/dreams-nightmares.png','./img/falchion-case.png','./img/fracture-case.png','./img/gamma2-case.png','./img/gamma-case.png','./img/glove-case.png','./img/horizon-case.png','./img/huntsman-case.png','./img/kilowatt-case.png','./img/bravo-case.png','./img/breakout-case.png','./img/hydra-case.png','./img/phoenix-case.png','./img/vanguard-case.png','./img/wildfire-case.png','./img/prisma2-case.png','./img/prisma-case.png','./img/recoil-case.png','./img/revolution-case.png','./img/revolver-case.png','./img/shadow-case.png','./img/snakebite-case.png','./img/spectrum2-case.png','./img/spectrum-case.png','./img/winter-offensive-case.png'];
const allImg = ['./img/chroma2-case.png','./img/chroma3-case.png','./img/chroma-case.png','./img/clutch-case.png','./img/weapon-case.png','./img/weapon-case2.png','./img/weapon-case3.png','./img/cs20-case.png','./img/danger-zone-case.png','./img/dreams-nightmares.png','./img/esports-case.png','./img/esports-winter-case.png','./img/esports-summer-case.png','./img/falchion-case.png','./img/fracture-case.png','./img/gamma2-case.png','./img/gamma-case.png','./img/glove-case.png','./img/horizon-case.png','./img/huntsman-case.png','./img/kilowatt-case.png','./img/bravo-case.png','./img/breakout-case.png','./img/broken-fang-case.png','./img/hydra-case.png','./img/phoenix-case.png','./img/riptide-case.png','./img/vanguard-case.png','./img/wildfire-case.png','./img/prisma2-case.png','./img/prisma-case.png','./img/recoil-case.png','./img/revolution-case.png','./img/revolver-case.png','./img/shadow-case.png','./img/shattered-web-case.png','./img/snakebite-case.png','./img/spectrum2-case.png','./img/spectrum-case.png','./img/winter-offensive-case.png'];
const kekImg = ['./img/broken-fang-case.png','./img/phoenix-case.png','./img/horizon-case.png','./img/esports-summer-case.png','./img/gamma2-case.png','./img/chroma-case.png','./img/shattered-web-case.png','./img/dreams-nightmares.png','./img/breakout-case.png','./img/weapon-case2.png','./img/prisma2-case.png','./img/spectrum-case.png','./img/gamma-case.png','./img/glove-case.png','./img/recoil-case.png','./img/chroma3-case.png','./img/vanguard-case.png','./img/riptide-case.png','./img/spectrum2-case.png','./img/clutch-case.png','./img/kilowatt-case.png','./img/prisma-case.png','./img/chroma2-case.png','./img/weapon-case3.png','./img/huntsman-case.png','./img/revolver-case.png','./img/snakebite-case.png','./img/shadow-case.png','./img/revolution-case.png','./img/winter-offensive-case.png','./img/falchion-case.png','./img/wildfire-case.png','./img/esports-winter-case.png','./img/cs20-case.png','./img/danger-zone-case.png','./img/fracture-case.png'];

//

let randomIndex;
let lastRandom = null;

// Randomizer Function

function getRandomNumber(arr) {
  // get random index value
  do{
   randomIndex = Math.floor(Math.random() * arr.length);
  }
  // get random item
  while ( randomIndex === lastRandom){
    lastRandom = randomIndex; 
    const item = arr[randomIndex];
    return item;
  }
  // console.log(item)
}

// Random Prime Drops

btnRandomPrime.addEventListener("click", function () {
  const randomNumber = getRandomNumber(casePrime);
  const caseNumber = primeImg[randomIndex];
//   console.log(randomNumber);
  textCasePrime.textContent = randomNumber;
  imgActive.src = caseNumber;
});

// Random Prime + Rare drops
btnRandomRare.addEventListener("click", function () {
  const randomNumber = getRandomNumber(caseRare);
  const caseNumber = rareImg[randomIndex];
//   console.log(randomNumber);
  textCaseRare.textContent = randomNumber;
  imgRare.src = caseNumber;
});

// Random All Case drops
btnRandomAll.addEventListener("click", function () {
  const randomNumber = getRandomNumber(caseAll);
  const caseNumber = allImg[randomIndex];
//   console.log(randomNumber);
  textCaseAll.textContent = randomNumber;
  imgAll.src = caseNumber;
});

// Random CT Rifle

btnRandomKek.addEventListener("click", function () {
  const randomNumber = getRandomNumber(caseKek);
  const caseNumber = kekImg[randomIndex];
//   console.log(randomNumber);
  textCaseKek.textContent = randomNumber;
  imgKek.src = caseNumber;
});