const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
function drawCircle(center) {
  ctx.beginPath();
  ctx.arc(center.x, center.y, center.r, 0, 2 * Math.PI);
  ctx.stroke();
}
function drawLine(xStart, yStart, xEnd, yEnd) {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
}