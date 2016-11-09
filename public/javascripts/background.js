var widthCount, heightCount;
var squares = [];
var SQUARE_SIZE = 40;
console.log("Loading");
initialize();

function initialize() {
  widthCount = view.size.width / SQUARE_SIZE;
  heightCount = view.size.height / SQUARE_SIZE;
  squares = [];

  for (i = 0; i < widthCount; i++) {
    for (j = 0; j < heightCount; j++) {
      var obj = {
        rect: new Rectangle(i, j, i+SQUARE_SIZE, j+SQUARE_SIZE),
        direction: 'up', // True is up and false is down
        rg: 0,
        b: 255
      };

      squares.push(obj);
    }
  }
  console.log("Initializing");
}

function onFrame(event) {
  for (i = 0; i < squares.length; ++i) {

    if (squares[i].direction == 'up') {
      if (!(squares[i].rg > 0)) {
        if (squares[i].b < 255-75) {
          if (squares[i].direction == 'up') {
            squares[i].direction = 'down';
          } else  {
            squares[i].direction == 'up';
          }
        } else {
          if (Math.floor(Math.random() * (255 - squares[i].b) * (squares[i].rect.height/2)) > 50) {
            if (squares[i].direction == 'up') {
              squares[i].direction = 'down';
            } else  {
              squares[i].direction == 'up';
            }
          }
        }
      }
    } else {
      if (!(squares[i].b < 255)) {
        if (squares[i].rg > 75) {
          if (squares[i].direction == 'up') {
            squares[i].direction = 'down';
          } else  {
            squares[i].direction == 'up';
          }
        } else {
          if (Math.floor(Math.random() * squares[i].rg * (squares[i].rect.height/2)) > 50) {
            if (squares[i].direction == 'up') {
              squares[i].direction = 'down';
            } else  {
              squares[i].direction == 'up';
            }
          }
        }
      }
    }

    if (squares[i].direction == 'up') {
      if (squares[i].b < 255) {
        squares[i].b += 1;
      } else {
        squares[i].rg -= 1;
      }
    } else {
      if (squares[i].rg > 0) {
        squares[i].rg += 1;
      } else {
        squares[i].b -= 1;
      }
    }

    squares[i].rect.fillColor = new Color(squares[i].rg/255, squares[i].rg/255, squares[i].b/255);
    console.log(squares[i].rg + " " + squares[i].rg + " " + squares[i].b);
  }
}

function onResize(event) {
  initialize();
}
