let x1, y1, x2, y2
function setup() {
	createCanvas(windowWidth,windowHeight)
	background(211)

	// midpoint_circle_drawing(0, 0, 200)
	midpoint_circle_drawing(300, 300, 200)
}

// function draw(){
// 	stroke(255, 0, 255)
// 	line(100, 300, 500, 300);
// 	line(300, 100, 300, 500);
// }

function midpoint_circle_drawing(xc, yc, r) {
	let x = 0, y = r
	let p
	point(x + xc, y + yc)

	if (Number.isInteger(r)) {
		// initial decision parameter
		p = 1 - r
	} 

	else {
		// initial decision parameter
		p = (5 / 4) - r
	}

	while (x <= y) {
		if (p < 0) {
			x = x + 1
			
			// decision parameter
			p = p + 2 * x + 1
		} 
		
		else {
			x = x + 1
			y = y - 1

			// decision parameter
			p = p + (2 * x) - (2 * y) + 1
		}

		point(x + xc, y + yc)
		point(y + xc, x + yc)
		point(y + xc, -x + yc)
		point(-x + xc, y + yc)

		point(-x + xc, -y + yc)
		point(-y + xc, -x + yc)
		point(-y + xc, x + yc)
		point(x + xc, -y + yc)
	}
}