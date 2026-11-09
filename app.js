// 3D دیزاینی پەرگۆلای بایۆکلیماتیک — WLAT SHADE
// هەموو قیاسەکان بە مەترن. X = پانی، Z = قووڵی (+Z بەرەو پێشەوە)، Y = بەرزی.
import * as THREE from "three";
import { OrbitControls } from "three/addons/OrbitControls.js";
import { RoomEnvironment } from "three/addons/RoomEnvironment.js";

// ───────────────────────── ڕێکخستن ─────────────────────────
const RAL = [
  ["#383e42", "RAL 7016", "ئەنتراسیت"], ["#f1f0ea", "RAL 9016", "سپی"], ["#0e0e10", "RAL 9005", "ڕەش"],
  ["#a5a8a6", "RAL 9006", "زیوی"], ["#403a3a", "RAL 8019", "قاوەیی"], ["#e6d2b5", "RAL 1015", "عاجی"],
  ["#5e2129", "RAL 3005", "بۆردۆ"], ["#cbd0cc", "RAL 7035", "خۆڵەمێشی کاڵ"],
];
const FABRIC = [["#3b3b3b", "Antrasit"], ["#e9e1cf", "Krem"], ["#8c8a85", "Gri"], ["#efefef", "Beyaz"], ["#5b4636", "Kahve"], ["#5e2129", "Bordo"]];
const DEF = {
  mount: "free", w: 4.5, d: 3.5, h: 2.6, angle: 0,
  frame: "#383e42", louvre: "#383e42", sameColour: true,
  sides: { front: "none", back: "none", left: "none", right: "none" },
  fabric: "#3b3b3b", drop: 0.75, glassOpen: 0,
  led: true, ledPer: true, ledLou: false, ledPost: true, ledMode: "warm", ledColour: "#ff4fd8", ledDim: 0.7,
  night: false, rain: false, furniture: true,
};
let cfg = structuredClone(DEF);
try {
  const m = location.hash.match(/c=([A-Za-z0-9_-]+)/);
  if (m) cfg = { ...DEF, ...JSON.parse(decodeURIComponent(escape(atob(m[1].replace(/-/g, "+").replace(/_/g, "/"))))) };
  cfg.sides = { ...DEF.sides, ...(cfg.sides || {}) };
} catch (e) { cfg = structuredClone(DEF); }

// ───────────────────────── دیمەن ─────────────────────────
const stage = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
const MOBILE = matchMedia("(max-width: 899px)").matches;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, MOBILE ? 2 : 1.75));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.prepend(renderer.domElement);

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(42, 1, 0.05, 200);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2 - 0.03;
controls.minDistance = 1.2;
controls.maxDistance = 30;
controls.enablePan = true;

const hemi = new THREE.HemisphereLight(0xdfe9ff, 0x5b5040, 0.6);
const sun = new THREE.DirectionalLight(0xfff1dd, 2.4);
sun.position.set(6, 10, 5);
sun.castShadow = true;
sun.shadow.mapSize.set(MOBILE ? 1024 : 2048, MOBILE ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
const moon = new THREE.DirectionalLight(0x9fb4ff, 0.0);
moon.position.set(-6, 9, -4);
scene.add(hemi, sun, moon);

// باکگراوند و زەوی
function gradTex(top, mid, bottom) {
  const c = document.createElement("canvas"); c.width = 4; c.height = 256;
  const g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, top); gr.addColorStop(0.62, mid); gr.addColorStop(1, bottom);
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const SKY_DAY = gradTex("#7fa9d6", "#cfdde9", "#eef1f2"), SKY_NIGHT = gradTex("#03040a", "#120d1c", "#241622");

function paverTex() {
  const c = document.createElement("canvas"); c.width = c.height = 512; const g = c.getContext("2d");
  g.fillStyle = "#8d877e"; g.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 4; x++) {
    const off = (y % 2) * 64, v = 168 + Math.floor(Math.random() * 26);
    g.fillStyle = `rgb(${v},${v - 6},${v - 14})`;
    g.fillRect(x * 128 + off + 3 - (off ? 128 : 0), y * 64 + 3, 122, 58);
    if (off) g.fillRect(x * 128 + off + 3, y * 64 + 3, 122, 58);
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function grassTex() {
  const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d");
  g.fillStyle = "#58733f"; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3500; i++) { const v = Math.random(); g.fillStyle = `rgba(${60 + v * 60},${95 + v * 60},${40 + v * 30},.55)`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(40, 40); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const grass = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ map: grassTex(), roughness: 1 }));
grass.rotation.x = -Math.PI / 2; grass.receiveShadow = true; scene.add(grass);
const paverMap = paverTex();
const patio = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshStandardMaterial({ map: paverMap, roughness: 0.92 }));
patio.rotation.x = -Math.PI / 2; patio.position.y = 0.004; patio.receiveShadow = true; scene.add(patio);

// ───────────────────────── ماتریاڵەکان ─────────────────────────
const M = {
  frame: new THREE.MeshStandardMaterial({ color: cfg.frame, metalness: 0.35, roughness: 0.42 }),
  louvre: new THREE.MeshStandardMaterial({ color: cfg.louvre, metalness: 0.35, roughness: 0.38, side: THREE.DoubleSide }),
  dark: new THREE.MeshStandardMaterial({ color: 0x1b1b1d, metalness: 0.4, roughness: 0.5 }),
  glass: new THREE.MeshStandardMaterial({ color: 0xc7e1ea, metalness: 0.05, roughness: 0.04, transparent: true, opacity: 0.2, depthWrite: false, envMapIntensity: 1.6 }),
  fabric: new THREE.MeshStandardMaterial({ color: cfg.fabric, roughness: 0.95, side: THREE.DoubleSide, transparent: true, opacity: 0.94 }),
  led: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffc58a, emissiveIntensity: 2, roughness: 0.6 }),
  wall: new THREE.MeshStandardMaterial({ color: 0xe9e4dc, roughness: 0.95 }),
  wallDark: new THREE.MeshStandardMaterial({ color: 0x2c2f33, roughness: 0.3, metalness: 0.2 }),
  sofa: new THREE.MeshStandardMaterial({ color: 0x3a3634, roughness: 0.7, metalness: 0.2 }),
  cushion: new THREE.MeshStandardMaterial({ color: 0xe4ddcf, roughness: 1 }),
  wood: new THREE.MeshStandardMaterial({ color: 0x8a6a4c, roughness: 0.7 }),
  plant: new THREE.MeshStandardMaterial({ color: 0x3f6b39, roughness: 0.9 }),
};

// ───────────────────────── مۆدێلی پەرگۆلا ─────────────────────────
const P = 0.15, BH = 0.24, BW = 0.15;     // پایە 150mm، چوارچێوە 150×240mm
const root = new THREE.Group(); scene.add(root);
let louvres = [], ledLights = [], dims = {};
const geoCache = new Map();

function box(w, h, d, mat, x, y, z, parent = root, shadow = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m;
}
function louvreGeo(len) {
  const k = len.toFixed(3);
  if (geoCache.has(k)) return geoCache.get(k);
  // پرۆفیلی لۆڤەر: 200mm پان، شێوەی بالی فڕۆکە
  const s = new THREE.Shape();
  s.moveTo(-0.1, -0.003); s.quadraticCurveTo(-0.02, 0.036, 0.1, 0.004); s.lineTo(0.1, -0.004); s.quadraticCurveTo(0, 0.012, -0.1, -0.011); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: len, bevelEnabled: false, curveSegments: 10 });
  g.rotateY(Math.PI / 2); g.translate(-len / 2, 0, 0); g.computeVertexNormals();
  geoCache.set(k, g); return g;
}
function clearGroup(g) {
  g.traverse((o) => { if (o.isMesh && o.geometry && !geoCache.has(o.geometry.userData.k)) { if (![...geoCache.values()].includes(o.geometry)) o.geometry.dispose(); } });
  while (g.children.length) g.remove(g.children[0]);
}

function build() {
  clearGroup(root);
  ledLights.forEach((l) => scene.remove(l)); ledLights = []; louvres = [];
  const { w, d, h } = cfg, wall = cfg.mount === "wall";
  const wi = w - 2 * BW, di = d - 2 * BW;
  const nb = Math.max(1, Math.ceil(wi / 4.2));             // لۆڤەر زیاتر لە 4.2m نابێت، بۆیە بەش دەکرێت
  const bw = (wi - (nb - 1) * BW) / nb;
  const bayX = (k) => -wi / 2 + k * (bw + BW) + bw / 2;
  const midX = (k) => -wi / 2 + k * (bw + BW) - BW / 2;       // k = 1..nb-1
  dims = { w, d, h, wi, di, nb, bw, wall };

  // پایەکان
  const postsX = [-w / 2 + P / 2, w / 2 - P / 2];
  for (let k = 1; k < nb; k++) postsX.push(midX(k));
  postsX.sort((a, b) => a - b);
  const zs = wall ? [d / 2 - P / 2] : [d / 2 - P / 2, -d / 2 + P / 2];
  dims.postsX = postsX; dims.postZ = zs;
  let posts = 0;
  for (const z of zs) for (const x of postsX) {
    box(P, h - BH, P, M.frame, x, (h - BH) / 2, z);
    box(P + 0.06, 0.012, P + 0.06, M.frame, x, 0.006, z);
    posts++;
    if (cfg.led && cfg.ledPost) {
      const sx = x < 0 ? x + P / 2 + 0.003 : x - P / 2 - 0.003;
      box(0.006, h - BH - 0.5, 0.02, M.led, sx, (h - BH) / 2 + 0.1, z, root, false);
    }
  }
  dims.posts = posts;

  // چوارچێوەی سەرەوە (ئاوەڕۆ)
  const y = h - BH / 2;
  box(w, BH, BW, M.frame, 0, y, d / 2 - BW / 2);
  box(w, BH, BW, M.frame, 0, y, -d / 2 + BW / 2);
  box(BW, BH, di, M.frame, -w / 2 + BW / 2, y, 0);
  box(BW, BH, di, M.frame, w / 2 - BW / 2, y, 0);
  for (let k = 1; k < nb; k++) box(BW, BH, di, M.frame, midX(k), y, 0);
  // قەپاغی سەرەوەی چوارچێوە
  box(w + 0.01, 0.012, BW + 0.01, M.frame, 0, h + 0.006, d / 2 - BW / 2);
  box(w + 0.01, 0.012, BW + 0.01, M.frame, 0, h + 0.006, -d / 2 + BW / 2);

  // LED ی دەوری چوارچێوە
  if (cfg.led && cfg.ledPer) {
    const ly = h - BH - 0.004;
    box(wi, 0.008, 0.022, M.led, 0, ly, d / 2 - BW - 0.012, root, false);
    box(wi, 0.008, 0.022, M.led, 0, ly, -d / 2 + BW + 0.012, root, false);
    box(0.022, 0.008, di, M.led, -w / 2 + BW + 0.012, ly, 0, root, false);
    box(0.022, 0.008, di, M.led, w / 2 - BW - 0.012, ly, 0, root, false);
    for (let k = 1; k < nb; k++) { box(0.022, 0.008, di, M.led, midX(k) - BW / 2 - 0.012, ly, 0, root, false); box(0.022, 0.008, di, M.led, midX(k) + BW / 2 + 0.012, ly, 0, root, false); }
  }

  // لۆڤەرەکان
  const n = Math.max(2, Math.round(di / 0.2));
  const pitch = di / n;
  dims.louvres = n * nb;
  for (let k = 0; k < nb; k++) {
    const g = louvreGeo(bw - 0.02);
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(g, M.louvre);
      m.position.set(bayX(k), h - BH * 0.42, -di / 2 + pitch * (i + 0.5));
      m.castShadow = true; m.receiveShadow = true;
      if (cfg.led && cfg.ledLou && i % 3 === 1) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(bw - 0.12, 0.004, 0.012), M.led);
        s.position.set(0, -0.006, 0.02); m.add(s);
      }
      root.add(m); louvres.push(m);
    }
    // تیشکی LED بۆ شەو
    const L = new THREE.PointLight(0xffc58a, 0, Math.max(w, d) * 1.6, 1.6);
    L.position.set(bayX(k), h - BH - 0.25, 0);
    scene.add(L); ledLights.push(L);
  }
  setAngle(curAngle);

  // دیوار
  if (wall) {
    const ww = w + 5, wh = Math.max(h + 1.4, 3.6);
    box(ww, wh, 0.2, M.wall, 0, wh / 2, -d / 2 - 0.1);
    box(1.0, 2.2, 0.03, M.wallDark, -w / 4, 1.1, -d / 2 + 0.005);
    box(1.6, 1.3, 0.03, M.wallDark, w / 4, 1.45, -d / 2 + 0.005);
    box(ww, 0.04, 0.26, M.wall, 0, wh, -d / 2 - 0.1);
  }

  // لاکان
  const H = h - BH;
  const segs = [];
  const segX = postsX.slice();
  for (let i = 0; i < segX.length - 1; i++) {
    const a = segX[i] + P / 2, b = segX[i + 1] - P / 2;
    segs.push({ side: "front", L: b - a, x: (a + b) / 2, z: d / 2 - P / 2, ry: 0 });
    if (!wall) segs.push({ side: "back", L: b - a, x: (a + b) / 2, z: -d / 2 + P / 2, ry: Math.PI });
  }
  const zl = d - 2 * P;
  segs.push({ side: "left", L: zl, x: -w / 2 + P / 2, z: 0, ry: -Math.PI / 2 });
  segs.push({ side: "right", L: zl, x: w / 2 - P / 2, z: 0, ry: Math.PI / 2 });
  for (const s of segs) {
    const t = cfg.sides[s.side];
    if (!t || t === "none") continue;
    const g = new THREE.Group(); g.position.set(s.x, 0, s.z); g.rotation.y = s.ry; root.add(g);
    if (t === "zip") zipScreen(g, s.L, H);
    else if (t === "slide") slideGlass(g, s.L, H);
    else if (t === "giy") giyotin(g, s.L, H);
  }

  // کەلوپەل
  if (cfg.furniture && wi > 2.4 && di > 2.0) furniture();

  patio.scale.set(w + 4, d + 4, 1); patio.position.z = wall ? 1.4 : 0;
  paverMap.repeat.set((w + 4) / 1.6, (d + 4) / 1.6);
  setLed(); updateBadge(); invalidate();
}

function zipScreen(g, L, H) {
  box(L, 0.12, 0.12, M.frame, 0, H - 0.06, 0, g);
  box(0.035, H - 0.12, 0.05, M.frame, -L / 2 + 0.018, (H - 0.12) / 2, 0, g);
  box(0.035, H - 0.12, 0.05, M.frame, L / 2 - 0.018, (H - 0.12) / 2, 0, g);
  const drop = Math.max(0.02, cfg.drop * (H - 0.16));
  const f = new THREE.Mesh(new THREE.PlaneGeometry(L - 0.06, drop), M.fabric);
  f.position.set(0, H - 0.12 - drop / 2, 0); f.castShadow = true; f.receiveShadow = true; g.add(f);
  box(L - 0.06, 0.035, 0.03, M.frame, 0, H - 0.12 - drop, 0, g);
}
function glassPanel(g, w, h, x, y, z) {
  const t = 0.035;
  box(w, t, 0.03, M.frame, x, y + h / 2 - t / 2, z, g); box(w, t, 0.03, M.frame, x, y - h / 2 + t / 2, z, g);
  box(t, h, 0.03, M.frame, x - w / 2 + t / 2, y, z, g); box(t, h, 0.03, M.frame, x + w / 2 - t / 2, y, z, g);
  const p = new THREE.Mesh(new THREE.BoxGeometry(w - 2 * t, h - 2 * t, 0.008), M.glass); p.position.set(x, y, z); p.renderOrder = 2; g.add(p);
}
function slideGlass(g, L, H) {
  box(L, 0.05, 0.12, M.frame, 0, H - 0.025, 0, g); box(L, 0.03, 0.12, M.frame, 0, 0.015, 0, g);
  const n = Math.max(2, Math.ceil(L / 1.4)), pw = L / n + 0.04, ph = H - 0.09;
  for (let i = 0; i < n; i++) {
    const closedX = -L / 2 + pw / 2 + i * (L - pw) / (n - 1);
    const x = closedX + (-L / 2 + pw / 2 + i * 0.02 - closedX) * cfg.glassOpen;
    glassPanel(g, pw, ph, x, 0.03 + ph / 2, (i % 2 ? 0.025 : -0.025) + (i > 1 ? 0.01 * i : 0));
  }
}
function giyotin(g, L, H) {
  const base = 0.24;
  box(L, base, 0.16, M.frame, 0, base / 2, 0, g);
  box(0.05, H - base, 0.12, M.frame, -L / 2 + 0.025, base + (H - base) / 2, 0, g);
  box(0.05, H - base, 0.12, M.frame, L / 2 - 0.025, base + (H - base) / 2, 0, g);
  const ph = (H - base) / 3;
  for (let k = 0; k < 3; k++) {
    const yc = base + ph / 2 + k * ph * (1 - cfg.glassOpen);
    glassPanel(g, L - 0.1, ph + 0.01, 0, yc, (k - 1) * 0.034);
  }
}
function furniture() {
  const g = new THREE.Group(); root.add(g);
  const { wi, di } = dims, sw = Math.min(2.2, wi * 0.55), sd = 0.8;
  const sz = -di / 2 + 0.75;
  box(sw, 0.36, sd, M.sofa, 0, 0.18, sz, g); box(sw, 0.36, 0.16, M.sofa, 0, 0.54, sz - sd / 2 + 0.08, g);
  box(0.14, 0.26, sd, M.sofa, -sw / 2 + 0.07, 0.49, sz, g); box(0.14, 0.26, sd, M.sofa, sw / 2 - 0.07, 0.49, sz, g);
  for (let i = 0; i < 3; i++) box(sw / 3 - 0.08, 0.12, sd - 0.22, M.cushion, -sw / 3 + i * sw / 3, 0.42, sz + 0.05, g);
  for (let i = 0; i < 3; i++) box(sw / 3 - 0.14, 0.36, 0.1, M.cushion, -sw / 3 + i * sw / 3, 0.66, sz - sd / 2 + 0.2, g);
  box(1.0, 0.04, 0.55, M.wood, 0, 0.4, sz + 1.05, g); box(0.9, 0.36, 0.45, M.sofa, 0, 0.19, sz + 1.05, g);
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.13, 0.42, 20), M.sofa); pot.position.set(wi / 2 - 0.35, 0.21, sz); pot.castShadow = true; g.add(pot);
  const pl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 1), M.plant); pl.position.set(wi / 2 - 0.35, 0.72, sz); pl.castShadow = true; g.add(pl);
}

// ───────────────────────── لۆڤەر، LED، شەو ─────────────────────────
let curAngle = cfg.angle, targetAngle = cfg.angle;
function setAngle(a) { curAngle = a; const r = -THREE.MathUtils.degToRad(a); for (const m of louvres) m.rotation.x = r; }
function ledColour() { return cfg.ledMode === "warm" ? "#ffc58a" : cfg.ledMode === "cold" ? "#e6f0ff" : cfg.ledColour; }
function setLed() {
  const c = new THREE.Color(ledColour()), on = cfg.led;
  M.led.emissive.copy(c);
  M.led.emissiveIntensity = on ? (cfg.night ? 6 : 1.4) * cfg.ledDim + 0.3 : 0;
  M.led.color.set(on ? c : 0x222222).multiplyScalar(on ? 0.4 : 1);
  for (const L of ledLights) { L.color.copy(c); L.intensity = on && cfg.night && (cfg.ledPer || cfg.ledLou || cfg.ledPost) ? 14 * cfg.ledDim : 0; }
  invalidate();
}
function setNight() {
  const n = cfg.night;
  scene.background = n ? SKY_NIGHT : SKY_DAY;
  scene.fog = new THREE.Fog(n ? 0x150e18 : 0xe6ecf0, 25, 85);
  sun.intensity = n ? 0.0 : 2.4; hemi.intensity = n ? 0.07 : 0.6; moon.intensity = n ? 0.35 : 0;
  sun.castShadow = !n; moon.castShadow = false;
  // r160: ڕووناکی ژینگە بۆ هەر ماتریاڵێک جیا
  for (const m of [...Object.values(M), grass.material, patio.material]) m.envMapIntensity = (m === M.glass ? 1.6 : 1) * (n ? 0.06 : 1);
  grass.material.color.set(n ? 0x3a4a34 : 0xffffff); patio.material.color.set(n ? 0x8a8580 : 0xffffff);
  renderer.toneMappingExposure = n ? 1.15 : 1.0;
  setLed();
}
function setColours() {
  M.frame.color.set(cfg.frame);
  M.louvre.color.set(cfg.sameColour ? cfg.frame : cfg.louvre);
  M.fabric.color.set(cfg.fabric);
  invalidate();
}

// باران: لۆڤەری داخراو باران دەگرێتەوە
const RAIN_N = MOBILE ? 1400 : 2600;
const rainGeo = new THREE.BufferGeometry();
const rainPos = new Float32Array(RAIN_N * 6), rainV = new Float32Array(RAIN_N);
rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPos, 3));
const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: 0xaec4d6, transparent: true, opacity: 0.55 }));
rain.frustumCulled = false; rain.visible = false; scene.add(rain);
function seedDrop(i, top) {
  const x = (Math.random() - 0.5) * 16, z = (Math.random() - 0.5) * 16, y = top ? 8 + Math.random() * 3 : Math.random() * 11;
  rainV[i] = 8 + Math.random() * 3;
  rainPos.set([x, y, z, x + 0.01, y + 0.22, z], i * 6);
}
for (let i = 0; i < RAIN_N; i++) seedDrop(i, false);
function stepRain(dt) {
  const roof = curAngle < 12, { w, d, h } = cfg;
  for (let i = 0; i < RAIN_N; i++) {
    const o = i * 6; const dy = rainV[i] * dt;
    rainPos[o + 1] -= dy; rainPos[o + 4] -= dy;
    const x = rainPos[o], z = rainPos[o + 2], y = rainPos[o + 1];
    const under = roof && Math.abs(x) < w / 2 && Math.abs(z) < d / 2 && y < h + 0.02;
    if (y < 0 || under) seedDrop(i, true);
  }
  rainGeo.attributes.position.needsUpdate = true;
}

// ───────────────────────── کامێرا ─────────────────────────
function viewPose(v) {
  const { w, d, h } = cfg, s = Math.max(w, d);
  const t = new THREE.Vector3(0, h * 0.5, cfg.mount === "wall" ? 0.3 : 0);
  if (v === "front") return { p: new THREE.Vector3(0, h * 0.55, d / 2 + s * 1.45 + 2.2), t };
  if (v === "top") return { p: new THREE.Vector3(0.001, s * 2.1 + 4, 0.6), t: new THREE.Vector3(0, h, 0) };
  if (v === "inside") return { p: new THREE.Vector3(w * 0.18, 1.45, d * 0.28), t: new THREE.Vector3(-w * 0.05, h, -d * 0.18) };
  return { p: new THREE.Vector3(s * 1.15 + 1.6, h * 0.95 + 1.7, s * 1.25 + 2.6), t };
}
let tween = null;
function goView(v, instant) {
  const { p, t } = viewPose(v);
  if (instant) { camera.position.copy(p); controls.target.copy(t); controls.update(); invalidate(); return; }
  tween = { p0: camera.position.clone(), t0: controls.target.clone(), p1: p, t1: t, s: performance.now(), dur: 750 };
}

// ───────────────────────── وێنەکێشان ─────────────────────────
let dirty = true;
function invalidate() { dirty = true; }
function resize() {
  const r = stage.getBoundingClientRect();
  renderer.setSize(r.width, r.height, false);
  camera.aspect = r.width / Math.max(1, r.height); camera.updateProjectionMatrix(); invalidate();
}
new ResizeObserver(resize).observe(stage);
const clock = new THREE.Clock();
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (Math.abs(targetAngle - curAngle) > 0.05) {
    setAngle(curAngle + Math.sign(targetAngle - curAngle) * Math.min(Math.abs(targetAngle - curAngle), 75 * dt));
    updateBadge(); dirty = true;
  }
  if (tween) {
    const k = Math.min(1, (performance.now() - tween.s) / tween.dur), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    camera.position.lerpVectors(tween.p0, tween.p1, e); controls.target.lerpVectors(tween.t0, tween.t1, e);
    if (k >= 1) tween = null; dirty = true;
  }
  if (cfg.rain) { stepRain(dt); dirty = true; }
  if (controls.update()) dirty = true;
  if (dirty) { renderer.render(scene, camera); dirty = false; }
}
controls.addEventListener("change", invalidate);

// ───────────────────────── ڕووکار ─────────────────────────
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function updateBadge() {
  $("badge").innerHTML = `<b>${cfg.w.toFixed(2)} × ${cfg.d.toFixed(2)} × ${cfg.h.toFixed(2)} m</b> · لۆڤەر <b>${Math.round(curAngle)}°</b>`;
}
const slider = (id, ku, tr, min, max, step, unit, val) =>
  `<div class="f"><div class="lbl"><b>${ku}<i>${tr}</i></b><output id="${id}_o">${val}${unit}</output></div>` +
  `<input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${ku}"></div>`;
const seg = (name, opts, val) => `<div class="seg" role="radiogroup">${opts.map(([v, ku, tr]) =>
  `<label><input type="radio" name="${name}" value="${v}" ${v === val ? "checked" : ""}><span>${ku}${tr ? `<i>${tr}</i>` : ""}</span></label>`).join("")}</div>`;
const tog = (id, ku, tr, on) => `<label class="tog"><b>${ku}<i>${tr}</i></b><input type="checkbox" id="${id}" ${on ? "checked" : ""}></label>`;
const swatch = (name, list, val) => `<div class="sw">${list.map(([c, code, ku]) =>
  `<label><input type="radio" name="${name}" value="${c}" ${c.toLowerCase() === String(val).toLowerCase() ? "checked" : ""} aria-label="${code}"><span class="chip" style="background:${c}"></span><small>${code}${ku ? `<br>${ku}` : ""}</small></label>`).join("")}</div>`;

const TABS = [
  ["size", "قیاس"], ["lou", "لۆڤەر"], ["col", "ڕەنگ"], ["side", "لاکان"], ["led", "ڕووناکی"], ["scene", "دیمەن"],
];
const SIDE_OPTS = [["none", "کراوە", "AÇIK"], ["zip", "زیپ سکرین", "ZIP"], ["slide", "جامی خلیسکێن", "SÜRME"], ["giy", "گیۆتین", "GİYOTİN"]];
const SIDE_NAMES = { front: ["پێشەوە", "FRONT"], back: ["دواوە", "BACK"], left: ["چەپ", "LEFT"], right: ["ڕاست", "RIGHT"] };
let tab = "size";

function pane() {
  const c = cfg;
  if (tab === "size") return `<div class="pane">
    <div class="f"><div class="lbl"><b>جۆری دامەزراندن<i>MOUNTING</i></b></div>${seg("mount", [["free", "سەربەخۆ", "4 PAYE"], ["wall", "بە دیوارەوە", "DUVARA"]], c.mount)}</div>
    ${slider("w", "پانی", "WIDTH", 2, 8, 0.05, " m", c.w.toFixed(2))}
    ${slider("d", "قووڵی", "DEPTH", 2, 6, 0.05, " m", c.d.toFixed(2))}
    ${slider("h", "بەرزی", "HEIGHT", 2.2, 3.2, 0.01, " m", c.h.toFixed(2))}
    <div class="sum" id="sum"></div></div>`;
  if (tab === "lou") return `<div class="pane">
    ${slider("angle", "گۆشەی لۆڤەرەکان", "LOUVRE ANGLE", 0, 135, 1, "°", Math.round(targetAngle))}
    <div class="row"><button class="btn ghost" data-a="0" type="button">داخستن</button><button class="btn ghost" data-a="45" type="button">45°</button><button class="btn ghost" data-a="90" type="button">کردنەوە</button><button class="btn ghost" data-a="135" type="button">135°</button></div>
    <p class="note">لۆڤەرەکان تا 135° دەسووڕێن. کاتێک داخراون، باران و خۆر ناگەنە خوارەوە. لە تابی «دیمەن» باران هەڵبکە بۆ ئەوەی ببینیت.</p></div>`;
  if (tab === "col") return `<div class="pane">
    <div class="f"><div class="lbl"><b>ڕەنگی چوارچێوە<i>FRAME · RAL</i></b></div>${swatch("frame", RAL, c.frame)}</div>
    ${tog("same", "لۆڤەر هەمان ڕەنگ", "SAME COLOUR FOR LOUVRES", c.sameColour)}
    <div class="f" ${c.sameColour ? "hidden" : ""} id="louWrap"><div class="lbl"><b>ڕەنگی لۆڤەر<i>LOUVRES · RAL</i></b></div>${swatch("louvre", RAL, c.louvre)}</div>
    <div class="f"><div class="lbl"><b>ڕەنگی قوماشی زیپ سکرین<i>ZIP FABRIC</i></b></div>${swatch("fabric", FABRIC.map(([h, n]) => [h, n]), c.fabric)}</div></div>`;
  if (tab === "side") return `<div class="pane">
    ${["front", "back", "left", "right"].map((s) => `<div class="side"><h3>${SIDE_NAMES[s][0]}<i>${SIDE_NAMES[s][1]}</i></h3>${
      s === "back" && c.mount === "wall" ? `<p class="note">ئەم لایە دیوارە.</p>` : seg("side_" + s, SIDE_OPTS, c.sides[s])}</div>`).join("")}
    ${slider("drop", "دابەزینی زیپ سکرین", "ZIP SCREEN DROP", 0, 100, 1, "%", Math.round(c.drop * 100))}
    ${slider("gopen", "کردنەوەی جام", "GLASS OPENING", 0, 100, 1, "%", Math.round(c.glassOpen * 100))}</div>`;
  if (tab === "led") return `<div class="pane">
    ${tog("led", "ڕووناکی LED", "LED LIGHTING", c.led)}
    ${tog("ledPer", "دەوری چوارچێوە", "PERIMETER", c.ledPer)}
    ${tog("ledLou", "ناو لۆڤەرەکان", "IN LOUVRES", c.ledLou)}
    ${tog("ledPost", "سەر پایەکان", "POSTS", c.ledPost)}
    <div class="f"><div class="lbl"><b>ڕەنگی ڕووناکی<i>LIGHT COLOUR</i></b></div>${seg("ledMode", [["warm", "گەرم", "WARM"], ["cold", "سپی", "COOL"], ["rgb", "ڕەنگاوڕەنگ", "RGB"]], c.ledMode)}</div>
    <div class="f" ${c.ledMode === "rgb" ? "" : "hidden"}><div class="lbl"><b>ڕەنگی RGB<i>RGB COLOUR</i></b><input type="color" id="ledColour" value="${c.ledColour}"></div></div>
    ${slider("ledDim", "ڕووناکی", "BRIGHTNESS", 10, 100, 1, "%", Math.round(c.ledDim * 100))}
    <p class="note">بۆ ئەوەی ڕووناکییەکە باشتر ببینیت، لە تابی «دیمەن» شەو هەڵبکە.</p></div>`;
  return `<div class="pane">
    ${tog("night", "شەو", "NIGHT", c.night)}
    ${tog("rain", "باران", "RAIN", c.rain)}
    ${tog("furniture", "کەلوپەلی دانیشتن", "FURNITURE", c.furniture)}
    <div class="row"><button class="btn ghost" id="reset" type="button">گەڕانەوە بۆ سەرەتا</button></div></div>`;
}
function setRangeFill(el) { const p = ((el.value - el.min) / (el.max - el.min)) * 100; el.style.setProperty("--p", p + "%"); }
function renderTabs() {
  $("tabs").innerHTML = TABS.map(([k, ku]) => `<button type="button" role="tab" aria-selected="${k === tab}" class="${k === tab ? "on" : ""}" data-t="${k}">${ku}</button>`).join("");
  $("body").innerHTML = pane();
  $("body").querySelectorAll("input[type=range]").forEach(setRangeFill);
  updateSum();
}
function updateSum() {
  const s = $("sum"); if (!s) return;
  s.innerHTML = `<div><span>ڕووبەر</span><b>${(cfg.w * cfg.d).toFixed(2)} m²</b></div><div><span>ژمارەی لۆڤەر</span><b>${dims.louvres || 0}</b></div>` +
    `<div><span>ژمارەی پایە</span><b>${dims.posts || 0}</b></div><div><span>بەشەکان</span><b>${dims.nb || 1}</b></div>`;
}
let rebuildT = 0;
function rebuildSoon() { clearTimeout(rebuildT); rebuildT = setTimeout(() => { build(); updateSum(); }, 40); }

$("tabs").addEventListener("click", (e) => { const b = e.target.closest("button[data-t]"); if (!b) return; tab = b.dataset.t; renderTabs(); });
$("body").addEventListener("input", (e) => {
  const t = e.target, id = t.id, v = +t.value;
  if (t.type === "range") { setRangeFill(t); const o = $(id + "_o"); }
  if (id === "w" || id === "d" || id === "h") { cfg[id] = v; $(id + "_o").textContent = v.toFixed(2) + " m"; rebuildSoon(); updateBadge(); }
  else if (id === "angle") { targetAngle = cfg.angle = v; $("angle_o").textContent = v + "°"; }
  else if (id === "drop") { cfg.drop = v / 100; $("drop_o").textContent = v + "%"; rebuildSoon(); }
  else if (id === "gopen") { cfg.glassOpen = v / 100; $("gopen_o").textContent = v + "%"; rebuildSoon(); }
  else if (id === "ledDim") { cfg.ledDim = v / 100; $("ledDim_o").textContent = v + "%"; setLed(); }
  else if (id === "ledColour") { cfg.ledColour = t.value; setLed(); }
});
$("body").addEventListener("change", (e) => {
  const t = e.target, n = t.name, id = t.id;
  if (n === "mount") { cfg.mount = t.value; if (t.value === "wall") cfg.sides.back = "none"; build(); goView("persp"); }
  else if (n === "frame") { cfg.frame = t.value; setColours(); }
  else if (n === "louvre") { cfg.louvre = t.value; setColours(); }
  else if (n === "fabric") { cfg.fabric = t.value; setColours(); }
  else if (n && n.startsWith("side_")) { cfg.sides[n.slice(5)] = t.value; build(); }
  else if (n === "ledMode") { cfg.ledMode = t.value; setLed(); renderTabs(); }
  else if (id === "same") { cfg.sameColour = t.checked; setColours(); $("louWrap").hidden = t.checked; }
  else if (["led", "ledPer", "ledLou", "ledPost"].includes(id)) { cfg[id] = t.checked; build(); }
  else if (id === "night") { cfg.night = t.checked; setNight(); }
  else if (id === "rain") { cfg.rain = rain.visible = t.checked; invalidate(); }
  else if (id === "furniture") { cfg.furniture = t.checked; build(); }
});
$("body").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-a]");
  if (b) { targetAngle = cfg.angle = +b.dataset.a; const s = $("angle"); if (s) { s.value = targetAngle; setRangeFill(s); $("angle_o").textContent = targetAngle + "°"; } return; }
  if (e.target.id === "reset") { cfg = structuredClone(DEF); targetAngle = 0; setAngle(0); setColours(); setNight(); rain.visible = false; build(); renderTabs(); goView("persp"); }
});
$("views").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-v]"); if (!b) return;
  $("views").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b)); goView(b.dataset.v);
});

// لینک و وێنە
function toast(t) { const el = $("toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1800); }
function shareUrl() {
  const s = btoa(unescape(encodeURIComponent(JSON.stringify({ ...cfg, angle: Math.round(targetAngle) })))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return location.origin + location.pathname + "#c=" + s;
}
$("share").addEventListener("click", async () => {
  const u = shareUrl(); history.replaceState(null, "", u);
  try { if (navigator.share && MOBILE) { await navigator.share({ title: "WLAT SHADE 3D", url: u }); return; } await navigator.clipboard.writeText(u); toast("لینکەکە کۆپی کرا"); }
  catch (e) { toast("لینکەکە لە شریتی ناونیشاندایە"); }
});
$("shot").addEventListener("click", () => {
  renderer.render(scene, camera);
  const a = document.createElement("a");
  a.href = renderer.domElement.toDataURL("image/png");
  a.download = `WLAT-SHADE-3D-${cfg.w.toFixed(2)}x${cfg.d.toFixed(2)}.png`;
  document.body.appendChild(a); a.click(); a.remove(); toast("وێنەکە پاشەکەوت کرا");
});

// دەستپێک
setColours(); setNight(); rain.visible = cfg.rain; build(); renderTabs(); resize(); goView("persp", true); setAngle(cfg.angle); targetAngle = cfg.angle;
$("loading").remove();
loop();
window.__wlat3d = { cfg, renderer, scene, camera, dims: () => dims, louvreCount: () => louvres.length };
