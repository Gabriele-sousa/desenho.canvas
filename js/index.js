const canvas = document.getElementById('kirby');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.strokeStyle="#F1C200";
ctx.fillStyle="#FFF118";

ctx.moveTo(860, 195);
ctx.lineTo(900, 160);


ctx.lineTo(850, 160);


ctx.lineTo(830, 110);


ctx.lineTo(815, 160);


ctx.lineTo(770, 160);


ctx.lineTo(805, 195);


ctx.lineTo(790, 245);



ctx.lineTo(830, 210);



ctx.lineTo(870, 243);


ctx.lineTo(860, 195);;
ctx.stroke();
ctx.fill();

ctx.beginPath();
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


ctx.beginPath();
ctx.fillStyle="#f30000";
ctx.strokeStyle="#c40000";
ctx.moveTo(930,548);
ctx.bezierCurveTo(830, 650, 710, 560, 840, 500);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1052,510);
ctx.bezierCurveTo(1200, 670, 970, 600, 970, 548);
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.fillStyle="#FFCBF6";
ctx.strokeStyle="#ff7fe9";
ctx.arc(950, 400, 150, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.fillStyle="#A91818";
ctx.arc(950, 430, 30, 0, Math.PI, false);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.arc(900, 390, 25, 0, Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#000000";
ctx.strokeStyle="#000000";
ctx.arc(1000, 380, 25, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.strokeStyle="white";
ctx.arc(1010, 370, 10, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#FF9EF2";
ctx.strokeStyle="#FF9EF2";
ctx.arc(1010, 430, 15, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#FF9EF2";
ctx.strokeStyle="#FF9EF2";
ctx.arc(890, 430, 15, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();