let x1, y1, x2, y2

function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)
	midpoint_ellipse_drawing(300, 300, 100, 200)
}

// function draw(){
// 	stroke(255, 0, 255)
// 	line(100, 300, 500, 300);
// 	line(300, 100, 300, 500);
// }

function midpoint_ellipse_drawing(xc, yc, rx, ry) {
	let x = 0, y = ry
	point(x + xc, y + yc)
	point(-x + xc, y + yc)
	point(x + xc, -y + yc)
	point(-x + xc, -y + yc)
	let p1, p2
	
	// for region 1

	// initial decision parameter
	p1 = (ry * ry) - (rx * rx * ry)+ (0.25 * rx * rx)

	while ((2 * ry * ry * x) <= (2 * rx * rx * y)) {
		if (p1 < 0) {
			x = x + 1
			p1 = p1 + (2 * ry * ry * x) + (ry * ry) 
		} else {
			x = x + 1
			y = y - 1
			p1 = p1 + (2 * ry * ry * x) - (2 * rx * rx * y) + (ry * ry)
		}
		
		point(x + xc, y + yc)
		point(-x + xc, y + yc)
		point(x + xc, -y + yc)
		point(-x + xc, -y + yc)
	}
	
	// for region 2
	
	// initial decision parameter
	p2 = ((x + 0.5) * (x + 0.5) * ry * ry) + ((y - 1) * (y - 1) * rx * rx) - (rx * rx * ry * ry)

	while (y != 0) {
		if (p2 > 0) {
			y = y - 1
			p2 = p2 - (2 * y * rx * rx) + (rx * rx) 
		} else {
			x = x + 1
			y = y - 1
			p2 = p2 - (2 * y * rx * rx) + (2 * x * ry * ry) + (rx * rx)  
		}
		point(x + xc, y + yc)
		point(-x + xc, y + yc)
		point(x + xc, -y + yc)
		point(-x + xc, -y + yc)
	}
}