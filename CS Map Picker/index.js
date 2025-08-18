const btnMap = document.getElementById("btn-map");
const btnActive = document.getElementById("btn-active");
const imgMap = document.getElementById("map-img");
const imgActive = document.getElementById("active-img");
const selectedMap = document.querySelector(".selectedMap");
const selectedActive = document.querySelector(".selectedActive");

const maps = ["Ancient","Anubis","Basalt","Dust 2","Edin","Inferno","Italy","Mirage","Nuke","Office","Overpass","Train","Vertigo"];
const activeMaps = ["Ancient","Overpass","Dust 2","Inferno","Mirage","Nuke","Train"];

const mapImg = ['./img/de_ancient.png','./img/de_anubis.jpg','./img/de_basalt.png','./img/de_dust2.png','./img/de_edin.png','./img/de_inferno.png','./img/cs_italy.png','./img/de_mirage.png','./img/de_nuke.png','./img/cs_office.png','./img/de_overpass.png','./img/de_train.png','./img/de_vertigo.jpg'];
const activeMapImg = ['./img/de_ancient.png','./img/de_overpass.png','./img/de_dust2.png','./img/de_inferno.png','./img/de_mirage.png','./img/de_nuke.png','./img/de_train.png'];

let randomIndex;
let lastRandom = null;

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

btnMap.addEventListener("click", function () {
  const randomNumber = getRandomNumber(maps);
  const mapNumber = mapImg[randomIndex];
//   console.log(randomNumber);
  selectedMap.textContent = randomNumber;
  imgMap.src = mapNumber;
});

btnActive.addEventListener("click", function () {
  const randomNumber = getRandomNumber(activeMaps);
  const activeMapNumber = activeMapImg[randomIndex];
  // console.log(activeMapNumber)
  selectedActive.textContent = randomNumber;
  imgActive.src = activeMapNumber;
});
