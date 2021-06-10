const context = document.querySelector("canvas").getContext("2d");

context.canvas.addEventListener("mousemove", mouse.move);

const R1 = new Rectangle(0, 0, 64, 64, "#071013");
const R2 = new Rectangle(
  context.canvas.width * 0.5 - 32,
  context.canvas.height * 0.5 - 32,
  64,
  64,
  "#EB5160"
);

const loop = () => {
  R1.x = mouse.pointerX - 32;
  R1.y = mouse.pointerY - 32;

  context.fillStyle = "#8d99ae";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  R2.draw();
  R1.draw();

  document.getElementById("collision-alert").style.visibility = "hidden";

  if (R1.collidesWith(R2)) {
    document.getElementById("collision-alert").style.visibility = "visible";
  }
  window.requestAnimationFrame(loop);
};

// start the canvas loop
window.requestAnimationFrame(loop);
