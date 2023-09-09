const canvas = document.getElementById("gamearea");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let radius = 30;
let speed = 5;

let up = false;
let down = false;
let left = false;
let right = false;

function draw_game() {
    setBG();
  requestAnimationFrame(draw_game);
 
  clear_screen();
  drawGreenBlob();
  game_inputs();
  check_boundry();
}

function setBG(){
    if (Math.round(Math.random())){
      return "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png";
    } else {
      return "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png";
    }
  }
  
  
  
  
function check_boundry()
{
    if(y<radius)
    {
        y=radius;
    }
    if(y>canvas.height-radius)
    {
        y=canvas.height-radius;
    }
    if(x<radius)
    {
x=radius;
    }
      if(x>canvas.width-radius)
      {
x=canvas.width-radius;
      }
}

function clear_screen() {
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#424d93";
  ctx.fill();
}

function game_inputs() {
  if (up) {
    y = y - speed;
  }
  if (down) {
    y = y + speed;
  }
  if (left) {
    x = x - speed;
  }
  if (right) {
    x = x + speed;
  }
}

document.body.addEventListener("keydown", keyd);
document.body.addEventListener("keyup", keyu);

function keyd(event) {
  if (event.key === "ArrowUp") {
    up = true;
  }

  if (event.key === "ArrowDown") {
    down = true;
  }

  if (event.key === "ArrowLeft") {
    left = true;
  }

  if (event.key === "ArrowRight") {
    right = true;
  }
}

function keyu(event) {
  if (event.key === "ArrowUp") {
    up = false;
  }

  if (event.key === "ArrowDown") {
    down = false;
  }

  if (event.key === "ArrowLeft") {
    left = false;
  }

  if (event.key === "ArrowRight") {
    right = false;
  }
}

function drawGreenBlob() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

draw_game();
