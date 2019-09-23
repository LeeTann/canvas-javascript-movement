const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

window.addEventListener("keydown", moveSprite, false)

// keep track of x and y
let deltaX = 0
let deltaY = 0

function moveSprite(e) {
  switch(e.keyCode) {
    case 37:
      // left key pressed
      deltaX -= 5;
      break;
    case 38:
      // up key pressed
      deltaY -= 5;
      break;
    case 39:
      // right key pressed
      deltaX += 5;
      break;
    case 40:
      // down key pressed
      deltaY += 5;
      break;
  }
  e.preventDefault();
  drawTriangle()
}

function drawTriangle() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  // the triangle
  context.beginPath()
  context.moveTo(200 + deltaX, 100 + deltaY)
  context.lineTo(170 + deltaX, 150 + deltaY)
  context.lineTo(230 + deltaX, 150 + deltaY)
  context.closePath()

  // the outline
  context.linewith = 0
  context.strokeStyle = "rgba(102, 102, 102, 1)"
  context.stroke()

  // the fill color
  context.fillStyle = "rgba(255, 204, 0, 1)"
  context.fill()
}

drawTriangle()

