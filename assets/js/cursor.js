var colour = "white";
var sparkles = 70;
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = [];
var star = [];
var starv = [];
var starx = [];
var stary = [];
var tinyx = [];
var tinyy = [];
var tinyv = [];

function setupSparkles() {
  if (document.getElementById) {
      for (var i = 0; i < sparkles; i++) {
          var rats = createDiv(3, 3);
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          document.body.appendChild(tiny[i] = rats);
          starv[i] = 0;

          var rats = createDiv(5, 5);
          rats.style.backgroundColor = "transparent";
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          var rlef = createDiv(1, 5);
          var rdow = createDiv(5, 1);
          rats.appendChild(rlef);
          rats.appendChild(rdow);
          rlef.style.top = "2px";
          rlef.style.left = "0px";
          rdow.style.top = "0px";
          rdow.style.left = "2px";
          document.body.appendChild(star[i] = rats);
      }
      setWidth();
      sparkle();
  }
}

function sparkle() {
  var c;
  if (x !== ox || y !== oy) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++) {
      if (!starv[c]) {
        star[c].style.left = (starx[c] = x) + "px";
        star[c].style.top = (stary[c] = y + 1) + "px";
        star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
        star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
        star[c].style.visibility = "visible";
        starv[c] = 50;
        break;
      }
    }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) updateStar(c);
    if (tinyv[c]) updateTiny(c);
  }
  setTimeout(sparkle, 40);
}


function updateStar(i) {
  if (--starv[i] == 25) {
    star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  }
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    starx[i] += (i % 5 - 2) / 5;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      star[i].style.left = starx[i] + "px";
    } else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  } else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }
}

function updateTiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    tinyx[i] += (i % 5 - 2) / 5;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tiny[i].style.left = tinyx[i] + "px";
    } else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  } else {
    tiny[i].style.visibility = "hidden";
  }
}

document.onmousemove = mouse;

function mouse(e) {
  if (e) {
    y = e.pageY + window.pageYOffset - sdown;
    x = e.pageX + window.pageXOffset - sleft;
  } else {
    setScroll();
    y = event.y + sdown;
    x = event.x + sleft;
  }
}


window.onscroll = setScroll;

function setScroll() {
  if (typeof (self.pageYOffset) == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  } else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = setWidth;

function setWidth() {
  var swMin = 999999;
  var shMin = 999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth > 0) {
      swMin = document.documentElement.clientWidth;
    }
    if (document.documentElement.clientHeight > 0) {
      shMin = document.documentElement.clientHeight;
    }
  }
  if (typeof (self.innerWidth) == "number" && self.innerWidth) {
    if (self.innerWidth > 0 && self.innerWidth < swMin) {
      swMin = self.innerWidth;
    }
    if (self.innerHeight > 0 && self.innerHeight < shMin) {
      shMin = self.innerHeight;
    }
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth > 0 && document.body.clientWidth < swMin) {
      swMin = document.body.clientWidth;
    }
    if (document.body.clientHeight > 0 && document.body.clientHeight < shMin) {
      shMin = document.body.clientHeight;
    }
  }
  if (swMin == 999999 || shMin == 999999) {
    swMin = 800;
    shMin = 600;
  }
  swide = swMin;
  shigh = shMin;
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
return div;
}

function newColour() {
var c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - c[1] / 2))];
c.sort(function () {
return 0.5 - Math.random();
});
return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")";
}

window.onload = setupSparkles;