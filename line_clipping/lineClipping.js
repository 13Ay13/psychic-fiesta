let inputLines = document.getElementById("lines");

function resizeCanvas(canvas) {
    canvas.width = 480;
    canvas.height = 480;
}

function Box(name, color) {
    this.el = document.getElementById(name);
    resizeCanvas(this.el);
    
    this.width = this.el.width;
    this.height = this.el.height;
    this.color = color;
    this.ctx = this.el.getContext("2d");
    this.clear = function () {
        this.ctx.fillRect(0,0, this.width, this.height);
    }; 
  
    this.draw_lines = function (points) {
        for(let i = 0; i < points.length - 1; i += 2) {
                this.ctx.strokeStyle = 'rgb(' + rand(0,255) + ', ' + rand(0,255) + ', ' + rand(0, 255) + ')';
            // }
            this.ctx.beginPath();
            this.ctx.moveTo(points[i][0], points[i][1]);
            this.ctx.lineTo(points[i + 1][0], points[i + 1][1]);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    };
}

function ClippingWindow(ctx, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw = function() {
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.closePath();
        ctx.stroke();
    };
}

let INSIDE = 0; // 0000
let LEFT = 1;   // 0001
let RIGHT = 2;  // 0010
let BOTTOM = 4; // 0100
let TOP = 8;    // 1000

function computeOutCode(x, y, clip) {
	let code = INSIDE;
	if (x < clip.x)
		code |= LEFT;
	else if (x > clip.x + clip.w)
		code |= RIGHT;
	if (y < clip.y)
		code |= BOTTOM;
	else if (y > clip.y + clip.h)
		code |= TOP;

    return code;
}

function cohenSuther(x0, y0, x1, y1, clip) {
	let outcode0 = computeOutCode(x0, y0, clip),
    outcode1 = computeOutCode(x1, y1, clip),
    accept = false;

    while(true) {
        if((outcode0 === 0) && (outcode1 === 0) ) {
            // both endpoints lie within rectangle
            accept = true;
            break;
        } 

            else if ((outcode0 & outcode1) !== 0) {
                // both endpoints are outside rectangle, in same region
            break;
        } else {
                // some segment of line lies within rectangle
                // at least one endpoint lies outside the rectangle, pick it
            let x, y,
                outcodeOut = (outcode0 !== 0) ? outcode0 : outcode1;
                // Find intersection point by using formulae :
                // y = y1 + slope * (x - x1)
                // x = x1 + (1 / slope) * (y - y1)

            if(outcodeOut & TOP) {
            // point is above the clip rectangle
                x = x0 + (x1 - x0) * (clip.y + clip.h - y0) / (y1 - y0);
                y = clip.y + clip.h;
            } 
            
            else if(outcodeOut & BOTTOM) {
            // point is below clip rectangle
                x = x0 + (x1 - x0) * (clip.y - y0) / (y1 - y0);
                y = clip.y;
            }

            if(outcodeOut & RIGHT) {
            // point is to the right of the rectangle
                y = y0 + (y1- y0) * (clip.x + clip.w - x0) / (x1 - x0);
                x = clip.x + clip.w;
            } 
            
            else if(outcodeOut & LEFT) {
            // point is to the left of the rectangle
                y = y0 + (y1- y0) * (clip.x - x0) / (x1 - x0);
                x = clip.x;
            }

            // intersetion point x, y found
            // replace point outside rectangle by intersection point

            if(outcodeOut === outcode0) {
                x0 = x;
                y0 = y;
                outcode0 = computeOutCode(x0, y0, clip);
            } else {
                x1 = x;
                y1 = y;
                outcode1 = computeOutCode(x1, y1, clip);
            }
        }
    }

    if (accept) {
        return [[x0, y0], [x1, y1]];
    }
}

function clip_lines(points, clippingWindow) {
    let i,x0,y0,x1,y1,
        clippedLine = [],
        clipped = [];

    for (i = 0; i < points.length - 1; i+= 2) {
        x0 = points[i][0];
        y0 = points[i][1];
        x1 = points[i + 1][0];
        y1 = points[i + 1][1];
        clippedLine = cohenSuther(x0, y0, x1, y1, clippingWindow);
        if (clippedLine) {
            clipped.push(clippedLine[0]);
            clipped.push(clippedLine[1]);
        }
    }
    return clipped;
}

function scale(clipped) {
    let i,x,y,
        scaled = [],
        sx = world.width / clippingWindow.w;
        sy = world.height / clippingWindow.h;

    for(i = 0; i < clipped.length; i++) {
        x = (clipped[i][0] - clippingWindow.x) * sx;
        y = (clipped[i][1] - clippingWindow.y) * sy;
        scaled.push([x,y]);
    }

    return scaled;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generates random positions(x,y) 
function gen_lines(numLines) {
    let x,y,
        lines = [];

    Array(numLines*2).fill().map(() => {
        x = rand(0, world.width);
        y = rand(0, world.height);
        lines.push([x,y]);
    })

    return lines;
}

let world = new Box("world", 'black');
let viewport = new Box("viewport", 'white');
let clippingWindow = new ClippingWindow(world.ctx,10,10, 200,150);
let lines = [];

function setup() {
    lines = gen_lines(inputLines.value);
    update();
}

function update() {
    world.clear();
    viewport.clear();
    clippingWindow.draw();
    world.draw_lines(lines);
    // viewport.draw_lines(scale(clip_lines(lines, clippingWindow)), 'red');
    viewport.draw_lines(scale(clip_lines(lines, clippingWindow)), );
}

window.onload = setup;

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 38) {
        clippingWindow.y -= 10;
    }
    if (e.keyCode === 40) {
        clippingWindow.y += 10;
    }
    if (e.keyCode === 37) {
        clippingWindow.x -= 10;
    }
    if (e.keyCode === 39) {
        clippingWindow.x += 10;
    }
    if (e.keyCode === 61 || e.keyCode === 187) {
        clippingWindow.w += 10;
        clippingWindow.h += 10;
    }
    if (e.keyCode === 61 || e.keyCode === 187) {
        clippingWindow.w += 10;
        clippingWindow.h += 10;
    }
    if (e.keyCode === 173 || e.keyCode == 189) {
        clippingWindow.w -= 10;
        clippingWindow.h -= 10;
    }
    update();
}, false);