import {r as e} from "./motion-B7PB-XZy.js";
var t = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , n = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}
  , r = 1e3
  , i = 1001
  , a = 1002
  , o = 1003
  , s = 1004
  , c = 1005
  , l = 1006
  , u = 1007
  , d = 1008
  , f = 1009
  , p = 1010
  , m = 1011
  , h = 1012
  , g = 1013
  , _ = 1014
  , v = 1015
  , y = 1016
  , b = 1017
  , x = 1018
  , S = 1020
  , C = 35902
  , w = 35899
  , T = 1021
  , E = 1022
  , D = 1023
  , O = 1026
  , k = 1027
  , A = 1028
  , j = 1029
  , M = 1030
  , N = 1031
  , ee = 1033
  , P = 33776
  , te = 33777
  , ne = 33778
  , re = 33779
  , ie = 35840
  , F = 35841
  , ae = 35842
  , oe = 35843
  , se = 36196
  , I = 37492
  , ce = 37496
  , le = 37488
  , ue = 37489
  , de = 37490
  , fe = 37491
  , pe = 37808
  , me = 37809
  , he = 37810
  , ge = 37811
  , _e = 37812
  , ve = 37813
  , ye = 37814
  , be = 37815
  , xe = 37816
  , Se = 37817
  , Ce = 37818
  , we = 37819
  , Te = 37820
  , Ee = 37821
  , L = 36492
  , De = 36494
  , Oe = 36495
  , ke = 36283
  , R = 36284
  , Ae = 36285
  , z = 36286
  , B = 2300
  , je = 2301
  , Me = 2302
  , Ne = 2400
  , Pe = 2401
  , Fe = 2402
  , Ie = 3200
  , Le = `srgb`
  , Re = `srgb-linear`
  , ze = `linear`
  , Be = `srgb`
  , Ve = 7680
  , He = 35044
  , Ue = 2e3;
function We(e) {
    for (let t = e.length - 1; t >= 0; --t)
        if (e[t] >= 65535)
            return !0;
    return !1
}
function V(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
function Ge(e) {
    return document.createElementNS(`http://www.w3.org/1999/xhtml`, e)
}
function H() {
    let e = Ge(`canvas`);
    return e.style.display = `block`,
    e
}
var Ke = {};
function qe(...e) {
    let t = `THREE.` + e.shift();
    console.log(t, ...e)
}
function U(...e) {
    let t = `THREE.` + e.shift();
    console.warn(t, ...e)
}
function W(...e) {
    let t = `THREE.` + e.shift();
    console.error(t, ...e)
}
function Je(...e) {
    let t = e.join(` `);
    t in Ke || (Ke[t] = !0,
    U(...e))
}
function Ye(e, t, n) {
    return new Promise(function(r, i) {
        function a() {
            switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case e.WAIT_FAILED:
                i();
                break;
            case e.TIMEOUT_EXPIRED:
                setTimeout(a, n);
                break;
            default:
                r()
            }
        }
        setTimeout(a, n)
    }
    )
}
var Xe = class {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        let n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        let n = this._listeners;
        return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        let n = this._listeners;
        if (n === void 0)
            return;
        let r = n[e];
        if (r !== void 0) {
            let e = r.indexOf(t);
            e !== -1 && r.splice(e, 1)
        }
    }
    dispatchEvent(e) {
        let t = this._listeners;
        if (t === void 0)
            return;
        let n = t[e.type];
        if (n !== void 0) {
            e.target = this;
            let t = n.slice(0);
            for (let n = 0, r = t.length; n < r; n++)
                t[n].call(this, e);
            e.target = null
        }
    }
}
  , Ze = `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`)
  , Qe = 1234567
  , $e = Math.PI / 180
  , et = 180 / Math.PI;
function tt() {
    let e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0
      , r = Math.random() * 4294967295 | 0;
    return (Ze[e & 255] + Ze[e >> 8 & 255] + Ze[e >> 16 & 255] + Ze[e >> 24 & 255] + `-` + Ze[t & 255] + Ze[t >> 8 & 255] + `-` + Ze[t >> 16 & 15 | 64] + Ze[t >> 24 & 255] + `-` + Ze[n & 63 | 128] + Ze[n >> 8 & 255] + `-` + Ze[n >> 16 & 255] + Ze[n >> 24 & 255] + Ze[r & 255] + Ze[r >> 8 & 255] + Ze[r >> 16 & 255] + Ze[r >> 24 & 255]).toLowerCase()
}
function G(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function nt(e, t) {
    return (e % t + t) % t
}
function rt(e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t)
}
function it(e, t, n) {
    return e === t ? 0 : (n - e) / (t - e)
}
function at(e, t, n) {
    return (1 - n) * e + n * t
}
function ot(e, t, n, r) {
    return at(e, t, 1 - Math.exp(-n * r))
}
function st(e, t=1) {
    return t - Math.abs(nt(e, t * 2) - t)
}
function ct(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t),
    e * e * (3 - 2 * e))
}
function lt(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t),
    e * e * e * (e * (e * 6 - 15) + 10))
}
function ut(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1))
}
function dt(e, t) {
    return e + Math.random() * (t - e)
}
function K(e) {
    return e * (.5 - Math.random())
}
function ft(e) {
    e !== void 0 && (Qe = e);
    let t = Qe += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1),
    t ^= t + Math.imul(t ^ t >>> 7, t | 61),
    ((t ^ t >>> 14) >>> 0) / 4294967296
}
function pt(e) {
    return e * $e
}
function mt(e) {
    return e * et
}
function ht(e) {
    return (e & e - 1) == 0 && e !== 0
}
function gt(e) {
    return 2 ** Math.ceil(Math.log(e) / Math.LN2)
}
function _t(e) {
    return 2 ** Math.floor(Math.log(e) / Math.LN2)
}
function vt(e, t, n, r, i) {
    let a = Math.cos
      , o = Math.sin
      , s = a(n / 2)
      , c = o(n / 2)
      , l = a((t + r) / 2)
      , u = o((t + r) / 2)
      , d = a((t - r) / 2)
      , f = o((t - r) / 2)
      , p = a((r - t) / 2)
      , m = o((r - t) / 2);
    switch (i) {
    case `XYX`:
        e.set(s * u, c * d, c * f, s * l);
        break;
    case `YZY`:
        e.set(c * f, s * u, c * d, s * l);
        break;
    case `ZXZ`:
        e.set(c * d, c * f, s * u, s * l);
        break;
    case `XZX`:
        e.set(s * u, c * m, c * p, s * l);
        break;
    case `YXY`:
        e.set(c * p, s * u, c * m, s * l);
        break;
    case `ZYZ`:
        e.set(c * m, c * p, s * u, s * l);
        break;
    default:
        U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` + i)
    }
}
function yt(e, t) {
    switch (t.constructor) {
    case Float32Array:
        return e;
    case Uint32Array:
        return e / 4294967295;
    case Uint16Array:
        return e / 65535;
    case Uint8Array:
        return e / 255;
    case Int32Array:
        return Math.max(e / 2147483647, -1);
    case Int16Array:
        return Math.max(e / 32767, -1);
    case Int8Array:
        return Math.max(e / 127, -1);
    default:
        throw Error(`Invalid component type.`)
    }
}
function bt(e, t) {
    switch (t.constructor) {
    case Float32Array:
        return e;
    case Uint32Array:
        return Math.round(e * 4294967295);
    case Uint16Array:
        return Math.round(e * 65535);
    case Uint8Array:
        return Math.round(e * 255);
    case Int32Array:
        return Math.round(e * 2147483647);
    case Int16Array:
        return Math.round(e * 32767);
    case Int8Array:
        return Math.round(e * 127);
    default:
        throw Error(`Invalid component type.`)
    }
}
var q = {
    DEG2RAD: $e,
    RAD2DEG: et,
    generateUUID: tt,
    clamp: G,
    euclideanModulo: nt,
    mapLinear: rt,
    inverseLerp: it,
    lerp: at,
    damp: ot,
    pingpong: st,
    smoothstep: ct,
    smootherstep: lt,
    randInt: ut,
    randFloat: dt,
    randFloatSpread: K,
    seededRandom: ft,
    degToRad: pt,
    radToDeg: mt,
    isPowerOfTwo: ht,
    ceilPowerOfTwo: gt,
    floorPowerOfTwo: _t,
    setQuaternionFromProperEuler: vt,
    normalize: bt,
    denormalize: yt
}
  , J = class e {
    constructor(t=0, n=0) {
        e.prototype.isVector2 = !0,
        this.x = t,
        this.y = n
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw Error(`index is out of range: ` + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw Error(`index is out of range: ` + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        let t = this.x
          , n = this.y
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6],
        this.y = r[1] * t + r[4] * n + r[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = G(this.x, e.x, t.x),
        this.y = G(this.y, e.y, t.y),
        this
    }
    clampScalar(e, t) {
        return this.x = G(this.x, e, t),
        this.y = G(this.y, e, t),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(G(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(G(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        let t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        let n = Math.cos(t)
          , r = Math.sin(t)
          , i = this.x - e.x
          , a = this.y - e.y;
        return this.x = i * n - a * r + e.x,
        this.y = i * r + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
  , xt = class {
    constructor(e=0, t=0, n=0, r=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = r
    }
    static slerpFlat(e, t, n, r, i, a, o) {
        let s = n[r + 0]
          , c = n[r + 1]
          , l = n[r + 2]
          , u = n[r + 3]
          , d = i[a + 0]
          , f = i[a + 1]
          , p = i[a + 2]
          , m = i[a + 3];
        if (o <= 0) {
            e[t + 0] = s,
            e[t + 1] = c,
            e[t + 2] = l,
            e[t + 3] = u;
            return
        }
        if (o >= 1) {
            e[t + 0] = d,
            e[t + 1] = f,
            e[t + 2] = p,
            e[t + 3] = m;
            return
        }
        if (u !== m || s !== d || c !== f || l !== p) {
            let e = s * d + c * f + l * p + u * m;
            e < 0 && (d = -d,
            f = -f,
            p = -p,
            m = -m,
            e = -e);
            let t = 1 - o;
            if (e < .9995) {
                let n = Math.acos(e)
                  , r = Math.sin(n);
                t = Math.sin(t * n) / r,
                o = Math.sin(o * n) / r,
                s = s * t + d * o,
                c = c * t + f * o,
                l = l * t + p * o,
                u = u * t + m * o
            } else {
                s = s * t + d * o,
                c = c * t + f * o,
                l = l * t + p * o,
                u = u * t + m * o;
                let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
                s *= e,
                c *= e,
                l *= e,
                u *= e
            }
        }
        e[t] = s,
        e[t + 1] = c,
        e[t + 2] = l,
        e[t + 3] = u
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
        let o = n[r]
          , s = n[r + 1]
          , c = n[r + 2]
          , l = n[r + 3]
          , u = i[a]
          , d = i[a + 1]
          , f = i[a + 2]
          , p = i[a + 3];
        return e[t] = o * p + l * u + s * f - c * d,
        e[t + 1] = s * p + l * d + c * u - o * f,
        e[t + 2] = c * p + l * f + o * d - s * u,
        e[t + 3] = l * p - o * u - s * d - c * f,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        let n = e._x
          , r = e._y
          , i = e._z
          , a = e._order
          , o = Math.cos
          , s = Math.sin
          , c = o(n / 2)
          , l = o(r / 2)
          , u = o(i / 2)
          , d = s(n / 2)
          , f = s(r / 2)
          , p = s(i / 2);
        switch (a) {
        case `XYZ`:
            this._x = d * l * u + c * f * p,
            this._y = c * f * u - d * l * p,
            this._z = c * l * p + d * f * u,
            this._w = c * l * u - d * f * p;
            break;
        case `YXZ`:
            this._x = d * l * u + c * f * p,
            this._y = c * f * u - d * l * p,
            this._z = c * l * p - d * f * u,
            this._w = c * l * u + d * f * p;
            break;
        case `ZXY`:
            this._x = d * l * u - c * f * p,
            this._y = c * f * u + d * l * p,
            this._z = c * l * p + d * f * u,
            this._w = c * l * u - d * f * p;
            break;
        case `ZYX`:
            this._x = d * l * u - c * f * p,
            this._y = c * f * u + d * l * p,
            this._z = c * l * p - d * f * u,
            this._w = c * l * u + d * f * p;
            break;
        case `YZX`:
            this._x = d * l * u + c * f * p,
            this._y = c * f * u + d * l * p,
            this._z = c * l * p - d * f * u,
            this._w = c * l * u - d * f * p;
            break;
        case `XZY`:
            this._x = d * l * u - c * f * p,
            this._y = c * f * u - d * l * p,
            this._z = c * l * p + d * f * u,
            this._w = c * l * u + d * f * p;
            break;
        default:
            U(`Quaternion: .setFromEuler() encountered an unknown order: ` + a)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        let n = t / 2
          , r = Math.sin(n);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        let t = e.elements
          , n = t[0]
          , r = t[4]
          , i = t[8]
          , a = t[1]
          , o = t[5]
          , s = t[9]
          , c = t[2]
          , l = t[6]
          , u = t[10]
          , d = n + o + u;
        if (d > 0) {
            let e = .5 / Math.sqrt(d + 1);
            this._w = .25 / e,
            this._x = (l - s) * e,
            this._y = (i - c) * e,
            this._z = (a - r) * e
        } else if (n > o && n > u) {
            let e = 2 * Math.sqrt(1 + n - o - u);
            this._w = (l - s) / e,
            this._x = .25 * e,
            this._y = (r + a) / e,
            this._z = (i + c) / e
        } else if (o > u) {
            let e = 2 * Math.sqrt(1 + o - n - u);
            this._w = (i - c) / e,
            this._x = (r + a) / e,
            this._y = .25 * e,
            this._z = (s + l) / e
        } else {
            let e = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - r) / e,
            this._x = (i + c) / e,
            this._y = (s + l) / e,
            this._z = .25 * e
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < 1e-8 ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(G(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        let n = this.angleTo(e);
        if (n === 0)
            return this;
        let r = Math.min(1, t / n);
        return this.slerp(e, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x *= e,
        this._y *= e,
        this._z *= e,
        this._w *= e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        let n = e._x
          , r = e._y
          , i = e._z
          , a = e._w
          , o = t._x
          , s = t._y
          , c = t._z
          , l = t._w;
        return this._x = n * l + a * o + r * c - i * s,
        this._y = r * l + a * s + i * o - n * c,
        this._z = i * l + a * c + n * s - r * o,
        this._w = a * l - n * o - r * s - i * c,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t <= 0)
            return this;
        if (t >= 1)
            return this.copy(e);
        let n = e._x
          , r = e._y
          , i = e._z
          , a = e._w
          , o = this.dot(e);
        o < 0 && (n = -n,
        r = -r,
        i = -i,
        a = -a,
        o = -o);
        let s = 1 - t;
        if (o < .9995) {
            let e = Math.acos(o)
              , c = Math.sin(e);
            s = Math.sin(s * e) / c,
            t = Math.sin(t * e) / c,
            this._x = this._x * s + n * t,
            this._y = this._y * s + r * t,
            this._z = this._z * s + i * t,
            this._w = this._w * s + a * t,
            this._onChangeCallback()
        } else
            this._x = this._x * s + n * t,
            this._y = this._y * s + r * t,
            this._z = this._z * s + i * t,
            this._w = this._w * s + a * t,
            this.normalize();
        return this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        let e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , r = Math.sqrt(1 - n)
          , i = Math.sqrt(n);
        return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
  , Y = class e {
    constructor(t=0, n=0, r=0) {
        e.prototype.isVector3 = !0,
        this.x = t,
        this.y = n,
        this.z = r
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw Error(`index is out of range: ` + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw Error(`index is out of range: ` + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(Ct.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Ct.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        let t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6] * r,
        this.y = i[1] * t + i[4] * n + i[7] * r,
        this.z = i[2] * t + i[5] * n + i[8] * r,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        let t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements
          , a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
        return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a,
        this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a,
        this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a,
        this
    }
    applyQuaternion(e) {
        let t = this.x
          , n = this.y
          , r = this.z
          , i = e.x
          , a = e.y
          , o = e.z
          , s = e.w
          , c = 2 * (a * r - o * n)
          , l = 2 * (o * t - i * r)
          , u = 2 * (i * n - a * t);
        return this.x = t + s * c + a * u - o * l,
        this.y = n + s * l + o * c - i * u,
        this.z = r + s * u + i * l - a * c,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        let t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements;
        return this.x = i[0] * t + i[4] * n + i[8] * r,
        this.y = i[1] * t + i[5] * n + i[9] * r,
        this.z = i[2] * t + i[6] * n + i[10] * r,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = G(this.x, e.x, t.x),
        this.y = G(this.y, e.y, t.y),
        this.z = G(this.z, e.z, t.z),
        this
    }
    clampScalar(e, t) {
        return this.x = G(this.x, e, t),
        this.y = G(this.y, e, t),
        this.z = G(this.z, e, t),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(G(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        let n = e.x
          , r = e.y
          , i = e.z
          , a = t.x
          , o = t.y
          , s = t.z;
        return this.x = r * s - i * o,
        this.y = i * a - n * s,
        this.z = n * o - r * a,
        this
    }
    projectOnVector(e) {
        let t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        let n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return St.copy(this).projectOnVector(e),
        this.sub(St)
    }
    reflect(e) {
        return this.sub(St.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(G(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        let t = this.x - e.x
          , n = this.y - e.y
          , r = this.z - e.z;
        return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        let r = Math.sin(t) * e;
        return this.x = r * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = r * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        let t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        let t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = r,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        let e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
  , St = new Y
  , Ct = new xt
  , X = class e {
    constructor(t, n, r, i, a, o, s, c, l) {
        e.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        t !== void 0 && this.set(t, n, r, i, a, o, s, c, l)
    }
    set(e, t, n, r, i, a, o, s, c) {
        let l = this.elements;
        return l[0] = e,
        l[1] = r,
        l[2] = o,
        l[3] = t,
        l[4] = i,
        l[5] = s,
        l[6] = n,
        l[7] = a,
        l[8] = c,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        let t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        let t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        let n = e.elements
          , r = t.elements
          , i = this.elements
          , a = n[0]
          , o = n[3]
          , s = n[6]
          , c = n[1]
          , l = n[4]
          , u = n[7]
          , d = n[2]
          , f = n[5]
          , p = n[8]
          , m = r[0]
          , h = r[3]
          , g = r[6]
          , _ = r[1]
          , v = r[4]
          , y = r[7]
          , b = r[2]
          , x = r[5]
          , S = r[8];
        return i[0] = a * m + o * _ + s * b,
        i[3] = a * h + o * v + s * x,
        i[6] = a * g + o * y + s * S,
        i[1] = c * m + l * _ + u * b,
        i[4] = c * h + l * v + u * x,
        i[7] = c * g + l * y + u * S,
        i[2] = d * m + f * _ + p * b,
        i[5] = d * h + f * v + p * x,
        i[8] = d * g + f * y + p * S,
        this
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , i = e[3]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , c = e[7]
          , l = e[8];
        return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s
    }
    invert() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , i = e[3]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , c = e[7]
          , l = e[8]
          , u = l * a - o * c
          , d = o * s - l * i
          , f = c * i - a * s
          , p = t * u + n * d + r * f;
        if (p === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let m = 1 / p;
        return e[0] = u * m,
        e[1] = (r * c - l * n) * m,
        e[2] = (o * n - r * a) * m,
        e[3] = d * m,
        e[4] = (l * t - r * s) * m,
        e[5] = (r * i - o * t) * m,
        e[6] = f * m,
        e[7] = (n * s - c * t) * m,
        e[8] = (a * t - n * i) * m,
        this
    }
    transpose() {
        let e, t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        let t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, r, i, a, o) {
        let s = Math.cos(i)
          , c = Math.sin(i);
        return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(wt.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(wt.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(wt.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        let t = this.elements
          , n = e.elements;
        for (let e = 0; e < 9; e++)
            if (t[e] !== n[e])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        let n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
  , wt = new X
  , Tt = new X().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , Et = new X().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Dt() {
    let e = {
        enabled: !0,
        workingColorSpace: Re,
        spaces: {},
        convert: function(e, t, n) {
            return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === `srgb` && (e.r = kt(e.r),
            e.g = kt(e.g),
            e.b = kt(e.b)),
            this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ),
            e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` && (e.r = At(e.r),
            e.g = At(e.g),
            e.b = At(e.b)),
            e)
        },
        workingToColorSpace: function(e, t) {
            return this.convert(e, this.workingColorSpace, t)
        },
        colorSpaceToWorking: function(e, t) {
            return this.convert(e, t, this.workingColorSpace)
        },
        getPrimaries: function(e) {
            return this.spaces[e].primaries
        },
        getTransfer: function(e) {
            return e === `` ? ze : this.spaces[e].transfer
        },
        getToneMappingMode: function(e) {
            return this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
        },
        getLuminanceCoefficients: function(e, t=this.workingColorSpace) {
            return e.fromArray(this.spaces[t].luminanceCoefficients)
        },
        define: function(e) {
            Object.assign(this.spaces, e)
        },
        _getMatrix: function(e, t, n) {
            return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)
        },
        _getDrawingBufferColorSpace: function(e) {
            return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace
        },
        _getUnpackColorSpace: function(e=this.workingColorSpace) {
            return this.spaces[e].workingColorSpaceConfig.unpackColorSpace
        },
        fromWorkingColorSpace: function(t, n) {
            return Je(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),
            e.workingToColorSpace(t, n)
        },
        toWorkingColorSpace: function(t, n) {
            return Je(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),
            e.colorSpaceToWorking(t, n)
        }
    }
      , t = [.64, .33, .3, .6, .15, .06]
      , n = [.2126, .7152, .0722]
      , r = [.3127, .329];
    return e.define({
        [Re]: {
            primaries: t,
            whitePoint: r,
            transfer: ze,
            toXYZ: Tt,
            fromXYZ: Et,
            luminanceCoefficients: n,
            workingColorSpaceConfig: {
                unpackColorSpace: Le
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Le
            }
        },
        [Le]: {
            primaries: t,
            whitePoint: r,
            transfer: Be,
            toXYZ: Tt,
            fromXYZ: Et,
            luminanceCoefficients: n,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Le
            }
        }
    }),
    e
}
var Ot = Dt();
function kt(e) {
    return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4
}
function At(e) {
    return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055
}
var jt, Mt = class {
    static getDataURL(e, t=`image/png`) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`)
            return e.src;
        let n;
        if (e instanceof HTMLCanvasElement)
            n = e;
        else {
            jt === void 0 && (jt = Ge(`canvas`)),
            jt.width = e.width,
            jt.height = e.height;
            let t = jt.getContext(`2d`);
            e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height),
            n = jt
        }
        return n.toDataURL(t)
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
            let t = Ge(`canvas`);
            t.width = e.width,
            t.height = e.height;
            let n = t.getContext(`2d`);
            n.drawImage(e, 0, 0, e.width, e.height);
            let r = n.getImageData(0, 0, e.width, e.height)
              , i = r.data;
            for (let e = 0; e < i.length; e++)
                i[e] = kt(i[e] / 255) * 255;
            return n.putImageData(r, 0, 0),
            t
        } else if (e.data) {
            let t = e.data.slice(0);
            for (let e = 0; e < t.length; e++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(kt(t[e] / 255) * 255) : t[e] = kt(t[e]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),
            e
    }
}
, Nt = 0, Pt = class {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: Nt++
        }),
        this.uuid = tt(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    getSize(e) {
        let t = this.data;
        return typeof HTMLVideoElement < `u` && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < `u` && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0),
        e
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == `string`;
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        let n = {
            uuid: this.uuid,
            url: ``
        }
          , r = this.data;
        if (r !== null) {
            let e;
            if (Array.isArray(r)) {
                e = [];
                for (let t = 0, n = r.length; t < n; t++)
                    r[t].isDataTexture ? e.push(Ft(r[t].image)) : e.push(Ft(r[t]))
            } else
                e = Ft(r);
            n.url = e
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
;
function Ft(e) {
    return typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap ? Mt.getDataURL(e) : e.data ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name
    } : (U(`Texture: Unable to serialize Texture.`),
    {})
}
var It = 0
  , Lt = new Y
  , Rt = class e extends Xe {
    constructor(t=e.DEFAULT_IMAGE, n=e.DEFAULT_MAPPING, r=i, a=i, o=l, s=d, c=D, u=f, p=e.DEFAULT_ANISOTROPY, m=``) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: It++
        }),
        this.uuid = tt(),
        this.name = ``,
        this.source = new Pt(t),
        this.mipmaps = [],
        this.mapping = n,
        this.channel = 0,
        this.wrapS = r,
        this.wrapT = a,
        this.magFilter = o,
        this.minFilter = s,
        this.anisotropy = p,
        this.format = c,
        this.internalFormat = null,
        this.type = u,
        this.offset = new J(0,0),
        this.repeat = new J(1,1),
        this.center = new J(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new X,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = m,
        this.userData = {},
        this.updateRanges = [],
        this.version = 0,
        this.onUpdate = null,
        this.renderTarget = null,
        this.isRenderTargetTexture = !1,
        this.isArrayTexture = !!(t && t.depth && t.depth > 1),
        this.pmremVersion = 0
    }
    get width() {
        return this.source.getSize(Lt).x
    }
    get height() {
        return this.source.getSize(Lt).y
    }
    get depth() {
        return this.source.getSize(Lt).z
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.renderTarget = e.renderTarget,
        this.isRenderTargetTexture = e.isRenderTargetTexture,
        this.isArrayTexture = e.isArrayTexture,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    setValues(e) {
        for (let t in e) {
            let n = e[t];
            if (n === void 0) {
                U(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                continue
            }
            let r = this[t];
            if (r === void 0) {
                U(`Texture.setValues(): property '${t}' does not exist.`);
                continue
            }
            r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n
        }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == `string`;
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        let n = {
            metadata: {
                version: 4.7,
                type: `Texture`,
                generator: `Texture.toJSON`
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        })
    }
    transformUv(e) {
        if (this.mapping !== 300)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case r:
                e.x -= Math.floor(e.x);
                break;
            case i:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case a:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case r:
                e.y -= Math.floor(e.y);
                break;
            case i:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case a:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
;
Rt.DEFAULT_IMAGE = null,
Rt.DEFAULT_MAPPING = 300,
Rt.DEFAULT_ANISOTROPY = 1;
var zt = class e {
    constructor(t=0, n=0, r=0, i=1) {
        e.prototype.isVector4 = !0,
        this.x = t,
        this.y = n,
        this.z = r,
        this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, r) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = r,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw Error(`index is out of range: ` + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw Error(`index is out of range: ` + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w === void 0 ? 1 : e.w,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        let t = this.x
          , n = this.y
          , r = this.z
          , i = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i,
        this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i,
        this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i,
        this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this.w /= e.w,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        let t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
        if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
            if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            let e = (c + 1) / 2
              , s = (f + 1) / 2
              , _ = (g + 1) / 2
              , v = (l + d) / 4
              , y = (u + m) / 4
              , b = (p + h) / 4;
            return e > s && e > _ ? e < a ? (n = 0,
            r = .707106781,
            i = .707106781) : (n = Math.sqrt(e),
            r = v / n,
            i = y / n) : s > _ ? s < a ? (n = .707106781,
            r = 0,
            i = .707106781) : (r = Math.sqrt(s),
            n = v / r,
            i = b / r) : _ < a ? (n = .707106781,
            r = .707106781,
            i = 0) : (i = Math.sqrt(_),
            n = y / i,
            r = b / i),
            this.set(n, r, i, t),
            this
        }
        let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
        return Math.abs(_) < .001 && (_ = 1),
        this.x = (h - p) / _,
        this.y = (u - m) / _,
        this.z = (d - l) / _,
        this.w = Math.acos((c + f + g - 1) / 2),
        this
    }
    setFromMatrixPosition(e) {
        let t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this.w = t[15],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = G(this.x, e.x, t.x),
        this.y = G(this.y, e.y, t.y),
        this.z = G(this.z, e.z, t.z),
        this.w = G(this.w, e.w, t.w),
        this
    }
    clampScalar(e, t) {
        return this.x = G(this.x, e, t),
        this.y = G(this.y, e, t),
        this.z = G(this.z, e, t),
        this.w = G(this.w, e, t),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(G(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
  , Bt = class extends Xe {
    constructor(e=1, t=1, n={}) {
        super(),
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: l,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1
        }, n),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = n.depth,
        this.scissor = new zt(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new zt(0,0,e,t);
        let r = new Rt({
            width: e,
            height: t,
            depth: n.depth
        });
        this.textures = [];
        let i = n.count;
        for (let e = 0; e < i; e++)
            this.textures[e] = r.clone(),
            this.textures[e].isRenderTargetTexture = !0,
            this.textures[e].renderTarget = this;
        this._setTextureOptions(n),
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this._depthTexture = null,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples,
        this.multiview = n.multiview
    }
    _setTextureOptions(e={}) {
        let t = {
            minFilter: l,
            generateMipmaps: !1,
            flipY: !1,
            internalFormat: null
        };
        e.mapping !== void 0 && (t.mapping = e.mapping),
        e.wrapS !== void 0 && (t.wrapS = e.wrapS),
        e.wrapT !== void 0 && (t.wrapT = e.wrapT),
        e.wrapR !== void 0 && (t.wrapR = e.wrapR),
        e.magFilter !== void 0 && (t.magFilter = e.magFilter),
        e.minFilter !== void 0 && (t.minFilter = e.minFilter),
        e.format !== void 0 && (t.format = e.format),
        e.type !== void 0 && (t.type = e.type),
        e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
        e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
        e.flipY !== void 0 && (t.flipY = e.flipY),
        e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
        e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
        for (let e = 0; e < this.textures.length; e++)
            this.textures[e].setValues(t)
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    set depthTexture(e) {
        this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        e !== null && (e.renderTarget = this),
        this._depthTexture = e
    }
    get depthTexture() {
        return this._depthTexture
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let r = 0, i = this.textures.length; r < i; r++)
                this.textures[r].image.width = e,
                this.textures[r].image.height = t,
                this.textures[r].image.depth = n,
                this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let t = 0, n = e.textures.length; t < n; t++) {
            this.textures[t] = e.textures[t].clone(),
            this.textures[t].isRenderTargetTexture = !0,
            this.textures[t].renderTarget = this;
            let n = Object.assign({}, e.textures[t].image);
            this.textures[t].source = new Pt(n)
        }
        return this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        })
    }
}
  , Vt = class extends Bt {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
  , Ht = class extends Rt {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = o,
        this.minFilter = o,
        this.wrapR = i,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(e) {
        this.layerUpdates.add(e)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
  , Ut = class extends Rt {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = o,
        this.minFilter = o,
        this.wrapR = i,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
  , Wt = class {
    constructor(e=new Y(1 / 0,1 / 0,1 / 0), t=new Y(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(Kt.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(Kt.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        let n = Kt.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        let n = e.geometry;
        if (n !== void 0) {
            let r = n.getAttribute(`position`);
            if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
                for (let t = 0, n = r.count; t < n; t++)
                    e.isMesh === !0 ? e.getVertexPosition(t, Kt) : Kt.fromBufferAttribute(r, t),
                    Kt.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(Kt);
            else
                e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(),
                qt.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(),
                qt.copy(e.boundingBox)),
                qt.applyMatrix4(e.matrixWorld),
                this.union(qt)
        }
        let r = e.children;
        for (let e = 0, n = r.length; e < n; e++)
            this.expandByObject(r[e], t);
        return this
    }
    containsPoint(e) {
        return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Kt),
        Kt.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(en),
        tn.subVectors(this.max, en),
        Jt.subVectors(e.a, en),
        Yt.subVectors(e.b, en),
        Xt.subVectors(e.c, en),
        Zt.subVectors(Yt, Jt),
        Qt.subVectors(Xt, Yt),
        $t.subVectors(Jt, Xt);
        let t = [0, -Zt.z, Zt.y, 0, -Qt.z, Qt.y, 0, -$t.z, $t.y, Zt.z, 0, -Zt.x, Qt.z, 0, -Qt.x, $t.z, 0, -$t.x, -Zt.y, Zt.x, 0, -Qt.y, Qt.x, 0, -$t.y, $t.x, 0];
        return !an(t, Jt, Yt, Xt, tn) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !an(t, Jt, Yt, Xt, tn)) ? !1 : (nn.crossVectors(Zt, Qt),
        t = [nn.x, nn.y, nn.z],
        an(t, Jt, Yt, Xt, tn))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, Kt).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(Kt).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (Gt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Gt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Gt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Gt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Gt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Gt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Gt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Gt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Gt),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
    toJSON() {
        return {
            min: this.min.toArray(),
            max: this.max.toArray()
        }
    }
    fromJSON(e) {
        return this.min.fromArray(e.min),
        this.max.fromArray(e.max),
        this
    }
}
  , Gt = [new Y, new Y, new Y, new Y, new Y, new Y, new Y, new Y]
  , Kt = new Y
  , qt = new Wt
  , Jt = new Y
  , Yt = new Y
  , Xt = new Y
  , Zt = new Y
  , Qt = new Y
  , $t = new Y
  , en = new Y
  , tn = new Y
  , nn = new Y
  , rn = new Y;
function an(e, t, n, r, i) {
    for (let a = 0, o = e.length - 3; a <= o; a += 3) {
        rn.fromArray(e, a);
        let o = i.x * Math.abs(rn.x) + i.y * Math.abs(rn.y) + i.z * Math.abs(rn.z)
          , s = t.dot(rn)
          , c = n.dot(rn)
          , l = r.dot(rn);
        if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o)
            return !1
    }
    return !0
}
var on = new Wt
  , sn = new Y
  , cn = new Y
  , ln = class {
    constructor(e=new Y, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        let n = this.center;
        t === void 0 ? on.setFromPoints(e).getCenter(n) : n.copy(t);
        let r = 0;
        for (let t = 0, i = e.length; t < i; t++)
            r = Math.max(r, n.distanceToSquared(e[t]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        let t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        let n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius *= e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        sn.subVectors(e, this.center);
        let t = sn.lengthSq();
        if (t > this.radius * this.radius) {
            let e = Math.sqrt(t)
              , n = (e - this.radius) * .5;
            this.center.addScaledVector(sn, n / e),
            this.radius += n
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (cn.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(sn.copy(e.center).add(cn)),
        this.expandByPoint(sn.copy(e.center).sub(cn))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        return {
            radius: this.radius,
            center: this.center.toArray()
        }
    }
    fromJSON(e) {
        return this.radius = e.radius,
        this.center.fromArray(e.center),
        this
    }
}
  , un = new Y
  , dn = new Y
  , fn = new Y
  , pn = new Y
  , mn = new Y
  , hn = new Y
  , gn = new Y
  , _n = class {
    constructor(e=new Y, t=new Y(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, un)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        let n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        let t = un.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.origin).addScaledVector(this.direction, t),
        un.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
        dn.copy(e).add(t).multiplyScalar(.5),
        fn.copy(t).sub(e).normalize(),
        pn.copy(this.origin).sub(dn);
        let i = e.distanceTo(t) * .5, a = -this.direction.dot(fn), o = pn.dot(this.direction), s = -pn.dot(fn), c = pn.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
        if (l > 0)
            if (u = a * s - o,
            d = a * o - s,
            p = i * l,
            u >= 0)
                if (d >= -p)
                    if (d <= p) {
                        let e = 1 / l;
                        u *= e,
                        d *= e,
                        f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c
                    } else
                        d = i,
                        u = Math.max(0, -(a * d + o)),
                        f = -u * u + d * (d + 2 * s) + c;
                else
                    d = -i,
                    u = Math.max(0, -(a * d + o)),
                    f = -u * u + d * (d + 2 * s) + c;
            else
                d <= -p ? (u = Math.max(0, -(-a * i + o)),
                d = u > 0 ? -i : Math.min(Math.max(-i, -s), i),
                f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0,
                d = Math.min(Math.max(-i, -s), i),
                f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)),
                d = u > 0 ? i : Math.min(Math.max(-i, -s), i),
                f = -u * u + d * (d + 2 * s) + c);
        else
            d = a > 0 ? -i : i,
            u = Math.max(0, -(a * d + o)),
            f = -u * u + d * (d + 2 * s) + c;
        return n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(dn).addScaledVector(fn, d),
        f
    }
    intersectSphere(e, t) {
        un.subVectors(e.center, this.origin);
        let n = un.dot(this.direction)
          , r = un.dot(un) - n * n
          , i = e.radius * e.radius;
        if (r > i)
            return null;
        let a = Math.sqrt(i - r)
          , o = n - a
          , s = n + a;
        return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        let t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        let n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        let n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        let t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
        return c >= 0 ? (n = (e.min.x - d.x) * c,
        r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c,
        r = (e.min.x - d.x) * c),
        l >= 0 ? (i = (e.min.y - d.y) * l,
        a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l,
        a = (e.min.y - d.y) * l),
        n > a || i > r || ((i > n || isNaN(n)) && (n = i),
        (a < r || isNaN(r)) && (r = a),
        u >= 0 ? (o = (e.min.z - d.z) * u,
        s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u,
        s = (e.min.z - d.z) * u),
        n > s || o > r) || ((o > n || n !== n) && (n = o),
        (s < r || r !== r) && (r = s),
        r < 0) ? null : this.at(n >= 0 ? n : r, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, un) !== null
    }
    intersectTriangle(e, t, n, r, i) {
        mn.subVectors(t, e),
        hn.subVectors(n, e),
        gn.crossVectors(mn, hn);
        let a = this.direction.dot(gn), o;
        if (a > 0) {
            if (r)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        pn.subVectors(this.origin, e);
        let s = o * this.direction.dot(hn.crossVectors(pn, hn));
        if (s < 0)
            return null;
        let c = o * this.direction.dot(mn.cross(pn));
        if (c < 0 || s + c > a)
            return null;
        let l = -o * pn.dot(gn);
        return l < 0 ? null : this.at(l / a, i)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , vn = class e {
    constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
        e.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t !== void 0 && this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g)
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
        let g = this.elements;
        return g[0] = e,
        g[4] = t,
        g[8] = n,
        g[12] = r,
        g[1] = i,
        g[5] = a,
        g[9] = o,
        g[13] = s,
        g[2] = c,
        g[6] = l,
        g[10] = u,
        g[14] = d,
        g[3] = f,
        g[7] = p,
        g[11] = m,
        g[15] = h,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new e().fromArray(this.elements)
    }
    copy(e) {
        let t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        let t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        let t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return this.determinant() === 0 ? (e.set(1, 0, 0),
        t.set(0, 1, 0),
        n.set(0, 0, 1),
        this) : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this)
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        if (e.determinant() === 0)
            return this.identity();
        let t = this.elements
          , n = e.elements
          , r = 1 / yn.setFromMatrixColumn(e, 0).length()
          , i = 1 / yn.setFromMatrixColumn(e, 1).length()
          , a = 1 / yn.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * r,
        t[1] = n[1] * r,
        t[2] = n[2] * r,
        t[3] = 0,
        t[4] = n[4] * i,
        t[5] = n[5] * i,
        t[6] = n[6] * i,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        let t = this.elements
          , n = e.x
          , r = e.y
          , i = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , s = Math.cos(r)
          , c = Math.sin(r)
          , l = Math.cos(i)
          , u = Math.sin(i);
        if (e.order === `XYZ`) {
            let e = a * l
              , n = a * u
              , r = o * l
              , i = o * u;
            t[0] = s * l,
            t[4] = -s * u,
            t[8] = c,
            t[1] = n + r * c,
            t[5] = e - i * c,
            t[9] = -o * s,
            t[2] = i - e * c,
            t[6] = r + n * c,
            t[10] = a * s
        } else if (e.order === `YXZ`) {
            let e = s * l
              , n = s * u
              , r = c * l
              , i = c * u;
            t[0] = e + i * o,
            t[4] = r * o - n,
            t[8] = a * c,
            t[1] = a * u,
            t[5] = a * l,
            t[9] = -o,
            t[2] = n * o - r,
            t[6] = i + e * o,
            t[10] = a * s
        } else if (e.order === `ZXY`) {
            let e = s * l
              , n = s * u
              , r = c * l
              , i = c * u;
            t[0] = e - i * o,
            t[4] = -a * u,
            t[8] = r + n * o,
            t[1] = n + r * o,
            t[5] = a * l,
            t[9] = i - e * o,
            t[2] = -a * c,
            t[6] = o,
            t[10] = a * s
        } else if (e.order === `ZYX`) {
            let e = a * l
              , n = a * u
              , r = o * l
              , i = o * u;
            t[0] = s * l,
            t[4] = r * c - n,
            t[8] = e * c + i,
            t[1] = s * u,
            t[5] = i * c + e,
            t[9] = n * c - r,
            t[2] = -c,
            t[6] = o * s,
            t[10] = a * s
        } else if (e.order === `YZX`) {
            let e = a * s
              , n = a * c
              , r = o * s
              , i = o * c;
            t[0] = s * l,
            t[4] = i - e * u,
            t[8] = r * u + n,
            t[1] = u,
            t[5] = a * l,
            t[9] = -o * l,
            t[2] = -c * l,
            t[6] = n * u + r,
            t[10] = e - i * u
        } else if (e.order === `XZY`) {
            let e = a * s
              , n = a * c
              , r = o * s
              , i = o * c;
            t[0] = s * l,
            t[4] = -u,
            t[8] = c * l,
            t[1] = e * u + i,
            t[5] = a * l,
            t[9] = n * u - r,
            t[2] = r * u - n,
            t[6] = o * l,
            t[10] = i * u + e
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(xn, e, Sn)
    }
    lookAt(e, t, n) {
        let r = this.elements;
        return Tn.subVectors(e, t),
        Tn.lengthSq() === 0 && (Tn.z = 1),
        Tn.normalize(),
        Cn.crossVectors(n, Tn),
        Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Tn.x += 1e-4 : Tn.z += 1e-4,
        Tn.normalize(),
        Cn.crossVectors(n, Tn)),
        Cn.normalize(),
        wn.crossVectors(Tn, Cn),
        r[0] = Cn.x,
        r[4] = wn.x,
        r[8] = Tn.x,
        r[1] = Cn.y,
        r[5] = wn.y,
        r[9] = Tn.y,
        r[2] = Cn.z,
        r[6] = wn.z,
        r[10] = Tn.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        let n = e.elements
          , r = t.elements
          , i = this.elements
          , a = n[0]
          , o = n[4]
          , s = n[8]
          , c = n[12]
          , l = n[1]
          , u = n[5]
          , d = n[9]
          , f = n[13]
          , p = n[2]
          , m = n[6]
          , h = n[10]
          , g = n[14]
          , _ = n[3]
          , v = n[7]
          , y = n[11]
          , b = n[15]
          , x = r[0]
          , S = r[4]
          , C = r[8]
          , w = r[12]
          , T = r[1]
          , E = r[5]
          , D = r[9]
          , O = r[13]
          , k = r[2]
          , A = r[6]
          , j = r[10]
          , M = r[14]
          , N = r[3]
          , ee = r[7]
          , P = r[11]
          , te = r[15];
        return i[0] = a * x + o * T + s * k + c * N,
        i[4] = a * S + o * E + s * A + c * ee,
        i[8] = a * C + o * D + s * j + c * P,
        i[12] = a * w + o * O + s * M + c * te,
        i[1] = l * x + u * T + d * k + f * N,
        i[5] = l * S + u * E + d * A + f * ee,
        i[9] = l * C + u * D + d * j + f * P,
        i[13] = l * w + u * O + d * M + f * te,
        i[2] = p * x + m * T + h * k + g * N,
        i[6] = p * S + m * E + h * A + g * ee,
        i[10] = p * C + m * D + h * j + g * P,
        i[14] = p * w + m * O + h * M + g * te,
        i[3] = _ * x + v * T + y * k + b * N,
        i[7] = _ * S + v * E + y * A + b * ee,
        i[11] = _ * C + v * D + y * j + b * P,
        i[15] = _ * w + v * O + y * M + b * te,
        this
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        let e = this.elements
          , t = e[0]
          , n = e[4]
          , r = e[8]
          , i = e[12]
          , a = e[1]
          , o = e[5]
          , s = e[9]
          , c = e[13]
          , l = e[2]
          , u = e[6]
          , d = e[10]
          , f = e[14]
          , p = e[3]
          , m = e[7]
          , h = e[11]
          , g = e[15]
          , _ = s * f - c * d
          , v = o * f - c * u
          , y = o * d - s * u
          , b = a * f - c * l
          , x = a * d - s * l
          , S = a * u - o * l;
        return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S)
    }
    transpose() {
        let e = this.elements, t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        let r = this.elements;
        return e.isVector3 ? (r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z) : (r[12] = e,
        r[13] = t,
        r[14] = n),
        this
    }
    invert() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , i = e[3]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , c = e[7]
          , l = e[8]
          , u = e[9]
          , d = e[10]
          , f = e[11]
          , p = e[12]
          , m = e[13]
          , h = e[14]
          , g = e[15]
          , _ = u * h * c - m * d * c + m * s * f - o * h * f - u * s * g + o * d * g
          , v = p * d * c - l * h * c - p * s * f + a * h * f + l * s * g - a * d * g
          , y = l * m * c - p * u * c + p * o * f - a * m * f - l * o * g + a * u * g
          , b = p * u * s - l * m * s - p * o * d + a * m * d + l * o * h - a * u * h
          , x = t * _ + n * v + r * y + i * b;
        if (x === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        let S = 1 / x;
        return e[0] = _ * S,
        e[1] = (m * d * i - u * h * i - m * r * f + n * h * f + u * r * g - n * d * g) * S,
        e[2] = (o * h * i - m * s * i + m * r * c - n * h * c - o * r * g + n * s * g) * S,
        e[3] = (u * s * i - o * d * i - u * r * c + n * d * c + o * r * f - n * s * f) * S,
        e[4] = v * S,
        e[5] = (l * h * i - p * d * i + p * r * f - t * h * f - l * r * g + t * d * g) * S,
        e[6] = (p * s * i - a * h * i - p * r * c + t * h * c + a * r * g - t * s * g) * S,
        e[7] = (a * d * i - l * s * i + l * r * c - t * d * c - a * r * f + t * s * f) * S,
        e[8] = y * S,
        e[9] = (p * u * i - l * m * i - p * n * f + t * m * f + l * n * g - t * u * g) * S,
        e[10] = (a * m * i - p * o * i + p * n * c - t * m * c - a * n * g + t * o * g) * S,
        e[11] = (l * o * i - a * u * i - l * n * c + t * u * c + a * n * f - t * o * f) * S,
        e[12] = b * S,
        e[13] = (l * m * r - p * u * r + p * n * d - t * m * d - l * n * h + t * u * h) * S,
        e[14] = (p * o * r - a * m * r - p * n * s + t * m * s + a * n * h - t * o * h) * S,
        e[15] = (a * u * r - l * o * r + l * n * s - t * u * s - a * n * d + t * o * d) * S,
        this
    }
    scale(e) {
        let t = this.elements
          , n = e.x
          , r = e.y
          , i = e.z;
        return t[0] *= n,
        t[4] *= r,
        t[8] *= i,
        t[1] *= n,
        t[5] *= r,
        t[9] *= i,
        t[2] *= n,
        t[6] *= r,
        t[10] *= i,
        t[3] *= n,
        t[7] *= r,
        t[11] *= i,
        this
    }
    getMaxScaleOnAxis() {
        let e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        let n = Math.cos(t)
          , r = Math.sin(t)
          , i = 1 - n
          , a = e.x
          , o = e.y
          , s = e.z
          , c = i * a
          , l = i * o;
        return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, r, i, a) {
        return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        let r = this.elements
          , i = t._x
          , a = t._y
          , o = t._z
          , s = t._w
          , c = i + i
          , l = a + a
          , u = o + o
          , d = i * c
          , f = i * l
          , p = i * u
          , m = a * l
          , h = a * u
          , g = o * u
          , _ = s * c
          , v = s * l
          , y = s * u
          , b = n.x
          , x = n.y
          , S = n.z;
        return r[0] = (1 - (m + g)) * b,
        r[1] = (f + y) * b,
        r[2] = (p - v) * b,
        r[3] = 0,
        r[4] = (f - y) * x,
        r[5] = (1 - (d + g)) * x,
        r[6] = (h + _) * x,
        r[7] = 0,
        r[8] = (p + v) * S,
        r[9] = (h - _) * S,
        r[10] = (1 - (d + m)) * S,
        r[11] = 0,
        r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z,
        r[15] = 1,
        this
    }
    decompose(e, t, n) {
        let r = this.elements;
        if (e.x = r[12],
        e.y = r[13],
        e.z = r[14],
        this.determinant() === 0)
            return n.set(1, 1, 1),
            t.identity(),
            this;
        let i = yn.set(r[0], r[1], r[2]).length()
          , a = yn.set(r[4], r[5], r[6]).length()
          , o = yn.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (i = -i),
        bn.copy(this);
        let s = 1 / i
          , c = 1 / a
          , l = 1 / o;
        return bn.elements[0] *= s,
        bn.elements[1] *= s,
        bn.elements[2] *= s,
        bn.elements[4] *= c,
        bn.elements[5] *= c,
        bn.elements[6] *= c,
        bn.elements[8] *= l,
        bn.elements[9] *= l,
        bn.elements[10] *= l,
        t.setFromRotationMatrix(bn),
        n.x = i,
        n.y = a,
        n.z = o,
        this
    }
    makePerspective(e, t, n, r, i, a, o=Ue, s=!1) {
        let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
        if (s)
            p = i / (a - i),
            m = a * i / (a - i);
        else if (o === 2e3)
            p = -(a + i) / (a - i),
            m = -2 * a * i / (a - i);
        else if (o === 2001)
            p = -a / (a - i),
            m = -a * i / (a - i);
        else
            throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o);
        return c[0] = l,
        c[4] = 0,
        c[8] = d,
        c[12] = 0,
        c[1] = 0,
        c[5] = u,
        c[9] = f,
        c[13] = 0,
        c[2] = 0,
        c[6] = 0,
        c[10] = p,
        c[14] = m,
        c[3] = 0,
        c[7] = 0,
        c[11] = -1,
        c[15] = 0,
        this
    }
    makeOrthographic(e, t, n, r, i, a, o=Ue, s=!1) {
        let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
        if (s)
            p = 1 / (a - i),
            m = a / (a - i);
        else if (o === 2e3)
            p = -2 / (a - i),
            m = -(a + i) / (a - i);
        else if (o === 2001)
            p = -1 / (a - i),
            m = -i / (a - i);
        else
            throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o);
        return c[0] = l,
        c[4] = 0,
        c[8] = 0,
        c[12] = d,
        c[1] = 0,
        c[5] = u,
        c[9] = 0,
        c[13] = f,
        c[2] = 0,
        c[6] = 0,
        c[10] = p,
        c[14] = m,
        c[3] = 0,
        c[7] = 0,
        c[11] = 0,
        c[15] = 1,
        this
    }
    equals(e) {
        let t = this.elements
          , n = e.elements;
        for (let e = 0; e < 16; e++)
            if (t[e] !== n[e])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        let n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
  , yn = new Y
  , bn = new vn
  , xn = new Y(0,0,0)
  , Sn = new Y(1,1,1)
  , Cn = new Y
  , wn = new Y
  , Tn = new Y
  , En = new vn
  , Dn = new xt
  , On = class e {
    constructor(t=0, n=0, r=0, i=e.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = t,
        this._y = n,
        this._z = r,
        this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, r=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        let r = e.elements
          , i = r[0]
          , a = r[4]
          , o = r[8]
          , s = r[1]
          , c = r[5]
          , l = r[9]
          , u = r[2]
          , d = r[6]
          , f = r[10];
        switch (t) {
        case `XYZ`:
            this._y = Math.asin(G(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f),
            this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c),
            this._z = 0);
            break;
        case `YXZ`:
            this._x = Math.asin(-G(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f),
            this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i),
            this._z = 0);
            break;
        case `ZXY`:
            this._x = Math.asin(G(d, -1, 1)),
            Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f),
            this._z = Math.atan2(-a, c)) : (this._y = 0,
            this._z = Math.atan2(s, i));
            break;
        case `ZYX`:
            this._y = Math.asin(-G(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f),
            this._z = Math.atan2(s, i)) : (this._x = 0,
            this._z = Math.atan2(-a, c));
            break;
        case `YZX`:
            this._z = Math.asin(G(s, -1, 1)),
            Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c),
            this._y = Math.atan2(-u, i)) : (this._x = 0,
            this._y = Math.atan2(o, f));
            break;
        case `XZY`:
            this._z = Math.asin(-G(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c),
            this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f),
            this._y = 0);
            break;
        default:
            U(`Euler: .setFromRotationMatrix() encountered an unknown order: ` + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return En.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(En, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Dn.setFromEuler(this),
        this.setFromQuaternion(Dn, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
;
On.DEFAULT_ORDER = `XYZ`;
var kn = class {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) != 0
    }
}
  , An = 0
  , jn = new Y
  , Mn = new xt
  , Nn = new vn
  , Pn = new Y
  , Fn = new Y
  , In = new Y
  , Ln = new xt
  , Rn = new Y(1,0,0)
  , zn = new Y(0,1,0)
  , Bn = new Y(0,0,1)
  , Vn = {
    type: `added`
}
  , Hn = {
    type: `removed`
}
  , Un = {
    type: `childadded`,
    child: null
}
  , Wn = {
    type: `childremoved`,
    child: null
}
  , Gn = class e extends Xe {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: An++
        }),
        this.uuid = tt(),
        this.name = ``,
        this.type = `Object3D`,
        this.parent = null,
        this.children = [],
        this.up = e.DEFAULT_UP.clone();
        let t = new Y
          , n = new On
          , r = new xt
          , i = new Y(1,1,1);
        function a() {
            r.setFromEuler(n, !1)
        }
        function o() {
            n.setFromQuaternion(r, void 0, !1)
        }
        n._onChange(a),
        r._onChange(o),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new vn
            },
            normalMatrix: {
                value: new X
            }
        }),
        this.matrix = new vn,
        this.matrixWorld = new vn,
        this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new kn,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.customDepthMaterial = void 0,
        this.customDistanceMaterial = void 0,
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return Mn.setFromAxisAngle(e, t),
        this.quaternion.multiply(Mn),
        this
    }
    rotateOnWorldAxis(e, t) {
        return Mn.setFromAxisAngle(e, t),
        this.quaternion.premultiply(Mn),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(Rn, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(zn, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Bn, e)
    }
    translateOnAxis(e, t) {
        return jn.copy(e).applyQuaternion(this.quaternion),
        this.position.add(jn.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(Rn, e)
    }
    translateY(e) {
        return this.translateOnAxis(zn, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Bn, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(Nn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Pn.copy(e) : Pn.set(e, t, n);
        let r = this.parent;
        this.updateWorldMatrix(!0, !1),
        Fn.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? Nn.lookAt(Fn, Pn, this.up) : Nn.lookAt(Pn, Fn, this.up),
        this.quaternion.setFromRotationMatrix(Nn),
        r && (Nn.extractRotation(r.matrixWorld),
        Mn.setFromRotationMatrix(Nn),
        this.quaternion.premultiply(Mn.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return e === this ? (W(`Object3D.add: object can't be added as a child of itself.`, e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Vn),
        Un.child = e,
        this.dispatchEvent(Un),
        Un.child = null) : W(`Object3D.add: object not an instance of THREE.Object3D.`, e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.remove(arguments[e]);
            return this
        }
        let t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Hn),
        Wn.child = e,
        this.dispatchEvent(Wn),
        Wn.child = null),
        this
    }
    removeFromParent() {
        let e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        Nn.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        Nn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Nn),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(Vn),
        Un.child = e,
        this.dispatchEvent(Un),
        Un.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty(`id`, e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty(`name`, e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, r = this.children.length; n < r; n++) {
            let r = this.children[n].getObjectByProperty(e, t);
            if (r !== void 0)
                return r
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        let r = this.children;
        for (let i = 0, a = r.length; i < a; i++)
            r[i].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Fn, e, In),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Fn, Ln, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        let t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        let t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        let t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        let t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        let t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        let n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        t === !0) {
            let e = this.children;
            for (let t = 0, n = e.length; t < n; t++)
                e[t].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == `string`
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.7,
            type: `Object`,
            generator: `Object3D.toJSON`
        });
        let r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== `` && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        r.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh && (r.type = `InstancedMesh`,
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (r.type = `BatchedMesh`,
        r.perObjectFrustumCulled = this.perObjectFrustumCulled,
        r.sortObjects = this.sortObjects,
        r.drawRanges = this._drawRanges,
        r.reservedRanges = this._reservedRanges,
        r.geometryInfo = this._geometryInfo.map(e => ({
            ...e,
            boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
            boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
        })),
        r.instanceInfo = this._instanceInfo.map(e => ({
            ...e
        })),
        r.availableInstanceIds = this._availableInstanceIds.slice(),
        r.availableGeometryIds = this._availableGeometryIds.slice(),
        r.nextIndexStart = this._nextIndexStart,
        r.nextVertexStart = this._nextVertexStart,
        r.geometryCount = this._geometryCount,
        r.maxInstanceCount = this._maxInstanceCount,
        r.maxVertexCount = this._maxVertexCount,
        r.maxIndexCount = this._maxIndexCount,
        r.geometryInitialized = this._geometryInitialized,
        r.matricesTexture = this._matricesTexture.toJSON(e),
        r.indirectTexture = this._indirectTexture.toJSON(e),
        this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
        function i(t, n) {
            return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)),
            n.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = i(e.geometries, this.geometry);
            let t = this.geometry.parameters;
            if (t !== void 0 && t.shapes !== void 0) {
                let n = t.shapes;
                if (Array.isArray(n))
                    for (let t = 0, r = n.length; t < r; t++) {
                        let r = n[t];
                        i(e.shapes, r)
                    }
                else
                    i(e.shapes, n)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (i(e.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                let t = [];
                for (let n = 0, r = this.material.length; n < r; n++)
                    t.push(i(e.materials, this.material[n]));
                r.material = t
            } else
                r.material = i(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let t = 0; t < this.children.length; t++)
                r.children.push(this.children[t].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let t = 0; t < this.animations.length; t++) {
                let n = this.animations[t];
                r.animations.push(i(e.animations, n))
            }
        }
        if (t) {
            let t = a(e.geometries)
              , r = a(e.materials)
              , i = a(e.textures)
              , o = a(e.images)
              , s = a(e.shapes)
              , c = a(e.skeletons)
              , l = a(e.animations)
              , u = a(e.nodes);
            t.length > 0 && (n.geometries = t),
            r.length > 0 && (n.materials = r),
            i.length > 0 && (n.textures = i),
            o.length > 0 && (n.images = o),
            s.length > 0 && (n.shapes = s),
            c.length > 0 && (n.skeletons = c),
            l.length > 0 && (n.animations = l),
            u.length > 0 && (n.nodes = u)
        }
        return n.object = r,
        n;
        function a(e) {
            let t = [];
            for (let n in e) {
                let r = e[n];
                delete r.metadata,
                t.push(r)
            }
            return t
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                this.add(n.clone())
            }
        return this
    }
}
;
Gn.DEFAULT_UP = new Y(0,1,0),
Gn.DEFAULT_MATRIX_AUTO_UPDATE = !0,
Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Kn = new Y
  , qn = new Y
  , Jn = new Y
  , Yn = new Y
  , Xn = new Y
  , Zn = new Y
  , Qn = new Y
  , $n = new Y
  , er = new Y
  , tr = new Y
  , nr = new zt
  , rr = new zt
  , ir = new zt
  , ar = class e {
    constructor(e=new Y, t=new Y, n=new Y) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, r) {
        r.subVectors(n, t),
        Kn.subVectors(e, t),
        r.cross(Kn);
        let i = r.lengthSq();
        return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, i) {
        Kn.subVectors(r, t),
        qn.subVectors(n, t),
        Jn.subVectors(e, t);
        let a = Kn.dot(Kn)
          , o = Kn.dot(qn)
          , s = Kn.dot(Jn)
          , c = qn.dot(qn)
          , l = qn.dot(Jn)
          , u = a * c - o * o;
        if (u === 0)
            return i.set(0, 0, 0),
            null;
        let d = 1 / u
          , f = (c * s - o * l) * d
          , p = (a * l - o * s) * d;
        return i.set(1 - f - p, p, f)
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, Yn) !== null && Yn.x >= 0 && Yn.y >= 0 && Yn.x + Yn.y <= 1
    }
    static getInterpolation(e, t, n, r, i, a, o, s) {
        return this.getBarycoord(e, t, n, r, Yn) === null ? (s.x = 0,
        s.y = 0,
        `z` in s && (s.z = 0),
        `w` in s && (s.w = 0),
        null) : (s.setScalar(0),
        s.addScaledVector(i, Yn.x),
        s.addScaledVector(a, Yn.y),
        s.addScaledVector(o, Yn.z),
        s)
    }
    static getInterpolatedAttribute(e, t, n, r, i, a) {
        return nr.setScalar(0),
        rr.setScalar(0),
        ir.setScalar(0),
        nr.fromBufferAttribute(e, t),
        rr.fromBufferAttribute(e, n),
        ir.fromBufferAttribute(e, r),
        a.setScalar(0),
        a.addScaledVector(nr, i.x),
        a.addScaledVector(rr, i.y),
        a.addScaledVector(ir, i.z),
        a
    }
    static isFrontFacing(e, t, n, r) {
        return Kn.subVectors(n, t),
        qn.subVectors(e, t),
        Kn.cross(qn).dot(r) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[r]),
        this
    }
    setFromAttributeAndIndices(e, t, n, r) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Kn.subVectors(this.c, this.b),
        qn.subVectors(this.a, this.b),
        Kn.cross(qn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return e.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, n) {
        return e.getBarycoord(t, this.a, this.b, this.c, n)
    }
    getInterpolation(t, n, r, i, a) {
        return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a)
    }
    containsPoint(t) {
        return e.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return e.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        let n = this.a, r = this.b, i = this.c, a, o;
        Xn.subVectors(r, n),
        Zn.subVectors(i, n),
        $n.subVectors(e, n);
        let s = Xn.dot($n)
          , c = Zn.dot($n);
        if (s <= 0 && c <= 0)
            return t.copy(n);
        er.subVectors(e, r);
        let l = Xn.dot(er)
          , u = Zn.dot(er);
        if (l >= 0 && u <= l)
            return t.copy(r);
        let d = s * u - l * c;
        if (d <= 0 && s >= 0 && l <= 0)
            return a = s / (s - l),
            t.copy(n).addScaledVector(Xn, a);
        tr.subVectors(e, i);
        let f = Xn.dot(tr)
          , p = Zn.dot(tr);
        if (p >= 0 && f <= p)
            return t.copy(i);
        let m = f * c - s * p;
        if (m <= 0 && c >= 0 && p <= 0)
            return o = c / (c - p),
            t.copy(n).addScaledVector(Zn, o);
        let h = l * p - f * u;
        if (h <= 0 && u - l >= 0 && f - p >= 0)
            return Qn.subVectors(i, r),
            o = (u - l) / (u - l + (f - p)),
            t.copy(r).addScaledVector(Qn, o);
        let g = 1 / (h + m + d);
        return a = m * g,
        o = d * g,
        t.copy(n).addScaledVector(Xn, a).addScaledVector(Zn, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
  , or = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , sr = {
    h: 0,
    s: 0,
    l: 0
}
  , cr = {
    h: 0,
    s: 0,
    l: 0
};
function lr(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e
}
var Z = class {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            let t = e;
            t && t.isColor ? this.copy(t) : typeof t == `number` ? this.setHex(t) : typeof t == `string` && this.setStyle(t)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=Le) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        Ot.colorSpaceToWorking(this, t),
        this
    }
    setRGB(e, t, n, r=Ot.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        Ot.colorSpaceToWorking(this, r),
        this
    }
    setHSL(e, t, n, r=Ot.workingColorSpace) {
        if (e = nt(e, 1),
        t = G(t, 0, 1),
        n = G(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            let r = n <= .5 ? n * (1 + t) : n + t - n * t
              , i = 2 * n - r;
            this.r = lr(i, r, e + 1 / 3),
            this.g = lr(i, r, e),
            this.b = lr(i, r, e - 1 / 3)
        }
        return Ot.colorSpaceToWorking(this, r),
        this
    }
    setStyle(e, t=Le) {
        function n(t) {
            t !== void 0 && parseFloat(t) < 1 && U(`Color: Alpha component of ` + e + ` will be ignored.`)
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let i, a = r[1], o = r[2];
            switch (a) {
            case `rgb`:
            case `rgba`:
                if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(i[4]),
                    this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
                if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(i[4]),
                    this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
                break;
            case `hsl`:
            case `hsla`:
                if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(i[4]),
                    this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
                break;
            default:
                U(`Color: Unknown color model ` + e)
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            let n = r[1]
              , i = n.length;
            if (i === 3)
                return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
            if (i === 6)
                return this.setHex(parseInt(n, 16), t);
            U(`Color: Invalid hex color ` + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=Le) {
        let n = or[e.toLowerCase()];
        return n === void 0 ? U(`Color: Unknown color ` + e) : this.setHex(n, t),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = kt(e.r),
        this.g = kt(e.g),
        this.b = kt(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = At(e.r),
        this.g = At(e.g),
        this.b = At(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=Le) {
        return Ot.workingToColorSpace(ur.copy(this), e),
        Math.round(G(ur.r * 255, 0, 255)) * 65536 + Math.round(G(ur.g * 255, 0, 255)) * 256 + Math.round(G(ur.b * 255, 0, 255))
    }
    getHexString(e=Le) {
        return (`000000` + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=Ot.workingColorSpace) {
        Ot.workingToColorSpace(ur.copy(this), t);
        let n = ur.r, r = ur.g, i = ur.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
        if (o === a)
            s = 0,
            c = 0;
        else {
            let e = a - o;
            switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o),
            a) {
            case n:
                s = (r - i) / e + (r < i ? 6 : 0);
                break;
            case r:
                s = (i - n) / e + 2;
                break;
            case i:
                s = (n - r) / e + 4;
                break
            }
            s /= 6
        }
        return e.h = s,
        e.s = c,
        e.l = l,
        e
    }
    getRGB(e, t=Ot.workingColorSpace) {
        return Ot.workingToColorSpace(ur.copy(this), t),
        e.r = ur.r,
        e.g = ur.g,
        e.b = ur.b,
        e
    }
    getStyle(e=Le) {
        Ot.workingToColorSpace(ur.copy(this), e);
        let t = ur.r
          , n = ur.g
          , r = ur.b;
        return e === `srgb` ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(sr),
        this.setHSL(sr.h + e, sr.s + t, sr.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(sr),
        e.getHSL(cr);
        let n = at(sr.h, cr.h, t)
          , r = at(sr.s, cr.s, t)
          , i = at(sr.l, cr.l, t);
        return this.setHSL(n, r, i),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        let t = this.r
          , n = this.g
          , r = this.b
          , i = e.elements;
        return this.r = i[0] * t + i[3] * n + i[6] * r,
        this.g = i[1] * t + i[4] * n + i[7] * r,
        this.b = i[2] * t + i[5] * n + i[8] * r,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
  , ur = new Z;
Z.NAMES = or;
var dr = 0
  , fr = class extends Xe {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: dr++
        }),
        this.uuid = tt(),
        this.name = ``,
        this.type = `Material`,
        this.blending = 1,
        this.side = 0,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = 204,
        this.blendDst = 205,
        this.blendEquation = 100,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new Z(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = 3,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = 519,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = Ve,
        this.stencilZFail = Ve,
        this.stencilZPass = Ve,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.allowOverride = !0,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (let t in e) {
                let n = e[t];
                if (n === void 0) {
                    U(`Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                let r = this[t];
                if (r === void 0) {
                    U(`Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == `string`;
        t && (e = {
            textures: {},
            images: {}
        });
        let n = {
            metadata: {
                version: 4.7,
                type: `Material`,
                generator: `Material.toJSON`
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== `` && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
        this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== 1 && (n.blending = this.blending),
        this.side !== 0 && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== 204 && (n.blendSrc = this.blendSrc),
        this.blendDst !== 205 && (n.blendDst = this.blendDst),
        this.blendEquation !== 100 && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== 3 && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.allowOverride === !1 && (n.allowOverride = !1),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== `round` && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== `round` && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function r(e) {
            let t = [];
            for (let n in e) {
                let r = e[n];
                delete r.metadata,
                t.push(r)
            }
            return t
        }
        if (t) {
            let t = r(e.textures)
              , i = r(e.images);
            t.length > 0 && (n.textures = t),
            i.length > 0 && (n.images = i)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        let t = e.clippingPlanes
          , n = null;
        if (t !== null) {
            let e = t.length;
            n = Array(e);
            for (let r = 0; r !== e; ++r)
                n[r] = t[r].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.allowOverride = e.allowOverride,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
  , pr = class extends fr {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = `MeshBasicMaterial`,
        this.color = new Z(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new On,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = `round`,
        this.wireframeLinejoin = `round`,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
  , mr = new Y
  , hr = new J
  , gr = 0
  , _r = class {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);
        this.isBufferAttribute = !0,
        Object.defineProperty(this, "id", {
            value: gr++
        }),
        this.name = ``,
        this.array = e,
        this.itemSize = t,
        this.count = e === void 0 ? 0 : e.length / t,
        this.normalized = n,
        this.usage = He,
        this.updateRanges = [],
        this.gpuType = v,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let r = 0, i = this.itemSize; r < i; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                hr.fromBufferAttribute(this, t),
                hr.applyMatrix3(e),
                this.setXY(t, hr.x, hr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                mr.fromBufferAttribute(this, t),
                mr.applyMatrix3(e),
                this.setXYZ(t, mr.x, mr.y, mr.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            mr.fromBufferAttribute(this, t),
            mr.applyMatrix4(e),
            this.setXYZ(t, mr.x, mr.y, mr.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            mr.fromBufferAttribute(this, t),
            mr.applyNormalMatrix(e),
            this.setXYZ(t, mr.x, mr.y, mr.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            mr.fromBufferAttribute(this, t),
            mr.transformDirection(e),
            this.setXYZ(t, mr.x, mr.y, mr.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = yt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = bt(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e *= this.itemSize,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array),
        r = bt(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, i) {
        return e *= this.itemSize,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array),
        r = bt(r, this.array),
        i = bt(i, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this.array[e + 3] = i,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        let e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== `` && (e.name = this.name),
        this.usage !== 35044 && (e.usage = this.usage),
        e
    }
}
  , vr = class extends _r {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
  , yr = class extends _r {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
  , br = class extends _r {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
  , xr = 0
  , Sr = new vn
  , Cr = new Gn
  , wr = new Y
  , Tr = new Wt
  , Er = new Wt
  , Dr = new Y
  , Or = class e extends Xe {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: xr++
        }),
        this.uuid = tt(),
        this.name = ``,
        this.type = `BufferGeometry`,
        this.index = null,
        this.indirect = null,
        this.indirectOffset = 0,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (We(e) ? yr : vr)(e,1) : this.index = e,
        this
    }
    setIndirect(e, t=0) {
        return this.indirect = e,
        this.indirectOffset = t,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        let t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        let n = this.attributes.normal;
        if (n !== void 0) {
            let t = new X().getNormalMatrix(e);
            n.applyNormalMatrix(t),
            n.needsUpdate = !0
        }
        let r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(e),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return Sr.makeRotationFromQuaternion(e),
        this.applyMatrix4(Sr),
        this
    }
    rotateX(e) {
        return Sr.makeRotationX(e),
        this.applyMatrix4(Sr),
        this
    }
    rotateY(e) {
        return Sr.makeRotationY(e),
        this.applyMatrix4(Sr),
        this
    }
    rotateZ(e) {
        return Sr.makeRotationZ(e),
        this.applyMatrix4(Sr),
        this
    }
    translate(e, t, n) {
        return Sr.makeTranslation(e, t, n),
        this.applyMatrix4(Sr),
        this
    }
    scale(e, t, n) {
        return Sr.makeScale(e, t, n),
        this.applyMatrix4(Sr),
        this
    }
    lookAt(e) {
        return Cr.lookAt(e),
        Cr.updateMatrix(),
        this.applyMatrix4(Cr.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(wr).negate(),
        this.translate(wr.x, wr.y, wr.z),
        this
    }
    setFromPoints(e) {
        let t = this.getAttribute(`position`);
        if (t === void 0) {
            let t = [];
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                t.push(r.x, r.y, r.z || 0)
            }
            this.setAttribute(`position`, new br(t,3))
        } else {
            let n = Math.min(e.length, t.count);
            for (let r = 0; r < n; r++) {
                let n = e[r];
                t.setXYZ(r, n.x, n.y, n.z || 0)
            }
            e.length > t.count && U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),
            t.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Wt);
        let e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`, this),
            this.boundingBox.set(new Y(-1 / 0,-1 / 0,-1 / 0), new Y(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let e = 0, n = t.length; e < n; e++) {
                    let n = t[e];
                    Tr.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (Dr.addVectors(this.boundingBox.min, Tr.min),
                    this.boundingBox.expandByPoint(Dr),
                    Dr.addVectors(this.boundingBox.max, Tr.max),
                    this.boundingBox.expandByPoint(Dr)) : (this.boundingBox.expandByPoint(Tr.min),
                    this.boundingBox.expandByPoint(Tr.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`, this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ln);
        let e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`, this),
            this.boundingSphere.set(new Y, 1 / 0);
            return
        }
        if (e) {
            let n = this.boundingSphere.center;
            if (Tr.setFromBufferAttribute(e),
            t)
                for (let e = 0, n = t.length; e < n; e++) {
                    let n = t[e];
                    Er.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (Dr.addVectors(Tr.min, Er.min),
                    Tr.expandByPoint(Dr),
                    Dr.addVectors(Tr.max, Er.max),
                    Tr.expandByPoint(Dr)) : (Tr.expandByPoint(Er.min),
                    Tr.expandByPoint(Er.max))
                }
            Tr.getCenter(n);
            let r = 0;
            for (let t = 0, i = e.count; t < i; t++)
                Dr.fromBufferAttribute(e, t),
                r = Math.max(r, n.distanceToSquared(Dr));
            if (t)
                for (let i = 0, a = t.length; i < a; i++) {
                    let a = t[i]
                      , o = this.morphTargetsRelative;
                    for (let t = 0, i = a.count; t < i; t++)
                        Dr.fromBufferAttribute(a, t),
                        o && (wr.fromBufferAttribute(e, t),
                        Dr.add(wr)),
                        r = Math.max(r, n.distanceToSquared(Dr))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`, this)
        }
    }
    computeTangents() {
        let e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);
            return
        }
        let n = t.position
          , r = t.normal
          , i = t.uv;
        this.hasAttribute(`tangent`) === !1 && this.setAttribute(`tangent`, new _r(new Float32Array(4 * n.count),4));
        let a = this.getAttribute(`tangent`)
          , o = []
          , s = [];
        for (let e = 0; e < n.count; e++)
            o[e] = new Y,
            s[e] = new Y;
        let c = new Y
          , l = new Y
          , u = new Y
          , d = new J
          , f = new J
          , p = new J
          , m = new Y
          , h = new Y;
        function g(e, t, r) {
            c.fromBufferAttribute(n, e),
            l.fromBufferAttribute(n, t),
            u.fromBufferAttribute(n, r),
            d.fromBufferAttribute(i, e),
            f.fromBufferAttribute(i, t),
            p.fromBufferAttribute(i, r),
            l.sub(c),
            u.sub(c),
            f.sub(d),
            p.sub(d);
            let a = 1 / (f.x * p.y - p.x * f.y);
            isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a),
            h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a),
            o[e].add(m),
            o[t].add(m),
            o[r].add(m),
            s[e].add(h),
            s[t].add(h),
            s[r].add(h))
        }
        let _ = this.groups;
        _.length === 0 && (_ = [{
            start: 0,
            count: e.count
        }]);
        for (let t = 0, n = _.length; t < n; ++t) {
            let n = _[t]
              , r = n.start
              , i = n.count;
            for (let t = r, n = r + i; t < n; t += 3)
                g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2))
        }
        let v = new Y
          , y = new Y
          , b = new Y
          , x = new Y;
        function S(e) {
            b.fromBufferAttribute(r, e),
            x.copy(b);
            let t = o[e];
            v.copy(t),
            v.sub(b.multiplyScalar(b.dot(t))).normalize(),
            y.crossVectors(x, t);
            let n = y.dot(s[e]) < 0 ? -1 : 1;
            a.setXYZW(e, v.x, v.y, v.z, n)
        }
        for (let t = 0, n = _.length; t < n; ++t) {
            let n = _[t]
              , r = n.start
              , i = n.count;
            for (let t = r, n = r + i; t < n; t += 3)
                S(e.getX(t + 0)),
                S(e.getX(t + 1)),
                S(e.getX(t + 2))
        }
    }
    computeVertexNormals() {
        let e = this.index
          , t = this.getAttribute(`position`);
        if (t !== void 0) {
            let n = this.getAttribute(`normal`);
            if (n === void 0)
                n = new _r(new Float32Array(t.count * 3),3),
                this.setAttribute(`normal`, n);
            else
                for (let e = 0, t = n.count; e < t; e++)
                    n.setXYZ(e, 0, 0, 0);
            let r = new Y
              , i = new Y
              , a = new Y
              , o = new Y
              , s = new Y
              , c = new Y
              , l = new Y
              , u = new Y;
            if (e)
                for (let d = 0, f = e.count; d < f; d += 3) {
                    let f = e.getX(d + 0)
                      , p = e.getX(d + 1)
                      , m = e.getX(d + 2);
                    r.fromBufferAttribute(t, f),
                    i.fromBufferAttribute(t, p),
                    a.fromBufferAttribute(t, m),
                    l.subVectors(a, i),
                    u.subVectors(r, i),
                    l.cross(u),
                    o.fromBufferAttribute(n, f),
                    s.fromBufferAttribute(n, p),
                    c.fromBufferAttribute(n, m),
                    o.add(l),
                    s.add(l),
                    c.add(l),
                    n.setXYZ(f, o.x, o.y, o.z),
                    n.setXYZ(p, s.x, s.y, s.z),
                    n.setXYZ(m, c.x, c.y, c.z)
                }
            else
                for (let e = 0, o = t.count; e < o; e += 3)
                    r.fromBufferAttribute(t, e + 0),
                    i.fromBufferAttribute(t, e + 1),
                    a.fromBufferAttribute(t, e + 2),
                    l.subVectors(a, i),
                    u.subVectors(r, i),
                    l.cross(u),
                    n.setXYZ(e + 0, l.x, l.y, l.z),
                    n.setXYZ(e + 1, l.x, l.y, l.z),
                    n.setXYZ(e + 2, l.x, l.y, l.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        let e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            Dr.fromBufferAttribute(e, t),
            Dr.normalize(),
            e.setXYZ(t, Dr.x, Dr.y, Dr.z)
    }
    toNonIndexed() {
        function t(e, t) {
            let n = e.array
              , r = e.itemSize
              , i = e.normalized
              , a = new n.constructor(t.length * r)
              , o = 0
              , s = 0;
            for (let i = 0, c = t.length; i < c; i++) {
                o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
                for (let e = 0; e < r; e++)
                    a[s++] = n[o++]
            }
            return new _r(a,r,i)
        }
        if (this.index === null)
            return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),
            this;
        let n = new e
          , r = this.index.array
          , i = this.attributes;
        for (let e in i) {
            let a = i[e]
              , o = t(a, r);
            n.setAttribute(e, o)
        }
        let a = this.morphAttributes;
        for (let e in a) {
            let i = []
              , o = a[e];
            for (let e = 0, n = o.length; e < n; e++) {
                let n = o[e]
                  , a = t(n, r);
                i.push(a)
            }
            n.morphAttributes[e] = i
        }
        n.morphTargetsRelative = this.morphTargetsRelative;
        let o = this.groups;
        for (let e = 0, t = o.length; e < t; e++) {
            let t = o[e];
            n.addGroup(t.start, t.count, t.materialIndex)
        }
        return n
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.7,
                type: `BufferGeometry`,
                generator: `BufferGeometry.toJSON`
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== `` && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            let t = this.parameters;
            for (let n in t)
                t[n] !== void 0 && (e[n] = t[n]);
            return e
        }
        e.data = {
            attributes: {}
        };
        let t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        let n = this.attributes;
        for (let t in n) {
            let r = n[t];
            e.data.attributes[t] = r.toJSON(e.data)
        }
        let r = {}
          , i = !1;
        for (let t in this.morphAttributes) {
            let n = this.morphAttributes[t]
              , a = [];
            for (let t = 0, r = n.length; t < r; t++) {
                let r = n[t];
                a.push(r.toJSON(e.data))
            }
            a.length > 0 && (r[t] = a,
            i = !0)
        }
        i && (e.data.morphAttributes = r,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        let a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        let o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = o.toJSON()),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        let t = {};
        this.name = e.name;
        let n = e.index;
        n !== null && this.setIndex(n.clone());
        let r = e.attributes;
        for (let e in r) {
            let n = r[e];
            this.setAttribute(e, n.clone(t))
        }
        let i = e.morphAttributes;
        for (let e in i) {
            let n = []
              , r = i[e];
            for (let e = 0, i = r.length; e < i; e++)
                n.push(r[e].clone(t));
            this.morphAttributes[e] = n
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        let a = e.groups;
        for (let e = 0, t = a.length; e < t; e++) {
            let t = a[e];
            this.addGroup(t.start, t.count, t.materialIndex)
        }
        let o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        let s = e.boundingSphere;
        return s !== null && (this.boundingSphere = s.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        })
    }
}
  , kr = new vn
  , Ar = new _n
  , jr = new ln
  , Mr = new Y
  , Nr = new Y
  , Pr = new Y
  , Fr = new Y
  , Ir = new Y
  , Lr = new Y
  , Rr = new Y
  , zr = new Y
  , Q = class extends Gn {
    constructor(e=new Or, t=new pr) {
        super(),
        this.isMesh = !0,
        this.type = `Mesh`,
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.count = 1,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        let e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            let n = e[t[0]];
            if (n !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    let t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
    getVertexPosition(e, t) {
        let n = this.geometry
          , r = n.attributes.position
          , i = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        t.fromBufferAttribute(r, e);
        let o = this.morphTargetInfluences;
        if (i && o) {
            Lr.set(0, 0, 0);
            for (let n = 0, r = i.length; n < r; n++) {
                let r = o[n]
                  , s = i[n];
                r !== 0 && (Ir.fromBufferAttribute(s, e),
                a ? Lr.addScaledVector(Ir, r) : Lr.addScaledVector(Ir.sub(t), r))
            }
            t.add(Lr)
        }
        return t
    }
    raycast(e, t) {
        let n = this.geometry
          , r = this.material
          , i = this.matrixWorld;
        r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        jr.copy(n.boundingSphere),
        jr.applyMatrix4(i),
        Ar.copy(e.ray).recast(e.near),
        !(jr.containsPoint(Ar.origin) === !1 && (Ar.intersectSphere(jr, Mr) === null || Ar.origin.distanceToSquared(Mr) > (e.far - e.near) ** 2)) && (kr.copy(i).invert(),
        Ar.copy(e.ray).applyMatrix4(kr),
        !(n.boundingBox !== null && Ar.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Ar)))
    }
    _computeIntersections(e, t, n) {
        let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let i = 0, s = d.length; i < s; i++) {
                    let s = d[i]
                      , p = a[s.materialIndex]
                      , m = Math.max(s.start, f.start)
                      , h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
                    for (let i = m, a = h; i < a; i += 3) {
                        let a = o.getX(i)
                          , d = o.getX(i + 1)
                          , f = o.getX(i + 2);
                        r = Vr(this, p, e, n, c, l, u, a, d, f),
                        r && (r.faceIndex = Math.floor(i / 3),
                        r.face.materialIndex = s.materialIndex,
                        t.push(r))
                    }
                }
            else {
                let i = Math.max(0, f.start)
                  , s = Math.min(o.count, f.start + f.count);
                for (let d = i, f = s; d < f; d += 3) {
                    let i = o.getX(d)
                      , s = o.getX(d + 1)
                      , f = o.getX(d + 2);
                    r = Vr(this, a, e, n, c, l, u, i, s, f),
                    r && (r.faceIndex = Math.floor(d / 3),
                    t.push(r))
                }
            }
        else if (s !== void 0)
            if (Array.isArray(a))
                for (let i = 0, o = d.length; i < o; i++) {
                    let o = d[i]
                      , p = a[o.materialIndex]
                      , m = Math.max(o.start, f.start)
                      , h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
                    for (let i = m, a = h; i < a; i += 3) {
                        let a = i
                          , s = i + 1
                          , d = i + 2;
                        r = Vr(this, p, e, n, c, l, u, a, s, d),
                        r && (r.faceIndex = Math.floor(i / 3),
                        r.face.materialIndex = o.materialIndex,
                        t.push(r))
                    }
                }
            else {
                let i = Math.max(0, f.start)
                  , o = Math.min(s.count, f.start + f.count);
                for (let s = i, d = o; s < d; s += 3) {
                    let i = s
                      , o = s + 1
                      , d = s + 2;
                    r = Vr(this, a, e, n, c, l, u, i, o, d),
                    r && (r.faceIndex = Math.floor(s / 3),
                    t.push(r))
                }
            }
    }
}
;
function Br(e, t, n, r, i, a, o, s) {
    let c;
    if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s),
    c === null)
        return null;
    zr.copy(s),
    zr.applyMatrix4(e.matrixWorld);
    let l = n.ray.origin.distanceTo(zr);
    return l < n.near || l > n.far ? null : {
        distance: l,
        point: zr.clone(),
        object: e
    }
}
function Vr(e, t, n, r, i, a, o, s, c, l) {
    e.getVertexPosition(s, Nr),
    e.getVertexPosition(c, Pr),
    e.getVertexPosition(l, Fr);
    let u = Br(e, t, n, r, Nr, Pr, Fr, Rr);
    if (u) {
        let e = new Y;
        ar.getBarycoord(Rr, Nr, Pr, Fr, e),
        i && (u.uv = ar.getInterpolatedAttribute(i, s, c, l, e, new J)),
        a && (u.uv1 = ar.getInterpolatedAttribute(a, s, c, l, e, new J)),
        o && (u.normal = ar.getInterpolatedAttribute(o, s, c, l, e, new Y),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
        let t = {
            a: s,
            b: c,
            c: l,
            normal: new Y,
            materialIndex: 0
        };
        ar.getNormal(Nr, Pr, Fr, t.normal),
        u.face = t,
        u.barycoord = e
    }
    return u
}
var Hr = class e extends Or {
    constructor(e=1, t=1, n=1, r=1, i=1, a=1) {
        super(),
        this.type = `BoxGeometry`,
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        };
        let o = this;
        r = Math.floor(r),
        i = Math.floor(i),
        a = Math.floor(a);
        let s = []
          , c = []
          , l = []
          , u = []
          , d = 0
          , f = 0;
        p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new br(c,3)),
        this.setAttribute(`normal`, new br(l,3)),
        this.setAttribute(`uv`, new br(u,2));
        function p(e, t, n, r, i, a, p, m, h, g, _) {
            let v = a / h
              , y = p / g
              , b = a / 2
              , x = p / 2
              , S = m / 2
              , C = h + 1
              , w = g + 1
              , T = 0
              , E = 0
              , D = new Y;
            for (let a = 0; a < w; a++) {
                let o = a * y - x;
                for (let s = 0; s < C; s++)
                    D[e] = (s * v - b) * r,
                    D[t] = o * i,
                    D[n] = S,
                    c.push(D.x, D.y, D.z),
                    D[e] = 0,
                    D[t] = 0,
                    D[n] = m > 0 ? 1 : -1,
                    l.push(D.x, D.y, D.z),
                    u.push(s / h),
                    u.push(1 - a / g),
                    T += 1
            }
            for (let e = 0; e < g; e++)
                for (let t = 0; t < h; t++) {
                    let n = d + t + C * e
                      , r = d + t + C * (e + 1)
                      , i = d + (t + 1) + C * (e + 1)
                      , a = d + (t + 1) + C * e;
                    s.push(n, r, a),
                    s.push(r, i, a),
                    E += 6
                }
            o.addGroup(f, E, _),
            f += E,
            d += T
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(t) {
        return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
    }
}
;
function Ur(e) {
    let t = {};
    for (let n in e) {
        t[n] = {};
        for (let r in e[n]) {
            let i = e[n][r];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),
            t[n][r] = null) : t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
        }
    }
    return t
}
function Wr(e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = Ur(e[n]);
        for (let e in r)
            t[e] = r[e]
    }
    return t
}
function Gr(e) {
    let t = [];
    for (let n = 0; n < e.length; n++)
        t.push(e[n].clone());
    return t
}
function Kr(e) {
    let t = e.getRenderTarget();
    return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Ot.workingColorSpace
}
var qr = {
    clone: Ur,
    merge: Wr
}, Jr = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Yr = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, Xr = class extends fr {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = `ShaderMaterial`,
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = Jr,
        this.fragmentShader = Yr,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Ur(e.uniforms),
        this.uniformsGroups = Gr(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues),
        this.index0AttributeName = e.index0AttributeName,
        this.uniformsNeedUpdate = e.uniformsNeedUpdate,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (let n in this.uniforms) {
            let r = this.uniforms[n].value;
            r && r.isTexture ? t.uniforms[n] = {
                type: `t`,
                value: r.toJSON(e).uuid
            } : r && r.isColor ? t.uniforms[n] = {
                type: `c`,
                value: r.getHex()
            } : r && r.isVector2 ? t.uniforms[n] = {
                type: `v2`,
                value: r.toArray()
            } : r && r.isVector3 ? t.uniforms[n] = {
                type: `v3`,
                value: r.toArray()
            } : r && r.isVector4 ? t.uniforms[n] = {
                type: `v4`,
                value: r.toArray()
            } : r && r.isMatrix3 ? t.uniforms[n] = {
                type: `m3`,
                value: r.toArray()
            } : r && r.isMatrix4 ? t.uniforms[n] = {
                type: `m4`,
                value: r.toArray()
            } : t.uniforms[n] = {
                value: r
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        let n = {};
        for (let e in this.extensions)
            this.extensions[e] === !0 && (n[e] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
, Zr = class extends Gn {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = `Camera`,
        this.matrixWorldInverse = new vn,
        this.projectionMatrix = new vn,
        this.projectionMatrixInverse = new vn,
        this.coordinateSystem = Ue,
        this._reversedDepth = !1
    }
    get reversedDepth() {
        return this._reversedDepth
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
, Qr = new Y, $r = new J, ei = new J, ti = class extends Zr {
    constructor(e=50, t=1, n=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = `PerspectiveCamera`,
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = r,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        let t = .5 * this.getFilmHeight() / e;
        this.fov = et * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        let e = Math.tan($e * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return et * 2 * Math.atan(Math.tan($e * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        Qr.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(Qr.x, Qr.y).multiplyScalar(-e / Qr.z),
        Qr.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Qr.x, Qr.y).multiplyScalar(-e / Qr.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, $r, ei),
        t.subVectors(ei, $r)
    }
    setViewOffset(e, t, n, r, i, a) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = i,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        let e = this.near
          , t = e * Math.tan($e * .5 * this.fov) / this.zoom
          , n = 2 * t
          , r = this.aspect * n
          , i = -.5 * r
          , a = this.view;
        if (this.view !== null && this.view.enabled) {
            let e = a.fullWidth
              , o = a.fullHeight;
            i += a.offsetX * r / e,
            t -= a.offsetY * n / o,
            r *= a.width / e,
            n *= a.height / o
        }
        let o = this.filmOffset;
        o !== 0 && (i += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
, ni = -90, ri = 1, ii = class extends Gn {
    constructor(e, t, n) {
        super(),
        this.type = `CubeCamera`,
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        let r = new ti(ni,ri,e,t);
        r.layers = this.layers,
        this.add(r);
        let i = new ti(ni,ri,e,t);
        i.layers = this.layers,
        this.add(i);
        let a = new ti(ni,ri,e,t);
        a.layers = this.layers,
        this.add(a);
        let o = new ti(ni,ri,e,t);
        o.layers = this.layers,
        this.add(o);
        let s = new ti(ni,ri,e,t);
        s.layers = this.layers,
        this.add(s);
        let c = new ti(ni,ri,e,t);
        c.layers = this.layers,
        this.add(c)
    }
    updateCoordinateSystem() {
        let e = this.coordinateSystem
          , t = this.children.concat()
          , [n,r,i,a,o,s] = t;
        for (let e of t)
            this.remove(e);
        if (e === 2e3)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            r.up.set(0, 1, 0),
            r.lookAt(-1, 0, 0),
            i.up.set(0, 0, -1),
            i.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            s.up.set(0, 1, 0),
            s.lookAt(0, 0, -1);
        else if (e === 2001)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            r.up.set(0, -1, 0),
            r.lookAt(1, 0, 0),
            i.up.set(0, 0, 1),
            i.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            s.up.set(0, -1, 0),
            s.lookAt(0, 0, -1);
        else
            throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ` + e);
        for (let e of t)
            this.add(e),
            e.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        let {renderTarget: n, activeMipmapLevel: r} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        let[i,a,o,s,c,l] = this.children
          , u = e.getRenderTarget()
          , d = e.getActiveCubeFace()
          , f = e.getActiveMipmapLevel()
          , p = e.xr.enabled;
        e.xr.enabled = !1;
        let m = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0, r),
        e.render(t, i),
        e.setRenderTarget(n, 1, r),
        e.render(t, a),
        e.setRenderTarget(n, 2, r),
        e.render(t, o),
        e.setRenderTarget(n, 3, r),
        e.render(t, s),
        e.setRenderTarget(n, 4, r),
        e.render(t, c),
        n.texture.generateMipmaps = m,
        e.setRenderTarget(n, 5, r),
        e.render(t, l),
        e.setRenderTarget(u, d, f),
        e.xr.enabled = p,
        n.texture.needsPMREMUpdate = !0
    }
}
, ai = class extends Rt {
    constructor(e=[], t=301, n, r, i, a, o, s, c, l) {
        super(e, t, n, r, i, a, o, s, c, l),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
, oi = class extends Vt {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        let n = {
            width: e,
            height: e,
            depth: 1
        }
          , r = [n, n, n, n, n, n];
        this.texture = new ai(r),
        this._setTextureOptions(t),
        this.texture.isRenderTargetTexture = !0
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        let n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new Hr(5,5,5)
          , i = new Xr({
            name: `CubemapFromEquirect`,
            uniforms: Ur(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
        i.uniforms.tEquirect.value = t;
        let a = new Q(r,i)
          , o = t.minFilter;
        return t.minFilter === 1008 && (t.minFilter = l),
        new ii(1,10,this).update(e, a),
        t.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t=!0, n=!0, r=!0) {
        let i = e.getRenderTarget();
        for (let i = 0; i < 6; i++)
            e.setRenderTarget(this, i),
            e.clear(t, n, r);
        e.setRenderTarget(i)
    }
}
, si = class extends Gn {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = `Group`
    }
}
, ci = {
    type: `move`
}, li = class {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new si,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new si,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new Y,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new Y),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new si,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new Y,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new Y),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            let t = this._hand;
            if (t)
                for (let n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: `connected`,
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: `disconnected`,
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let r = null
          , i = null
          , a = null
          , o = this._targetRay
          , s = this._grip
          , c = this._hand;
        if (e && t.session.visibilityState !== `visible-blurred`) {
            if (c && e.hand) {
                a = !0;
                for (let r of e.hand.values()) {
                    let e = t.getJointPose(r, n)
                      , i = this._getHandJoint(c, r);
                    e !== null && (i.matrix.fromArray(e.transform.matrix),
                    i.matrix.decompose(i.position, i.rotation, i.scale),
                    i.matrixWorldNeedsUpdate = !0,
                    i.jointRadius = e.radius),
                    i.visible = e !== null
                }
                let r = c.joints[`index-finger-tip`]
                  , i = c.joints[`thumb-tip`]
                  , o = r.position.distanceTo(i.position);
                c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1,
                this.dispatchEvent({
                    type: `pinchend`,
                    handedness: e.handedness,
                    target: this
                })) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0,
                this.dispatchEvent({
                    type: `pinchstart`,
                    handedness: e.handedness,
                    target: this
                }))
            } else
                s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n),
                i !== null && (s.matrix.fromArray(i.transform.matrix),
                s.matrix.decompose(s.position, s.rotation, s.scale),
                s.matrixWorldNeedsUpdate = !0,
                i.linearVelocity ? (s.hasLinearVelocity = !0,
                s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1,
                i.angularVelocity ? (s.hasAngularVelocity = !0,
                s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1));
            o !== null && (r = t.getPose(e.targetRaySpace, n),
            r === null && i !== null && (r = i),
            r !== null && (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            r.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
            r.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(ci)))
        }
        return o !== null && (o.visible = r !== null),
        s !== null && (s.visible = i !== null),
        c !== null && (c.visible = a !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            let n = new si;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
, ui = class e {
    constructor(e, t=1, n=1e3) {
        this.isFog = !0,
        this.name = ``,
        this.color = new Z(e),
        this.near = t,
        this.far = n
    }
    clone() {
        return new e(this.color,this.near,this.far)
    }
    toJSON() {
        return {
            type: `Fog`,
            name: this.name,
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
}
, di = class extends Gn {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = `Scene`,
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new On,
        this.environmentIntensity = 1,
        this.environmentRotation = new On,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
, fi = class {
    constructor(e, t) {
        this.isInterleavedBuffer = !0,
        this.array = e,
        this.stride = t,
        this.count = e === void 0 ? 0 : e.length / t,
        this.usage = He,
        this.updateRanges = [],
        this.version = 0,
        this.uuid = tt()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
        this.count = e.count,
        this.stride = e.stride,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (let r = 0, i = this.stride; r < i; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(t,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
, pi = new Y, mi = class e {
    constructor(e, t, n, r=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = ``,
        this.data = e,
        this.itemSize = t,
        this.offset = n,
        this.normalized = r
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++)
            pi.fromBufferAttribute(this, t),
            pi.applyMatrix4(e),
            this.setXYZ(t, pi.x, pi.y, pi.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            pi.fromBufferAttribute(this, t),
            pi.applyNormalMatrix(e),
            this.setXYZ(t, pi.x, pi.y, pi.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            pi.fromBufferAttribute(this, t),
            pi.transformDirection(e),
            this.setXYZ(t, pi.x, pi.y, pi.z);
        return this
    }
    getComponent(e, t) {
        let n = this.array[e * this.data.stride + this.offset + t];
        return this.normalized && (n = yt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = bt(n, this.array)),
        this.data.array[e * this.data.stride + this.offset + t] = n,
        this
    }
    setX(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.data.array[e * this.data.stride + this.offset] = t,
        this
    }
    setY(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    }
    setZ(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    }
    setW(e, t) {
        return this.normalized && (t = bt(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    }
    getX(e) {
        let t = this.data.array[e * this.data.stride + this.offset];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    getY(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 1];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    getZ(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 2];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    getW(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 3];
        return this.normalized && (t = yt(t, this.array)),
        t
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array),
        r = bt(r, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, i) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = bt(t, this.array),
        n = bt(n, this.array),
        r = bt(r, this.array),
        i = bt(i, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this.data.array[e + 3] = i,
        this
    }
    clone(t) {
        if (t === void 0) {
            qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);
            let e = [];
            for (let t = 0; t < this.count; t++) {
                let n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++)
                    e.push(this.data.array[n + t])
            }
            return new _r(new this.array.constructor(e),this.itemSize,this.normalized)
        } else
            return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
            t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
            new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);
            let e = [];
            for (let t = 0; t < this.count; t++) {
                let n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++)
                    e.push(this.data.array[n + t])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: e,
                normalized: this.normalized
            }
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
, hi = class extends fr {
    constructor(e) {
        super(),
        this.isSpriteMaterial = !0,
        this.type = `SpriteMaterial`,
        this.color = new Z(16777215),
        this.map = null,
        this.alphaMap = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.transparent = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.rotation = e.rotation,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
, gi, _i = new Y, vi = new Y, yi = new Y, bi = new J, xi = new J, Si = new vn, Ci = new Y, wi = new Y, Ti = new Y, Ei = new J, Di = new J, Oi = new J, ki = class extends Gn {
    constructor(e=new hi) {
        if (super(),
        this.isSprite = !0,
        this.type = `Sprite`,
        gi === void 0) {
            gi = new Or;
            let e = new fi(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),5);
            gi.setIndex([0, 1, 2, 0, 2, 3]),
            gi.setAttribute(`position`, new mi(e,3,0,!1)),
            gi.setAttribute(`uv`, new mi(e,2,3,!1))
        }
        this.geometry = gi,
        this.material = e,
        this.center = new J(.5,.5),
        this.count = 1
    }
    raycast(e, t) {
        e.camera === null && W(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),
        vi.setFromMatrixScale(this.matrixWorld),
        Si.copy(e.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld),
        yi.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && vi.multiplyScalar(-yi.z);
        let n = this.material.rotation, r, i;
        n !== 0 && (i = Math.cos(n),
        r = Math.sin(n));
        let a = this.center;
        Ai(Ci.set(-.5, -.5, 0), yi, a, vi, r, i),
        Ai(wi.set(.5, -.5, 0), yi, a, vi, r, i),
        Ai(Ti.set(.5, .5, 0), yi, a, vi, r, i),
        Ei.set(0, 0),
        Di.set(1, 0),
        Oi.set(1, 1);
        let o = e.ray.intersectTriangle(Ci, wi, Ti, !1, _i);
        if (o === null && (Ai(wi.set(-.5, .5, 0), yi, a, vi, r, i),
        Di.set(0, 1),
        o = e.ray.intersectTriangle(Ci, Ti, wi, !1, _i),
        o === null))
            return;
        let s = e.ray.origin.distanceTo(_i);
        s < e.near || s > e.far || t.push({
            distance: s,
            point: _i.clone(),
            uv: ar.getInterpolation(_i, Ci, wi, Ti, Ei, Di, Oi, new J),
            face: null,
            object: this
        })
    }
    copy(e, t) {
        return super.copy(e, t),
        e.center !== void 0 && this.center.copy(e.center),
        this.material = e.material,
        this
    }
}
;
function Ai(e, t, n, r, i, a) {
    bi.subVectors(e, n).addScalar(.5).multiply(r),
    i === void 0 ? xi.copy(bi) : (xi.x = a * bi.x - i * bi.y,
    xi.y = i * bi.x + a * bi.y),
    e.copy(t),
    e.x += xi.x,
    e.y += xi.y,
    e.applyMatrix4(Si)
}
var ji = class extends Rt {
    constructor(e=null, t=1, n=1, r, i, a, s, c, l=o, u=o, d, f) {
        super(null, a, s, c, l, u, r, i, d, f),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
  , Mi = class extends _r {
    constructor(e, t, n, r=1) {
        super(e, t, n),
        this.isInstancedBufferAttribute = !0,
        this.meshPerAttribute = r
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
        e.isInstancedBufferAttribute = !0,
        e
    }
}
  , Ni = new vn
  , Pi = new vn
  , Fi = []
  , Ii = new Wt
  , Li = new vn
  , Ri = new Q
  , zi = new ln
  , Bi = class extends Q {
    constructor(e, t, n) {
        super(e, t),
        this.isInstancedMesh = !0,
        this.instanceMatrix = new Mi(new Float32Array(n * 16),16),
        this.instanceColor = null,
        this.morphTexture = null,
        this.count = n,
        this.boundingBox = null,
        this.boundingSphere = null;
        for (let e = 0; e < n; e++)
            this.setMatrixAt(e, Li)
    }
    computeBoundingBox() {
        let e = this.geometry
          , t = this.count;
        this.boundingBox === null && (this.boundingBox = new Wt),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, Ni),
            Ii.copy(e.boundingBox).applyMatrix4(Ni),
            this.boundingBox.union(Ii)
    }
    computeBoundingSphere() {
        let e = this.geometry
          , t = this.count;
        this.boundingSphere === null && (this.boundingSphere = new ln),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, Ni),
            zi.copy(e.boundingSphere).applyMatrix4(Ni),
            this.boundingSphere.union(zi)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()),
        this.count = e.count,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    getMorphAt(e, t) {
        let n = t.morphTargetInfluences
          , r = this.morphTexture.source.data.data
          , i = e * (n.length + 1) + 1;
        for (let e = 0; e < n.length; e++)
            n[e] = r[i + e]
    }
    raycast(e, t) {
        let n = this.matrixWorld
          , r = this.count;
        if (Ri.geometry = this.geometry,
        Ri.material = this.material,
        Ri.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        zi.copy(this.boundingSphere),
        zi.applyMatrix4(n),
        e.ray.intersectsSphere(zi) !== !1))
            for (let i = 0; i < r; i++) {
                this.getMatrixAt(i, Ni),
                Pi.multiplyMatrices(n, Ni),
                Ri.matrixWorld = Pi,
                Ri.raycast(e, Fi);
                for (let e = 0, n = Fi.length; e < n; e++) {
                    let n = Fi[e];
                    n.instanceId = i,
                    n.object = this,
                    t.push(n)
                }
                Fi.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new Mi(new Float32Array(this.instanceMatrix.count * 3).fill(1),3)),
        t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    setMorphAt(e, t) {
        let n = t.morphTargetInfluences
          , r = n.length + 1;
        this.morphTexture === null && (this.morphTexture = new ji(new Float32Array(r * this.count),r,this.count,A,v));
        let i = this.morphTexture.source.data.data
          , a = 0;
        for (let e = 0; e < n.length; e++)
            a += n[e];
        let o = this.geometry.morphTargetsRelative ? 1 : 1 - a
          , s = r * e;
        i[s] = o,
        i.set(n, s + 1)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        }),
        this.morphTexture !== null && (this.morphTexture.dispose(),
        this.morphTexture = null)
    }
}
  , Vi = new Y
  , Hi = new Y
  , Ui = new X
  , Wi = class {
    constructor(e=new Y(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, r) {
        return this.normal.set(e, t, n),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        let r = Vi.subVectors(n, t).cross(Hi.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        let e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        let n = e.delta(Vi)
          , r = this.normal.dot(n);
        if (r === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        let i = -(e.start.dot(this.normal) + this.constant) / r;
        return i < 0 || i > 1 ? null : t.copy(e.start).addScaledVector(n, i)
    }
    intersectsLine(e) {
        let t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        let n = t || Ui.getNormalMatrix(e)
          , r = this.coplanarPoint(Vi).applyMatrix4(e)
          , i = this.normal.applyMatrix3(n).normalize();
        return this.constant = -r.dot(i),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Gi = new ln
  , Ki = new J(.5,.5)
  , qi = new Y
  , Ji = class {
    constructor(e=new Wi, t=new Wi, n=new Wi, r=new Wi, i=new Wi, a=new Wi) {
        this.planes = [e, t, n, r, i, a]
    }
    set(e, t, n, r, i, a) {
        let o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
    }
    copy(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=Ue, n=!1) {
        let r = this.planes
          , i = e.elements
          , a = i[0]
          , o = i[1]
          , s = i[2]
          , c = i[3]
          , l = i[4]
          , u = i[5]
          , d = i[6]
          , f = i[7]
          , p = i[8]
          , m = i[9]
          , h = i[10]
          , g = i[11]
          , _ = i[12]
          , v = i[13]
          , y = i[14]
          , b = i[15];
        if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(),
        r[1].setComponents(c + a, f + l, g + p, b + _).normalize(),
        r[2].setComponents(c + o, f + u, g + m, b + v).normalize(),
        r[3].setComponents(c - o, f - u, g - m, b - v).normalize(),
        n)
            r[4].setComponents(s, d, h, y).normalize(),
            r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
        else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(),
        t === 2e3)
            r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
        else if (t === 2001)
            r[5].setComponents(s, d, h, y).normalize();
        else
            throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            let t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(Gi)
    }
    intersectsSprite(e) {
        return Gi.center.set(0, 0, 0),
        Gi.radius = .7071067811865476 + Ki.distanceTo(e.center),
        Gi.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Gi)
    }
    intersectsSphere(e) {
        let t = this.planes
          , n = e.center
          , r = -e.radius;
        for (let e = 0; e < 6; e++)
            if (t[e].distanceToPoint(n) < r)
                return !1;
        return !0
    }
    intersectsBox(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++) {
            let r = t[n];
            if (qi.x = r.normal.x > 0 ? e.max.x : e.min.x,
            qi.y = r.normal.y > 0 ? e.max.y : e.min.y,
            qi.z = r.normal.z > 0 ? e.max.z : e.min.z,
            r.distanceToPoint(qi) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Yi = class extends fr {
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = `LineBasicMaterial`,
        this.color = new Z(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = `round`,
        this.linejoin = `round`,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
  , Xi = new Y
  , Zi = new Y
  , Qi = new vn
  , $i = new _n
  , ea = new ln
  , ta = new Y
  , na = new Y
  , ra = class extends Gn {
    constructor(e=new Or, t=new Yi) {
        super(),
        this.isLine = !0,
        this.type = `Line`,
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.index === null) {
            let t = e.attributes.position
              , n = [0];
            for (let e = 1, r = t.count; e < r; e++)
                Xi.fromBufferAttribute(t, e - 1),
                Zi.fromBufferAttribute(t, e),
                n[e] = n[e - 1],
                n[e] += Xi.distanceTo(Zi);
            e.setAttribute(`lineDistance`, new br(n,1))
        } else
            U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);
        return this
    }
    raycast(e, t) {
        let n = this.geometry
          , r = this.matrixWorld
          , i = e.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        ea.copy(n.boundingSphere),
        ea.applyMatrix4(r),
        ea.radius += i,
        e.ray.intersectsSphere(ea) === !1)
            return;
        Qi.copy(r).invert(),
        $i.copy(e.ray).applyMatrix4(Qi);
        let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , s = o * o
          , c = this.isLineSegments ? 2 : 1
          , l = n.index
          , u = n.attributes.position;
        if (l !== null) {
            let n = Math.max(0, a.start)
              , r = Math.min(l.count, a.start + a.count);
            for (let i = n, a = r - 1; i < a; i += c) {
                let n = l.getX(i)
                  , r = l.getX(i + 1)
                  , a = ia(this, e, $i, s, n, r, i);
                a && t.push(a)
            }
            if (this.isLineLoop) {
                let i = l.getX(r - 1)
                  , a = l.getX(n)
                  , o = ia(this, e, $i, s, i, a, r - 1);
                o && t.push(o)
            }
        } else {
            let n = Math.max(0, a.start)
              , r = Math.min(u.count, a.start + a.count);
            for (let i = n, a = r - 1; i < a; i += c) {
                let n = ia(this, e, $i, s, i, i + 1, i);
                n && t.push(n)
            }
            if (this.isLineLoop) {
                let i = ia(this, e, $i, s, r - 1, n, r - 1);
                i && t.push(i)
            }
        }
    }
    updateMorphTargets() {
        let e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            let n = e[t[0]];
            if (n !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    let t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
}
;
function ia(e, t, n, r, i, a, o) {
    let s = e.geometry.attributes.position;
    if (Xi.fromBufferAttribute(s, i),
    Zi.fromBufferAttribute(s, a),
    n.distanceSqToSegment(Xi, Zi, ta, na) > r)
        return;
    ta.applyMatrix4(e.matrixWorld);
    let c = t.ray.origin.distanceTo(ta);
    if (!(c < t.near || c > t.far))
        return {
            distance: c,
            point: na.clone().applyMatrix4(e.matrixWorld),
            index: o,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: e
        }
}
var aa = new Y
  , oa = new Y
  , sa = class extends ra {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = `LineSegments`
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.index === null) {
            let t = e.attributes.position
              , n = [];
            for (let e = 0, r = t.count; e < r; e += 2)
                aa.fromBufferAttribute(t, e),
                oa.fromBufferAttribute(t, e + 1),
                n[e] = e === 0 ? 0 : n[e - 1],
                n[e + 1] = n[e] + aa.distanceTo(oa);
            e.setAttribute(`lineDistance`, new br(n,1))
        } else
            U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);
        return this
    }
}
  , ca = class extends fr {
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.type = `PointsMaterial`,
        this.color = new Z(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
  , la = new vn
  , ua = new _n
  , da = new ln
  , fa = new Y
  , pa = class extends Gn {
    constructor(e=new Or, t=new ca) {
        super(),
        this.isPoints = !0,
        this.type = `Points`,
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        let n = this.geometry
          , r = this.matrixWorld
          , i = e.params.Points.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        da.copy(n.boundingSphere),
        da.applyMatrix4(r),
        da.radius += i,
        e.ray.intersectsSphere(da) === !1)
            return;
        la.copy(r).invert(),
        ua.copy(e.ray).applyMatrix4(la);
        let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , s = o * o
          , c = n.index
          , l = n.attributes.position;
        if (c !== null) {
            let n = Math.max(0, a.start)
              , i = Math.min(c.count, a.start + a.count);
            for (let a = n, o = i; a < o; a++) {
                let n = c.getX(a);
                fa.fromBufferAttribute(l, n),
                ma(fa, n, s, r, e, t, this)
            }
        } else {
            let n = Math.max(0, a.start)
              , i = Math.min(l.count, a.start + a.count);
            for (let a = n, o = i; a < o; a++)
                fa.fromBufferAttribute(l, a),
                ma(fa, a, s, r, e, t, this)
        }
    }
    updateMorphTargets() {
        let e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            let n = e[t[0]];
            if (n !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    let t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
}
;
function ma(e, t, n, r, i, a, o) {
    let s = ua.distanceSqToPoint(e);
    if (s < n) {
        let n = new Y;
        ua.closestPointToPoint(e, n),
        n.applyMatrix4(r);
        let c = i.ray.origin.distanceTo(n);
        if (c < i.near || c > i.far)
            return;
        a.push({
            distance: c,
            distanceToRay: Math.sqrt(s),
            point: n,
            index: t,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: o
        })
    }
}
var ha = class extends Rt {
    constructor(e, t, n, r, i, a, o, s, c) {
        super(e, t, n, r, i, a, o, s, c),
        this.isCanvasTexture = !0,
        this.needsUpdate = !0
    }
}
  , ga = class extends Rt {
    constructor(e, t, n=_, r, i, a, s=o, c=o, l, u=O, d=1) {
        if (u !== 1026 && u !== 1027)
            throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);
        super({
            width: e,
            height: t,
            depth: d
        }, r, i, a, s, c, u, n, l),
        this.isDepthTexture = !0,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.source = new Pt(Object.assign({}, e.image)),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
  , _a = class extends ga {
    constructor(e, t=_, n=301, r, i, a=o, s=o, c, l=O) {
        let u = {
            width: e,
            height: e,
            depth: 1
        }
          , d = [u, u, u, u, u, u];
        super(e, e, t, n, r, i, a, s, c, l),
        this.image = d,
        this.isCubeDepthTexture = !0,
        this.isCubeTexture = !0
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
  , va = class extends Rt {
    constructor(e=null) {
        super(),
        this.sourceTexture = e,
        this.isExternalTexture = !0
    }
    copy(e) {
        return super.copy(e),
        this.sourceTexture = e.sourceTexture,
        this
    }
}
  , ya = class e extends Or {
    constructor(e=1, t=1, n=1, r=32, i=1, a=!1, o=0, s=Math.PI * 2) {
        super(),
        this.type = `CylinderGeometry`,
        this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        let c = this;
        r = Math.floor(r),
        i = Math.floor(i);
        let l = []
          , u = []
          , d = []
          , f = []
          , p = 0
          , m = []
          , h = n / 2
          , g = 0;
        _(),
        a === !1 && (e > 0 && v(!0),
        t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new br(u,3)),
        this.setAttribute(`normal`, new br(d,3)),
        this.setAttribute(`uv`, new br(f,2));
        function _() {
            let a = new Y
              , _ = new Y
              , v = 0
              , y = (t - e) / n;
            for (let c = 0; c <= i; c++) {
                let l = []
                  , g = c / i
                  , v = g * (t - e) + e;
                for (let e = 0; e <= r; e++) {
                    let t = e / r
                      , i = t * s + o
                      , c = Math.sin(i)
                      , m = Math.cos(i);
                    _.x = v * c,
                    _.y = -g * n + h,
                    _.z = v * m,
                    u.push(_.x, _.y, _.z),
                    a.set(c, y, m).normalize(),
                    d.push(a.x, a.y, a.z),
                    f.push(t, 1 - g),
                    l.push(p++)
                }
                m.push(l)
            }
            for (let n = 0; n < r; n++)
                for (let r = 0; r < i; r++) {
                    let a = m[r][n]
                      , o = m[r + 1][n]
                      , s = m[r + 1][n + 1]
                      , c = m[r][n + 1];
                    (e > 0 || r !== 0) && (l.push(a, o, c),
                    v += 3),
                    (t > 0 || r !== i - 1) && (l.push(o, s, c),
                    v += 3)
                }
            c.addGroup(g, v, 0),
            g += v
        }
        function v(n) {
            let i = p
              , a = new J
              , m = new Y
              , _ = 0
              , v = n === !0 ? e : t
              , y = n === !0 ? 1 : -1;
            for (let e = 1; e <= r; e++)
                u.push(0, h * y, 0),
                d.push(0, y, 0),
                f.push(.5, .5),
                p++;
            let b = p;
            for (let e = 0; e <= r; e++) {
                let t = e / r * s + o
                  , n = Math.cos(t)
                  , i = Math.sin(t);
                m.x = v * i,
                m.y = h * y,
                m.z = v * n,
                u.push(m.x, m.y, m.z),
                d.push(0, y, 0),
                a.x = n * .5 + .5,
                a.y = i * .5 * y + .5,
                f.push(a.x, a.y),
                p++
            }
            for (let e = 0; e < r; e++) {
                let t = i + e
                  , r = b + e;
                n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t),
                _ += 3
            }
            c.addGroup(g, _, n === !0 ? 1 : 2),
            g += _
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(t) {
        return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)
    }
}
  , ba = new Y
  , xa = new Y
  , Sa = new Y
  , Ca = new ar
  , wa = class extends Or {
    constructor(e=null, t=1) {
        if (super(),
        this.type = `EdgesGeometry`,
        this.parameters = {
            geometry: e,
            thresholdAngle: t
        },
        e !== null) {
            let n = 10 ** 4
              , r = Math.cos($e * t)
              , i = e.getIndex()
              , a = e.getAttribute(`position`)
              , o = i ? i.count : a.count
              , s = [0, 0, 0]
              , c = [`a`, `b`, `c`]
              , l = [, , , ]
              , u = {}
              , d = [];
            for (let e = 0; e < o; e += 3) {
                i ? (s[0] = i.getX(e),
                s[1] = i.getX(e + 1),
                s[2] = i.getX(e + 2)) : (s[0] = e,
                s[1] = e + 1,
                s[2] = e + 2);
                let {a: t, b: o, c: f} = Ca;
                if (t.fromBufferAttribute(a, s[0]),
                o.fromBufferAttribute(a, s[1]),
                f.fromBufferAttribute(a, s[2]),
                Ca.getNormal(Sa),
                l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`,
                l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`,
                l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`,
                !(l[0] === l[1] || l[1] === l[2] || l[2] === l[0]))
                    for (let e = 0; e < 3; e++) {
                        let t = (e + 1) % 3
                          , n = l[e]
                          , i = l[t]
                          , a = Ca[c[e]]
                          , o = Ca[c[t]]
                          , f = `${n}_${i}`
                          , p = `${i}_${n}`;
                        p in u && u[p] ? (Sa.dot(u[p].normal) <= r && (d.push(a.x, a.y, a.z),
                        d.push(o.x, o.y, o.z)),
                        u[p] = null) : f in u || (u[f] = {
                            index0: s[e],
                            index1: s[t],
                            normal: Sa.clone()
                        })
                    }
            }
            for (let e in u)
                if (u[e]) {
                    let {index0: t, index1: n} = u[e];
                    ba.fromBufferAttribute(a, t),
                    xa.fromBufferAttribute(a, n),
                    d.push(ba.x, ba.y, ba.z),
                    d.push(xa.x, xa.y, xa.z)
                }
            this.setAttribute(`position`, new br(d,3))
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
}
  , Ta = class {
    constructor() {
        this.type = `Curve`,
        this.arcLengthDivisions = 200,
        this.needsUpdate = !1,
        this.cacheArcLengths = null
    }
    getPoint() {
        U(`Curve: .getPoint() not implemented.`)
    }
    getPointAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e=5) {
        let t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e=5) {
        let t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        let e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e=this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        let t = [], n, r = this.getPoint(0), i = 0;
        t.push(0);
        for (let a = 1; a <= e; a++)
            n = this.getPoint(a / e),
            i += n.distanceTo(r),
            t.push(i),
            r = n;
        return this.cacheArcLengths = t,
        t
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.getLengths()
    }
    getUtoTmapping(e, t=null) {
        let n = this.getLengths(), r = 0, i = n.length, a;
        a = t || e * n[i - 1];
        let o = 0, s = i - 1, c;
        for (; o <= s; )
            if (r = Math.floor(o + (s - o) / 2),
            c = n[r] - a,
            c < 0)
                o = r + 1;
            else if (c > 0)
                s = r - 1;
            else {
                s = r;
                break
            }
        if (r = s,
        n[r] === a)
            return r / (i - 1);
        let l = n[r]
          , u = n[r + 1] - l
          , d = (a - l) / u;
        return (r + d) / (i - 1)
    }
    getTangent(e, t) {
        let n = 1e-4
          , r = e - n
          , i = e + n;
        r < 0 && (r = 0),
        i > 1 && (i = 1);
        let a = this.getPoint(r)
          , o = this.getPoint(i)
          , s = t || (a.isVector2 ? new J : new Y);
        return s.copy(o).sub(a).normalize(),
        s
    }
    getTangentAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t=!1) {
        let n = new Y
          , r = []
          , i = []
          , a = []
          , o = new Y
          , s = new vn;
        for (let t = 0; t <= e; t++) {
            let n = t / e;
            r[t] = this.getTangentAt(n, new Y)
        }
        i[0] = new Y,
        a[0] = new Y;
        let c = Number.MAX_VALUE
          , l = Math.abs(r[0].x)
          , u = Math.abs(r[0].y)
          , d = Math.abs(r[0].z);
        l <= c && (c = l,
        n.set(1, 0, 0)),
        u <= c && (c = u,
        n.set(0, 1, 0)),
        d <= c && n.set(0, 0, 1),
        o.crossVectors(r[0], n).normalize(),
        i[0].crossVectors(r[0], o),
        a[0].crossVectors(r[0], i[0]);
        for (let t = 1; t <= e; t++) {
            if (i[t] = i[t - 1].clone(),
            a[t] = a[t - 1].clone(),
            o.crossVectors(r[t - 1], r[t]),
            o.length() > 2 ** -52) {
                o.normalize();
                let e = Math.acos(G(r[t - 1].dot(r[t]), -1, 1));
                i[t].applyMatrix4(s.makeRotationAxis(o, e))
            }
            a[t].crossVectors(r[t], i[t])
        }
        if (t === !0) {
            let t = Math.acos(G(i[0].dot(i[e]), -1, 1));
            t /= e,
            r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
            for (let n = 1; n <= e; n++)
                i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)),
                a[n].crossVectors(r[n], i[n])
        }
        return {
            tangents: r,
            normals: i,
            binormals: a
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.7,
                type: `Curve`,
                generator: `Curve.toJSON`
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions,
        e.type = this.type,
        e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
}
  , Ea = class extends Ta {
    constructor(e=0, t=0, n=1, r=1, i=0, a=Math.PI * 2, o=!1, s=0) {
        super(),
        this.isEllipseCurve = !0,
        this.type = `EllipseCurve`,
        this.aX = e,
        this.aY = t,
        this.xRadius = n,
        this.yRadius = r,
        this.aStartAngle = i,
        this.aEndAngle = a,
        this.aClockwise = o,
        this.aRotation = s
    }
    getPoint(e, t=new J) {
        let n = t
          , r = Math.PI * 2
          , i = this.aEndAngle - this.aStartAngle
          , a = Math.abs(i) < 2 ** -52;
        for (; i < 0; )
            i += r;
        for (; i > r; )
            i -= r;
        i < 2 ** -52 && (i = a ? 0 : r),
        this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
        let o = this.aStartAngle + e * i
          , s = this.aX + this.xRadius * Math.cos(o)
          , c = this.aY + this.yRadius * Math.sin(o);
        if (this.aRotation !== 0) {
            let e = Math.cos(this.aRotation)
              , t = Math.sin(this.aRotation)
              , n = s - this.aX
              , r = c - this.aY;
            s = n * e - r * t + this.aX,
            c = n * t + r * e + this.aY
        }
        return n.set(s, c)
    }
    copy(e) {
        return super.copy(e),
        this.aX = e.aX,
        this.aY = e.aY,
        this.xRadius = e.xRadius,
        this.yRadius = e.yRadius,
        this.aStartAngle = e.aStartAngle,
        this.aEndAngle = e.aEndAngle,
        this.aClockwise = e.aClockwise,
        this.aRotation = e.aRotation,
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.aX = this.aX,
        e.aY = this.aY,
        e.xRadius = this.xRadius,
        e.yRadius = this.yRadius,
        e.aStartAngle = this.aStartAngle,
        e.aEndAngle = this.aEndAngle,
        e.aClockwise = this.aClockwise,
        e.aRotation = this.aRotation,
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.aX = e.aX,
        this.aY = e.aY,
        this.xRadius = e.xRadius,
        this.yRadius = e.yRadius,
        this.aStartAngle = e.aStartAngle,
        this.aEndAngle = e.aEndAngle,
        this.aClockwise = e.aClockwise,
        this.aRotation = e.aRotation,
        this
    }
}
  , Da = class extends Ea {
    constructor(e, t, n, r, i, a) {
        super(e, t, n, n, r, i, a),
        this.isArcCurve = !0,
        this.type = `ArcCurve`
    }
}
;
function Oa() {
    let e = 0
      , t = 0
      , n = 0
      , r = 0;
    function i(i, a, o, s) {
        e = i,
        t = o,
        n = -3 * i + 3 * a - 2 * o - s,
        r = 2 * i - 2 * a + o + s
    }
    return {
        initCatmullRom: function(e, t, n, r, a) {
            i(t, n, a * (n - e), a * (r - t))
        },
        initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
            let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o
              , l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
            c *= o,
            l *= o,
            i(t, n, c, l)
        },
        calc: function(i) {
            let a = i * i
              , o = a * i;
            return e + t * i + n * a + r * o
        }
    }
}
var ka = new Y
  , Aa = new Oa
  , ja = new Oa
  , Ma = new Oa
  , Na = class extends Ta {
    constructor(e=[], t=!1, n=`centripetal`, r=.5) {
        super(),
        this.isCatmullRomCurve3 = !0,
        this.type = `CatmullRomCurve3`,
        this.points = e,
        this.closed = t,
        this.curveType = n,
        this.tension = r
    }
    getPoint(e, t=new Y) {
        let n = t
          , r = this.points
          , i = r.length
          , a = (i - +!this.closed) * e
          , o = Math.floor(a)
          , s = a - o;
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2,
        s = 1);
        let c, l;
        this.closed || o > 0 ? c = r[(o - 1) % i] : (ka.subVectors(r[0], r[1]).add(r[0]),
        c = ka);
        let u = r[o % i]
          , d = r[(o + 1) % i];
        if (this.closed || o + 2 < i ? l = r[(o + 2) % i] : (ka.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]),
        l = ka),
        this.curveType === `centripetal` || this.curveType === `chordal`) {
            let e = this.curveType === `chordal` ? .5 : .25
              , t = c.distanceToSquared(u) ** +e
              , n = u.distanceToSquared(d) ** +e
              , r = d.distanceToSquared(l) ** +e;
            n < 1e-4 && (n = 1),
            t < 1e-4 && (t = n),
            r < 1e-4 && (r = n),
            Aa.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r),
            ja.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r),
            Ma.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r)
        } else
            this.curveType === `catmullrom` && (Aa.initCatmullRom(c.x, u.x, d.x, l.x, this.tension),
            ja.initCatmullRom(c.y, u.y, d.y, l.y, this.tension),
            Ma.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
        return n.set(Aa.calc(s), ja.calc(s), Ma.calc(s)),
        n
    }
    copy(e) {
        super.copy(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let n = e.points[t];
            this.points.push(n.clone())
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            let n = this.points[t];
            e.points.push(n.toArray())
        }
        return e.closed = this.closed,
        e.curveType = this.curveType,
        e.tension = this.tension,
        e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let n = e.points[t];
            this.points.push(new Y().fromArray(n))
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
}
;
function Pa(e, t, n, r, i) {
    let a = (r - t) * .5
      , o = (i - n) * .5
      , s = e * e
      , c = e * s;
    return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
}
function Fa(e, t) {
    let n = 1 - e;
    return n * n * t
}
function Ia(e, t) {
    return 2 * (1 - e) * e * t
}
function La(e, t) {
    return e * e * t
}
function Ra(e, t, n, r) {
    return Fa(e, t) + Ia(e, n) + La(e, r)
}
function za(e, t) {
    let n = 1 - e;
    return n * n * n * t
}
function Ba(e, t) {
    let n = 1 - e;
    return 3 * n * n * e * t
}
function Va(e, t) {
    return 3 * (1 - e) * e * e * t
}
function Ha(e, t) {
    return e * e * e * t
}
function Ua(e, t, n, r, i) {
    return za(e, t) + Ba(e, n) + Va(e, r) + Ha(e, i)
}
var Wa = class extends Ta {
    constructor(e=new J, t=new J, n=new J, r=new J) {
        super(),
        this.isCubicBezierCurve = !0,
        this.type = `CubicBezierCurve`,
        this.v0 = e,
        this.v1 = t,
        this.v2 = n,
        this.v3 = r
    }
    getPoint(e, t=new J) {
        let n = t
          , r = this.v0
          , i = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(Ua(e, r.x, i.x, a.x, o.x), Ua(e, r.y, i.y, a.y, o.y)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e.v3 = this.v3.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
    }
}
  , Ga = class extends Ta {
    constructor(e=new Y, t=new Y, n=new Y, r=new Y) {
        super(),
        this.isCubicBezierCurve3 = !0,
        this.type = `CubicBezierCurve3`,
        this.v0 = e,
        this.v1 = t,
        this.v2 = n,
        this.v3 = r
    }
    getPoint(e, t=new Y) {
        let n = t
          , r = this.v0
          , i = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(Ua(e, r.x, i.x, a.x, o.x), Ua(e, r.y, i.y, a.y, o.y), Ua(e, r.z, i.z, a.z, o.z)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e.v3 = this.v3.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
    }
}
  , Ka = class extends Ta {
    constructor(e=new J, t=new J) {
        super(),
        this.isLineCurve = !0,
        this.type = `LineCurve`,
        this.v1 = e,
        this.v2 = t
    }
    getPoint(e, t=new J) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(e).add(this.v1)),
        n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t=new J) {
        return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t)
    }
    copy(e) {
        return super.copy(e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , qa = class extends Ta {
    constructor(e=new Y, t=new Y) {
        super(),
        this.isLineCurve3 = !0,
        this.type = `LineCurve3`,
        this.v1 = e,
        this.v2 = t
    }
    getPoint(e, t=new Y) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(e).add(this.v1)),
        n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t=new Y) {
        return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t)
    }
    copy(e) {
        return super.copy(e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , Ja = class extends Ta {
    constructor(e=new J, t=new J, n=new J) {
        super(),
        this.isQuadraticBezierCurve = !0,
        this.type = `QuadraticBezierCurve`,
        this.v0 = e,
        this.v1 = t,
        this.v2 = n
    }
    getPoint(e, t=new J) {
        let n = t
          , r = this.v0
          , i = this.v1
          , a = this.v2;
        return n.set(Ra(e, r.x, i.x, a.x), Ra(e, r.y, i.y, a.y)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , Ya = class extends Ta {
    constructor(e=new Y, t=new Y, n=new Y) {
        super(),
        this.isQuadraticBezierCurve3 = !0,
        this.type = `QuadraticBezierCurve3`,
        this.v0 = e,
        this.v1 = t,
        this.v2 = n
    }
    getPoint(e, t=new Y) {
        let n = t
          , r = this.v0
          , i = this.v1
          , a = this.v2;
        return n.set(Ra(e, r.x, i.x, a.x), Ra(e, r.y, i.y, a.y), Ra(e, r.z, i.z, a.z)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , Xa = class extends Ta {
    constructor(e=[]) {
        super(),
        this.isSplineCurve = !0,
        this.type = `SplineCurve`,
        this.points = e
    }
    getPoint(e, t=new J) {
        let n = t
          , r = this.points
          , i = (r.length - 1) * e
          , a = Math.floor(i)
          , o = i - a
          , s = r[a === 0 ? a : a - 1]
          , c = r[a]
          , l = r[a > r.length - 2 ? r.length - 1 : a + 1]
          , u = r[a > r.length - 3 ? r.length - 1 : a + 2];
        return n.set(Pa(o, s.x, c.x, l.x, u.x), Pa(o, s.y, c.y, l.y, u.y)),
        n
    }
    copy(e) {
        super.copy(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let n = e.points[t];
            this.points.push(n.clone())
        }
        return this
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            let n = this.points[t];
            e.points.push(n.toArray())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let n = e.points[t];
            this.points.push(new J().fromArray(n))
        }
        return this
    }
}
  , Za = Object.freeze({
    __proto__: null,
    ArcCurve: Da,
    CatmullRomCurve3: Na,
    CubicBezierCurve: Wa,
    CubicBezierCurve3: Ga,
    EllipseCurve: Ea,
    LineCurve: Ka,
    LineCurve3: qa,
    QuadraticBezierCurve: Ja,
    QuadraticBezierCurve3: Ya,
    SplineCurve: Xa
})
  , Qa = class extends Ta {
    constructor() {
        super(),
        this.type = `CurvePath`,
        this.curves = [],
        this.autoClose = !1
    }
    add(e) {
        this.curves.push(e)
    }
    closePath() {
        let e = this.curves[0].getPoint(0)
          , t = this.curves[this.curves.length - 1].getPoint(1);
        if (!e.equals(t)) {
            let n = e.isVector2 === !0 ? `LineCurve` : `LineCurve3`;
            this.curves.push(new Za[n](t,e))
        }
        return this
    }
    getPoint(e, t) {
        let n = e * this.getLength()
          , r = this.getCurveLengths()
          , i = 0;
        for (; i < r.length; ) {
            if (r[i] >= n) {
                let e = r[i] - n
                  , a = this.curves[i]
                  , o = a.getLength()
                  , s = o === 0 ? 0 : 1 - e / o;
                return a.getPointAt(s, t)
            }
            i++
        }
        return null
    }
    getLength() {
        let e = this.getCurveLengths();
        return e[e.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.cacheLengths = null,
        this.getCurveLengths()
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
            return this.cacheLengths;
        let e = []
          , t = 0;
        for (let n = 0, r = this.curves.length; n < r; n++)
            t += this.curves[n].getLength(),
            e.push(t);
        return this.cacheLengths = e,
        e
    }
    getSpacedPoints(e=40) {
        let t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPoint(n / e));
        return this.autoClose && t.push(t[0]),
        t
    }
    getPoints(e=12) {
        let t = [], n;
        for (let r = 0, i = this.curves; r < i.length; r++) {
            let a = i[r]
              , o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e
              , s = a.getPoints(o);
            for (let e = 0; e < s.length; e++) {
                let r = s[e];
                n && n.equals(r) || (t.push(r),
                n = r)
            }
        }
        return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]),
        t
    }
    copy(e) {
        super.copy(e),
        this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            let n = e.curves[t];
            this.curves.push(n.clone())
        }
        return this.autoClose = e.autoClose,
        this
    }
    toJSON() {
        let e = super.toJSON();
        e.autoClose = this.autoClose,
        e.curves = [];
        for (let t = 0, n = this.curves.length; t < n; t++) {
            let n = this.curves[t];
            e.curves.push(n.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.autoClose = e.autoClose,
        this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            let n = e.curves[t];
            this.curves.push(new Za[n.type]().fromJSON(n))
        }
        return this
    }
}
  , $a = class extends Qa {
    constructor(e) {
        super(),
        this.type = `Path`,
        this.currentPoint = new J,
        e && this.setFromPoints(e)
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for (let t = 1, n = e.length; t < n; t++)
            this.lineTo(e[t].x, e[t].y);
        return this
    }
    moveTo(e, t) {
        return this.currentPoint.set(e, t),
        this
    }
    lineTo(e, t) {
        let n = new Ka(this.currentPoint.clone(),new J(e,t));
        return this.curves.push(n),
        this.currentPoint.set(e, t),
        this
    }
    quadraticCurveTo(e, t, n, r) {
        let i = new Ja(this.currentPoint.clone(),new J(e,t),new J(n,r));
        return this.curves.push(i),
        this.currentPoint.set(n, r),
        this
    }
    bezierCurveTo(e, t, n, r, i, a) {
        let o = new Wa(this.currentPoint.clone(),new J(e,t),new J(n,r),new J(i,a));
        return this.curves.push(o),
        this.currentPoint.set(i, a),
        this
    }
    splineThru(e) {
        let t = new Xa([this.currentPoint.clone()].concat(e));
        return this.curves.push(t),
        this.currentPoint.copy(e[e.length - 1]),
        this
    }
    arc(e, t, n, r, i, a) {
        let o = this.currentPoint.x
          , s = this.currentPoint.y;
        return this.absarc(e + o, t + s, n, r, i, a),
        this
    }
    absarc(e, t, n, r, i, a) {
        return this.absellipse(e, t, n, n, r, i, a),
        this
    }
    ellipse(e, t, n, r, i, a, o, s) {
        let c = this.currentPoint.x
          , l = this.currentPoint.y;
        return this.absellipse(e + c, t + l, n, r, i, a, o, s),
        this
    }
    absellipse(e, t, n, r, i, a, o, s) {
        let c = new Ea(e,t,n,r,i,a,o,s);
        if (this.curves.length > 0) {
            let e = c.getPoint(0);
            e.equals(this.currentPoint) || this.lineTo(e.x, e.y)
        }
        this.curves.push(c);
        let l = c.getPoint(1);
        return this.currentPoint.copy(l),
        this
    }
    copy(e) {
        return super.copy(e),
        this.currentPoint.copy(e.currentPoint),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.currentPoint = this.currentPoint.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.currentPoint.fromArray(e.currentPoint),
        this
    }
}
  , eo = class extends $a {
    constructor(e) {
        super(e),
        this.uuid = tt(),
        this.type = `Shape`,
        this.holes = []
    }
    getPointsHoles(e) {
        let t = [];
        for (let n = 0, r = this.holes.length; n < r; n++)
            t[n] = this.holes[n].getPoints(e);
        return t
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        }
    }
    copy(e) {
        super.copy(e),
        this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            let n = e.holes[t];
            this.holes.push(n.clone())
        }
        return this
    }
    toJSON() {
        let e = super.toJSON();
        e.uuid = this.uuid,
        e.holes = [];
        for (let t = 0, n = this.holes.length; t < n; t++) {
            let n = this.holes[t];
            e.holes.push(n.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.uuid = e.uuid,
        this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            let n = e.holes[t];
            this.holes.push(new $a().fromJSON(n))
        }
        return this
    }
}
;
function to(e, t, n=2) {
    let r = t && t.length
      , i = r ? t[0] * n : e.length
      , a = no(e, 0, i, n, !0)
      , o = [];
    if (!a || a.next === a.prev)
        return o;
    let s, c, l;
    if (r && (a = lo(e, t, a, n)),
    e.length > 80 * n) {
        s = e[0],
        c = e[1];
        let t = s
          , r = c;
        for (let a = n; a < i; a += n) {
            let n = e[a]
              , i = e[a + 1];
            n < s && (s = n),
            i < c && (c = i),
            n > t && (t = n),
            i > r && (r = i)
        }
        l = Math.max(t - s, r - c),
        l = l === 0 ? 0 : 32767 / l
    }
    return io(a, o, n, s, c, l, 0),
    o
}
function no(e, t, n, r, i) {
    let a;
    if (i === Po(e, t, n, r) > 0)
        for (let i = t; i < n; i += r)
            a = jo(i / r | 0, e[i], e[i + 1], a);
    else
        for (let i = n - r; i >= t; i -= r)
            a = jo(i / r | 0, e[i], e[i + 1], a);
    return a && Co(a, a.next) && (Mo(a),
    a = a.next),
    a
}
function ro(e, t) {
    if (!e)
        return e;
    t ||= e;
    let n = e, r;
    do
        if (r = !1,
        !n.steiner && (Co(n, n.next) || So(n.prev, n, n.next) === 0)) {
            if (Mo(n),
            n = t = n.prev,
            n === n.next)
                break;
            r = !0
        } else
            n = n.next;
    while (r || n !== t);
    return t
}
function io(e, t, n, r, i, a, o) {
    if (!e)
        return;
    !o && a && ho(e, r, i, a);
    let s = e;
    for (; e.prev !== e.next; ) {
        let c = e.prev
          , l = e.next;
        if (a ? oo(e, r, i, a) : ao(e)) {
            t.push(c.i, e.i, l.i),
            Mo(e),
            e = l.next,
            s = l.next;
            continue
        }
        if (e = l,
        e === s) {
            o ? o === 1 ? (e = so(ro(e), t),
            io(e, t, n, r, i, a, 2)) : o === 2 && co(e, t, n, r, i, a) : io(ro(e), t, n, r, i, a, 1);
            break
        }
    }
}
function ao(e) {
    let t = e.prev
      , n = e
      , r = e.next;
    if (So(t, n, r) >= 0)
        return !1;
    let i = t.x
      , a = n.x
      , o = r.x
      , s = t.y
      , c = n.y
      , l = r.y
      , u = Math.min(i, a, o)
      , d = Math.min(s, c, l)
      , f = Math.max(i, a, o)
      , p = Math.max(s, c, l)
      , m = r.next;
    for (; m !== t; ) {
        if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && bo(i, s, a, c, o, l, m.x, m.y) && So(m.prev, m, m.next) >= 0)
            return !1;
        m = m.next
    }
    return !0
}
function oo(e, t, n, r) {
    let i = e.prev
      , a = e
      , o = e.next;
    if (So(i, a, o) >= 0)
        return !1;
    let s = i.x
      , c = a.x
      , l = o.x
      , u = i.y
      , d = a.y
      , f = o.y
      , p = Math.min(s, c, l)
      , m = Math.min(u, d, f)
      , h = Math.max(s, c, l)
      , g = Math.max(u, d, f)
      , _ = _o(p, m, t, n, r)
      , v = _o(h, g, t, n, r)
      , y = e.prevZ
      , b = e.nextZ;
    for (; y && y.z >= _ && b && b.z <= v; ) {
        if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && bo(s, u, c, d, l, f, y.x, y.y) && So(y.prev, y, y.next) >= 0 || (y = y.prevZ,
        b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && bo(s, u, c, d, l, f, b.x, b.y) && So(b.prev, b, b.next) >= 0))
            return !1;
        b = b.nextZ
    }
    for (; y && y.z >= _; ) {
        if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && bo(s, u, c, d, l, f, y.x, y.y) && So(y.prev, y, y.next) >= 0)
            return !1;
        y = y.prevZ
    }
    for (; b && b.z <= v; ) {
        if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && bo(s, u, c, d, l, f, b.x, b.y) && So(b.prev, b, b.next) >= 0)
            return !1;
        b = b.nextZ
    }
    return !0
}
function so(e, t) {
    let n = e;
    do {
        let r = n.prev
          , i = n.next.next;
        !Co(r, i) && wo(r, n, n.next, i) && Oo(r, i) && Oo(i, r) && (t.push(r.i, n.i, i.i),
        Mo(n),
        Mo(n.next),
        n = e = i),
        n = n.next
    } while (n !== e);
    return ro(n)
}
function co(e, t, n, r, i, a) {
    let o = e;
    do {
        let e = o.next.next;
        for (; e !== o.prev; ) {
            if (o.i !== e.i && xo(o, e)) {
                let s = Ao(o, e);
                o = ro(o, o.next),
                s = ro(s, s.next),
                io(o, t, n, r, i, a, 0),
                io(s, t, n, r, i, a, 0);
                return
            }
            e = e.next
        }
        o = o.next
    } while (o !== e)
}
function lo(e, t, n, r) {
    let i = [];
    for (let n = 0, a = t.length; n < a; n++) {
        let o = no(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
        o === o.next && (o.steiner = !0),
        i.push(vo(o))
    }
    i.sort(uo);
    for (let e = 0; e < i.length; e++)
        n = fo(i[e], n);
    return n
}
function uo(e, t) {
    let n = e.x - t.x;
    return n === 0 && (n = e.y - t.y,
    n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))),
    n
}
function fo(e, t) {
    let n = po(e, t);
    if (!n)
        return t;
    let r = Ao(n, e);
    return ro(r, r.next),
    ro(n, n.next)
}
function po(e, t) {
    let n = t, r = e.x, i = e.y, a = -1 / 0, o;
    if (Co(e, n))
        return n;
    do {
        if (Co(e, n.next))
            return n.next;
        if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
            let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (e <= r && e > a && (a = e,
            o = n.x < n.next.x ? n : n.next,
            e === r))
                return o
        }
        n = n.next
    } while (n !== t);
    if (!o)
        return null;
    let s = o
      , c = o.x
      , l = o.y
      , u = 1 / 0;
    n = o;
    do {
        if (r >= n.x && n.x >= c && r !== n.x && yo(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)) {
            let t = Math.abs(i - n.y) / (r - n.x);
            Oo(n, e) && (t < u || t === u && (n.x > o.x || n.x === o.x && mo(o, n))) && (o = n,
            u = t)
        }
        n = n.next
    } while (n !== s);
    return o
}
function mo(e, t) {
    return So(e.prev, e, t.prev) < 0 && So(t.next, e, e.next) < 0
}
function ho(e, t, n, r) {
    let i = e;
    do
        i.z === 0 && (i.z = _o(i.x, i.y, t, n, r)),
        i.prevZ = i.prev,
        i.nextZ = i.next,
        i = i.next;
    while (i !== e);
    i.prevZ.nextZ = null,
    i.prevZ = null,
    go(i)
}
function go(e) {
    let t, n = 1;
    do {
        let r = e, i;
        e = null;
        let a = null;
        for (t = 0; r; ) {
            t++;
            let o = r
              , s = 0;
            for (let e = 0; e < n && (s++,
            o = o.nextZ,
            o); e++)
                ;
            let c = n;
            for (; s > 0 || c > 0 && o; )
                s !== 0 && (c === 0 || !o || r.z <= o.z) ? (i = r,
                r = r.nextZ,
                s--) : (i = o,
                o = o.nextZ,
                c--),
                a ? a.nextZ = i : e = i,
                i.prevZ = a,
                a = i;
            r = o
        }
        a.nextZ = null,
        n *= 2
    } while (t > 1);
    return e
}
function _o(e, t, n, r, i) {
    return e = (e - n) * i | 0,
    t = (t - r) * i | 0,
    e = (e | e << 8) & 16711935,
    e = (e | e << 4) & 252645135,
    e = (e | e << 2) & 858993459,
    e = (e | e << 1) & 1431655765,
    t = (t | t << 8) & 16711935,
    t = (t | t << 4) & 252645135,
    t = (t | t << 2) & 858993459,
    t = (t | t << 1) & 1431655765,
    e | t << 1
}
function vo(e) {
    let t = e
      , n = e;
    do
        (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t),
        t = t.next;
    while (t !== e);
    return n
}
function yo(e, t, n, r, i, a, o, s) {
    return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s)
}
function bo(e, t, n, r, i, a, o, s) {
    return !(e === o && t === s) && yo(e, t, n, r, i, a, o, s)
}
function xo(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && !Do(e, t) && (Oo(e, t) && Oo(t, e) && ko(e, t) && (So(e.prev, e, t.prev) || So(e, t.prev, t)) || Co(e, t) && So(e.prev, e, e.next) > 0 && So(t.prev, t, t.next) > 0)
}
function So(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}
function Co(e, t) {
    return e.x === t.x && e.y === t.y
}
function wo(e, t, n, r) {
    let i = Eo(So(e, t, n))
      , a = Eo(So(e, t, r))
      , o = Eo(So(n, r, e))
      , s = Eo(So(n, r, t));
    return !!(i !== a && o !== s || i === 0 && To(e, n, t) || a === 0 && To(e, r, t) || o === 0 && To(n, e, r) || s === 0 && To(n, t, r))
}
function To(e, t, n) {
    return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y)
}
function Eo(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
}
function Do(e, t) {
    let n = e;
    do {
        if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && wo(n, n.next, e, t))
            return !0;
        n = n.next
    } while (n !== e);
    return !1
}
function Oo(e, t) {
    return So(e.prev, e, e.next) < 0 ? So(e, t, e.next) >= 0 && So(e, e.prev, t) >= 0 : So(e, t, e.prev) < 0 || So(e, e.next, t) < 0
}
function ko(e, t) {
    let n = e
      , r = !1
      , i = (e.x + t.x) / 2
      , a = (e.y + t.y) / 2;
    do
        n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r),
        n = n.next;
    while (n !== e);
    return r
}
function Ao(e, t) {
    let n = No(e.i, e.x, e.y)
      , r = No(t.i, t.x, t.y)
      , i = e.next
      , a = t.prev;
    return e.next = t,
    t.prev = e,
    n.next = i,
    i.prev = n,
    r.next = n,
    n.prev = r,
    a.next = r,
    r.prev = a,
    r
}
function jo(e, t, n, r) {
    let i = No(e, t, n);
    return r ? (i.next = r.next,
    i.prev = r,
    r.next.prev = i,
    r.next = i) : (i.prev = i,
    i.next = i),
    i
}
function Mo(e) {
    e.next.prev = e.prev,
    e.prev.next = e.next,
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ)
}
function No(e, t, n) {
    return {
        i: e,
        x: t,
        y: n,
        prev: null,
        next: null,
        z: 0,
        prevZ: null,
        nextZ: null,
        steiner: !1
    }
}
function Po(e, t, n, r) {
    let i = 0;
    for (let a = t, o = n - r; a < n; a += r)
        i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]),
        o = a;
    return i
}
var Fo = class {
    static triangulate(e, t, n=2) {
        return to(e, t, n)
    }
}
  , Io = class e {
    static area(e) {
        let t = e.length
          , n = 0;
        for (let r = t - 1, i = 0; i < t; r = i++)
            n += e[r].x * e[i].y - e[i].x * e[r].y;
        return n * .5
    }
    static isClockWise(t) {
        return e.area(t) < 0
    }
    static triangulateShape(e, t) {
        let n = []
          , r = []
          , i = [];
        Lo(e),
        Ro(n, e);
        let a = e.length;
        t.forEach(Lo);
        for (let e = 0; e < t.length; e++)
            r.push(a),
            a += t[e].length,
            Ro(n, t[e]);
        let o = Fo.triangulate(n, r);
        for (let e = 0; e < o.length; e += 3)
            i.push(o.slice(e, e + 3));
        return i
    }
}
;
function Lo(e) {
    let t = e.length;
    t > 2 && e[t - 1].equals(e[0]) && e.pop()
}
function Ro(e, t) {
    for (let n = 0; n < t.length; n++)
        e.push(t[n].x),
        e.push(t[n].y)
}
var zo = class e extends Or {
    constructor(e=new eo([new J(.5,.5), new J(-.5,.5), new J(-.5,-.5), new J(.5,-.5)]), t={}) {
        super(),
        this.type = `ExtrudeGeometry`,
        this.parameters = {
            shapes: e,
            options: t
        },
        e = Array.isArray(e) ? e : [e];
        let n = this
          , r = []
          , i = [];
        for (let t = 0, n = e.length; t < n; t++) {
            let n = e[t];
            a(n)
        }
        this.setAttribute(`position`, new br(r,3)),
        this.setAttribute(`uv`, new br(i,2)),
        this.computeVertexNormals();
        function a(e) {
            let a = [], o = t.curveSegments === void 0 ? 12 : t.curveSegments, s = t.steps === void 0 ? 1 : t.steps, c = t.depth === void 0 ? 1 : t.depth, l = t.bevelEnabled === void 0 || t.bevelEnabled, u = t.bevelThickness === void 0 ? .2 : t.bevelThickness, d = t.bevelSize === void 0 ? u - .1 : t.bevelSize, f = t.bevelOffset === void 0 ? 0 : t.bevelOffset, p = t.bevelSegments === void 0 ? 3 : t.bevelSegments, m = t.extrudePath, h = t.UVGenerator === void 0 ? Bo : t.UVGenerator, g, _ = !1, v, y, b, x;
            if (m) {
                g = m.getSpacedPoints(s),
                _ = !0,
                l = !1;
                let e = m.isCatmullRomCurve3 ? m.closed : !1;
                v = m.computeFrenetFrames(s, e),
                y = new Y,
                b = new Y,
                x = new Y
            }
            l || (p = 0,
            u = 0,
            d = 0,
            f = 0);
            let S = e.extractPoints(o)
              , C = S.shape
              , w = S.holes;
            if (!Io.isClockWise(C)) {
                C = C.reverse();
                for (let e = 0, t = w.length; e < t; e++) {
                    let t = w[e];
                    Io.isClockWise(t) && (w[e] = t.reverse())
                }
            }
            function T(e) {
                let t = e[0];
                for (let n = 1; n <= e.length; n++) {
                    let r = n % e.length
                      , i = e[r]
                      , a = i.x - t.x
                      , o = i.y - t.y
                      , s = a * a + o * o
                      , c = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(t.x), Math.abs(t.y));
                    if (s <= 10000000000000001e-36 * c * c) {
                        e.splice(r, 1),
                        n--;
                        continue
                    }
                    t = i
                }
            }
            T(C),
            w.forEach(T);
            let E = w.length
              , D = C;
            for (let e = 0; e < E; e++) {
                let t = w[e];
                C = C.concat(t)
            }
            function O(e, t, n) {
                return t || W(`ExtrudeGeometry: vec does not exist`),
                e.clone().addScaledVector(t, n)
            }
            let k = C.length;
            function A(e, t, n) {
                let r, i, a, o = e.x - t.x, s = e.y - t.y, c = n.x - e.x, l = n.y - e.y, u = o * o + s * s, d = o * l - s * c;
                if (Math.abs(d) > 2 ** -52) {
                    let d = Math.sqrt(u)
                      , f = Math.sqrt(c * c + l * l)
                      , p = t.x - s / d
                      , m = t.y + o / d
                      , h = n.x - l / f
                      , g = n.y + c / f
                      , _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
                    r = p + o * _ - e.x,
                    i = m + s * _ - e.y;
                    let v = r * r + i * i;
                    if (v <= 2)
                        return new J(r,i);
                    a = Math.sqrt(v / 2)
                } else {
                    let e = !1;
                    o > 2 ** -52 ? c > 2 ** -52 && (e = !0) : o < -(2 ** -52) ? c < -(2 ** -52) && (e = !0) : Math.sign(s) === Math.sign(l) && (e = !0),
                    e ? (r = -s,
                    i = o,
                    a = Math.sqrt(u)) : (r = o,
                    i = s,
                    a = Math.sqrt(u / 2))
                }
                return new J(r / a,i / a)
            }
            let j = [];
            for (let e = 0, t = D.length, n = t - 1, r = e + 1; e < t; e++,
            n++,
            r++)
                n === t && (n = 0),
                r === t && (r = 0),
                j[e] = A(D[e], D[n], D[r]);
            let M = [], N, ee = j.concat();
            for (let e = 0, t = E; e < t; e++) {
                let t = w[e];
                N = [];
                for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++,
                r++,
                i++)
                    r === n && (r = 0),
                    i === n && (i = 0),
                    N[e] = A(t[e], t[r], t[i]);
                M.push(N),
                ee = ee.concat(N)
            }
            let P;
            if (p === 0)
                P = Io.triangulateShape(D, w);
            else {
                let e = []
                  , t = [];
                for (let n = 0; n < p; n++) {
                    let r = n / p
                      , i = u * Math.cos(r * Math.PI / 2)
                      , a = d * Math.sin(r * Math.PI / 2) + f;
                    for (let t = 0, n = D.length; t < n; t++) {
                        let n = O(D[t], j[t], a);
                        ae(n.x, n.y, -i),
                        r === 0 && e.push(n)
                    }
                    for (let e = 0, n = E; e < n; e++) {
                        let n = w[e];
                        N = M[e];
                        let o = [];
                        for (let e = 0, t = n.length; e < t; e++) {
                            let t = O(n[e], N[e], a);
                            ae(t.x, t.y, -i),
                            r === 0 && o.push(t)
                        }
                        r === 0 && t.push(o)
                    }
                }
                P = Io.triangulateShape(e, t)
            }
            let te = P.length
              , ne = d + f;
            for (let e = 0; e < k; e++) {
                let t = l ? O(C[e], ee[e], ne) : C[e];
                _ ? (b.copy(v.normals[0]).multiplyScalar(t.x),
                y.copy(v.binormals[0]).multiplyScalar(t.y),
                x.copy(g[0]).add(b).add(y),
                ae(x.x, x.y, x.z)) : ae(t.x, t.y, 0)
            }
            for (let e = 1; e <= s; e++)
                for (let t = 0; t < k; t++) {
                    let n = l ? O(C[t], ee[t], ne) : C[t];
                    _ ? (b.copy(v.normals[e]).multiplyScalar(n.x),
                    y.copy(v.binormals[e]).multiplyScalar(n.y),
                    x.copy(g[e]).add(b).add(y),
                    ae(x.x, x.y, x.z)) : ae(n.x, n.y, c / s * e)
                }
            for (let e = p - 1; e >= 0; e--) {
                let t = e / p
                  , n = u * Math.cos(t * Math.PI / 2)
                  , r = d * Math.sin(t * Math.PI / 2) + f;
                for (let e = 0, t = D.length; e < t; e++) {
                    let t = O(D[e], j[e], r);
                    ae(t.x, t.y, c + n)
                }
                for (let e = 0, t = w.length; e < t; e++) {
                    let t = w[e];
                    N = M[e];
                    for (let e = 0, i = t.length; e < i; e++) {
                        let i = O(t[e], N[e], r);
                        _ ? ae(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : ae(i.x, i.y, c + n)
                    }
                }
            }
            re(),
            ie();
            function re() {
                let e = r.length / 3;
                if (l) {
                    let e = 0
                      , t = k * e;
                    for (let e = 0; e < te; e++) {
                        let n = P[e];
                        oe(n[2] + t, n[1] + t, n[0] + t)
                    }
                    e = s + p * 2,
                    t = k * e;
                    for (let e = 0; e < te; e++) {
                        let n = P[e];
                        oe(n[0] + t, n[1] + t, n[2] + t)
                    }
                } else {
                    for (let e = 0; e < te; e++) {
                        let t = P[e];
                        oe(t[2], t[1], t[0])
                    }
                    for (let e = 0; e < te; e++) {
                        let t = P[e];
                        oe(t[0] + k * s, t[1] + k * s, t[2] + k * s)
                    }
                }
                n.addGroup(e, r.length / 3 - e, 0)
            }
            function ie() {
                let e = r.length / 3
                  , t = 0;
                F(D, t),
                t += D.length;
                for (let e = 0, n = w.length; e < n; e++) {
                    let n = w[e];
                    F(n, t),
                    t += n.length
                }
                n.addGroup(e, r.length / 3 - e, 1)
            }
            function F(e, t) {
                let n = e.length;
                for (; --n >= 0; ) {
                    let r = n
                      , i = n - 1;
                    i < 0 && (i = e.length - 1);
                    for (let e = 0, n = s + p * 2; e < n; e++) {
                        let n = k * e
                          , a = k * (e + 1);
                        se(t + r + n, t + i + n, t + i + a, t + r + a)
                    }
                }
            }
            function ae(e, t, n) {
                a.push(e),
                a.push(t),
                a.push(n)
            }
            function oe(e, t, i) {
                I(e),
                I(t),
                I(i);
                let a = r.length / 3
                  , o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
                ce(o[0]),
                ce(o[1]),
                ce(o[2])
            }
            function se(e, t, i, a) {
                I(e),
                I(t),
                I(a),
                I(t),
                I(i),
                I(a);
                let o = r.length / 3
                  , s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
                ce(s[0]),
                ce(s[1]),
                ce(s[3]),
                ce(s[1]),
                ce(s[2]),
                ce(s[3])
            }
            function I(e) {
                r.push(a[e * 3 + 0]),
                r.push(a[e * 3 + 1]),
                r.push(a[e * 3 + 2])
            }
            function ce(e) {
                i.push(e.x),
                i.push(e.y)
            }
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    toJSON() {
        let e = super.toJSON()
          , t = this.parameters.shapes
          , n = this.parameters.options;
        return Vo(t, n, e)
    }
    static fromJSON(t, n) {
        let r = [];
        for (let e = 0, i = t.shapes.length; e < i; e++) {
            let i = n[t.shapes[e]];
            r.push(i)
        }
        let i = t.options.extrudePath;
        return i !== void 0 && (t.options.extrudePath = new Za[i.type]().fromJSON(i)),
        new e(r,t.options)
    }
}
  , Bo = {
    generateTopUV: function(e, t, n, r, i) {
        let a = t[n * 3]
          , o = t[n * 3 + 1]
          , s = t[r * 3]
          , c = t[r * 3 + 1]
          , l = t[i * 3]
          , u = t[i * 3 + 1];
        return [new J(a,o), new J(s,c), new J(l,u)]
    },
    generateSideWallUV: function(e, t, n, r, i, a) {
        let o = t[n * 3]
          , s = t[n * 3 + 1]
          , c = t[n * 3 + 2]
          , l = t[r * 3]
          , u = t[r * 3 + 1]
          , d = t[r * 3 + 2]
          , f = t[i * 3]
          , p = t[i * 3 + 1]
          , m = t[i * 3 + 2]
          , h = t[a * 3]
          , g = t[a * 3 + 1]
          , _ = t[a * 3 + 2];
        return Math.abs(s - u) < Math.abs(o - l) ? [new J(o,1 - c), new J(l,1 - d), new J(f,1 - m), new J(h,1 - _)] : [new J(s,1 - c), new J(u,1 - d), new J(p,1 - m), new J(g,1 - _)]
    }
};
function Vo(e, t, n) {
    if (n.shapes = [],
    Array.isArray(e))
        for (let t = 0, r = e.length; t < r; t++) {
            let r = e[t];
            n.shapes.push(r.uuid)
        }
    else
        n.shapes.push(e.uuid);
    return n.options = Object.assign({}, t),
    t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()),
    n
}
var Ho = class e extends Or {
    constructor(e=1, t=1, n=1, r=1) {
        super(),
        this.type = `PlaneGeometry`,
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        let i = e / 2
          , a = t / 2
          , o = Math.floor(n)
          , s = Math.floor(r)
          , c = o + 1
          , l = s + 1
          , u = e / o
          , d = t / s
          , f = []
          , p = []
          , m = []
          , h = [];
        for (let e = 0; e < l; e++) {
            let t = e * d - a;
            for (let n = 0; n < c; n++) {
                let r = n * u - i;
                p.push(r, -t, 0),
                m.push(0, 0, 1),
                h.push(n / o),
                h.push(1 - e / s)
            }
        }
        for (let e = 0; e < s; e++)
            for (let t = 0; t < o; t++) {
                let n = t + c * e
                  , r = t + c * (e + 1)
                  , i = t + 1 + c * (e + 1)
                  , a = t + 1 + c * e;
                f.push(n, r, a),
                f.push(r, i, a)
            }
        this.setIndex(f),
        this.setAttribute(`position`, new br(p,3)),
        this.setAttribute(`normal`, new br(m,3)),
        this.setAttribute(`uv`, new br(h,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(t) {
        return new e(t.width,t.height,t.widthSegments,t.heightSegments)
    }
}
  , Uo = class extends Or {
    constructor(e=null) {
        if (super(),
        this.type = `WireframeGeometry`,
        this.parameters = {
            geometry: e
        },
        e !== null) {
            let t = []
              , n = new Set
              , r = new Y
              , i = new Y;
            if (e.index !== null) {
                let a = e.attributes.position
                  , o = e.index
                  , s = e.groups;
                s.length === 0 && (s = [{
                    start: 0,
                    count: o.count,
                    materialIndex: 0
                }]);
                for (let e = 0, c = s.length; e < c; ++e) {
                    let c = s[e]
                      , l = c.start
                      , u = c.count;
                    for (let e = l, s = l + u; e < s; e += 3)
                        for (let s = 0; s < 3; s++) {
                            let c = o.getX(e + s)
                              , l = o.getX(e + (s + 1) % 3);
                            r.fromBufferAttribute(a, c),
                            i.fromBufferAttribute(a, l),
                            Wo(r, i, n) === !0 && (t.push(r.x, r.y, r.z),
                            t.push(i.x, i.y, i.z))
                        }
                }
            } else {
                let a = e.attributes.position;
                for (let e = 0, o = a.count / 3; e < o; e++)
                    for (let o = 0; o < 3; o++) {
                        let s = 3 * e + o
                          , c = 3 * e + (o + 1) % 3;
                        r.fromBufferAttribute(a, s),
                        i.fromBufferAttribute(a, c),
                        Wo(r, i, n) === !0 && (t.push(r.x, r.y, r.z),
                        t.push(i.x, i.y, i.z))
                    }
            }
            this.setAttribute(`position`, new br(t,3))
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
}
;
function Wo(e, t, n) {
    let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`
      , i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
    return n.has(r) === !0 || n.has(i) === !0 ? !1 : (n.add(r),
    n.add(i),
    !0)
}
var Go = class extends Xr {
    constructor(e) {
        super(e),
        this.isRawShaderMaterial = !0,
        this.type = `RawShaderMaterial`
    }
}
  , Ko = class extends fr {
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.type = `MeshStandardMaterial`,
        this.defines = {
            STANDARD: ``
        },
        this.color = new Z(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Z(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new J(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new On,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = `round`,
        this.wireframeLinejoin = `round`,
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ``
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
  , qo = class extends Ko {
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: ``,
            PHYSICAL: ``
        },
        this.type = `MeshPhysicalMaterial`,
        this.anisotropyRotation = 0,
        this.anisotropyMap = null,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new J(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return G(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(e) {
                this.ior = (1 + .4 * e) / (1 - .4 * e)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new Z(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 1 / 0,
        this.attenuationColor = new Z(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new Z(1,1,1),
        this.specularColorMap = null,
        this._anisotropy = 0,
        this._clearcoat = 0,
        this._dispersion = 0,
        this._iridescence = 0,
        this._sheen = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get anisotropy() {
        return this._anisotropy
    }
    set anisotropy(e) {
        this._anisotropy > 0 != e > 0 && this.version++,
        this._anisotropy = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get dispersion() {
        return this._dispersion
    }
    set dispersion(e) {
        this._dispersion > 0 != e > 0 && this.version++,
        this._dispersion = e
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ``,
            PHYSICAL: ``
        },
        this.anisotropy = e.anisotropy,
        this.anisotropyRotation = e.anisotropyRotation,
        this.anisotropyMap = e.anisotropyMap,
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.dispersion = e.dispersion,
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
  , Jo = class extends fr {
    constructor(e) {
        super(),
        this.isMeshLambertMaterial = !0,
        this.type = `MeshLambertMaterial`,
        this.color = new Z(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Z(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new J(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new On,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = `round`,
        this.wireframeLinejoin = `round`,
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
  , Yo = class extends fr {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = `MeshDepthMaterial`,
        this.depthPacking = Ie,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
  , Xo = class extends fr {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = `MeshDistanceMaterial`,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
  , Zo = class extends Yi {
    constructor(e) {
        super(),
        this.isLineDashedMaterial = !0,
        this.type = `LineDashedMaterial`,
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.scale = e.scale,
        this.dashSize = e.dashSize,
        this.gapSize = e.gapSize,
        this
    }
}
;
function Qo(e, t) {
    return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == `number` ? new t(e) : Array.prototype.slice.call(e)
}
var $o = class {
    constructor(e, t, n, r) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = r === void 0 ? new t.constructor(n) : r,
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        let t = this.parameterPositions
          , n = this._cachedIndex
          , r = t[n]
          , i = t[n - 1];
        validate_interval: {
            seek: {
                let a;
                linear_scan: {
                    forward_scan: if (!(e < r)) {
                        for (let a = n + 2; ; ) {
                            if (r === void 0) {
                                if (e < i)
                                    break forward_scan;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === a)
                                break;
                            if (i = r,
                            r = t[++n],
                            e < r)
                                break seek
                        }
                        a = t.length;
                        break linear_scan
                    }
                    if (!(e >= i)) {
                        let o = t[1];
                        e < o && (n = 2,
                        i = o);
                        for (let a = n - 2; ; ) {
                            if (i === void 0)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === a)
                                break;
                            if (r = i,
                            i = t[--n - 1],
                            e >= i)
                                break seek
                        }
                        a = n,
                        n = 0;
                        break linear_scan
                    }
                    break validate_interval
                }
                for (; n < a; ) {
                    let r = n + a >>> 1;
                    e < t[r] ? a = r : n = r + 1
                }
                if (r = t[n],
                i = t[n - 1],
                i === void 0)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (r === void 0)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, i, r)
        }
        return this.interpolate_(n, i, e, r)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        let t = this.resultBuffer
          , n = this.sampleValues
          , r = this.valueSize
          , i = e * r;
        for (let e = 0; e !== r; ++e)
            t[e] = n[i + e];
        return t
    }
    interpolate_() {
        throw Error(`call to abstract method`)
    }
    intervalChanged_() {}
}
  , es = class extends $o {
    constructor(e, t, n, r) {
        super(e, t, n, r),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: Ne,
            endingEnd: Ne
        }
    }
    intervalChanged_(e, t, n) {
        let r = this.parameterPositions
          , i = e - 2
          , a = e + 1
          , o = r[i]
          , s = r[a];
        if (o === void 0)
            switch (this.getSettings_().endingStart) {
            case Pe:
                i = e,
                o = 2 * t - n;
                break;
            case Fe:
                i = r.length - 2,
                o = t + r[i] - r[i + 1];
                break;
            default:
                i = e,
                o = n
            }
        if (s === void 0)
            switch (this.getSettings_().endingEnd) {
            case Pe:
                a = e,
                s = 2 * n - t;
                break;
            case Fe:
                a = 1,
                s = n + r[1] - r[0];
                break;
            default:
                a = e - 1,
                s = t
            }
        let c = (n - t) * .5
          , l = this.valueSize;
        this._weightPrev = c / (t - o),
        this._weightNext = c / (s - n),
        this._offsetPrev = i * l,
        this._offsetNext = a * l
    }
    interpolate_(e, t, n, r) {
        let i = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , s = e * o
          , c = s - o
          , l = this._offsetPrev
          , u = this._offsetNext
          , d = this._weightPrev
          , f = this._weightNext
          , p = (n - t) / (r - t)
          , m = p * p
          , h = m * p
          , g = -d * h + 2 * d * m - d * p
          , _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1
          , v = (-1 - f) * h + (1.5 + f) * m + .5 * p
          , y = f * h - f * m;
        for (let e = 0; e !== o; ++e)
            i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
        return i
    }
}
  , ts = class extends $o {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        let i = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , s = e * o
          , c = s - o
          , l = (n - t) / (r - t)
          , u = 1 - l;
        for (let e = 0; e !== o; ++e)
            i[e] = a[c + e] * u + a[s + e] * l;
        return i
    }
}
  , ns = class extends $o {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
  , rs = class {
    constructor(e, t, n, r) {
        if (e === void 0)
            throw Error(`THREE.KeyframeTrack: track name is undefined`);
        if (t === void 0 || t.length === 0)
            throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
        this.name = e,
        this.times = Qo(t, this.TimeBufferType),
        this.values = Qo(n, this.ValueBufferType),
        this.setInterpolation(r || this.DefaultInterpolation)
    }
    static toJSON(e) {
        let t = e.constructor, n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Qo(e.times, Array),
                values: Qo(e.values, Array)
            };
            let t = e.getInterpolation();
            t !== e.DefaultInterpolation && (n.interpolation = t)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new ns(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new ts(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new es(this.times,this.values,this.getValueSize(),e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case B:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case je:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case Me:
            t = this.InterpolantFactoryMethodSmooth;
            break
        }
        if (t === void 0) {
            let t = `unsupported interpolation for ` + this.ValueTypeName + ` keyframe track named ` + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw Error(t);
            return U(`KeyframeTrack:`, t),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return B;
        case this.InterpolantFactoryMethodLinear:
            return je;
        case this.InterpolantFactoryMethodSmooth:
            return Me
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            let t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            let t = this.times;
            for (let n = 0, r = t.length; n !== r; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        let n = this.times
          , r = n.length
          , i = 0
          , a = r - 1;
        for (; i !== r && n[i] < e; )
            ++i;
        for (; a !== -1 && n[a] > t; )
            --a;
        if (++a,
        i !== 0 || a !== r) {
            i >= a && (a = Math.max(a, 1),
            i = a - 1);
            let e = this.getValueSize();
            this.times = n.slice(i, a),
            this.values = this.values.slice(i * e, a * e)
        }
        return this
    }
    validate() {
        let e = !0
          , t = this.getValueSize();
        t - Math.floor(t) !== 0 && (W(`KeyframeTrack: Invalid value size in track.`, this),
        e = !1);
        let n = this.times
          , r = this.values
          , i = n.length;
        i === 0 && (W(`KeyframeTrack: Track is empty.`, this),
        e = !1);
        let a = null;
        for (let t = 0; t !== i; t++) {
            let r = n[t];
            if (typeof r == `number` && isNaN(r)) {
                W(`KeyframeTrack: Time is not a valid number.`, this, t, r),
                e = !1;
                break
            }
            if (a !== null && a > r) {
                W(`KeyframeTrack: Out of order keys.`, this, t, r, a),
                e = !1;
                break
            }
            a = r
        }
        if (r !== void 0 && V(r))
            for (let t = 0, n = r.length; t !== n; ++t) {
                let n = r[t];
                if (isNaN(n)) {
                    W(`KeyframeTrack: Value is not a valid number.`, this, t, n),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        let e = this.times.slice()
          , t = this.values.slice()
          , n = this.getValueSize()
          , r = this.getInterpolation() === Me
          , i = e.length - 1
          , a = 1;
        for (let o = 1; o < i; ++o) {
            let i = !1
              , s = e[o];
            if (s !== e[o + 1] && (o !== 1 || s !== e[0]))
                if (r)
                    i = !0;
                else {
                    let e = o * n
                      , r = e - n
                      , a = e + n;
                    for (let o = 0; o !== n; ++o) {
                        let n = t[e + o];
                        if (n !== t[r + o] || n !== t[a + o]) {
                            i = !0;
                            break
                        }
                    }
                }
            if (i) {
                if (o !== a) {
                    e[a] = e[o];
                    let r = o * n
                      , i = a * n;
                    for (let e = 0; e !== n; ++e)
                        t[i + e] = t[r + e]
                }
                ++a
            }
        }
        if (i > 0) {
            e[a] = e[i];
            for (let e = i * n, r = a * n, o = 0; o !== n; ++o)
                t[r + o] = t[e + o];
            ++a
        }
        return a === e.length ? (this.times = e,
        this.values = t) : (this.times = e.slice(0, a),
        this.values = t.slice(0, a * n)),
        this
    }
    clone() {
        let e = this.times.slice()
          , t = this.values.slice()
          , n = this.constructor
          , r = new n(this.name,e,t);
        return r.createInterpolant = this.createInterpolant,
        r
    }
}
;
rs.prototype.ValueTypeName = ``,
rs.prototype.TimeBufferType = Float32Array,
rs.prototype.ValueBufferType = Float32Array,
rs.prototype.DefaultInterpolation = je;
var is = class extends rs {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
;
is.prototype.ValueTypeName = `bool`,
is.prototype.ValueBufferType = Array,
is.prototype.DefaultInterpolation = B,
is.prototype.InterpolantFactoryMethodLinear = void 0,
is.prototype.InterpolantFactoryMethodSmooth = void 0;
var as = class extends rs {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
;
as.prototype.ValueTypeName = `color`;
var os = class extends rs {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
;
os.prototype.ValueTypeName = `number`;
var ss = class extends $o {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
        let i = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , s = (n - t) / (r - t)
          , c = e * o;
        for (let e = c + o; c !== e; c += 4)
            xt.slerpFlat(i, 0, a, c - o, a, c, s);
        return i
    }
}
  , cs = class extends rs {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
    InterpolantFactoryMethodLinear(e) {
        return new ss(this.times,this.values,this.getValueSize(),e)
    }
}
;
cs.prototype.ValueTypeName = `quaternion`,
cs.prototype.InterpolantFactoryMethodSmooth = void 0;
var ls = class extends rs {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
;
ls.prototype.ValueTypeName = `string`,
ls.prototype.ValueBufferType = Array,
ls.prototype.DefaultInterpolation = B,
ls.prototype.InterpolantFactoryMethodLinear = void 0,
ls.prototype.InterpolantFactoryMethodSmooth = void 0;
var us = class extends rs {
    constructor(e, t, n, r) {
        super(e, t, n, r)
    }
}
;
us.prototype.ValueTypeName = `vector`;
var ds = new class {
    constructor(e, t, n) {
        let r = this, i = !1, a = 0, o = 0, s, c = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this._abortController = null,
        this.itemStart = function(e) {
            o++,
            i === !1 && r.onStart !== void 0 && r.onStart(e, a, o),
            i = !0
        }
        ,
        this.itemEnd = function(e) {
            a++,
            r.onProgress !== void 0 && r.onProgress(e, a, o),
            a === o && (i = !1,
            r.onLoad !== void 0 && r.onLoad())
        }
        ,
        this.itemError = function(e) {
            r.onError !== void 0 && r.onError(e)
        }
        ,
        this.resolveURL = function(e) {
            return s ? s(e) : e
        }
        ,
        this.setURLModifier = function(e) {
            return s = e,
            this
        }
        ,
        this.addHandler = function(e, t) {
            return c.push(e, t),
            this
        }
        ,
        this.removeHandler = function(e) {
            let t = c.indexOf(e);
            return t !== -1 && c.splice(t, 2),
            this
        }
        ,
        this.getHandler = function(e) {
            for (let t = 0, n = c.length; t < n; t += 2) {
                let n = c[t]
                  , r = c[t + 1];
                if (n.global && (n.lastIndex = 0),
                n.test(e))
                    return r
            }
            return null
        }
        ,
        this.abort = function() {
            return this.abortController.abort(),
            this._abortController = null,
            this
        }
    }
    get abortController() {
        return this._abortController ||= new AbortController,
        this._abortController
    }
}
  , fs = class {
    constructor(e) {
        this.manager = e === void 0 ? ds : e,
        this.crossOrigin = `anonymous`,
        this.withCredentials = !1,
        this.path = ``,
        this.resourcePath = ``,
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        let n = this;
        return new Promise(function(r, i) {
            n.load(e, r, t, i)
        }
        )
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
    abort() {
        return this
    }
}
;
fs.DEFAULT_MATERIAL_NAME = `__DEFAULT`;
var ps = class extends Gn {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = `Light`,
        this.color = new Z(e),
        this.intensity = t
    }
    dispose() {
        this.dispatchEvent({
            type: `dispose`
        })
    }
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        t
    }
}
  , ms = class extends ps {
    constructor(e, t, n) {
        super(e, n),
        this.isHemisphereLight = !0,
        this.type = `HemisphereLight`,
        this.position.copy(Gn.DEFAULT_UP),
        this.updateMatrix(),
        this.groundColor = new Z(t)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.groundColor.copy(e.groundColor),
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.groundColor = this.groundColor.getHex(),
        t
    }
}
  , hs = new vn
  , gs = new Y
  , _s = new Y
  , vs = class {
    constructor(e) {
        this.camera = e,
        this.intensity = 1,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new J(512,512),
        this.mapType = f,
        this.map = null,
        this.mapPass = null,
        this.matrix = new vn,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new Ji,
        this._frameExtents = new J(1,1),
        this._viewportCount = 1,
        this._viewports = [new zt(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        let t = this.camera
          , n = this.matrix;
        gs.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(gs),
        _s.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(_s),
        t.updateMatrixWorld(),
        hs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(hs, t.coordinateSystem, t.reversedDepth),
        t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(hs)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.intensity = e.intensity,
        this.bias = e.bias,
        this.radius = e.radius,
        this.autoUpdate = e.autoUpdate,
        this.needsUpdate = e.needsUpdate,
        this.normalBias = e.normalBias,
        this.blurSamples = e.blurSamples,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        let e = {};
        return this.intensity !== 1 && (e.intensity = this.intensity),
        this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
  , ys = class extends vs {
    constructor() {
        super(new ti(90,1,.5,500)),
        this.isPointLightShadow = !0
    }
}
  , bs = class extends ps {
    constructor(e, t, n=0, r=2) {
        super(e, t),
        this.isPointLight = !0,
        this.type = `PointLight`,
        this.distance = n,
        this.decay = r,
        this.shadow = new ys
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        super.dispose(),
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.distance = this.distance,
        t.object.decay = this.decay,
        t.object.shadow = this.shadow.toJSON(),
        t
    }
}
  , xs = class extends Zr {
    constructor(e=-1, t=1, n=1, r=-1, i=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = `OrthographicCamera`,
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = r,
        this.near = i,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, r, i, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = i,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        let e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , r = (this.top + this.bottom) / 2
          , i = n - e
          , a = n + e
          , o = r + t
          , s = r - t;
        if (this.view !== null && this.view.enabled) {
            let e = (this.right - this.left) / this.view.fullWidth / this.zoom
              , t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            i += e * this.view.offsetX,
            a = i + e * this.view.width,
            o -= t * this.view.offsetY,
            s = o - t * this.view.height
        }
        this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
  , Ss = class extends vs {
    constructor() {
        super(new xs(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
  , Cs = class extends ps {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = `DirectionalLight`,
        this.position.copy(Gn.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new Gn,
        this.shadow = new Ss
    }
    dispose() {
        super.dispose(),
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.shadow = this.shadow.toJSON(),
        t.object.target = this.target.uuid,
        t
    }
}
  , ws = class extends Or {
    constructor() {
        super(),
        this.isInstancedBufferGeometry = !0,
        this.type = `InstancedBufferGeometry`,
        this.instanceCount = 1 / 0
    }
    copy(e) {
        return super.copy(e),
        this.instanceCount = e.instanceCount,
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.instanceCount = this.instanceCount,
        e.isInstancedBufferGeometry = !0,
        e
    }
}
  , Ts = class extends ti {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.isMultiViewCamera = !1,
        this.cameras = e
    }
}
  , Es = class {
    constructor(e=!0) {
        this.autoStart = e,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    start() {
        this.startTime = performance.now(),
        this.oldTime = this.startTime,
        this.elapsedTime = 0,
        this.running = !0
    }
    stop() {
        this.getElapsedTime(),
        this.running = !1,
        this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(),
        this.elapsedTime
    }
    getDelta() {
        let e = 0;
        if (this.autoStart && !this.running)
            return this.start(),
            0;
        if (this.running) {
            let t = performance.now();
            e = (t - this.oldTime) / 1e3,
            this.oldTime = t,
            this.elapsedTime += e
        }
        return e
    }
}
  , Ds = `\\[\\]\\.:\\/`
  , Os = RegExp(`[\\[\\]\\.:\\/]`, `g`)
  , ks = `[^\\[\\]\\.:\\/]`
  , As = `[^` + Ds.replace(`\\.`, ``) + `]`
  , js = `((?:WC+[\\/:])*)`.replace(`WC`, ks)
  , Ms = `(WCOD+)?`.replace(`WCOD`, As)
  , Ns = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, ks)
  , Ps = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, ks)
  , Fs = RegExp(`^` + js + Ms + Ns + Ps + `$`)
  , Is = [`material`, `materials`, `bones`, `map`]
  , Ls = class {
    constructor(e, t, n) {
        let r = n || Rs.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, r)
    }
    getValue(e, t) {
        this.bind();
        let n = this._targetGroup.nCachedObjects_
          , r = this._bindings[n];
        r !== void 0 && r.getValue(e, t)
    }
    setValue(e, t) {
        let n = this._bindings;
        for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
            n[r].setValue(e, t)
    }
    bind() {
        let e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        let e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
  , Rs = class e {
    constructor(t, n, r) {
        this.path = n,
        this.parsedPath = r || e.parseTrackName(n),
        this.node = e.findNode(t, this.parsedPath.nodeName),
        this.rootNode = t,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(t, n, r) {
        return t && t.isAnimationObjectGroup ? new e.Composite(t,n,r) : new e(t,n,r)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, `_`).replace(Os, ``)
    }
    static parseTrackName(e) {
        let t = Fs.exec(e);
        if (t === null)
            throw Error(`PropertyBinding: Cannot parse trackName: ` + e);
        let n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , r = n.nodeName && n.nodeName.lastIndexOf(`.`);
        if (r !== void 0 && r !== -1) {
            let e = n.nodeName.substring(r + 1);
            Is.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r),
            n.objectName = e)
        }
        if (n.propertyName === null || n.propertyName.length === 0)
            throw Error(`PropertyBinding: can not parse propertyName from trackName: ` + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === `` || t === `.` || t === -1 || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            let n = e.skeleton.getBoneByName(t);
            if (n !== void 0)
                return n
        }
        if (e.children) {
            let n = function(e) {
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if (i.name === t || i.uuid === t)
                        return i;
                    let a = n(i.children);
                    if (a)
                        return a
                }
                return null
            }
              , r = n(e.children);
            if (r)
                return r
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        let n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r)
            e[t++] = n[r]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        let n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for (let r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let t = this.node
          , n = this.parsedPath
          , r = n.objectName
          , i = n.propertyName
          , a = n.propertyIndex;
        if (t || (t = e.findNode(this.rootNode, n.nodeName),
        this.node = t),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !t) {
            U(`PropertyBinding: No target node found for track: ` + this.path + `.`);
            return
        }
        if (r) {
            let e = n.objectIndex;
            switch (r) {
            case `materials`:
                if (!t.material) {
                    W(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
                    return
                }
                if (!t.material.materials) {
                    W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`, this);
                    return
                }
                t = t.material.materials;
                break;
            case `bones`:
                if (!t.skeleton) {
                    W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this);
                    return
                }
                t = t.skeleton.bones;
                for (let n = 0; n < t.length; n++)
                    if (t[n].name === e) {
                        e = n;
                        break
                    }
                break;
            case `map`:
                if (`map` in t) {
                    t = t.map;
                    break
                }
                if (!t.material) {
                    W(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
                    return
                }
                if (!t.material.map) {
                    W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`, this);
                    return
                }
                t = t.material.map;
                break;
            default:
                if (t[r] === void 0) {
                    W(`PropertyBinding: Can not bind to objectName of node undefined.`, this);
                    return
                }
                t = t[r]
            }
            if (e !== void 0) {
                if (t[e] === void 0) {
                    W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`, this, t);
                    return
                }
                t = t[e]
            }
        }
        let o = t[i];
        if (o === void 0) {
            let e = n.nodeName;
            W(`PropertyBinding: Trying to update property for track: ` + e + `.` + i + ` but it wasn't found.`, t);
            return
        }
        let s = this.Versioning.None;
        this.targetObject = t,
        t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
        let c = this.BindingType.Direct;
        if (a !== void 0) {
            if (i === `morphTargetInfluences`) {
                if (!t.geometry) {
                    W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`, this);
                    return
                }
                if (!t.geometry.morphAttributes) {
                    W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`, this);
                    return
                }
                t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a])
            }
            c = this.BindingType.ArrayElement,
            this.resolvedProperty = o,
            this.propertyIndex = a
        } else
            o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray,
            this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray,
            this.resolvedProperty = o) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[c],
        this.setValue = this.SetterByBindingTypeAndVersioning[c][s]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
;
Rs.Composite = Ls,
Rs.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
},
Rs.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
},
Rs.prototype.GetterByBindingType = [Rs.prototype._getValue_direct, Rs.prototype._getValue_array, Rs.prototype._getValue_arrayElement, Rs.prototype._getValue_toArray],
Rs.prototype.SetterByBindingTypeAndVersioning = [[Rs.prototype._setValue_direct, Rs.prototype._setValue_direct_setNeedsUpdate, Rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Rs.prototype._setValue_array, Rs.prototype._setValue_array_setNeedsUpdate, Rs.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Rs.prototype._setValue_arrayElement, Rs.prototype._setValue_arrayElement_setNeedsUpdate, Rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Rs.prototype._setValue_fromArray, Rs.prototype._setValue_fromArray_setNeedsUpdate, Rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var zs = class extends fi {
    constructor(e, t, n=1) {
        super(e, t),
        this.isInstancedInterleavedBuffer = !0,
        this.meshPerAttribute = n
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    clone(e) {
        let t = super.clone(e);
        return t.meshPerAttribute = this.meshPerAttribute,
        t
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.isInstancedInterleavedBuffer = !0,
        t.meshPerAttribute = this.meshPerAttribute,
        t
    }
}
  , Bs = class {
    constructor(e=1, t=0, n=0) {
        this.radius = e,
        this.phi = t,
        this.theta = n
    }
    set(e, t, n) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    }
    copy(e) {
        return this.radius = e.radius,
        this.phi = e.phi,
        this.theta = e.theta,
        this
    }
    makeSafe() {
        let e = 1e-6;
        return this.phi = G(this.phi, e, Math.PI - e),
        this
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n),
        this.radius === 0 ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e, n),
        this.phi = Math.acos(G(t / this.radius, -1, 1))),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Vs = new Y
  , Hs = new Y
  , Us = new Y
  , Ws = new Y
  , Gs = new Y
  , Ks = new Y
  , qs = new Y
  , Js = class {
    constructor(e=new Y, t=new Y) {
        this.start = e,
        this.end = t
    }
    set(e, t) {
        return this.start.copy(e),
        this.end.copy(t),
        this
    }
    copy(e) {
        return this.start.copy(e.start),
        this.end.copy(e.end),
        this
    }
    getCenter(e) {
        return e.addVectors(this.start, this.end).multiplyScalar(.5)
    }
    delta(e) {
        return e.subVectors(this.end, this.start)
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end)
    }
    distance() {
        return this.start.distanceTo(this.end)
    }
    at(e, t) {
        return this.delta(t).multiplyScalar(e).add(this.start)
    }
    closestPointToPointParameter(e, t) {
        Vs.subVectors(e, this.start),
        Hs.subVectors(this.end, this.start);
        let n = Hs.dot(Hs)
          , r = Hs.dot(Vs) / n;
        return t && (r = G(r, 0, 1)),
        r
    }
    closestPointToPoint(e, t, n) {
        let r = this.closestPointToPointParameter(e, t);
        return this.delta(n).multiplyScalar(r).add(this.start)
    }
    distanceSqToLine3(e, t=Ks, n=qs) {
        let r = 1e-8 * 1e-8, i, a, o = this.start, s = e.start, c = this.end, l = e.end;
        Us.subVectors(c, o),
        Ws.subVectors(l, s),
        Gs.subVectors(o, s);
        let u = Us.dot(Us)
          , d = Ws.dot(Ws)
          , f = Ws.dot(Gs);
        if (u <= r && d <= r)
            return t.copy(o),
            n.copy(s),
            t.sub(n),
            t.dot(t);
        if (u <= r)
            i = 0,
            a = f / d,
            a = G(a, 0, 1);
        else {
            let e = Us.dot(Gs);
            if (d <= r)
                a = 0,
                i = G(-e / u, 0, 1);
            else {
                let t = Us.dot(Ws)
                  , n = u * d - t * t;
                i = n === 0 ? 0 : G((t * f - e * d) / n, 0, 1),
                a = (t * i + f) / d,
                a < 0 ? (a = 0,
                i = G(-e / u, 0, 1)) : a > 1 && (a = 1,
                i = G((t - e) / u, 0, 1))
            }
        }
        return t.copy(o).add(Us.multiplyScalar(i)),
        n.copy(s).add(Ws.multiplyScalar(a)),
        t.sub(n),
        t.dot(t)
    }
    applyMatrix4(e) {
        return this.start.applyMatrix4(e),
        this.end.applyMatrix4(e),
        this
    }
    equals(e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Ys = class extends sa {
    constructor(e=10, t=10, n=4473924, r=8947848) {
        n = new Z(n),
        r = new Z(r);
        let i = t / 2
          , a = e / t
          , o = e / 2
          , s = []
          , c = [];
        for (let e = 0, l = 0, u = -o; e <= t; e++,
        u += a) {
            s.push(-o, 0, u, o, 0, u),
            s.push(u, 0, -o, u, 0, o);
            let t = e === i ? n : r;
            t.toArray(c, l),
            l += 3,
            t.toArray(c, l),
            l += 3,
            t.toArray(c, l),
            l += 3,
            t.toArray(c, l),
            l += 3
        }
        let l = new Or;
        l.setAttribute(`position`, new br(s,3)),
        l.setAttribute(`color`, new br(c,3));
        let u = new Yi({
            vertexColors: !0,
            toneMapped: !1
        });
        super(l, u),
        this.type = `GridHelper`
    }
    dispose() {
        this.geometry.dispose(),
        this.material.dispose()
    }
}
  , Xs = class extends Xe {
    constructor(e, t=null) {
        super(),
        this.object = e,
        this.domElement = t,
        this.enabled = !0,
        this.state = -1,
        this.keys = {},
        this.mouseButtons = {
            LEFT: null,
            MIDDLE: null,
            RIGHT: null
        },
        this.touches = {
            ONE: null,
            TWO: null
        }
    }
    connect(e) {
        if (e === void 0) {
            U(`Controls: connect() now requires an element.`);
            return
        }
        this.domElement !== null && this.disconnect(),
        this.domElement = e
    }
    disconnect() {}
    dispose() {}
    update() {}
}
;
function Zs(e, t, n, r) {
    let i = Qs(r);
    switch (n) {
    case T:
        return e * t;
    case A:
        return e * t / i.components * i.byteLength;
    case j:
        return e * t / i.components * i.byteLength;
    case M:
        return e * t * 2 / i.components * i.byteLength;
    case N:
        return e * t * 2 / i.components * i.byteLength;
    case E:
        return e * t * 3 / i.components * i.byteLength;
    case D:
        return e * t * 4 / i.components * i.byteLength;
    case ee:
        return e * t * 4 / i.components * i.byteLength;
    case P:
    case te:
        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ne:
    case re:
        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case F:
    case oe:
        return Math.max(e, 16) * Math.max(t, 8) / 4;
    case ie:
    case ae:
        return Math.max(e, 8) * Math.max(t, 8) / 2;
    case se:
    case I:
    case le:
    case ue:
        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ce:
    case de:
    case fe:
        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case pe:
        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case me:
        return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case he:
        return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ge:
        return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case _e:
        return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ve:
        return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case ye:
        return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case be:
        return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case xe:
        return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Se:
        return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Ce:
        return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case we:
        return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Te:
        return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Ee:
        return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case L:
    case De:
    case Oe:
        return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case ke:
    case R:
        return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case Ae:
    case z:
        return Math.ceil(e / 4) * Math.ceil(t / 4) * 16
    }
    throw Error(`Unable to determine texture byte length for ${n} format.`)
}
function Qs(e) {
    switch (e) {
    case f:
    case p:
        return {
            byteLength: 1,
            components: 1
        };
    case h:
    case m:
    case y:
        return {
            byteLength: 2,
            components: 1
        };
    case b:
    case x:
        return {
            byteLength: 2,
            components: 4
        };
    case _:
    case g:
    case v:
        return {
            byteLength: 4,
            components: 1
        };
    case C:
    case w:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw Error(`Unknown texture type ${e}.`)
}
typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{
    detail: {
        revision: `182`
    }
})),
typeof window < `u` && (window.__THREE__ ? U(`WARNING: Multiple instances of Three.js being imported.`) : window.__THREE__ = `182`);
function $s() {
    let e = null
      , t = !1
      , n = null
      , r = null;
    function i(t, a) {
        n(t, a),
        r = e.requestAnimationFrame(i)
    }
    return {
        start: function() {
            t !== !0 && n !== null && (r = e.requestAnimationFrame(i),
            t = !0)
        },
        stop: function() {
            e.cancelAnimationFrame(r),
            t = !1
        },
        setAnimationLoop: function(e) {
            n = e
        },
        setContext: function(t) {
            e = t
        }
    }
}
function ec(e) {
    let t = new WeakMap;
    function n(t, n) {
        let r = t.array
          , i = t.usage
          , a = r.byteLength
          , o = e.createBuffer();
        e.bindBuffer(n, o),
        e.bufferData(n, r, i),
        t.onUploadCallback();
        let s;
        if (r instanceof Float32Array)
            s = e.FLOAT;
        else if (typeof Float16Array < `u` && r instanceof Float16Array)
            s = e.HALF_FLOAT;
        else if (r instanceof Uint16Array)
            s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
        else if (r instanceof Int16Array)
            s = e.SHORT;
        else if (r instanceof Uint32Array)
            s = e.UNSIGNED_INT;
        else if (r instanceof Int32Array)
            s = e.INT;
        else if (r instanceof Int8Array)
            s = e.BYTE;
        else if (r instanceof Uint8Array)
            s = e.UNSIGNED_BYTE;
        else if (r instanceof Uint8ClampedArray)
            s = e.UNSIGNED_BYTE;
        else
            throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + r);
        return {
            buffer: o,
            type: s,
            bytesPerElement: r.BYTES_PER_ELEMENT,
            version: t.version,
            size: a
        }
    }
    function r(t, n, r) {
        let i = n.array
          , a = n.updateRanges;
        if (e.bindBuffer(r, t),
        a.length === 0)
            e.bufferSubData(r, 0, i);
        else {
            a.sort( (e, t) => e.start - t.start);
            let t = 0;
            for (let e = 1; e < a.length; e++) {
                let n = a[t]
                  , r = a[e];
                r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t,
                a[t] = r)
            }
            a.length = t + 1;
            for (let t = 0, n = a.length; t < n; t++) {
                let n = a[t];
                e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count)
            }
            n.clearUpdateRanges()
        }
        n.onUploadCallback()
    }
    function i(e) {
        return e.isInterleavedBufferAttribute && (e = e.data),
        t.get(e)
    }
    function a(n) {
        n.isInterleavedBufferAttribute && (n = n.data);
        let r = t.get(n);
        r && (e.deleteBuffer(r.buffer),
        t.delete(n))
    }
    function o(e, i) {
        if (e.isInterleavedBufferAttribute && (e = e.data),
        e.isGLBufferAttribute) {
            let n = t.get(e);
            (!n || n.version < e.version) && t.set(e, {
                buffer: e.buffer,
                type: e.type,
                bytesPerElement: e.elementSize,
                version: e.version
            });
            return
        }
        let a = t.get(e);
        if (a === void 0)
            t.set(e, n(e, i));
        else if (a.version < e.version) {
            if (a.size !== e.array.byteLength)
                throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);
            r(a.buffer, e, i),
            a.version = e.version
        }
    }
    return {
        get: i,
        remove: a,
        update: o
    }
}
var tc = {
    alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
    alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
    alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
    alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
    alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
    batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
    begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
    beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
    iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
    bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
    clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
    color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
    common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
    cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
    emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
    colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
    envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
    envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
    lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
    lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
    lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
    logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
    map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
    morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
    morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
    normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
    normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
    clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
    clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
    clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
    iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
    opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
    premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
    shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
    shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
    skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
    transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
    uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
    uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
    worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
    background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
    distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
    equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
    linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
    sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
}
  , $ = {
    common: {
        diffuse: {
            value: new Z(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new X
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new X
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new X
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new X
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        },
        dfgLUT: {
            value: null
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new X
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new X
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new X
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new X
        },
        normalScale: {
            value: new J(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new X
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new X
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new X
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new X
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Z(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Z(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new X
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new X
        }
    },
    sprite: {
        diffuse: {
            value: new Z(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new J(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new X
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new X
        },
        alphaTest: {
            value: 0
        }
    }
}
  , nc = {
    basic: {
        uniforms: Wr([$.common, $.specularmap, $.envmap, $.aomap, $.lightmap, $.fog]),
        vertexShader: tc.meshbasic_vert,
        fragmentShader: tc.meshbasic_frag
    },
    lambert: {
        uniforms: Wr([$.common, $.specularmap, $.envmap, $.aomap, $.lightmap, $.emissivemap, $.bumpmap, $.normalmap, $.displacementmap, $.fog, $.lights, {
            emissive: {
                value: new Z(0)
            }
        }]),
        vertexShader: tc.meshlambert_vert,
        fragmentShader: tc.meshlambert_frag
    },
    phong: {
        uniforms: Wr([$.common, $.specularmap, $.envmap, $.aomap, $.lightmap, $.emissivemap, $.bumpmap, $.normalmap, $.displacementmap, $.fog, $.lights, {
            emissive: {
                value: new Z(0)
            },
            specular: {
                value: new Z(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: tc.meshphong_vert,
        fragmentShader: tc.meshphong_frag
    },
    standard: {
        uniforms: Wr([$.common, $.envmap, $.aomap, $.lightmap, $.emissivemap, $.bumpmap, $.normalmap, $.displacementmap, $.roughnessmap, $.metalnessmap, $.fog, $.lights, {
            emissive: {
                value: new Z(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: tc.meshphysical_vert,
        fragmentShader: tc.meshphysical_frag
    },
    toon: {
        uniforms: Wr([$.common, $.aomap, $.lightmap, $.emissivemap, $.bumpmap, $.normalmap, $.displacementmap, $.gradientmap, $.fog, $.lights, {
            emissive: {
                value: new Z(0)
            }
        }]),
        vertexShader: tc.meshtoon_vert,
        fragmentShader: tc.meshtoon_frag
    },
    matcap: {
        uniforms: Wr([$.common, $.bumpmap, $.normalmap, $.displacementmap, $.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: tc.meshmatcap_vert,
        fragmentShader: tc.meshmatcap_frag
    },
    points: {
        uniforms: Wr([$.points, $.fog]),
        vertexShader: tc.points_vert,
        fragmentShader: tc.points_frag
    },
    dashed: {
        uniforms: Wr([$.common, $.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: tc.linedashed_vert,
        fragmentShader: tc.linedashed_frag
    },
    depth: {
        uniforms: Wr([$.common, $.displacementmap]),
        vertexShader: tc.depth_vert,
        fragmentShader: tc.depth_frag
    },
    normal: {
        uniforms: Wr([$.common, $.bumpmap, $.normalmap, $.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: tc.meshnormal_vert,
        fragmentShader: tc.meshnormal_frag
    },
    sprite: {
        uniforms: Wr([$.sprite, $.fog]),
        vertexShader: tc.sprite_vert,
        fragmentShader: tc.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new X
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: tc.background_vert,
        fragmentShader: tc.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new X
            }
        },
        vertexShader: tc.backgroundCube_vert,
        fragmentShader: tc.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: tc.cube_vert,
        fragmentShader: tc.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: tc.equirect_vert,
        fragmentShader: tc.equirect_frag
    },
    distance: {
        uniforms: Wr([$.common, $.displacementmap, {
            referencePosition: {
                value: new Y
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: tc.distance_vert,
        fragmentShader: tc.distance_frag
    },
    shadow: {
        uniforms: Wr([$.lights, $.fog, {
            color: {
                value: new Z(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: tc.shadow_vert,
        fragmentShader: tc.shadow_frag
    }
};
nc.physical = {
    uniforms: Wr([nc.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new X
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new X
        },
        clearcoatNormalScale: {
            value: new J(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new X
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new X
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new X
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new Z(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new X
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new X
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new X
        },
        transmissionSamplerSize: {
            value: new J
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new X
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new Z(0)
        },
        specularColor: {
            value: new Z(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new X
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new X
        },
        anisotropyVector: {
            value: new J
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new X
        }
    }]),
    vertexShader: tc.meshphysical_vert,
    fragmentShader: tc.meshphysical_frag
};
var rc = {
    r: 0,
    b: 0,
    g: 0
}
  , ic = new On
  , ac = new vn;
function oc(e, t, n, r, i, a, o) {
    let s = new Z(0), c = a === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
    function m(e) {
        let r = e.isScene === !0 ? e.background : null;
        return r && r.isTexture && (r = (e.backgroundBlurriness > 0 ? n : t).get(r)),
        r
    }
    function h(t) {
        let n = !1
          , i = m(t);
        i === null ? _(s, c) : i && i.isColor && (_(i, 1),
        n = !0);
        let a = e.xr.getEnvironmentBlendMode();
        a === `additive` ? r.buffers.color.setClear(0, 0, 0, 1, o) : a === `alpha-blend` && r.buffers.color.setClear(0, 0, 0, 0, o),
        (e.autoClear || n) && (r.buffers.depth.setTest(!0),
        r.buffers.depth.setMask(!0),
        r.buffers.color.setMask(!0),
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil))
    }
    function g(t, n) {
        let r = m(n);
        r && (r.isCubeTexture || r.mapping === 306) ? (u === void 0 && (u = new Q(new Hr(1,1,1),new Xr({
            name: `BackgroundCubeMaterial`,
            uniforms: Ur(nc.backgroundCube.uniforms),
            vertexShader: nc.backgroundCube.vertexShader,
            fragmentShader: nc.backgroundCube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        u.geometry.deleteAttribute(`normal`),
        u.geometry.deleteAttribute(`uv`),
        u.onBeforeRender = function(e, t, n) {
            this.matrixWorld.copyPosition(n.matrixWorld)
        }
        ,
        Object.defineProperty(u.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        i.update(u)),
        ic.copy(n.backgroundRotation),
        ic.x *= -1,
        ic.y *= -1,
        ic.z *= -1,
        r.isCubeTexture && r.isRenderTargetTexture === !1 && (ic.y *= -1,
        ic.z *= -1),
        u.material.uniforms.envMap.value = r,
        u.material.uniforms.flipEnvMap.value = r.isCubeTexture && r.isRenderTargetTexture === !1 ? -1 : 1,
        u.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness,
        u.material.uniforms.backgroundIntensity.value = n.backgroundIntensity,
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(ac.makeRotationFromEuler(ic)),
        u.material.toneMapped = Ot.getTransfer(r.colorSpace) !== Be,
        (d !== r || f !== r.version || p !== e.toneMapping) && (u.material.needsUpdate = !0,
        d = r,
        f = r.version,
        p = e.toneMapping),
        u.layers.enableAll(),
        t.unshift(u, u.geometry, u.material, 0, 0, null)) : r && r.isTexture && (l === void 0 && (l = new Q(new Ho(2,2),new Xr({
            name: `BackgroundMaterial`,
            uniforms: Ur(nc.background.uniforms),
            vertexShader: nc.background.vertexShader,
            fragmentShader: nc.background.fragmentShader,
            side: 0,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        l.geometry.deleteAttribute(`normal`),
        Object.defineProperty(l.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        i.update(l)),
        l.material.uniforms.t2D.value = r,
        l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity,
        l.material.toneMapped = Ot.getTransfer(r.colorSpace) !== Be,
        r.matrixAutoUpdate === !0 && r.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(r.matrix),
        (d !== r || f !== r.version || p !== e.toneMapping) && (l.material.needsUpdate = !0,
        d = r,
        f = r.version,
        p = e.toneMapping),
        l.layers.enableAll(),
        t.unshift(l, l.geometry, l.material, 0, 0, null))
    }
    function _(t, n) {
        t.getRGB(rc, Kr(e)),
        r.buffers.color.setClear(rc.r, rc.g, rc.b, n, o)
    }
    function v() {
        u !== void 0 && (u.geometry.dispose(),
        u.material.dispose(),
        u = void 0),
        l !== void 0 && (l.geometry.dispose(),
        l.material.dispose(),
        l = void 0)
    }
    return {
        getClearColor: function() {
            return s
        },
        setClearColor: function(e, t=1) {
            s.set(e),
            c = t,
            _(s, c)
        },
        getClearAlpha: function() {
            return c
        },
        setClearAlpha: function(e) {
            c = e,
            _(s, c)
        },
        render: h,
        addToRenderList: g,
        dispose: v
    }
}
function sc(e, t) {
    let n = e.getParameter(e.MAX_VERTEX_ATTRIBS)
      , r = {}
      , i = f(null)
      , a = i
      , o = !1;
    function s(n, r, i, s, c) {
        let u = !1
          , f = d(s, i, r);
        a !== f && (a = f,
        l(a.object)),
        u = p(n, s, i, c),
        u && m(n, s, i, c),
        c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER),
        (u || o) && (o = !1,
        b(n, r, i, s),
        c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer))
    }
    function c() {
        return e.createVertexArray()
    }
    function l(t) {
        return e.bindVertexArray(t)
    }
    function u(t) {
        return e.deleteVertexArray(t)
    }
    function d(e, t, n) {
        let i = n.wireframe === !0
          , a = r[e.id];
        a === void 0 && (a = {},
        r[e.id] = a);
        let o = a[t.id];
        o === void 0 && (o = {},
        a[t.id] = o);
        let s = o[i];
        return s === void 0 && (s = f(c()),
        o[i] = s),
        s
    }
    function f(e) {
        let t = []
          , r = []
          , i = [];
        for (let e = 0; e < n; e++)
            t[e] = 0,
            r[e] = 0,
            i[e] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: t,
            enabledAttributes: r,
            attributeDivisors: i,
            object: e,
            attributes: {},
            index: null
        }
    }
    function p(e, t, n, r) {
        let i = a.attributes
          , o = t.attributes
          , s = 0
          , c = n.getAttributes();
        for (let t in c)
            if (c[t].location >= 0) {
                let n = i[t]
                  , r = o[t];
                if (r === void 0 && (t === `instanceMatrix` && e.instanceMatrix && (r = e.instanceMatrix),
                t === `instanceColor` && e.instanceColor && (r = e.instanceColor)),
                n === void 0 || n.attribute !== r || r && n.data !== r.data)
                    return !0;
                s++
            }
        return a.attributesNum !== s || a.index !== r
    }
    function m(e, t, n, r) {
        let i = {}
          , o = t.attributes
          , s = 0
          , c = n.getAttributes();
        for (let t in c)
            if (c[t].location >= 0) {
                let n = o[t];
                n === void 0 && (t === `instanceMatrix` && e.instanceMatrix && (n = e.instanceMatrix),
                t === `instanceColor` && e.instanceColor && (n = e.instanceColor));
                let r = {};
                r.attribute = n,
                n && n.data && (r.data = n.data),
                i[t] = r,
                s++
            }
        a.attributes = i,
        a.attributesNum = s,
        a.index = r
    }
    function h() {
        let e = a.newAttributes;
        for (let t = 0, n = e.length; t < n; t++)
            e[t] = 0
    }
    function g(e) {
        _(e, 0)
    }
    function _(t, n) {
        let r = a.newAttributes
          , i = a.enabledAttributes
          , o = a.attributeDivisors;
        r[t] = 1,
        i[t] === 0 && (e.enableVertexAttribArray(t),
        i[t] = 1),
        o[t] !== n && (e.vertexAttribDivisor(t, n),
        o[t] = n)
    }
    function v() {
        let t = a.newAttributes
          , n = a.enabledAttributes;
        for (let r = 0, i = n.length; r < i; r++)
            n[r] !== t[r] && (e.disableVertexAttribArray(r),
            n[r] = 0)
    }
    function y(t, n, r, i, a, o, s) {
        s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o)
    }
    function b(n, r, i, a) {
        h();
        let o = a.attributes
          , s = i.getAttributes()
          , c = r.defaultAttributeValues;
        for (let r in s) {
            let i = s[r];
            if (i.location >= 0) {
                let s = o[r];
                if (s === void 0 && (r === `instanceMatrix` && n.instanceMatrix && (s = n.instanceMatrix),
                r === `instanceColor` && n.instanceColor && (s = n.instanceColor)),
                s !== void 0) {
                    let r = s.normalized
                      , o = s.itemSize
                      , c = t.get(s);
                    if (c === void 0)
                        continue;
                    let l = c.buffer
                      , u = c.type
                      , d = c.bytesPerElement
                      , f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
                    if (s.isInterleavedBufferAttribute) {
                        let t = s.data
                          , c = t.stride
                          , p = s.offset;
                        if (t.isInstancedInterleavedBuffer) {
                            for (let e = 0; e < i.locationSize; e++)
                                _(i.location + e, t.meshPerAttribute);
                            n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count)
                        } else
                            for (let e = 0; e < i.locationSize; e++)
                                g(i.location + e);
                        e.bindBuffer(e.ARRAY_BUFFER, l);
                        for (let e = 0; e < i.locationSize; e++)
                            y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f)
                    } else {
                        if (s.isInstancedBufferAttribute) {
                            for (let e = 0; e < i.locationSize; e++)
                                _(i.location + e, s.meshPerAttribute);
                            n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count)
                        } else
                            for (let e = 0; e < i.locationSize; e++)
                                g(i.location + e);
                        e.bindBuffer(e.ARRAY_BUFFER, l);
                        for (let e = 0; e < i.locationSize; e++)
                            y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f)
                    }
                } else if (c !== void 0) {
                    let t = c[r];
                    if (t !== void 0)
                        switch (t.length) {
                        case 2:
                            e.vertexAttrib2fv(i.location, t);
                            break;
                        case 3:
                            e.vertexAttrib3fv(i.location, t);
                            break;
                        case 4:
                            e.vertexAttrib4fv(i.location, t);
                            break;
                        default:
                            e.vertexAttrib1fv(i.location, t)
                        }
                }
            }
        }
        v()
    }
    function x() {
        w();
        for (let e in r) {
            let t = r[e];
            for (let e in t) {
                let n = t[e];
                for (let e in n)
                    u(n[e].object),
                    delete n[e];
                delete t[e]
            }
            delete r[e]
        }
    }
    function S(e) {
        if (r[e.id] === void 0)
            return;
        let t = r[e.id];
        for (let e in t) {
            let n = t[e];
            for (let e in n)
                u(n[e].object),
                delete n[e];
            delete t[e]
        }
        delete r[e.id]
    }
    function C(e) {
        for (let t in r) {
            let n = r[t];
            if (n[e.id] === void 0)
                continue;
            let i = n[e.id];
            for (let e in i)
                u(i[e].object),
                delete i[e];
            delete n[e.id]
        }
    }
    function w() {
        T(),
        o = !0,
        a !== i && (a = i,
        l(a.object))
    }
    function T() {
        i.geometry = null,
        i.program = null,
        i.wireframe = !1
    }
    return {
        setup: s,
        reset: w,
        resetDefaultState: T,
        dispose: x,
        releaseStatesOfGeometry: S,
        releaseStatesOfProgram: C,
        initAttributes: h,
        enableAttribute: g,
        disableUnusedAttributes: v
    }
}
function cc(e, t, n) {
    let r;
    function i(e) {
        r = e
    }
    function a(t, i) {
        e.drawArrays(r, t, i),
        n.update(i, r, 1)
    }
    function o(t, i, a) {
        a !== 0 && (e.drawArraysInstanced(r, t, i, a),
        n.update(i, r, a))
    }
    function s(e, i, a) {
        if (a === 0)
            return;
        t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r, e, 0, i, 0, a);
        let o = 0;
        for (let e = 0; e < a; e++)
            o += i[e];
        n.update(o, r, 1)
    }
    function c(e, i, a, s) {
        if (a === 0)
            return;
        let c = t.get(`WEBGL_multi_draw`);
        if (c === null)
            for (let t = 0; t < e.length; t++)
                o(e[t], i[t], s[t]);
        else {
            c.multiDrawArraysInstancedWEBGL(r, e, 0, i, 0, s, 0, a);
            let t = 0;
            for (let e = 0; e < a; e++)
                t += i[e] * s[e];
            n.update(t, r, 1)
        }
    }
    this.setMode = i,
    this.render = a,
    this.renderInstances = o,
    this.renderMultiDraw = s,
    this.renderMultiDrawInstances = c
}
function lc(e, t, n, r) {
    let i;
    function a() {
        if (i !== void 0)
            return i;
        if (t.has(`EXT_texture_filter_anisotropic`) === !0) {
            let n = t.get(`EXT_texture_filter_anisotropic`);
            i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            i = 0;
        return i
    }
    function o(t) {
        return !(t !== 1023 && r.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function s(n) {
        let i = n === 1016 && (t.has(`EXT_color_buffer_half_float`) || t.has(`EXT_color_buffer_float`));
        return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i)
    }
    function c(t) {
        if (t === `highp`) {
            if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)
                return `highp`;
            t = `mediump`
        }
        return t === `mediump` && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? `mediump` : `lowp`
    }
    let l = n.precision === void 0 ? `highp` : n.precision
      , u = c(l);
    u !== l && (U(`WebGLRenderer:`, l, `not supported, using`, u, `instead.`),
    l = u);
    let d = n.logarithmicDepthBuffer === !0
      , f = n.reversedDepthBuffer === !0 && t.has(`EXT_clip_control`)
      , p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
      , m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , h = e.getParameter(e.MAX_TEXTURE_SIZE)
      , g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
      , _ = e.getParameter(e.MAX_VERTEX_ATTRIBS)
      , v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
      , y = e.getParameter(e.MAX_VARYING_VECTORS)
      , b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
      , x = e.getParameter(e.MAX_SAMPLES)
      , S = e.getParameter(e.SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: a,
        getMaxPrecision: c,
        textureFormatReadable: o,
        textureTypeReadable: s,
        precision: l,
        logarithmicDepthBuffer: d,
        reversedDepthBuffer: f,
        maxTextures: p,
        maxVertexTextures: m,
        maxTextureSize: h,
        maxCubemapSize: g,
        maxAttributes: _,
        maxVertexUniforms: v,
        maxVaryings: y,
        maxFragmentUniforms: b,
        maxSamples: x,
        samples: S
    }
}
function uc(e) {
    let t = this
      , n = null
      , r = 0
      , i = !1
      , a = !1
      , o = new Wi
      , s = new X
      , c = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = c,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(e, t) {
        let n = e.length !== 0 || t || r !== 0 || i;
        return i = t,
        r = e.length,
        n
    }
    ,
    this.beginShadows = function() {
        a = !0,
        u(null)
    }
    ,
    this.endShadows = function() {
        a = !1
    }
    ,
    this.setGlobalState = function(e, t) {
        n = u(e, t, 0)
    }
    ,
    this.setState = function(t, o, s) {
        let d = t.clippingPlanes
          , f = t.clipIntersection
          , p = t.clipShadows
          , m = e.get(t);
        if (!i || d === null || d.length === 0 || a && !p)
            a ? u(null) : l();
        else {
            let e = a ? 0 : r
              , t = e * 4
              , i = m.clippingState || null;
            c.value = i,
            i = u(d, o, t, s);
            for (let e = 0; e !== t; ++e)
                i[e] = n[e];
            m.clippingState = i,
            this.numIntersection = f ? this.numPlanes : 0,
            this.numPlanes += e
        }
    }
    ;
    function l() {
        c.value !== n && (c.value = n,
        c.needsUpdate = r > 0),
        t.numPlanes = r,
        t.numIntersection = 0
    }
    function u(e, n, r, i) {
        let a = e === null ? 0 : e.length
          , l = null;
        if (a !== 0) {
            if (l = c.value,
            i !== !0 || l === null) {
                let t = r + a * 4
                  , i = n.matrixWorldInverse;
                s.getNormalMatrix(i),
                (l === null || l.length < t) && (l = new Float32Array(t));
                for (let t = 0, n = r; t !== a; ++t,
                n += 4)
                    o.copy(e[t]).applyMatrix4(i, s),
                    o.normal.toArray(l, n),
                    l[n + 3] = o.constant
            }
            c.value = l,
            c.needsUpdate = !0
        }
        return t.numPlanes = a,
        t.numIntersection = 0,
        l
    }
}
function dc(e) {
    let t = new WeakMap;
    function n(e, t) {
        return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302),
        e
    }
    function r(r) {
        if (r && r.isTexture) {
            let a = r.mapping;
            if (a === 303 || a === 304)
                if (t.has(r)) {
                    let e = t.get(r).texture;
                    return n(e, r.mapping)
                } else {
                    let a = r.image;
                    if (a && a.height > 0) {
                        let o = new oi(a.height);
                        return o.fromEquirectangularTexture(e, r),
                        t.set(r, o),
                        r.addEventListener(`dispose`, i),
                        n(o.texture, r.mapping)
                    } else
                        return null
                }
        }
        return r
    }
    function i(e) {
        let n = e.target;
        n.removeEventListener(`dispose`, i);
        let r = t.get(n);
        r !== void 0 && (t.delete(n),
        r.dispose())
    }
    function a() {
        t = new WeakMap
    }
    return {
        get: r,
        dispose: a
    }
}
var fc = 4
  , pc = [.125, .215, .35, .446, .526, .582]
  , mc = 20
  , hc = 256
  , gc = new xs
  , _c = new Z
  , vc = null
  , yc = 0
  , bc = 0
  , xc = !1
  , Sc = new Y
  , Cc = class {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._sizeLods = [],
        this._sigmas = [],
        this._lodMeshes = [],
        this._backgroundBox = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._blurMaterial = null,
        this._ggxMaterial = null
    }
    fromScene(e, t=0, n=.1, r=100, i={}) {
        let {size: a=256, position: o=Sc} = i;
        vc = this._renderer.getRenderTarget(),
        yc = this._renderer.getActiveCubeFace(),
        bc = this._renderer.getActiveMipmapLevel(),
        xc = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(a);
        let s = this._allocateTargets();
        return s.depthBuffer = !0,
        this._sceneToCubeUV(e, n, r, s, o),
        t > 0 && this._blur(s, 0, 0, t),
        this._applyPMREM(s),
        this._cleanup(s),
        s
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Ac(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = kc(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose(),
        this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose())
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = 2 ** this._lodMax
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._ggxMaterial !== null && this._ggxMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodMeshes.length; e++)
            this._lodMeshes[e].geometry.dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(vc, yc, bc),
        this._renderer.xr.enabled = xc,
        e.scissorTest = !1,
        Ec(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        vc = this._renderer.getRenderTarget(),
        yc = this._renderer.getActiveCubeFace(),
        bc = this._renderer.getActiveMipmapLevel(),
        xc = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        let n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        let e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: l,
            minFilter: l,
            generateMipmaps: !1,
            type: y,
            format: D,
            colorSpace: Re,
            depthBuffer: !1
        }
          , r = Tc(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = Tc(e, t, n);
            let {_lodMax: r} = this;
            ({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = wc(r)),
            this._blurMaterial = Oc(r, e, t),
            this._ggxMaterial = Dc(r, e, t)
        }
        return r
    }
    _compileMaterial(e) {
        let t = new Q(new Or,e);
        this._renderer.compile(t, gc)
    }
    _sceneToCubeUV(e, t, n, r, i) {
        let a = new ti(90,1,t,n)
          , o = [1, -1, 1, 1, 1, 1]
          , s = [1, 1, 1, -1, -1, -1]
          , c = this._renderer
          , l = c.autoClear
          , u = c.toneMapping;
        c.getClearColor(_c),
        c.toneMapping = 0,
        c.autoClear = !1,
        c.state.buffers.depth.getReversed() && (c.setRenderTarget(r),
        c.clearDepth(),
        c.setRenderTarget(null)),
        this._backgroundBox === null && (this._backgroundBox = new Q(new Hr,new pr({
            name: `PMREM.Background`,
            side: 1,
            depthWrite: !1,
            depthTest: !1
        })));
        let d = this._backgroundBox
          , f = d.material
          , p = !1
          , m = e.background;
        m ? m.isColor && (f.color.copy(m),
        e.background = null,
        p = !0) : (f.color.copy(_c),
        p = !0);
        for (let t = 0; t < 6; t++) {
            let n = t % 3;
            n === 0 ? (a.up.set(0, o[t], 0),
            a.position.set(i.x, i.y, i.z),
            a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]),
            a.position.set(i.x, i.y, i.z),
            a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0),
            a.position.set(i.x, i.y, i.z),
            a.lookAt(i.x, i.y, i.z + s[t]));
            let l = this._cubeSize;
            Ec(r, n * l, t > 2 ? l : 0, l, l),
            c.setRenderTarget(r),
            p && c.render(d, a),
            c.render(e, a)
        }
        c.toneMapping = u,
        c.autoClear = l,
        e.background = m
    }
    _textureToCubeUV(e, t) {
        let n = this._renderer
          , r = e.mapping === 301 || e.mapping === 302;
        r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ac()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = kc());
        let i = r ? this._cubemapMaterial : this._equirectMaterial
          , a = this._lodMeshes[0];
        a.material = i;
        let o = i.uniforms;
        o.envMap.value = e;
        let s = this._cubeSize;
        Ec(t, 0, 0, 3 * s, 2 * s),
        n.setRenderTarget(t),
        n.render(a, gc)
    }
    _applyPMREM(e) {
        let t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        let r = this._lodMeshes.length;
        for (let t = 1; t < r; t++)
            this._applyGGXFilter(e, t - 1, t);
        t.autoClear = n
    }
    _applyGGXFilter(e, t, n) {
        let r = this._renderer
          , i = this._pingPongRenderTarget
          , a = this._ggxMaterial
          , o = this._lodMeshes[n];
        o.material = a;
        let s = a.uniforms
          , c = n / (this._lodMeshes.length - 1)
          , l = t / (this._lodMeshes.length - 1)
          , u = Math.sqrt(c * c - l * l) * (0 + c * 1.25)
          , {_lodMax: d} = this
          , f = this._sizeLods[n]
          , p = 3 * f * (n > d - fc ? n - d + fc : 0)
          , m = 4 * (this._cubeSize - f);
        s.envMap.value = e.texture,
        s.roughness.value = u,
        s.mipInt.value = d - t,
        Ec(i, p, m, 3 * f, 2 * f),
        r.setRenderTarget(i),
        r.render(o, gc),
        s.envMap.value = i.texture,
        s.roughness.value = 0,
        s.mipInt.value = d - n,
        Ec(e, p, m, 3 * f, 2 * f),
        r.setRenderTarget(e),
        r.render(o, gc)
    }
    _blur(e, t, n, r, i) {
        let a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, r, `latitudinal`, i),
        this._halfBlur(a, e, n, n, r, `longitudinal`, i)
    }
    _halfBlur(e, t, n, r, i, a, o) {
        let s = this._renderer
          , c = this._blurMaterial;
        a !== `latitudinal` && a !== `longitudinal` && W(`blur direction must be either latitudinal or longitudinal!`);
        let l = this._lodMeshes[r];
        l.material = c;
        let u = c.uniforms
          , d = this._sizeLods[n] - 1
          , f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * mc - 1)
          , p = i / f
          , m = isFinite(i) ? 1 + Math.floor(3 * p) : mc;
        m > mc && U(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mc}`);
        let h = []
          , g = 0;
        for (let e = 0; e < mc; ++e) {
            let t = e / p
              , n = Math.exp(-t * t / 2);
            h.push(n),
            e === 0 ? g += n : e < m && (g += 2 * n)
        }
        for (let e = 0; e < h.length; e++)
            h[e] = h[e] / g;
        u.envMap.value = e.texture,
        u.samples.value = m,
        u.weights.value = h,
        u.latitudinal.value = a === `latitudinal`,
        o && (u.poleAxis.value = o);
        let {_lodMax: _} = this;
        u.dTheta.value = f,
        u.mipInt.value = _ - n;
        let v = this._sizeLods[r];
        Ec(t, 3 * v * (r > _ - fc ? r - _ + fc : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v),
        s.setRenderTarget(t),
        s.render(l, gc)
    }
}
;
function wc(e) {
    let t = []
      , n = []
      , r = []
      , i = e
      , a = e - fc + 1 + pc.length;
    for (let o = 0; o < a; o++) {
        let a = 2 ** i;
        t.push(a);
        let s = 1 / a;
        o > e - fc ? s = pc[o - e + fc - 1] : o === 0 && (s = 0),
        n.push(s);
        let c = 1 / (a - 2)
          , l = -c
          , u = 1 + c
          , d = [l, l, u, l, u, u, l, l, u, u, l, u]
          , f = new Float32Array(108)
          , p = new Float32Array(72)
          , m = new Float32Array(36);
        for (let e = 0; e < 6; e++) {
            let t = e % 3 * 2 / 3 - 1
              , n = e > 2 ? 0 : -1
              , r = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
            f.set(r, 18 * e),
            p.set(d, 12 * e);
            let i = [e, e, e, e, e, e];
            m.set(i, 6 * e)
        }
        let h = new Or;
        h.setAttribute(`position`, new _r(f,3)),
        h.setAttribute(`uv`, new _r(p,2)),
        h.setAttribute(`faceIndex`, new _r(m,1)),
        r.push(new Q(h,null)),
        i > fc && i--
    }
    return {
        lodMeshes: r,
        sizeLods: t,
        sigmas: n
    }
}
function Tc(e, t, n) {
    let r = new Vt(e,t,n);
    return r.texture.mapping = 306,
    r.texture.name = `PMREM.cubeUv`,
    r.scissorTest = !0,
    r
}
function Ec(e, t, n, r, i) {
    e.viewport.set(t, n, r, i),
    e.scissor.set(t, n, r, i)
}
function Dc(e, t, n) {
    return new Xr({
        name: `PMREMGGXConvolution`,
        defines: {
            GGX_SAMPLES: hc,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${e}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            roughness: {
                value: 0
            },
            mipInt: {
                value: 0
            }
        },
        vertexShader: jc(),
        fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function Oc(e, t, n) {
    let r = new Float32Array(mc)
      , i = new Y(0,1,0);
    return new Xr({
        name: `SphericalGaussianBlur`,
        defines: {
            n: mc,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / n,
            CUBEUV_MAX_MIP: `${e}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: r
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: i
            }
        },
        vertexShader: jc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function kc() {
    return new Xr({
        name: `EquirectangularToCubeUV`,
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: jc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function Ac() {
    return new Xr({
        name: `CubemapToCubeUV`,
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: jc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function jc() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Mc(e) {
    let t = new WeakMap
      , n = null;
    function r(r) {
        if (r && r.isTexture) {
            let o = r.mapping
              , s = o === 303 || o === 304
              , c = o === 301 || o === 302;
            if (s || c) {
                let o = t.get(r)
                  , l = o === void 0 ? 0 : o.texture.pmremVersion;
                if (r.isRenderTargetTexture && r.pmremVersion !== l)
                    return n === null && (n = new Cc(e)),
                    o = s ? n.fromEquirectangular(r, o) : n.fromCubemap(r, o),
                    o.texture.pmremVersion = r.pmremVersion,
                    t.set(r, o),
                    o.texture;
                if (o !== void 0)
                    return o.texture;
                {
                    let l = r.image;
                    return s && l && l.height > 0 || c && l && i(l) ? (n === null && (n = new Cc(e)),
                    o = s ? n.fromEquirectangular(r) : n.fromCubemap(r),
                    o.texture.pmremVersion = r.pmremVersion,
                    t.set(r, o),
                    r.addEventListener(`dispose`, a),
                    o.texture) : null
                }
            }
        }
        return r
    }
    function i(e) {
        let t = 0;
        for (let n = 0; n < 6; n++)
            e[n] !== void 0 && t++;
        return t === 6
    }
    function a(e) {
        let n = e.target;
        n.removeEventListener(`dispose`, a);
        let r = t.get(n);
        r !== void 0 && (t.delete(n),
        r.dispose())
    }
    function o() {
        t = new WeakMap,
        n !== null && (n.dispose(),
        n = null)
    }
    return {
        get: r,
        dispose: o
    }
}
function Nc(e) {
    let t = {};
    function n(n) {
        if (t[n] !== void 0)
            return t[n];
        let r = e.getExtension(n);
        return t[n] = r,
        r
    }
    return {
        has: function(e) {
            return n(e) !== null
        },
        init: function() {
            n(`EXT_color_buffer_float`),
            n(`WEBGL_clip_cull_distance`),
            n(`OES_texture_float_linear`),
            n(`EXT_color_buffer_half_float`),
            n(`WEBGL_multisampled_render_to_texture`),
            n(`WEBGL_render_shared_exponent`)
        },
        get: function(e) {
            let t = n(e);
            return t === null && Je(`WebGLRenderer: ` + e + ` extension not supported.`),
            t
        }
    }
}
function Pc(e, t, n, r) {
    let i = {}
      , a = new WeakMap;
    function o(e) {
        let s = e.target;
        s.index !== null && t.remove(s.index);
        for (let e in s.attributes)
            t.remove(s.attributes[e]);
        s.removeEventListener(`dispose`, o),
        delete i[s.id];
        let c = a.get(s);
        c && (t.remove(c),
        a.delete(s)),
        r.releaseStatesOfGeometry(s),
        s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount,
        n.memory.geometries--
    }
    function s(e, t) {
        return i[t.id] === !0 ? t : (t.addEventListener(`dispose`, o),
        i[t.id] = !0,
        n.memory.geometries++,
        t)
    }
    function c(n) {
        let r = n.attributes;
        for (let n in r)
            t.update(r[n], e.ARRAY_BUFFER)
    }
    function l(e) {
        let n = []
          , r = e.index
          , i = e.attributes.position
          , o = 0;
        if (r !== null) {
            let e = r.array;
            o = r.version;
            for (let t = 0, r = e.length; t < r; t += 3) {
                let r = e[t + 0]
                  , i = e[t + 1]
                  , a = e[t + 2];
                n.push(r, i, i, a, a, r)
            }
        } else if (i !== void 0) {
            let e = i.array;
            o = i.version;
            for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
                let e = t + 0
                  , r = t + 1
                  , i = t + 2;
                n.push(e, r, r, i, i, e)
            }
        } else
            return;
        let s = new (We(n) ? yr : vr)(n,1);
        s.version = o;
        let c = a.get(e);
        c && t.remove(c),
        a.set(e, s)
    }
    function u(e) {
        let t = a.get(e);
        if (t) {
            let n = e.index;
            n !== null && t.version < n.version && l(e)
        } else
            l(e);
        return a.get(e)
    }
    return {
        get: s,
        update: c,
        getWireframeAttribute: u
    }
}
function Fc(e, t, n) {
    let r;
    function i(e) {
        r = e
    }
    let a, o;
    function s(e) {
        a = e.type,
        o = e.bytesPerElement
    }
    function c(t, i) {
        e.drawElements(r, i, a, t * o),
        n.update(i, r, 1)
    }
    function l(t, i, s) {
        s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s),
        n.update(i, r, s))
    }
    function u(e, i, o) {
        if (o === 0)
            return;
        t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
        let s = 0;
        for (let e = 0; e < o; e++)
            s += i[e];
        n.update(s, r, 1)
    }
    function d(e, i, s, c) {
        if (s === 0)
            return;
        let u = t.get(`WEBGL_multi_draw`);
        if (u === null)
            for (let t = 0; t < e.length; t++)
                l(e[t] / o, i[t], c[t]);
        else {
            u.multiDrawElementsInstancedWEBGL(r, i, 0, a, e, 0, c, 0, s);
            let t = 0;
            for (let e = 0; e < s; e++)
                t += i[e] * c[e];
            n.update(t, r, 1)
        }
    }
    this.setMode = i,
    this.setIndex = s,
    this.render = c,
    this.renderInstances = l,
    this.renderMultiDraw = u,
    this.renderMultiDrawInstances = d
}
function Ic(e) {
    let t = {
        geometries: 0,
        textures: 0
    }
      , n = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function r(t, r, i) {
        switch (n.calls++,
        r) {
        case e.TRIANGLES:
            n.triangles += t / 3 * i;
            break;
        case e.LINES:
            n.lines += t / 2 * i;
            break;
        case e.LINE_STRIP:
            n.lines += i * (t - 1);
            break;
        case e.LINE_LOOP:
            n.lines += i * t;
            break;
        case e.POINTS:
            n.points += i * t;
            break;
        default:
            W(`WebGLInfo: Unknown draw mode:`, r);
            break
        }
    }
    function i() {
        n.calls = 0,
        n.triangles = 0,
        n.points = 0,
        n.lines = 0
    }
    return {
        memory: t,
        render: n,
        programs: null,
        autoReset: !0,
        reset: i,
        update: r
    }
}
function Lc(e, t, n) {
    let r = new WeakMap
      , i = new zt;
    function a(a, o, s) {
        let c = a.morphTargetInfluences
          , l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , u = l === void 0 ? 0 : l.length
          , d = r.get(o);
        if (d === void 0 || d.count !== u) {
            d !== void 0 && d.texture.dispose();
            let e = o.morphAttributes.position !== void 0
              , n = o.morphAttributes.normal !== void 0
              , a = o.morphAttributes.color !== void 0
              , s = o.morphAttributes.position || []
              , c = o.morphAttributes.normal || []
              , l = o.morphAttributes.color || []
              , f = 0;
            e === !0 && (f = 1),
            n === !0 && (f = 2),
            a === !0 && (f = 3);
            let p = o.attributes.position.count * f
              , m = 1;
            p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize),
            p = t.maxTextureSize);
            let h = new Float32Array(p * m * 4 * u)
              , g = new Ht(h,p,m,u);
            g.type = v,
            g.needsUpdate = !0;
            let _ = f * 4;
            for (let t = 0; t < u; t++) {
                let r = s[t]
                  , o = c[t]
                  , u = l[t]
                  , d = p * m * 4 * t;
                for (let t = 0; t < r.count; t++) {
                    let s = t * _;
                    e === !0 && (i.fromBufferAttribute(r, t),
                    h[d + s + 0] = i.x,
                    h[d + s + 1] = i.y,
                    h[d + s + 2] = i.z,
                    h[d + s + 3] = 0),
                    n === !0 && (i.fromBufferAttribute(o, t),
                    h[d + s + 4] = i.x,
                    h[d + s + 5] = i.y,
                    h[d + s + 6] = i.z,
                    h[d + s + 7] = 0),
                    a === !0 && (i.fromBufferAttribute(u, t),
                    h[d + s + 8] = i.x,
                    h[d + s + 9] = i.y,
                    h[d + s + 10] = i.z,
                    h[d + s + 11] = u.itemSize === 4 ? i.w : 1)
                }
            }
            d = {
                count: u,
                texture: g,
                size: new J(p,m)
            },
            r.set(o, d);
            function y() {
                g.dispose(),
                r.delete(o),
                o.removeEventListener(`dispose`, y)
            }
            o.addEventListener(`dispose`, y)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            s.getUniforms().setValue(e, `morphTexture`, a.morphTexture, n);
        else {
            let t = 0;
            for (let e = 0; e < c.length; e++)
                t += c[e];
            let n = o.morphTargetsRelative ? 1 : 1 - t;
            s.getUniforms().setValue(e, `morphTargetBaseInfluence`, n),
            s.getUniforms().setValue(e, `morphTargetInfluences`, c)
        }
        s.getUniforms().setValue(e, `morphTargetsTexture`, d.texture, n),
        s.getUniforms().setValue(e, `morphTargetsTextureSize`, d.size)
    }
    return {
        update: a
    }
}
function Rc(e, t, n, r) {
    let i = new WeakMap;
    function a(a) {
        let o = r.render.frame
          , c = a.geometry
          , l = t.get(a, c);
        if (i.get(l) !== o && (t.update(l),
        i.set(l, o)),
        a.isInstancedMesh && (a.hasEventListener(`dispose`, s) === !1 && a.addEventListener(`dispose`, s),
        i.get(a) !== o && (n.update(a.instanceMatrix, e.ARRAY_BUFFER),
        a.instanceColor !== null && n.update(a.instanceColor, e.ARRAY_BUFFER),
        i.set(a, o))),
        a.isSkinnedMesh) {
            let e = a.skeleton;
            i.get(e) !== o && (e.update(),
            i.set(e, o))
        }
        return l
    }
    function o() {
        i = new WeakMap
    }
    function s(e) {
        let t = e.target;
        t.removeEventListener(`dispose`, s),
        n.remove(t.instanceMatrix),
        t.instanceColor !== null && n.remove(t.instanceColor)
    }
    return {
        update: a,
        dispose: o
    }
}
var zc = {
    1: `LINEAR_TONE_MAPPING`,
    2: `REINHARD_TONE_MAPPING`,
    3: `CINEON_TONE_MAPPING`,
    4: `ACES_FILMIC_TONE_MAPPING`,
    6: `AGX_TONE_MAPPING`,
    7: `NEUTRAL_TONE_MAPPING`,
    5: `CUSTOM_TONE_MAPPING`
};
function Bc(e, t, n, r, i) {
    let a = new Vt(t,n,{
        type: e,
        depthBuffer: r,
        stencilBuffer: i
    })
      , o = new Vt(t,n,{
        type: y,
        depthBuffer: !1,
        stencilBuffer: !1
    })
      , s = new Or;
    s.setAttribute(`position`, new br([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
    s.setAttribute(`uv`, new br([0, 2, 0, 0, 2, 0],2));
    let c = new Go({
        uniforms: {
            tDiffuse: {
                value: null
            }
        },
        vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
        depthTest: !1,
        depthWrite: !1
    }), l = new Q(s,c), u = new xs(-1,1,1,-1,0,1), d = null, f = null, p = !1, m, h = null, g = [], _ = !1;
    this.setSize = function(e, t) {
        a.setSize(e, t),
        o.setSize(e, t);
        for (let n = 0; n < g.length; n++) {
            let r = g[n];
            r.setSize && r.setSize(e, t)
        }
    }
    ,
    this.setEffects = function(e) {
        g = e,
        _ = g.length > 0 && g[0].isRenderPass === !0;
        let t = a.width
          , n = a.height;
        for (let e = 0; e < g.length; e++) {
            let r = g[e];
            r.setSize && r.setSize(t, n)
        }
    }
    ,
    this.begin = function(e, t) {
        if (p || e.toneMapping === 0 && g.length === 0)
            return !1;
        if (h = t,
        t !== null) {
            let e = t.width
              , n = t.height;
            (a.width !== e || a.height !== n) && this.setSize(e, n)
        }
        return _ === !1 && e.setRenderTarget(a),
        m = e.toneMapping,
        e.toneMapping = 0,
        !0
    }
    ,
    this.hasRenderPass = function() {
        return _
    }
    ,
    this.end = function(e, t) {
        e.toneMapping = m,
        p = !0;
        let n = a
          , r = o;
        for (let i = 0; i < g.length; i++) {
            let a = g[i];
            if (a.enabled !== !1 && (a.render(e, r, n, t),
            a.needsSwap !== !1)) {
                let e = n;
                n = r,
                r = e
            }
        }
        if (d !== e.outputColorSpace || f !== e.toneMapping) {
            d = e.outputColorSpace,
            f = e.toneMapping,
            c.defines = {},
            Ot.getTransfer(d) === `srgb` && (c.defines.SRGB_TRANSFER = ``);
            let t = zc[f];
            t && (c.defines[t] = ``),
            c.needsUpdate = !0
        }
        c.uniforms.tDiffuse.value = n.texture,
        e.setRenderTarget(h),
        e.render(l, u),
        h = null,
        p = !1
    }
    ,
    this.isCompositing = function() {
        return p
    }
    ,
    this.dispose = function() {
        a.dispose(),
        o.dispose(),
        s.dispose(),
        c.dispose()
    }
}
var Vc = new Rt
  , Hc = new ga(1,1)
  , Uc = new Ht
  , Wc = new Ut
  , Gc = new ai
  , Kc = []
  , qc = []
  , Jc = new Float32Array(16)
  , Yc = new Float32Array(9)
  , Xc = new Float32Array(4);
function Zc(e, t, n) {
    let r = e[0];
    if (r <= 0 || r > 0)
        return e;
    let i = t * n
      , a = Kc[i];
    if (a === void 0 && (a = new Float32Array(i),
    Kc[i] = a),
    t !== 0) {
        r.toArray(a, 0);
        for (let r = 1, i = 0; r !== t; ++r)
            i += n,
            e[r].toArray(a, i)
    }
    return a
}
function Qc(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0, r = e.length; n < r; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function $c(e, t) {
    for (let n = 0, r = t.length; n < r; n++)
        e[n] = t[n]
}
function el(e, t) {
    let n = qc[t];
    n === void 0 && (n = new Int32Array(t),
    qc[t] = n);
    for (let r = 0; r !== t; ++r)
        n[r] = e.allocateTextureUnit();
    return n
}
function tl(e, t) {
    let n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t),
    n[0] = t)
}
function nl(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y),
        n[0] = t.x,
        n[1] = t.y);
    else {
        if (Qc(n, t))
            return;
        e.uniform2fv(this.addr, t),
        $c(n, t)
    }
}
function rl(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z);
    else if (t.r !== void 0)
        (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b),
        n[0] = t.r,
        n[1] = t.g,
        n[2] = t.b);
    else {
        if (Qc(n, t))
            return;
        e.uniform3fv(this.addr, t),
        $c(n, t)
    }
}
function il(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z,
        n[3] = t.w);
    else {
        if (Qc(n, t))
            return;
        e.uniform4fv(this.addr, t),
        $c(n, t)
    }
}
function al(e, t) {
    let n = this.cache
      , r = t.elements;
    if (r === void 0) {
        if (Qc(n, t))
            return;
        e.uniformMatrix2fv(this.addr, !1, t),
        $c(n, t)
    } else {
        if (Qc(n, r))
            return;
        Xc.set(r),
        e.uniformMatrix2fv(this.addr, !1, Xc),
        $c(n, r)
    }
}
function ol(e, t) {
    let n = this.cache
      , r = t.elements;
    if (r === void 0) {
        if (Qc(n, t))
            return;
        e.uniformMatrix3fv(this.addr, !1, t),
        $c(n, t)
    } else {
        if (Qc(n, r))
            return;
        Yc.set(r),
        e.uniformMatrix3fv(this.addr, !1, Yc),
        $c(n, r)
    }
}
function sl(e, t) {
    let n = this.cache
      , r = t.elements;
    if (r === void 0) {
        if (Qc(n, t))
            return;
        e.uniformMatrix4fv(this.addr, !1, t),
        $c(n, t)
    } else {
        if (Qc(n, r))
            return;
        Jc.set(r),
        e.uniformMatrix4fv(this.addr, !1, Jc),
        $c(n, r)
    }
}
function cl(e, t) {
    let n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t),
    n[0] = t)
}
function ll(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y),
        n[0] = t.x,
        n[1] = t.y);
    else {
        if (Qc(n, t))
            return;
        e.uniform2iv(this.addr, t),
        $c(n, t)
    }
}
function ul(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z);
    else {
        if (Qc(n, t))
            return;
        e.uniform3iv(this.addr, t),
        $c(n, t)
    }
}
function dl(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z,
        n[3] = t.w);
    else {
        if (Qc(n, t))
            return;
        e.uniform4iv(this.addr, t),
        $c(n, t)
    }
}
function fl(e, t) {
    let n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t),
    n[0] = t)
}
function pl(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y),
        n[0] = t.x,
        n[1] = t.y);
    else {
        if (Qc(n, t))
            return;
        e.uniform2uiv(this.addr, t),
        $c(n, t)
    }
}
function ml(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z);
    else {
        if (Qc(n, t))
            return;
        e.uniform3uiv(this.addr, t),
        $c(n, t)
    }
}
function hl(e, t) {
    let n = this.cache;
    if (t.x !== void 0)
        (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z,
        n[3] = t.w);
    else {
        if (Qc(n, t))
            return;
        e.uniform4uiv(this.addr, t),
        $c(n, t)
    }
}
function gl(e, t, n) {
    let r = this.cache
      , i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i),
    r[0] = i);
    let a;
    this.type === e.SAMPLER_2D_SHADOW ? (Hc.compareFunction = n.isReversedDepthBuffer() ? 518 : 515,
    a = Hc) : a = Vc,
    n.setTexture2D(t || a, i)
}
function _l(e, t, n) {
    let r = this.cache
      , i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i),
    r[0] = i),
    n.setTexture3D(t || Wc, i)
}
function vl(e, t, n) {
    let r = this.cache
      , i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i),
    r[0] = i),
    n.setTextureCube(t || Gc, i)
}
function yl(e, t, n) {
    let r = this.cache
      , i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i),
    r[0] = i),
    n.setTexture2DArray(t || Uc, i)
}
function bl(e) {
    switch (e) {
    case 5126:
        return tl;
    case 35664:
        return nl;
    case 35665:
        return rl;
    case 35666:
        return il;
    case 35674:
        return al;
    case 35675:
        return ol;
    case 35676:
        return sl;
    case 5124:
    case 35670:
        return cl;
    case 35667:
    case 35671:
        return ll;
    case 35668:
    case 35672:
        return ul;
    case 35669:
    case 35673:
        return dl;
    case 5125:
        return fl;
    case 36294:
        return pl;
    case 36295:
        return ml;
    case 36296:
        return hl;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return gl;
    case 35679:
    case 36299:
    case 36307:
        return _l;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return vl;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return yl
    }
}
function xl(e, t) {
    e.uniform1fv(this.addr, t)
}
function Sl(e, t) {
    let n = Zc(t, this.size, 2);
    e.uniform2fv(this.addr, n)
}
function Cl(e, t) {
    let n = Zc(t, this.size, 3);
    e.uniform3fv(this.addr, n)
}
function wl(e, t) {
    let n = Zc(t, this.size, 4);
    e.uniform4fv(this.addr, n)
}
function Tl(e, t) {
    let n = Zc(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
}
function El(e, t) {
    let n = Zc(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
}
function Dl(e, t) {
    let n = Zc(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
}
function Ol(e, t) {
    e.uniform1iv(this.addr, t)
}
function kl(e, t) {
    e.uniform2iv(this.addr, t)
}
function Al(e, t) {
    e.uniform3iv(this.addr, t)
}
function jl(e, t) {
    e.uniform4iv(this.addr, t)
}
function Ml(e, t) {
    e.uniform1uiv(this.addr, t)
}
function Nl(e, t) {
    e.uniform2uiv(this.addr, t)
}
function Pl(e, t) {
    e.uniform3uiv(this.addr, t)
}
function Fl(e, t) {
    e.uniform4uiv(this.addr, t)
}
function Il(e, t, n) {
    let r = this.cache
      , i = t.length
      , a = el(n, i);
    Qc(r, a) || (e.uniform1iv(this.addr, a),
    $c(r, a));
    let o;
    o = this.type === e.SAMPLER_2D_SHADOW ? Hc : Vc;
    for (let e = 0; e !== i; ++e)
        n.setTexture2D(t[e] || o, a[e])
}
function Ll(e, t, n) {
    let r = this.cache
      , i = t.length
      , a = el(n, i);
    Qc(r, a) || (e.uniform1iv(this.addr, a),
    $c(r, a));
    for (let e = 0; e !== i; ++e)
        n.setTexture3D(t[e] || Wc, a[e])
}
function Rl(e, t, n) {
    let r = this.cache
      , i = t.length
      , a = el(n, i);
    Qc(r, a) || (e.uniform1iv(this.addr, a),
    $c(r, a));
    for (let e = 0; e !== i; ++e)
        n.setTextureCube(t[e] || Gc, a[e])
}
function zl(e, t, n) {
    let r = this.cache
      , i = t.length
      , a = el(n, i);
    Qc(r, a) || (e.uniform1iv(this.addr, a),
    $c(r, a));
    for (let e = 0; e !== i; ++e)
        n.setTexture2DArray(t[e] || Uc, a[e])
}
function Bl(e) {
    switch (e) {
    case 5126:
        return xl;
    case 35664:
        return Sl;
    case 35665:
        return Cl;
    case 35666:
        return wl;
    case 35674:
        return Tl;
    case 35675:
        return El;
    case 35676:
        return Dl;
    case 5124:
    case 35670:
        return Ol;
    case 35667:
    case 35671:
        return kl;
    case 35668:
    case 35672:
        return Al;
    case 35669:
    case 35673:
        return jl;
    case 5125:
        return Ml;
    case 36294:
        return Nl;
    case 36295:
        return Pl;
    case 36296:
        return Fl;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Il;
    case 35679:
    case 36299:
    case 36307:
        return Ll;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Rl;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return zl
    }
}
var Vl = class {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = bl(t.type)
    }
}
  , Hl = class {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = Bl(t.type)
    }
}
  , Ul = class {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        let r = this.seq;
        for (let i = 0, a = r.length; i !== a; ++i) {
            let a = r[i];
            a.setValue(e, t[a.id], n)
        }
    }
}
  , Wl = /(\w+)(\])?(\[|\.)?/g;
function Gl(e, t) {
    e.seq.push(t),
    e.map[t.id] = t
}
function Kl(e, t, n) {
    let r = e.name
      , i = r.length;
    for (Wl.lastIndex = 0; ; ) {
        let a = Wl.exec(r)
          , o = Wl.lastIndex
          , s = a[1]
          , c = a[2] === `]`
          , l = a[3];
        if (c && (s |= 0),
        l === void 0 || l === `[` && o + 2 === i) {
            Gl(n, l === void 0 ? new Vl(s,e,t) : new Hl(s,e,t));
            break
        } else {
            let e = n.map[s];
            e === void 0 && (e = new Ul(s),
            Gl(n, e)),
            n = e
        }
    }
}
var ql = class {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let r = 0; r < n; ++r) {
            let n = e.getActiveUniform(t, r);
            Kl(n, e.getUniformLocation(t, n.name), this)
        }
        let r = []
          , i = [];
        for (let t of this.seq)
            t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
        r.length > 0 && (this.seq = r.concat(i))
    }
    setValue(e, t, n, r) {
        let i = this.map[t];
        i !== void 0 && i.setValue(e, n, r)
    }
    setOptional(e, t, n) {
        let r = t[n];
        r !== void 0 && this.setValue(e, n, r)
    }
    static upload(e, t, n, r) {
        for (let i = 0, a = t.length; i !== a; ++i) {
            let a = t[i]
              , o = n[a.id];
            o.needsUpdate !== !1 && a.setValue(e, o.value, r)
        }
    }
    static seqWithValue(e, t) {
        let n = [];
        for (let r = 0, i = e.length; r !== i; ++r) {
            let i = e[r];
            i.id in t && n.push(i)
        }
        return n
    }
}
;
function Jl(e, t, n) {
    let r = e.createShader(t);
    return e.shaderSource(r, n),
    e.compileShader(r),
    r
}
var Yl = 37297
  , Xl = 0;
function Zl(e, t) {
    let n = e.split(`
`)
      , r = []
      , i = Math.max(t - 6, 0)
      , a = Math.min(t + 6, n.length);
    for (let e = i; e < a; e++) {
        let i = e + 1;
        r.push(`${i === t ? `>` : ` `} ${i}: ${n[e]}`)
    }
    return r.join(`
`)
}
var Ql = new X;
function $l(e) {
    Ot._getMatrix(Ql, Ot.workingColorSpace, e);
    let t = `mat3( ${Ql.elements.map(e => e.toFixed(4))} )`;
    switch (Ot.getTransfer(e)) {
    case ze:
        return [t, `LinearTransferOETF`];
    case Be:
        return [t, `sRGBTransferOETF`];
    default:
        return U(`WebGLProgram: Unsupported color space: `, e),
        [t, `LinearTransferOETF`]
    }
}
function eu(e, t, n) {
    let r = e.getShaderParameter(t, e.COMPILE_STATUS)
      , i = (e.getShaderInfoLog(t) || ``).trim();
    if (r && i === ``)
        return ``;
    let a = /ERROR: 0:(\d+)/.exec(i);
    if (a) {
        let r = parseInt(a[1]);
        return n.toUpperCase() + `

` + i + `

` + Zl(e.getShaderSource(t), r)
    } else
        return i
}
function tu(e, t) {
    let n = $l(t);
    return [`vec4 ${e}( vec4 value ) {`, `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`, `}`].join(`
`)
}
var nu = {
    1: `Linear`,
    2: `Reinhard`,
    3: `Cineon`,
    4: `ACESFilmic`,
    6: `AgX`,
    7: `Neutral`,
    5: `Custom`
};
function ru(e, t) {
    let n = nu[t];
    return n === void 0 ? (U(`WebGLProgram: Unsupported toneMapping:`, t),
    `vec3 ` + e + `( vec3 color ) { return LinearToneMapping( color ); }`) : `vec3 ` + e + `( vec3 color ) { return ` + n + `ToneMapping( color ); }`
}
var iu = new Y;
function au() {
    return Ot.getLuminanceCoefficients(iu),
    [`float luminance( const in vec3 rgb ) {`, `	const vec3 weights = vec3( ${iu.x.toFixed(4)}, ${iu.y.toFixed(4)}, ${iu.z.toFixed(4)} );`, `	return dot( weights, rgb );`, `}`].join(`
`)
}
function ou(e) {
    return [e.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``, e.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``].filter(lu).join(`
`)
}
function su(e) {
    let t = [];
    for (let n in e) {
        let r = e[n];
        r !== !1 && t.push(`#define ` + n + ` ` + r)
    }
    return t.join(`
`)
}
function cu(e, t) {
    let n = {}
      , r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < r; i++) {
        let r = e.getActiveAttrib(t, i)
          , a = r.name
          , o = 1;
        r.type === e.FLOAT_MAT2 && (o = 2),
        r.type === e.FLOAT_MAT3 && (o = 3),
        r.type === e.FLOAT_MAT4 && (o = 4),
        n[a] = {
            type: r.type,
            location: e.getAttribLocation(t, a),
            locationSize: o
        }
    }
    return n
}
function lu(e) {
    return e !== ``
}
function uu(e, t) {
    let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function du(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
var fu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function pu(e) {
    return e.replace(fu, hu)
}
var mu = new Map;
function hu(e, t) {
    let n = tc[t];
    if (n === void 0) {
        let e = mu.get(t);
        if (e !== void 0)
            n = tc[e],
            U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`, t, e);
        else
            throw Error(`Can not resolve #include <` + t + `>`)
    }
    return pu(n)
}
var gu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _u(e) {
    return e.replace(gu, vu)
}
function vu(e, t, n, r) {
    let i = ``;
    for (let e = parseInt(t); e < parseInt(n); e++)
        i += r.replace(/\[\s*i\s*\]/g, `[ ` + e + ` ]`).replace(/UNROLLED_LOOP_INDEX/g, e);
    return i
}
function yu(e) {
    let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
    return e.precision === `highp` ? t += `
#define HIGH_PRECISION` : e.precision === `mediump` ? t += `
#define MEDIUM_PRECISION` : e.precision === `lowp` && (t += `
#define LOW_PRECISION`),
    t
}
var bu = {
    1: `SHADOWMAP_TYPE_PCF`,
    3: `SHADOWMAP_TYPE_VSM`
};
function xu(e) {
    return bu[e.shadowMapType] || `SHADOWMAP_TYPE_BASIC`
}
var Su = {
    301: `ENVMAP_TYPE_CUBE`,
    302: `ENVMAP_TYPE_CUBE`,
    306: `ENVMAP_TYPE_CUBE_UV`
};
function Cu(e) {
    return e.envMap === !1 ? `ENVMAP_TYPE_CUBE` : Su[e.envMapMode] || `ENVMAP_TYPE_CUBE`
}
var wu = {
    302: `ENVMAP_MODE_REFRACTION`
};
function Tu(e) {
    return e.envMap === !1 ? `ENVMAP_MODE_REFLECTION` : wu[e.envMapMode] || `ENVMAP_MODE_REFLECTION`
}
var Eu = {
    0: `ENVMAP_BLENDING_MULTIPLY`,
    1: `ENVMAP_BLENDING_MIX`,
    2: `ENVMAP_BLENDING_ADD`
};
function Du(e) {
    return e.envMap === !1 ? `ENVMAP_BLENDING_NONE` : Eu[e.combine] || `ENVMAP_BLENDING_NONE`
}
function Ou(e) {
    let t = e.envMapCubeUVHeight;
    if (t === null)
        return null;
    let n = Math.log2(t) - 2
      , r = 1 / t;
    return {
        texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
        texelHeight: r,
        maxMip: n
    }
}
function ku(e, t, n, r) {
    let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = xu(n), l = Cu(n), u = Tu(n), d = Du(n), f = Ou(n), p = ou(n), m = su(a), h = i.createProgram(), g, _, v = n.glslVersion ? `#version ` + n.glslVersion + `
` : ``;
    n.isRawShaderMaterial ? (g = [`#define SHADER_TYPE ` + n.shaderType, `#define SHADER_NAME ` + n.shaderName, m].filter(lu).join(`
`),
    g.length > 0 && (g += `
`),
    _ = [`#define SHADER_TYPE ` + n.shaderType, `#define SHADER_NAME ` + n.shaderName, m].filter(lu).join(`
`),
    _.length > 0 && (_ += `
`)) : (g = [yu(n), `#define SHADER_TYPE ` + n.shaderType, `#define SHADER_NAME ` + n.shaderName, m, n.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``, n.batching ? `#define USE_BATCHING` : ``, n.batchingColor ? `#define USE_BATCHING_COLOR` : ``, n.instancing ? `#define USE_INSTANCING` : ``, n.instancingColor ? `#define USE_INSTANCING_COLOR` : ``, n.instancingMorph ? `#define USE_INSTANCING_MORPH` : ``, n.useFog && n.fog ? `#define USE_FOG` : ``, n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``, n.map ? `#define USE_MAP` : ``, n.envMap ? `#define USE_ENVMAP` : ``, n.envMap ? `#define ` + u : ``, n.lightMap ? `#define USE_LIGHTMAP` : ``, n.aoMap ? `#define USE_AOMAP` : ``, n.bumpMap ? `#define USE_BUMPMAP` : ``, n.normalMap ? `#define USE_NORMALMAP` : ``, n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n.displacementMap ? `#define USE_DISPLACEMENTMAP` : ``, n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n.anisotropy ? `#define USE_ANISOTROPY` : ``, n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n.specularMap ? `#define USE_SPECULARMAP` : ``, n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n.metalnessMap ? `#define USE_METALNESSMAP` : ``, n.alphaMap ? `#define USE_ALPHAMAP` : ``, n.alphaHash ? `#define USE_ALPHAHASH` : ``, n.transmission ? `#define USE_TRANSMISSION` : ``, n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n.mapUv ? `#define MAP_UV ` + n.mapUv : ``, n.alphaMapUv ? `#define ALPHAMAP_UV ` + n.alphaMapUv : ``, n.lightMapUv ? `#define LIGHTMAP_UV ` + n.lightMapUv : ``, n.aoMapUv ? `#define AOMAP_UV ` + n.aoMapUv : ``, n.emissiveMapUv ? `#define EMISSIVEMAP_UV ` + n.emissiveMapUv : ``, n.bumpMapUv ? `#define BUMPMAP_UV ` + n.bumpMapUv : ``, n.normalMapUv ? `#define NORMALMAP_UV ` + n.normalMapUv : ``, n.displacementMapUv ? `#define DISPLACEMENTMAP_UV ` + n.displacementMapUv : ``, n.metalnessMapUv ? `#define METALNESSMAP_UV ` + n.metalnessMapUv : ``, n.roughnessMapUv ? `#define ROUGHNESSMAP_UV ` + n.roughnessMapUv : ``, n.anisotropyMapUv ? `#define ANISOTROPYMAP_UV ` + n.anisotropyMapUv : ``, n.clearcoatMapUv ? `#define CLEARCOATMAP_UV ` + n.clearcoatMapUv : ``, n.clearcoatNormalMapUv ? `#define CLEARCOAT_NORMALMAP_UV ` + n.clearcoatNormalMapUv : ``, n.clearcoatRoughnessMapUv ? `#define CLEARCOAT_ROUGHNESSMAP_UV ` + n.clearcoatRoughnessMapUv : ``, n.iridescenceMapUv ? `#define IRIDESCENCEMAP_UV ` + n.iridescenceMapUv : ``, n.iridescenceThicknessMapUv ? `#define IRIDESCENCE_THICKNESSMAP_UV ` + n.iridescenceThicknessMapUv : ``, n.sheenColorMapUv ? `#define SHEEN_COLORMAP_UV ` + n.sheenColorMapUv : ``, n.sheenRoughnessMapUv ? `#define SHEEN_ROUGHNESSMAP_UV ` + n.sheenRoughnessMapUv : ``, n.specularMapUv ? `#define SPECULARMAP_UV ` + n.specularMapUv : ``, n.specularColorMapUv ? `#define SPECULAR_COLORMAP_UV ` + n.specularColorMapUv : ``, n.specularIntensityMapUv ? `#define SPECULAR_INTENSITYMAP_UV ` + n.specularIntensityMapUv : ``, n.transmissionMapUv ? `#define TRANSMISSIONMAP_UV ` + n.transmissionMapUv : ``, n.thicknessMapUv ? `#define THICKNESSMAP_UV ` + n.thicknessMapUv : ``, n.vertexTangents && n.flatShading === !1 ? `#define USE_TANGENT` : ``, n.vertexColors ? `#define USE_COLOR` : ``, n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``, n.vertexUv1s ? `#define USE_UV1` : ``, n.vertexUv2s ? `#define USE_UV2` : ``, n.vertexUv3s ? `#define USE_UV3` : ``, n.pointsUvs ? `#define USE_POINTS_UV` : ``, n.flatShading ? `#define FLAT_SHADED` : ``, n.skinning ? `#define USE_SKINNING` : ``, n.morphTargets ? `#define USE_MORPHTARGETS` : ``, n.morphNormals && n.flatShading === !1 ? `#define USE_MORPHNORMALS` : ``, n.morphColors ? `#define USE_MORPHCOLORS` : ``, n.morphTargetsCount > 0 ? `#define MORPHTARGETS_TEXTURE_STRIDE ` + n.morphTextureStride : ``, n.morphTargetsCount > 0 ? `#define MORPHTARGETS_COUNT ` + n.morphTargetsCount : ``, n.doubleSided ? `#define DOUBLE_SIDED` : ``, n.flipSided ? `#define FLIP_SIDED` : ``, n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n.shadowMapEnabled ? `#define ` + c : ``, n.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``, n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``, n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 modelMatrix;`, `uniform mat4 modelViewMatrix;`, `uniform mat4 projectionMatrix;`, `uniform mat4 viewMatrix;`, `uniform mat3 normalMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, `#ifdef USE_INSTANCING`, `	attribute mat4 instanceMatrix;`, `#endif`, `#ifdef USE_INSTANCING_COLOR`, `	attribute vec3 instanceColor;`, `#endif`, `#ifdef USE_INSTANCING_MORPH`, `	uniform sampler2D morphTexture;`, `#endif`, `attribute vec3 position;`, `attribute vec3 normal;`, `attribute vec2 uv;`, `#ifdef USE_UV1`, `	attribute vec2 uv1;`, `#endif`, `#ifdef USE_UV2`, `	attribute vec2 uv2;`, `#endif`, `#ifdef USE_UV3`, `	attribute vec2 uv3;`, `#endif`, `#ifdef USE_TANGENT`, `	attribute vec4 tangent;`, `#endif`, `#if defined( USE_COLOR_ALPHA )`, `	attribute vec4 color;`, `#elif defined( USE_COLOR )`, `	attribute vec3 color;`, `#endif`, `#ifdef USE_SKINNING`, `	attribute vec4 skinIndex;`, `	attribute vec4 skinWeight;`, `#endif`, `
`].filter(lu).join(`
`),
    _ = [yu(n), `#define SHADER_TYPE ` + n.shaderType, `#define SHADER_NAME ` + n.shaderName, m, n.useFog && n.fog ? `#define USE_FOG` : ``, n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``, n.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``, n.map ? `#define USE_MAP` : ``, n.matcap ? `#define USE_MATCAP` : ``, n.envMap ? `#define USE_ENVMAP` : ``, n.envMap ? `#define ` + l : ``, n.envMap ? `#define ` + u : ``, n.envMap ? `#define ` + d : ``, f ? `#define CUBEUV_TEXEL_WIDTH ` + f.texelWidth : ``, f ? `#define CUBEUV_TEXEL_HEIGHT ` + f.texelHeight : ``, f ? `#define CUBEUV_MAX_MIP ` + f.maxMip + `.0` : ``, n.lightMap ? `#define USE_LIGHTMAP` : ``, n.aoMap ? `#define USE_AOMAP` : ``, n.bumpMap ? `#define USE_BUMPMAP` : ``, n.normalMap ? `#define USE_NORMALMAP` : ``, n.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n.anisotropy ? `#define USE_ANISOTROPY` : ``, n.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n.clearcoat ? `#define USE_CLEARCOAT` : ``, n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n.dispersion ? `#define USE_DISPERSION` : ``, n.iridescence ? `#define USE_IRIDESCENCE` : ``, n.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n.iridescenceThicknessMap ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n.specularMap ? `#define USE_SPECULARMAP` : ``, n.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n.metalnessMap ? `#define USE_METALNESSMAP` : ``, n.alphaMap ? `#define USE_ALPHAMAP` : ``, n.alphaTest ? `#define USE_ALPHATEST` : ``, n.alphaHash ? `#define USE_ALPHAHASH` : ``, n.sheen ? `#define USE_SHEEN` : ``, n.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n.transmission ? `#define USE_TRANSMISSION` : ``, n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n.vertexTangents && n.flatShading === !1 ? `#define USE_TANGENT` : ``, n.vertexColors || n.instancingColor || n.batchingColor ? `#define USE_COLOR` : ``, n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``, n.vertexUv1s ? `#define USE_UV1` : ``, n.vertexUv2s ? `#define USE_UV2` : ``, n.vertexUv3s ? `#define USE_UV3` : ``, n.pointsUvs ? `#define USE_POINTS_UV` : ``, n.gradientMap ? `#define USE_GRADIENTMAP` : ``, n.flatShading ? `#define FLAT_SHADED` : ``, n.doubleSided ? `#define DOUBLE_SIDED` : ``, n.flipSided ? `#define FLIP_SIDED` : ``, n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n.shadowMapEnabled ? `#define ` + c : ``, n.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``, n.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``, n.decodeVideoTextureEmissive ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE` : ``, n.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``, n.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 viewMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, n.toneMapping === 0 ? `` : `#define TONE_MAPPING`, n.toneMapping === 0 ? `` : tc.tonemapping_pars_fragment, n.toneMapping === 0 ? `` : ru(`toneMapping`, n.toneMapping), n.dithering ? `#define DITHERING` : ``, n.opaque ? `#define OPAQUE` : ``, tc.colorspace_pars_fragment, tu(`linearToOutputTexel`, n.outputColorSpace), au(), n.useDepthPacking ? `#define DEPTH_PACKING ` + n.depthPacking : ``, `
`].filter(lu).join(`
`)),
    o = pu(o),
    o = uu(o, n),
    o = du(o, n),
    s = pu(s),
    s = uu(s, n),
    s = du(s, n),
    o = _u(o),
    s = _u(s),
    n.isRawShaderMaterial !== !0 && (v = `#version 300 es
`,
    g = [p, `#define attribute in`, `#define varying out`, `#define texture2D texture`].join(`
`) + `
` + g,
    _ = [`#define varying in`, n.glslVersion === `300 es` ? `` : `layout(location = 0) out highp vec4 pc_fragColor;`, n.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`, `#define gl_FragDepthEXT gl_FragDepth`, `#define texture2D texture`, `#define textureCube texture`, `#define texture2DProj textureProj`, `#define texture2DLodEXT textureLod`, `#define texture2DProjLodEXT textureProjLod`, `#define textureCubeLodEXT textureLod`, `#define texture2DGradEXT textureGrad`, `#define texture2DProjGradEXT textureProjGrad`, `#define textureCubeGradEXT textureGrad`].join(`
`) + `
` + _);
    let y = v + g + o
      , b = v + _ + s
      , x = Jl(i, i.VERTEX_SHADER, y)
      , S = Jl(i, i.FRAGMENT_SHADER, b);
    i.attachShader(h, x),
    i.attachShader(h, S),
    n.index0AttributeName === void 0 ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, `position`) : i.bindAttribLocation(h, 0, n.index0AttributeName),
    i.linkProgram(h);
    function C(t) {
        if (e.debug.checkShaderErrors) {
            let n = i.getProgramInfoLog(h) || ``
              , r = i.getShaderInfoLog(x) || ``
              , a = i.getShaderInfoLog(S) || ``
              , o = n.trim()
              , s = r.trim()
              , c = a.trim()
              , l = !0
              , u = !0;
            if (i.getProgramParameter(h, i.LINK_STATUS) === !1)
                if (l = !1,
                typeof e.debug.onShaderError == `function`)
                    e.debug.onShaderError(i, h, x, S);
                else {
                    let e = eu(i, x, `vertex`)
                      , n = eu(i, S, `fragment`);
                    W(`THREE.WebGLProgram: Shader Error ` + i.getError() + ` - VALIDATE_STATUS ` + i.getProgramParameter(h, i.VALIDATE_STATUS) + `

Material Name: ` + t.name + `
Material Type: ` + t.type + `

Program Info Log: ` + o + `
` + e + `
` + n)
                }
            else
                o === `` ? (s === `` || c === ``) && (u = !1) : U(`WebGLProgram: Program Info Log:`, o);
            u && (t.diagnostics = {
                runnable: l,
                programLog: o,
                vertexShader: {
                    log: s,
                    prefix: g
                },
                fragmentShader: {
                    log: c,
                    prefix: _
                }
            })
        }
        i.deleteShader(x),
        i.deleteShader(S),
        w = new ql(i,h),
        T = cu(i, h)
    }
    let w;
    this.getUniforms = function() {
        return w === void 0 && C(this),
        w
    }
    ;
    let T;
    this.getAttributes = function() {
        return T === void 0 && C(this),
        T
    }
    ;
    let E = n.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return E === !1 && (E = i.getProgramParameter(h, Yl)),
        E
    }
    ,
    this.destroy = function() {
        r.releaseStatesOfProgram(this),
        i.deleteProgram(h),
        this.program = void 0
    }
    ,
    this.type = n.shaderType,
    this.name = n.shaderName,
    this.id = Xl++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = h,
    this.vertexShader = x,
    this.fragmentShader = S,
    this
}
var Au = 0
  , ju = class {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        let t = e.vertexShader
          , n = e.fragmentShader
          , r = this._getShaderStage(t)
          , i = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(e);
        return a.has(r) === !1 && (a.add(r),
        r.usedTimes++),
        a.has(i) === !1 && (a.add(i),
        i.usedTimes++),
        this
    }
    remove(e) {
        let t = this.materialCache.get(e);
        for (let e of t)
            e.usedTimes--,
            e.usedTimes === 0 && this.shaderCache.delete(e.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        let t = this.materialCache
          , n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        let t = this.shaderCache
          , n = t.get(e);
        return n === void 0 && (n = new Mu(e),
        t.set(e, n)),
        n
    }
}
  , Mu = class {
    constructor(e) {
        this.id = Au++,
        this.code = e,
        this.usedTimes = 0
    }
}
;
function Nu(e, t, n, r, i, a, o) {
    let s = new kn
      , c = new ju
      , l = new Set
      , u = []
      , d = new Map
      , f = i.logarithmicDepthBuffer
      , p = i.precision
      , m = {
        MeshDepthMaterial: `depth`,
        MeshDistanceMaterial: `distance`,
        MeshNormalMaterial: `normal`,
        MeshBasicMaterial: `basic`,
        MeshLambertMaterial: `lambert`,
        MeshPhongMaterial: `phong`,
        MeshToonMaterial: `toon`,
        MeshStandardMaterial: `physical`,
        MeshPhysicalMaterial: `physical`,
        MeshMatcapMaterial: `matcap`,
        LineBasicMaterial: `basic`,
        LineDashedMaterial: `dashed`,
        PointsMaterial: `points`,
        ShadowMaterial: `shadow`,
        SpriteMaterial: `sprite`
    };
    function h(e) {
        return l.add(e),
        e === 0 ? `uv` : `uv${e}`
    }
    function g(a, s, u, d, g) {
        let _ = d.fog
          , v = g.geometry
          , y = a.isMeshStandardMaterial ? d.environment : null
          , b = (a.isMeshStandardMaterial ? n : t).get(a.envMap || y)
          , x = b && b.mapping === 306 ? b.image.height : null
          , S = m[a.type];
        a.precision !== null && (p = i.getMaxPrecision(a.precision),
        p !== a.precision && U(`WebGLProgram.getParameters:`, a.precision, `not supported, using`, p, `instead.`));
        let C = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color
          , w = C === void 0 ? 0 : C.length
          , T = 0;
        v.morphAttributes.position !== void 0 && (T = 1),
        v.morphAttributes.normal !== void 0 && (T = 2),
        v.morphAttributes.color !== void 0 && (T = 3);
        let E, D, O, k;
        if (S) {
            let e = nc[S];
            E = e.vertexShader,
            D = e.fragmentShader
        } else
            E = a.vertexShader,
            D = a.fragmentShader,
            c.update(a),
            O = c.getVertexShaderID(a),
            k = c.getFragmentShaderID(a);
        let A = e.getRenderTarget()
          , j = e.state.buffers.depth.getReversed()
          , M = g.isInstancedMesh === !0
          , N = g.isBatchedMesh === !0
          , ee = !!a.map
          , P = !!a.matcap
          , te = !!b
          , ne = !!a.aoMap
          , re = !!a.lightMap
          , ie = !!a.bumpMap
          , F = !!a.normalMap
          , ae = !!a.displacementMap
          , oe = !!a.emissiveMap
          , se = !!a.metalnessMap
          , I = !!a.roughnessMap
          , ce = a.anisotropy > 0
          , le = a.clearcoat > 0
          , ue = a.dispersion > 0
          , de = a.iridescence > 0
          , fe = a.sheen > 0
          , pe = a.transmission > 0
          , me = ce && !!a.anisotropyMap
          , he = le && !!a.clearcoatMap
          , ge = le && !!a.clearcoatNormalMap
          , _e = le && !!a.clearcoatRoughnessMap
          , ve = de && !!a.iridescenceMap
          , ye = de && !!a.iridescenceThicknessMap
          , be = fe && !!a.sheenColorMap
          , xe = fe && !!a.sheenRoughnessMap
          , Se = !!a.specularMap
          , Ce = !!a.specularColorMap
          , we = !!a.specularIntensityMap
          , Te = pe && !!a.transmissionMap
          , Ee = pe && !!a.thicknessMap
          , L = !!a.gradientMap
          , De = !!a.alphaMap
          , Oe = a.alphaTest > 0
          , ke = !!a.alphaHash
          , R = !!a.extensions
          , Ae = 0;
        a.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Ae = e.toneMapping);
        let z = {
            shaderID: S,
            shaderType: a.type,
            shaderName: a.name,
            vertexShader: E,
            fragmentShader: D,
            defines: a.defines,
            customVertexShaderID: O,
            customFragmentShaderID: k,
            isRawShaderMaterial: a.isRawShaderMaterial === !0,
            glslVersion: a.glslVersion,
            precision: p,
            batching: N,
            batchingColor: N && g._colorsTexture !== null,
            instancing: M,
            instancingColor: M && g.instanceColor !== null,
            instancingMorph: M && g.morphTexture !== null,
            outputColorSpace: A === null ? e.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : Re,
            alphaToCoverage: !!a.alphaToCoverage,
            map: ee,
            matcap: P,
            envMap: te,
            envMapMode: te && b.mapping,
            envMapCubeUVHeight: x,
            aoMap: ne,
            lightMap: re,
            bumpMap: ie,
            normalMap: F,
            displacementMap: ae,
            emissiveMap: oe,
            normalMapObjectSpace: F && a.normalMapType === 1,
            normalMapTangentSpace: F && a.normalMapType === 0,
            metalnessMap: se,
            roughnessMap: I,
            anisotropy: ce,
            anisotropyMap: me,
            clearcoat: le,
            clearcoatMap: he,
            clearcoatNormalMap: ge,
            clearcoatRoughnessMap: _e,
            dispersion: ue,
            iridescence: de,
            iridescenceMap: ve,
            iridescenceThicknessMap: ye,
            sheen: fe,
            sheenColorMap: be,
            sheenRoughnessMap: xe,
            specularMap: Se,
            specularColorMap: Ce,
            specularIntensityMap: we,
            transmission: pe,
            transmissionMap: Te,
            thicknessMap: Ee,
            gradientMap: L,
            opaque: a.transparent === !1 && a.blending === 1 && a.alphaToCoverage === !1,
            alphaMap: De,
            alphaTest: Oe,
            alphaHash: ke,
            combine: a.combine,
            mapUv: ee && h(a.map.channel),
            aoMapUv: ne && h(a.aoMap.channel),
            lightMapUv: re && h(a.lightMap.channel),
            bumpMapUv: ie && h(a.bumpMap.channel),
            normalMapUv: F && h(a.normalMap.channel),
            displacementMapUv: ae && h(a.displacementMap.channel),
            emissiveMapUv: oe && h(a.emissiveMap.channel),
            metalnessMapUv: se && h(a.metalnessMap.channel),
            roughnessMapUv: I && h(a.roughnessMap.channel),
            anisotropyMapUv: me && h(a.anisotropyMap.channel),
            clearcoatMapUv: he && h(a.clearcoatMap.channel),
            clearcoatNormalMapUv: ge && h(a.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: _e && h(a.clearcoatRoughnessMap.channel),
            iridescenceMapUv: ve && h(a.iridescenceMap.channel),
            iridescenceThicknessMapUv: ye && h(a.iridescenceThicknessMap.channel),
            sheenColorMapUv: be && h(a.sheenColorMap.channel),
            sheenRoughnessMapUv: xe && h(a.sheenRoughnessMap.channel),
            specularMapUv: Se && h(a.specularMap.channel),
            specularColorMapUv: Ce && h(a.specularColorMap.channel),
            specularIntensityMapUv: we && h(a.specularIntensityMap.channel),
            transmissionMapUv: Te && h(a.transmissionMap.channel),
            thicknessMapUv: Ee && h(a.thicknessMap.channel),
            alphaMapUv: De && h(a.alphaMap.channel),
            vertexTangents: !!v.attributes.tangent && (F || ce),
            vertexColors: a.vertexColors,
            vertexAlphas: a.vertexColors === !0 && !!v.attributes.color && v.attributes.color.itemSize === 4,
            pointsUvs: g.isPoints === !0 && !!v.attributes.uv && (ee || De),
            fog: !!_,
            useFog: a.fog === !0,
            fogExp2: !!_ && _.isFogExp2,
            flatShading: a.flatShading === !0 && a.wireframe === !1,
            sizeAttenuation: a.sizeAttenuation === !0,
            logarithmicDepthBuffer: f,
            reversedDepthBuffer: j,
            skinning: g.isSkinnedMesh === !0,
            morphTargets: v.morphAttributes.position !== void 0,
            morphNormals: v.morphAttributes.normal !== void 0,
            morphColors: v.morphAttributes.color !== void 0,
            morphTargetsCount: w,
            morphTextureStride: T,
            numDirLights: s.directional.length,
            numPointLights: s.point.length,
            numSpotLights: s.spot.length,
            numSpotLightMaps: s.spotLightMap.length,
            numRectAreaLights: s.rectArea.length,
            numHemiLights: s.hemi.length,
            numDirLightShadows: s.directionalShadowMap.length,
            numPointLightShadows: s.pointShadowMap.length,
            numSpotLightShadows: s.spotShadowMap.length,
            numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
            numLightProbes: s.numLightProbes,
            numClippingPlanes: o.numPlanes,
            numClipIntersection: o.numIntersection,
            dithering: a.dithering,
            shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
            shadowMapType: e.shadowMap.type,
            toneMapping: Ae,
            decodeVideoTexture: ee && a.map.isVideoTexture === !0 && Ot.getTransfer(a.map.colorSpace) === `srgb`,
            decodeVideoTextureEmissive: oe && a.emissiveMap.isVideoTexture === !0 && Ot.getTransfer(a.emissiveMap.colorSpace) === `srgb`,
            premultipliedAlpha: a.premultipliedAlpha,
            doubleSided: a.side === 2,
            flipSided: a.side === 1,
            useDepthPacking: a.depthPacking >= 0,
            depthPacking: a.depthPacking || 0,
            index0AttributeName: a.index0AttributeName,
            extensionClipCullDistance: R && a.extensions.clipCullDistance === !0 && r.has(`WEBGL_clip_cull_distance`),
            extensionMultiDraw: (R && a.extensions.multiDraw === !0 || N) && r.has(`WEBGL_multi_draw`),
            rendererExtensionParallelShaderCompile: r.has(`KHR_parallel_shader_compile`),
            customProgramCacheKey: a.customProgramCacheKey()
        };
        return z.vertexUv1s = l.has(1),
        z.vertexUv2s = l.has(2),
        z.vertexUv3s = l.has(3),
        l.clear(),
        z
    }
    function _(t) {
        let n = [];
        if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID),
        n.push(t.customFragmentShaderID)),
        t.defines !== void 0)
            for (let e in t.defines)
                n.push(e),
                n.push(t.defines[e]);
        return t.isRawShaderMaterial === !1 && (v(n, t),
        y(n, t),
        n.push(e.outputColorSpace)),
        n.push(t.customProgramCacheKey),
        n.join()
    }
    function v(e, t) {
        e.push(t.precision),
        e.push(t.outputColorSpace),
        e.push(t.envMapMode),
        e.push(t.envMapCubeUVHeight),
        e.push(t.mapUv),
        e.push(t.alphaMapUv),
        e.push(t.lightMapUv),
        e.push(t.aoMapUv),
        e.push(t.bumpMapUv),
        e.push(t.normalMapUv),
        e.push(t.displacementMapUv),
        e.push(t.emissiveMapUv),
        e.push(t.metalnessMapUv),
        e.push(t.roughnessMapUv),
        e.push(t.anisotropyMapUv),
        e.push(t.clearcoatMapUv),
        e.push(t.clearcoatNormalMapUv),
        e.push(t.clearcoatRoughnessMapUv),
        e.push(t.iridescenceMapUv),
        e.push(t.iridescenceThicknessMapUv),
        e.push(t.sheenColorMapUv),
        e.push(t.sheenRoughnessMapUv),
        e.push(t.specularMapUv),
        e.push(t.specularColorMapUv),
        e.push(t.specularIntensityMapUv),
        e.push(t.transmissionMapUv),
        e.push(t.thicknessMapUv),
        e.push(t.combine),
        e.push(t.fogExp2),
        e.push(t.sizeAttenuation),
        e.push(t.morphTargetsCount),
        e.push(t.morphAttributeCount),
        e.push(t.numDirLights),
        e.push(t.numPointLights),
        e.push(t.numSpotLights),
        e.push(t.numSpotLightMaps),
        e.push(t.numHemiLights),
        e.push(t.numRectAreaLights),
        e.push(t.numDirLightShadows),
        e.push(t.numPointLightShadows),
        e.push(t.numSpotLightShadows),
        e.push(t.numSpotLightShadowsWithMaps),
        e.push(t.numLightProbes),
        e.push(t.shadowMapType),
        e.push(t.toneMapping),
        e.push(t.numClippingPlanes),
        e.push(t.numClipIntersection),
        e.push(t.depthPacking)
    }
    function y(e, t) {
        s.disableAll(),
        t.instancing && s.enable(0),
        t.instancingColor && s.enable(1),
        t.instancingMorph && s.enable(2),
        t.matcap && s.enable(3),
        t.envMap && s.enable(4),
        t.normalMapObjectSpace && s.enable(5),
        t.normalMapTangentSpace && s.enable(6),
        t.clearcoat && s.enable(7),
        t.iridescence && s.enable(8),
        t.alphaTest && s.enable(9),
        t.vertexColors && s.enable(10),
        t.vertexAlphas && s.enable(11),
        t.vertexUv1s && s.enable(12),
        t.vertexUv2s && s.enable(13),
        t.vertexUv3s && s.enable(14),
        t.vertexTangents && s.enable(15),
        t.anisotropy && s.enable(16),
        t.alphaHash && s.enable(17),
        t.batching && s.enable(18),
        t.dispersion && s.enable(19),
        t.batchingColor && s.enable(20),
        t.gradientMap && s.enable(21),
        e.push(s.mask),
        s.disableAll(),
        t.fog && s.enable(0),
        t.useFog && s.enable(1),
        t.flatShading && s.enable(2),
        t.logarithmicDepthBuffer && s.enable(3),
        t.reversedDepthBuffer && s.enable(4),
        t.skinning && s.enable(5),
        t.morphTargets && s.enable(6),
        t.morphNormals && s.enable(7),
        t.morphColors && s.enable(8),
        t.premultipliedAlpha && s.enable(9),
        t.shadowMapEnabled && s.enable(10),
        t.doubleSided && s.enable(11),
        t.flipSided && s.enable(12),
        t.useDepthPacking && s.enable(13),
        t.dithering && s.enable(14),
        t.transmission && s.enable(15),
        t.sheen && s.enable(16),
        t.opaque && s.enable(17),
        t.pointsUvs && s.enable(18),
        t.decodeVideoTexture && s.enable(19),
        t.decodeVideoTextureEmissive && s.enable(20),
        t.alphaToCoverage && s.enable(21),
        e.push(s.mask)
    }
    function b(e) {
        let t = m[e.type], n;
        if (t) {
            let e = nc[t];
            n = qr.clone(e.uniforms)
        } else
            n = e.uniforms;
        return n
    }
    function x(t, n) {
        let r = d.get(n);
        return r === void 0 ? (r = new ku(e,n,t,a),
        u.push(r),
        d.set(n, r)) : ++r.usedTimes,
        r
    }
    function S(e) {
        if (--e.usedTimes === 0) {
            let t = u.indexOf(e);
            u[t] = u[u.length - 1],
            u.pop(),
            d.delete(e.cacheKey),
            e.destroy()
        }
    }
    function C(e) {
        c.remove(e)
    }
    function w() {
        c.dispose()
    }
    return {
        getParameters: g,
        getProgramCacheKey: _,
        getUniforms: b,
        acquireProgram: x,
        releaseProgram: S,
        releaseShaderCache: C,
        programs: u,
        dispose: w
    }
}
function Pu() {
    let e = new WeakMap;
    function t(t) {
        return e.has(t)
    }
    function n(t) {
        let n = e.get(t);
        return n === void 0 && (n = {},
        e.set(t, n)),
        n
    }
    function r(t) {
        e.delete(t)
    }
    function i(t, n, r) {
        e.get(t)[n] = r
    }
    function a() {
        e = new WeakMap
    }
    return {
        has: t,
        get: n,
        remove: r,
        update: i,
        dispose: a
    }
}
function Fu(e, t) {
    return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.z === t.z ? e.id - t.id : e.z - t.z : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder
}
function Iu(e, t) {
    return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder
}
function Lu() {
    let e = []
      , t = 0
      , n = []
      , r = []
      , i = [];
    function a() {
        t = 0,
        n.length = 0,
        r.length = 0,
        i.length = 0
    }
    function o(n, r, i, a, o, s) {
        let c = e[t];
        return c === void 0 ? (c = {
            id: n.id,
            object: n,
            geometry: r,
            material: i,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: o,
            group: s
        },
        e[t] = c) : (c.id = n.id,
        c.object = n,
        c.geometry = r,
        c.material = i,
        c.groupOrder = a,
        c.renderOrder = n.renderOrder,
        c.z = o,
        c.group = s),
        t++,
        c
    }
    function s(e, t, a, s, c, l) {
        let u = o(e, t, a, s, c, l);
        a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u)
    }
    function c(e, t, a, s, c, l) {
        let u = o(e, t, a, s, c, l);
        a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u)
    }
    function l(e, t) {
        n.length > 1 && n.sort(e || Fu),
        r.length > 1 && r.sort(t || Iu),
        i.length > 1 && i.sort(t || Iu)
    }
    function u() {
        for (let n = t, r = e.length; n < r; n++) {
            let t = e[n];
            if (t.id === null)
                break;
            t.id = null,
            t.object = null,
            t.geometry = null,
            t.material = null,
            t.group = null
        }
    }
    return {
        opaque: n,
        transmissive: r,
        transparent: i,
        init: a,
        push: s,
        unshift: c,
        finish: u,
        sort: l
    }
}
function Ru() {
    let e = new WeakMap;
    function t(t, n) {
        let r = e.get(t), i;
        return r === void 0 ? (i = new Lu,
        e.set(t, [i])) : n >= r.length ? (i = new Lu,
        r.push(i)) : i = r[n],
        i
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
function zu() {
    let e = {};
    return {
        get: function(t) {
            if (e[t.id] !== void 0)
                return e[t.id];
            let n;
            switch (t.type) {
            case `DirectionalLight`:
                n = {
                    direction: new Y,
                    color: new Z
                };
                break;
            case `SpotLight`:
                n = {
                    position: new Y,
                    direction: new Y,
                    color: new Z,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case `PointLight`:
                n = {
                    position: new Y,
                    color: new Z,
                    distance: 0,
                    decay: 0
                };
                break;
            case `HemisphereLight`:
                n = {
                    direction: new Y,
                    skyColor: new Z,
                    groundColor: new Z
                };
                break;
            case `RectAreaLight`:
                n = {
                    color: new Z,
                    position: new Y,
                    halfWidth: new Y,
                    halfHeight: new Y
                };
                break
            }
            return e[t.id] = n,
            n
        }
    }
}
function Bu() {
    let e = {};
    return {
        get: function(t) {
            if (e[t.id] !== void 0)
                return e[t.id];
            let n;
            switch (t.type) {
            case `DirectionalLight`:
                n = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new J
                };
                break;
            case `SpotLight`:
                n = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new J
                };
                break;
            case `PointLight`:
                n = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new J,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return e[t.id] = n,
            n
        }
    }
}
var Vu = 0;
function Hu(e, t) {
    return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map
}
function Uu(e) {
    let t = new zu
      , n = Bu()
      , r = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let e = 0; e < 9; e++)
        r.probe.push(new Y);
    let i = new Y
      , a = new vn
      , o = new vn;
    function s(i) {
        let a = 0
          , o = 0
          , s = 0;
        for (let e = 0; e < 9; e++)
            r.probe[e].set(0, 0, 0);
        let c = 0
          , l = 0
          , u = 0
          , d = 0
          , f = 0
          , p = 0
          , m = 0
          , h = 0
          , g = 0
          , _ = 0
          , v = 0;
        i.sort(Hu);
        for (let e = 0, y = i.length; e < y; e++) {
            let y = i[e]
              , b = y.color
              , x = y.intensity
              , S = y.distance
              , C = null;
            if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture),
            y.isAmbientLight)
                a += b.r * x,
                o += b.g * x,
                s += b.b * x;
            else if (y.isLightProbe) {
                for (let e = 0; e < 9; e++)
                    r.probe[e].addScaledVector(y.sh.coefficients[e], x);
                v++
            } else if (y.isDirectionalLight) {
                let e = t.get(y);
                if (e.color.copy(y.color).multiplyScalar(y.intensity),
                y.castShadow) {
                    let e = y.shadow
                      , t = n.get(y);
                    t.shadowIntensity = e.intensity,
                    t.shadowBias = e.bias,
                    t.shadowNormalBias = e.normalBias,
                    t.shadowRadius = e.radius,
                    t.shadowMapSize = e.mapSize,
                    r.directionalShadow[c] = t,
                    r.directionalShadowMap[c] = C,
                    r.directionalShadowMatrix[c] = y.shadow.matrix,
                    p++
                }
                r.directional[c] = e,
                c++
            } else if (y.isSpotLight) {
                let e = t.get(y);
                e.position.setFromMatrixPosition(y.matrixWorld),
                e.color.copy(b).multiplyScalar(x),
                e.distance = S,
                e.coneCos = Math.cos(y.angle),
                e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)),
                e.decay = y.decay,
                r.spot[u] = e;
                let i = y.shadow;
                if (y.map && (r.spotLightMap[g] = y.map,
                g++,
                i.updateMatrices(y),
                y.castShadow && _++),
                r.spotLightMatrix[u] = i.matrix,
                y.castShadow) {
                    let e = n.get(y);
                    e.shadowIntensity = i.intensity,
                    e.shadowBias = i.bias,
                    e.shadowNormalBias = i.normalBias,
                    e.shadowRadius = i.radius,
                    e.shadowMapSize = i.mapSize,
                    r.spotShadow[u] = e,
                    r.spotShadowMap[u] = C,
                    h++
                }
                u++
            } else if (y.isRectAreaLight) {
                let e = t.get(y);
                e.color.copy(b).multiplyScalar(x),
                e.halfWidth.set(y.width * .5, 0, 0),
                e.halfHeight.set(0, y.height * .5, 0),
                r.rectArea[d] = e,
                d++
            } else if (y.isPointLight) {
                let e = t.get(y);
                if (e.color.copy(y.color).multiplyScalar(y.intensity),
                e.distance = y.distance,
                e.decay = y.decay,
                y.castShadow) {
                    let e = y.shadow
                      , t = n.get(y);
                    t.shadowIntensity = e.intensity,
                    t.shadowBias = e.bias,
                    t.shadowNormalBias = e.normalBias,
                    t.shadowRadius = e.radius,
                    t.shadowMapSize = e.mapSize,
                    t.shadowCameraNear = e.camera.near,
                    t.shadowCameraFar = e.camera.far,
                    r.pointShadow[l] = t,
                    r.pointShadowMap[l] = C,
                    r.pointShadowMatrix[l] = y.shadow.matrix,
                    m++
                }
                r.point[l] = e,
                l++
            } else if (y.isHemisphereLight) {
                let e = t.get(y);
                e.skyColor.copy(y.color).multiplyScalar(x),
                e.groundColor.copy(y.groundColor).multiplyScalar(x),
                r.hemi[f] = e,
                f++
            }
        }
        d > 0 && (e.has(`OES_texture_float_linear`) === !0 ? (r.rectAreaLTC1 = $.LTC_FLOAT_1,
        r.rectAreaLTC2 = $.LTC_FLOAT_2) : (r.rectAreaLTC1 = $.LTC_HALF_1,
        r.rectAreaLTC2 = $.LTC_HALF_2)),
        r.ambient[0] = a,
        r.ambient[1] = o,
        r.ambient[2] = s;
        let y = r.hash;
        (y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c,
        r.spot.length = u,
        r.rectArea.length = d,
        r.point.length = l,
        r.hemi.length = f,
        r.directionalShadow.length = p,
        r.directionalShadowMap.length = p,
        r.pointShadow.length = m,
        r.pointShadowMap.length = m,
        r.spotShadow.length = h,
        r.spotShadowMap.length = h,
        r.directionalShadowMatrix.length = p,
        r.pointShadowMatrix.length = m,
        r.spotLightMatrix.length = h + g - _,
        r.spotLightMap.length = g,
        r.numSpotLightShadowsWithMaps = _,
        r.numLightProbes = v,
        y.directionalLength = c,
        y.pointLength = l,
        y.spotLength = u,
        y.rectAreaLength = d,
        y.hemiLength = f,
        y.numDirectionalShadows = p,
        y.numPointShadows = m,
        y.numSpotShadows = h,
        y.numSpotMaps = g,
        y.numLightProbes = v,
        r.version = Vu++)
    }
    function c(e, t) {
        let n = 0
          , s = 0
          , c = 0
          , l = 0
          , u = 0
          , d = t.matrixWorldInverse;
        for (let t = 0, f = e.length; t < f; t++) {
            let f = e[t];
            if (f.isDirectionalLight) {
                let e = r.directional[n];
                e.direction.setFromMatrixPosition(f.matrixWorld),
                i.setFromMatrixPosition(f.target.matrixWorld),
                e.direction.sub(i),
                e.direction.transformDirection(d),
                n++
            } else if (f.isSpotLight) {
                let e = r.spot[c];
                e.position.setFromMatrixPosition(f.matrixWorld),
                e.position.applyMatrix4(d),
                e.direction.setFromMatrixPosition(f.matrixWorld),
                i.setFromMatrixPosition(f.target.matrixWorld),
                e.direction.sub(i),
                e.direction.transformDirection(d),
                c++
            } else if (f.isRectAreaLight) {
                let e = r.rectArea[l];
                e.position.setFromMatrixPosition(f.matrixWorld),
                e.position.applyMatrix4(d),
                o.identity(),
                a.copy(f.matrixWorld),
                a.premultiply(d),
                o.extractRotation(a),
                e.halfWidth.set(f.width * .5, 0, 0),
                e.halfHeight.set(0, f.height * .5, 0),
                e.halfWidth.applyMatrix4(o),
                e.halfHeight.applyMatrix4(o),
                l++
            } else if (f.isPointLight) {
                let e = r.point[s];
                e.position.setFromMatrixPosition(f.matrixWorld),
                e.position.applyMatrix4(d),
                s++
            } else if (f.isHemisphereLight) {
                let e = r.hemi[u];
                e.direction.setFromMatrixPosition(f.matrixWorld),
                e.direction.transformDirection(d),
                u++
            }
        }
    }
    return {
        setup: s,
        setupView: c,
        state: r
    }
}
function Wu(e) {
    let t = new Uu(e)
      , n = []
      , r = [];
    function i(e) {
        l.camera = e,
        n.length = 0,
        r.length = 0
    }
    function a(e) {
        n.push(e)
    }
    function o(e) {
        r.push(e)
    }
    function s() {
        t.setup(n)
    }
    function c(e) {
        t.setupView(n, e)
    }
    let l = {
        lightsArray: n,
        shadowsArray: r,
        camera: null,
        lights: t,
        transmissionRenderTarget: {}
    };
    return {
        init: i,
        state: l,
        setupLights: s,
        setupLightsView: c,
        pushLight: a,
        pushShadow: o
    }
}
function Gu(e) {
    let t = new WeakMap;
    function n(n, r=0) {
        let i = t.get(n), a;
        return i === void 0 ? (a = new Wu(e),
        t.set(n, [a])) : r >= i.length ? (a = new Wu(e),
        i.push(a)) : a = i[r],
        a
    }
    function r() {
        t = new WeakMap
    }
    return {
        get: n,
        dispose: r
    }
}
var Ku = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , qu = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`
  , Ju = [new Y(1,0,0), new Y(-1,0,0), new Y(0,1,0), new Y(0,-1,0), new Y(0,0,1), new Y(0,0,-1)]
  , Yu = [new Y(0,-1,0), new Y(0,-1,0), new Y(0,0,1), new Y(0,0,-1), new Y(0,-1,0), new Y(0,-1,0)]
  , Xu = new vn
  , Zu = new Y
  , Qu = new Y;
function $u(e, t, n) {
    let r = new Ji
      , i = new J
      , a = new J
      , s = new zt
      , c = new Yo
      , u = new Xo
      , d = {}
      , f = n.maxTextureSize
      , p = {
        0: 1,
        1: 0,
        2: 2
    }
      , m = new Xr({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new J
            },
            radius: {
                value: 4
            }
        },
        vertexShader: Ku,
        fragmentShader: qu
    })
      , h = m.clone();
    h.defines.HORIZONTAL_PASS = 1;
    let g = new Or;
    g.setAttribute(`position`, new _r(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    let b = new Q(g,m)
      , x = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = 1;
    let S = this.type;
    this.render = function(t, n, c) {
        if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || t.length === 0)
            return;
        t.type === 2 && (U(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),
        t.type = 1);
        let u = e.getRenderTarget()
          , d = e.getActiveCubeFace()
          , p = e.getActiveMipmapLevel()
          , m = e.state;
        m.setBlending(0),
        m.buffers.depth.getReversed() === !0 ? m.buffers.color.setClear(0, 0, 0, 0) : m.buffers.color.setClear(1, 1, 1, 1),
        m.buffers.depth.setTest(!0),
        m.setScissorTest(!1);
        let h = S !== this.type;
        h && n.traverse(function(e) {
            e.material && (Array.isArray(e.material) ? e.material.forEach(e => e.needsUpdate = !0) : e.material.needsUpdate = !0)
        });
        for (let u = 0, d = t.length; u < d; u++) {
            let d = t[u]
              , p = d.shadow;
            if (p === void 0) {
                U(`WebGLShadowMap:`, d, `has no shadow.`);
                continue
            }
            if (p.autoUpdate === !1 && p.needsUpdate === !1)
                continue;
            i.copy(p.mapSize);
            let g = p.getFrameExtents();
            if (i.multiply(g),
            a.copy(p.mapSize),
            (i.x > f || i.y > f) && (i.x > f && (a.x = Math.floor(f / g.x),
            i.x = a.x * g.x,
            p.mapSize.x = a.x),
            i.y > f && (a.y = Math.floor(f / g.y),
            i.y = a.y * g.y,
            p.mapSize.y = a.y)),
            p.map === null || h === !0) {
                if (p.map !== null && (p.map.depthTexture !== null && (p.map.depthTexture.dispose(),
                p.map.depthTexture = null),
                p.map.dispose()),
                this.type === 3) {
                    if (d.isPointLight) {
                        U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);
                        continue
                    }
                    p.map = new Vt(i.x,i.y,{
                        format: M,
                        type: y,
                        minFilter: l,
                        magFilter: l,
                        generateMipmaps: !1
                    }),
                    p.map.texture.name = d.name + `.shadowMap`,
                    p.map.depthTexture = new ga(i.x,i.y,v),
                    p.map.depthTexture.name = d.name + `.shadowMapDepth`,
                    p.map.depthTexture.format = O,
                    p.map.depthTexture.compareFunction = null,
                    p.map.depthTexture.minFilter = o,
                    p.map.depthTexture.magFilter = o
                } else {
                    d.isPointLight ? (p.map = new oi(i.x),
                    p.map.depthTexture = new _a(i.x,_)) : (p.map = new Vt(i.x,i.y),
                    p.map.depthTexture = new ga(i.x,i.y,_)),
                    p.map.depthTexture.name = d.name + `.shadowMap`,
                    p.map.depthTexture.format = O;
                    let t = e.state.buffers.depth.getReversed();
                    this.type === 1 ? (p.map.depthTexture.compareFunction = t ? 518 : 515,
                    p.map.depthTexture.minFilter = l,
                    p.map.depthTexture.magFilter = l) : (p.map.depthTexture.compareFunction = null,
                    p.map.depthTexture.minFilter = o,
                    p.map.depthTexture.magFilter = o)
                }
                p.camera.updateProjectionMatrix()
            }
            let b = p.map.isWebGLCubeRenderTarget ? 6 : 1;
            for (let t = 0; t < b; t++) {
                if (p.map.isWebGLCubeRenderTarget)
                    e.setRenderTarget(p.map, t),
                    e.clear();
                else {
                    t === 0 && (e.setRenderTarget(p.map),
                    e.clear());
                    let n = p.getViewport(t);
                    s.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w),
                    m.viewport(s)
                }
                if (d.isPointLight) {
                    let e = p.camera
                      , n = p.matrix
                      , r = d.distance || e.far;
                    r !== e.far && (e.far = r,
                    e.updateProjectionMatrix()),
                    Zu.setFromMatrixPosition(d.matrixWorld),
                    e.position.copy(Zu),
                    Qu.copy(e.position),
                    Qu.add(Ju[t]),
                    e.up.copy(Yu[t]),
                    e.lookAt(Qu),
                    e.updateMatrixWorld(),
                    n.makeTranslation(-Zu.x, -Zu.y, -Zu.z),
                    Xu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                    p._frustum.setFromProjectionMatrix(Xu, e.coordinateSystem, e.reversedDepth)
                } else
                    p.updateMatrices(d);
                r = p.getFrustum(),
                T(n, c, p.camera, d, this.type)
            }
            p.isPointLightShadow !== !0 && this.type === 3 && C(p, c),
            p.needsUpdate = !1
        }
        S = this.type,
        x.needsUpdate = !1,
        e.setRenderTarget(u, d, p)
    }
    ;
    function C(n, r) {
        let a = t.update(b);
        m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples,
        h.defines.VSM_SAMPLES = n.blurSamples,
        m.needsUpdate = !0,
        h.needsUpdate = !0),
        n.mapPass === null && (n.mapPass = new Vt(i.x,i.y,{
            format: M,
            type: y
        })),
        m.uniforms.shadow_pass.value = n.map.depthTexture,
        m.uniforms.resolution.value = n.mapSize,
        m.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.mapPass),
        e.clear(),
        e.renderBufferDirect(r, null, a, m, b, null),
        h.uniforms.shadow_pass.value = n.mapPass.texture,
        h.uniforms.resolution.value = n.mapSize,
        h.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.map),
        e.clear(),
        e.renderBufferDirect(r, null, a, h, b, null)
    }
    function w(t, n, r, i) {
        let a = null
          , o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
        if (o !== void 0)
            a = o;
        else if (a = r.isPointLight === !0 ? u : c,
        e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
            let e = a.uuid
              , t = n.uuid
              , r = d[e];
            r === void 0 && (r = {},
            d[e] = r);
            let i = r[t];
            i === void 0 && (i = a.clone(),
            r[t] = i,
            n.addEventListener(`dispose`, E)),
            a = i
        }
        if (a.visible = n.visible,
        a.wireframe = n.wireframe,
        i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? p[n.side] : n.shadowSide,
        a.alphaMap = n.alphaMap,
        a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest,
        a.map = n.map,
        a.clipShadows = n.clipShadows,
        a.clippingPlanes = n.clippingPlanes,
        a.clipIntersection = n.clipIntersection,
        a.displacementMap = n.displacementMap,
        a.displacementScale = n.displacementScale,
        a.displacementBias = n.displacementBias,
        a.wireframeLinewidth = n.wireframeLinewidth,
        a.linewidth = n.linewidth,
        r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
            let t = e.properties.get(a);
            t.light = r
        }
        return a
    }
    function T(n, i, a, o, s) {
        if (n.visible === !1)
            return;
        if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            let r = t.update(n)
              , c = n.material;
            if (Array.isArray(c)) {
                let t = r.groups;
                for (let l = 0, u = t.length; l < u; l++) {
                    let u = t[l]
                      , d = c[u.materialIndex];
                    if (d && d.visible) {
                        let t = w(n, d, o, s);
                        n.onBeforeShadow(e, n, i, a, r, t, u),
                        e.renderBufferDirect(a, null, r, t, n, u),
                        n.onAfterShadow(e, n, i, a, r, t, u)
                    }
                }
            } else if (c.visible) {
                let t = w(n, c, o, s);
                n.onBeforeShadow(e, n, i, a, r, t, null),
                e.renderBufferDirect(a, null, r, t, n, null),
                n.onAfterShadow(e, n, i, a, r, t, null)
            }
        }
        let c = n.children;
        for (let e = 0, t = c.length; e < t; e++)
            T(c[e], i, a, o, s)
    }
    function E(e) {
        e.target.removeEventListener(`dispose`, E);
        for (let t in d) {
            let n = d[t]
              , r = e.target.uuid;
            r in n && (n[r].dispose(),
            delete n[r])
        }
    }
}
var ed = {
    0: 1,
    2: 6,
    4: 7,
    3: 5,
    1: 0,
    6: 2,
    7: 4,
    5: 3
};
function td(e, t) {
    function n() {
        let t = !1
          , n = new zt
          , r = null
          , i = new zt(0,0,0,0);
        return {
            setMask: function(n) {
                r !== n && !t && (e.colorMask(n, n, n, n),
                r = n)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t, r, a, o, s) {
                s === !0 && (t *= o,
                r *= o,
                a *= o),
                n.set(t, r, a, o),
                i.equals(n) === !1 && (e.clearColor(t, r, a, o),
                i.copy(n))
            },
            reset: function() {
                t = !1,
                r = null,
                i.set(-1, 0, 0, 0)
            }
        }
    }
    function r() {
        let n = !1
          , r = !1
          , i = null
          , a = null
          , o = null;
        return {
            setReversed: function(e) {
                if (r !== e) {
                    let n = t.get(`EXT_clip_control`);
                    e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT),
                    r = e;
                    let i = o;
                    o = null,
                    this.setClear(i)
                }
            },
            getReversed: function() {
                return r
            },
            setTest: function(t) {
                t ? se(e.DEPTH_TEST) : I(e.DEPTH_TEST)
            },
            setMask: function(t) {
                i !== t && !n && (e.depthMask(t),
                i = t)
            },
            setFunc: function(t) {
                if (r && (t = ed[t]),
                a !== t) {
                    switch (t) {
                    case 0:
                        e.depthFunc(e.NEVER);
                        break;
                    case 1:
                        e.depthFunc(e.ALWAYS);
                        break;
                    case 2:
                        e.depthFunc(e.LESS);
                        break;
                    case 3:
                        e.depthFunc(e.LEQUAL);
                        break;
                    case 4:
                        e.depthFunc(e.EQUAL);
                        break;
                    case 5:
                        e.depthFunc(e.GEQUAL);
                        break;
                    case 6:
                        e.depthFunc(e.GREATER);
                        break;
                    case 7:
                        e.depthFunc(e.NOTEQUAL);
                        break;
                    default:
                        e.depthFunc(e.LEQUAL)
                    }
                    a = t
                }
            },
            setLocked: function(e) {
                n = e
            },
            setClear: function(t) {
                o !== t && (r && (t = 1 - t),
                e.clearDepth(t),
                o = t)
            },
            reset: function() {
                n = !1,
                i = null,
                a = null,
                o = null,
                r = !1
            }
        }
    }
    function i() {
        let t = !1
          , n = null
          , r = null
          , i = null
          , a = null
          , o = null
          , s = null
          , c = null
          , l = null;
        return {
            setTest: function(n) {
                t || (n ? se(e.STENCIL_TEST) : I(e.STENCIL_TEST))
            },
            setMask: function(r) {
                n !== r && !t && (e.stencilMask(r),
                n = r)
            },
            setFunc: function(t, n, o) {
                (r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o),
                r = t,
                i = n,
                a = o)
            },
            setOp: function(t, n, r) {
                (o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r),
                o = t,
                s = n,
                c = r)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t) {
                l !== t && (e.clearStencil(t),
                l = t)
            },
            reset: function() {
                t = !1,
                n = null,
                r = null,
                i = null,
                a = null,
                o = null,
                s = null,
                c = null,
                l = null
            }
        }
    }
    let a = new n
      , o = new r
      , s = new i
      , c = new WeakMap
      , l = new WeakMap
      , u = {}
      , d = {}
      , f = new WeakMap
      , p = []
      , m = null
      , h = !1
      , g = null
      , _ = null
      , v = null
      , y = null
      , b = null
      , x = null
      , S = null
      , C = new Z(0,0,0)
      , w = 0
      , T = !1
      , E = null
      , D = null
      , O = null
      , k = null
      , A = null
      , j = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
      , M = !1
      , N = 0
      , ee = e.getParameter(e.VERSION);
    ee.indexOf(`WebGL`) === -1 ? ee.indexOf(`OpenGL ES`) !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),
    M = N >= 2) : (N = parseFloat(/^WebGL (\d)/.exec(ee)[1]),
    M = N >= 1);
    let P = null
      , te = {}
      , ne = e.getParameter(e.SCISSOR_BOX)
      , re = e.getParameter(e.VIEWPORT)
      , ie = new zt().fromArray(ne)
      , F = new zt().fromArray(re);
    function ae(t, n, r, i) {
        let a = new Uint8Array(4)
          , o = e.createTexture();
        e.bindTexture(t, o),
        e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
        e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
        for (let o = 0; o < r; o++)
            t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
        return o
    }
    let oe = {};
    oe[e.TEXTURE_2D] = ae(e.TEXTURE_2D, e.TEXTURE_2D, 1),
    oe[e.TEXTURE_CUBE_MAP] = ae(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    oe[e.TEXTURE_2D_ARRAY] = ae(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1),
    oe[e.TEXTURE_3D] = ae(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1),
    a.setClear(0, 0, 0, 1),
    o.setClear(1),
    s.setClear(0),
    se(e.DEPTH_TEST),
    o.setFunc(3),
    he(!1),
    ge(1),
    se(e.CULL_FACE),
    pe(0);
    function se(t) {
        u[t] !== !0 && (e.enable(t),
        u[t] = !0)
    }
    function I(t) {
        u[t] !== !1 && (e.disable(t),
        u[t] = !1)
    }
    function ce(t, n) {
        return d[t] === n ? !1 : (e.bindFramebuffer(t, n),
        d[t] = n,
        t === e.DRAW_FRAMEBUFFER && (d[e.FRAMEBUFFER] = n),
        t === e.FRAMEBUFFER && (d[e.DRAW_FRAMEBUFFER] = n),
        !0)
    }
    function le(t, n) {
        let r = p
          , i = !1;
        if (t) {
            r = f.get(n),
            r === void 0 && (r = [],
            f.set(n, r));
            let a = t.textures;
            if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
                for (let t = 0, n = a.length; t < n; t++)
                    r[t] = e.COLOR_ATTACHMENT0 + t;
                r.length = a.length,
                i = !0
            }
        } else
            r[0] !== e.BACK && (r[0] = e.BACK,
            i = !0);
        i && e.drawBuffers(r)
    }
    function ue(t) {
        return m === t ? !1 : (e.useProgram(t),
        m = t,
        !0)
    }
    let de = {
        100: e.FUNC_ADD,
        101: e.FUNC_SUBTRACT,
        102: e.FUNC_REVERSE_SUBTRACT
    };
    de[103] = e.MIN,
    de[104] = e.MAX;
    let fe = {
        200: e.ZERO,
        201: e.ONE,
        202: e.SRC_COLOR,
        204: e.SRC_ALPHA,
        210: e.SRC_ALPHA_SATURATE,
        208: e.DST_COLOR,
        206: e.DST_ALPHA,
        203: e.ONE_MINUS_SRC_COLOR,
        205: e.ONE_MINUS_SRC_ALPHA,
        209: e.ONE_MINUS_DST_COLOR,
        207: e.ONE_MINUS_DST_ALPHA,
        211: e.CONSTANT_COLOR,
        212: e.ONE_MINUS_CONSTANT_COLOR,
        213: e.CONSTANT_ALPHA,
        214: e.ONE_MINUS_CONSTANT_ALPHA
    };
    function pe(t, n, r, i, a, o, s, c, l, u) {
        if (t === 0) {
            h === !0 && (I(e.BLEND),
            h = !1);
            return
        }
        if (h === !1 && (se(e.BLEND),
        h = !0),
        t !== 5) {
            if (t !== g || u !== T) {
                if ((_ !== 100 || b !== 100) && (e.blendEquation(e.FUNC_ADD),
                _ = 100,
                b = 100),
                u)
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                        break;
                    case 2:
                        e.blendFunc(e.ONE, e.ONE);
                        break;
                    case 3:
                        e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                        break;
                    case 4:
                        e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
                        break;
                    default:
                        W(`WebGLState: Invalid blending: `, t);
                        break
                    }
                else
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                        break;
                    case 2:
                        e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
                        break;
                    case 3:
                        W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);
                        break;
                    case 4:
                        W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);
                        break;
                    default:
                        W(`WebGLState: Invalid blending: `, t);
                        break
                    }
                v = null,
                y = null,
                x = null,
                S = null,
                C.set(0, 0, 0),
                w = 0,
                g = t,
                T = u
            }
            return
        }
        a ||= n,
        o ||= r,
        s ||= i,
        (n !== _ || a !== b) && (e.blendEquationSeparate(de[n], de[a]),
        _ = n,
        b = a),
        (r !== v || i !== y || o !== x || s !== S) && (e.blendFuncSeparate(fe[r], fe[i], fe[o], fe[s]),
        v = r,
        y = i,
        x = o,
        S = s),
        (c.equals(C) === !1 || l !== w) && (e.blendColor(c.r, c.g, c.b, l),
        C.copy(c),
        w = l),
        g = t,
        T = !1
    }
    function me(t, n) {
        t.side === 2 ? I(e.CULL_FACE) : se(e.CULL_FACE);
        let r = t.side === 1;
        n && (r = !r),
        he(r),
        t.blending === 1 && t.transparent === !1 ? pe(0) : pe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha),
        o.setFunc(t.depthFunc),
        o.setTest(t.depthTest),
        o.setMask(t.depthWrite),
        a.setMask(t.colorWrite);
        let i = t.stencilWrite;
        s.setTest(i),
        i && (s.setMask(t.stencilWriteMask),
        s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
        s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
        ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
        t.alphaToCoverage === !0 ? se(e.SAMPLE_ALPHA_TO_COVERAGE) : I(e.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function he(t) {
        E !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW),
        E = t)
    }
    function ge(t) {
        t === 0 ? I(e.CULL_FACE) : (se(e.CULL_FACE),
        t !== D && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))),
        D = t
    }
    function _e(t) {
        t !== O && (M && e.lineWidth(t),
        O = t)
    }
    function ve(t, n, r) {
        t ? (se(e.POLYGON_OFFSET_FILL),
        (k !== n || A !== r) && (e.polygonOffset(n, r),
        k = n,
        A = r)) : I(e.POLYGON_OFFSET_FILL)
    }
    function ye(t) {
        t ? se(e.SCISSOR_TEST) : I(e.SCISSOR_TEST)
    }
    function be(t) {
        t === void 0 && (t = e.TEXTURE0 + j - 1),
        P !== t && (e.activeTexture(t),
        P = t)
    }
    function xe(t, n, r) {
        r === void 0 && (r = P === null ? e.TEXTURE0 + j - 1 : P);
        let i = te[r];
        i === void 0 && (i = {
            type: void 0,
            texture: void 0
        },
        te[r] = i),
        (i.type !== t || i.texture !== n) && (P !== r && (e.activeTexture(r),
        P = r),
        e.bindTexture(t, n || oe[t]),
        i.type = t,
        i.texture = n)
    }
    function Se() {
        let t = te[P];
        t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null),
        t.type = void 0,
        t.texture = void 0)
    }
    function Ce() {
        try {
            e.compressedTexImage2D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function we() {
        try {
            e.compressedTexImage3D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function Te() {
        try {
            e.texSubImage2D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function Ee() {
        try {
            e.texSubImage3D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function L() {
        try {
            e.compressedTexSubImage2D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function De() {
        try {
            e.compressedTexSubImage3D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function Oe() {
        try {
            e.texStorage2D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function ke() {
        try {
            e.texStorage3D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function R() {
        try {
            e.texImage2D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function Ae() {
        try {
            e.texImage3D(...arguments)
        } catch (e) {
            W(`WebGLState:`, e)
        }
    }
    function z(t) {
        ie.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w),
        ie.copy(t))
    }
    function B(t) {
        F.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w),
        F.copy(t))
    }
    function je(t, n) {
        let r = l.get(n);
        r === void 0 && (r = new WeakMap,
        l.set(n, r));
        let i = r.get(t);
        i === void 0 && (i = e.getUniformBlockIndex(n, t.name),
        r.set(t, i))
    }
    function Me(t, n) {
        let r = l.get(n).get(t);
        c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex),
        c.set(n, r))
    }
    function Ne() {
        e.disable(e.BLEND),
        e.disable(e.CULL_FACE),
        e.disable(e.DEPTH_TEST),
        e.disable(e.POLYGON_OFFSET_FILL),
        e.disable(e.SCISSOR_TEST),
        e.disable(e.STENCIL_TEST),
        e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ONE, e.ZERO),
        e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
        e.blendColor(0, 0, 0, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(e.LESS),
        o.setReversed(!1),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(e.ALWAYS, 0, 4294967295),
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
        e.clearStencil(0),
        e.cullFace(e.BACK),
        e.frontFace(e.CCW),
        e.polygonOffset(0, 0),
        e.activeTexture(e.TEXTURE0),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        u = {},
        P = null,
        te = {},
        d = {},
        f = new WeakMap,
        p = [],
        m = null,
        h = !1,
        g = null,
        _ = null,
        v = null,
        y = null,
        b = null,
        x = null,
        S = null,
        C = new Z(0,0,0),
        w = 0,
        T = !1,
        E = null,
        D = null,
        O = null,
        k = null,
        A = null,
        ie.set(0, 0, e.canvas.width, e.canvas.height),
        F.set(0, 0, e.canvas.width, e.canvas.height),
        a.reset(),
        o.reset(),
        s.reset()
    }
    return {
        buffers: {
            color: a,
            depth: o,
            stencil: s
        },
        enable: se,
        disable: I,
        bindFramebuffer: ce,
        drawBuffers: le,
        useProgram: ue,
        setBlending: pe,
        setMaterial: me,
        setFlipSided: he,
        setCullFace: ge,
        setLineWidth: _e,
        setPolygonOffset: ve,
        setScissorTest: ye,
        activeTexture: be,
        bindTexture: xe,
        unbindTexture: Se,
        compressedTexImage2D: Ce,
        compressedTexImage3D: we,
        texImage2D: R,
        texImage3D: Ae,
        updateUBOMapping: je,
        uniformBlockBinding: Me,
        texStorage2D: Oe,
        texStorage3D: ke,
        texSubImage2D: Te,
        texSubImage3D: Ee,
        compressedTexSubImage2D: L,
        compressedTexSubImage3D: De,
        scissor: z,
        viewport: B,
        reset: Ne
    }
}
function nd(e, t, n, f, p, m, h) {
    let g = t.has(`WEBGL_multisampled_render_to_texture`) ? t.get(`WEBGL_multisampled_render_to_texture`) : null, _ = typeof navigator > `u` ? !1 : /OculusBrowser/g.test(navigator.userAgent), v = new J, y = new WeakMap, b, x = new WeakMap, S = !1;
    try {
        S = typeof OffscreenCanvas < `u` && new OffscreenCanvas(1,1).getContext(`2d`) !== null
    } catch {}
    function C(e, t) {
        return S ? new OffscreenCanvas(e,t) : Ge(`canvas`)
    }
    function w(e, t, n) {
        let r = 1
          , i = R(e);
        if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)),
        r < 1)
            if (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e instanceof ImageBitmap || typeof VideoFrame < `u` && e instanceof VideoFrame) {
                let n = Math.floor(r * i.width)
                  , a = Math.floor(r * i.height);
                b === void 0 && (b = C(n, a));
                let o = t ? C(n, a) : b;
                return o.width = n,
                o.height = a,
                o.getContext(`2d`).drawImage(e, 0, 0, n, a),
                U(`WebGLRenderer: Texture has been resized from (` + i.width + `x` + i.height + `) to (` + n + `x` + a + `).`),
                o
            } else
                return `data` in e && U(`WebGLRenderer: Image in DataTexture is too big (` + i.width + `x` + i.height + `).`),
                e;
        return e
    }
    function T(e) {
        return e.generateMipmaps
    }
    function E(t) {
        e.generateMipmap(t)
    }
    function D(t) {
        return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D
    }
    function O(n, r, i, a, o=!1) {
        if (n !== null) {
            if (e[n] !== void 0)
                return e[n];
            U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '` + n + `'`)
        }
        let s = r;
        if (r === e.RED && (i === e.FLOAT && (s = e.R32F),
        i === e.HALF_FLOAT && (s = e.R16F),
        i === e.UNSIGNED_BYTE && (s = e.R8)),
        r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.R8UI),
        i === e.UNSIGNED_SHORT && (s = e.R16UI),
        i === e.UNSIGNED_INT && (s = e.R32UI),
        i === e.BYTE && (s = e.R8I),
        i === e.SHORT && (s = e.R16I),
        i === e.INT && (s = e.R32I)),
        r === e.RG && (i === e.FLOAT && (s = e.RG32F),
        i === e.HALF_FLOAT && (s = e.RG16F),
        i === e.UNSIGNED_BYTE && (s = e.RG8)),
        r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RG8UI),
        i === e.UNSIGNED_SHORT && (s = e.RG16UI),
        i === e.UNSIGNED_INT && (s = e.RG32UI),
        i === e.BYTE && (s = e.RG8I),
        i === e.SHORT && (s = e.RG16I),
        i === e.INT && (s = e.RG32I)),
        r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGB8UI),
        i === e.UNSIGNED_SHORT && (s = e.RGB16UI),
        i === e.UNSIGNED_INT && (s = e.RGB32UI),
        i === e.BYTE && (s = e.RGB8I),
        i === e.SHORT && (s = e.RGB16I),
        i === e.INT && (s = e.RGB32I)),
        r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGBA8UI),
        i === e.UNSIGNED_SHORT && (s = e.RGBA16UI),
        i === e.UNSIGNED_INT && (s = e.RGBA32UI),
        i === e.BYTE && (s = e.RGBA8I),
        i === e.SHORT && (s = e.RGBA16I),
        i === e.INT && (s = e.RGBA32I)),
        r === e.RGB && (i === e.UNSIGNED_INT_5_9_9_9_REV && (s = e.RGB9_E5),
        i === e.UNSIGNED_INT_10F_11F_11F_REV && (s = e.R11F_G11F_B10F)),
        r === e.RGBA) {
            let t = o ? ze : Ot.getTransfer(a);
            i === e.FLOAT && (s = e.RGBA32F),
            i === e.HALF_FLOAT && (s = e.RGBA16F),
            i === e.UNSIGNED_BYTE && (s = t === `srgb` ? e.SRGB8_ALPHA8 : e.RGBA8),
            i === e.UNSIGNED_SHORT_4_4_4_4 && (s = e.RGBA4),
            i === e.UNSIGNED_SHORT_5_5_5_1 && (s = e.RGB5_A1)
        }
        return (s === e.R16F || s === e.R32F || s === e.RG16F || s === e.RG32F || s === e.RGBA16F || s === e.RGBA32F) && t.get(`EXT_color_buffer_float`),
        s
    }
    function A(t, n) {
        let r;
        return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8,
        U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16),
        r
    }
    function j(e, t) {
        return T(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
    }
    function M(e) {
        let t = e.target;
        t.removeEventListener(`dispose`, M),
        ee(t),
        t.isVideoTexture && y.delete(t)
    }
    function N(e) {
        let t = e.target;
        t.removeEventListener(`dispose`, N),
        te(t)
    }
    function ee(e) {
        let t = f.get(e);
        if (t.__webglInit === void 0)
            return;
        let n = e.source
          , r = x.get(n);
        if (r) {
            let i = r[t.__cacheKey];
            i.usedTimes--,
            i.usedTimes === 0 && P(e),
            Object.keys(r).length === 0 && x.delete(n)
        }
        f.remove(e)
    }
    function P(t) {
        let n = f.get(t);
        e.deleteTexture(n.__webglTexture);
        let r = t.source
          , i = x.get(r);
        delete i[n.__cacheKey],
        h.memory.textures--
    }
    function te(t) {
        let n = f.get(t);
        if (t.depthTexture && (t.depthTexture.dispose(),
        f.remove(t.depthTexture)),
        t.isWebGLCubeRenderTarget)
            for (let t = 0; t < 6; t++) {
                if (Array.isArray(n.__webglFramebuffer[t]))
                    for (let r = 0; r < n.__webglFramebuffer[t].length; r++)
                        e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
                else
                    e.deleteFramebuffer(n.__webglFramebuffer[t]);
                n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t])
            }
        else {
            if (Array.isArray(n.__webglFramebuffer))
                for (let t = 0; t < n.__webglFramebuffer.length; t++)
                    e.deleteFramebuffer(n.__webglFramebuffer[t]);
            else
                e.deleteFramebuffer(n.__webglFramebuffer);
            if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
                for (let t = 0; t < n.__webglColorRenderbuffer.length; t++)
                    n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
            n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer)
        }
        let r = t.textures;
        for (let t = 0, n = r.length; t < n; t++) {
            let n = f.get(r[t]);
            n.__webglTexture && (e.deleteTexture(n.__webglTexture),
            h.memory.textures--),
            f.remove(r[t])
        }
        f.remove(t)
    }
    let ne = 0;
    function re() {
        ne = 0
    }
    function ie() {
        let e = ne;
        return e >= p.maxTextures && U(`WebGLTextures: Trying to use ` + e + ` texture units while this GPU supports only ` + p.maxTextures),
        ne += 1,
        e
    }
    function F(e) {
        let t = [];
        return t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.wrapR || 0),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.colorSpace),
        t.join()
    }
    function ae(t, r) {
        let i = f.get(t);
        if (t.isVideoTexture && Oe(t),
        t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && i.__version !== t.version) {
            let e = t.image;
            if (e === null)
                U(`WebGLRenderer: Texture marked for update but no image data found.`);
            else if (e.complete === !1)
                U(`WebGLRenderer: Texture marked for update but image is incomplete`);
            else {
                he(i, t, r);
                return
            }
        } else
            t.isExternalTexture && (i.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
        n.bindTexture(e.TEXTURE_2D, i.__webglTexture, e.TEXTURE0 + r)
    }
    function oe(t, r) {
        let i = f.get(t);
        if (t.isRenderTargetTexture === !1 && t.version > 0 && i.__version !== t.version) {
            he(i, t, r);
            return
        } else
            t.isExternalTexture && (i.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
        n.bindTexture(e.TEXTURE_2D_ARRAY, i.__webglTexture, e.TEXTURE0 + r)
    }
    function se(t, r) {
        let i = f.get(t);
        if (t.isRenderTargetTexture === !1 && t.version > 0 && i.__version !== t.version) {
            he(i, t, r);
            return
        }
        n.bindTexture(e.TEXTURE_3D, i.__webglTexture, e.TEXTURE0 + r)
    }
    function I(t, r) {
        let i = f.get(t);
        if (t.isCubeDepthTexture !== !0 && t.version > 0 && i.__version !== t.version) {
            ge(i, t, r);
            return
        }
        n.bindTexture(e.TEXTURE_CUBE_MAP, i.__webglTexture, e.TEXTURE0 + r)
    }
    let ce = {
        [r]: e.REPEAT,
        [i]: e.CLAMP_TO_EDGE,
        [a]: e.MIRRORED_REPEAT
    }
      , le = {
        [o]: e.NEAREST,
        [s]: e.NEAREST_MIPMAP_NEAREST,
        [c]: e.NEAREST_MIPMAP_LINEAR,
        [l]: e.LINEAR,
        [u]: e.LINEAR_MIPMAP_NEAREST,
        [d]: e.LINEAR_MIPMAP_LINEAR
    }
      , ue = {
        512: e.NEVER,
        519: e.ALWAYS,
        513: e.LESS,
        515: e.LEQUAL,
        514: e.EQUAL,
        518: e.GEQUAL,
        516: e.GREATER,
        517: e.NOTEQUAL
    };
    function de(n, r) {
        if (r.type === 1015 && t.has(`OES_texture_float_linear`) === !1 && (r.magFilter === 1006 || r.magFilter === 1007 || r.magFilter === 1005 || r.magFilter === 1008 || r.minFilter === 1006 || r.minFilter === 1007 || r.minFilter === 1005 || r.minFilter === 1008) && U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),
        e.texParameteri(n, e.TEXTURE_WRAP_S, ce[r.wrapS]),
        e.texParameteri(n, e.TEXTURE_WRAP_T, ce[r.wrapT]),
        (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ce[r.wrapR]),
        e.texParameteri(n, e.TEXTURE_MAG_FILTER, le[r.magFilter]),
        e.texParameteri(n, e.TEXTURE_MIN_FILTER, le[r.minFilter]),
        r.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
        e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ue[r.compareFunction])),
        t.has(`EXT_texture_filter_anisotropic`) === !0) {
            if (r.magFilter === 1003 || r.minFilter !== 1005 && r.minFilter !== 1008 || r.type === 1015 && t.has(`OES_texture_float_linear`) === !1)
                return;
            if (r.anisotropy > 1 || f.get(r).__currentAnisotropy) {
                let i = t.get(`EXT_texture_filter_anisotropic`);
                e.texParameterf(n, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, p.getMaxAnisotropy())),
                f.get(r).__currentAnisotropy = r.anisotropy
            }
        }
    }
    function fe(t, n) {
        let r = !1;
        t.__webglInit === void 0 && (t.__webglInit = !0,
        n.addEventListener(`dispose`, M));
        let i = n.source
          , a = x.get(i);
        a === void 0 && (a = {},
        x.set(i, a));
        let o = F(n);
        if (o !== t.__cacheKey) {
            a[o] === void 0 && (a[o] = {
                texture: e.createTexture(),
                usedTimes: 0
            },
            h.memory.textures++,
            r = !0),
            a[o].usedTimes++;
            let i = a[t.__cacheKey];
            i !== void 0 && (a[t.__cacheKey].usedTimes--,
            i.usedTimes === 0 && P(n)),
            t.__cacheKey = o,
            t.__webglTexture = a[o].texture
        }
        return r
    }
    function pe(e, t, n) {
        return Math.floor(Math.floor(e / n) / t)
    }
    function me(t, r, i, a) {
        let o = t.updateRanges;
        if (o.length === 0)
            n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
        else {
            o.sort( (e, t) => e.start - t.start);
            let s = 0;
            for (let e = 1; e < o.length; e++) {
                let t = o[s]
                  , n = o[e]
                  , i = t.start + t.count
                  , a = pe(n.start, r.width, 4)
                  , c = pe(t.start, r.width, 4);
                n.start <= i + 1 && a === c && pe(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s,
                o[s] = n)
            }
            o.length = s + 1;
            let c = e.getParameter(e.UNPACK_ROW_LENGTH)
              , l = e.getParameter(e.UNPACK_SKIP_PIXELS)
              , u = e.getParameter(e.UNPACK_SKIP_ROWS);
            e.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
            for (let t = 0, s = o.length; t < s; t++) {
                let s = o[t]
                  , c = Math.floor(s.start / 4)
                  , l = Math.ceil(s.count / 4)
                  , u = c % r.width
                  , d = Math.floor(c / r.width)
                  , f = l;
                e.pixelStorei(e.UNPACK_SKIP_PIXELS, u),
                e.pixelStorei(e.UNPACK_SKIP_ROWS, d),
                n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data)
            }
            t.clearUpdateRanges(),
            e.pixelStorei(e.UNPACK_ROW_LENGTH, c),
            e.pixelStorei(e.UNPACK_SKIP_PIXELS, l),
            e.pixelStorei(e.UNPACK_SKIP_ROWS, u)
        }
    }
    function he(t, r, i) {
        let a = e.TEXTURE_2D;
        (r.isDataArrayTexture || r.isCompressedArrayTexture) && (a = e.TEXTURE_2D_ARRAY),
        r.isData3DTexture && (a = e.TEXTURE_3D);
        let o = fe(t, r)
          , s = r.source;
        n.bindTexture(a, t.__webglTexture, e.TEXTURE0 + i);
        let c = f.get(s);
        if (s.version !== c.__version || o === !0) {
            n.activeTexture(e.TEXTURE0 + i);
            let t = Ot.getPrimaries(Ot.workingColorSpace)
              , l = r.colorSpace === `` ? null : Ot.getPrimaries(r.colorSpace)
              , u = r.colorSpace === `` || t === l ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
            e.pixelStorei(e.UNPACK_ALIGNMENT, r.unpackAlignment),
            e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
            let d = w(r.image, !1, p.maxTextureSize);
            d = ke(r, d);
            let f = m.convert(r.format, r.colorSpace)
              , h = m.convert(r.type)
              , g = O(r.internalFormat, f, h, r.colorSpace, r.isVideoTexture);
            de(a, r);
            let _, v = r.mipmaps, y = r.isVideoTexture !== !0, b = c.__version === void 0 || o === !0, x = s.dataReady, S = j(r, d);
            if (r.isDepthTexture)
                g = A(r.format === k, r.type),
                b && (y ? n.texStorage2D(e.TEXTURE_2D, 1, g, d.width, d.height) : n.texImage2D(e.TEXTURE_2D, 0, g, d.width, d.height, 0, f, h, null));
            else if (r.isDataTexture)
                if (v.length > 0) {
                    y && b && n.texStorage2D(e.TEXTURE_2D, S, g, v[0].width, v[0].height);
                    for (let t = 0, r = v.length; t < r; t++)
                        _ = v[t],
                        y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, f, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, f, h, _.data);
                    r.generateMipmaps = !1
                } else
                    y ? (b && n.texStorage2D(e.TEXTURE_2D, S, g, d.width, d.height),
                    x && me(r, d, f, h)) : n.texImage2D(e.TEXTURE_2D, 0, g, d.width, d.height, 0, f, h, d.data);
            else if (r.isCompressedTexture)
                if (r.isCompressedArrayTexture) {
                    y && b && n.texStorage3D(e.TEXTURE_2D_ARRAY, S, g, v[0].width, v[0].height, d.depth);
                    for (let t = 0, i = v.length; t < i; t++)
                        if (_ = v[t],
                        r.format !== 1023)
                            if (f !== null)
                                if (y) {
                                    if (x)
                                        if (r.layerUpdates.size > 0) {
                                            let i = Zs(_.width, _.height, r.format, r.type);
                                            for (let a of r.layerUpdates) {
                                                let r = _.data.subarray(a * i / _.data.BYTES_PER_ELEMENT, (a + 1) * i / _.data.BYTES_PER_ELEMENT);
                                                n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, a, _.width, _.height, 1, f, r)
                                            }
                                            r.clearLayerUpdates()
                                        } else
                                            n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, d.depth, f, _.data)
                                } else
                                    n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, d.depth, 0, _.data, 0, 0);
                            else
                                U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);
                        else
                            y ? x && n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, _.width, _.height, d.depth, f, h, _.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, t, g, _.width, _.height, d.depth, 0, f, h, _.data)
                } else {
                    y && b && n.texStorage2D(e.TEXTURE_2D, S, g, v[0].width, v[0].height);
                    for (let t = 0, i = v.length; t < i; t++)
                        _ = v[t],
                        r.format === 1023 ? y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, f, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, f, h, _.data) : f === null ? U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`) : y ? x && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, f, _.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, _.data)
                }
            else if (r.isDataArrayTexture)
                if (y) {
                    if (b && n.texStorage3D(e.TEXTURE_2D_ARRAY, S, g, d.width, d.height, d.depth),
                    x)
                        if (r.layerUpdates.size > 0) {
                            let t = Zs(d.width, d.height, r.format, r.type);
                            for (let i of r.layerUpdates) {
                                let r = d.data.subarray(i * t / d.data.BYTES_PER_ELEMENT, (i + 1) * t / d.data.BYTES_PER_ELEMENT);
                                n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, d.width, d.height, 1, f, h, r)
                            }
                            r.clearLayerUpdates()
                        } else
                            n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, d.width, d.height, d.depth, f, h, d.data)
                } else
                    n.texImage3D(e.TEXTURE_2D_ARRAY, 0, g, d.width, d.height, d.depth, 0, f, h, d.data);
            else if (r.isData3DTexture)
                y ? (b && n.texStorage3D(e.TEXTURE_3D, S, g, d.width, d.height, d.depth),
                x && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, d.width, d.height, d.depth, f, h, d.data)) : n.texImage3D(e.TEXTURE_3D, 0, g, d.width, d.height, d.depth, 0, f, h, d.data);
            else if (r.isFramebufferTexture) {
                if (b)
                    if (y)
                        n.texStorage2D(e.TEXTURE_2D, S, g, d.width, d.height);
                    else {
                        let t = d.width
                          , r = d.height;
                        for (let i = 0; i < S; i++)
                            n.texImage2D(e.TEXTURE_2D, i, g, t, r, 0, f, h, null),
                            t >>= 1,
                            r >>= 1
                    }
            } else if (v.length > 0) {
                if (y && b) {
                    let t = R(v[0]);
                    n.texStorage2D(e.TEXTURE_2D, S, g, t.width, t.height)
                }
                for (let t = 0, r = v.length; t < r; t++)
                    _ = v[t],
                    y ? x && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f, h, _) : n.texImage2D(e.TEXTURE_2D, t, g, f, h, _);
                r.generateMipmaps = !1
            } else if (y) {
                if (b) {
                    let t = R(d);
                    n.texStorage2D(e.TEXTURE_2D, S, g, t.width, t.height)
                }
                x && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, f, h, d)
            } else
                n.texImage2D(e.TEXTURE_2D, 0, g, f, h, d);
            T(r) && E(a),
            c.__version = s.version,
            r.onUpdate && r.onUpdate(r)
        }
        t.__version = r.version
    }
    function ge(t, r, i) {
        if (r.image.length !== 6)
            return;
        let a = fe(t, r)
          , o = r.source;
        n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + i);
        let s = f.get(o);
        if (o.version !== s.__version || a === !0) {
            n.activeTexture(e.TEXTURE0 + i);
            let t = Ot.getPrimaries(Ot.workingColorSpace)
              , c = r.colorSpace === `` ? null : Ot.getPrimaries(r.colorSpace)
              , l = r.colorSpace === `` || t === c ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
            e.pixelStorei(e.UNPACK_ALIGNMENT, r.unpackAlignment),
            e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, l);
            let u = r.isCompressedTexture || r.image[0].isCompressedTexture
              , d = r.image[0] && r.image[0].isDataTexture
              , f = [];
            for (let e = 0; e < 6; e++)
                !u && !d ? f[e] = w(r.image[e], !0, p.maxCubemapSize) : f[e] = d ? r.image[e].image : r.image[e],
                f[e] = ke(r, f[e]);
            let h = f[0]
              , g = m.convert(r.format, r.colorSpace)
              , _ = m.convert(r.type)
              , v = O(r.internalFormat, g, _, r.colorSpace)
              , y = r.isVideoTexture !== !0
              , b = s.__version === void 0 || a === !0
              , x = o.dataReady
              , S = j(r, h);
            de(e.TEXTURE_CUBE_MAP, r);
            let C;
            if (u) {
                y && b && n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
                for (let t = 0; t < 6; t++) {
                    C = f[t].mipmaps;
                    for (let i = 0; i < C.length; i++) {
                        let a = C[i];
                        r.format === 1023 ? y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i, 0, 0, a.width, a.height, g, _, a.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i, v, a.width, a.height, 0, g, _, a.data) : g === null ? U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`) : y ? x && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i, 0, 0, a.width, a.height, g, a.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, i, v, a.width, a.height, 0, a.data)
                    }
                }
            } else {
                if (C = r.mipmaps,
                y && b) {
                    C.length > 0 && S++;
                    let t = R(f[0]);
                    n.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height)
                }
                for (let t = 0; t < 6; t++)
                    if (d) {
                        y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, f[t].width, f[t].height, g, _, f[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, f[t].width, f[t].height, 0, g, _, f[t].data);
                        for (let r = 0; r < C.length; r++) {
                            let i = C[r].image[t].image;
                            y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, v, i.width, i.height, 0, g, _, i.data)
                        }
                    } else {
                        y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, f[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, g, _, f[t]);
                        for (let r = 0; r < C.length; r++) {
                            let i = C[r];
                            y ? x && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, g, _, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, v, g, _, i.image[t])
                        }
                    }
            }
            T(r) && E(e.TEXTURE_CUBE_MAP),
            s.__version = o.version,
            r.onUpdate && r.onUpdate(r)
        }
        t.__version = r.version
    }
    function _e(t, r, i, a, o, s) {
        let c = m.convert(i.format, i.colorSpace)
          , l = m.convert(i.type)
          , u = O(i.internalFormat, c, l, i.colorSpace)
          , d = f.get(r)
          , p = f.get(i);
        if (p.__renderTarget = r,
        !d.__hasExternalTextures) {
            let t = Math.max(1, r.width >> s)
              , i = Math.max(1, r.height >> s);
            o === e.TEXTURE_3D || o === e.TEXTURE_2D_ARRAY ? n.texImage3D(o, s, u, t, i, r.depth, 0, c, l, null) : n.texImage2D(o, s, u, t, i, 0, c, l, null)
        }
        n.bindFramebuffer(e.FRAMEBUFFER, t),
        De(r) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, a, o, p.__webglTexture, 0, L(r)) : (o === e.TEXTURE_2D || o >= e.TEXTURE_CUBE_MAP_POSITIVE_X && o <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, a, o, p.__webglTexture, s),
        n.bindFramebuffer(e.FRAMEBUFFER, null)
    }
    function ve(t, n, r) {
        if (e.bindRenderbuffer(e.RENDERBUFFER, t),
        n.depthBuffer) {
            let i = n.depthTexture
              , a = i && i.isDepthTexture ? i.type : null
              , o = A(n.stencilBuffer, a)
              , s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
            De(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, L(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, L(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t)
        } else {
            let t = n.textures;
            for (let i = 0; i < t.length; i++) {
                let a = t[i]
                  , o = m.convert(a.format, a.colorSpace)
                  , s = m.convert(a.type)
                  , c = O(a.internalFormat, o, s, a.colorSpace);
                De(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, L(n), c, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, L(n), c, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, c, n.width, n.height)
            }
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null)
    }
    function ye(t, r, i) {
        let a = r.isWebGLCubeRenderTarget === !0;
        if (n.bindFramebuffer(e.FRAMEBUFFER, t),
        !(r.depthTexture && r.depthTexture.isDepthTexture))
            throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);
        let o = f.get(r.depthTexture);
        if (o.__renderTarget = r,
        (!o.__webglTexture || r.depthTexture.image.width !== r.width || r.depthTexture.image.height !== r.height) && (r.depthTexture.image.width = r.width,
        r.depthTexture.image.height = r.height,
        r.depthTexture.needsUpdate = !0),
        a) {
            if (o.__webglInit === void 0 && (o.__webglInit = !0,
            r.depthTexture.addEventListener(`dispose`, M)),
            o.__webglTexture === void 0) {
                o.__webglTexture = e.createTexture(),
                n.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture),
                de(e.TEXTURE_CUBE_MAP, r.depthTexture);
                let t = m.convert(r.depthTexture.format), i = m.convert(r.depthTexture.type), a;
                r.depthTexture.format === 1026 ? a = e.DEPTH_COMPONENT24 : r.depthTexture.format === 1027 && (a = e.DEPTH24_STENCIL8);
                for (let n = 0; n < 6; n++)
                    e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, a, r.width, r.height, 0, t, i, null)
            }
        } else
            ae(r.depthTexture, 0);
        let s = o.__webglTexture
          , c = L(r)
          , l = a ? e.TEXTURE_CUBE_MAP_POSITIVE_X + i : e.TEXTURE_2D
          , u = r.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        if (r.depthTexture.format === 1026)
            De(r) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, u, l, s, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, u, l, s, 0);
        else if (r.depthTexture.format === 1027)
            De(r) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, u, l, s, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, u, l, s, 0);
        else
            throw Error(`Unknown depthTexture format`)
    }
    function be(t) {
        let r = f.get(t)
          , i = t.isWebGLCubeRenderTarget === !0;
        if (r.__boundDepthTexture !== t.depthTexture) {
            let e = t.depthTexture;
            if (r.__depthDisposeCallback && r.__depthDisposeCallback(),
            e) {
                let t = () => {
                    delete r.__boundDepthTexture,
                    delete r.__depthDisposeCallback,
                    e.removeEventListener(`dispose`, t)
                }
                ;
                e.addEventListener(`dispose`, t),
                r.__depthDisposeCallback = t
            }
            r.__boundDepthTexture = e
        }
        if (t.depthTexture && !r.__autoAllocateDepthBuffer)
            if (i)
                for (let e = 0; e < 6; e++)
                    ye(r.__webglFramebuffer[e], t, e);
            else {
                let e = t.texture.mipmaps;
                e && e.length > 0 ? ye(r.__webglFramebuffer[0], t, 0) : ye(r.__webglFramebuffer, t, 0)
            }
        else if (i) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
                if (n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[i]),
                r.__webglDepthbuffer[i] === void 0)
                    r.__webglDepthbuffer[i] = e.createRenderbuffer(),
                    ve(r.__webglDepthbuffer[i], t, !1);
                else {
                    let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
                      , a = r.__webglDepthbuffer[i];
                    e.bindRenderbuffer(e.RENDERBUFFER, a),
                    e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a)
                }
        } else {
            let i = t.texture.mipmaps;
            if (i && i.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
            r.__webglDepthbuffer === void 0)
                r.__webglDepthbuffer = e.createRenderbuffer(),
                ve(r.__webglDepthbuffer, t, !1);
            else {
                let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
                  , i = r.__webglDepthbuffer;
                e.bindRenderbuffer(e.RENDERBUFFER, i),
                e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, i)
            }
        }
        n.bindFramebuffer(e.FRAMEBUFFER, null)
    }
    function xe(t, n, r) {
        let i = f.get(t);
        n !== void 0 && _e(i.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0),
        r !== void 0 && be(t)
    }
    function Se(t) {
        let r = t.texture
          , i = f.get(t)
          , a = f.get(r);
        t.addEventListener(`dispose`, N);
        let o = t.textures
          , s = t.isWebGLCubeRenderTarget === !0
          , c = o.length > 1;
        if (c || (a.__webglTexture === void 0 && (a.__webglTexture = e.createTexture()),
        a.__version = r.version,
        h.memory.textures++),
        s) {
            i.__webglFramebuffer = [];
            for (let t = 0; t < 6; t++)
                if (r.mipmaps && r.mipmaps.length > 0) {
                    i.__webglFramebuffer[t] = [];
                    for (let n = 0; n < r.mipmaps.length; n++)
                        i.__webglFramebuffer[t][n] = e.createFramebuffer()
                } else
                    i.__webglFramebuffer[t] = e.createFramebuffer()
        } else {
            if (r.mipmaps && r.mipmaps.length > 0) {
                i.__webglFramebuffer = [];
                for (let t = 0; t < r.mipmaps.length; t++)
                    i.__webglFramebuffer[t] = e.createFramebuffer()
            } else
                i.__webglFramebuffer = e.createFramebuffer();
            if (c)
                for (let t = 0, n = o.length; t < n; t++) {
                    let n = f.get(o[t]);
                    n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(),
                    h.memory.textures++)
                }
            if (t.samples > 0 && De(t) === !1) {
                i.__webglMultisampledFramebuffer = e.createFramebuffer(),
                i.__webglColorRenderbuffer = [],
                n.bindFramebuffer(e.FRAMEBUFFER, i.__webglMultisampledFramebuffer);
                for (let n = 0; n < o.length; n++) {
                    let r = o[n];
                    i.__webglColorRenderbuffer[n] = e.createRenderbuffer(),
                    e.bindRenderbuffer(e.RENDERBUFFER, i.__webglColorRenderbuffer[n]);
                    let a = m.convert(r.format, r.colorSpace)
                      , s = m.convert(r.type)
                      , c = O(r.internalFormat, a, s, r.colorSpace, t.isXRRenderTarget === !0)
                      , l = L(t);
                    e.renderbufferStorageMultisample(e.RENDERBUFFER, l, c, t.width, t.height),
                    e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, i.__webglColorRenderbuffer[n])
                }
                e.bindRenderbuffer(e.RENDERBUFFER, null),
                t.depthBuffer && (i.__webglDepthRenderbuffer = e.createRenderbuffer(),
                ve(i.__webglDepthRenderbuffer, t, !0)),
                n.bindFramebuffer(e.FRAMEBUFFER, null)
            }
        }
        if (s) {
            n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
            de(e.TEXTURE_CUBE_MAP, r);
            for (let n = 0; n < 6; n++)
                if (r.mipmaps && r.mipmaps.length > 0)
                    for (let a = 0; a < r.mipmaps.length; a++)
                        _e(i.__webglFramebuffer[n][a], t, r, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, a);
                else
                    _e(i.__webglFramebuffer[n], t, r, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
            T(r) && E(e.TEXTURE_CUBE_MAP),
            n.unbindTexture()
        } else if (c) {
            for (let r = 0, a = o.length; r < a; r++) {
                let a = o[r]
                  , s = f.get(a)
                  , c = e.TEXTURE_2D;
                (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
                n.bindTexture(c, s.__webglTexture),
                de(c, a),
                _e(i.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + r, c, 0),
                T(a) && E(c)
            }
            n.unbindTexture()
        } else {
            let o = e.TEXTURE_2D;
            if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (o = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
            n.bindTexture(o, a.__webglTexture),
            de(o, r),
            r.mipmaps && r.mipmaps.length > 0)
                for (let n = 0; n < r.mipmaps.length; n++)
                    _e(i.__webglFramebuffer[n], t, r, e.COLOR_ATTACHMENT0, o, n);
            else
                _e(i.__webglFramebuffer, t, r, e.COLOR_ATTACHMENT0, o, 0);
            T(r) && E(o),
            n.unbindTexture()
        }
        t.depthBuffer && be(t)
    }
    function Ce(e) {
        let t = e.textures;
        for (let r = 0, i = t.length; r < i; r++) {
            let i = t[r];
            if (T(i)) {
                let t = D(e)
                  , r = f.get(i).__webglTexture;
                n.bindTexture(t, r),
                E(t),
                n.unbindTexture()
            }
        }
    }
    let we = []
      , Te = [];
    function Ee(t) {
        if (t.samples > 0) {
            if (De(t) === !1) {
                let r = t.textures
                  , i = t.width
                  , a = t.height
                  , o = e.COLOR_BUFFER_BIT
                  , s = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
                  , c = f.get(t)
                  , l = r.length > 1;
                if (l)
                    for (let t = 0; t < r.length; t++)
                        n.bindFramebuffer(e.FRAMEBUFFER, c.__webglMultisampledFramebuffer),
                        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null),
                        n.bindFramebuffer(e.FRAMEBUFFER, c.__webglFramebuffer),
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
                n.bindFramebuffer(e.READ_FRAMEBUFFER, c.__webglMultisampledFramebuffer);
                let u = t.texture.mipmaps;
                u && u.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, c.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, c.__webglFramebuffer);
                for (let n = 0; n < r.length; n++) {
                    if (t.resolveDepthBuffer && (t.depthBuffer && (o |= e.DEPTH_BUFFER_BIT),
                    t.stencilBuffer && t.resolveStencilBuffer && (o |= e.STENCIL_BUFFER_BIT)),
                    l) {
                        e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
                        let t = f.get(r[n]).__webglTexture;
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0)
                    }
                    e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, e.NEAREST),
                    _ === !0 && (we.length = 0,
                    Te.length = 0,
                    we.push(e.COLOR_ATTACHMENT0 + n),
                    t.depthBuffer && t.resolveDepthBuffer === !1 && (we.push(s),
                    Te.push(s),
                    e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Te)),
                    e.invalidateFramebuffer(e.READ_FRAMEBUFFER, we))
                }
                if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null),
                n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
                l)
                    for (let t = 0; t < r.length; t++) {
                        n.bindFramebuffer(e.FRAMEBUFFER, c.__webglMultisampledFramebuffer),
                        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, c.__webglColorRenderbuffer[t]);
                        let i = f.get(r[t]).__webglTexture;
                        n.bindFramebuffer(e.FRAMEBUFFER, c.__webglFramebuffer),
                        e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, i, 0)
                    }
                n.bindFramebuffer(e.DRAW_FRAMEBUFFER, c.__webglMultisampledFramebuffer)
            } else if (t.depthBuffer && t.resolveDepthBuffer === !1 && _) {
                let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n])
            }
        }
    }
    function L(e) {
        return Math.min(p.maxSamples, e.samples)
    }
    function De(e) {
        let n = f.get(e);
        return e.samples > 0 && t.has(`WEBGL_multisampled_render_to_texture`) === !0 && n.__useRenderToTexture !== !1
    }
    function Oe(e) {
        let t = h.render.frame;
        y.get(e) !== t && (y.set(e, t),
        e.update())
    }
    function ke(e, t) {
        let n = e.colorSpace
          , r = e.format
          , i = e.type;
        return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== `srgb-linear` && n !== `` && (Ot.getTransfer(n) === `srgb` ? (r !== 1023 || i !== 1009) && U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`) : W(`WebGLTextures: Unsupported texture color space:`, n)),
        t
    }
    function R(e) {
        return typeof HTMLImageElement < `u` && e instanceof HTMLImageElement ? (v.width = e.naturalWidth || e.width,
        v.height = e.naturalHeight || e.height) : typeof VideoFrame < `u` && e instanceof VideoFrame ? (v.width = e.displayWidth,
        v.height = e.displayHeight) : (v.width = e.width,
        v.height = e.height),
        v
    }
    this.allocateTextureUnit = ie,
    this.resetTextureUnits = re,
    this.setTexture2D = ae,
    this.setTexture2DArray = oe,
    this.setTexture3D = se,
    this.setTextureCube = I,
    this.rebindTextures = xe,
    this.setupRenderTarget = Se,
    this.updateRenderTargetMipmap = Ce,
    this.updateMultisampleRenderTarget = Ee,
    this.setupDepthRenderbuffer = be,
    this.setupFrameBufferTexture = _e,
    this.useMultisampledRTT = De,
    this.isReversedDepthBuffer = function() {
        return n.buffers.depth.getReversed()
    }
}
function rd(e, t) {
    function n(n, r=``) {
        let i, a = Ot.getTransfer(r);
        if (n === 1009)
            return e.UNSIGNED_BYTE;
        if (n === 1017)
            return e.UNSIGNED_SHORT_4_4_4_4;
        if (n === 1018)
            return e.UNSIGNED_SHORT_5_5_5_1;
        if (n === 35902)
            return e.UNSIGNED_INT_5_9_9_9_REV;
        if (n === 35899)
            return e.UNSIGNED_INT_10F_11F_11F_REV;
        if (n === 1010)
            return e.BYTE;
        if (n === 1011)
            return e.SHORT;
        if (n === 1012)
            return e.UNSIGNED_SHORT;
        if (n === 1013)
            return e.INT;
        if (n === 1014)
            return e.UNSIGNED_INT;
        if (n === 1015)
            return e.FLOAT;
        if (n === 1016)
            return e.HALF_FLOAT;
        if (n === 1021)
            return e.ALPHA;
        if (n === 1022)
            return e.RGB;
        if (n === 1023)
            return e.RGBA;
        if (n === 1026)
            return e.DEPTH_COMPONENT;
        if (n === 1027)
            return e.DEPTH_STENCIL;
        if (n === 1028)
            return e.RED;
        if (n === 1029)
            return e.RED_INTEGER;
        if (n === 1030)
            return e.RG;
        if (n === 1031)
            return e.RG_INTEGER;
        if (n === 1033)
            return e.RGBA_INTEGER;
        if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
            if (a === `srgb`)
                if (i = t.get(`WEBGL_compressed_texture_s3tc_srgb`),
                i !== null) {
                    if (n === 33776)
                        return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === 33777)
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === 33778)
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === 33779)
                        return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (i = t.get(`WEBGL_compressed_texture_s3tc`),
            i !== null) {
                if (n === 33776)
                    return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === 33777)
                    return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === 33778)
                    return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === 33779)
                    return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
            if (i = t.get(`WEBGL_compressed_texture_pvrtc`),
            i !== null) {
                if (n === 35840)
                    return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === 35841)
                    return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === 35842)
                    return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === 35843)
                    return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
            if (i = t.get(`WEBGL_compressed_texture_etc`),
            i !== null) {
                if (n === 36196 || n === 37492)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
                if (n === 37496)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
                if (n === 37488)
                    return i.COMPRESSED_R11_EAC;
                if (n === 37489)
                    return i.COMPRESSED_SIGNED_R11_EAC;
                if (n === 37490)
                    return i.COMPRESSED_RG11_EAC;
                if (n === 37491)
                    return i.COMPRESSED_SIGNED_RG11_EAC
            } else
                return null;
        if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
            if (i = t.get(`WEBGL_compressed_texture_astc`),
            i !== null) {
                if (n === 37808)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === 37809)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === 37810)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === 37811)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === 37812)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === 37813)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === 37814)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === 37815)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === 37816)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === 37817)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === 37818)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === 37819)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === 37820)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === 37821)
                    return a === `srgb` ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === 36492 || n === 36494 || n === 36495)
            if (i = t.get(`EXT_texture_compression_bptc`),
            i !== null) {
                if (n === 36492)
                    return a === `srgb` ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === 36494)
                    return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === 36495)
                    return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
            if (i = t.get(`EXT_texture_compression_rgtc`),
            i !== null) {
                if (n === 36283)
                    return i.COMPRESSED_RED_RGTC1_EXT;
                if (n === 36284)
                    return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === 36285)
                    return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === 36286)
                    return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n]
    }
    return {
        convert: n
    }
}
var id = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , ad = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`
  , od = class {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t) {
        if (this.texture === null) {
            let n = new va(e.texture);
            (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear,
            this.depthFar = e.depthFar),
            this.texture = n
        }
    }
    getMesh(e) {
        if (this.texture !== null && this.mesh === null) {
            let t = e.cameras[0].viewport
              , n = new Xr({
                vertexShader: id,
                fragmentShader: ad,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: t.z
                    },
                    depthHeight: {
                        value: t.w
                    }
                }
            });
            this.mesh = new Q(new Ho(20,20),n)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
  , sd = class extends Xe {
    constructor(e, t) {
        super();
        let n = this
          , r = null
          , i = 1
          , a = null
          , o = `local-floor`
          , s = 1
          , c = null
          , l = null
          , u = null
          , d = null
          , p = null
          , m = null
          , h = typeof XRWebGLBinding < `u`
          , g = new od
          , v = {}
          , y = t.getContextAttributes()
          , b = null
          , x = null
          , C = []
          , w = []
          , T = new J
          , E = null
          , A = new ti;
        A.viewport = new zt;
        let j = new ti;
        j.viewport = new zt;
        let M = [A, j]
          , N = new Ts
          , ee = null
          , P = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(e) {
            let t = C[e];
            return t === void 0 && (t = new li,
            C[e] = t),
            t.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(e) {
            let t = C[e];
            return t === void 0 && (t = new li,
            C[e] = t),
            t.getGripSpace()
        }
        ,
        this.getHand = function(e) {
            let t = C[e];
            return t === void 0 && (t = new li,
            C[e] = t),
            t.getHandSpace()
        }
        ;
        function te(e) {
            let t = w.indexOf(e.inputSource);
            if (t === -1)
                return;
            let n = C[t];
            n !== void 0 && (n.update(e.inputSource, e.frame, c || a),
            n.dispatchEvent({
                type: e.type,
                data: e.inputSource
            }))
        }
        function ne() {
            r.removeEventListener(`select`, te),
            r.removeEventListener(`selectstart`, te),
            r.removeEventListener(`selectend`, te),
            r.removeEventListener(`squeeze`, te),
            r.removeEventListener(`squeezestart`, te),
            r.removeEventListener(`squeezeend`, te),
            r.removeEventListener(`end`, ne),
            r.removeEventListener(`inputsourceschange`, re);
            for (let e = 0; e < C.length; e++) {
                let t = w[e];
                t !== null && (w[e] = null,
                C[e].disconnect(t))
            }
            ee = null,
            P = null,
            g.reset();
            for (let e in v)
                delete v[e];
            e.setRenderTarget(b),
            p = null,
            d = null,
            u = null,
            r = null,
            x = null,
            le.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(E),
            e.setSize(T.width, T.height, !1),
            n.dispatchEvent({
                type: `sessionend`
            })
        }
        this.setFramebufferScaleFactor = function(e) {
            i = e,
            n.isPresenting === !0 && U(`WebXRManager: Cannot change framebuffer scale while presenting.`)
        }
        ,
        this.setReferenceSpaceType = function(e) {
            o = e,
            n.isPresenting === !0 && U(`WebXRManager: Cannot change reference space type while presenting.`)
        }
        ,
        this.getReferenceSpace = function() {
            return c || a
        }
        ,
        this.setReferenceSpace = function(e) {
            c = e
        }
        ,
        this.getBaseLayer = function() {
            return d === null ? p : d
        }
        ,
        this.getBinding = function() {
            return u === null && h && (u = new XRWebGLBinding(r,t)),
            u
        }
        ,
        this.getFrame = function() {
            return m
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(l) {
            if (r = l,
            r !== null) {
                if (b = e.getRenderTarget(),
                r.addEventListener(`select`, te),
                r.addEventListener(`selectstart`, te),
                r.addEventListener(`selectend`, te),
                r.addEventListener(`squeeze`, te),
                r.addEventListener(`squeezestart`, te),
                r.addEventListener(`squeezeend`, te),
                r.addEventListener(`end`, ne),
                r.addEventListener(`inputsourceschange`, re),
                y.xrCompatible !== !0 && await t.makeXRCompatible(),
                E = e.getPixelRatio(),
                e.getSize(T),
                h && `createProjectionLayer` in XRWebGLBinding.prototype) {
                    let n = null
                      , a = null
                      , o = null;
                    y.depth && (o = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    n = y.stencil ? k : O,
                    a = y.stencil ? S : _);
                    let s = {
                        colorFormat: t.RGBA8,
                        depthFormat: o,
                        scaleFactor: i
                    };
                    u = this.getBinding(),
                    d = u.createProjectionLayer(s),
                    r.updateRenderState({
                        layers: [d]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(d.textureWidth, d.textureHeight, !1),
                    x = new Vt(d.textureWidth,d.textureHeight,{
                        format: D,
                        type: f,
                        depthTexture: new ga(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),
                        stencilBuffer: y.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: y.antialias ? 4 : 0,
                        resolveDepthBuffer: d.ignoreDepthValues === !1,
                        resolveStencilBuffer: d.ignoreDepthValues === !1
                    })
                } else {
                    let n = {
                        antialias: y.antialias,
                        alpha: !0,
                        depth: y.depth,
                        stencil: y.stencil,
                        framebufferScaleFactor: i
                    };
                    p = new XRWebGLLayer(r,t,n),
                    r.updateRenderState({
                        baseLayer: p
                    }),
                    e.setPixelRatio(1),
                    e.setSize(p.framebufferWidth, p.framebufferHeight, !1),
                    x = new Vt(p.framebufferWidth,p.framebufferHeight,{
                        format: D,
                        type: f,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: y.stencil,
                        resolveDepthBuffer: p.ignoreDepthValues === !1,
                        resolveStencilBuffer: p.ignoreDepthValues === !1
                    })
                }
                x.isXRRenderTarget = !0,
                this.setFoveation(s),
                c = null,
                a = await r.requestReferenceSpace(o),
                le.setContext(r),
                le.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: `sessionstart`
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (r !== null)
                return r.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return g.getDepthTexture()
        }
        ;
        function re(e) {
            for (let t = 0; t < e.removed.length; t++) {
                let n = e.removed[t]
                  , r = w.indexOf(n);
                r >= 0 && (w[r] = null,
                C[r].disconnect(n))
            }
            for (let t = 0; t < e.added.length; t++) {
                let n = e.added[t]
                  , r = w.indexOf(n);
                if (r === -1) {
                    for (let e = 0; e < C.length; e++)
                        if (e >= w.length) {
                            w.push(n),
                            r = e;
                            break
                        } else if (w[e] === null) {
                            w[e] = n,
                            r = e;
                            break
                        }
                    if (r === -1)
                        break
                }
                let i = C[r];
                i && i.connect(n)
            }
        }
        let ie = new Y
          , F = new Y;
        function ae(e, t, n) {
            ie.setFromMatrixPosition(t.matrixWorld),
            F.setFromMatrixPosition(n.matrixWorld);
            let r = ie.distanceTo(F)
              , i = t.projectionMatrix.elements
              , a = n.projectionMatrix.elements
              , o = i[14] / (i[10] - 1)
              , s = i[14] / (i[10] + 1)
              , c = (i[9] + 1) / i[5]
              , l = (i[9] - 1) / i[5]
              , u = (i[8] - 1) / i[0]
              , d = (a[8] + 1) / a[0]
              , f = o * u
              , p = o * d
              , m = r / (-u + d)
              , h = m * -u;
            if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
            e.translateX(h),
            e.translateZ(m),
            e.matrixWorld.compose(e.position, e.quaternion, e.scale),
            e.matrixWorldInverse.copy(e.matrixWorld).invert(),
            i[10] === -1)
                e.projectionMatrix.copy(t.projectionMatrix),
                e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
            else {
                let t = o + m
                  , n = s + m
                  , i = f - h
                  , a = p + (r - h)
                  , u = c * s / n * t
                  , d = l * s / n * t;
                e.projectionMatrix.makePerspective(i, a, u, d, t, n),
                e.projectionMatrixInverse.copy(e.projectionMatrix).invert()
            }
        }
        function oe(e, t) {
            t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
            e.matrixWorldInverse.copy(e.matrixWorld).invert()
        }
        this.updateCamera = function(e) {
            if (r === null)
                return;
            let t = e.near
              , n = e.far;
            g.texture !== null && (g.depthNear > 0 && (t = g.depthNear),
            g.depthFar > 0 && (n = g.depthFar)),
            N.near = j.near = A.near = t,
            N.far = j.far = A.far = n,
            (ee !== N.near || P !== N.far) && (r.updateRenderState({
                depthNear: N.near,
                depthFar: N.far
            }),
            ee = N.near,
            P = N.far),
            N.layers.mask = e.layers.mask | 6,
            A.layers.mask = N.layers.mask & 3,
            j.layers.mask = N.layers.mask & 5;
            let i = e.parent
              , a = N.cameras;
            oe(N, i);
            for (let e = 0; e < a.length; e++)
                oe(a[e], i);
            a.length === 2 ? ae(N, A, j) : N.projectionMatrix.copy(A.projectionMatrix),
            se(e, N, i)
        }
        ;
        function se(e, t, n) {
            n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld),
            e.matrix.invert(),
            e.matrix.multiply(t.matrixWorld)),
            e.matrix.decompose(e.position, e.quaternion, e.scale),
            e.updateMatrixWorld(!0),
            e.projectionMatrix.copy(t.projectionMatrix),
            e.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            e.isPerspectiveCamera && (e.fov = et * 2 * Math.atan(1 / e.projectionMatrix.elements[5]),
            e.zoom = 1)
        }
        this.getCamera = function() {
            return N
        }
        ,
        this.getFoveation = function() {
            if (!(d === null && p === null))
                return s
        }
        ,
        this.setFoveation = function(e) {
            s = e,
            d !== null && (d.fixedFoveation = e),
            p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e)
        }
        ,
        this.hasDepthSensing = function() {
            return g.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return g.getMesh(N)
        }
        ,
        this.getCameraTexture = function(e) {
            return v[e]
        }
        ;
        let I = null;
        function ce(t, i) {
            if (l = i.getViewerPose(c || a),
            m = i,
            l !== null) {
                let t = l.views;
                p !== null && (e.setRenderTargetFramebuffer(x, p.framebuffer),
                e.setRenderTarget(x));
                let i = !1;
                t.length !== N.cameras.length && (N.cameras.length = 0,
                i = !0);
                for (let n = 0; n < t.length; n++) {
                    let r = t[n]
                      , a = null;
                    if (p !== null)
                        a = p.getViewport(r);
                    else {
                        let t = u.getViewSubImage(d, r);
                        a = t.viewport,
                        n === 0 && (e.setRenderTargetTextures(x, t.colorTexture, t.depthStencilTexture),
                        e.setRenderTarget(x))
                    }
                    let o = M[n];
                    o === void 0 && (o = new ti,
                    o.layers.enable(n),
                    o.viewport = new zt,
                    M[n] = o),
                    o.matrix.fromArray(r.transform.matrix),
                    o.matrix.decompose(o.position, o.quaternion, o.scale),
                    o.projectionMatrix.fromArray(r.projectionMatrix),
                    o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),
                    o.viewport.set(a.x, a.y, a.width, a.height),
                    n === 0 && (N.matrix.copy(o.matrix),
                    N.matrix.decompose(N.position, N.quaternion, N.scale)),
                    i === !0 && N.cameras.push(o)
                }
                let a = r.enabledFeatures;
                if (a && a.includes(`depth-sensing`) && r.depthUsage == `gpu-optimized` && h) {
                    u = n.getBinding();
                    let e = u.getDepthInformation(t[0]);
                    e && e.isValid && e.texture && g.init(e, r.renderState)
                }
                if (a && a.includes(`camera-access`) && h) {
                    e.state.unbindTexture(),
                    u = n.getBinding();
                    for (let e = 0; e < t.length; e++) {
                        let n = t[e].camera;
                        if (n) {
                            let e = v[n];
                            e || (e = new va,
                            v[n] = e);
                            let t = u.getCameraImage(n);
                            e.sourceTexture = t
                        }
                    }
                }
            }
            for (let e = 0; e < C.length; e++) {
                let t = w[e]
                  , n = C[e];
                t !== null && n !== void 0 && n.update(t, i, c || a)
            }
            I && I(t, i),
            i.detectedPlanes && n.dispatchEvent({
                type: `planesdetected`,
                data: i
            }),
            m = null
        }
        let le = new $s;
        le.setAnimationLoop(ce),
        this.setAnimationLoop = function(e) {
            I = e
        }
        ,
        this.dispose = function() {}
    }
}
  , cd = new On
  , ld = new vn;
function ud(e, t) {
    function n(e, t) {
        e.matrixAutoUpdate === !0 && e.updateMatrix(),
        t.value.copy(e.matrix)
    }
    function r(t, n) {
        n.color.getRGB(t.fogColor.value, Kr(e)),
        n.isFog ? (t.fogNear.value = n.near,
        t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density)
    }
    function i(e, t, n, r, i) {
        t.isMeshBasicMaterial || t.isMeshLambertMaterial ? a(e, t) : t.isMeshToonMaterial ? (a(e, t),
        d(e, t)) : t.isMeshPhongMaterial ? (a(e, t),
        u(e, t)) : t.isMeshStandardMaterial ? (a(e, t),
        f(e, t),
        t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t),
        m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t),
        h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t),
        t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color),
        e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1)
    }
    function a(e, r) {
        e.opacity.value = r.opacity,
        r.color && e.diffuse.value.copy(r.color),
        r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
        r.map && (e.map.value = r.map,
        n(r.map, e.mapTransform)),
        r.alphaMap && (e.alphaMap.value = r.alphaMap,
        n(r.alphaMap, e.alphaMapTransform)),
        r.bumpMap && (e.bumpMap.value = r.bumpMap,
        n(r.bumpMap, e.bumpMapTransform),
        e.bumpScale.value = r.bumpScale,
        r.side === 1 && (e.bumpScale.value *= -1)),
        r.normalMap && (e.normalMap.value = r.normalMap,
        n(r.normalMap, e.normalMapTransform),
        e.normalScale.value.copy(r.normalScale),
        r.side === 1 && e.normalScale.value.negate()),
        r.displacementMap && (e.displacementMap.value = r.displacementMap,
        n(r.displacementMap, e.displacementMapTransform),
        e.displacementScale.value = r.displacementScale,
        e.displacementBias.value = r.displacementBias),
        r.emissiveMap && (e.emissiveMap.value = r.emissiveMap,
        n(r.emissiveMap, e.emissiveMapTransform)),
        r.specularMap && (e.specularMap.value = r.specularMap,
        n(r.specularMap, e.specularMapTransform)),
        r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
        let i = t.get(r)
          , a = i.envMap
          , o = i.envMapRotation;
        a && (e.envMap.value = a,
        cd.copy(o),
        cd.x *= -1,
        cd.y *= -1,
        cd.z *= -1,
        a.isCubeTexture && a.isRenderTargetTexture === !1 && (cd.y *= -1,
        cd.z *= -1),
        e.envMapRotation.value.setFromMatrix4(ld.makeRotationFromEuler(cd)),
        e.flipEnvMap.value = a.isCubeTexture && a.isRenderTargetTexture === !1 ? -1 : 1,
        e.reflectivity.value = r.reflectivity,
        e.ior.value = r.ior,
        e.refractionRatio.value = r.refractionRatio),
        r.lightMap && (e.lightMap.value = r.lightMap,
        e.lightMapIntensity.value = r.lightMapIntensity,
        n(r.lightMap, e.lightMapTransform)),
        r.aoMap && (e.aoMap.value = r.aoMap,
        e.aoMapIntensity.value = r.aoMapIntensity,
        n(r.aoMap, e.aoMapTransform))
    }
    function o(e, t) {
        e.diffuse.value.copy(t.color),
        e.opacity.value = t.opacity,
        t.map && (e.map.value = t.map,
        n(t.map, e.mapTransform))
    }
    function s(e, t) {
        e.dashSize.value = t.dashSize,
        e.totalSize.value = t.dashSize + t.gapSize,
        e.scale.value = t.scale
    }
    function c(e, t, r, i) {
        e.diffuse.value.copy(t.color),
        e.opacity.value = t.opacity,
        e.size.value = t.size * r,
        e.scale.value = i * .5,
        t.map && (e.map.value = t.map,
        n(t.map, e.uvTransform)),
        t.alphaMap && (e.alphaMap.value = t.alphaMap,
        n(t.alphaMap, e.alphaMapTransform)),
        t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest)
    }
    function l(e, t) {
        e.diffuse.value.copy(t.color),
        e.opacity.value = t.opacity,
        e.rotation.value = t.rotation,
        t.map && (e.map.value = t.map,
        n(t.map, e.mapTransform)),
        t.alphaMap && (e.alphaMap.value = t.alphaMap,
        n(t.alphaMap, e.alphaMapTransform)),
        t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest)
    }
    function u(e, t) {
        e.specular.value.copy(t.specular),
        e.shininess.value = Math.max(t.shininess, 1e-4)
    }
    function d(e, t) {
        t.gradientMap && (e.gradientMap.value = t.gradientMap)
    }
    function f(e, t) {
        e.metalness.value = t.metalness,
        t.metalnessMap && (e.metalnessMap.value = t.metalnessMap,
        n(t.metalnessMap, e.metalnessMapTransform)),
        e.roughness.value = t.roughness,
        t.roughnessMap && (e.roughnessMap.value = t.roughnessMap,
        n(t.roughnessMap, e.roughnessMapTransform)),
        t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
    }
    function p(e, t, r) {
        e.ior.value = t.ior,
        t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),
        e.sheenRoughness.value = t.sheenRoughness,
        t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap,
        n(t.sheenColorMap, e.sheenColorMapTransform)),
        t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap,
        n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
        t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat,
        e.clearcoatRoughness.value = t.clearcoatRoughness,
        t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap,
        n(t.clearcoatMap, e.clearcoatMapTransform)),
        t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap,
        n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)),
        t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap,
        n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform),
        e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
        t.side === 1 && e.clearcoatNormalScale.value.negate())),
        t.dispersion > 0 && (e.dispersion.value = t.dispersion),
        t.iridescence > 0 && (e.iridescence.value = t.iridescence,
        e.iridescenceIOR.value = t.iridescenceIOR,
        e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0],
        e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1],
        t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap,
        n(t.iridescenceMap, e.iridescenceMapTransform)),
        t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap,
        n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))),
        t.transmission > 0 && (e.transmission.value = t.transmission,
        e.transmissionSamplerMap.value = r.texture,
        e.transmissionSamplerSize.value.set(r.width, r.height),
        t.transmissionMap && (e.transmissionMap.value = t.transmissionMap,
        n(t.transmissionMap, e.transmissionMapTransform)),
        e.thickness.value = t.thickness,
        t.thicknessMap && (e.thicknessMap.value = t.thicknessMap,
        n(t.thicknessMap, e.thicknessMapTransform)),
        e.attenuationDistance.value = t.attenuationDistance,
        e.attenuationColor.value.copy(t.attenuationColor)),
        t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)),
        t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap,
        n(t.anisotropyMap, e.anisotropyMapTransform))),
        e.specularIntensity.value = t.specularIntensity,
        e.specularColor.value.copy(t.specularColor),
        t.specularColorMap && (e.specularColorMap.value = t.specularColorMap,
        n(t.specularColorMap, e.specularColorMapTransform)),
        t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap,
        n(t.specularIntensityMap, e.specularIntensityMapTransform))
    }
    function m(e, t) {
        t.matcap && (e.matcap.value = t.matcap)
    }
    function h(e, n) {
        let r = t.get(n).light;
        e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),
        e.nearDistance.value = r.shadow.camera.near,
        e.farDistance.value = r.shadow.camera.far
    }
    return {
        refreshFogUniforms: r,
        refreshMaterialUniforms: i
    }
}
function dd(e, t, n, r) {
    let i = {}
      , a = {}
      , o = []
      , s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
    function c(e, t) {
        let n = t.program;
        r.uniformBlockBinding(e, n)
    }
    function l(e, n) {
        let o = i[e.id];
        o === void 0 && (m(e),
        o = u(e),
        i[e.id] = o,
        e.addEventListener(`dispose`, g));
        let s = n.program;
        r.updateUBOMapping(e, s);
        let c = t.render.frame;
        a[e.id] !== c && (f(e),
        a[e.id] = c)
    }
    function u(t) {
        let n = d();
        t.__bindingPointIndex = n;
        let r = e.createBuffer()
          , i = t.__size
          , a = t.usage;
        return e.bindBuffer(e.UNIFORM_BUFFER, r),
        e.bufferData(e.UNIFORM_BUFFER, i, a),
        e.bindBuffer(e.UNIFORM_BUFFER, null),
        e.bindBufferBase(e.UNIFORM_BUFFER, n, r),
        r
    }
    function d() {
        for (let e = 0; e < s; e++)
            if (o.indexOf(e) === -1)
                return o.push(e),
                e;
        return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),
        0
    }
    function f(t) {
        let n = i[t.id]
          , r = t.uniforms
          , a = t.__cache;
        e.bindBuffer(e.UNIFORM_BUFFER, n);
        for (let t = 0, n = r.length; t < n; t++) {
            let n = Array.isArray(r[t]) ? r[t] : [r[t]];
            for (let r = 0, i = n.length; r < i; r++) {
                let i = n[r];
                if (p(i, t, r, a) === !0) {
                    let t = i.__offset
                      , n = Array.isArray(i.value) ? i.value : [i.value]
                      , r = 0;
                    for (let a = 0; a < n.length; a++) {
                        let o = n[a]
                          , s = h(o);
                        typeof o == `number` || typeof o == `boolean` ? (i.__data[0] = o,
                        e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data)) : o.isMatrix3 ? (i.__data[0] = o.elements[0],
                        i.__data[1] = o.elements[1],
                        i.__data[2] = o.elements[2],
                        i.__data[3] = 0,
                        i.__data[4] = o.elements[3],
                        i.__data[5] = o.elements[4],
                        i.__data[6] = o.elements[5],
                        i.__data[7] = 0,
                        i.__data[8] = o.elements[6],
                        i.__data[9] = o.elements[7],
                        i.__data[10] = o.elements[8],
                        i.__data[11] = 0) : (o.toArray(i.__data, r),
                        r += s.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data)
                }
            }
        }
        e.bindBuffer(e.UNIFORM_BUFFER, null)
    }
    function p(e, t, n, r) {
        let i = e.value
          , a = t + `_` + n;
        if (r[a] === void 0)
            return typeof i == `number` || typeof i == `boolean` ? r[a] = i : r[a] = i.clone(),
            !0;
        {
            let e = r[a];
            if (typeof i == `number` || typeof i == `boolean`) {
                if (e !== i)
                    return r[a] = i,
                    !0
            } else if (e.equals(i) === !1)
                return e.copy(i),
                !0
        }
        return !1
    }
    function m(e) {
        let t = e.uniforms
          , n = 0;
        for (let e = 0, r = t.length; e < r; e++) {
            let r = Array.isArray(t[e]) ? t[e] : [t[e]];
            for (let e = 0, t = r.length; e < t; e++) {
                let t = r[e]
                  , i = Array.isArray(t.value) ? t.value : [t.value];
                for (let e = 0, r = i.length; e < r; e++) {
                    let r = i[e]
                      , a = h(r)
                      , o = n % 16
                      , s = o % a.boundary
                      , c = o + s;
                    n += s,
                    c !== 0 && 16 - c < a.storage && (n += 16 - c),
                    t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT),
                    t.__offset = n,
                    n += a.storage
                }
            }
        }
        let r = n % 16;
        return r > 0 && (n += 16 - r),
        e.__size = n,
        e.__cache = {},
        this
    }
    function h(e) {
        let t = {
            boundary: 0,
            storage: 0
        };
        return typeof e == `number` || typeof e == `boolean` ? (t.boundary = 4,
        t.storage = 4) : e.isVector2 ? (t.boundary = 8,
        t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16,
        t.storage = 12) : e.isVector4 ? (t.boundary = 16,
        t.storage = 16) : e.isMatrix3 ? (t.boundary = 48,
        t.storage = 48) : e.isMatrix4 ? (t.boundary = 64,
        t.storage = 64) : e.isTexture ? U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`) : U(`WebGLRenderer: Unsupported uniform value type.`, e),
        t
    }
    function g(t) {
        let n = t.target;
        n.removeEventListener(`dispose`, g);
        let r = o.indexOf(n.__bindingPointIndex);
        o.splice(r, 1),
        e.deleteBuffer(i[n.id]),
        delete i[n.id],
        delete a[n.id]
    }
    function _() {
        for (let t in i)
            e.deleteBuffer(i[t]);
        o = [],
        i = {},
        a = {}
    }
    return {
        bind: c,
        update: l,
        dispose: _
    }
}
var fd = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183])
  , pd = null;
function md() {
    return pd === null && (pd = new ji(fd,16,16,M,y),
    pd.name = `DFG_LUT`,
    pd.minFilter = l,
    pd.magFilter = l,
    pd.wrapS = i,
    pd.wrapT = i,
    pd.generateMipmaps = !1,
    pd.needsUpdate = !0),
    pd
}
var hd = class {
    constructor(e={}) {
        let {canvas: t=H(), context: n=null, depth: r=!0, stencil: i=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: s=!0, preserveDrawingBuffer: c=!1, powerPreference: l=`default`, failIfMajorPerformanceCaveat: u=!1, reversedDepthBuffer: p=!1, outputBufferType: m=f} = e;
        this.isWebGLRenderer = !0;
        let g;
        if (n !== null) {
            if (typeof WebGLRenderingContext < `u` && n instanceof WebGLRenderingContext)
                throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);
            g = n.getContextAttributes().alpha
        } else
            g = a;
        let v = m
          , C = new Set([ee, N, j])
          , w = new Set([f, _, h, S, b, x])
          , T = new Uint32Array(4)
          , E = new Int32Array(4)
          , D = null
          , O = null
          , k = []
          , A = []
          , M = null;
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.toneMapping = 0,
        this.toneMappingExposure = 1,
        this.transmissionResolutionScale = 1;
        let P = this
          , te = !1;
        this._outputColorSpace = Le;
        let ne = 0
          , re = 0
          , ie = null
          , F = -1
          , ae = null
          , oe = new zt
          , se = new zt
          , I = null
          , ce = new Z(0)
          , le = 0
          , ue = t.width
          , de = t.height
          , fe = 1
          , pe = null
          , me = null
          , he = new zt(0,0,ue,de)
          , ge = new zt(0,0,ue,de)
          , _e = !1
          , ve = new Ji
          , ye = !1
          , be = !1
          , xe = new vn
          , Se = new Y
          , Ce = new zt
          , we = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        }
          , Te = !1;
        function Ee() {
            return ie === null ? fe : 1
        }
        let L = n;
        function De(e, n) {
            return t.getContext(e, n)
        }
        try {
            let e = {
                alpha: !0,
                depth: r,
                stencil: i,
                antialias: o,
                premultipliedAlpha: s,
                preserveDrawingBuffer: c,
                powerPreference: l,
                failIfMajorPerformanceCaveat: u
            };
            if (`setAttribute` in t && t.setAttribute(`data-engine`, `three.js r182`),
            t.addEventListener(`webglcontextlost`, G, !1),
            t.addEventListener(`webglcontextrestored`, nt, !1),
            t.addEventListener(`webglcontextcreationerror`, rt, !1),
            L === null) {
                let t = `webgl2`;
                if (L = De(t, e),
                L === null)
                    throw De(t) ? Error(`Error creating WebGL context with your selected attributes.`) : Error(`Error creating WebGL context.`)
            }
        } catch (e) {
            throw W(`WebGLRenderer: ` + e.message),
            e
        }
        let Oe, ke, R, Ae, z, B, je, Me, Ne, Pe, Fe, Ie, ze, Be, Ve, He, We, V, Ge, Ke, Xe, Ze, Qe, $e;
        function et() {
            Oe = new Nc(L),
            Oe.init(),
            Ze = new rd(L,Oe),
            ke = new lc(L,Oe,e,Ze),
            R = new td(L,Oe),
            ke.reversedDepthBuffer && p && R.buffers.depth.setReversed(!0),
            Ae = new Ic(L),
            z = new Pu,
            B = new nd(L,Oe,R,z,ke,Ze,Ae),
            je = new dc(P),
            Me = new Mc(P),
            Ne = new ec(L),
            Qe = new sc(L,Ne),
            Pe = new Pc(L,Ne,Ae,Qe),
            Fe = new Rc(L,Pe,Ne,Ae),
            Ge = new Lc(L,ke,B),
            He = new uc(z),
            Ie = new Nu(P,je,Me,Oe,ke,Qe,He),
            ze = new ud(P,z),
            Be = new Ru,
            Ve = new Gu(Oe),
            V = new oc(P,je,Me,R,Fe,g,s),
            We = new $u(P,Fe,ke),
            $e = new dd(L,Ae,ke,R),
            Ke = new cc(L,Oe,Ae),
            Xe = new Fc(L,Oe,Ae),
            Ae.programs = Ie.programs,
            P.capabilities = ke,
            P.extensions = Oe,
            P.properties = z,
            P.renderLists = Be,
            P.shadowMap = We,
            P.state = R,
            P.info = Ae
        }
        et(),
        v !== 1009 && (M = new Bc(v,t.width,t.height,r,i));
        let tt = new sd(P,L);
        this.xr = tt,
        this.getContext = function() {
            return L
        }
        ,
        this.getContextAttributes = function() {
            return L.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            let e = Oe.get(`WEBGL_lose_context`);
            e && e.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            let e = Oe.get(`WEBGL_lose_context`);
            e && e.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return fe
        }
        ,
        this.setPixelRatio = function(e) {
            e !== void 0 && (fe = e,
            this.setSize(ue, de, !1))
        }
        ,
        this.getSize = function(e) {
            return e.set(ue, de)
        }
        ,
        this.setSize = function(e, n, r=!0) {
            if (tt.isPresenting) {
                U(`WebGLRenderer: Can't change size while VR device is presenting.`);
                return
            }
            ue = e,
            de = n,
            t.width = Math.floor(e * fe),
            t.height = Math.floor(n * fe),
            r === !0 && (t.style.width = e + `px`,
            t.style.height = n + `px`),
            M !== null && M.setSize(t.width, t.height),
            this.setViewport(0, 0, e, n)
        }
        ,
        this.getDrawingBufferSize = function(e) {
            return e.set(ue * fe, de * fe).floor()
        }
        ,
        this.setDrawingBufferSize = function(e, n, r) {
            ue = e,
            de = n,
            fe = r,
            t.width = Math.floor(e * r),
            t.height = Math.floor(n * r),
            this.setViewport(0, 0, e, n)
        }
        ,
        this.setEffects = function(e) {
            if (v === 1009) {
                console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);
                return
            }
            if (e) {
                for (let t = 0; t < e.length; t++)
                    if (e[t].isOutputPass === !0) {
                        console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);
                        break
                    }
            }
            M.setEffects(e || [])
        }
        ,
        this.getCurrentViewport = function(e) {
            return e.copy(oe)
        }
        ,
        this.getViewport = function(e) {
            return e.copy(he)
        }
        ,
        this.setViewport = function(e, t, n, r) {
            e.isVector4 ? he.set(e.x, e.y, e.z, e.w) : he.set(e, t, n, r),
            R.viewport(oe.copy(he).multiplyScalar(fe).round())
        }
        ,
        this.getScissor = function(e) {
            return e.copy(ge)
        }
        ,
        this.setScissor = function(e, t, n, r) {
            e.isVector4 ? ge.set(e.x, e.y, e.z, e.w) : ge.set(e, t, n, r),
            R.scissor(se.copy(ge).multiplyScalar(fe).round())
        }
        ,
        this.getScissorTest = function() {
            return _e
        }
        ,
        this.setScissorTest = function(e) {
            R.setScissorTest(_e = e)
        }
        ,
        this.setOpaqueSort = function(e) {
            pe = e
        }
        ,
        this.setTransparentSort = function(e) {
            me = e
        }
        ,
        this.getClearColor = function(e) {
            return e.copy(V.getClearColor())
        }
        ,
        this.setClearColor = function() {
            V.setClearColor(...arguments)
        }
        ,
        this.getClearAlpha = function() {
            return V.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            V.setClearAlpha(...arguments)
        }
        ,
        this.clear = function(e=!0, t=!0, n=!0) {
            let r = 0;
            if (e) {
                let e = !1;
                if (ie !== null) {
                    let t = ie.texture.format;
                    e = C.has(t)
                }
                if (e) {
                    let e = ie.texture.type
                      , t = w.has(e)
                      , n = V.getClearColor()
                      , r = V.getClearAlpha()
                      , i = n.r
                      , a = n.g
                      , o = n.b;
                    t ? (T[0] = i,
                    T[1] = a,
                    T[2] = o,
                    T[3] = r,
                    L.clearBufferuiv(L.COLOR, 0, T)) : (E[0] = i,
                    E[1] = a,
                    E[2] = o,
                    E[3] = r,
                    L.clearBufferiv(L.COLOR, 0, E))
                } else
                    r |= L.COLOR_BUFFER_BIT
            }
            t && (r |= L.DEPTH_BUFFER_BIT),
            n && (r |= L.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            L.clear(r)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener(`webglcontextlost`, G, !1),
            t.removeEventListener(`webglcontextrestored`, nt, !1),
            t.removeEventListener(`webglcontextcreationerror`, rt, !1),
            V.dispose(),
            Be.dispose(),
            Ve.dispose(),
            z.dispose(),
            je.dispose(),
            Me.dispose(),
            Fe.dispose(),
            Qe.dispose(),
            $e.dispose(),
            Ie.dispose(),
            tt.dispose(),
            tt.removeEventListener(`sessionstart`, ut),
            tt.removeEventListener(`sessionend`, dt),
            K.stop()
        }
        ;
        function G(e) {
            e.preventDefault(),
            qe(`WebGLRenderer: Context Lost.`),
            te = !0
        }
        function nt() {
            qe(`WebGLRenderer: Context Restored.`),
            te = !1;
            let e = Ae.autoReset
              , t = We.enabled
              , n = We.autoUpdate
              , r = We.needsUpdate
              , i = We.type;
            et(),
            Ae.autoReset = e,
            We.enabled = t,
            We.autoUpdate = n,
            We.needsUpdate = r,
            We.type = i
        }
        function rt(e) {
            W(`WebGLRenderer: A WebGL context could not be created. Reason: `, e.statusMessage)
        }
        function it(e) {
            let t = e.target;
            t.removeEventListener(`dispose`, it),
            at(t)
        }
        function at(e) {
            ot(e),
            z.remove(e)
        }
        function ot(e) {
            let t = z.get(e).programs;
            t !== void 0 && (t.forEach(function(e) {
                Ie.releaseProgram(e)
            }),
            e.isShaderMaterial && Ie.releaseShaderCache(e))
        }
        this.renderBufferDirect = function(e, t, n, r, i, a) {
            t === null && (t = we);
            let o = i.isMesh && i.matrixWorld.determinant() < 0
              , s = bt(e, t, n, r, i);
            R.setMaterial(r, o);
            let c = n.index
              , l = 1;
            if (r.wireframe === !0) {
                if (c = Pe.getWireframeAttribute(n),
                c === void 0)
                    return;
                l = 2
            }
            let u = n.drawRange
              , d = n.attributes.position
              , f = u.start * l
              , p = (u.start + u.count) * l;
            a !== null && (f = Math.max(f, a.start * l),
            p = Math.min(p, (a.start + a.count) * l)),
            c === null ? d != null && (f = Math.max(f, 0),
            p = Math.min(p, d.count)) : (f = Math.max(f, 0),
            p = Math.min(p, c.count));
            let m = p - f;
            if (m < 0 || m === 1 / 0)
                return;
            Qe.setup(i, r, s, n, c);
            let h, g = Ke;
            if (c !== null && (h = Ne.get(c),
            g = Xe,
            g.setIndex(h)),
            i.isMesh)
                r.wireframe === !0 ? (R.setLineWidth(r.wireframeLinewidth * Ee()),
                g.setMode(L.LINES)) : g.setMode(L.TRIANGLES);
            else if (i.isLine) {
                let e = r.linewidth;
                e === void 0 && (e = 1),
                R.setLineWidth(e * Ee()),
                i.isLineSegments ? g.setMode(L.LINES) : i.isLineLoop ? g.setMode(L.LINE_LOOP) : g.setMode(L.LINE_STRIP)
            } else
                i.isPoints ? g.setMode(L.POINTS) : i.isSprite && g.setMode(L.TRIANGLES);
            if (i.isBatchedMesh)
                if (i._multiDrawInstances !== null)
                    Je(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),
                    g.renderMultiDrawInstances(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount, i._multiDrawInstances);
                else if (Oe.get(`WEBGL_multi_draw`))
                    g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
                else {
                    let e = i._multiDrawStarts
                      , t = i._multiDrawCounts
                      , n = i._multiDrawCount
                      , a = c ? Ne.get(c).bytesPerElement : 1
                      , o = z.get(r).currentProgram.getUniforms();
                    for (let r = 0; r < n; r++)
                        o.setValue(L, `_gl_DrawID`, r),
                        g.render(e[r] / a, t[r])
                }
            else if (i.isInstancedMesh)
                g.renderInstances(f, m, i.count);
            else if (n.isInstancedBufferGeometry) {
                let e = n._maxInstanceCount === void 0 ? 1 / 0 : n._maxInstanceCount
                  , t = Math.min(n.instanceCount, e);
                g.renderInstances(f, m, t)
            } else
                g.render(f, m)
        }
        ;
        function st(e, t, n) {
            e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1,
            e.needsUpdate = !0,
            _t(e, t, n),
            e.side = 0,
            e.needsUpdate = !0,
            _t(e, t, n),
            e.side = 2) : _t(e, t, n)
        }
        this.compile = function(e, t, n=null) {
            n === null && (n = e),
            O = Ve.get(n),
            O.init(t),
            A.push(O),
            n.traverseVisible(function(e) {
                e.isLight && e.layers.test(t.layers) && (O.pushLight(e),
                e.castShadow && O.pushShadow(e))
            }),
            e !== n && e.traverseVisible(function(e) {
                e.isLight && e.layers.test(t.layers) && (O.pushLight(e),
                e.castShadow && O.pushShadow(e))
            }),
            O.setupLights();
            let r = new Set;
            return e.traverse(function(e) {
                if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite))
                    return;
                let t = e.material;
                if (t)
                    if (Array.isArray(t))
                        for (let i = 0; i < t.length; i++) {
                            let a = t[i];
                            st(a, n, e),
                            r.add(a)
                        }
                    else
                        st(t, n, e),
                        r.add(t)
            }),
            O = A.pop(),
            r
        }
        ,
        this.compileAsync = function(e, t, n=null) {
            let r = this.compile(e, t, n);
            return new Promise(t => {
                function n() {
                    if (r.forEach(function(e) {
                        z.get(e).currentProgram.isReady() && r.delete(e)
                    }),
                    r.size === 0) {
                        t(e);
                        return
                    }
                    setTimeout(n, 10)
                }
                Oe.get(`KHR_parallel_shader_compile`) === null ? setTimeout(n, 10) : n()
            }
            )
        }
        ;
        let ct = null;
        function lt(e) {
            ct && ct(e)
        }
        function ut() {
            K.stop()
        }
        function dt() {
            K.start()
        }
        let K = new $s;
        K.setAnimationLoop(lt),
        typeof self < `u` && K.setContext(self),
        this.setAnimationLoop = function(e) {
            ct = e,
            tt.setAnimationLoop(e),
            e === null ? K.stop() : K.start()
        }
        ,
        tt.addEventListener(`sessionstart`, ut),
        tt.addEventListener(`sessionend`, dt),
        this.render = function(e, t) {
            if (t !== void 0 && t.isCamera !== !0) {
                W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);
                return
            }
            if (te === !0)
                return;
            let n = tt.enabled === !0 && tt.isPresenting === !0
              , r = M !== null && (ie === null || n) && M.begin(P, ie);
            if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(),
            t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(),
            tt.enabled === !0 && tt.isPresenting === !0 && (M === null || M.isCompositing() === !1) && (tt.cameraAutoUpdate === !0 && tt.updateCamera(t),
            t = tt.getCamera()),
            e.isScene === !0 && e.onBeforeRender(P, e, t, ie),
            O = Ve.get(e, A.length),
            O.init(t),
            A.push(O),
            xe.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            ve.setFromProjectionMatrix(xe, Ue, t.reversedDepth),
            be = this.localClippingEnabled,
            ye = He.init(this.clippingPlanes, be),
            D = Be.get(e, k.length),
            D.init(),
            k.push(D),
            tt.enabled === !0 && tt.isPresenting === !0) {
                let e = P.xr.getDepthSensingMesh();
                e !== null && ft(e, t, -1 / 0, P.sortObjects)
            }
            ft(e, t, 0, P.sortObjects),
            D.finish(),
            P.sortObjects === !0 && D.sort(pe, me),
            Te = tt.enabled === !1 || tt.isPresenting === !1 || tt.hasDepthSensing() === !1,
            Te && V.addToRenderList(D, e),
            this.info.render.frame++,
            ye === !0 && He.beginShadows();
            let i = O.state.shadowsArray;
            if (We.render(i, e, t),
            ye === !0 && He.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            (r && M.hasRenderPass()) === !1) {
                let n = D.opaque
                  , r = D.transmissive;
                if (O.setupLights(),
                t.isArrayCamera) {
                    let i = t.cameras;
                    if (r.length > 0)
                        for (let t = 0, a = i.length; t < a; t++) {
                            let a = i[t];
                            mt(n, r, e, a)
                        }
                    Te && V.render(e);
                    for (let t = 0, n = i.length; t < n; t++) {
                        let n = i[t];
                        pt(D, e, n, n.viewport)
                    }
                } else
                    r.length > 0 && mt(n, r, e, t),
                    Te && V.render(e),
                    pt(D, e, t)
            }
            ie !== null && re === 0 && (B.updateMultisampleRenderTarget(ie),
            B.updateRenderTargetMipmap(ie)),
            r && M.end(P),
            e.isScene === !0 && e.onAfterRender(P, e, t),
            Qe.resetDefaultState(),
            F = -1,
            ae = null,
            A.pop(),
            A.length > 0 ? (O = A[A.length - 1],
            ye === !0 && He.setGlobalState(P.clippingPlanes, O.state.camera)) : O = null,
            k.pop(),
            D = k.length > 0 ? k[k.length - 1] : null
        }
        ;
        function ft(e, t, n, r) {
            if (e.visible === !1)
                return;
            if (e.layers.test(t.layers)) {
                if (e.isGroup)
                    n = e.renderOrder;
                else if (e.isLOD)
                    e.autoUpdate === !0 && e.update(t);
                else if (e.isLight)
                    O.pushLight(e),
                    e.castShadow && O.pushShadow(e);
                else if (e.isSprite) {
                    if (!e.frustumCulled || ve.intersectsSprite(e)) {
                        r && Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);
                        let t = Fe.update(e)
                          , i = e.material;
                        i.visible && D.push(e, t, i, n, Ce.z, null)
                    }
                } else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || ve.intersectsObject(e))) {
                    let t = Fe.update(e)
                      , i = e.material;
                    if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(),
                    Ce.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(),
                    Ce.copy(e.boundingSphere.center)),
                    Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),
                    Array.isArray(i)) {
                        let r = t.groups;
                        for (let a = 0, o = r.length; a < o; a++) {
                            let o = r[a]
                              , s = i[o.materialIndex];
                            s && s.visible && D.push(e, t, s, n, Ce.z, o)
                        }
                    } else
                        i.visible && D.push(e, t, i, n, Ce.z, null)
                }
            }
            let i = e.children;
            for (let e = 0, a = i.length; e < a; e++)
                ft(i[e], t, n, r)
        }
        function pt(e, t, n, r) {
            let {opaque: i, transmissive: a, transparent: o} = e;
            O.setupLightsView(n),
            ye === !0 && He.setGlobalState(P.clippingPlanes, n),
            r && R.viewport(oe.copy(r)),
            i.length > 0 && ht(i, t, n),
            a.length > 0 && ht(a, t, n),
            o.length > 0 && ht(o, t, n),
            R.buffers.depth.setTest(!0),
            R.buffers.depth.setMask(!0),
            R.buffers.color.setMask(!0),
            R.setPolygonOffset(!1)
        }
        function mt(e, t, n, r) {
            if ((n.isScene === !0 ? n.overrideMaterial : null) !== null)
                return;
            if (O.state.transmissionRenderTarget[r.id] === void 0) {
                let e = Oe.has(`EXT_color_buffer_half_float`) || Oe.has(`EXT_color_buffer_float`);
                O.state.transmissionRenderTarget[r.id] = new Vt(1,1,{
                    generateMipmaps: !0,
                    type: e ? y : f,
                    minFilter: d,
                    samples: ke.samples,
                    stencilBuffer: i,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: Ot.workingColorSpace
                })
            }
            let a = O.state.transmissionRenderTarget[r.id]
              , o = r.viewport || oe;
            a.setSize(o.z * P.transmissionResolutionScale, o.w * P.transmissionResolutionScale);
            let s = P.getRenderTarget()
              , c = P.getActiveCubeFace()
              , l = P.getActiveMipmapLevel();
            P.setRenderTarget(a),
            P.getClearColor(ce),
            le = P.getClearAlpha(),
            le < 1 && P.setClearColor(16777215, .5),
            P.clear(),
            Te && V.render(n);
            let u = P.toneMapping;
            P.toneMapping = 0;
            let p = r.viewport;
            if (r.viewport !== void 0 && (r.viewport = void 0),
            O.setupLightsView(r),
            ye === !0 && He.setGlobalState(P.clippingPlanes, r),
            ht(e, n, r),
            B.updateMultisampleRenderTarget(a),
            B.updateRenderTargetMipmap(a),
            Oe.has(`WEBGL_multisampled_render_to_texture`) === !1) {
                let e = !1;
                for (let i = 0, a = t.length; i < a; i++) {
                    let {object: a, geometry: o, material: s, group: c} = t[i];
                    if (s.side === 2 && a.layers.test(r.layers)) {
                        let t = s.side;
                        s.side = 1,
                        s.needsUpdate = !0,
                        gt(a, n, r, o, s, c),
                        s.side = t,
                        s.needsUpdate = !0,
                        e = !0
                    }
                }
                e === !0 && (B.updateMultisampleRenderTarget(a),
                B.updateRenderTargetMipmap(a))
            }
            P.setRenderTarget(s, c, l),
            P.setClearColor(ce, le),
            p !== void 0 && (r.viewport = p),
            P.toneMapping = u
        }
        function ht(e, t, n) {
            let r = t.isScene === !0 ? t.overrideMaterial : null;
            for (let i = 0, a = e.length; i < a; i++) {
                let a = e[i]
                  , {object: o, geometry: s, group: c} = a
                  , l = a.material;
                l.allowOverride === !0 && r !== null && (l = r),
                o.layers.test(n.layers) && gt(o, t, n, s, l, c)
            }
        }
        function gt(e, t, n, r, i, a) {
            e.onBeforeRender(P, t, n, r, i, a),
            e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
            e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
            i.onBeforeRender(P, t, n, r, e, a),
            i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1,
            i.needsUpdate = !0,
            P.renderBufferDirect(n, t, r, i, e, a),
            i.side = 0,
            i.needsUpdate = !0,
            P.renderBufferDirect(n, t, r, i, e, a),
            i.side = 2) : P.renderBufferDirect(n, t, r, i, e, a),
            e.onAfterRender(P, t, n, r, i, a)
        }
        function _t(e, t, n) {
            t.isScene !== !0 && (t = we);
            let r = z.get(e)
              , i = O.state.lights
              , a = O.state.shadowsArray
              , o = i.state.version
              , s = Ie.getParameters(e, i.state, a, t, n)
              , c = Ie.getProgramCacheKey(s)
              , l = r.programs;
            r.environment = e.isMeshStandardMaterial ? t.environment : null,
            r.fog = t.fog,
            r.envMap = (e.isMeshStandardMaterial ? Me : je).get(e.envMap || r.environment),
            r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation,
            l === void 0 && (e.addEventListener(`dispose`, it),
            l = new Map,
            r.programs = l);
            let u = l.get(c);
            if (u !== void 0) {
                if (r.currentProgram === u && r.lightsStateVersion === o)
                    return yt(e, s),
                    u
            } else
                s.uniforms = Ie.getUniforms(e),
                e.onBeforeCompile(s, P),
                u = Ie.acquireProgram(s, c),
                l.set(c, u),
                r.uniforms = s.uniforms;
            let d = r.uniforms;
            return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (d.clippingPlanes = He.uniform),
            yt(e, s),
            r.needsLights = J(e),
            r.lightsStateVersion = o,
            r.needsLights && (d.ambientLightColor.value = i.state.ambient,
            d.lightProbe.value = i.state.probe,
            d.directionalLights.value = i.state.directional,
            d.directionalLightShadows.value = i.state.directionalShadow,
            d.spotLights.value = i.state.spot,
            d.spotLightShadows.value = i.state.spotShadow,
            d.rectAreaLights.value = i.state.rectArea,
            d.ltc_1.value = i.state.rectAreaLTC1,
            d.ltc_2.value = i.state.rectAreaLTC2,
            d.pointLights.value = i.state.point,
            d.pointLightShadows.value = i.state.pointShadow,
            d.hemisphereLights.value = i.state.hemi,
            d.directionalShadowMap.value = i.state.directionalShadowMap,
            d.directionalShadowMatrix.value = i.state.directionalShadowMatrix,
            d.spotShadowMap.value = i.state.spotShadowMap,
            d.spotLightMatrix.value = i.state.spotLightMatrix,
            d.spotLightMap.value = i.state.spotLightMap,
            d.pointShadowMap.value = i.state.pointShadowMap,
            d.pointShadowMatrix.value = i.state.pointShadowMatrix),
            r.currentProgram = u,
            r.uniformsList = null,
            u
        }
        function vt(e) {
            if (e.uniformsList === null) {
                let t = e.currentProgram.getUniforms();
                e.uniformsList = ql.seqWithValue(t.seq, e.uniforms)
            }
            return e.uniformsList
        }
        function yt(e, t) {
            let n = z.get(e);
            n.outputColorSpace = t.outputColorSpace,
            n.batching = t.batching,
            n.batchingColor = t.batchingColor,
            n.instancing = t.instancing,
            n.instancingColor = t.instancingColor,
            n.instancingMorph = t.instancingMorph,
            n.skinning = t.skinning,
            n.morphTargets = t.morphTargets,
            n.morphNormals = t.morphNormals,
            n.morphColors = t.morphColors,
            n.morphTargetsCount = t.morphTargetsCount,
            n.numClippingPlanes = t.numClippingPlanes,
            n.numIntersection = t.numClipIntersection,
            n.vertexAlphas = t.vertexAlphas,
            n.vertexTangents = t.vertexTangents,
            n.toneMapping = t.toneMapping
        }
        function bt(e, t, n, r, i) {
            t.isScene !== !0 && (t = we),
            B.resetTextureUnits();
            let a = t.fog
              , o = r.isMeshStandardMaterial ? t.environment : null
              , s = ie === null ? P.outputColorSpace : ie.isXRRenderTarget === !0 ? ie.texture.colorSpace : Re
              , c = (r.isMeshStandardMaterial ? Me : je).get(r.envMap || o)
              , l = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4
              , u = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0)
              , d = !!n.morphAttributes.position
              , f = !!n.morphAttributes.normal
              , p = !!n.morphAttributes.color
              , m = 0;
            r.toneMapped && (ie === null || ie.isXRRenderTarget === !0) && (m = P.toneMapping);
            let h = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color
              , g = h === void 0 ? 0 : h.length
              , _ = z.get(r)
              , v = O.state.lights;
            if (ye === !0 && (be === !0 || e !== ae)) {
                let t = e === ae && r.id === F;
                He.setState(r, e, t)
            }
            let y = !1;
            r.version === _.__version ? _.needsLights && _.lightsStateVersion !== v.state.version ? y = !0 : _.outputColorSpace === s ? i.isBatchedMesh && _.batching === !1 || !i.isBatchedMesh && _.batching === !0 || i.isBatchedMesh && _.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && _.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && _.instancing === !1 || !i.isInstancedMesh && _.instancing === !0 || i.isSkinnedMesh && _.skinning === !1 || !i.isSkinnedMesh && _.skinning === !0 || i.isInstancedMesh && _.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && _.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && _.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && _.instancingMorph === !1 && i.morphTexture !== null ? y = !0 : _.envMap === c ? r.fog === !0 && _.fog !== a || _.numClippingPlanes !== void 0 && (_.numClippingPlanes !== He.numPlanes || _.numIntersection !== He.numIntersection) ? y = !0 : _.vertexAlphas === l && _.vertexTangents === u && _.morphTargets === d && _.morphNormals === f && _.morphColors === p && _.toneMapping === m ? _.morphTargetsCount !== g && (y = !0) : y = !0 : y = !0 : y = !0 : (y = !0,
            _.__version = r.version);
            let b = _.currentProgram;
            y === !0 && (b = _t(r, t, i));
            let x = !1
              , S = !1
              , C = !1
              , w = b.getUniforms()
              , T = _.uniforms;
            if (R.useProgram(b.program) && (x = !0,
            S = !0,
            C = !0),
            r.id !== F && (F = r.id,
            S = !0),
            x || ae !== e) {
                R.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0,
                e.updateProjectionMatrix()),
                w.setValue(L, `projectionMatrix`, e.projectionMatrix),
                w.setValue(L, `viewMatrix`, e.matrixWorldInverse);
                let t = w.map.cameraPosition;
                t !== void 0 && t.setValue(L, Se.setFromMatrixPosition(e.matrixWorld)),
                ke.logarithmicDepthBuffer && w.setValue(L, `logDepthBufFC`, 2 / (Math.log(e.far + 1) / Math.LN2)),
                (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && w.setValue(L, `isOrthographic`, e.isOrthographicCamera === !0),
                ae !== e && (ae = e,
                S = !0,
                C = !0)
            }
            if (_.needsLights && (v.state.directionalShadowMap.length > 0 && w.setValue(L, `directionalShadowMap`, v.state.directionalShadowMap, B),
            v.state.spotShadowMap.length > 0 && w.setValue(L, `spotShadowMap`, v.state.spotShadowMap, B),
            v.state.pointShadowMap.length > 0 && w.setValue(L, `pointShadowMap`, v.state.pointShadowMap, B)),
            i.isSkinnedMesh) {
                w.setOptional(L, i, `bindMatrix`),
                w.setOptional(L, i, `bindMatrixInverse`);
                let e = i.skeleton;
                e && (e.boneTexture === null && e.computeBoneTexture(),
                w.setValue(L, `boneTexture`, e.boneTexture, B))
            }
            i.isBatchedMesh && (w.setOptional(L, i, `batchingTexture`),
            w.setValue(L, `batchingTexture`, i._matricesTexture, B),
            w.setOptional(L, i, `batchingIdTexture`),
            w.setValue(L, `batchingIdTexture`, i._indirectTexture, B),
            w.setOptional(L, i, `batchingColorTexture`),
            i._colorsTexture !== null && w.setValue(L, `batchingColorTexture`, i._colorsTexture, B));
            let E = n.morphAttributes;
            if ((E.position !== void 0 || E.normal !== void 0 || E.color !== void 0) && Ge.update(i, n, b),
            (S || _.receiveShadow !== i.receiveShadow) && (_.receiveShadow = i.receiveShadow,
            w.setValue(L, `receiveShadow`, i.receiveShadow)),
            r.isMeshGouraudMaterial && r.envMap !== null && (T.envMap.value = c,
            T.flipEnvMap.value = c.isCubeTexture && c.isRenderTargetTexture === !1 ? -1 : 1),
            r.isMeshStandardMaterial && r.envMap === null && t.environment !== null && (T.envMapIntensity.value = t.environmentIntensity),
            T.dfgLUT !== void 0 && (T.dfgLUT.value = md()),
            S && (w.setValue(L, `toneMappingExposure`, P.toneMappingExposure),
            _.needsLights && q(T, C),
            a && r.fog === !0 && ze.refreshFogUniforms(T, a),
            ze.refreshMaterialUniforms(T, r, fe, de, O.state.transmissionRenderTarget[e.id]),
            ql.upload(L, vt(_), T, B)),
            r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (ql.upload(L, vt(_), T, B),
            r.uniformsNeedUpdate = !1),
            r.isSpriteMaterial && w.setValue(L, `center`, i.center),
            w.setValue(L, `modelViewMatrix`, i.modelViewMatrix),
            w.setValue(L, `normalMatrix`, i.normalMatrix),
            w.setValue(L, `modelMatrix`, i.matrixWorld),
            r.isShaderMaterial || r.isRawShaderMaterial) {
                let e = r.uniformsGroups;
                for (let t = 0, n = e.length; t < n; t++) {
                    let n = e[t];
                    $e.update(n, b),
                    $e.bind(n, b)
                }
            }
            return b
        }
        function q(e, t) {
            e.ambientLightColor.needsUpdate = t,
            e.lightProbe.needsUpdate = t,
            e.directionalLights.needsUpdate = t,
            e.directionalLightShadows.needsUpdate = t,
            e.pointLights.needsUpdate = t,
            e.pointLightShadows.needsUpdate = t,
            e.spotLights.needsUpdate = t,
            e.spotLightShadows.needsUpdate = t,
            e.rectAreaLights.needsUpdate = t,
            e.hemisphereLights.needsUpdate = t
        }
        function J(e) {
            return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0
        }
        this.getActiveCubeFace = function() {
            return ne
        }
        ,
        this.getActiveMipmapLevel = function() {
            return re
        }
        ,
        this.getRenderTarget = function() {
            return ie
        }
        ,
        this.setRenderTargetTextures = function(e, t, n) {
            let r = z.get(e);
            r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1,
            r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1),
            z.get(e.texture).__webglTexture = t,
            z.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n,
            r.__hasExternalTextures = !0
        }
        ,
        this.setRenderTargetFramebuffer = function(e, t) {
            let n = z.get(e);
            n.__webglFramebuffer = t,
            n.__useDefaultFramebuffer = t === void 0
        }
        ;
        let xt = L.createFramebuffer();
        this.setRenderTarget = function(e, t=0, n=0) {
            ie = e,
            ne = t,
            re = n;
            let r = null
              , i = !1
              , a = !1;
            if (e) {
                let o = z.get(e);
                if (o.__useDefaultFramebuffer !== void 0) {
                    R.bindFramebuffer(L.FRAMEBUFFER, o.__webglFramebuffer),
                    oe.copy(e.viewport),
                    se.copy(e.scissor),
                    I = e.scissorTest,
                    R.viewport(oe),
                    R.scissor(se),
                    R.setScissorTest(I),
                    F = -1;
                    return
                } else if (o.__webglFramebuffer === void 0)
                    B.setupRenderTarget(e);
                else if (o.__hasExternalTextures)
                    B.rebindTextures(e, z.get(e.texture).__webglTexture, z.get(e.depthTexture).__webglTexture);
                else if (e.depthBuffer) {
                    let t = e.depthTexture;
                    if (o.__boundDepthTexture !== t) {
                        if (t !== null && z.has(t) && (e.width !== t.image.width || e.height !== t.image.height))
                            throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);
                        B.setupDepthRenderbuffer(e)
                    }
                }
                let s = e.texture;
                (s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
                let c = z.get(e).__webglFramebuffer;
                e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t],
                i = !0) : r = e.samples > 0 && B.useMultisampledRTT(e) === !1 ? z.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c,
                oe.copy(e.viewport),
                se.copy(e.scissor),
                I = e.scissorTest
            } else
                oe.copy(he).multiplyScalar(fe).floor(),
                se.copy(ge).multiplyScalar(fe).floor(),
                I = _e;
            if (n !== 0 && (r = xt),
            R.bindFramebuffer(L.FRAMEBUFFER, r) && R.drawBuffers(e, r),
            R.viewport(oe),
            R.scissor(se),
            R.setScissorTest(I),
            i) {
                let r = z.get(e.texture);
                L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n)
            } else if (a) {
                let r = t;
                for (let t = 0; t < e.textures.length; t++) {
                    let i = z.get(e.textures[t]);
                    L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r)
                }
            } else if (e !== null && n !== 0) {
                let t = z.get(e.texture);
                L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, t.__webglTexture, n)
            }
            F = -1
        }
        ,
        this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s=0) {
            if (!(e && e.isWebGLRenderTarget)) {
                W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
                return
            }
            let c = z.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]),
            c) {
                R.bindFramebuffer(L.FRAMEBUFFER, c);
                try {
                    let o = e.textures[s]
                      , c = o.format
                      , l = o.type;
                    if (!ke.textureFormatReadable(c)) {
                        W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);
                        return
                    }
                    if (!ke.textureTypeReadable(l)) {
                        W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);
                        return
                    }
                    t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && (e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s),
                    L.readPixels(t, n, r, i, Ze.convert(c), Ze.convert(l), a))
                } finally {
                    let e = ie === null ? null : z.get(ie).__webglFramebuffer;
                    R.bindFramebuffer(L.FRAMEBUFFER, e)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s=0) {
            if (!(e && e.isWebGLRenderTarget))
                throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
            let c = z.get(e).__webglFramebuffer;
            if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]),
            c)
                if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
                    R.bindFramebuffer(L.FRAMEBUFFER, c);
                    let o = e.textures[s]
                      , l = o.format
                      , u = o.type;
                    if (!ke.textureFormatReadable(l))
                        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);
                    if (!ke.textureTypeReadable(u))
                        throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);
                    let d = L.createBuffer();
                    L.bindBuffer(L.PIXEL_PACK_BUFFER, d),
                    L.bufferData(L.PIXEL_PACK_BUFFER, a.byteLength, L.STREAM_READ),
                    e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s),
                    L.readPixels(t, n, r, i, Ze.convert(l), Ze.convert(u), 0);
                    let f = ie === null ? null : z.get(ie).__webglFramebuffer;
                    R.bindFramebuffer(L.FRAMEBUFFER, f);
                    let p = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return L.flush(),
                    await Ye(L, p, 4),
                    L.bindBuffer(L.PIXEL_PACK_BUFFER, d),
                    L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, a),
                    L.deleteBuffer(d),
                    L.deleteSync(p),
                    a
                } else
                    throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)
        }
        ,
        this.copyFramebufferToTexture = function(e, t=null, n=0) {
            let r = 2 ** -n
              , i = Math.floor(e.image.width * r)
              , a = Math.floor(e.image.height * r)
              , o = t === null ? 0 : t.x
              , s = t === null ? 0 : t.y;
            B.setTexture2D(e, 0),
            L.copyTexSubImage2D(L.TEXTURE_2D, n, 0, 0, o, s, i, a),
            R.unbindTexture()
        }
        ;
        let St = L.createFramebuffer()
          , Ct = L.createFramebuffer();
        this.copyTextureToTexture = function(e, t, n=null, r=null, i=0, a=null) {
            a === null && (i === 0 ? a = 0 : (Je(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),
            a = i,
            i = 0));
            let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
            if (n !== null)
                o = n.max.x - n.min.x,
                s = n.max.y - n.min.y,
                c = n.isBox3 ? n.max.z - n.min.z : 1,
                l = n.min.x,
                u = n.min.y,
                d = n.isBox3 ? n.min.z : 0;
            else {
                let t = 2 ** -i;
                o = Math.floor(h.width * t),
                s = Math.floor(h.height * t),
                c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1,
                l = 0,
                u = 0,
                d = 0
            }
            r === null ? (f = 0,
            p = 0,
            m = 0) : (f = r.x,
            p = r.y,
            m = r.z);
            let g = Ze.convert(t.format), _ = Ze.convert(t.type), v;
            t.isData3DTexture ? (B.setTexture3D(t, 0),
            v = L.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (B.setTexture2DArray(t, 0),
            v = L.TEXTURE_2D_ARRAY) : (B.setTexture2D(t, 0),
            v = L.TEXTURE_2D),
            L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, t.flipY),
            L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
            L.pixelStorei(L.UNPACK_ALIGNMENT, t.unpackAlignment);
            let y = L.getParameter(L.UNPACK_ROW_LENGTH)
              , b = L.getParameter(L.UNPACK_IMAGE_HEIGHT)
              , x = L.getParameter(L.UNPACK_SKIP_PIXELS)
              , S = L.getParameter(L.UNPACK_SKIP_ROWS)
              , C = L.getParameter(L.UNPACK_SKIP_IMAGES);
            L.pixelStorei(L.UNPACK_ROW_LENGTH, h.width),
            L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, h.height),
            L.pixelStorei(L.UNPACK_SKIP_PIXELS, l),
            L.pixelStorei(L.UNPACK_SKIP_ROWS, u),
            L.pixelStorei(L.UNPACK_SKIP_IMAGES, d);
            let w = e.isDataArrayTexture || e.isData3DTexture
              , T = t.isDataArrayTexture || t.isData3DTexture;
            if (e.isDepthTexture) {
                let n = z.get(e)
                  , r = z.get(t)
                  , h = z.get(n.__renderTarget)
                  , g = z.get(r.__renderTarget);
                R.bindFramebuffer(L.READ_FRAMEBUFFER, h.__webglFramebuffer),
                R.bindFramebuffer(L.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
                for (let n = 0; n < c; n++)
                    w && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(e).__webglTexture, i, d + n),
                    L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(t).__webglTexture, a, m + n)),
                    L.blitFramebuffer(l, u, o, s, f, p, o, s, L.DEPTH_BUFFER_BIT, L.NEAREST);
                R.bindFramebuffer(L.READ_FRAMEBUFFER, null),
                R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null)
            } else if (i !== 0 || e.isRenderTargetTexture || z.has(e)) {
                let n = z.get(e)
                  , r = z.get(t);
                R.bindFramebuffer(L.READ_FRAMEBUFFER, St),
                R.bindFramebuffer(L.DRAW_FRAMEBUFFER, Ct);
                for (let e = 0; e < c; e++)
                    w ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, n.__webglTexture, i),
                    T ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, r.__webglTexture, a),
                    i === 0 ? T ? L.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : L.copyTexSubImage2D(v, a, f, p, l, u, o, s) : L.blitFramebuffer(l, u, o, s, f, p, o, s, L.COLOR_BUFFER_BIT, L.NEAREST);
                R.bindFramebuffer(L.READ_FRAMEBUFFER, null),
                R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null)
            } else
                T ? e.isDataTexture || e.isData3DTexture ? L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? L.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h);
            L.pixelStorei(L.UNPACK_ROW_LENGTH, y),
            L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, b),
            L.pixelStorei(L.UNPACK_SKIP_PIXELS, x),
            L.pixelStorei(L.UNPACK_SKIP_ROWS, S),
            L.pixelStorei(L.UNPACK_SKIP_IMAGES, C),
            a === 0 && t.generateMipmaps && L.generateMipmap(v),
            R.unbindTexture()
        }
        ,
        this.initRenderTarget = function(e) {
            z.get(e).__webglFramebuffer === void 0 && B.setupRenderTarget(e)
        }
        ,
        this.initTexture = function(e) {
            e.isCubeTexture ? B.setTextureCube(e, 0) : e.isData3DTexture ? B.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? B.setTexture2DArray(e, 0) : B.setTexture2D(e, 0),
            R.unbindTexture()
        }
        ,
        this.resetState = function() {
            ne = 0,
            re = 0,
            ie = null,
            R.reset(),
            Qe.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{
            detail: this
        }))
    }
    get coordinateSystem() {
        return Ue
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        let t = this.getContext();
        t.drawingBufferColorSpace = Ot._getDrawingBufferColorSpace(e),
        t.unpackColorSpace = Ot._getUnpackColorSpace()
    }
}
  , gd = {
    type: `change`
}
  , _d = {
    type: `start`
}
  , vd = {
    type: `end`
}
  , yd = new _n
  , bd = new Wi
  , xd = Math.cos(70 * q.DEG2RAD)
  , Sd = new Y
  , Cd = 2 * Math.PI
  , wd = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , Td = 1e-6
  , Ed = class extends Xs {
    constructor(e, r=null) {
        super(e, r),
        this.state = wd.NONE,
        this.target = new Y,
        this.cursor = new Y,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.keyRotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: `ArrowLeft`,
            UP: `ArrowUp`,
            RIGHT: `ArrowRight`,
            BOTTOM: `ArrowDown`
        },
        this.mouseButtons = {
            LEFT: t.ROTATE,
            MIDDLE: t.DOLLY,
            RIGHT: t.PAN
        },
        this.touches = {
            ONE: n.ROTATE,
            TWO: n.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this._lastPosition = new Y,
        this._lastQuaternion = new xt,
        this._lastTargetPosition = new Y,
        this._quat = new xt().setFromUnitVectors(e.up, new Y(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new Bs,
        this._sphericalDelta = new Bs,
        this._scale = 1,
        this._panOffset = new Y,
        this._rotateStart = new J,
        this._rotateEnd = new J,
        this._rotateDelta = new J,
        this._panStart = new J,
        this._panEnd = new J,
        this._panDelta = new J,
        this._dollyStart = new J,
        this._dollyEnd = new J,
        this._dollyDelta = new J,
        this._dollyDirection = new Y,
        this._mouse = new J,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = Od.bind(this),
        this._onPointerDown = Dd.bind(this),
        this._onPointerUp = kd.bind(this),
        this._onContextMenu = Id.bind(this),
        this._onMouseWheel = Md.bind(this),
        this._onKeyDown = Nd.bind(this),
        this._onTouchStart = Pd.bind(this),
        this._onTouchMove = Fd.bind(this),
        this._onMouseDown = Ad.bind(this),
        this._onMouseMove = jd.bind(this),
        this._interceptControlDown = Ld.bind(this),
        this._interceptControlUp = Rd.bind(this),
        this.domElement !== null && this.connect(this.domElement),
        this.update()
    }
    connect(e) {
        super.connect(e),
        this.domElement.addEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.addEventListener(`pointercancel`, this._onPointerUp),
        this.domElement.addEventListener(`contextmenu`, this._onContextMenu),
        this.domElement.addEventListener(`wheel`, this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener(`keydown`, this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = `none`
    }
    disconnect() {
        this.domElement.removeEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.ownerDocument.removeEventListener(`pointermove`, this._onPointerMove),
        this.domElement.ownerDocument.removeEventListener(`pointerup`, this._onPointerUp),
        this.domElement.removeEventListener(`pointercancel`, this._onPointerUp),
        this.domElement.removeEventListener(`wheel`, this._onMouseWheel),
        this.domElement.removeEventListener(`contextmenu`, this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement.getRootNode().removeEventListener(`keydown`, this._interceptControlDown, {
            capture: !0
        }),
        this.domElement.style.touchAction = `auto`
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(e) {
        e.addEventListener(`keydown`, this._onKeyDown),
        this._domElementKeyEvents = e
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener(`keydown`, this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(gd),
        this.update(),
        this.state = wd.NONE
    }
    update(e=null) {
        let t = this.object.position;
        Sd.copy(t).sub(this.target),
        Sd.applyQuaternion(this._quat),
        this._spherical.setFromVector3(Sd),
        this.autoRotate && this.state === wd.NONE && this._rotateLeft(this._getAutoRotationAngle(e)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let n = this.minAzimuthAngle
          , r = this.maxAzimuthAngle;
        isFinite(n) && isFinite(r) && (n < -Math.PI ? n += Cd : n > Math.PI && (n -= Cd),
        r < -Math.PI ? r += Cd : r > Math.PI && (r -= Cd),
        n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let i = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            let e = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            i = e != this._spherical.radius
        }
        if (Sd.setFromSpherical(this._spherical),
        Sd.applyQuaternion(this._quatInverse),
        t.copy(this.target).add(Sd),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let e = null;
            if (this.object.isPerspectiveCamera) {
                let t = Sd.length();
                e = this._clampDistance(t * this._scale);
                let n = t - e;
                this.object.position.addScaledVector(this._dollyDirection, n),
                this.object.updateMatrixWorld(),
                i = !!n
            } else if (this.object.isOrthographicCamera) {
                let t = new Y(this._mouse.x,this._mouse.y,0);
                t.unproject(this.object);
                let n = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                i = n !== this.object.zoom;
                let r = new Y(this._mouse.x,this._mouse.y,0);
                r.unproject(this.object),
                this.object.position.sub(r).add(t),
                this.object.updateMatrixWorld(),
                e = Sd.length()
            } else
                console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),
                this.zoomToCursor = !1;
            e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (yd.origin.copy(this.object.position),
            yd.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(yd.direction)) < xd ? this.object.lookAt(this.target) : (bd.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            yd.intersectPlane(bd, this.target))))
        } else if (this.object.isOrthographicCamera) {
            let e = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            e !== this.object.zoom && (this.object.updateProjectionMatrix(),
            i = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        i || this._lastPosition.distanceToSquared(this.object.position) > Td || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Td || this._lastTargetPosition.distanceToSquared(this.target) > Td ? (this.dispatchEvent(gd),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(e) {
        return e === null ? Cd / 60 / 60 * this.autoRotateSpeed : Cd / 60 * this.autoRotateSpeed * e
    }
    _getZoomScale(e) {
        let t = Math.abs(e * .01);
        return .95 ** (this.zoomSpeed * t)
    }
    _rotateLeft(e) {
        this._sphericalDelta.theta -= e
    }
    _rotateUp(e) {
        this._sphericalDelta.phi -= e
    }
    _panLeft(e, t) {
        Sd.setFromMatrixColumn(t, 0),
        Sd.multiplyScalar(-e),
        this._panOffset.add(Sd)
    }
    _panUp(e, t) {
        this.screenSpacePanning === !0 ? Sd.setFromMatrixColumn(t, 1) : (Sd.setFromMatrixColumn(t, 0),
        Sd.crossVectors(this.object.up, Sd)),
        Sd.multiplyScalar(e),
        this._panOffset.add(Sd)
    }
    _pan(e, t) {
        let n = this.domElement;
        if (this.object.isPerspectiveCamera) {
            let r = this.object.position;
            Sd.copy(r).sub(this.target);
            let i = Sd.length();
            i *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * e * i / n.clientHeight, this.object.matrix),
            this._panUp(2 * t * i / n.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix),
            this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),
            this.enablePan = !1)
    }
    _dollyOut(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),
        this.enableZoom = !1)
    }
    _dollyIn(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),
        this.enableZoom = !1)
    }
    _updateZoomParameters(e, t) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        let n = this.domElement.getBoundingClientRect()
          , r = e - n.left
          , i = t - n.top
          , a = n.width
          , o = n.height;
        this._mouse.x = r / a * 2 - 1,
        this._mouse.y = -(i / o) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(e) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, e))
    }
    _handleMouseDownRotate(e) {
        this._rotateStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownDolly(e) {
        this._updateZoomParameters(e.clientX, e.clientX),
        this._dollyStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownPan(e) {
        this._panStart.set(e.clientX, e.clientY)
    }
    _handleMouseMoveRotate(e) {
        this._rotateEnd.set(e.clientX, e.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(Cd * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(Cd * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(e) {
        this._dollyEnd.set(e.clientX, e.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(e) {
        this._panEnd.set(e.clientX, e.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(e) {
        this._updateZoomParameters(e.clientX, e.clientY),
        e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
        this.update()
    }
    _handleKeyDown(e) {
        let t = !1;
        switch (e.code) {
        case this.keys.UP:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Cd * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.BOTTOM:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Cd * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.LEFT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Cd * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
            t = !0;
            break;
        case this.keys.RIGHT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Cd * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            t = !0;
            break
        }
        t && (e.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(e) {
        if (this._pointers.length === 1)
            this._rotateStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._rotateStart.set(n, r)
        }
    }
    _handleTouchStartPan(e) {
        if (this._pointers.length === 1)
            this._panStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._panStart.set(n, r)
        }
    }
    _handleTouchStartDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , n = e.pageX - t.x
          , r = e.pageY - t.y
          , i = Math.sqrt(n * n + r * r);
        this._dollyStart.set(0, i)
    }
    _handleTouchStartDollyPan(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enablePan && this._handleTouchStartPan(e)
    }
    _handleTouchStartDollyRotate(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enableRotate && this._handleTouchStartRotate(e)
    }
    _handleTouchMoveRotate(e) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._rotateEnd.set(n, r)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(Cd * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(Cd * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(e) {
        if (this._pointers.length === 1)
            this._panEnd.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._panEnd.set(n, r)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , n = e.pageX - t.x
          , r = e.pageY - t.y
          , i = Math.sqrt(n * n + r * r);
        this._dollyEnd.set(0, i),
        this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        let a = (e.pageX + t.x) * .5
          , o = (e.pageY + t.y) * .5;
        this._updateZoomParameters(a, o)
    }
    _handleTouchMoveDollyPan(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enablePan && this._handleTouchMovePan(e)
    }
    _handleTouchMoveDollyRotate(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enableRotate && this._handleTouchMoveRotate(e)
    }
    _addPointer(e) {
        this._pointers.push(e.pointerId)
    }
    _removePointer(e) {
        delete this._pointerPositions[e.pointerId];
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId) {
                this._pointers.splice(t, 1);
                return
            }
    }
    _isTrackingPointer(e) {
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId)
                return !0;
        return !1
    }
    _trackPointer(e) {
        let t = this._pointerPositions[e.pointerId];
        t === void 0 && (t = new J,
        this._pointerPositions[e.pointerId] = t),
        t.set(e.pageX, e.pageY)
    }
    _getSecondPointerPosition(e) {
        let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[t]
    }
    _customWheelEvent(e) {
        let t = e.deltaMode
          , n = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaY: e.deltaY
        };
        switch (t) {
        case 1:
            n.deltaY *= 16;
            break;
        case 2:
            n.deltaY *= 100;
            break
        }
        return e.ctrlKey && !this._controlActive && (n.deltaY *= 10),
        n
    }
}
;
function Dd(e) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId),
    this.domElement.ownerDocument.addEventListener(`pointermove`, this._onPointerMove),
    this.domElement.ownerDocument.addEventListener(`pointerup`, this._onPointerUp)),
    !this._isTrackingPointer(e) && (this._addPointer(e),
    e.pointerType === `touch` ? this._onTouchStart(e) : this._onMouseDown(e)))
}
function Od(e) {
    this.enabled !== !1 && (e.pointerType === `touch` ? this._onTouchMove(e) : this._onMouseMove(e))
}
function kd(e) {
    switch (this._removePointer(e),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(e.pointerId),
        this.domElement.ownerDocument.removeEventListener(`pointermove`, this._onPointerMove),
        this.domElement.ownerDocument.removeEventListener(`pointerup`, this._onPointerUp),
        this.dispatchEvent(vd),
        this.state = wd.NONE;
        break;
    case 1:
        let t = this._pointers[0]
          , n = this._pointerPositions[t];
        this._onTouchStart({
            pointerId: t,
            pageX: n.x,
            pageY: n.y
        });
        break
    }
}
function Ad(e) {
    let n;
    switch (e.button) {
    case 0:
        n = this.mouseButtons.LEFT;
        break;
    case 1:
        n = this.mouseButtons.MIDDLE;
        break;
    case 2:
        n = this.mouseButtons.RIGHT;
        break;
    default:
        n = -1
    }
    switch (n) {
    case t.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(e),
        this.state = wd.DOLLY;
        break;
    case t.ROTATE:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(e),
            this.state = wd.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(e),
            this.state = wd.ROTATE
        }
        break;
    case t.PAN:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(e),
            this.state = wd.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(e),
            this.state = wd.PAN
        }
        break;
    default:
        this.state = wd.NONE
    }
    this.state !== wd.NONE && this.dispatchEvent(_d)
}
function jd(e) {
    switch (this.state) {
    case wd.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(e);
        break;
    case wd.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(e);
        break;
    case wd.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(e);
        break
    }
}
function Md(e) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== wd.NONE || (e.preventDefault(),
    this.dispatchEvent(_d),
    this._handleMouseWheel(this._customWheelEvent(e)),
    this.dispatchEvent(vd))
}
function Nd(e) {
    this.enabled !== !1 && this._handleKeyDown(e)
}
function Pd(e) {
    switch (this._trackPointer(e),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case n.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(e),
            this.state = wd.TOUCH_ROTATE;
            break;
        case n.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(e),
            this.state = wd.TOUCH_PAN;
            break;
        default:
            this.state = wd.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case n.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(e),
            this.state = wd.TOUCH_DOLLY_PAN;
            break;
        case n.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(e),
            this.state = wd.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = wd.NONE
        }
        break;
    default:
        this.state = wd.NONE
    }
    this.state !== wd.NONE && this.dispatchEvent(_d)
}
function Fd(e) {
    switch (this._trackPointer(e),
    this.state) {
    case wd.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(e),
        this.update();
        break;
    case wd.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(e),
        this.update();
        break;
    case wd.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(e),
        this.update();
        break;
    case wd.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(e),
        this.update();
        break;
    default:
        this.state = wd.NONE
    }
}
function Id(e) {
    this.enabled !== !1 && e.preventDefault()
}
function Ld(e) {
    e.key === `Control` && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener(`keyup`, this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function Rd(e) {
    e.key === `Control` && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener(`keyup`, this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
var zd = class extends di {
    constructor() {
        super(),
        this.name = `RoomEnvironment`;
        let e = new Hr;
        e.deleteAttribute(`uv`);
        let t = new Ko({
            side: 1
        })
          , n = new Ko
          , r = new bs(16777215,900,28,2);
        r.position.set(.418, 16.199, .3),
        this.add(r);
        let i = new Q(e,t);
        i.position.set(-.757, 13.219, .717),
        i.scale.set(31.713, 28.305, 28.591),
        this.add(i);
        let a = new Bi(e,n,6)
          , o = new Gn;
        o.position.set(-10.906, 2.009, 1.846),
        o.rotation.set(0, -.195, 0),
        o.scale.set(2.328, 7.905, 4.651),
        o.updateMatrix(),
        a.setMatrixAt(0, o.matrix),
        o.position.set(-5.607, -.754, -.758),
        o.rotation.set(0, .994, 0),
        o.scale.set(1.97, 1.534, 3.955),
        o.updateMatrix(),
        a.setMatrixAt(1, o.matrix),
        o.position.set(6.167, .857, 7.803),
        o.rotation.set(0, .561, 0),
        o.scale.set(3.927, 6.285, 3.687),
        o.updateMatrix(),
        a.setMatrixAt(2, o.matrix),
        o.position.set(-2.017, .018, 6.124),
        o.rotation.set(0, .333, 0),
        o.scale.set(2.002, 4.566, 2.064),
        o.updateMatrix(),
        a.setMatrixAt(3, o.matrix),
        o.position.set(2.291, -.756, -2.621),
        o.rotation.set(0, -.286, 0),
        o.scale.set(1.546, 1.552, 1.496),
        o.updateMatrix(),
        a.setMatrixAt(4, o.matrix),
        o.position.set(-2.193, -.369, -5.547),
        o.rotation.set(0, .516, 0),
        o.scale.set(3.875, 3.487, 2.986),
        o.updateMatrix(),
        a.setMatrixAt(5, o.matrix),
        this.add(a);
        let s = new Q(e,Bd(50));
        s.position.set(-16.116, 14.37, 8.208),
        s.scale.set(.1, 2.428, 2.739),
        this.add(s);
        let c = new Q(e,Bd(50));
        c.position.set(-16.109, 18.021, -8.207),
        c.scale.set(.1, 2.425, 2.751),
        this.add(c);
        let l = new Q(e,Bd(17));
        l.position.set(14.904, 12.198, -1.832),
        l.scale.set(.15, 4.265, 6.331),
        this.add(l);
        let u = new Q(e,Bd(43));
        u.position.set(-.462, 8.89, 14.52),
        u.scale.set(4.38, 5.441, .088),
        this.add(u);
        let d = new Q(e,Bd(20));
        d.position.set(3.235, 11.486, -12.541),
        d.scale.set(2.5, 2, .1),
        this.add(d);
        let f = new Q(e,Bd(100));
        f.position.set(0, 20, 0),
        f.scale.set(1, .1, 1),
        this.add(f)
    }
    dispose() {
        let e = new Set;
        this.traverse(t => {
            t.isMesh && (e.add(t.geometry),
            e.add(t.material))
        }
        );
        for (let t of e)
            t.dispose()
    }
}
;
function Bd(e) {
    return new Jo({
        color: 0,
        emissive: 16777215,
        emissiveIntensity: e
    })
}
var Vd = class extends Gn {
    constructor(e=document.createElement(`div`)) {
        super(),
        this.isCSS2DObject = !0,
        this.element = e,
        this.element.style.position = `absolute`,
        this.element.style.userSelect = `none`,
        this.element.setAttribute(`draggable`, !1),
        this.center = new J(.5,.5),
        this.addEventListener(`removed`, function() {
            this.traverse(function(e) {
                e.element && e.element instanceof e.element.ownerDocument.defaultView.Element && e.element.parentNode !== null && e.element.remove()
            })
        })
    }
    copy(e, t) {
        return super.copy(e, t),
        this.element = e.element.cloneNode(!0),
        this.center = e.center,
        this
    }
}
  , Hd = new Y
  , Ud = new vn
  , Wd = new vn
  , Gd = new Y
  , Kd = new Y
  , qd = class {
    constructor(e={}) {
        let t = this, n, r, i, a, o = {
            objects: new WeakMap
        }, s = e.element === void 0 ? document.createElement(`div`) : e.element;
        s.style.overflow = `hidden`,
        this.domElement = s,
        this.sortObjects = !0,
        this.getSize = function() {
            return {
                width: n,
                height: r
            }
        }
        ,
        this.render = function(e, t) {
            e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(),
            t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(),
            Ud.copy(t.matrixWorldInverse),
            Wd.multiplyMatrices(t.projectionMatrix, Ud),
            l(e, e, t),
            this.sortObjects && f(e)
        }
        ,
        this.setSize = function(e, t) {
            n = e,
            r = t,
            i = n / 2,
            a = r / 2,
            s.style.width = e + `px`,
            s.style.height = t + `px`
        }
        ;
        function c(e) {
            e.isCSS2DObject && (e.element.style.display = `none`);
            for (let t = 0, n = e.children.length; t < n; t++)
                c(e.children[t])
        }
        function l(e, n, r) {
            if (e.visible === !1) {
                c(e);
                return
            }
            if (e.isCSS2DObject) {
                Hd.setFromMatrixPosition(e.matrixWorld),
                Hd.applyMatrix4(Wd);
                let c = Hd.z >= -1 && Hd.z <= 1 && e.layers.test(r.layers) === !0
                  , l = e.element;
                l.style.display = c === !0 ? `` : `none`,
                c === !0 && (e.onBeforeRender(t, n, r),
                l.style.transform = `translate(` + -100 * e.center.x + `%,` + -100 * e.center.y + `%)translate(` + (Hd.x * i + i) + `px,` + (-Hd.y * a + a) + `px)`,
                l.parentNode !== s && s.appendChild(l),
                e.onAfterRender(t, n, r));
                let d = {
                    distanceToCameraSquared: u(r, e)
                };
                o.objects.set(e, d)
            }
            for (let t = 0, i = e.children.length; t < i; t++)
                l(e.children[t], n, r)
        }
        function u(e, t) {
            return Gd.setFromMatrixPosition(e.matrixWorld),
            Kd.setFromMatrixPosition(t.matrixWorld),
            Gd.distanceToSquared(Kd)
        }
        function d(e) {
            let t = [];
            return e.traverseVisible(function(e) {
                e.isCSS2DObject && t.push(e)
            }),
            t
        }
        function f(e) {
            let t = d(e).sort(function(e, t) {
                return e.renderOrder === t.renderOrder ? o.objects.get(e).distanceToCameraSquared - o.objects.get(t).distanceToCameraSquared : t.renderOrder - e.renderOrder
            })
              , n = t.length;
            for (let e = 0, r = t.length; e < r; e++)
                t[e].element.style.zIndex = n - e
        }
    }
}
  , Jd = class e extends Q {
    constructor() {
        let t = e.SkyShader
          , n = new Xr({
            name: t.name,
            uniforms: qr.clone(t.uniforms),
            vertexShader: t.vertexShader,
            fragmentShader: t.fragmentShader,
            side: 1,
            depthWrite: !1
        });
        super(new Hr(1,1,1), n),
        this.isSky = !0
    }
}
;
Jd.SkyShader = {
    name: `SkyShader`,
    uniforms: {
        turbidity: {
            value: 2
        },
        rayleigh: {
            value: 1
        },
        mieCoefficient: {
            value: .005
        },
        mieDirectionalG: {
            value: .8
        },
        sunPosition: {
            value: new Y
        },
        up: {
            value: new Y(0,1,0)
        }
    },
    vertexShader: `
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,
    fragmentShader: `
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
};
var Yd = new Y;
function Xd(e, t, n, r, i, a) {
    let o = 2 * Math.PI * i / 4
      , s = Math.max(a - 2 * i, 0)
      , c = Math.PI / 4;
    Yd.copy(t),
    Yd[r] = 0,
    Yd.normalize();
    let l = .5 * o / (o + s)
      , u = 1 - Yd.angleTo(e) / c;
    return Math.sign(Yd[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u)
}
var Zd = class e extends Hr {
    constructor(e=1, t=1, n=1, r=2, i=.1) {
        let a = r * 2 + 1;
        if (i = Math.min(e / 2, t / 2, n / 2, i),
        super(1, 1, 1, a, a, a),
        this.type = `RoundedBoxGeometry`,
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            segments: r,
            radius: i
        },
        a === 1)
            return;
        let o = this.toNonIndexed();
        this.index = null,
        this.attributes.position = o.attributes.position,
        this.attributes.normal = o.attributes.normal,
        this.attributes.uv = o.attributes.uv;
        let s = new Y
          , c = new Y
          , l = new Y(e,t,n).divideScalar(2).subScalar(i)
          , u = this.attributes.position.array
          , d = this.attributes.normal.array
          , f = this.attributes.uv.array
          , p = u.length / 6
          , m = new Y
          , h = .5 / a;
        for (let r = 0, a = 0; r < u.length; r += 3,
        a += 2)
            switch (s.fromArray(u, r),
            c.copy(s),
            c.x -= Math.sign(c.x) * h,
            c.y -= Math.sign(c.y) * h,
            c.z -= Math.sign(c.z) * h,
            c.normalize(),
            u[r + 0] = l.x * Math.sign(s.x) + c.x * i,
            u[r + 1] = l.y * Math.sign(s.y) + c.y * i,
            u[r + 2] = l.z * Math.sign(s.z) + c.z * i,
            d[r + 0] = c.x,
            d[r + 1] = c.y,
            d[r + 2] = c.z,
            Math.floor(r / p)) {
            case 0:
                m.set(1, 0, 0),
                f[a + 0] = Xd(m, c, `z`, `y`, i, n),
                f[a + 1] = 1 - Xd(m, c, `y`, `z`, i, t);
                break;
            case 1:
                m.set(-1, 0, 0),
                f[a + 0] = 1 - Xd(m, c, `z`, `y`, i, n),
                f[a + 1] = 1 - Xd(m, c, `y`, `z`, i, t);
                break;
            case 2:
                m.set(0, 1, 0),
                f[a + 0] = 1 - Xd(m, c, `x`, `z`, i, e),
                f[a + 1] = Xd(m, c, `z`, `x`, i, n);
                break;
            case 3:
                m.set(0, -1, 0),
                f[a + 0] = 1 - Xd(m, c, `x`, `z`, i, e),
                f[a + 1] = 1 - Xd(m, c, `z`, `x`, i, n);
                break;
            case 4:
                m.set(0, 0, 1),
                f[a + 0] = 1 - Xd(m, c, `x`, `y`, i, e),
                f[a + 1] = 1 - Xd(m, c, `y`, `x`, i, t);
                break;
            case 5:
                m.set(0, 0, -1),
                f[a + 0] = Xd(m, c, `x`, `y`, i, e),
                f[a + 1] = 1 - Xd(m, c, `y`, `x`, i, t);
                break
            }
    }
    static fromJSON(t) {
        return new e(t.width,t.height,t.depth,t.segments,t.radius)
    }
}
  , Qd = {
    name: `CopyShader`,
    uniforms: {
        tDiffuse: {
            value: null
        },
        opacity: {
            value: 1
        }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
}
  , $d = class {
    constructor() {
        this.isPass = !0,
        this.enabled = !0,
        this.needsSwap = !0,
        this.clear = !1,
        this.renderToScreen = !1
    }
    setSize() {}
    render() {
        console.error(`THREE.Pass: .render() must be implemented in derived pass.`)
    }
    dispose() {}
}
  , ef = new xs(-1,1,1,-1,0,1)
  , tf = new class extends Or {
    constructor() {
        super(),
        this.setAttribute(`position`, new br([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
        this.setAttribute(`uv`, new br([0, 2, 0, 0, 2, 0],2))
    }
}
  , nf = class {
    constructor(e) {
        this._mesh = new Q(tf,e)
    }
    dispose() {
        this._mesh.geometry.dispose()
    }
    render(e) {
        e.render(this._mesh, ef)
    }
    get material() {
        return this._mesh.material
    }
    set material(e) {
        this._mesh.material = e
    }
}
  , rf = class extends $d {
    constructor(e, t=`tDiffuse`) {
        super(),
        this.textureID = t,
        this.uniforms = null,
        this.material = null,
        e instanceof Xr ? (this.uniforms = e.uniforms,
        this.material = e) : e && (this.uniforms = qr.clone(e.uniforms),
        this.material = new Xr({
            name: e.name === void 0 ? `unspecified` : e.name,
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
        })),
        this._fsQuad = new nf(this.material)
    }
    render(e, t, n) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture),
        this._fsQuad.material = this.material,
        this.renderToScreen ? (e.setRenderTarget(null),
        this._fsQuad.render(e)) : (e.setRenderTarget(t),
        this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        this._fsQuad.render(e))
    }
    dispose() {
        this.material.dispose(),
        this._fsQuad.dispose()
    }
}
  , af = class extends $d {
    constructor(e, t) {
        super(),
        this.scene = e,
        this.camera = t,
        this.clear = !0,
        this.needsSwap = !1,
        this.inverse = !1
    }
    render(e, t, n) {
        let r = e.getContext()
          , i = e.state;
        i.buffers.color.setMask(!1),
        i.buffers.depth.setMask(!1),
        i.buffers.color.setLocked(!0),
        i.buffers.depth.setLocked(!0);
        let a, o;
        this.inverse ? (a = 0,
        o = 1) : (a = 1,
        o = 0),
        i.buffers.stencil.setTest(!0),
        i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295),
        i.buffers.stencil.setClear(o),
        i.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        i.buffers.color.setLocked(!1),
        i.buffers.depth.setLocked(!1),
        i.buffers.color.setMask(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.stencil.setLocked(!1),
        i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295),
        i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        i.buffers.stencil.setLocked(!0)
    }
}
  , of = class extends $d {
    constructor() {
        super(),
        this.needsSwap = !1
    }
    render(e) {
        e.state.buffers.stencil.setLocked(!1),
        e.state.buffers.stencil.setTest(!1)
    }
}
  , sf = class {
    constructor(e, t) {
        if (this.renderer = e,
        this._pixelRatio = e.getPixelRatio(),
        t === void 0) {
            let n = e.getSize(new J);
            this._width = n.width,
            this._height = n.height,
            t = new Vt(this._width * this._pixelRatio,this._height * this._pixelRatio,{
                type: y
            }),
            t.texture.name = `EffectComposer.rt1`
        } else
            this._width = t.width,
            this._height = t.height;
        this.renderTarget1 = t,
        this.renderTarget2 = t.clone(),
        this.renderTarget2.texture.name = `EffectComposer.rt2`,
        this.writeBuffer = this.renderTarget1,
        this.readBuffer = this.renderTarget2,
        this.renderToScreen = !0,
        this.passes = [],
        this.copyPass = new rf(Qd),
        this.copyPass.material.blending = 0,
        this.clock = new Es
    }
    swapBuffers() {
        let e = this.readBuffer;
        this.readBuffer = this.writeBuffer,
        this.writeBuffer = e
    }
    addPass(e) {
        this.passes.push(e),
        e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
    }
    insertPass(e, t) {
        this.passes.splice(t, 0, e),
        e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
    }
    removePass(e) {
        let t = this.passes.indexOf(e);
        t !== -1 && this.passes.splice(t, 1)
    }
    isLastEnabledPass(e) {
        for (let t = e + 1; t < this.passes.length; t++)
            if (this.passes[t].enabled)
                return !1;
        return !0
    }
    render(e) {
        e === void 0 && (e = this.clock.getDelta());
        let t = this.renderer.getRenderTarget()
          , n = !1;
        for (let t = 0, r = this.passes.length; t < r; t++) {
            let r = this.passes[t];
            if (r.enabled !== !1) {
                if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t),
                r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
                r.needsSwap) {
                    if (n) {
                        let t = this.renderer.getContext()
                          , n = this.renderer.state.buffers.stencil;
                        n.setFunc(t.NOTEQUAL, 1, 4294967295),
                        this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                        n.setFunc(t.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                af !== void 0 && (r instanceof af ? n = !0 : r instanceof of && (n = !1))
            }
        }
        this.renderer.setRenderTarget(t)
    }
    reset(e) {
        if (e === void 0) {
            let t = this.renderer.getSize(new J);
            this._pixelRatio = this.renderer.getPixelRatio(),
            this._width = t.width,
            this._height = t.height,
            e = this.renderTarget1.clone(),
            e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.renderTarget1 = e,
        this.renderTarget2 = e.clone(),
        this.writeBuffer = this.renderTarget1,
        this.readBuffer = this.renderTarget2
    }
    setSize(e, t) {
        this._width = e,
        this._height = t;
        let n = this._width * this._pixelRatio
          , r = this._height * this._pixelRatio;
        this.renderTarget1.setSize(n, r),
        this.renderTarget2.setSize(n, r);
        for (let e = 0; e < this.passes.length; e++)
            this.passes[e].setSize(n, r)
    }
    setPixelRatio(e) {
        this._pixelRatio = e,
        this.setSize(this._width, this._height)
    }
    dispose() {
        this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.copyPass.dispose()
    }
}
  , cf = class extends $d {
    constructor(e, t, n=null, r=null, i=null) {
        super(),
        this.scene = e,
        this.camera = t,
        this.overrideMaterial = n,
        this.clearColor = r,
        this.clearAlpha = i,
        this.clear = !0,
        this.clearDepth = !1,
        this.needsSwap = !1,
        this.isRenderPass = !0,
        this._oldClearColor = new Z
    }
    render(e, t, n) {
        let r = e.autoClear;
        e.autoClear = !1;
        let i, a;
        this.overrideMaterial !== null && (a = this.scene.overrideMaterial,
        this.scene.overrideMaterial = this.overrideMaterial),
        this.clearColor !== null && (e.getClearColor(this._oldClearColor),
        e.setClearColor(this.clearColor, e.getClearAlpha())),
        this.clearAlpha !== null && (i = e.getClearAlpha(),
        e.setClearAlpha(this.clearAlpha)),
        this.clearDepth == 1 && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor !== null && e.setClearColor(this._oldClearColor),
        this.clearAlpha !== null && e.setClearAlpha(i),
        this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
        e.autoClear = r
    }
}
  , lf = {
    name: `LuminosityHighPassShader`,
    uniforms: {
        tDiffuse: {
            value: null
        },
        luminosityThreshold: {
            value: 1
        },
        smoothWidth: {
            value: 1
        },
        defaultColor: {
            value: new Z(0)
        },
        defaultOpacity: {
            value: 0
        }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
}
  , uf = class e extends $d {
    constructor(e, t=1, n, r) {
        super(),
        this.strength = t,
        this.radius = n,
        this.threshold = r,
        this.resolution = e === void 0 ? new J(256,256) : new J(e.x,e.y),
        this.clearColor = new Z(0,0,0),
        this.needsSwap = !1,
        this.renderTargetsHorizontal = [],
        this.renderTargetsVertical = [],
        this.nMips = 5;
        let i = Math.round(this.resolution.x / 2)
          , a = Math.round(this.resolution.y / 2);
        this.renderTargetBright = new Vt(i,a,{
            type: y
        }),
        this.renderTargetBright.texture.name = `UnrealBloomPass.bright`,
        this.renderTargetBright.texture.generateMipmaps = !1;
        for (let e = 0; e < this.nMips; e++) {
            let t = new Vt(i,a,{
                type: y
            });
            t.texture.name = `UnrealBloomPass.h` + e,
            t.texture.generateMipmaps = !1,
            this.renderTargetsHorizontal.push(t);
            let n = new Vt(i,a,{
                type: y
            });
            n.texture.name = `UnrealBloomPass.v` + e,
            n.texture.generateMipmaps = !1,
            this.renderTargetsVertical.push(n),
            i = Math.round(i / 2),
            a = Math.round(a / 2)
        }
        let o = lf;
        this.highPassUniforms = qr.clone(o.uniforms),
        this.highPassUniforms.luminosityThreshold.value = r,
        this.highPassUniforms.smoothWidth.value = .01,
        this.materialHighPassFilter = new Xr({
            uniforms: this.highPassUniforms,
            vertexShader: o.vertexShader,
            fragmentShader: o.fragmentShader
        }),
        this.separableBlurMaterials = [];
        let s = [6, 10, 14, 18, 22];
        i = Math.round(this.resolution.x / 2),
        a = Math.round(this.resolution.y / 2);
        for (let e = 0; e < this.nMips; e++)
            this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),
            this.separableBlurMaterials[e].uniforms.invSize.value = new J(1 / i,1 / a),
            i = Math.round(i / 2),
            a = Math.round(a / 2);
        this.compositeMaterial = this._getCompositeMaterial(this.nMips),
        this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture,
        this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture,
        this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture,
        this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture,
        this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture,
        this.compositeMaterial.uniforms.bloomStrength.value = t,
        this.compositeMaterial.uniforms.bloomRadius.value = .1;
        let c = [1, .8, .6, .4, .2];
        this.compositeMaterial.uniforms.bloomFactors.value = c,
        this.bloomTintColors = [new Y(1,1,1), new Y(1,1,1), new Y(1,1,1), new Y(1,1,1), new Y(1,1,1)],
        this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors,
        this.copyUniforms = qr.clone(Qd.uniforms),
        this.blendMaterial = new Xr({
            uniforms: this.copyUniforms,
            vertexShader: Qd.vertexShader,
            fragmentShader: Qd.fragmentShader,
            premultipliedAlpha: !0,
            blending: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }),
        this._oldClearColor = new Z,
        this._oldClearAlpha = 1,
        this._basic = new pr,
        this._fsQuad = new nf(null)
    }
    dispose() {
        for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
            this.renderTargetsHorizontal[e].dispose();
        for (let e = 0; e < this.renderTargetsVertical.length; e++)
            this.renderTargetsVertical[e].dispose();
        this.renderTargetBright.dispose();
        for (let e = 0; e < this.separableBlurMaterials.length; e++)
            this.separableBlurMaterials[e].dispose();
        this.compositeMaterial.dispose(),
        this.blendMaterial.dispose(),
        this._basic.dispose(),
        this._fsQuad.dispose()
    }
    setSize(e, t) {
        let n = Math.round(e / 2)
          , r = Math.round(t / 2);
        this.renderTargetBright.setSize(n, r);
        for (let e = 0; e < this.nMips; e++)
            this.renderTargetsHorizontal[e].setSize(n, r),
            this.renderTargetsVertical[e].setSize(n, r),
            this.separableBlurMaterials[e].uniforms.invSize.value = new J(1 / n,1 / r),
            n = Math.round(n / 2),
            r = Math.round(r / 2)
    }
    render(t, n, r, i, a) {
        t.getClearColor(this._oldClearColor),
        this._oldClearAlpha = t.getClearAlpha();
        let o = t.autoClear;
        t.autoClear = !1,
        t.setClearColor(this.clearColor, 0),
        a && t.state.buffers.stencil.setTest(!1),
        this.renderToScreen && (this._fsQuad.material = this._basic,
        this._basic.map = r.texture,
        t.setRenderTarget(null),
        t.clear(),
        this._fsQuad.render(t)),
        this.highPassUniforms.tDiffuse.value = r.texture,
        this.highPassUniforms.luminosityThreshold.value = this.threshold,
        this._fsQuad.material = this.materialHighPassFilter,
        t.setRenderTarget(this.renderTargetBright),
        t.clear(),
        this._fsQuad.render(t);
        let s = this.renderTargetBright;
        for (let n = 0; n < this.nMips; n++)
            this._fsQuad.material = this.separableBlurMaterials[n],
            this.separableBlurMaterials[n].uniforms.colorTexture.value = s.texture,
            this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionX,
            t.setRenderTarget(this.renderTargetsHorizontal[n]),
            t.clear(),
            this._fsQuad.render(t),
            this.separableBlurMaterials[n].uniforms.colorTexture.value = this.renderTargetsHorizontal[n].texture,
            this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionY,
            t.setRenderTarget(this.renderTargetsVertical[n]),
            t.clear(),
            this._fsQuad.render(t),
            s = this.renderTargetsVertical[n];
        this._fsQuad.material = this.compositeMaterial,
        this.compositeMaterial.uniforms.bloomStrength.value = this.strength,
        this.compositeMaterial.uniforms.bloomRadius.value = this.radius,
        this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors,
        t.setRenderTarget(this.renderTargetsHorizontal[0]),
        t.clear(),
        this._fsQuad.render(t),
        this._fsQuad.material = this.blendMaterial,
        this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture,
        a && t.state.buffers.stencil.setTest(!0),
        this.renderToScreen ? (t.setRenderTarget(null),
        this._fsQuad.render(t)) : (t.setRenderTarget(r),
        this._fsQuad.render(t)),
        t.setClearColor(this._oldClearColor, this._oldClearAlpha),
        t.autoClear = o
    }
    _getSeparableBlurMaterial(e) {
        let t = []
          , n = e / 3;
        for (let r = 0; r < e; r++)
            t.push(.39894 * Math.exp(-.5 * r * r / (n * n)) / n);
        return new Xr({
            defines: {
                KERNEL_RADIUS: e
            },
            uniforms: {
                colorTexture: {
                    value: null
                },
                invSize: {
                    value: new J(.5,.5)
                },
                direction: {
                    value: new J(.5,.5)
                },
                gaussianCoefficients: {
                    value: t
                }
            },
            vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
            fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`
        })
    }
    _getCompositeMaterial(e) {
        return new Xr({
            defines: {
                NUM_MIPS: e
            },
            uniforms: {
                blurTexture1: {
                    value: null
                },
                blurTexture2: {
                    value: null
                },
                blurTexture3: {
                    value: null
                },
                blurTexture4: {
                    value: null
                },
                blurTexture5: {
                    value: null
                },
                bloomStrength: {
                    value: 1
                },
                bloomFactors: {
                    value: null
                },
                bloomTintColors: {
                    value: null
                },
                bloomRadius: {
                    value: 0
                }
            },
            vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
            fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`
        })
    }
}
;
uf.BlurDirectionX = new J(1,0),
uf.BlurDirectionY = new J(0,1);
var df = {
    name: `OutputShader`,
    uniforms: {
        tDiffuse: {
            value: null
        },
        toneMappingExposure: {
            value: 1
        }
    },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
}
  , ff = class extends $d {
    constructor() {
        super(),
        this.isOutputPass = !0,
        this.uniforms = qr.clone(df.uniforms),
        this.material = new Go({
            name: df.name,
            uniforms: this.uniforms,
            vertexShader: df.vertexShader,
            fragmentShader: df.fragmentShader
        }),
        this._fsQuad = new nf(this.material),
        this._outputColorSpace = null,
        this._toneMapping = null
    }
    render(e, t, n) {
        this.uniforms.tDiffuse.value = n.texture,
        this.uniforms.toneMappingExposure.value = e.toneMappingExposure,
        (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace,
        this._toneMapping = e.toneMapping,
        this.material.defines = {},
        Ot.getTransfer(this._outputColorSpace) === `srgb` && (this.material.defines.SRGB_TRANSFER = ``),
        this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = `` : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = `` : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = `` : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = `` : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = `` : this._toneMapping === 7 ? this.material.defines.NEUTRAL_TONE_MAPPING = `` : this._toneMapping === 5 && (this.material.defines.CUSTOM_TONE_MAPPING = ``),
        this.material.needsUpdate = !0),
        this.renderToScreen === !0 ? (e.setRenderTarget(null),
        this._fsQuad.render(e)) : (e.setRenderTarget(t),
        this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        this._fsQuad.render(e))
    }
    dispose() {
        this.material.dispose(),
        this._fsQuad.dispose()
    }
}
  , pf = new Wt
  , mf = new Y
  , hf = class extends ws {
    constructor() {
        super(),
        this.isLineSegmentsGeometry = !0,
        this.type = `LineSegmentsGeometry`,
        this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]),
        this.setAttribute(`position`, new br([-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0],3)),
        this.setAttribute(`uv`, new br([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2],2))
    }
    applyMatrix4(e) {
        let t = this.attributes.instanceStart
          , n = this.attributes.instanceEnd;
        return t !== void 0 && (t.applyMatrix4(e),
        n.applyMatrix4(e),
        t.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    setPositions(e) {
        let t;
        e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
        let n = new zs(t,6,1);
        return this.setAttribute(`instanceStart`, new mi(n,3,0)),
        this.setAttribute(`instanceEnd`, new mi(n,3,3)),
        this.instanceCount = this.attributes.instanceStart.count,
        this.computeBoundingBox(),
        this.computeBoundingSphere(),
        this
    }
    setColors(e) {
        let t;
        e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
        let n = new zs(t,6,1);
        return this.setAttribute(`instanceColorStart`, new mi(n,3,0)),
        this.setAttribute(`instanceColorEnd`, new mi(n,3,3)),
        this
    }
    fromWireframeGeometry(e) {
        return this.setPositions(e.attributes.position.array),
        this
    }
    fromEdgesGeometry(e) {
        return this.setPositions(e.attributes.position.array),
        this
    }
    fromMesh(e) {
        return this.fromWireframeGeometry(new Uo(e.geometry)),
        this
    }
    fromLineSegments(e) {
        let t = e.geometry;
        return this.setPositions(t.attributes.position.array),
        this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Wt);
        let e = this.attributes.instanceStart
          , t = this.attributes.instanceEnd;
        e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e),
        pf.setFromBufferAttribute(t),
        this.boundingBox.union(pf))
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ln),
        this.boundingBox === null && this.computeBoundingBox();
        let e = this.attributes.instanceStart
          , t = this.attributes.instanceEnd;
        if (e !== void 0 && t !== void 0) {
            let n = this.boundingSphere.center;
            this.boundingBox.getCenter(n);
            let r = 0;
            for (let i = 0, a = e.count; i < a; i++)
                mf.fromBufferAttribute(e, i),
                r = Math.max(r, n.distanceToSquared(mf)),
                mf.fromBufferAttribute(t, i),
                r = Math.max(r, n.distanceToSquared(mf));
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`, this)
        }
    }
    toJSON() {}
}
;
$.line = {
    worldUnits: {
        value: 1
    },
    linewidth: {
        value: 1
    },
    resolution: {
        value: new J(1,1)
    },
    dashOffset: {
        value: 0
    },
    dashScale: {
        value: 1
    },
    dashSize: {
        value: 1
    },
    gapSize: {
        value: 1
    }
},
nc.line = {
    uniforms: qr.merge([$.common, $.fog, $.line]),
    vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
    fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
};
var gf = class extends Xr {
    constructor(e) {
        super({
            type: `LineMaterial`,
            uniforms: qr.clone(nc.line.uniforms),
            vertexShader: nc.line.vertexShader,
            fragmentShader: nc.line.fragmentShader,
            clipping: !0
        }),
        this.isLineMaterial = !0,
        this.setValues(e)
    }
    get color() {
        return this.uniforms.diffuse.value
    }
    set color(e) {
        this.uniforms.diffuse.value = e
    }
    get worldUnits() {
        return `WORLD_UNITS` in this.defines
    }
    set worldUnits(e) {
        e === !0 ? this.defines.WORLD_UNITS = `` : delete this.defines.WORLD_UNITS
    }
    get linewidth() {
        return this.uniforms.linewidth.value
    }
    set linewidth(e) {
        this.uniforms.linewidth && (this.uniforms.linewidth.value = e)
    }
    get dashed() {
        return `USE_DASH` in this.defines
    }
    set dashed(e) {
        e === !0 !== this.dashed && (this.needsUpdate = !0),
        e === !0 ? this.defines.USE_DASH = `` : delete this.defines.USE_DASH
    }
    get dashScale() {
        return this.uniforms.dashScale.value
    }
    set dashScale(e) {
        this.uniforms.dashScale.value = e
    }
    get dashSize() {
        return this.uniforms.dashSize.value
    }
    set dashSize(e) {
        this.uniforms.dashSize.value = e
    }
    get dashOffset() {
        return this.uniforms.dashOffset.value
    }
    set dashOffset(e) {
        this.uniforms.dashOffset.value = e
    }
    get gapSize() {
        return this.uniforms.gapSize.value
    }
    set gapSize(e) {
        this.uniforms.gapSize.value = e
    }
    get opacity() {
        return this.uniforms.opacity.value
    }
    set opacity(e) {
        this.uniforms && (this.uniforms.opacity.value = e)
    }
    get resolution() {
        return this.uniforms.resolution.value
    }
    set resolution(e) {
        this.uniforms.resolution.value.copy(e)
    }
    get alphaToCoverage() {
        return `USE_ALPHA_TO_COVERAGE` in this.defines
    }
    set alphaToCoverage(e) {
        this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0),
        e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = `` : delete this.defines.USE_ALPHA_TO_COVERAGE)
    }
}
, _f = new zt, vf = new Y, yf = new Y, bf = new zt, xf = new zt, Sf = new zt, Cf = new Y, wf = new vn, Tf = new Js, Ef = new Y, Df = new Wt, Of = new ln, kf = new zt, Af, jf;
function Mf(e, t, n) {
    return kf.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix),
    kf.multiplyScalar(1 / kf.w),
    kf.x = jf / n.width,
    kf.y = jf / n.height,
    kf.applyMatrix4(e.projectionMatrixInverse),
    kf.multiplyScalar(1 / kf.w),
    Math.abs(Math.max(kf.x, kf.y))
}
function Nf(e, t) {
    let n = e.matrixWorld
      , r = e.geometry
      , i = r.attributes.instanceStart
      , a = r.attributes.instanceEnd
      , o = Math.min(r.instanceCount, i.count);
    for (let r = 0, s = o; r < s; r++) {
        Tf.start.fromBufferAttribute(i, r),
        Tf.end.fromBufferAttribute(a, r),
        Tf.applyMatrix4(n);
        let o = new Y
          , s = new Y;
        Af.distanceSqToSegment(Tf.start, Tf.end, s, o),
        s.distanceTo(o) < jf * .5 && t.push({
            point: s,
            pointOnLine: o,
            distance: Af.origin.distanceTo(s),
            object: e,
            face: null,
            faceIndex: r,
            uv: null,
            uv1: null
        })
    }
}
function Pf(e, t, n) {
    let r = t.projectionMatrix
      , i = e.material.resolution
      , a = e.matrixWorld
      , o = e.geometry
      , s = o.attributes.instanceStart
      , c = o.attributes.instanceEnd
      , l = Math.min(o.instanceCount, s.count)
      , u = -t.near;
    Af.at(1, Sf),
    Sf.w = 1,
    Sf.applyMatrix4(t.matrixWorldInverse),
    Sf.applyMatrix4(r),
    Sf.multiplyScalar(1 / Sf.w),
    Sf.x *= i.x / 2,
    Sf.y *= i.y / 2,
    Sf.z = 0,
    Cf.copy(Sf),
    wf.multiplyMatrices(t.matrixWorldInverse, a);
    for (let t = 0, o = l; t < o; t++) {
        if (bf.fromBufferAttribute(s, t),
        xf.fromBufferAttribute(c, t),
        bf.w = 1,
        xf.w = 1,
        bf.applyMatrix4(wf),
        xf.applyMatrix4(wf),
        bf.z > u && xf.z > u)
            continue;
        if (bf.z > u) {
            let e = bf.z - xf.z
              , t = (bf.z - u) / e;
            bf.lerp(xf, t)
        } else if (xf.z > u) {
            let e = xf.z - bf.z
              , t = (xf.z - u) / e;
            xf.lerp(bf, t)
        }
        bf.applyMatrix4(r),
        xf.applyMatrix4(r),
        bf.multiplyScalar(1 / bf.w),
        xf.multiplyScalar(1 / xf.w),
        bf.x *= i.x / 2,
        bf.y *= i.y / 2,
        xf.x *= i.x / 2,
        xf.y *= i.y / 2,
        Tf.start.copy(bf),
        Tf.start.z = 0,
        Tf.end.copy(xf),
        Tf.end.z = 0;
        let o = Tf.closestPointToPointParameter(Cf, !0);
        Tf.at(o, Ef);
        let l = q.lerp(bf.z, xf.z, o)
          , d = l >= -1 && l <= 1
          , f = Cf.distanceTo(Ef) < jf * .5;
        if (d && f) {
            Tf.start.fromBufferAttribute(s, t),
            Tf.end.fromBufferAttribute(c, t),
            Tf.start.applyMatrix4(a),
            Tf.end.applyMatrix4(a);
            let r = new Y
              , i = new Y;
            Af.distanceSqToSegment(Tf.start, Tf.end, i, r),
            n.push({
                point: i,
                pointOnLine: r,
                distance: Af.origin.distanceTo(i),
                object: e,
                face: null,
                faceIndex: t,
                uv: null,
                uv1: null
            })
        }
    }
}
var Ff = class extends Q {
    constructor(e=new hf, t=new gf({
        color: Math.random() * 16777215
    })) {
        super(e, t),
        this.isLineSegments2 = !0,
        this.type = `LineSegments2`
    }
    computeLineDistances() {
        let e = this.geometry
          , t = e.attributes.instanceStart
          , n = e.attributes.instanceEnd
          , r = new Float32Array(2 * t.count);
        for (let e = 0, i = 0, a = t.count; e < a; e++,
        i += 2)
            vf.fromBufferAttribute(t, e),
            yf.fromBufferAttribute(n, e),
            r[i] = i === 0 ? 0 : r[i - 1],
            r[i + 1] = r[i] + vf.distanceTo(yf);
        let i = new zs(r,2,1);
        return e.setAttribute(`instanceDistanceStart`, new mi(i,1,0)),
        e.setAttribute(`instanceDistanceEnd`, new mi(i,1,1)),
        this
    }
    raycast(e, t) {
        let n = this.material.worldUnits
          , r = e.camera;
        r === null && !n && console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);
        let i = e.params.Line2 === void 0 ? 0 : e.params.Line2.threshold || 0;
        Af = e.ray;
        let a = this.matrixWorld
          , o = this.geometry
          , s = this.material;
        jf = s.linewidth + i,
        o.boundingSphere === null && o.computeBoundingSphere(),
        Of.copy(o.boundingSphere).applyMatrix4(a);
        let c;
        if (c = n ? jf * .5 : Mf(r, Math.max(r.near, Of.distanceToPoint(Af.origin)), s.resolution),
        Of.radius += c,
        Af.intersectsSphere(Of) === !1)
            return;
        o.boundingBox === null && o.computeBoundingBox(),
        Df.copy(o.boundingBox).applyMatrix4(a);
        let l;
        l = n ? jf * .5 : Mf(r, Math.max(r.near, Df.distanceToPoint(Af.origin)), s.resolution),
        Df.expandByScalar(l),
        Af.intersectsBox(Df) !== !1 && (n ? Nf(this, t) : Pf(this, r, t))
    }
    onBeforeRender(e) {
        let t = this.material.uniforms;
        t && t.resolution && (e.getViewport(_f),
        this.material.uniforms.resolution.value.set(_f.z, _f.w))
    }
}
  , If = class extends hf {
    constructor() {
        super(),
        this.isLineGeometry = !0,
        this.type = `LineGeometry`
    }
    setPositions(e) {
        let t = e.length - 3
          , n = new Float32Array(2 * t);
        for (let r = 0; r < t; r += 3)
            n[2 * r] = e[r],
            n[2 * r + 1] = e[r + 1],
            n[2 * r + 2] = e[r + 2],
            n[2 * r + 3] = e[r + 3],
            n[2 * r + 4] = e[r + 4],
            n[2 * r + 5] = e[r + 5];
        return super.setPositions(n),
        this
    }
    setColors(e) {
        let t = e.length - 3
          , n = new Float32Array(2 * t);
        for (let r = 0; r < t; r += 3)
            n[2 * r] = e[r],
            n[2 * r + 1] = e[r + 1],
            n[2 * r + 2] = e[r + 2],
            n[2 * r + 3] = e[r + 3],
            n[2 * r + 4] = e[r + 4],
            n[2 * r + 5] = e[r + 5];
        return super.setColors(n),
        this
    }
    setFromPoints(e) {
        let t = e.length - 1
          , n = new Float32Array(6 * t);
        for (let r = 0; r < t; r++)
            n[6 * r] = e[r].x,
            n[6 * r + 1] = e[r].y,
            n[6 * r + 2] = e[r].z || 0,
            n[6 * r + 3] = e[r + 1].x,
            n[6 * r + 4] = e[r + 1].y,
            n[6 * r + 5] = e[r + 1].z || 0;
        return super.setPositions(n),
        this
    }
    fromLine(e) {
        let t = e.geometry;
        return this.setPositions(t.attributes.position.array),
        this
    }
}
  , Lf = class extends Ff {
    constructor(e=new If, t=new gf({
        color: Math.random() * 16777215
    })) {
        super(e, t),
        this.isLine2 = !0,
        this.type = `Line2`
    }
}
  , Rf = {
    post: {
        w: .17,
        d: .16,
        kgm: 4.15
    },
    rail: {
        w: .156,
        h: .238,
        kgm: 11.763
    },
    gutter: {
        w: .16,
        h: .15,
        kgm: 4.575,
        ledKgm: 1.95
    },
    panel: {
        chord: .298,
        thick: .07,
        pitch: .235,
        kgm: 4.4
    },
    motor: {
        w: .141,
        h: .089,
        len: .62
    },
    moduleMax: 4,
    maxAngle: 115,
    zip: {
        cassette: .11,
        guide: [.04, .06],
        bar: [.05, .03]
    },
    giy: {
        post: [.06, .12],
        top: [.16, .12],
        frame: .03,
        rail: .045,
        glass: .008
    },
    slat: {
        w: .082,
        h: .06,
        pitch: .72,
        kgm: 1.4,
        fabricKgm2: .3
    },
    slide: {
        track: [.11, .06],
        frame: .035,
        rail: .045,
        glass: .008,
        pane: .95,
        gap: .024
    }
}
  , zf = {
    warm: `#ffd38a`,
    white: `#ffffff`,
    day: `#dfeeff`
}
  , Bf = {
    adana: 37,
    istanbul: 41,
    ankara: 39.9,
    izmir: 38.4,
    antalya: 36.9,
    bursa: 40.2,
    gaziantep: 37.1,
    trabzon: 41
};
function Vf(e) {
    let t = navigator.deviceMemory || (e ? 4 : 8)
      , n = navigator.hardwareConcurrency || 4
      , r = (e ? t <= 3 || n <= 4 : t <= 2 || n <= 2) ? `low` : e ? `mid` : `high`;
    return {
        tier: r,
        ...{
            low: {
                dpr: 1,
                shadow: 1024,
                bloom: !1,
                rain: 500,
                aniso: 2,
                idleRotate: !1,
                env: !1
            },
            mid: {
                dpr: 1.5,
                shadow: 1024,
                bloom: !1,
                rain: 900,
                aniso: 4,
                idleRotate: !0,
                env: !0
            },
            high: {
                dpr: 2,
                shadow: 2048,
                bloom: !0,
                rain: 2400,
                aniso: 8,
                idleRotate: !0,
                env: !0
            }
        }[r]
    }
}
var Hf = {
    system: `bio`,
    mount: `free`,
    width: 5,
    depth: 4.5,
    height: 2.7,
    angle: 45,
    open: .35,
    colour: `#383e42`,
    colourName: `RAL 7016`,
    panelSep: !1,
    panelColour: `#383e42`,
    panelColourName: `RAL 7016`,
    fabricColour: `#e9e1cf`,
    fabricName: `Krem`,
    sides: {
        front: `none`,
        back: `none`,
        left: `none`,
        right: `none`
    },
    sideOpen: 0,
    clean: !1,
    giyDir: `up`,
    led: {
        master: !0,
        perimeter: !0,
        panels: !0,
        posts: !1,
        giy: !0
    },
    ledMode: `warm`,
    ledColour: `#ff4fd8`,
    ledDim: 1,
    night: !1,
    rain: !1,
    furniture: !0,
    tech: !1,
    sun: !1,
    sunHour: 14,
    sunMonth: 6,
    north: 0,
    city: `adana`,
    env: !0,
    rise: 0,
    wedge: !0,
    valance: `wave`
}
  , Uf = {
    day: {
        bg: `#e3eaf1`,
        fog: `#dfe7ef`,
        hemiSky: `#cfe3ff`,
        hemiGround: `#8c8577`,
        hemi: .75,
        sun: 2.4,
        sunColor: `#fff1d6`,
        ground: `#d6d3cc`,
        exposure: .82,
        grid: .16,
        elev: 38
    },
    night: {
        bg: `#0a0f1d`,
        fog: `#0a0f1d`,
        hemiSky: `#1b2950`,
        hemiGround: `#05070d`,
        hemi: .3,
        sun: .08,
        sunColor: `#9db4ff`,
        ground: `#262a33`,
        exposure: .9,
        grid: .08,
        elev: -6
    },
    tech: {
        bg: `#0b1526`,
        fog: `#0b1526`,
        hemiSky: `#6f8fc9`,
        hemiGround: `#0b1526`,
        hemi: .9,
        sun: 1.3,
        sunColor: `#dfe8ff`,
        ground: `#10203a`,
        exposure: 1,
        grid: .5,
        elev: 30
    },
    hero: {
        bg: `#0f172a`,
        fog: `#0f172a`,
        hemiSky: `#9fb8e8`,
        hemiGround: `#141a28`,
        hemi: .9,
        sun: 2,
        sunColor: `#ffe9c9`,
        ground: `#1b2334`,
        exposure: 1,
        grid: .22,
        elev: 32
    }
};
function Wf(t) {
    let n = [`ambient`, `hero`].includes(t.dataset.studio3d) ? t.dataset.studio3d : `studio`
      , i = t.querySelector(`[data-studio-canvas]`) || t
      , a = {};
    try {
        a = JSON.parse(t.dataset.config || `{}`)
    } catch {
        a = {}
    }
    let o = a.labels || {}
      , s = a.defaults || {}
      , c = {
        ...Hf,
        ...s,
        sides: {
            ...Hf.sides,
            ...s.sides || {}
        },
        led: {
            ...Hf.led,
            ...s.led || {}
        }
    }
      , l = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      , u = window.matchMedia(`(pointer: coarse)`).matches
      , d = Vf(u);
    t.classList.add(`tier-` + d.tier),
    s.env === void 0 && (c.env = d.env);
    let f = n === `hero` ? Uf.hero : Uf.day
      , p = !0
      , m = !0
      , h = () => {
        p = !0
    }
      , g = (e, t) => {
        let n = c.sides[e]
          , r = Array.isArray(n) ? n : [n || `none`];
        return Array.from({
            length: t
        }, (e, t) => r[Math.min(t, r.length - 1)] || `none`)
    }
      , _ = new hd({
        antialias: !0,
        powerPreference: `high-performance`
    });
    _.setPixelRatio(Math.min(window.devicePixelRatio || 1, d.dpr)),
    _.domElement.addEventListener(`webglcontextlost`, e => {
        e.preventDefault(),
        m = !1,
        t.classList.add(`is-ctxlost`);
        let n = t.querySelector(`.studio__loader span:last-child`);
        n && (n.textContent = o.ctx_lost || `WebGL context lost — reload`)
    }
    , !1),
    _.domElement.addEventListener(`webglcontextrestored`, () => {
        m = !0,
        t.classList.remove(`is-ctxlost`),
        h()
    }
    , !1),
    _.shadowMap.enabled = !0,
    _.shadowMap.type = 2,
    _.toneMapping = 4,
    _.toneMappingExposure = f.exposure,
    _.outputColorSpace = Le,
    _.domElement.className = `studio3d__gl`,
    i.appendChild(_.domElement);
    let v = new qd;
    v.domElement.className = `studio3d__labels`,
    i.appendChild(v.domElement);
    let b = new di;
    b.background = new Z(f.bg),
    b.fog = new ui(f.fog,22,70);
    let x = new Cc(_);
    b.environment = x.fromScene(new zd, .04).texture;
    let S = n !== `hero`
      , C = new Jd;
    C.scale.setScalar(4e3),
    C.visible = S,
    b.add(C);
    let w = C.material.uniforms;
    w.turbidity.value = 4,
    w.rayleigh.value = 1.6,
    w.mieCoefficient.value = .004,
    w.mieDirectionalG.value = .86;
    let T = new Y
      , E = new Or
      , D = 1400
      , O = new Float32Array(D * 3);
    for (let e = 0; e < D; e++) {
        let t = Math.random() * Math.PI * 2
          , n = Math.acos(Math.random() * .9 + .08);
        O.set([180 * Math.sin(n) * Math.cos(t), 180 * Math.cos(n), 180 * Math.sin(n) * Math.sin(t)], e * 3)
    }
    E.setAttribute(`position`, new _r(O,3));
    let k = new ca({
        color: 14674175,
        size: 1.1,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        fog: !1
    })
      , A = new pa(E,k);
    A.visible = !1,
    b.add(A);
    let j = new ti(36,1,.1,220);
    j.position.set(9, 4.5, 10);
    let M = new Ed(j,_.domElement);
    M.enableDamping = !0,
    M.dampingFactor = .06,
    M.maxPolarAngle = Math.PI / 2 - .02,
    M.minDistance = 2.2,
    M.maxDistance = 34,
    M.target.set(0, 1.2, 0),
    M.enablePan = n === `studio`,
    M.autoRotate = n === `ambient` && !l,
    M.autoRotateSpeed = .5,
    n !== `studio` && (M.enableZoom = !1,
    M.enabled = !1);
    let N = new sf(_,new Vt(1,1,{
        type: y,
        samples: d.bloom ? 4 : 0
    }));
    N.addPass(new cf(b,j));
    let ee = new uf(new J(1,1),.5,.35,1);
    N.addPass(ee),
    N.addPass(new ff);
    let P = d.bloom
      , te = new ms(f.hemiSky,f.hemiGround,f.hemi);
    b.add(te);
    let ne = new Cs(f.sunColor,f.sun);
    ne.position.set(8, 12, 6),
    ne.castShadow = !0,
    ne.shadow.mapSize.set(d.shadow, d.shadow),
    ne.shadow.camera.near = 1,
    ne.shadow.camera.far = 50,
    ne.shadow.bias = -5e-4,
    ne.shadow.normalBias = .02,
    b.add(ne),
    b.add(ne.target);
    let re = [0, 1, 2].map( () => new bs(`#ffd38a`,0,9,1.6));
    re.forEach(e => b.add(e));
    let ie = Kf()
      , F = new Ko({
        color: c.colour,
        metalness: .5,
        roughness: .45,
        roughnessMap: ie,
        envMapIntensity: .9
    })
      , ae = new Ko({
        color: c.colour,
        metalness: .55,
        roughness: .35,
        roughnessMap: ie,
        envMapIntensity: .9
    })
      , oe = new Ko({
        color: c.colour,
        metalness: .45,
        roughness: .4,
        roughnessMap: ie,
        envMapIntensity: .9
    })
      , se = new pr({
        map: qf(),
        transparent: !0,
        opacity: .55,
        depthWrite: !1,
        color: 0
    })
      , I = new Ko({
        color: `#111317`,
        metalness: .4,
        roughness: .6
    })
      , ce = new Ko({
        color: `#b9bec4`,
        metalness: .9,
        roughness: .3
    })
      , le = new Ko({
        color: `#1a1b1e`,
        roughness: .95
    })
      , ue = new qo({
        color: `#b9dcf0`,
        metalness: .05,
        roughness: .03,
        transparent: !0,
        opacity: .3,
        envMapIntensity: 1.5,
        side: 2,
        depthWrite: !1
    })
      , de = new Ko({
        map: Jf(),
        color: `#6a6f77`,
        roughness: .95,
        side: 2,
        transparent: !0,
        opacity: .93
    })
      , fe = new Ko({
        map: Yf(),
        color: c.fabricColour,
        roughness: .93,
        metalness: 0,
        side: 2
    })
      , pe = new Ko({
        color: `#e7e2da`,
        roughness: .95
    })
      , me = new Ko({
        color: `#8a8e95`,
        roughness: .9
    })
      , he = new Ko({
        color: `#d8d1c4`,
        roughness: .95
    })
      , ge = new Ko({
        color: `#6b4e36`,
        roughness: .7
    })
      , _e = new Ko({
        color: `#3f7a3a`,
        roughness: .9
    })
      , ve = new Ko({
        color: `#2c2e33`,
        roughness: .6
    })
      , ye = new Ko({
        map: Xf(),
        color: `#8aa66a`,
        roughness: 1
    })
      , be = new Ko({
        color: `#3b6a3e`,
        roughness: .95
    })
      , xe = new Ko({
        color: `#2a3340`,
        metalness: .3,
        roughness: .25
    })
      , Se = null
      , Ce = new Yi({
        color: 9421823,
        transparent: !0,
        opacity: .9
    })
      , we = new Ko({
        color: `#ffb547`,
        metalness: .6,
        roughness: .4,
        emissive: `#ff9f1a`,
        emissiveIntensity: .35
    })
      , Te = new Zo({
        color: 5231103,
        dashSize: .08,
        gapSize: .06,
        transparent: !0,
        opacity: .9
    })
      , Ee = () => new gf({
        color: `#ffd38a`,
        linewidth: 2.4,
        worldUnits: !1,
        toneMapped: !1
    })
      , L = {
        perimeter: Ee(),
        panels: Ee(),
        posts: Ee(),
        giy: Ee()
    }
      , De = new If;
    De.setPositions([-.5, 0, 0, .5, 0, 0]);
    let Oe = new Z(`#ffffff`)
      , ke = Gf();
    ke.wrapS = ke.wrapT = r,
    ke.repeat.set(40, 40),
    ke.anisotropy = Math.min(d.aniso, _.capabilities.getMaxAnisotropy()),
    ke.colorSpace = Le;
    let R = new Ko({
        map: n === `hero` ? null : ke,
        color: f.ground,
        roughness: .92
    })
      , Ae = new Q(new Ho(140,140),R);
    Ae.rotation.x = -Math.PI / 2,
    Ae.receiveShadow = !0,
    b.add(Ae);
    let z = new Ys(80,80,7312329,10466252);
    z.material.transparent = !0,
    z.material.opacity = f.grid,
    z.position.y = .002,
    b.add(z);
    let B = new si;
    b.add(B);
    let je = new si;
    b.add(je),
    je.visible = c.tech;
    let Me = []
      , Ne = []
      , Pe = []
      , Fe = []
      , Ie = []
      , Re = []
      , ze = []
      , Be = []
      , Ve = []
      , He = null
      , Ue = new Map
      , We = {
        modules: 1,
        panels: 0,
        postCount: 4,
        weight: 0
    }
      , V = (e, t, n, r, i=!0) => {
        let a = new Q(new Hr(e,t,n),r);
        return a.castShadow = i,
        a.receiveShadow = !0,
        a
    }
      , Ge = (e, t, n, r=`y`, i=14) => {
        let a = new Q(new ya(e,e,t,i),n);
        return r === `x` && (a.rotation.z = Math.PI / 2),
        r === `z` && (a.rotation.x = Math.PI / 2),
        a.castShadow = !0,
        a
    }
      , H = (e, t, n, r, i) => (t.position.set(n, r, i),
    e.add(t),
    t);
    function Ke(e) {
        let t = `p` + e.toFixed(3);
        if (!Ue.has(t)) {
            let n = new eo;
            n.moveTo(0, -.035),
            n.lineTo(.24, -.035),
            n.lineTo(.24, .046),
            n.lineTo(.298, .046),
            n.lineTo(.298, .062),
            n.lineTo(.235, .062),
            n.lineTo(.235, .025),
            n.lineTo(.04, .025),
            n.lineTo(.04, .05),
            n.lineTo(0, .05),
            n.lineTo(0, -.035);
            let r = new zo(n,{
                depth: e,
                bevelEnabled: !1
            });
            r.rotateY(-Math.PI / 2),
            r.translate(e / 2, 0, 0),
            r.computeVertexNormals(),
            Ue.set(t, r)
        }
        return Ue.get(t)
    }
    function qe(e) {
        let t = `g` + e.toFixed(3);
        if (!Ue.has(t)) {
            let n = Rf.gutter.w
              , r = Rf.gutter.h
              , i = .012
              , a = new eo;
            a.moveTo(-n / 2, 0),
            a.lineTo(n / 2, 0),
            a.lineTo(n / 2, r),
            a.lineTo(n / 2 - i, r),
            a.lineTo(n / 2 - i, i),
            a.lineTo(-n / 2 + i, i),
            a.lineTo(-n / 2 + i, r),
            a.lineTo(-n / 2, r),
            a.lineTo(-n / 2, 0);
            let o = new zo(a,{
                depth: e,
                bevelEnabled: !1
            });
            o.rotateY(Math.PI / 2),
            o.translate(-e / 2, 0, 0),
            o.computeVertexNormals(),
            Ue.set(t, o)
        }
        return Ue.get(t)
    }
    let U = new Ho(1,1,1,14);
    U.rotateX(-Math.PI / 2);
    let W = U.attributes.position.array.slice()
      , Je = -1;
    function Ye(e) {
        if (Math.abs(e - Je) < 5e-4)
            return;
        Je = e;
        let t = U.attributes.position.array;
        for (let n = 0; n < t.length; n += 3) {
            let r = W[n + 2] + .5;
            t[n + 1] = -e * Math.sin(Math.PI * r)
        }
        U.attributes.position.needsUpdate = !0,
        U.computeVertexNormals(),
        U.computeBoundingSphere()
    }
    let Xe = new Set([De]);
    function Ze(e) {
        for (; e.children.length; )
            e.children.pop().traverse?.(e => {
                e.isCSS2DObject && e.element?.remove(),
                e.geometry && !Xe.has(e.geometry) && e.geometry !== U && ![...Ue.values()].includes(e.geometry) && e.geometry.dispose()
            }
            )
    }
    function Qe(e) {
        let t = document.createElement(`div`);
        return t.className = `studio3d__dim`,
        t.textContent = e,
        new Vd(t)
    }
    function $e(e, t, n) {
        let r = document.createElement(`div`);
        r.className = `studio3d__callout`,
        r.innerHTML = `<i></i><b>${e}</b>${t ? `<span>${t}</span>` : ``}`;
        let i = new Vd(r);
        return i.position.copy(n),
        je.add(i),
        Be.push(i),
        i
    }
    let et = e => `${Math.round(e * 1e3).toLocaleString(`tr-TR`)} mm`
      , tt = (e, t, n, r, i, a, o) => {
        let s = new Lf(De,L[t]);
        return n === `y` ? s.rotation.z = Math.PI / 2 : n === `z` && (s.rotation.y = Math.PI / 2),
        s.scale.x = r,
        s.position.set(i, a, o),
        s.name = `led`,
        s.userData.zone = t,
        e.add(s),
        s
    }
    ;
    let AWp = null
      , AWy = null;
    function G() {
        Ze(B),
        Ze(je),
        Me = [],
        Ne = [],
        Pe = [],
        Fe = [],
        Ie = [],
        Re = [],
        ze = [],
        Be = [],
        Ve = [];
        AWp = null;
        if (c.system === `awning` || c.system === `winawn`) {
            AWN();
            return
        }
        let e = c.width
          , t = c.depth
          , r = c.height
          , i = c.mount !== `free`
          , a = e / 2
          , s = t / 2
          , l = Rf.post
          , u = Rf.rail
          , d = Rf.gutter
          , f = Math.max(1, Math.ceil((e - .001) / Rf.moduleMax))
          , p = e / f
          , m = Array.from({
            length: f + 1
        }, (e, t) => -a + p * t)
          , _ = r
          , v = r - u.h
          , y = v
          , b = v
          , x = []
          , Rz = c.system === `glass` || c.system === `pergola` ? Math.min(2.5, Math.max(0, +c.rise || 0)) : 0
          , Hg = c.mount === `hang` && c.system === `pergola`
          , TH = Math.atan2(Rz, t)
          , RG = new si
          , RI = new si;
        RG.position.set(0, _, s),
        RG.rotation.x = TH,
        RG.scale.z = 1 / Math.cos(TH),
        RI.position.set(0, -_, -s),
        RG.add(RI),
        B.add(RG),
        m.forEach( (e, t) => {
            let n = e + (t === 0 ? l.w / 2 : t === f ? -l.w / 2 : 0);
            Hg || x.push([n, s - l.d / 2]),
            i || x.push([n, -s + l.d / 2])
        }
        ),
        x.forEach( ([e,t], n) => {
            let b = v + (t < 0 ? Rz : 0);
            H(B, V(l.w, b, l.d, F), e, b / 2, t).name = `post`;
            let r = t > 0 ? 1 : -1;
            H(B, V(l.w - .02, b - .1, .012, ae, !1), e, b / 2, t + r * (l.d / 2 + .006)),
            H(B, V(l.w + .08, .012, l.d + .08, I, !1), e, .006, t),
            [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach( ([n,r]) => H(B, Ge(.009, .01, ce), e + n * (l.w / 2 + .025), .017, t + r * (l.d / 2 + .025))),
            H(B, V(.04, .03, .01, le, !1), e, .12, t + r * (l.d / 2 + .008)),
            tt(B, `posts`, `y`, b - .3, e - Math.sign(e || 1) * (l.w / 2 + .004), b / 2, t - r * (l.d / 2 - .02));
            let i = [new Y(e,y + .1,t - r * .3), new Y(e,y + .05,t), new Y(e,.13,t), new Y(e,.1,t + r * (l.d / 2 + .12))]
              , a = new ra(new Or().setFromPoints(i),Te);
            a.computeLineDistances(),
            je.add(a),
            Ve.push(a),
            n === 0 && $e(o.comp_post || `Rennu Direk`, `170 × 160 mm · ` + (o.comp_drain || `gizli su tahliyesi`), new Y(e,b * .55,t))
        }
        ),
        m.forEach( (e, n) => {
            let r = e + (n === 0 ? u.w / 2 : n === f ? -u.w / 2 : 0);
            H(RI, V(u.w, u.h, t, F), r, v + u.h / 2, 0).name = `rail`,
            [-1, 1].forEach(e => {
                n === 0 && e < 0 || n === f && e > 0 || H(RI, V(.012, .05, t - .1, I, !1), r + e * (u.w / 2 - .004), _ - .065, 0)
            }
            ),
            [-1, 1].forEach(e => H(RI, V(u.w + .01, u.h + .01, .012, ae, !1), r, v + u.h / 2, e * (t / 2 + .006)));
            let i = n === 0 ? 1 : n === f ? -1 : 0;
            tt(RI, `perimeter`, `z`, t - .1, r + i * (u.w / 2 + .003), i ? v + .03 : v - .003, 0),
            n === 0 && $e(o.comp_rail || `Rennu Ray`, `238 × 156 mm`, new Y(r,_,-t * .25))
        }
        ),
        Hg && m.forEach( (e, n) => {
            let xr = e + (n === 0 ? u.w / 2 : n === f ? -u.w / 2 : 0)
              , ah = Math.min(2, t * .42)
              , pa = new Y(xr,_ + Rz + ah,-s)
              , pb = new Y(xr,_ + .02,s - d.w / 2)
              , dv = pb.clone().sub(pa)
              , ln = dv.length()
              , rod = Ge(.011, ln, ce, `y`, 10);
            rod.position.copy(pa).add(pb).multiplyScalar(.5),
            rod.quaternion.setFromUnitVectors(new Y(0,1,0), dv.normalize()),
            rod.name = `tierod`,
            B.add(rod),
            H(B, V(.1, .16, .03, F), xr, _ + Rz + ah, -s + .015),
            H(B, V(.07, .06, .07, F), xr, _ + .03, s - d.w / 2),
            n === 0 && $e(o.comp_rod || `Tie rod`, o.comp_rod_sub || `stainless steel · wall anchor`, pa.clone().add(pb).multiplyScalar(.5))
        }
        ),
        [s - d.w / 2, -s + d.w / 2].forEach( (t, n) => {
            let GB = B;
            n === 1 && Rz && (GB = new si,
            GB.position.y = Rz,
            B.add(GB));
            if (n === 1 && i) {
                H(GB, V(e, u.h, d.w, F), 0, _ - u.h / 2, t).name = `gutter`;
                return
            }
            let r = new Q(qe(e),F);
            r.castShadow = !0,
            r.receiveShadow = !0,
            r.position.set(0, y, t),
            r.name = `gutter`,
            GB.add(r),
            H(GB, V(e - .02, .025, d.w - .03, ae, !1), 0, y - .0125, t);
            let a = _ - (y + d.h);
            H(GB, V(e, a, d.w, F), 0, _ - a / 2, t).name = `gutter`,
            tt(GB, `perimeter`, `x`, e - .06, 0, y + .03, t - Math.sign(t) * (d.w / 2 + .003)),
            [-1, 1].forEach(n => H(GB, V(.012, u.h + .01, d.w + .01, ae, !1), n * (e / 2 + .006), _ - u.h / 2, t)),
            n === 0 && $e(o.comp_gutter || `Rennu Oluk + LED eki`, `150 × 160 mm · 12V Samsung LED`, new Y(e * .3,y,t))
        }
        ),
        re.forEach( (t, n) => {
            t.position.set([-e / 4, e / 4, 0][n], r * .35, 0),
            t.distance = r * .62
        }
        ),
        i && H(B, V(e + 3, r + Rz + (Hg ? Math.min(2, t * .42) + .6 : 1.2), .25, pe, !1), 0, (r + Rz + (Hg ? Math.min(2, t * .42) + .6 : 1.2)) / 2, -s - .125);
        let S = t - 2 * d.w - .01;
        if (c.system === `glass`)
            for (let e = 0; e < f; e++) {
                let t = m[e] + (e === 0 ? u.w : u.w / 2)
                  , n = m[e + 1] - (e === f - 1 ? u.w : u.w / 2)
                  , r = n - t
                  , i = (t + n) / 2;
                H(RI, new Q(new Hr(r,.012,S),ue), i, _ - .05, 0);
                let a = Math.max(2, Math.round(r / .7));
                for (let e = 0; e <= a; e++)
                    H(RI, V(.05, .08, S, F), t + r / a * e, _ - .05, 0);
                H(RI, V(r, .06, .05, F), i, _ - .05, 0)
            }
        else {
            if (c.system === `pergola`) {
                let e = Rf.slat
                  , t = Math.max(3, Math.round((S - e.w) / e.pitch) + 1)
                  , n = (S - e.w) / (t - 1);
                for (let r = 0; r < f; r++) {
                    let i = m[r] + (r === 0 ? u.w : u.w / 2)
                      , a = m[r + 1] - (r === f - 1 ? u.w : u.w / 2)
                      , s = a - i + .02
                      , c = (i + a) / 2
                      , l = [];
                    for (let i = 0; i < t; i++) {
                        let a = -S / 2 + e.w / 2 + n * i
                          , o = V(s, e.h, e.w, oe);
                        o.position.set(c, _ - .1, a),
                        o.name = `slat`,
                        o.userData = {
                            i,
                            n: t,
                            z0: a,
                            pitch: n,
                            module: r,
                            w: s,
                            kind: `slat`
                        },
                        [-1, 1].forEach(e => {
                            let t = Ge(.02, .014, I, `x`, 12);
                            o.add(t),
                            t.position.set(e * (s / 2 + .004), .01, 0)
                        }
                        );
                        let u = tt(o, `panels`, `x`, s - .24, 0, -e.h / 2 - .004, 0);
                        u.userData.w = s,
                        Ne.push(u),
                        RI.add(o),
                        Fe.push(o),
                        l.push(o)
                    }
                    for (let n = 0; n < t - 1; n++) {
                        let t = new Q(U,fe);
                        t.castShadow = !0,
                        t.receiveShadow = !0,
                        t.name = `cloth`,
                        t.scale.x = s - .03,
                        t.position.set(c, _ - .1 + e.h / 2 + .004, 0),
                        t.userData = {
                            kind: `cloth`,
                            a: l[n],
                            b: l[n + 1]
                        },
                        RI.add(t),
                        Ie.push(t)
                    }
                    [i + .03, a - .03].forEach(e => H(je, V(.01, .012, S - .1, we, !1), e, _ - .06, 0)),
                    r === 0 && ($e(o.comp_slat || `Kalın Çıta Korniş (Full LED)`, o.comp_slat_sub || `82 × 60 mm · T10 triger kayış · kumaş fitili`, new Y(c + s * .25,_ - .07,-S / 2 + e.w / 2 + n)),
                    $e(o.comp_fabric || `Blackout kumaş`, o.comp_fabric_sub || `300 g/m² · yangın geciktirici`, new Y(c - s * .2,_ - .06,S * .25)))
                }
            } else {
                let e = Math.max(5, Math.round((S - Rf.panel.chord + Rf.panel.pitch) / Rf.panel.pitch))
                  , t = (S - Rf.panel.chord) / (e - 1);
                for (let n = 0; n < f; n++) {
                    let r = m[n] + (n === 0 ? u.w : u.w / 2)
                      , i = m[n + 1] - (n === f - 1 ? u.w : u.w / 2)
                      , a = i - r + .02
                      , s = (r + i) / 2
                      , l = Ke(a);
                    for (let r = 0; r < e; r++) {
                        let i = new Q(l,oe);
                        i.castShadow = !0,
                        i.receiveShadow = !0;
                        let o = -S / 2 + t * r;
                        i.position.set(s, _ - .075, o),
                        i.userData = {
                            i: r,
                            n: e,
                            z0: o,
                            pitch: t,
                            module: n,
                            w: a
                        },
                        i.name = `panel`,
                        RI.add(i),
                        Me.push(i);
                        let u = tt(i, `panels`, `x`, a - .24, 0, -.04, .06);
                        u.userData.w = a,
                        Ne.push(u),
                        c.system === `rolling` ? [-1, 1].forEach(e => {
                            let t = Ge(.022, .014, I, `x`, 12);
                            i.add(t),
                            t.position.set(e * (a / 2 + .004), 0, .03)
                        }
                        ) : [-1, 1].forEach(e => {
                            let t = Ge(.012, .03, ce, `x`, 10);
                            i.add(t),
                            t.position.set(e * (a / 2 + .01), .02, .02)
                        }
                        )
                    }
                    if (c.system === `bio`) {
                        H(je, V(.012, .03, S - .1, ce, !1), r + .02, _ - .11, 0);
                        let e = H(je, Ge(.03, .55, we, `z`), r + .05, _ - .14, -S / 2 + .45);
                        H(je, Ge(.016, .3, ce, `z`), r + .05, _ - .14, -S / 2 + .85),
                        H(je, V(.016, .012, S - .2, we, !1), r + .05, _ - .19, 0),
                        n === 0 && $e(o.comp_piston || `Lineer piston + T12 triger kayış`, o.comp_piston_sub || `95–115° panel açısı`, e.position.clone())
                    } else
                        [r + .03, i - .03].forEach(t => {
                            let r = new ra(new Or().setFromPoints(Array.from({
                                length: e * 2
                            }, () => new Y)),new Yi({
                                color: 16758087
                            }));
                            je.add(r),
                            Pe.push({
                                line: r,
                                module: n,
                                x: t
                            })
                        }
                        ),
                        n === 0 && $e(o.comp_scissor || `Makas bağlantısı + 608 ZZ rulmanlı tekerler`, o.comp_scissor_sub || `paneller motor tarafında toplanır`, new Y(r + .03,_ - .1,-S / 2 + .6))
                }
                $e(o.comp_panel || `Rennu Panel`, `70 × 298 mm · ` + (o.comp_panel_sub || `kenar eksenli, çift cidar, kenar LED`), new Y(m[0] + p * .5,_ + .05,S * .2))
            }
            for (let e = 0; e < f; e++) {
                let t = m[e] + (e === 0 ? u.w / 2 : 0)
                  , n = H(RI, new Q(new Zd(Rf.motor.w,Rf.motor.h,Rf.motor.len,2,.008),ae), t, _ + Rf.motor.h / 2 - .004, -s + Rf.motor.len / 2);
                n.castShadow = !0,
                n.receiveShadow = !0,
                n.name = `motor`,
                H(RI, Ge(.02, .02, I, `y`), t, _ + Rf.motor.h + .005, -s + .12),
                e === 0 && $e(o.comp_motor || `Motor kapağı · Somfy / Mosel / Cuppon 120 Nm`, `89 × 141 mm`, n.position.clone().add(new Y(0,.1,0)))
            }
        }
        let C = v
          , w = {
            front: {
                len: e - 2 * l.w,
                c: [0, s - l.d / 2],
                rot: 0
            },
            back: {
                len: e - 2 * l.w,
                c: [0, -s + l.d / 2],
                rot: 0
            },
            left: {
                len: t - 2 * l.d,
                c: [-a + l.w / 2, 0],
                rot: Math.PI / 2
            },
            right: {
                len: t - 2 * l.d,
                c: [a - l.w / 2, 0],
                rot: Math.PI / 2
            }
        };
        Object.entries(w).forEach( ([e,t]) => {
            if (e === `back` && i)
                return;
            let C2 = Rz > .05 && c.wedge && e !== `front` ? C - .08 : C;
            let n = (e === `front` || e === `back`) && f > 1 ? Array.from({
                length: f
            }, (e, t) => [m[t] + (t === 0 ? l.w : l.w / 2), m[t + 1] - (t === f - 1 ? l.w : l.w / 2)]) : [[-t.len / 2, t.len / 2]]
              , r = g(e, n.length);
            n.forEach( ([n,i], a) => {
                let o = r[a];
                if (o === `none`)
                    return;
                let s = new si;
                s.position.set(t.c[0], 0, t.c[1]),
                s.rotation.y = t.rot;
                let c = i - n
                  , l = (n + i) / 2;
                o === `zip` ? ot(s, c, l, C2, a === 0) : o === `slide` ? ct(s, c, l, C2, e, a === 0) : o === `door` ? lt(s, c, l, C2, e, a === 0) : st(s, c, l, C2, o === `giyc`, e, a === 0),
                B.add(s)
            }
            )
        }
        );
        if (Rz > .05 && c.wedge) {
            let wl = t - 2 * l.d
              , h0 = Rz * l.d / t
              , h1 = Rz * (t - l.d) / t
              , sh = new eo;
            sh.moveTo(0, 0),
            sh.lineTo(wl, 0),
            sh.lineTo(wl, h1),
            sh.lineTo(0, h0),
            sh.lineTo(0, 0);
            let wg = new zo(sh,{
                depth: .008,
                bevelEnabled: !1
            })
              , nm = Math.max(1, Math.round(wl / 1.2))
              , wn = 0;
            [-1, 1].forEach(sx => {
                if (g(sx < 0 ? `left` : `right`, 1)[0] === `none`)
                    return;
                wn++;
                let x0 = sx * (a - l.w / 2);
                H(B, V(.06, .08, wl, F), x0, v - .04, 0).name = `transom`;
                let gm = new Q(wg,ue);
                gm.rotation.y = Math.PI / 2,
                gm.position.set(x0 - .004, v, s - l.d),
                gm.name = `wedge`,
                B.add(gm);
                for (let k = 1; k <= nm; k++) {
                    let uu = wl * k / nm - (k === nm ? .02 : 0)
                      , hh = h0 + (h1 - h0) * uu / wl;
                    H(B, V(.04, hh, .05, F), x0, v + hh / 2, s - l.d - uu)
                }
            }
            );
            if (!i && g(`back`, f).some(k => k !== `none`)) {
                wn++;
                let bw = e - 2 * l.w
                  , bz = -s + l.d / 2
                  , nb = Math.max(1, Math.round(bw / 1.2));
                H(B, V(bw, .08, .06, F), 0, v - .04, bz).name = `transom`,
                H(B, new Q(new Hr(bw,Rz,.008),ue), 0, v + Rz / 2, bz).name = `wedge`;
                for (let k = 1; k < nb; k++)
                    H(B, V(.04, Rz, .05, F), -bw / 2 + bw * k / nb, v + Rz / 2, bz)
            }
            wn && $e(o.comp_wedge || `Fixed wedge glazing`, o.comp_wedge_sub || `8 mm tempered glass above the side closure`, new Y(a - l.w / 2,v + h1 * .5,-s * .5))
        }
        let T = new Q(new Ho(e + 1.6,t + 1.6),se);
        if (T.rotation.x = -Math.PI / 2,
        T.position.y = .004,
        T.name = `ao`,
        B.add(T),
        c.furniture && e >= 3 && t >= 3) {
            He = new si;
            let n = (e, t, n, r, i) => {
                let a = new Q(new Zd(e,t,n,3,r),i);
                return a.castShadow = !0,
                a.receiveShadow = !0,
                a
            }
              , r = -e / 2 + 1.5
              , a = t / 2 - 1.1;
            H(He, n(2.1, .36, .9, .06, me), r, .2, a),
            H(He, n(2, .12, .8, .05, he), r, .44, a),
            H(He, n(2.1, .46, .14, .05, me), r, .62, a + .38),
            H(He, n(.9, .36, 1.7, .06, me), -e / 2 + .9, .2, a - 1.3),
            H(He, n(.8, .12, 1.6, .05, he), -e / 2 + .9, .44, a - 1.3),
            H(He, n(1.1, .03, .65, .01, ge), r + 1, .42, a - 1.25),
            [[-.5, -.28], [.5, -.28], [-.5, .28], [.5, .28]].forEach( ([e,t]) => H(He, Ge(.012, .41, I, `y`, 8), r + 1 + e, .205, a - 1.25 + t));
            let o = (e, t) => {
                H(He, new Q(new ya(.26,.22,.55,24),ve), e, .275, t).castShadow = !0,
                H(He, n(.62, .55, .62, .18, _e), e, .86, t)
            }
            ;
            o(e / 2 - .6, t / 2 - .6),
            o(e / 2 - .6, -t / 2 + .7 + (i ? .2 : 0)),
            B.add(He)
        } else
            He = null;
        c.env && n === `studio` && at(e, t, r, i);
        let E = new Yi({
            color: 10361652,
            transparent: !0,
            opacity: .9
        })
          , D = (e, t) => { let l = new ra(new Or().setFromPoints([e, t]),E); l.userData.dimLine = !0, l.visible = ut, B.add(l) }
          , O = .12
          , k = .05
          , A = s + .65
          , j = a + .65;
        D(new Y(-a,k,A), new Y(a,k,A)),
        D(new Y(-a,k,A - O), new Y(-a,k,A + O)),
        D(new Y(a,k,A - O), new Y(a,k,A + O)),
        D(new Y(j,k,-s), new Y(j,k,s)),
        D(new Y(j - O,k,-s), new Y(j + O,k,-s)),
        D(new Y(j - O,k,s), new Y(j + O,k,s)),
        D(new Y(-a - .5,0,s + .1), new Y(-a - .5,r,s + .1)),
        D(new Y(-a - .5 - O,r,s + .1), new Y(-a - .5 + O,r,s + .1)),
        Rz > .05 && (D(new Y(-a - .5,0,-s + .1), new Y(-a - .5,r + Rz,-s + .1)),
        D(new Y(-a - .5 - O,r + Rz,-s + .1), new Y(-a - .5 + O,r + Rz,-s + .1))),
        f > 1 && m.slice(1, -1).forEach(e => D(new Y(e,k,A - O), new Y(e,k,A + O)));
        let N = Qe(et(e) + (f > 1 ? ` · ${f} ${o.modules || `modül`}` : ``));
        N.position.set(0, .05, A + .05),
        B.add(N);
        let ee = Qe(et(t));
        ee.position.set(j + .05, .05, 0),
        B.add(ee);
        let P = Qe(et(r));
        P.position.set(-a - .5, r / 2, s + .1),
        B.add(P),
        ze.push(N, ee, P),
        Rz > .05 && ( () => {
            let bl = Qe(et(r + Rz));
            bl.position.set(-a - .5, (r + Rz) / 2, -s + .1),
            B.add(bl),
            ze.push(bl)
        }
        )(),
        dt(ut),
        nt = !1,
        c.tech && rt();
        let te = Math.max(e, t) * .9 + 3;
        ne.shadow.camera.left = -te,
        ne.shadow.camera.right = te,
        ne.shadow.camera.top = te,
        ne.shadow.camera.bottom = -te,
        ne.shadow.camera.updateProjectionMatrix(),
        M.target.set(0, r * .45, 0),
        We.modules = f,
        We.panels = (Me.length || Fe.length) / f,
        We.postCount = x.length,
        We.weight = Jt(f, x.length),
        ft(),
        pt(),
        _t(),
        X(),
        Xt(),
        h()
    }
    function AWseg(mesh, p1, p2) {
        let dv = p2.clone().sub(p1)
          , ln = Math.max(.001, dv.length());
        mesh.position.copy(p1).add(p2).multiplyScalar(.5),
        mesh.scale.y = ln,
        mesh.quaternion.setFromUnitVectors(AWy, dv.divideScalar(ln))
    }
    function AWN() {
        AWy ||= new Y(0,1,0);
        let win = c.system === `winawn`
          , aw = Math.min(win ? 6 : 7, Math.max(win ? 1 : 2, c.width))
          , ah = Math.min(4, Math.max(win ? 1.2 : 2.2, c.height))
          , bx = win ? .13 : .2
          , al = win ? Math.max(.3, (ah - bx - .2) / 2) : 0
          , ap = win ? al : Math.min(4, Math.max(1.5, c.depth))
          , hw = aw / 2
          , hd = ap / 2
          , zw = -hd
          , wallH = ah + (win ? 1 : 1.3);
        H(B, V(aw + 3, wallH, .25, pe, !1), 0, wallH / 2, zw - .125);
        if (win) {
            let gw = aw - .16
              , gh = ah - bx - .14
              , nmu = Math.max(1, Math.round(gw / 1));
            H(B, V(gw + .1, gh + .1, .06, F), 0, .1 + gh / 2, zw + .012),
            H(B, new Q(new Hr(gw,gh,.02),xe), 0, .1 + gh / 2, zw + .04);
            for (let k = 1; k < nmu; k++)
                H(B, V(.04, gh, .03, F), -gw / 2 + gw * k / nmu, .1 + gh / 2, zw + .05)
        } else {
            let dw = Math.min(aw - .8, 3.4)
              , dh = Math.min(2.15, ah - bx - .25);
            H(B, V(dw + .1, dh + .05, .06, I), 0, dh / 2, zw + .012),
            H(B, new Q(new Hr(dw,dh - .05,.02),xe), 0, dh / 2, zw + .04),
            [-1, 1].forEach(k => H(B, V(.05, dh, .03, I), k * dw / 6, dh / 2, zw + .05))
        }
        let cy = ah - bx / 2
          , cz = zw + bx / 2 + .02
          , cas = H(B, new Q(new Zd(aw,bx,bx,3,.03),F), 0, cy, cz);
        cas.castShadow = !0,
        cas.receiveShadow = !0,
        cas.name = `cassette`,
        [-1, 1].forEach(k => H(B, V(.02, bx + .012, bx + .012, I, !1), k * (hw + .008), cy, cz)),
        [-1, 1].forEach(k => H(B, V(.09, bx + .08, .03, ae, !1), k * Math.max(.2, hw - .4), cy, zw + .015));
        let pg = new Ho(1,1);
        pg.rotateX(-Math.PI / 2);
        let fab = new Q(pg,fe);
        fab.castShadow = !0,
        fab.receiveShadow = !0,
        fab.name = `cloth`,
        B.add(fab);
        let bar = V(aw + (win ? .04 : 0), .06, .07, F);
        bar.name = `frontbar`,
        B.add(bar);
        let vt = c.valance
          , hv = win ? .16 : .22;
        if (vt && vt !== `none`) {
            let w2 = aw - .03
              , sh = new eo;
            sh.moveTo(-w2 / 2, 0),
            sh.lineTo(w2 / 2, 0);
            if (vt === `straight`)
                sh.lineTo(w2 / 2, -hv),
                sh.lineTo(-w2 / 2, -hv);
            else {
                let nt2 = Math.max(4, Math.round(w2 / .28))
                  , tw = w2 / nt2;
                sh.lineTo(w2 / 2, -hv + .07);
                for (let k = 0; k < nt2; k++) {
                    let x1 = w2 / 2 - tw * k
                      , x2 = x1 - tw;
                    vt === `zigzag` ? (sh.lineTo((x1 + x2) / 2, -hv),
                    sh.lineTo(x2, -hv + .07)) : sh.quadraticCurveTo((x1 + x2) / 2, -hv - .07, x2, -hv + .07)
                }
            }
            sh.lineTo(-w2 / 2, 0);
            let vm = new Q(new zo(sh,{
                depth: .003,
                bevelEnabled: !1
            }),fe);
            vm.name = `cloth`,
            vm.castShadow = !0,
            vm.position.set(0, -.025, .037),
            bar.add(vm)
        }
        let arms = []
          , tan = Math.tan(q.degToRad(13))
          , rs = new Y(0,ah - bx * .55,zw + bx + .03)
          , re2 = new Y(0,rs.y - (ap - bx - .03) * tan,zw + ap)
          , py = al + .12
          , pz = zw + .05;
        if (win)
            [-1, 1].forEach(k => {
                let m1 = V(.035, 1, .035, F);
                B.add(m1),
                H(B, V(.05, .12, .05, ae), k * (hw + .02), py, pz - .02),
                arms.push({
                    x: k * (hw + .02),
                    m1
                })
            }
            );
        else {
            let xs = aw > 5.2 ? [-(hw - .4), 0, hw - .4] : [-(hw - .4), hw - .4]
              , sy = ah - bx - .04
              , sz = zw + .09
              , dmax = Math.hypot(re2.y - .03 - sy, re2.z - .04 - sz);
            xs.forEach( (x0, k) => {
                let m1 = V(.05, 1, .04, F)
                  , m2 = V(.045, 1, .035, F)
                  , el = Ge(.032, .07, ae, `y`, 12);
                B.add(m1),
                B.add(m2),
                B.add(el),
                H(B, V(.09, .09, .1, ae), x0, sy, sz - .03),
                arms.push({
                    x: x0,
                    dir: x0 < 0 || x0 === 0 && k === 1 ? 1 : -1,
                    m1,
                    m2,
                    el,
                    sy,
                    sz,
                    len: dmax / 2 + .02
                })
            }
            )
        }
        AWp = {
            win,
            aw,
            ah,
            ap,
            al,
            bx,
            zw,
            py,
            pz,
            rs,
            re2,
            fab,
            bar,
            arms,
            area: win ? aw * (ah - bx) : aw * ap
        };
        if (c.furniture && !win && aw >= 3 && ap >= 2.4) {
            He = new si;
            let rb = (w1, h1, d1, r1, mt1) => {
                let m1 = new Q(new Zd(w1,h1,d1,3,r1),mt1);
                return m1.castShadow = !0,
                m1.receiveShadow = !0,
                m1
            }
              , fx = -hw + 1.4
              , fz = hd - .55;
            H(He, rb(2.1, .36, .9, .06, me), fx, .2, fz),
            H(He, rb(2, .12, .8, .05, he), fx, .44, fz),
            H(He, rb(2.1, .46, .14, .05, me), fx, .62, fz + .38),
            H(He, rb(1.1, .03, .65, .01, ge), fx, .42, fz - 1.05),
            [[-.5, -.28], [.5, -.28], [-.5, .28], [.5, .28]].forEach( ([ox,oz]) => H(He, Ge(.012, .41, I, `y`, 8), fx + ox, .205, fz - 1.05 + oz)),
            H(He, new Q(new ya(.26,.22,.55,24),ve), hw - .5, .275, zw + .55).castShadow = !0,
            H(He, rb(.62, .55, .62, .18, _e), hw - .5, .86, zw + .55),
            B.add(He)
        } else
            He = null;
        c.env && n === `studio` && at(aw, Math.max(ap, 2.4), ah, !0);
        let dm = new Yi({
            color: 10361652,
            transparent: !0,
            opacity: .9
        })
          , dl = (p1, p2) => {
            let ln = new ra(new Or().setFromPoints([p1, p2]),dm);
            ln.userData.dimLine = !0,
            ln.visible = ut,
            B.add(ln)
        }
          , tk = .12
          , dz = hd + .65
          , dx = hw + .65;
        dl(new Y(-hw,.05,dz), new Y(hw,.05,dz)),
        dl(new Y(-hw,.05,dz - tk), new Y(-hw,.05,dz + tk)),
        dl(new Y(hw,.05,dz - tk), new Y(hw,.05,dz + tk)),
        dl(new Y(-hw - .5,0,zw + .1), new Y(-hw - .5,ah,zw + .1)),
        dl(new Y(-hw - .5 - tk,ah,zw + .1), new Y(-hw - .5 + tk,ah,zw + .1));
        let l1 = Qe(et(aw))
          , l3 = Qe(et(ah));
        l1.position.set(0, .05, dz + .05),
        l3.position.set(-hw - .5, ah / 2, zw + .1),
        B.add(l1),
        B.add(l3),
        ze.push(l1, l3);
        if (!win) {
            dl(new Y(dx,.05,-hd), new Y(dx,.05,hd)),
            dl(new Y(dx - tk,.05,-hd), new Y(dx + tk,.05,-hd)),
            dl(new Y(dx - tk,.05,hd), new Y(dx + tk,.05,hd));
            let l2 = Qe(et(ap));
            l2.position.set(dx + .05, .05, 0),
            B.add(l2),
            ze.push(l2)
        }
        $e(o.comp_cassette || `Cassette box`, o.comp_cassette_sub || `full cassette · tubular motor · remote control`, new Y(aw * .25,ah,zw + bx)),
        $e(win ? o.comp_droparm || `Drop arms` : o.comp_arm || `Folding arms`, win ? o.comp_droparm_sub || `2 arms · swing 0–170°` : o.comp_arm_sub || `spring-loaded · stainless cable`, new Y(-hw + .4,ah - (win ? ah * .5 : .45),zw + ap * .45)),
        $e(o.comp_awnfabric || `Acrylic fabric`, o.comp_awnfabric_sub || `300 g/m² · UV resistant`, new Y(0,ah - .35,zw + ap * .55)),
        dt(ut),
        nt = !1,
        c.tech && rt();
        let sc = Math.max(aw, ap) * .9 + 3;
        ne.shadow.camera.left = -sc,
        ne.shadow.camera.right = sc,
        ne.shadow.camera.top = sc,
        ne.shadow.camera.bottom = -sc,
        ne.shadow.camera.updateProjectionMatrix(),
        M.target.set(0, ah * .5, 0),
        We.modules = 1,
        We.panels = 0,
        We.postCount = 0,
        We.weight = Math.round(aw * (win ? 6.5 : 13) + AWp.area * .4 + (win ? 4 : 14)),
        ft(),
        pt(),
        _t(),
        X(),
        Xt(),
        h()
    }
    function AWu() {
        h();
        let p = AWp;
        if (!p)
            return;
        let k = 1 - q.clamp(K.open, 0, 1)
          , ps = p.rs.clone()
          , pe2;
        if (p.win) {
            let an = q.degToRad(q.lerp(172, 5, k));
            pe2 = new Y(0,p.py - p.al * Math.cos(an),p.pz + p.al * Math.sin(an)),
            ps.set(0, p.ah - p.bx + .01, p.zw + p.bx * .75)
        } else
            pe2 = ps.clone().lerp(p.re2, Math.max(.03, k));
        let dy = ps.y - pe2.y
          , dzz = pe2.z - ps.z
          , ln = Math.max(.02, Math.hypot(dy, dzz));
        p.fab.position.set(0, (ps.y + pe2.y) / 2 + .004, (ps.z + pe2.z) / 2),
        p.fab.rotation.x = Math.atan2(dy, dzz),
        p.fab.scale.set(p.aw - .04, 1, ln),
        p.bar.position.set(0, pe2.y - .03, pe2.z + .02),
        p.arms.forEach(a1 => {
            if (p.win) {
                AWseg(a1.m1, new Y(a1.x,p.py,p.pz), new Y(a1.x,pe2.y - .03,pe2.z + .02));
                return
            }
            let s1 = new Y(a1.x,a1.sy,a1.sz)
              , w1 = new Y(a1.x,pe2.y - .03,pe2.z - .02)
              , dd = s1.distanceTo(w1)
              , off = Math.sqrt(Math.max(0, a1.len * a1.len - dd * dd / 4))
              , el = s1.clone().add(w1).multiplyScalar(.5);
            el.x += a1.dir * off,
            AWseg(a1.m1, s1, el),
            AWseg(a1.m2, el, w1),
            a1.el.position.copy(el)
        }
        )
    }
    let nt = !1;
    function rt() {
        if (nt)
            return;
        nt = !0;
        let e = B.getObjectByName(`env`);
        B.traverse(t => {
            if (!t.isMesh || t.name === `led` || t.name === `cloth` || He && He.children.includes(t) || e && e.children.includes(t) || t.geometry.type === `SphereGeometry`)
                return;
            let n = new sa(new wa(t.geometry,25),Ce);
            n.userData.src = t,
            n.matrixAutoUpdate = !1,
            je.add(n)
        }
        )
    }
    let it = null;
    function at(e, t, n, r) {
        let i = e / 2
          , a = t / 2
          , o = new si;
        o.name = `env`;
        let s = new Q(new Ho(e + 22,t + 22),ye);
        s.rotation.x = -Math.PI / 2,
        s.position.y = .0025,
        s.receiveShadow = !0,
        o.add(s);
        let l = new Q(new Ho(e + 2.6,t + 2.6),R);
        l.rotation.x = -Math.PI / 2,
        l.position.y = .0035,
        l.receiveShadow = !0,
        o.add(l);
        let u = (e, t, n, r) => {
            let i = new Q(new Zd(r ? n : .7,1.1,r ? .7 : n,2,.12),be);
            i.position.set(e, .55, t),
            i.castShadow = !0,
            i.receiveShadow = !0,
            o.add(i)
        }
        ;
        if (u(-(i + 2.9), 0, t + 4.5, !1),
        u(i + 2.9, 0, t + 4.5, !1),
        !r) {
            u(0, -(a + 2.5), e + 6.5, !0);
            let t = new Q(new Hr(e + 9,3.4,.5),pe);
            t.position.set(0, 1.7, -(a + 5.4)),
            t.castShadow = !0,
            t.receiveShadow = !0,
            o.add(t);
            let n = Math.max(2, Math.round((e + 9) / 3.2));
            for (let t = 0; t < n; t++) {
                let r = new Q(new Hr(1.2,1.4,.06),xe);
                r.position.set(-(e + 9) / 2 + (e + 9) / n * (t + .5), 1.85, -(a + 5.4) + .28),
                o.add(r)
            }
        }
        Se ||= (it = [Zf(0), Zf(1)],
        it.map(e => new hi({
            map: e,
            transparent: !0,
            depthWrite: !1,
            alphaTest: .2
        }))),
        [[-1.5, -1.25], [1.5, -1.2], [-1.75, .1], [1.75, .2], [-.6, -1.65], [.5, -1.6], [1.15, -1.6], [-1.2, -1.6]].forEach( ([e,t], n) => {
            if (r && t < -.9)
                return;
            let s = new ki(Se[n % 2])
              , c = 4.4 + n % 3 * .8;
            s.scale.set(c * .72, c, 1),
            s.position.set(e * (i + 4.6), c / 2 - .05, t * (a + 4.4)),
            o.add(s)
        }
        ),
        o.visible = !c.tech,
        B.add(o)
    }
    function ot(e, t, n, r, i) {
        let a = Rf.zip
          , s = H(e, V(t, a.cassette, a.cassette, F), n, r - a.cassette / 2, 0);
        s.name = `zipbox`,
        H(e, Ge(.035, t - .06, I, `x`), n, r - a.cassette / 2, 0),
        [-1, 1].forEach(i => H(e, V(a.guide[0], r - a.cassette, a.guide[1], F), n + i * (t / 2 - a.guide[0] / 2), (r - a.cassette) / 2, 0));
        let c = new Q(new Ho(t - 2 * a.guide[0] + .01,1),de);
        c.castShadow = !0,
        c.userData = {
            kind: `zip`,
            clearH: r - a.cassette
        },
        c.position.x = n,
        e.add(c),
        [-1, 1].forEach(i => {
            let o = V(.012, 1, .012, I, !1);
            o.userData = {
                kind: `zip`,
                clearH: r - a.cassette
            },
            o.position.x = n + i * (t / 2 - a.guide[0] - .006),
            e.add(o),
            Re.push(o)
        }
        );
        let l = V(t - 2 * a.guide[0], a.bar[1], a.bar[0], ae);
        l.userData = {
            kind: `zipbar`,
            clearH: r - a.cassette
        },
        l.position.x = n,
        e.add(l),
        Re.push(c, l),
        i && (e.updateWorldMatrix(!0, !1),
        $e(o.comp_zip || `Zip perde kaseti`, o.comp_zip_sub || `fermuarlı yan ray + alt bar · motorlu`, s.localToWorld(new Y(0,.1,0))))
    }
    function st(e, t, n, r, i, a, s) {
        let l = Rf.giy
          , u = c.giyDir === `down`
          , d = r < 2.3 ? 2 : 3
          , f = l.top[1]
          , p = r - f
          , m = u ? f : 0;
        [-1, 1].forEach(r => {
            H(e, V(l.post[0], p, l.post[1], F), n + r * (t / 2 - l.post[0] / 2), m + p / 2, 0),
            H(e, V(.012, p - .1, .03, I, !1), n + r * (t / 2 - l.post[0] - .006), m + p / 2, 0)
        }
        );
        let h = u ? f / 2 : r - f / 2
          , g = H(e, V(t, f, l.top[0], F), n, h, 0);
        g.name = `giytop`,
        [-1, 1].forEach(r => H(e, V(.02, f + .01, l.top[0] + .01, I, !1), n + r * (t / 2 + .01), h, 0)),
        u ? H(e, V(t, .04, .08, F), n, r - .02, 0) : H(e, V(t, .04, .06, F), n, .02, 0),
        tt(e, `giy`, `x`, t - .1, n, u ? r - .043 : r - f - .003, 0);
        let _ = p / d
          , v = t - 2 * l.post[0] - .01
          , y = [`front`, `left`].includes(a) ? -1 : 1;
        for (let t = 0; t < d; t++) {
            let r = new si;
            r.add(new Q(new Hr(v - 2 * l.frame,_ - l.rail - l.frame,l.glass),ue));
            let a = u ? t === d - 1 : t === 0
              , o = V(v, a ? .035 : l.rail, .04, F);
            o.position.y = _ / 2 - (a ? .0175 : l.rail / 2),
            r.add(o);
            let s = V(v, l.frame, .035, F);
            if (s.position.y = -_ / 2 + l.frame / 2,
            r.add(s),
            [-1, 1].forEach(e => {
                let t = V(l.frame, _, .035, F);
                t.position.x = e * (v / 2 - l.frame / 2),
                r.add(t)
            }
            ),
            !a) {
                let e = V(.1, .02, .02, I, !1);
                e.position.set(0, _ / 2 - l.rail - .015, .025 * y),
                r.add(e)
            }
            let c = new si;
            c.position.y = _ / 2,
            r.position.y = -_ / 2,
            c.add(r),
            c.userData = {
                kind: `pane`,
                r: t,
                rows: d,
                rowH: _,
                guideH: p,
                y0: m,
                down: u,
                cleanable: i,
                yClosed: m + p - _ * t,
                dir: y
            },
            c.position.x = n,
            c.position.z = -y * (u ? t : d - 1 - t) * .028,
            e.add(c),
            Re.push(c)
        }
        s && (e.updateWorldMatrix(!0, !1),
        $e(i ? o.comp_giyc || `Giyotinyum® Silinebilir` : o.comp_giy || `Giyotinyum® Standart`, (o.comp_giy_sub || `inox zincir · üst motor kutusu · gizli üst LED`) + ` · ${d} panel · ${u ? o.giy_down || `altta toplanır` : o.giy_up || `üstte toplanır`}`, g.localToWorld(new Y(0,.12,0))))
    }
    function ct(e, t, n, r, i, a) {
        let s = Rf.slide
          , c = Math.min(6, Math.max(2, Math.round(t / s.pane)))
          , l = H(e, V(t, s.track[1], s.track[0], F), n, r - s.track[1] / 2, 0);
        l.name = `slidetrack`,
        H(e, V(t, .02, s.track[0], F), n, .01, 0),
        [-1, 1].forEach(i => H(e, V(.04, r - s.track[1], .05, F), n + i * (t / 2 - .02), (r - s.track[1]) / 2, 0));
        let u = t - .08
          , d = .05
          , f = (u + (c - 1) * d) / c
          , p = r - s.track[1] - .03
          , m = [`front`, `left`].includes(i) ? -1 : 1;
        for (let t = 0; t < c; t++) {
            let r = new si;
            r.add(new Q(new Hr(f - 2 * s.frame,p - 2 * s.rail,s.glass),ue));
            let i = V(f, s.rail, .03, F);
            i.position.y = p / 2 - s.rail / 2,
            r.add(i);
            let a = V(f, s.rail, .03, F);
            a.position.y = -p / 2 + s.rail / 2,
            r.add(a),
            [-1, 1].forEach(e => {
                let t = V(s.frame, p, .03, F);
                t.position.x = e * (f / 2 - s.frame / 2),
                r.add(t)
            }
            );
            let o = V(.02, .12, .02, I, !1);
            o.position.set(-f / 2 + .06, 0, .025 * m),
            r.add(o);
            let l = n - u / 2 + f / 2 + t * (f - d)
              , h = n + u / 2 - f / 2 - (c - 1 - t) * .03;
            r.position.set(l, .02 + p / 2 + .005, m * (t - (c - 1) / 2) * s.gap),
            r.userData = {
                kind: `slide`,
                xClosed: l,
                xOpen: h
            },
            e.add(r),
            Re.push(r)
        }
        a && (e.updateWorldMatrix(!0, !1),
        $e(o.comp_slide || `Sürgülü cam sistemi`, `${c} panel · ${o.comp_slide_sub || `çok raylı · paneller yana toplanır`}`, l.localToWorld(new Y(0,.12,0))))
    }
    function lt(e, t, n, r, i, a) {
        let s = Rf.slide
          , c = .05
          , l = .08
          , u = i === `front` || i === `right` ? 1 : -1
          , d = Math.min(.9, (t - .2) / 2)
          , f = 2 * d
          , p = r - l - .02;
        H(e, V(t, l, .08, F), n, r - l / 2, 0),
        [-1, 1].forEach(t => H(e, V(c, p, .08, F), n + t * (f / 2 + c / 2), .02 + p / 2, 0));
        let m = (t - f - 2 * c) / 2;
        m > .15 && [-1, 1].forEach(t => {
            let r = n + t * (f / 2 + c + m / 2);
            H(e, new Q(new Hr(m - .02,p - .08,s.glass),ue), r, .02 + p / 2, 0),
            H(e, V(m, .04, .05, F), r, .04, 0),
            H(e, V(m, .04, .05, F), r, p, 0)
        }
        ),
        [-1, 1].forEach(t => {
            let r = new si;
            r.position.set(n + t * f / 2, 0, 0);
            let i = new si;
            i.position.set(-t * d / 2, .02 + p / 2, 0),
            i.add(new Q(new Hr(d - 2 * s.frame,p - 2 * s.rail,s.glass),ue));
            let a = V(d, s.rail, .04, F);
            a.position.y = p / 2 - s.rail / 2,
            i.add(a);
            let o = V(d, s.rail * 2, .04, F);
            o.position.y = -p / 2 + s.rail,
            i.add(o),
            [-1, 1].forEach(e => {
                let t = V(s.frame, p, .04, F);
                t.position.x = e * (d / 2 - s.frame / 2),
                i.add(t)
            }
            );
            let c = Ge(.012, .3, I, `y`, 8);
            c.position.set(-t * (d / 2 - .08), 0, .05 * u),
            i.add(c),
            r.add(i),
            r.userData = {
                kind: `door`,
                sign: t * u
            },
            e.add(r),
            Re.push(r)
        }
        ),
        a && (e.updateWorldMatrix(!0, !1),
        $e(o.comp_door || `Çift kanatlı cam kapı`, o.comp_door_sub || `yan sabit camlar · dışa açılır`, e.localToWorld(new Y(n,r + .1,0))))
    }
    let ut = n === `studio`;
    function dt(e) {
        ut = e,
        B.traverse(t => { t.userData.dimLine && (t.visible = e) }),
        ze.forEach(t => {
            t.visible = e,
            t.element.style.display = e ? `` : `none`
        }
        ),
        h()
    }
    let K = {
        angle: c.angle,
        open: c.open,
        sideOpen: c.sideOpen,
        clean: +!!c.clean,
        night: +!!c.night,
        rain: +!!c.rain,
        tech: +!!c.tech
    };
    function ft() {
        h();
        if (AWp)
            return AWu();
        let e = c.height;
        if (c.system === `bio`) {
            let t = q.degToRad(Math.min(Rf.maxAngle, K.angle));
            Me.forEach(n => {
                n.rotation.x = -t,
                n.position.z = n.userData.z0,
                n.position.y = e - .075
            }
            )
        } else if (c.system === `rolling`) {
            let t = K.open;
            Me.forEach(n => {
                let {i: r, z0: i} = n.userData
                  , a = -(c.depth - 2 * Rf.gutter.w - .01) / 2;
                n.rotation.x = 0,
                n.position.z = q.lerp(i, a + r * .028, t),
                n.position.y = e - .075 + q.lerp(0, r * .009, t)
            }
            ),
            Pe.forEach(e => {
                let t = Me.filter(t => t.userData.module === e.module)
                  , n = e.line.geometry.attributes.position.array;
                t.forEach( (t, r) => {
                    n[r * 6] = e.x,
                    n[r * 6 + 1] = t.position.y - .02,
                    n[r * 6 + 2] = t.position.z + .02,
                    n[r * 6 + 3] = e.x,
                    n[r * 6 + 4] = t.position.y + .06,
                    n[r * 6 + 5] = t.position.z + .12
                }
                ),
                e.line.geometry.attributes.position.needsUpdate = !0,
                e.line.geometry.computeBoundingSphere()
            }
            )
        } else if (c.system === `pergola`) {
            let e = K.open
              , t = Rf.slat
              , n = -(c.depth - 2 * Rf.gutter.w - .01) / 2 + t.w / 2
              , r = t.w + .02;
            Fe.forEach(t => {
                t.position.z = q.lerp(t.userData.z0, n + t.userData.i * r, e)
            }
            );
            let i = Fe[0]?.userData.pitch || t.pitch
              , a = q.lerp(i, r, e)
              , o = i + .004;
            Ye(.5 * Math.sqrt(Math.max(0, o * o - a * a))),
            Ie.forEach(e => {
                let n = e.userData.a.position.z
                  , r = e.userData.b.position.z;
                e.position.z = (n + r) / 2,
                e.scale.z = Math.max(.012, r - n - t.w + .01)
            }
            )
        }
    }
    function pt() {
        h();
        let e = K.sideOpen;
        Re.forEach(t => {
            let n = t.userData;
            if (n.kind === `zip`) {
                let r = q.lerp(n.clearH - .06, .06, e);
                t.scale.y = Math.max(.001, r),
                t.position.y = n.clearH - r / 2
            } else if (n.kind === `zipbar`)
                t.position.y = n.clearH - q.lerp(n.clearH - .06, .06, e);
            else if (n.kind === `slide`)
                t.position.x = q.lerp(n.xClosed, n.xOpen, e);
            else if (n.kind === `door`)
                t.rotation.y = n.sign * e * Math.PI * .5;
            else if (n.kind === `pane`) {
                let r = n.down ? n.r === n.rows - 1 : n.r === 0
                  , i = n.down ? n.y0 + n.rowH + (n.rows - 1 - n.r) * .004 : n.y0 + n.guideH - n.r * .004;
                t.position.y = r ? n.yClosed : q.lerp(n.yClosed, i, e);
                let a = n.down ? 0 : n.rows - 1
                  , o = n.cleanable && n.r === a ? K.clean * q.degToRad(32) : 0;
                t.rotation.x = o * n.dir
            }
        }
        )
    }
    function mt() {
        h();
        let e = c.panelSep ? c.panelColour : c.colour;
        [F, ae].forEach(e => e.color.set(c.colour)),
        oe.color.set(e),
        fe.color.set(c.fabricColour);
        let t = e => new Z(e).getHSL({}).l;
        F.roughness = t(c.colour) > .7 ? .55 : .42,
        oe.roughness = t(e) > .7 ? .55 : .42
    }
    let ht = new Z;
    function gt(e, t) {
        if (c.ledMode === `rgb`) {
            let n = {
                perimeter: 0,
                panels: .12,
                posts: .25,
                giy: .4
            }[e] || 0;
            return ht.setHSL((t * .05 + n) % 1, 1, .55).clone()
        }
        return c.ledMode === `custom` ? ht.set(c.ledColour).clone() : ht.set(zf[c.ledMode] || zf.warm).clone()
    }
    function _t(e=0) {
        h();
        let t = [`perimeter`, `panels`, `posts`, `giy`]
          , n = K.night > .5 || c.night;
        t.forEach(t => {
            let r = c.led.master && c.led[t]
              , i = r ? q.lerp(.25, 1, c.ledDim) : 0
              , a = L[t];
            if (!r) {
                a.color.set(`#8d9299`).multiplyScalar(n ? .12 : .6);
                return
            }
            let o = gt(t, e);
            n && o.lerp(Oe, .25),
            a.color.copy(o).multiplyScalar(n ? 1 + 2 * i : .45 + .4 * i)
        }
        );
        let r = c.led.master && (c.led.perimeter || c.led.panels)
          , i = gt(`perimeter`, e);
        re.forEach( (e, t) => {
            e.color.copy(i),
            e.intensity = r ? 2.6 * c.ledDim * K.night * (t === 2 && !c.led.panels ? 0 : 1) : 0
        }
        );
        let a = i.clone().multiplyScalar(r ? K.night * c.ledDim : 0);
        oe.emissive.copy(a),
        oe.emissiveIntensity = c.led.panels ? .06 : .02,
        F.emissive.copy(a),
        F.emissiveIntensity = .02
    }
    let vt = new Z
      , yt = new Z;
    function bt() {
        h();
        let e = Uf.night
          , t = Uf.tech
          , r = K.night
          , i = K.tech
          , a = n => q.lerp(q.lerp(f[n], e[n], r), t[n], i)
          , o = n => vt.set(f[n]).lerp(yt.set(e[n]), r).clone().lerp(yt.set(t[n]), i);
        b.background = o(`bg`),
        b.fog.color = o(`fog`),
        te.color = o(`hemiSky`),
        te.groundColor = o(`hemiGround`),
        te.intensity = a(`hemi`),
        ne.intensity = a(`sun`),
        ne.color = o(`sunColor`),
        R.color = o(`ground`),
        _.toneMappingExposure = a(`exposure`),
        z.material.opacity = a(`grid`);
        let s = q.lerp(q.lerp(f.elev, e.elev, r), t.elev, i)
          , l = q.degToRad(q.lerp(52, 118, r));
        if (c.sun && n === `studio`) {
            let e = xt();
            s = q.lerp(Math.max(-6, e.el), t.elev, i),
            l = q.degToRad(180 - (e.az - c.north)),
            s < 18 && ne.color.lerp(yt.set(`#ffb070`), q.clamp((18 - s) / 22, 0, .7))
        }
        let u = q.degToRad(90 - s);
        T.setFromSphericalCoords(1, u, l),
        ne.position.copy(T).multiplyScalar(30),
        S && (w.sunPosition.value.copy(T),
        w.turbidity.value = q.lerp(4, 9, r),
        w.rayleigh.value = q.lerp(1.6, .4, r),
        w.mieCoefficient.value = q.lerp(.004, .012, r),
        C.visible = i < .5,
        A.visible = r > .02 && i < .5,
        k.opacity = Math.max(0, r - .35) * 1.4),
        ee.strength = .55 * r * c.ledDim,
        b.environmentIntensity = q.lerp(1, .1, r);
        let d = i < .5 && n !== `hero` ? ke : null;
        R.map !== d && (R.map = d,
        R.needsUpdate = !0),
        R.roughness = q.lerp(.92, .35, K.rain),
        R.metalness = q.lerp(0, .15, K.rain),
        _t(cn)
    }
    function xt() {
        let e = q.degToRad(Bf[c.city] ?? 37)
          , t = Math.round((c.sunMonth - .5) * 30.4)
          , n = q.degToRad(23.44) * Math.sin(2 * Math.PI * (284 + t) / 365)
          , r = q.degToRad(15 * (c.sunHour - 12))
          , i = Math.asin(q.clamp(Math.sin(e) * Math.sin(n) + Math.cos(e) * Math.cos(n) * Math.cos(r), -1, 1))
          , a = (Math.sin(n) - Math.sin(i) * Math.sin(e)) / (Math.cos(i) * Math.cos(e) || 1e-6)
          , o = Math.acos(q.clamp(a, -1, 1));
        return r > 0 && (o = 2 * Math.PI - o),
        {
            el: q.radToDeg(i),
            az: q.radToDeg(o)
        }
    }
    function St() {
        let e = xt()
          , t = q.clamp((4 - e.el) / 12, 0, 1);
        K.night = t,
        c.night = t > .5,
        bt()
    }
    function Ct(t) {
        c.night = t,
        c.sun = !1,
        e.to(K, {
            night: +!!t,
            duration: 1.4,
            ease: `power2.inOut`,
            onUpdate: bt,
            overwrite: `auto`
        })
    }
    function X() {
        je.visible = c.tech,
        [F, ae, oe].forEach(e => {
            e.transparent = c.tech,
            e.opacity = c.tech ? .55 : 1,
            e.needsUpdate = !0
        }
        ),
        ue.opacity = c.tech ? .18 : .3,
        de.opacity = c.tech ? .5 : .93,
        fe.transparent = c.tech,
        fe.opacity = c.tech ? .45 : 1,
        fe.needsUpdate = !0;
        let e = B.getObjectByName(`env`);
        e && (e.visible = !c.tech),
        h()
    }
    function wt(t) {
        c.tech = t,
        t && rt(),
        e.to(K, {
            tech: +!!t,
            duration: 1,
            ease: `power2.inOut`,
            onUpdate: bt,
            overwrite: `auto`
        }),
        X(),
        t && !ut && dt(!0)
    }
    let Tt = d.rain
      , Et = new Or
      , Dt = new Float32Array(Tt * 6)
      , Ot = new Float32Array(Tt)
      , kt = {
        x: 16,
        y: 9,
        z: 16
    };
    for (let e = 0; e < Tt; e++) {
        let t = (Math.random() - .5) * kt.x
          , n = Math.random() * kt.y
          , r = (Math.random() - .5) * kt.z;
        Dt.set([t, n, r, t, n - .25, r], e * 6),
        Ot[e] = 7 + Math.random() * 4
    }
    Et.setAttribute(`position`, new _r(Dt,3));
    let At = new Yi({
        color: 10466505,
        transparent: !0,
        opacity: 0
    })
      , jt = new sa(Et,At);
    jt.visible = !1,
    jt.frustumCulled = !1,
    b.add(jt);
    function Mt(t) {
        c.rain = t,
        jt.visible = !0,
        e.to(At, {
            opacity: t ? .55 : 0,
            duration: .9,
            onComplete: () => {
                t || (jt.visible = !1)
            }
        }),
        e.to(K, {
            rain: +!!t,
            duration: 1.2,
            onUpdate: bt
        }),
        t && (c.system === `bio` && Pt(0),
        (c.system === `rolling` || c.system === `pergola` || AWp) && Ft(0))
    }
    function Nt(e) {
        if (!jt.visible)
            return;
        let t = Et.attributes.position.array;
        for (let n = 0; n < Tt; n++) {
            let r = n * 6
              , i = t[r + 1] - Ot[n] * e;
            i < 0 && (i = kt.y,
            t[r] = t[r + 3] = (Math.random() - .5) * kt.x,
            t[r + 2] = t[r + 5] = (Math.random() - .5) * kt.z),
            t[r + 1] = i,
            t[r + 4] = i - .25
        }
        Et.attributes.position.needsUpdate = !0
    }
    function Pt(t, n=!1) {
        if (c.angle = Math.min(Rf.maxAngle, t),
        n || l) {
            K.angle = c.angle,
            ft();
            return
        }
        e.to(K, {
            angle: c.angle,
            duration: .9,
            ease: `power2.inOut`,
            onUpdate: ft,
            overwrite: `auto`
        })
    }
    function Ft(t, n=!1) {
        if (c.open = t,
        n || l) {
            K.open = t,
            ft();
            return
        }
        e.to(K, {
            open: t,
            duration: 1.6,
            ease: `power2.inOut`,
            onUpdate: ft,
            overwrite: `auto`
        })
    }
    function It(t, n=!1) {
        if (c.sideOpen = t,
        n || l) {
            K.sideOpen = t,
            pt();
            return
        }
        e.to(K, {
            sideOpen: t,
            duration: 1.3,
            ease: `power2.inOut`,
            onUpdate: pt,
            overwrite: `auto`
        })
    }
    function Lt(t) {
        c.clean = t,
        e.to(K, {
            clean: +!!t,
            duration: 1,
            ease: `power2.inOut`,
            onUpdate: pt,
            overwrite: `auto`
        })
    }
    let Rt = !1;
    function zt() {
        Rt || (Rt = !0,
        requestAnimationFrame( () => {
            Rt = !1,
            G()
        }
        ))
    }
    function Bt(e, t) {
        c[e] = t,
        zt()
    }
    let Ht = {
        corner: () => ({
            pos: [c.width * 1.05 + 3.4, c.height * 1.4 + .8, c.depth * 1.05 + 3.6],
            tgt: [0, c.height * .45, 0]
        }),
        front: () => ({
            pos: [0, c.height * .8, c.depth / 2 + c.width * .95 + 3],
            tgt: [0, c.height * .5, 0]
        }),
        top: () => ({
            pos: [.01, c.height + Math.max(c.width, c.depth) * 1.5 + 2, .01],
            tgt: [0, c.height * .5, 0]
        }),
        inside: () => ({
            pos: [-c.width * .2, 1.6, -c.depth * .15],
            tgt: [c.width * .28, 1.85, c.depth * .8]
        }),
        detail: () => ({
            pos: [-c.width / 2 - 1.3, c.height + 1, -c.depth / 2 + 1.8],
            tgt: [-c.width / 2 + .3, c.height - .1, -c.depth / 2 + .7]
        })
    }
      , Ut = () => {
        let e = j.aspect || 1;
        return e < 1.3 ? Math.min(1.5, Math.sqrt(1.3 / e)) : 1
    }
    ;
    function Wt(t) {
        let n = Ht[t]?.();
        if (!n)
            return;
        M.autoRotate = !1;
        let r = [`inside`, `detail`].includes(t) ? 1 : Ut()
          , i = n.tgt.map( (e, t) => e + (n.pos[t] - e) * r)
          , a = {
            x: j.position.x,
            y: j.position.y,
            z: j.position.z,
            tx: M.target.x,
            ty: M.target.y,
            tz: M.target.z
        };
        e.to(a, {
            x: i[0],
            y: i[1],
            z: i[2],
            tx: n.tgt[0],
            ty: n.tgt[1],
            tz: n.tgt[2],
            duration: l ? 0 : 1.3,
            ease: `power3.inOut`,
            overwrite: `auto`,
            onUpdate: () => {
                j.position.set(a.x, a.y, a.z),
                M.target.set(a.tx, a.ty, a.tz),
                h()
            }
        })
    }
    let Gt = {
        p: 0,
        cur: 0
    };
    function Kt(e) {
        Gt.p = q.clamp(e, 0, 1),
        h()
    }
    function qt() {
        Gt.cur += (Gt.p - Gt.cur) * .07;
        let e = Gt.cur
          , t = c.width
          , n = c.height
          , r = c.depth
          , i = (e, t, n) => q.smoothstep(n, e, t)
          , a = q.lerp(0, 105, i(.05, .55, e)) - q.lerp(0, 70, i(.7, 1, e));
        K.angle = a,
        c.angle = a,
        ft();
        let o = i(0, 1, e)
          , s = [t * .95, 1.65, r * .9 + 2.8]
          , l = [t * 1.05 + 2.4, n * 1.75 + .8, r * .95 + 2.4]
          , u = [-t * .08, n * .58, 0]
          , d = [0, n * .4, 0]
          , f = j.aspect || 1
          , p = q.clamp((1 - f) / .5, 0, 1)
          , m = f < 1.3 ? Math.min(2.4, Math.sqrt(1.3 / f) * (1 + .25 * p)) : 1
          , h = -n * .9 * p
          , g = q.lerp(u[0], d[0], o)
          , _ = q.lerp(u[1], d[1], o)
          , v = q.lerp(u[2], d[2], o)
          , y = q.lerp(s[0], l[0], o)
          , b = q.lerp(s[1], l[1], o)
          , x = q.lerp(s[2], l[2], o);
        j.position.set(g + (y - g) * m, Math.max(.6, _ + (b - _) * m), v + (x - v) * m),
        M.target.set(g, _ + h, v),
        j.lookAt(M.target);
        let S = i(.66, .96, e) * .85;
        Math.abs(S - K.night) > .002 && (K.night = S,
        c.night = S > .5,
        bt()),
        K.sideOpen = 1 - i(.3, .6, e),
        pt()
    }
    function Jt(e, t) {
        let n = c.width
          , r = c.depth
          , i = c.height
          , a = (e + 1) * r * Rf.rail.kgm
          , o = (c.mount === `wall` ? 1 : 2) * n * (Rf.gutter.kgm + Rf.gutter.ledKgm)
          , s = t * (i - Rf.rail.h) * Rf.post.kgm
          , l = c.system === `glass` ? n * r * 22 : c.system === `pergola` ? Fe.length * (n / e) * Rf.slat.kgm + n * r * Rf.slat.fabricKgm2 : Me.length * (n / e) * Rf.panel.kgm;
        return Math.round(a + o + s + l)
    }
    let Yt = {};
    t.querySelectorAll(`[data-out]`).forEach(e => {
        (Yt[e.dataset.out] ||= []).push(e)
    }
    );
    function Xt() {
        let e = (e, t) => {
            (Yt[e] || []).forEach(e => {
                e.textContent = t
            }
            )
        }
        ;
        e(`blades_label`, c.system === `pergola` ? o.slats || `Çıta` : o.blades || `Lamel`),
        e(`panel_colour`, c.panelColourName),
        e(`fabric_colour`, c.fabricName),
        e(`area`, (AWp ? AWp.area : c.width * c.depth).toFixed(1).replace(`.`, `,`) + ` m²`),
        e(`blades`, c.system === `glass` || AWp ? `—` : `${We.panels} × ${We.modules}`),
        e(`motors`, c.system === `glass` ? `—` : String(We.modules)),
        e(`modules`, String(We.modules)),
        e(`weight`, `≈ ${We.weight.toLocaleString(`tr-TR`)} kg`),
        e(`angle`, `${Math.round(c.angle)}°`),
        e(`open`, `${Math.round(c.open * 100)}%`),
        e(`side`, `${Math.round(c.sideOpen * 100)}%`),
        e(`dim`, `${Math.round(c.ledDim * 100)}%`),
        e(`size`, `${et(c.width)} × ${et(c.system === `winawn` ? c.height : c.depth)}`),
        e(`colour`, c.colourName),
        e(`system`, o[`system_` + c.system] || c.system),
        t.dispatchEvent(new CustomEvent(`studio:change`,{
            detail: {
                ...c,
                meta: {
                    ...We
                }
            }
        }))
    }
    let Zt = 500
      , Qt = 1;
    function $t() {
        let e = i.clientWidth || 800
          , t = i.clientHeight || 500;
        Zt = t,
        _.setSize(e, t, !1),
        v.setSize(e, t),
        j.aspect = e / t,
        n === `hero` && (j.fov = e / t < 1 ? 48 : 36),
        j.updateProjectionMatrix(),
        N.setPixelRatio(_.getPixelRatio()),
        N.setSize(e, t),
        ee.resolution.set(e, t),
        Object.values(L).forEach(n => n.resolution.set(e, t)),
        h()
    }
    function en() {
        _.setPixelRatio(Math.min(window.devicePixelRatio || 1, d.dpr) * Qt),
        $t()
    }
    let tn = performance.now()
      , nn = () => {
        tn = performance.now(),
        n === `studio` && (M.autoRotate = !1),
        h()
    }
    ;
    n === `studio` && (M.addEventListener(`start`, nn),
    t.addEventListener(`pointerdown`, nn, !0),
    t.addEventListener(`keydown`, nn, !0),
    t.addEventListener(`input`, nn, !0)),
    M.addEventListener(`change`, h);
    let rn = new ResizeObserver($t);
    rn.observe(i),
    $t();
    let an = performance.now()
      , on = 0
      , sn = 0
      , cn = 0
      , ln = 16
      , un = 0
      , dn = 0
      , fn = () => e.globalTimeline.getChildren(!1, !0, !0).some(e => e.isActive());
    function pn(e) {
        if (sn = requestAnimationFrame(pn),
        !m)
            return;
        let t = Math.min(.05, (e - an) / 1e3);
        an = e,
        cn += t;
        let r = n !== `hero` && M.update();
        n === `studio` && d.idleRotate && !M.autoRotate && e - tn > 14e3 && !c.tech && (M.autoRotate = !0,
        M.autoRotateSpeed = .35);
        let i = r || M.autoRotate || jt.visible || c.ledMode === `rgb` || c.tech || n === `hero` && Math.abs(Gt.p - Gt.cur) > 4e-4 || fn();
        if (!p && !i && e - on < 1e3)
            return;
        p = !1,
        on = e;
        let a = performance.now();
        n === `hero` && qt(),
        Nt(t),
        c.ledMode === `rgb` && _t(cn);
        let o = Zt / (2 * j.position.distanceTo(M.target) * Math.tan(q.degToRad(j.fov / 2)))
          , s = q.clamp(.018 * o, 2.2, 6);
        L.perimeter.linewidth = L.panels.linewidth = L.posts.linewidth = L.giy.linewidth = s;
        let l = j.position.y > c.height - .1;
        Ne.forEach(e => {
            let t = e.userData.w
              , n = e.parent.position
              , r = j.position.x - n.x
              , i = j.position.z - n.z
              , a = l ? Math.min(1.4, .5 * Math.abs(r) / Math.max(.05, Math.abs(i)) + .06) : 0
              , o = -t / 2 + .12 + (r < 0 ? a : 0)
              , s = t / 2 - .12 - (r >= 0 ? a : 0);
            e.scale.x = Math.max(.05, s - o),
            e.position.x = (o + s) / 2
        }
        ),
        c.tech && (Te.opacity = .55 + .45 * Math.abs(Math.sin(cn * 3)),
        je.children.forEach(e => {
            e.userData.src && (e.userData.src.updateWorldMatrix(!0, !1),
            e.matrix.copy(e.userData.src.matrixWorld))
        }
        )),
        mn(),
        (ut || c.tech) && v.render(b, j);
        let u = performance.now() - a;
        ln = ln * .9 + u * .1,
        ln > 26 ? (un++,
        dn = 0) : ln < 11 ? (dn++,
        un = 0) : (un = 0,
        dn = 0),
        un > 45 && Qt > .6 ? (Qt = Math.max(.6, Qt - .15),
        un = 0,
        en()) : dn > 400 && Qt < 1 && (Qt = Math.min(1, Qt + .15),
        dn = 0,
        en())
    }
    function mn() {
        P && K.night > .05 && c.led.master ? N.render() : _.render(b, j)
    }
    sn = requestAnimationFrame(pn);
    let hn = new IntersectionObserver( ([e]) => {
        m = e.isIntersecting,
        an = performance.now(),
        h()
    }
    ,{
        threshold: .02
    });
    hn.observe(t),
    document.addEventListener(`visibilitychange`, () => {
        m = !document.hidden,
        an = performance.now(),
        h()
    }
    ),
    mt(),
    G(),
    bt(),
    _t(),
    n === `hero` ? (Gt.cur = 0,
    qt(),
    dt(!1)) : (Wt(`corner`),
    c.night && (K.night = 1,
    bt()),
    l || (j.position.set(c.width * 2.2 + 6, c.height * 2.2 + 2, c.depth * 2 + 6),
    K.angle = 0,
    ft(),
    e.delayedCall(.15, () => {
        Wt(`corner`),
        e.delayedCall(.5, () => Pt(c.angle))
    }
    ))),
    n === `ambient` && !l && e.timeline({
        repeat: -1,
        delay: 2.5
    }).call( () => Pt(95)).to({}, {
        duration: 4.5
    }).call( () => Pt(0)).to({}, {
        duration: 3
    }).call( () => It(1)).to({}, {
        duration: 3
    }).call( () => Ct(!0)).to({}, {
        duration: 5
    }).call( () => Pt(55)).to({}, {
        duration: 3.5
    }).call( () => {
        Ct(!1),
        It(0)
    }
    ).to({}, {
        duration: 2.5
    }).call( () => Pt(35)).to({}, {
        duration: 3
    });
    let gn = {
        state: c,
        meta: We,
        setAngle: Pt,
        setOpen: Ft,
        setSideOpen: It,
        setClean: Lt,
        setDim: Bt,
        setNight: Ct,
        setRain: Mt,
        setTech: wt,
        goView: Wt,
        build: G,
        setScroll: Kt,
        setSystem(e) {
            c.system = e,
            G()
        },
        setMount(e) {
            c.mount = e,
            G()
        },
        setColour(e, t) {
            c.colour = e,
            c.colourName = t || e,
            mt(),
            Xt()
        },
        setPanelSep(e) {
            c.panelSep = !!e,
            mt(),
            Xt()
        },
        setPanelColour(e, t) {
            c.panelColour = e,
            c.panelColourName = t || e,
            mt(),
            Xt()
        },
        setFabric(e, t) {
            c.fabricColour = e,
            c.fabricName = t || e,
            mt(),
            Xt()
        },
        setSide(e, t) {
            c.sides[e] = t,
            G()
        },
        setGiyDir(e) {
            c.giyDir = e,
            G()
        },
        setLedMaster(e) {
            c.led.master = e,
            _t(cn)
        },
        setLedZone(e, t) {
            c.led[e] = t,
            _t(cn)
        },
        setLedMode(e) {
            c.ledMode = e,
            _t(cn)
        },
        setLedColour(e) {
            c.ledColour = e,
            c.ledMode = `custom`,
            _t(cn)
        },
        setLedDim(e) {
            c.ledDim = e,
            _t(cn),
            Xt()
        },
        setFurniture(e) {
            c.furniture = e,
            G()
        },
        setDims: dt,
        setEnv(e) {
            c.env = !!e,
            G()
        },
        setSun(e) {
            c.sun = !!e,
            c.sun ? St() : (K.night = +!!c.night,
            bt()),
            Xt()
        },
        setSunParam(e, t) {
            c[e] = t,
            c.sun && St(),
            Xt()
        },
        sunPos: xt,
        sideKinds: g,
        quality: d,
        setSideSeg(e, t, n, r) {
            let i = g(e, r);
            i[t] = n,
            c.sides[e] = r === 1 ? n : i,
            G()
        },
        setAutoRotate(e) {
            M.autoRotate = !!e,
            M.autoRotateSpeed = .8
        },
        applyConfig(e) {
            `system.mount.width.depth.height.angle.open.colour.colourName.panelSep.panelColour.panelColourName.fabricColour.fabricName.sideOpen.clean.giyDir.ledMode.ledColour.ledDim.night.rain.furniture.tech.sun.sunHour.sunMonth.north.city.env.rise.wedge.valance`.split(`.`).forEach(t => {
                e[t] !== void 0 && e[t] !== null && (c[t] = e[t])
            }
            ),
            e.sides && Object.assign(c.sides, e.sides),
            e.led && Object.assign(c.led, e.led),
            c.width = Math.min(12, Math.max(1, +c.width)),
            c.depth = Math.min(7.6, Math.max(1.5, +c.depth)),
            c.height = Math.min(4, Math.max(1.2, +c.height)),
            c.rise = Math.min(2.5, Math.max(0, +c.rise || 0)),
            K.angle = c.angle,
            K.open = c.open,
            K.sideOpen = c.sideOpen,
            K.clean = +!!c.clean,
            K.night = +!!c.night,
            K.rain = +!!c.rain,
            K.tech = +!!c.tech,
            mt(),
            G(),
            c.sun ? St() : bt(),
            X(),
            dt(ut),
            c.rain && (jt.visible = !0,
            At.opacity = .55)
        },
        snapshot() {
            return mn(),
            _.domElement.toDataURL(`image/png`)
        },
        destroy() {
            cancelAnimationFrame(sn),
            rn.disconnect(),
            hn.disconnect(),
            M.dispose(),
            _.dispose(),
            x.dispose()
        }
    };
    return t.__studio = gn,
    t.classList.add(`is-ready`),
    gn
}
function Gf() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = `#d9d6d0`,
    t.fillRect(0, 0, 256, 256);
    let n = t.getImageData(0, 0, 256, 256);
    for (let e = 0; e < n.data.length; e += 4) {
        let t = (Math.random() - .5) * 14;
        n.data[e] += t,
        n.data[e + 1] += t,
        n.data[e + 2] += t
    }
    return t.putImageData(n, 0, 0),
    t.strokeStyle = `rgba(80,80,80,0.35)`,
    t.lineWidth = 3,
    t.strokeRect(1.5, 1.5, 253, 253),
    new ha(e)
}
function Kf() {
    let e = document.createElement(`canvas`);
    e.width = 256,
    e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = `#9a9a9a`,
    t.fillRect(0, 0, 256, 256);
    for (let e = 0; e < 256; e++) {
        let n = 130 + Math.round((Math.random() - .5) * 70);
        t.fillStyle = `rgb(${n},${n},${n})`,
        t.fillRect(0, e, 256, 1)
    }
    let n = new ha(e);
    return n.wrapS = n.wrapT = r,
    n.repeat.set(6, 1.5),
    n
}
function qf() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 256;
    let t = e.getContext(`2d`)
      , n = t.createRadialGradient(128, 128, 20, 128, 128, 128);
    return n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(.55, `rgba(255,255,255,0.55)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    t.fillStyle = n,
    t.fillRect(0, 0, 256, 256),
    new ha(e)
}
function Jf() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 128;
    let t = e.getContext(`2d`);
    t.fillStyle = `#9a9ea6`,
    t.fillRect(0, 0, 128, 128),
    t.fillStyle = `rgba(0,0,0,0.25)`;
    for (let e = 0; e < 128; e += 4)
        t.fillRect(e, 0, 1, 128),
        t.fillRect(0, e, 128, 1);
    let n = new ha(e);
    return n.wrapS = n.wrapT = r,
    n.repeat.set(40, 24),
    n.colorSpace = Le,
    n
}
function Yf() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 128;
    let t = e.getContext(`2d`);
    t.fillStyle = `#ffffff`,
    t.fillRect(0, 0, 128, 128),
    t.fillStyle = `rgba(0,0,0,0.07)`;
    for (let e = 0; e < 128; e += 3)
        t.fillRect(e, 0, 1, 128),
        t.fillRect(0, e, 128, 1);
    let n = new ha(e);
    return n.wrapS = n.wrapT = r,
    n.repeat.set(14, 10),
    n.colorSpace = Le,
    n
}
function Xf() {
    let e = document.createElement(`canvas`);
    e.width = e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = `#7f9a5c`,
    t.fillRect(0, 0, 256, 256);
    for (let e = 0; e < 2600; e++)
        t.fillStyle = `rgba(${40 + Math.random() * 60},${90 + Math.random() * 60},${30 + Math.random() * 40},0.35)`,
        t.fillRect(Math.random() * 256, Math.random() * 256, 2, 3);
    let n = new ha(e);
    return n.wrapS = n.wrapT = r,
    n.repeat.set(16, 16),
    n.colorSpace = Le,
    n
}
function Zf(e) {
    let t = document.createElement(`canvas`);
    t.width = 192,
    t.height = 256;
    let n = t.getContext(`2d`);
    n.fillStyle = `#5a4030`,
    n.fillRect(88, 150, 16, 106);
    let r = (e, t, r, i) => {
        n.fillStyle = i,
        n.beginPath(),
        n.ellipse(e, t, r, r * .9, 0, 0, Math.PI * 2),
        n.fill()
    }
    ;
    e === 0 ? (r(96, 118, 62, `#3f6f3a`),
    r(66, 96, 44, `#4a7d42`),
    r(126, 92, 46, `#43743c`),
    r(96, 70, 40, `#55884a`),
    r(84, 110, 30, `#355f31`)) : (n.fillStyle = `#365f36`,
    [[96, 10, 70, 100], [96, 60, 84, 150], [96, 110, 96, 196]].forEach( ([e,t,r,i]) => {
        n.beginPath(),
        n.moveTo(e, t),
        n.lineTo(e - r / 2, i),
        n.lineTo(e + r / 2, i),
        n.closePath(),
        n.fill()
    }
    ),
    n.fillStyle = `rgba(120,170,100,0.25)`,
    n.beginPath(),
    n.moveTo(96, 10),
    n.lineTo(72, 100),
    n.lineTo(96, 100),
    n.closePath(),
    n.fill());
    let i = new ha(t);
    return i.colorSpace = Le,
    i
}
export {Wf as mount};
