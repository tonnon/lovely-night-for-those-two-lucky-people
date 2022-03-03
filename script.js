const app = document.querySelector("#app");
app.classList.add("draw");

let div = "", img = "";

let fn = {
  sizeWidth: function() {
    return document.body.clientWidth;
  },
  sizeHeight: function() {
    return document.body.clientHeight;
  },
  random: function(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
};

//create constellation
div = document.createElement("div");
div.classList.add("draw__contellation");
app.appendChild(div);

//create 50 stars
for(let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.classList.add("draw__star");
  star.style.left = fn.random(0, fn.sizeWidth()) + "px";
  star.style.top = fn.random(0, fn.sizeHeight() - 300) + "px";
  star.style.animationDelay = "0." + fn.random(0, 10) + "s";
  let sizeStar = fn.random(2, 5);
  star.style.width = sizeStar + "px";
  star.style.height = sizeStar + "px";
  div.appendChild(star);
}

//create draw couple inside draw app
let couple = document.createElement("div");
couple.classList.add("draw__couple");
app.appendChild(couple);

img = document.createElement("img");
img.setAttribute("src", "https://i.ibb.co/cQXjQb9/couple.png");
couple.appendChild(img);

//create balloon a inside draw couple
div = document.createElement("div");
div.classList.add("draw__balloon-a");
couple.appendChild(div);

img = document.createElement("img");
img.setAttribute("src", "http://www.interaminense.com/dia-dos-namorados/src/img/balloon-a.png");
div.appendChild(img);

//create balloon b inside draw couple
div = document.createElement("div");
div.classList.add("draw__balloon-b");
couple.appendChild(div);

img = document.createElement("img");
img.setAttribute("src", "http://www.interaminense.com/dia-dos-namorados/src/img/balloon-b.png");
div.appendChild(img);
