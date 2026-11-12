var e = {
    post: .17,
    postD: .16,
    rail: .156,
    railH: .238,
    gutter: .16,
    motor: [.141, .62],
    panelPitch: .235,
    slatPitch: .72,
    moduleMax: 4
}
  , t = e => Math.round(e * 1e3).toLocaleString(`tr-TR`)
  , n = e => String(e ?? ``).replace(/[&<>"]/g, e => ({
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`
})[e]);
function r(e, n, r, i) {
    if (e.system === `awning` || e.system === `winawn`) {
        let w = e.system === `winawn`;
        return [[r.system || `Sistem`, r[`system_` + e.system] || e.system], [r.dims || `Ölçüler`, w ? `${t(e.width)} × ${t(e.height)} mm` : `${t(e.width)} × ${t(e.depth)} × ${t(e.height)} mm`], [r.area || `Alan`, `${(w ? e.width * e.height : e.width * e.depth).toFixed(1).replace(`.`, `,`)} m²`], [r.dr_weight || `Yaklaşık ağırlık`, `≈ ${(n.weight || 0).toLocaleString(`tr-TR`)} kg`], [r.dr_colour_frame || `İskelet`, e.colourName], [r.fabric_colour || `Kumaş`, e.fabricName], [r.valance || `Valance`, r[`valance_` + e.valance] || e.valance], [r.arms || `Arms`, w ? r.comp_droparm || `Drop arms` : r.comp_arm || `Folding arms`], [r.dr_motor || `Motor`, r.dr_awn_motor || `Tubular motor · remote control`]]
    }
    let a = r[`system_` + e.system] || e.system
      , o = n.modules || 1
      , s = [`front`, `back`, `left`, `right`].map(e => {
        let t = e === `front` || e === `back` ? o : 1
          , n = i.sideKinds(e, t);
        if (n.every(e => e === `none`))
            return null;
        let a = [...new Set(n)];
        return `${r[`side_` + e] || e}: ${a.length === 1 ? r[`kind_` + a[0]] || a[0] : n.map(e => r[`kind_` + e] || e).join(` / `)}`
    }
    ).filter(Boolean)
      , c = [`perimeter`, `panels`, `posts`, `giy`].filter(t => e.led.master && e.led[t]).map(e => r[`led_` + e] || e)
      , l = [[r.system || `Sistem`, a], [r.mount || `Montaj`, r[`mount_` + e.mount] || e.mount], [r.dims || `Ölçüler`, `${t(e.width)} × ${t(e.depth)} × ${t(e.height)} mm`], [r.modules || `Modül`, `${o} × ${t(e.width / o)} mm`], [e.system === `pergola` ? r.slats || `Çıta` : r.blades || `Lamel`, e.system === `glass` ? `—` : `${n.panels} × ${o}`], [r.area || `Alan`, `${(e.width * e.depth).toFixed(1).replace(`.`, `,`)} m²`], [r.dr_weight || `Yaklaşık ağırlık`, `≈ ${(n.weight || 0).toLocaleString(`tr-TR`)} kg`], [r.dr_colour_frame || `İskelet`, e.colourName]];
    return (e.system === `glass` || e.system === `pergola`) && e.rise > .05 && l.splice(3, 0, [r.back_height || `Back height`, `${t(e.height + e.rise)} mm` + (e.wedge !== !1 && s.length ? ` · ` + (r.wedge || `Wedge glazing`) : ``)]),
    e.system !== `glass` && l.push([e.system === `pergola` ? r.slat_colour || `Çıta` : r.panel_colour || `Panel`, e.panelSep ? e.panelColourName : r.dr_same || `iskelet ile aynı`]),
    e.system === `pergola` && l.push([r.fabric_colour || `Kumaş`, e.fabricName]),
    l.push([r.sides || `Kapamalar`, s.length ? s.join(` · `) : r.kind_none || `Açık`]),
    l.push([`LED`, c.length ? `${c.join(`, `)} · ${r[`led_mode_` + e.ledMode] || e.ledMode} · %${Math.round(e.ledDim * 100)}` : r.off || `Yok`]),
    l.push([r.dr_motor || `Motor`, e.system === `glass` ? `—` : r.dr_motor_val || `Somfy / Mosel / Cuppon 120 Nm · uzaktan kumanda`]),
    l
}
function i(i, a, o, s, c={}) {
    if (i.system === `awning` || i.system === `winawn`)
        return iAw(i, a, o, s, c);
    let l = i.width
      , u = i.depth
      , d = i.height
      , f = a.modules || 1
      , p = l / f
      , m = i.mount !== `free`
      , RZ = i.system === `glass` || i.system === `pergola` ? Math.min(2.5, Math.max(0, +i.rise || 0)) : 0
      , HG = i.mount === `hang` && i.system === `pergola`
      , WG = RZ > .05 && i.wedge !== !1
      , AH = HG ? Math.min(2, u * .42) : 0
      , h = Math.min(372 / (l + 2 * u), 110 / u, 300 / l, 66 / (d + RZ + AH + .5))
      , g = []
      , _ = (e, t, n, r, i=`#111`, a=.25, o=``) => g.push(`<line x1="${e.toFixed(2)}" y1="${t.toFixed(2)}" x2="${n.toFixed(2)}" y2="${r.toFixed(2)}" stroke="${i}" stroke-width="${a}" ${o}/>`)
      , v = (e, t, n, r, i=`none`, a=`#111`, o=.25, s=``) => g.push(`<rect x="${e.toFixed(2)}" y="${t.toFixed(2)}" width="${Math.max(.01, n).toFixed(2)}" height="${Math.max(.01, r).toFixed(2)}" fill="${i}" stroke="${a}" stroke-width="${o}" ${s}/>`)
      , y = (e, t, r, i=3, a=`middle`, o=`#111`, s=``) => g.push(`<text x="${e.toFixed(2)}" y="${t.toFixed(2)}" font-size="${i}" text-anchor="${a}" fill="${o}" font-family="Helvetica, Arial, sans-serif" ${s}>${n(r)}</text>`)
      , b = (e, t, n, r, i) => {
        let a = `#9e1b34`;
        r === `h` ? (_(e, n, t, n, a, .2),
        _(e, n - 1.2, e, n + 1.2, a, .2),
        _(t, n - 1.2, t, n + 1.2, a, .2),
        y((e + t) / 2, n - .8, i, 2.6, `middle`, a)) : (_(n, e, n, t, a, .2),
        _(n - 1.2, e, n + 1.2, e, a, .2),
        _(n - 1.2, t, n + 1.2, t, a, .2),
        y(n - .9, (e + t) / 2, i, 2.6, `middle`, a, `transform="rotate(-90 ${(n - .9).toFixed(2)} ${((e + t) / 2).toFixed(2)})"`))
    }
      , x = 210 - l * h / 2
      , S = l * h
      , C = u * h;
    v(x, 22, S, C, `#fafafa`, `#111`, .4),
    v(x, 22, S, e.gutter * h, `#d9d9d9`, `#111`, .25),
    v(x, 22 + C - e.gutter * h, S, e.gutter * h, m ? `#8a8a8a` : `#d9d9d9`, `#111`, .25);
    let w = Array.from({
        length: f + 1
    }, (e, t) => x + p * h * t);
    w.forEach( (t, n) => {
        let r = n === 0 ? t : n === f ? t - e.rail * h : t - e.rail * h / 2;
        v(r, 22, e.rail * h, C, `#cfcfcf`, `#111`, .25)
    }
    );
    let T = 22 + e.gutter * h
      , E = 22 + C - e.gutter * h;
    for (let t = 0; t < f; t++) {
        let n = w[t] + e.rail * h * (t === 0 ? 1 : .5)
          , r = w[t + 1] - e.rail * h * (t === f - 1 ? 1 : .5);
        if (i.system === `glass`) {
            let e = Math.max(2, Math.round((r - n) / h / .7));
            for (let t = 1; t < e; t++)
                _(n + (r - n) / e * t, T, n + (r - n) / e * t, E, `#777`, .2);
            _(n, (T + E) / 2, r, (T + E) / 2, `#777`, .35),
            v(n, T, r - n, E - T, `url(#glass)`, `none`, 0)
        } else {
            let a = (i.system === `pergola` ? e.slatPitch : e.panelPitch) * h
              , o = a < 2.2 ? a * 2 : a;
            for (let e = T + o; e < E - .3; e += o)
                _(n, e, r, e, i.system === `pergola` ? `#333` : `#555`, i.system === `pergola` ? .45 : .2);
            i.system === `pergola` && v(n, T, r - n, E - T, `url(#fabric)`, `none`, 0),
            v(w[t] + (t === 0 ? e.rail * h / 2 : 0) - e.motor[0] * h / 2, 22, e.motor[0] * h, e.motor[1] * h, `#9a9a9a`, `#111`, .2)
        }
        y((n + r) / 2, (T + E) / 2 + 1, `M${t + 1}`, 3.2, `middle`, `#444`)
    }
    let D = [];
    w.forEach( (t, n) => {
        let r = n === 0 ? t : n === f ? t - e.post * h : t - e.post * h / 2;
        HG || D.push([r, 22 + C - e.postD * h]),
        m || D.push([r, 22])
    }
    ),
    D.forEach( ([t,n]) => v(t, n, e.post * h, e.postD * h, `#222`, `#111`, .2));
    let O = {
        zip: `Z`,
        giy: `G`,
        giyc: `G*`,
        slide: `S`,
        door: `K`
    }
      , k = {
        zip: `#d98a1e`,
        giy: `#2aa7d9`,
        giyc: `#1fb3a0`,
        slide: `#8b6fd6`,
        door: `#c2415c`
    };
    [`front`, `back`].forEach(e => {
        let t = s.sideKinds(e, f)
          , n = e === `front` ? 22 + C + 1.6 : 20.4;
        t.forEach( (t, r) => {
            if (t === `none`)
                return;
            let i = w[r] + 1
              , a = w[r + 1] - 1;
            _(i, n, a, n, k[t], 1.1),
            y((i + a) / 2, e === `front` ? n + 3.4 : n - 1.6, O[t], 2.4, `middle`, k[t])
        }
        )
    }
    ),
    [`left`, `right`].forEach(e => {
        let t = s.sideKinds(e, 1)[0];
        if (t === `none`)
            return;
        let n = e === `left` ? x - 1.6 : x + S + 1.6;
        _(n, 23, n, 22 + C - 1, k[t], 1.1),
        y(n + (e === `left` ? -1.8 : 1.8), 22 + C / 2 + 1, O[t], 2.4, `middle`, k[t])
    }
    );
    let A = 22 + C + 9;
    f > 1 && w.slice(0, -1).forEach( (e, n) => b(e, w[n + 1], A, `h`, t(p))),
    b(x, x + S, A + (f > 1 ? 6 : 0), `h`, t(l)),
    b(22, 22 + C, x + S + 9, `v`, t(u)),
    y(210, 15, o.dr_plan || `PLAN · ÜST GÖRÜNÜŞ`, 3.4, `middle`, `#111`, `font-weight="700" letter-spacing="0.6"`),
    m && y(x - 3, 22 + C - 1, o.mount_wall || `Duvar`, 2.4, `end`, `#555`);
    let j = 210 - ((l + 2 * u) * h + 24) / 2
      , M = d * h
      , N = 234 - M + e.railH * h
      , P = (t, n, r, i, a) => {
        a && RZ > .05 ? g.push(`<polygon points="${t.toFixed(2)},${(234 - M - RZ * h).toFixed(2)} ${(t + n * h).toFixed(2)},${(234 - M).toFixed(2)} ${(t + n * h).toFixed(2)},${(234 - M + e.railH * h).toFixed(2)} ${t.toFixed(2)},${(234 - M - RZ * h + e.railH * h).toFixed(2)}" fill="#bdbdbd" stroke="#111" stroke-width="0.3"/>`) : (!a && RZ > .05 && (v(t, 234 - M - RZ * h + e.railH * h, n * h, RZ * h - e.railH * h, `#f4f4f4`, `#111`, .2),
        v(t, 234 - M - RZ * h, n * h, e.railH * h, `#e4e4e4`, `#111`, .25)),
        v(t, 234 - M, n * h, e.railH * h, `#bdbdbd`, `#111`, .3));
        let o = a ? [t, t + n * h - e.postD * h] : w.map( (n, r) => n - x + t + (r === 0 ? 0 : r === f ? -e.post * h : -(e.post * h) / 2))
          , xw = HG ? (AH + .3) * h : 3;
        a && m && v(t - 2.5, 234 - M - RZ * h - xw, 2.5, M + RZ * h + xw, `url(#hatch)`, `#111`, .3),
        a && HG && _(t, 234 - M - (RZ + AH) * h, t + n * h - e.gutter * h / 2, 234 - M, `#555`, .4),
        !a && RZ > .05 && o.forEach(x1 => v(x1, 234 - M - RZ * h, e.post * h, RZ * h, `#d6d6d6`, `#111`, .2)),
        o.forEach( (t, n) => {
            let up = a && n === 0 ? RZ * h : 0;
            a && m && n === 0 || HG && (!a || n === 1) || v(t, N - up, (a ? e.postD : e.post) * h, 234 - N + up, `#333`, `#111`, .2)
        }
        ),
        a && WG && r[0] !== `none` && (g.push(`<polygon points="${(t + e.postD * h).toFixed(2)},${N.toFixed(2)} ${(t + n * h - e.postD * h).toFixed(2)},${N.toFixed(2)} ${(t + n * h - e.postD * h).toFixed(2)},${(N - RZ * h * e.postD / n).toFixed(2)} ${(t + e.postD * h).toFixed(2)},${(N - RZ * h * (n - e.postD) / n).toFixed(2)}" fill="url(#glass)" stroke="#235" stroke-width="0.25"/>`),
        v(t + e.postD * h, N, n * h - 2 * e.postD * h, .08 * h, `#8c8c8c`, `#111`, .2));
        let s = a ? n * h : p * h;
        return r.forEach( (n, i) => {
            if (n === `none`)
                return;
            let o = t + s * i + (a ? e.postD : e.post) * h * (i === 0 ? 1 : .5)
              , c = t + s * (i + 1) - (a ? e.postD : e.post) * h * (i === r.length - 1 ? 1 : .5)
              , l = c - o
              , u = N + (a && WG ? .08 * h : 0)
              , f = 233.6
              , p = f - u;
            if (n === `zip`)
                v(o, u, l, .11 * h, `#8c8c8c`, `#111`, .2),
                v(o + .4, u + .11 * h, l - .8, p - .11 * h, `url(#hatch)`, `#444`, .2);
            else if (n === `giy` || n === `giyc`) {
                let e = d < 2.3 ? 2 : 3
                  , t = (p - .12 * h) / e;
                v(o, u, l, .12 * h, `#8c8c8c`, `#111`, .2);
                for (let n = 0; n < e; n++)
                    v(o + .3, u + .12 * h + t * n, l - .6, t, `url(#glass)`, `#235`, .25);
                n === `giyc` && y((o + c) / 2, u + .12 * h + t / 2 + 1, `↶`, 3, `middle`, `#1fb3a0`)
            } else if (n === `slide`) {
                let e = Math.min(6, Math.max(2, Math.round(l / h / .95)));
                v(o, u, l, .06 * h, `#8c8c8c`, `#111`, .2);
                for (let t = 0; t < e; t++)
                    v(o + l / e * t + .2, u + .06 * h, l / e - .4, p - .06 * h - .02 * h, `url(#glass)`, `#235`, .25);
                v(o, f - .02 * h, l, .02 * h, `#8c8c8c`, `#111`, .2)
            } else if (n === `door`) {
                let e = Math.min(.9, (l / h - .2) / 2) * h
                  , t = (o + c) / 2;
                v(o, u, l, .08 * h, `#8c8c8c`, `#111`, .2);
                let n = (l - 2 * e - .1 * h) / 2;
                n > 2 && (v(o, u + .08 * h, n, p - .08 * h, `url(#glass)`, `#235`, .25),
                v(c - n, u + .08 * h, n, p - .08 * h, `url(#glass)`, `#235`, .25)),
                [-1, 1].forEach(n => {
                    let r = n < 0 ? t - e : t;
                    v(r, u + .08 * h, e, p - .08 * h, `url(#glass)`, `#111`, .35),
                    g.push(`<circle cx="${(t - n * 2).toFixed(2)}" cy="${(u + p * .55).toFixed(2)}" r="0.5" fill="#111"/>`)
                }
                ),
                _(t, u + .08 * h, t, f, `#111`, .3)
            }
        }
        ),
        y(t + n * h / 2, 239.2, i, 3, `middle`, `#111`, `font-weight="700" letter-spacing="0.5"`),
        t + n * h
    }
      , F = j
      , I = P(F, u, s.sideKinds(`left`, 1), o.dr_left || `SOL GÖRÜNÜŞ`, !0);
    b(F, I, 244, `h`, t(u)),
    RZ > .05 && b(234 - M - RZ * h, 234, j - 5.5, `v`, t(d + RZ)),
    F = I + 12;
    let L = P(F, l, s.sideKinds(`front`, f), o.dr_front || `ÖN GÖRÜNÜŞ`, !1);
    f > 1 ? w.slice(0, -1).forEach( (e, n) => b(e - x + F, w[n + 1] - x + F, 244, `h`, t(p))) : b(F, L, 244, `h`, t(l)),
    b(234 - M, 234, F - 5, `v`, t(d)),
    F = L + 12;
    let R = P(F, u, s.sideKinds(`right`, 1), o.dr_right || `SAĞ GÖRÜNÜŞ`, !0);
    b(F, R, 244, `h`, t(u)),
    _(j - 6, 234, R + 6, 234, `#111`, .5),
    v(10, 252, 400, 36, `#fff`, `#111`, .5),
    c.logo ? g.push(`<image href="${c.logo}" x="14" y="256" width="46" height="18" preserveAspectRatio="xMinYMid meet"/>`) : y(14, 266, `WLAT SHADE`, 7, `start`, `#0f2742`, `font-weight="700"`),
    y(14, 280, `WLAT SHADE · 3D Studio by sh_adlll`, 2.4, `start`, `#555`),
    y(14, 285, typeof location < `u` && /^https?:$/.test(location.protocol) ? location.host : ``, 2.4, `start`, `#555`),
    _(66, 252, 66, 288, `#111`, .4);
    let z = (e, t, n, r, i=60) => {
        y(e, t, n, 2.5, `start`, `#666`),
        y(e + 20, t, r, 2.8, `start`, `#111`, `font-weight="600"`)
    }
    ;
    z(70, 259, o.dr_project || `Proje`, c.project || `—`),
    z(70, 266, o.dr_date || `Tarih`, c.date || new Date().toLocaleDateString(`tr-TR`)),
    z(70, 273, o.system || `Sistem`, o[`system_` + i.system] || i.system),
    z(70, 280, o.dr_code || `Kod`, c.code || `—`),
    _(150, 252, 150, 288, `#111`, .4);
    let B = r(i, a, o, s).filter( ([e]) => ![o.system || `Sistem`].includes(e))
      , V = [154, 282]
      , H = Math.ceil(B.length / 2);
    return B.forEach( ([e,t], n) => {
        let r = V[Math.floor(n / H)]
          , i = 258 + n % H * 4.6;
        y(r, i, e, 2.2, `start`, `#666`),
        y(r + 30, i, String(t).length > 48 ? String(t).slice(0, 47) + `…` : t, 2.4, `start`, `#111`)
    }
    ),
    y(410, 293, o.dr_note || `Ölçüler mm. Teklif eki, ön tasarım çizimidir; üretim çizimi değildir.`, 2.2, `end`, `#777`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 297" width="420mm" height="297mm" font-family="Helvetica, Arial, sans-serif">
<defs>
<pattern id="hatch" width="1.4" height="1.4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="1.4" stroke="#8a8a8a" stroke-width="0.3"/></pattern>
<pattern id="glass" width="2" height="2" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="#dbeafe"/><line x1="0" y1="2" x2="2" y2="0" stroke="#bcd3f5" stroke-width="0.2"/></pattern>
<pattern id="fabric" width="1" height="1" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="${n(i.fabricColour || `#e9e1cf`)}" fill-opacity="0.35"/></pattern>
</defs>
<rect x="0" y="0" width="420" height="297" fill="#fff"/>
<rect x="8" y="8" width="404" height="281" fill="none" stroke="#111" stroke-width="0.6"/>
${g.join(`
`)}
</svg>`
}
function iAw(st, meta, lb, api, opt={}) {
    let win = st.system === `winawn`
      , W = st.width
      , H = st.height
      , bx = win ? .13 : .2
      , al = win ? Math.max(.3, (H - bx - .2) / 2) : 0
      , P = win ? al : st.depth
      , drop = win ? 0 : (P - bx) * Math.tan(13 * Math.PI / 180)
      , hv = win ? .16 : .22
      , h = Math.min(300 / W, 100 / (P + .4), 330 / (W + P + 2.5), 62 / (H + .6))
      , g = []
      , ln = (x1, y1, x2, y2, c=`#111`, w=.25, ex=``) => g.push(`<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${c}" stroke-width="${w}" ${ex}/>`)
      , rc = (x, y, w, hh, f=`none`, c=`#111`, sw=.25, ex=``) => g.push(`<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${Math.max(.01, w).toFixed(2)}" height="${Math.max(.01, hh).toFixed(2)}" fill="${f}" stroke="${c}" stroke-width="${sw}" ${ex}/>`)
      , tx = (x, y, str, fs=3, an=`middle`, c=`#111`, ex=``) => g.push(`<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" font-size="${fs}" text-anchor="${an}" fill="${c}" font-family="Helvetica, Arial, sans-serif" ${ex}>${n(str)}</text>`)
      , pg = (pts, f, c=`#111`, sw=.25) => g.push(`<polygon points="${pts.map(p => p[0].toFixed(2) + `,` + p[1].toFixed(2)).join(` `)}" fill="${f}" stroke="${c}" stroke-width="${sw}"/>`)
      , dm = (a, b, c, dir, str) => {
        let k = `#9e1b34`;
        dir === `h` ? (ln(a, c, b, c, k, .2),
        ln(a, c - 1.2, a, c + 1.2, k, .2),
        ln(b, c - 1.2, b, c + 1.2, k, .2),
        tx((a + b) / 2, c - .8, str, 2.6, `middle`, k)) : (ln(c, a, c, b, k, .2),
        ln(c - 1.2, a, c + 1.2, a, k, .2),
        ln(c - 1.2, b, c + 1.2, b, k, .2),
        tx(c - .9, (a + b) / 2, str, 2.6, `middle`, k, `transform="rotate(-90 ${(c - .9).toFixed(2)} ${((a + b) / 2).toFixed(2)})"`))
    }
      , val = (x0, y0, w) => {
        let kind = st.valance;
        if (!kind || kind === `none`)
            return;
        let pts = [[x0, y0], [x0 + w, y0]];
        if (kind === `straight`)
            pts.push([x0 + w, y0 + hv * h], [x0, y0 + hv * h]);
        else {
            let nt = Math.max(4, Math.round(W / .28))
              , tw = w / nt
              , top = y0 + (hv - .07) * h;
            pts.push([x0 + w, top]);
            for (let i = 0; i < nt; i++) {
                let x1 = x0 + w - tw * i
                  , x2 = x1 - tw;
                if (kind === `zigzag`)
                    pts.push([(x1 + x2) / 2, y0 + hv * h], [x2, top]);
                else
                    for (let j = 1; j <= 6; j++) {
                        let q = j / 6;
                        pts.push([x1 + (x2 - x1) * q, top + .07 * h * 4 * q * (1 - q)])
                    }
            }
        }
        pg(pts, `url(#fabric)`, `#333`, .25)
    }
      , px = 210 - W * h / 2
      , py = 27;
    rc(px - 6, py - 3, W * h + 12, 3, `url(#hatch)`, `#111`, .3),
    rc(px + .02 * h, py + bx * h, (W - .04) * h, (P - bx) * h, `url(#fabric)`, `#333`, .3),
    rc(px, py, W * h, bx * h, `#8c8c8c`, `#111`, .3),
    rc(px - (win ? .02 * h : 0), py + P * h - .07 * h, (W + (win ? .04 : 0)) * h, .07 * h, `#cfcfcf`, `#111`, .25);
    if (win)
        [-1, 1].forEach(k => ln(210 + k * (W / 2 + .02) * h, py + .05 * h, 210 + k * (W / 2 + .02) * h, py + P * h, `#444`, .5));
    else
        (W > 5.2 ? [-(W / 2 - .4), 0, W / 2 - .4] : [-(W / 2 - .4), W / 2 - .4]).forEach( (ax, k) => {
            let dir = ax < 0 || ax === 0 && k === 1 ? 1 : -1
              , ex = 210 + (ax + dir * Math.min(.5, W * .08)) * h
              , ey = py + (bx + (P - bx) / 2) * h;
            ln(210 + ax * h, py + bx * h, ex, ey, `#444`, .5),
            ln(ex, ey, 210 + ax * h, py + P * h - .07 * h, `#444`, .5),
            g.push(`<circle cx="${ex.toFixed(2)}" cy="${ey.toFixed(2)}" r="0.7" fill="#444"/>`)
        }
        );
    tx(210, py + (bx + (P - bx) / 2) * h + 1, st.fabricName || ``, 3, `middle`, `#444`),
    dm(px, px + W * h, py + P * h + 8, `h`, t(W)),
    dm(py, py + P * h, px + W * h + 9, `v`, t(P)),
    tx(210, 15, lb.dr_plan || `PLAN · ÜST GÖRÜNÜŞ`, 3.4, `middle`, `#111`, `font-weight="700" letter-spacing="0.6"`),
    tx(px - 8, py - .6, lb.mount_wall || `Duvar`, 2.4, `end`, `#555`);
    let x0 = 210 - ((W + P + .6) * h + 22) / 2
      , sx = x0 + 2.5
      , yb = 234
      , ys = yb - (H - bx * .55) * h
      , ye = ys + drop * h;
    rc(x0, yb - (H + .5) * h, 2.5, (H + .5) * h, `url(#hatch)`, `#111`, .3),
    rc(sx, yb - H * h, bx * h, bx * h, `#8c8c8c`, `#111`, .3);
    if (win) {
        let pvx = sx + .05 * h
          , pvy = yb - (al + .12) * h
          , ax = pvx + al * h;
        rc(sx, yb - (H - bx - .04) * h, .7, (H - bx - .14) * h, `url(#glass)`, `#235`, .2),
        ln(pvx, pvy, pvx + .1 * al * h, yb - .14 * h, `#999`, .3, `stroke-dasharray="1.2 1"`),
        ln(sx + bx * .75 * h, yb - (H - bx) * h, pvx + .1 * al * h, yb - .14 * h, `#999`, .3, `stroke-dasharray="1.2 1"`),
        ln(sx + bx * .75 * h, yb - (H - bx) * h, ax, pvy, `#333`, .6),
        ln(pvx, pvy, ax, pvy, `#444`, .55),
        rc(ax - .03 * h, pvy - .03 * h, .07 * h, .06 * h, `#cfcfcf`, `#111`, .2),
        st.valance && st.valance !== `none` && ln(ax + .02 * h, pvy + .03 * h, ax + .02 * h, pvy + (.03 + hv) * h, `#333`, .5),
        g.push(`<circle cx="${pvx.toFixed(2)}" cy="${pvy.toFixed(2)}" r="0.7" fill="#444"/>`)
    } else {
        let ex = sx + P * h;
        ln(sx + bx * h, ys, ex, ye, `#333`, .6),
        ln(sx + .09 * h, yb - (H - bx - .04) * h, ex - .04 * h, ye + .03 * h, `#555`, .45),
        rc(ex - .03 * h, ye, .07 * h, .06 * h, `#cfcfcf`, `#111`, .2),
        st.valance && st.valance !== `none` && ln(ex + .02 * h, ye + .06 * h, ex + .02 * h, ye + (.06 + hv) * h, `#333`, .5)
    }
    tx(sx + P * h / 2, 239.2, lb.dr_side || `SIDE VIEW`, 3, `middle`, `#111`, `font-weight="700" letter-spacing="0.5"`),
    dm(sx, sx + P * h, 244, `h`, t(P)),
    dm(yb - H * h, yb, x0 - 4.5, `v`, t(H));
    let fx = sx + P * h + 20;
    rc(fx, yb - H * h, W * h, bx * h, `#8c8c8c`, `#111`, .3);
    if (win) {
        let fb = yb - (al + .12) * h;
        rc(fx + .08 * h, yb - (H - bx - .04) * h, (W - .16) * h, (H - bx - .14) * h, `url(#glass)`, `#235`, .25),
        rc(fx + .02 * h, yb - (H - bx) * h, (W - .04) * h, fb - (yb - (H - bx) * h), `url(#fabric)`, `#333`, .3),
        rc(fx - .02 * h, fb - .03 * h, (W + .04) * h, .06 * h, `#cfcfcf`, `#111`, .25),
        val(fx + .015 * h, fb + .03 * h, (W - .03) * h)
    } else {
        let dw = Math.min(W - .8, 3.4)
          , dh = Math.min(2.15, H - bx - .25);
        rc(fx + (W - dw) / 2 * h, yb - dh * h, dw * h, dh * h, `url(#glass)`, `#235`, .25),
        [1, 2].forEach(k => ln(fx + ((W - dw) / 2 + dw * k / 3) * h, yb - dh * h, fx + ((W - dw) / 2 + dw * k / 3) * h, yb, `#235`, .25)),
        rc(fx + .02 * h, ys, (W - .04) * h, drop * h, `url(#fabric)`, `#333`, .3),
        rc(fx, ye, W * h, .06 * h, `#cfcfcf`, `#111`, .25),
        val(fx + .015 * h, ye + .06 * h, (W - .03) * h)
    }
    tx(fx + W * h / 2, 239.2, lb.dr_front || `ÖN GÖRÜNÜŞ`, 3, `middle`, `#111`, `font-weight="700" letter-spacing="0.5"`),
    dm(fx, fx + W * h, 244, `h`, t(W)),
    ln(x0 - 6, yb, fx + W * h + 6, yb, `#111`, .5),
    rc(10, 252, 400, 36, `#fff`, `#111`, .5),
    opt.logo ? g.push(`<image href="${opt.logo}" x="14" y="256" width="46" height="18" preserveAspectRatio="xMinYMid meet"/>`) : tx(14, 266, `WLAT SHADE`, 7, `start`, `#0f2742`, `font-weight="700"`),
    tx(14, 280, `WLAT SHADE · 3D Studio by sh_adlll`, 2.4, `start`, `#555`),
    tx(14, 285, typeof location < `u` && /^https?:$/.test(location.protocol) ? location.host : ``, 2.4, `start`, `#555`),
    ln(66, 252, 66, 288, `#111`, .4);
    let cell = (x, y, a, b) => {
        tx(x, y, a, 2.5, `start`, `#666`),
        tx(x + 20, y, b, 2.8, `start`, `#111`, `font-weight="600"`)
    }
    ;
    cell(70, 259, lb.dr_project || `Proje`, opt.project || `—`),
    cell(70, 266, lb.dr_date || `Tarih`, opt.date || new Date().toLocaleDateString(`tr-TR`)),
    cell(70, 273, lb.system || `Sistem`, lb[`system_` + st.system] || st.system),
    cell(70, 280, lb.dr_code || `Kod`, opt.code || `—`),
    ln(150, 252, 150, 288, `#111`, .4);
    let rows = r(st, meta, lb, api).filter( ([k]) => ![lb.system || `Sistem`].includes(k))
      , cols = [154, 282]
      , per = Math.ceil(rows.length / 2);
    return rows.forEach( ([k,v], idx) => {
        let cx = cols[Math.floor(idx / per)]
          , cy = 258 + idx % per * 4.6;
        tx(cx, cy, k, 2.2, `start`, `#666`),
        tx(cx + 30, cy, String(v).length > 48 ? String(v).slice(0, 47) + `…` : v, 2.4, `start`, `#111`)
    }
    ),
    tx(410, 293, lb.dr_note || `Ölçüler mm. Teklif eki, ön tasarım çizimidir; üretim çizimi değildir.`, 2.2, `end`, `#777`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 297" width="420mm" height="297mm" font-family="Helvetica, Arial, sans-serif">
<defs>
<pattern id="hatch" width="1.4" height="1.4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="1.4" stroke="#8a8a8a" stroke-width="0.3"/></pattern>
<pattern id="glass" width="2" height="2" patternUnits="userSpaceOnUse"><rect width="2" height="2" fill="#dbeafe"/><line x1="0" y1="2" x2="2" y2="0" stroke="#bcd3f5" stroke-width="0.2"/></pattern>
<pattern id="fabric" width="1" height="1" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="${n(st.fabricColour || `#e9e1cf`)}" fill-opacity="0.45"/></pattern>
</defs>
<rect x="0" y="0" width="420" height="297" fill="#fff"/>
<rect x="8" y="8" width="404" height="281" fill="none" stroke="#111" stroke-width="0.6"/>
${g.join(`
`)}
</svg>`
}
async function a(e) {
    try {
        let t = await (await fetch(e, {
            credentials: `same-origin`
        })).blob();
        return await new Promise(e => {
            let n = new FileReader;
            n.onload = () => e(n.result),
            n.readAsDataURL(t)
        }
        )
    } catch {
        return null
    }
}
function o(e, t) {
    return c(e, 3307, 2339).then(e => e.toBlob(e => {
        let n = document.createElement(`a`);
        n.href = URL.createObjectURL(e),
        n.download = t,
        document.body.appendChild(n),
        n.click(),
        n.remove(),
        setTimeout( () => URL.revokeObjectURL(n.href), 6e3)
    }
    , `image/png`))
}
function s(e, t) {
    return c(e, 3307, 2339).then(e => {
        let n = e.toDataURL(`image/jpeg`, .92)
          , r = atob(n.split(`,`)[1])
          , i = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++)
            i[e] = r.charCodeAt(e);
        let a = 1190.55
          , o = 841.89
          , s = new TextEncoder
          , c = []
          , l = []
          , u = 0
          , d = e => {
            let t = typeof e == `string` ? s.encode(e) : e;
            c.push(t),
            u += t.length
        }
        ;
        d(`%PDF-1.4
%âãÏÓ
`);
        let f = (e, t) => {
            l[e] = u,
            d(`${e} 0 obj\n`),
            typeof t == `string` ? d(t) : t.forEach(d),
            d(`
endobj
`)
        }
        ;
        f(1, `<< /Type /Catalog /Pages 2 0 R >>`),
        f(2, `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`),
        f(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${a} ${o}] /Resources << /XObject << /Im1 4 0 R >> >> /Contents 5 0 R >>`),
        f(4, [`<< /Type /XObject /Subtype /Image /Width ${e.width} /Height ${e.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${i.length} >>\nstream\n`, i, `
endstream`]);
        let p = `q ${a} 0 0 ${o} 0 0 cm /Im1 Do Q`;
        f(5, `<< /Length ${p.length} >>\nstream\n${p}\nendstream`);
        let m = u;
        d(`xref
0 6
0000000000 65535 f 
` + [1, 2, 3, 4, 5].map(e => String(l[e]).padStart(10, `0`) + ` 00000 n 
`).join(``) + `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${m}\n%%EOF\n`);
        let h = new Blob(c,{
            type: `application/pdf`
        })
          , g = document.createElement(`a`);
        g.href = URL.createObjectURL(h),
        g.download = t,
        g.rel = `noopener`,
        document.body.appendChild(g),
        g.click(),
        g.remove(),
        setTimeout( () => URL.revokeObjectURL(g.href), 6e3)
    }
    )
}
function c(e, t, n) {
    return new Promise( (r, i) => {
        let a = `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(e)
          , o = new Image;
        o.onload = () => {
            let e = document.createElement(`canvas`);
            e.width = t,
            e.height = n;
            let i = e.getContext(`2d`);
            i.fillStyle = `#fff`,
            i.fillRect(0, 0, t, n),
            i.drawImage(o, 0, 0, t, n),
            r(e)
        }
        ,
        o.onerror = e => i(e),
        o.src = a
    }
    )
}
export {s as downloadPDF, o as downloadPNG, i as drawingSVG, r as specRows, a as toDataUrl};
