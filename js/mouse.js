const mouse = {
  // mouse position
  pointerX: 0,
  pointerY: 0,

  move: (event) => {
    // Get the location of our canvas element
    var rectangle = context.canvas.getBoundingClientRect();

    // store the position of the move event inside the pointer variables
    mouse.pointerX = event.clientX - rectangle.left;
    mouse.pointerY = event.clientY - rectangle.top;
  },
};
