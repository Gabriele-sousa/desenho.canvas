const canvas = document.getElementById('kirby');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle="#FFCBF6";
ctx.strokeStyle="#ff7fe9";
ctx.arc(950, 400, 150, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(885,265);
ctx.bezierCurveTo(850, 200, 710, 300, 800,400);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(1100,380);
ctx.bezierCurveTo(1175, 500, 1070, 500, 1060, 500);
ctx.stroke();
ctx.fill();


