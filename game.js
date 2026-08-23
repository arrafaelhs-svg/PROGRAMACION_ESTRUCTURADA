const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const W = canvas.width, H = canvas.height;
const keys = {};
let game, last = 0, animation;

addEventListener('keydown', e => {
  keys[e.key.toLowerCase()] = true;
  if (['arrowleft', 'arrowright', 'arrowup', ' '].includes(e.key.toLowerCase())) e.preventDefault();
  if (e.key.toLowerCase() === 'r') reset();
});
addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);

const rect = (x, y, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), w, h); };
const overlap = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

function reset() {
  game = {
    running: true, won: false, score: 0, coins: 0, time: 180, camera: 0, elapsed: 0,
    player: { x: 80, y: 390, w: 28, h: 40, vx: 0, vy: 0, grounded: false, big: false, star: 0 },
    platforms: [
      [0, 500, 650, 40], [720, 500, 680, 40], [1480, 500, 570, 40], [2140, 500, 720, 40], [2920, 500, 680, 40],
      [330, 390, 120, 22], [570, 315, 120, 22], [850, 400, 120, 22], [1080, 340, 140, 22], [1280, 420, 110, 22],
      [1590, 370, 130, 22], [1810, 300, 130, 22], [2250, 390, 130, 22], [2490, 330, 110, 22], [2750, 410, 130, 22]
    ].map(([x,y,w,h]) => ({x,y,w,h})),
    coins: [[260,450],[365,340],[605,265],[900,350],[1120,290],[1330,370],[1630,320],[1850,250],[2300,340],[2530,280],[2790,360],[3050,450]].map(([x,y]) => ({x,y,r:10,taken:false})),
    enemies: [[480,460,420],[770,460,520],[1000,460,360],[1220,460,360],[1700,460,420],[1920,460,360],[2370,460,400],[2670,460,360]].map(([x,y,range]) => ({x,y,w:30,h:30,vx:-55,start:x,range,dead:false})),
    powerups: [{x:610,y:275,w:24,h:24,type:'mushroom',taken:false},{x:1125,y:300,w:24,h:24,type:'star',taken:false},{x:2500,y:290,w:24,h:24,type:'mushroom',taken:false}],
    flag: {x:3450, y:300, w:20, h:200}
  };
  document.querySelector('#message').classList.add('hidden');
  updateHud();
  cancelAnimationFrame(animation); last = performance.now(); animation = requestAnimationFrame(loop);
}

function loop(now) {
  const dt = Math.min((now - last) / 1000, .033); last = now;
  if (game.running) update(dt);
  draw();
  if (game.running) animation = requestAnimationFrame(loop);
}

function update(dt) {
  game.elapsed += dt; game.time = Math.max(0, 180 - Math.floor(game.elapsed));
  const p = game.player, left = keys.arrowleft || keys.a, right = keys.arrowright || keys.d;
  const speed = p.star > 0 ? 220 : 180;
  p.vx = left ? -speed : right ? speed : p.vx * .80;
  if ((keys[' '] || keys.arrowup || keys.w) && p.grounded) { p.vy = -440; p.grounded = false; }
  p.vy += 1100 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.grounded = false;
  resolvePlatforms(p);
  p.x = Math.max(0, Math.min(3550, p.x));
  if (p.y > H + 60) hurt();
  for (const c of game.coins) if (!c.taken && overlap(p, {x:c.x-c.r,y:c.y-c.r,w:c.r*2,h:c.r*2})) { c.taken=true; game.coins++; game.score+=100; }
  for (const item of game.powerups) if (!item.taken && overlap(p,item)) { item.taken=true; if (item.type === 'mushroom') { p.big=true; p.h=52; game.score+=1000; } else { p.star=8; game.score+=500; } }
  for (const e of game.enemies) {
    if (e.dead) continue; e.x += e.vx * dt;
    if (Math.abs(e.x - e.start) > e.range) e.vx *= -1;
    if (overlap(p,e)) { if (p.vy > 0 && p.y + p.h - e.y < 18) { e.dead=true; p.vy=-300; game.score+=200; } else if (p.star > 0) { e.dead=true; game.score+=200; } else hurt(); }
  }
  if (p.star > 0) p.star = Math.max(0, p.star - dt);
  if (overlap(p, game.flag)) finish(true);
  if (game.time <= 0) finish(false);
  game.camera += (p.x - game.camera - 360) * .08; game.camera = Math.max(0, Math.min(2570, game.camera)); updateHud();
}

function resolvePlatforms(p) {
  for (const b of game.platforms) if (overlap(p,b) && p.vy >= 0 && p.y + p.h - p.vy * .03 <= b.y + 8) { p.y=b.y-p.h; p.vy=0; p.grounded=true; }
}
function hurt() { if (game.player.big) { game.player.big=false; game.player.h=40; game.player.y-=12; return; } finish(false, '¡Te golpearon!'); }
function finish(won, text) {
  if (!game.running) return;
  if (won) game.score += game.time * 10;
  game.running=false; game.won=won;
  const m=document.querySelector('#message');
  m.innerHTML = `<div>${text || (won ? '¡Nivel completado!' : 'Fin del juego')}<small>Puntos: ${game.score.toString().padStart(6,'0')} · Presiona R para jugar otra vez</small></div>`;
  m.classList.remove('hidden'); updateHud();
}

function updateHud() { document.querySelector('#score').textContent=String(game.score).padStart(6,'0'); document.querySelector('#coins').textContent=String(game.coins).padStart(2,'0'); document.querySelector('#time').textContent=String(game.time).padStart(3,'0'); document.querySelector('#status').textContent=game.won?'GANASTE':game.running?'JUGANDO':'PERDISTE'; document.querySelector('#power-status').textContent=game.player.big?'Hongo: grande':game.player.star>0?'Estrella: invencible':'Sin power-up'; }

function draw() {
  rect(0,0,W,H,'#69c9e8'); const cam=game.camera;
  drawClouds(cam); drawHills(cam); ctx.save(); ctx.translate(-cam,0);
  for (const b of game.platforms) { rect(b.x,b.y,b.w,b.h,'#87502f'); rect(b.x,b.y,b.w,7,'#4cb84d'); for(let x=b.x+8;x<b.x+b.w;x+=28) { rect(x,b.y+12,12,8,'#a5653b'); rect(x+13,b.y+25,12,8,'#6e3d2c'); } }
  for (const c of game.coins) if (!c.taken) { ctx.fillStyle='#ffd447'; ctx.beginPath(); ctx.ellipse(c.x,c.y,7,11,0,0,Math.PI*2); ctx.fill(); rect(c.x-2,c.y-7,4,14,'#fff09c'); }
  for (const item of game.powerups) if (!item.taken) drawPowerup(item);
  for (const e of game.enemies) if (!e.dead) { rect(e.x,e.y+8,e.w,e.h-8,'#b84b36'); ctx.fillStyle='#f3a657'; ctx.beginPath(); ctx.arc(e.x+15,e.y+9,15,Math.PI,0); ctx.fill(); rect(e.x+6,e.y+9,5,7,'#241b2d'); rect(e.x+20,e.y+9,5,7,'#241b2d'); rect(e.x+3,e.y+27,10,4,'#f6e2b3'); rect(e.x+18,e.y+27,10,4,'#f6e2b3'); }
  drawFlag(); drawPlayer(); ctx.restore();
}
function drawPlayer() { const p=game.player; const color=p.star>0 ? (Math.floor(game.elapsed*12)%2?'#fff06a':'#ff6b6b') : '#e84b4b'; rect(p.x,p.y,p.w,p.h,color); rect(p.x+4,p.y+9,p.w-8,10,'#f3b166'); rect(p.x+2,p.y-4,p.w-4,7,'#66364a'); rect(p.x+5,p.y+20,7,5,'#241b2d'); rect(p.x+p.w-12,p.y+20,7,5,'#241b2d'); rect(p.x+3,p.y+p.h-3,9,5,'#43304b'); rect(p.x+p.w-12,p.y+p.h-3,9,5,'#43304b'); }
function drawPowerup(i) { if(i.type==='mushroom'){ ctx.fillStyle='#e94d4d'; ctx.beginPath();ctx.arc(i.x+12,i.y+12,12,Math.PI,0);ctx.fill();rect(i.x+3,i.y+12,18,12,'#f1bd72');rect(i.x+6,i.y+17,4,5,'#241b2d');rect(i.x+15,i.y+17,4,5,'#241b2d'); } else { ctx.fillStyle='#ffe35c';ctx.beginPath(); for(let n=0;n<10;n++){let a=-Math.PI/2+n*Math.PI/5,r=n%2?6:13;ctx.lineTo(i.x+12+Math.cos(a)*r,i.y+12+Math.sin(a)*r);}ctx.fill(); } }
function drawFlag(){ const f=game.flag; rect(f.x,f.y,7,f.h,'#f7f1d1'); ctx.fillStyle='#f05a55';ctx.beginPath();ctx.moveTo(f.x+7,f.y+8);ctx.lineTo(f.x+55,f.y+25);ctx.lineTo(f.x+7,f.y+42);ctx.fill(); }
function drawClouds(cam){ for(const x of [150,650,1220,1900,2600,3200]) { const px=x-cam*.25; ctx.fillStyle='#f7f1e1'; ctx.beginPath();ctx.arc(px,100,24,0,Math.PI*2);ctx.arc(px+27,92,32,0,Math.PI*2);ctx.arc(px+60,103,22,0,Math.PI*2);ctx.fill(); } }
function drawHills(cam){ for(const x of [0,850,1800,2750]) { const px=x-cam*.5; ctx.fillStyle='#53b69a';ctx.beginPath();ctx.moveTo(px,500);ctx.lineTo(px+170,290);ctx.lineTo(px+350,500);ctx.fill();ctx.fillStyle='#3c987e';ctx.beginPath();ctx.moveTo(px+260,500);ctx.lineTo(px+420,345);ctx.lineTo(px+600,500);ctx.fill(); } }

reset();
