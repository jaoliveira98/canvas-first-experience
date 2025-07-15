export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color = "black"
): void => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);

  // Circle background colour
  ctx.fillStyle = color;
  ctx.fill();

  // Circle border colour
  ctx.strokeStyle = "#000000";
  ctx.stroke();
};
