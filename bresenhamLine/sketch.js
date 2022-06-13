let x1, y1, x2, y2

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(211)
	bresenham_line_drawing(210, 210, 350, 380)
}

function bresenham_line_drawing(x1, y1, x2, y2) {
	// slope
	let m = (y2 - y1) / (x2 - x1)
	let dx = x2 - x1
	let dy = y2 - y1
	let x = x1, y = y1
	let i = 1

	// plotting point (x, y)
	point(x, y)

	if (abs(m) < 1) {
		// initial decision parameter
		let p = 2 * dy - dx

		while (i <= abs(dx)) {
			if (p < 0) {

				// increment x by 1
				x = x + 1

				// decision parameter
				p = p + 2 * dy
				point(x, y)
				i++
			} 
			
			else {
				x = x + 1
				y = y + 1

				// decision parameter
				p = p + (2 * dy) - (2 * dx)
				point(x, y)
				i++
			}	
		}
	} 
	
	else { 
		let p = 2 * dx - dy
		while (i <= abs(dy)) {
			if (p < 0) {
				y = y + 1

				// decision parameter
				p = p + 2 * dx
				point(x, y)
				i++
			} 
			
			else {
				y = y + 1
				x = x + 1

				// decision parameter
				p = p + (2 * dx) - (2 * dy)
				point(x, y)
				i++
			}	
		}
	}
}