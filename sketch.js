stars = new Array(100)

function setup() {
	createCanvas(600, 600);
	for (var i = 0; i < stars.length-1; i++) {
		stars.push(new Star());
	}
}

function draw() {
	speed = map(mouseX, 0, width, 0, 50)
	background(0)
	translate(width/2, height/2)
	stars.forEach(function(s) {
	    s.update(speed)
	    s.show()
	})
}



