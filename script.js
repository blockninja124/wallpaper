
var root = {
  wavecolor: {
    r: 32, //()255.  255, 165,10
    g: 113, //10
    b: 125 //182
  },
  rainbowSpeed: 0.5,
  rainbow: false,
  matrixspeed: 100,//default 110
  enableGlitches: true,
  glitchcolor: {
    r: 117,
    g: 9,
    b: 24
  },
  profile: false,
  chars: "1.0"
};

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var hueFw = false;
var hue = -0.01;

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;


var konkani = root.chars


// the characters
profile = root.profile

console.log(profile)

if (profile == "greek") {
  console.log("e")
  var konkani = "Δ.Θ.Ξ.Σ.Φ.Ψ.Ω.α.β.θ.φ.ω.σ"
}
else if (profile == "korean") {
  var konkani = "ㄱ.ㄲ.ㄴ.ㄷ.ㄸ.ㄹ.ㅁ.ㅂ.ㅃ.ㅅ.ㅆ.ㅇ.ㅈ.ㅉ.ㅊ.ㅋ.ㅌ.ㅍ.ㅎ"
}
else if (profile == "english") {
  //why
  var konkani = "a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z"
}
else if (profile == "1") {
  root = {
    wavecolor: {
      r: 0, //()255.  255, 165,10
      g: 150, //10
      b: 0 //182
    },
    rainbow: false,
    matrixspeed: 100,
    enableGlitches: true,
    glitchcolor: {
      r: 200,
      g: 0,
      b: 0
    }
  }

  var konkani = "1.0"

}
else if (profile == "2") {
  root = {
    wavecolor: {
      r: 255,
      g: 10,
      b: 182
    },
    rainbow: false,
    matrixspeed: 100,
    enableGlitches: true,
    glitchcolor: {
      r: 0,
      g: 0,
      b: 200
    }
  }

  var konkani = "ㄱ.ㄲ.ㄴ.ㄷ.ㄸ.ㄹ.ㅁ.ㅂ.ㅃ.ㅅ.ㅆ.ㅇ.ㅈ.ㅉ.ㅊ.ㅋ.ㅌ.ㅍ.ㅎ"
}
else if (profile == "3") {
  root = {
    wavecolor: {
      r: 32,
      g: 113,
      b: 125
    },
    rainbow: false,
    matrixspeed: 100,
    enableGlitches: true,
    glitchcolor: {
      r: 117,
      g: 9, //2
      b: 24 //2
    }
  }

  var konkani = "ㄱ.ㄲ.ㄴ.ㄷ.ㄸ.ㄹ.ㅁ.ㅂ.ㅃ.ㅅ.ㅆ.ㅇ.ㅈ.ㅉ.ㅊ.ㅋ.ㅌ.ㅍ.ㅎ"
}

//Greek:
//
//Code:

var default_konkani = konkani


if (root.enableGlitches) {
  var konkani = konkani + ".#";
}

for (var i = 0; i < 101; i++) {
  konkani += "." + default_konkani
}
//

//var konkani = "ㄱ.ㄲ.ㄴ.ㄷ.ㄸ.ㄹ.ㅁ.ㅂ.ㅃ.ㅅ.ㅆ.ㅇ.ㅈ.ㅉ.ㅊ.ㅋ.ㅌ.ㅍ.ㅎ.h"
//var konkani  = "Δ.Θ.Ξ.Σ.Φ.Ψ.Ω.α.β.θ.φ.ω.σ.h"
//var konkani = "/.#.*.e.9.h"
// converting the string into an array of single characters
var characters = konkani.split(".");
//var font_size = 14;
var font_size = 40;

var columns = c.width / font_size;    // number of columns for the rain
var gradient = ctx.createLinearGradient(0, 10, 0, 200);
// an array of drops - one per column
var drops = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++)
  drops[x] = 1;

// drawing the characters
function draw() {
  // Get the BG color based on the current time i.e. rgb(hh, mm, ss)
  // translucent BG to show trail

  ctx.fillStyle = "rgba(0,0,0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#BBB"; // grey text
  ctx.font = "bold " + font_size + "px pragmatapro";

  // looping over drops
  for (var i = 0; i < drops.length; i++) {
    // background color
    ctx.fillStyle = "rgba(10,10,10, 1)";
    ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
    // a random chinese character to print
    var random = Math.floor(Math.random() * characters.length);
    var text = characters[random];
    // x = i * font_size, y = value of drops[i] * font_size

    if (root.rainbow) {
      hue += (hueFw) ? 0.01 : -0.01;
      var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
      var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
      var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
      ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
    } else {
      ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';
    }
    if (characters[random] == "#") {
      ctx.fillStyle = 'rgba(' + root.glitchcolor.r + ',' + root.glitchcolor.g + ',' + root.glitchcolor.b + ')';
      var random = Math.floor(Math.random() * characters.length);
      var text = characters[random];
    }


    ctx.fillText(text, i * font_size, drops[i] * font_size);
    // Incrementing Y coordinate
    drops[i]++;
    // sending the drop back to the top randomly after it has crossed the screen
    // adding randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;
  }
}

setInterval(draw, root.matrixspeed);


function livelyPropertyListener(name, val) {
  switch (name) {
    case "matrixColor":
      root.wavecolor = hexToRgb(val);
      break;
    case "rainBow":
      root.rainbow = val;
      break;
    case "enableGlitches":
      root.enableGlitches = val;
      break;
    case "rainbowSpeed":
      root.rainbowSpeed = val / 100;
      break;
    case "profile":
      root.profile = val;
      break;
    case "glitchColor":
      root.glitchcolor = hexToRgb(val);
      break;
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
