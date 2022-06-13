function setup() {
  createCanvas(windowWidth, windowHeight);
  n = prompt('0 for transformations\n1 for rotation\n2 for scaling\n3 for shearing\n4 for reflection')
}

let n
let x1, x2, y1, y2, x3, y3, width, height
let Sx, Sy

function draw() {
  x1 = 200, x2 = 300, y1 = 150, y2 = 250
  tx = 150, ty = 150
  width =300, height = 300
  Sx = 1.5, Sy = 1.5

  switch(n){
    case '0':
      // rectangle after translation
      background(220);
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle before translation", x1, y1)
      pop()

      push()
      noFill()
      rect(x1, y1, width, height)
      pop()

      // rectangle after translation
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle after translation", x1+tx, y1+ty)
      pop()

      push()
      noFill()
      rect(x1+tx, y1+ty, width, height)
      pop()

      break

    case '1':
      background(220);
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle before rotation", x1, y1)
      pop()

      push()
      noFill()
      rect(x1, y1, width, height)
      pop()

      // rectangle after rotation
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle after rotation", x1+tx, y1+ty)
      pop()

      push()
      noFill()
      translate(width/2+150, height/2-30)
      rotate(PI/10)
      rect(x1, y1, width, height)
      pop()

      break
    
    case '2':
      background(220);
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle before scaling", x1, y1)
      pop()
  
      push()
      noFill()
      rect(x1, y1, width, height)
      pop()
  
      // rectangle after scaling
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle after scaling", x1+tx, y1+ty)
      pop()
  
      push()
      noFill()
      scale(1.5)
      rect(x1, y1, width, height)
      pop()
  
      break

    case '3':
      background(220);
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle before shearing", x1, y1)
      pop()
  
      push()
      noFill()
      rect(x1, y1, width, height)
      pop()
  
      // rectangle after scaling
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Rectangle after X-shearing", x1+tx-15, y1+ty)
      pop()
  
      push()
      noFill()
      translate(width / 4, height / 2);
      // ShearX multiplies the current transformation matrix by a rotation matrix
      shearX(PI / 8.0)
      // shearY(PI / 8.0)
      rect(x1, y1, width, height)
      pop()
  
      break

    case '4':
      x1=200,y1=300,x2=500,y2=300,x3=350,y3=400

      background(220);
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Triangle before reflection", x1, y1-50)
      pop()

      push()
      noFill()
      triangle(x1, y1, x2, y2, x3, y3)
      pop()

      // rectangle after scaling
      push()
      fill(0, 102, 153)
      textSize(30)
      text("Triangle after reflection", x1, y1+150)
      pop()

      push()
      noFill()
      triangle(x1,-y1+500,x2,-y2+500,x3,-y3+500)
      pop()

      break
  }
}

