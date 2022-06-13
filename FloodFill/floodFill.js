import { setPixel, getPixel, colorsMatch } from './module.js'

// -----------function call------------------

function floodFill(ctx, x, y, fillColor) {
  // read the pixels in the canvas
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  // get the color we're filling
  const targetColor = getPixel(imageData, x, y);
  
  // check if we are actually filling a different color
  if (!colorsMatch(targetColor, fillColor)) {
  
    const pixelsToCheck = [x, y];
    while (pixelsToCheck.length > 0) {
      const y = pixelsToCheck.pop();
      const x = pixelsToCheck.pop();
      
      const currentColor = getPixel(imageData, x, y);
      if (colorsMatch(currentColor, targetColor)) {
        setPixel(imageData, x, y, fillColor);
        pixelsToCheck.push(x + 1, y);
        pixelsToCheck.push(x - 1, y);
        pixelsToCheck.push(x, y + 1);
        pixelsToCheck.push(x, y - 1);

        // pixelsToCheck.push(x - 1, y -1);
        // pixelsToCheck.push(x + 1, y - 1);
        // pixelsToCheck.push(x - 1, y + 1);
        // pixelsToCheck.push(x + 1, y + 1);
      }
    }
    
    // put the data back
    ctx.putImageData(imageData, 0, 0);
  }
}

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

// polygon
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(250, 70);
ctx.lineTo(270, 120);
ctx.lineTo(170, 140);
ctx.lineTo(190, 80);
ctx.lineTo(100, 60);
ctx.lineTo(50, 130);
ctx.lineTo(20, 20);

// ctx.arc(320, 320, 200, 0, Math.PI * 2, false)
// ctx.fillRect(100, 100, 330, 330)
ctx.stroke();

// polygon fill
floodFill(ctx, 40, 50, [255, 0, 0, 255]);

// rectangle fill
// floodFill(ctx, 140, 150, [255, 0, 0, 255]);

// circle fill
// floodFill(ctx, 340, 350, [255, 0, 0, 255]);


