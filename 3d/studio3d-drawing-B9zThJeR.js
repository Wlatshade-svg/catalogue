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
    return e.system !== `glass` && l.push([e.system === `pergola` ? r.slat_colour || `Çıta` : r.panel_colour || `Panel`, e.panelSep ? e.panelColourName : r.dr_same || `iskelet ile aynı`]),
    e.system === `pergola` && l.push([r.fabric_colour || `Kumaş`, e.fabricName]),
    l.push([r.sides || `Kapamalar`, s.length ? s.join(` · `) : r.kind_none || `Açık`]),
    l.push([`LED`, c.length ? `${c.join(`, `)} · ${r[`led_mode_` + e.ledMode] || e.ledMode} · %${Math.round(e.ledDim * 100)}` : r.off || `Yok`]),
    l.push([r.dr_motor || `Motor`, e.system === `glass` ? `—` : r.dr_motor_val || `Somfy / Mosel / Cuppon 120 Nm · uzaktan kumanda`]),
    l
}
function i(i, a, o, s, c={}) {
    let l = i.width
      , u = i.depth
      , d = i.height
      , f = a.modules || 1
      , p = l / f
      , m = i.mount === `wall`
      , h = Math.min(372 / (l + 2 * u), 110 / u, 300 / l, 66 / (d + .5))
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
        D.push([r, 22 + C - e.postD * h]),
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
        v(t, 234 - M, n * h, e.railH * h, `#bdbdbd`, `#111`, .3);
        let o = a ? [t, t + n * h - e.postD * h] : w.map( (n, r) => n - x + t + (r === 0 ? 0 : r === f ? -e.post * h : -(e.post * h) / 2));
        a && m && v(t - 2.5, 234 - M - 3, 2.5, M + 3, `url(#hatch)`, `#111`, .3),
        o.forEach( (t, n) => {
            a && m && n === 0 || v(t, N, (a ? e.postD : e.post) * h, 234 - N, `#333`, `#111`, .2)
        }
        );
        let s = a ? n * h : p * h;
        return r.forEach( (n, i) => {
            if (n === `none`)
                return;
            let o = t + s * i + (a ? e.postD : e.post) * h * (i === 0 ? 1 : .5)
              , c = t + s * (i + 1) - (a ? e.postD : e.post) * h * (i === r.length - 1 ? 1 : .5)
              , l = c - o
              , u = N
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
