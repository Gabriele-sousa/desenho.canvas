const canvas = document.getElementById('kirby');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle="#FFCBF6";
ctx.arc(950, 400, 150, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(880,270);
ctx.bezierCurveTo(850, 200, 710, 300, 800,400);
ctx.stroke();
ctx.fill();

