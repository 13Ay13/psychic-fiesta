let x1, y1, x2, y2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(211);
	DDA_line_drawing(210, 210, 350, 380);
}

function DDA_line_drawing(x1, y1, x2, y2) {
	let [dx, dy] = [x2 - x1, y2 - y1];
	let step = Math.max(dx, dy);

	let xInc = dx / step;
	let yInc = dy / step;
	let [x, y] = [x1, y1];
	point(x, y);

	while (x < x2 && y < y2) {
		x += xInc;
		y += yInc;
		point(x, y);
	}
}
