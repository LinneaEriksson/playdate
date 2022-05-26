function draw_box_at(x, y) {
  const rectangle = new Graphics();
  rectangle
    .beginFill(colors[World[y][x]])
    .lineStyle(2, 0xd9d3d0, 1)
    .drawRect(x * 30, y * 30, 30, 30)
    .endFill();
  app.stage.addChild(rectangle);
}

function draw_world() {
  for (let y = 0; y < World.length; y++) {
    for (let x = 0; x < World[0].length; x++) {
      draw_box_at(x, y);
    }
  }
}

function next_shape() {
  console.log('new shape');
  activeShape = shapes[randomInt()];
  ShapePositionX = 4;
  ShapePositionY = 0;
}

function add_shape_to_world(shape) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      if (shape[y][x] != 0) {
        if (ShapePositionY + y < 20) {
          World[y + ShapePositionY][x + ShapePositionX] = shape[y][x];
        }
      }
    }
  }
}

function remove_shape_from_world(shape) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      if (shape[y][x] != 0) {
        if (ShapePositionY + y < 19) {
          World[y + ShapePositionY][x + ShapePositionX] = 0;
        }
      }
    }
  }
}

function check_collision_left(shape) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      if (shape[y][x] != 0) {
        //bottom
        if (ShapePositionX + x <= 0) {
          return 2;
        }
      }
    }
  }
  return 0;
}

function check_collision_right(shape) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      if (shape[y][x] != 0) {
        //bottom
        if (ShapePositionX + x >= 9) {
          return 3;
        }
      }
    }
  }
  return 0;
}

function check_collision_bottom(shape) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      if (shape[y][x] != 0) {
        //bottom
        if (ShapePositionY + y >= 19) {
          next_shape();
          return 1;
        }
      }
    }
  }
  return 0;
}
function check_collision(shape) {
  response = check_collision_left(shape);
  response = check_collision_right(shape);
  response = check_collision_bottom(shape);
  return response;
}

function move_down() {
  if (check_collision(activeShape[rotation]) != 1) {
    remove_shape_from_world(activeShape[rotation]);
    ShapePositionY += 1;
    add_shape_to_world(activeShape[rotation]);
  }
}

// function randomInt() {
//   return Math.floor(Math.random() * 7);
// }