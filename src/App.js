const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: true,
  antialias: true,
});

app.renderer.backgroundColor = 0x233950;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// ****** TICKER ******* //

app.ticker.add((dt) => loop(dt));

app.ticker.maxFPS = 1;

let fpsCounter = 0;

function loop(dt) {
  // ** this part moves the shape downwards
  // everytime fpsCounter is dividable by 10 ** //
  fpsCounter++;
  // if (fpsCounter % 10 == 0) {
  remove_shape_from_world(activeShape);

  ShapePositionY += 1;
  add_shape_to_world(activeShape);
  check_collision(activeShape);
  // }
  // ***************************************** //

  // collision

  //add_shape_to_world(L);

  // ** this part checks if the shapes position reaches
  // the bottom of World, at which point it starts over at the top ** //
  // if (ShapePositionY + L.length >= World.length) {
  //   ShapePositionY = 0;
  // }
  // ***************************************** //

  draw_world(); // The world needs to be drawn in loop to see the update of shape's position
}

// Nästa steg efter detta är att dölja/ta bort tracen.
// Vid varje iteration så målar ni över med en ny Värld som är tom
// Världen med add_shape ändras ju bara
