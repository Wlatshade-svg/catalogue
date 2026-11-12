const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["studio3d-engine-DMY0YNDV.js", "motion-B7PB-XZy.js"]))) => i.map(i => d[i]);
import {n as e, r as t, t as n} from "./motion-B7PB-XZy.js";
import {a as r, i, n as a, o, r as s, t as c} from "./swiper-CI083D-Y.js";
function l({reduceMotion: e}) {
    let n = document.querySelector(`.preloader`);
    if (!n || e || sessionStorage.getItem(`tkn_preloaded`))
        return n?.remove(),
        Promise.resolve();
    sessionStorage.setItem(`tkn_preloaded`, `1`);
    let r = e => new Promise(t => setTimeout(t, e))
      , i = document.querySelector(`.hero__media img`)
      , a = Promise.all([document.fonts?.ready ?? Promise.resolve(), i && !i.complete ? i.decode().catch( () => {}
    ) : Promise.resolve()]);
    return new Promise(e => {
        Promise.all([Promise.race([a, r(700)]), r(350)]).then( () => {
            t.timeline({
                onComplete: () => n.remove()
            }).to(n.querySelector(`.preloader__brand`), {
                opacity: 0,
                y: -18,
                duration: .3,
                ease: `power2.in`
            }).to(n.querySelector(`.preloader__veil`), {
                yPercent: -100,
                duration: .6,
                ease: `power4.inOut`
            }, `-=0.12`).add(e, `-=0.4`)
        }
        )
    }
    )
}
function u() {
    let e = document.querySelector(`.site-header`);
    if (!e)
        return;
    let t = window.scrollY
      , n = () => {
        let n = window.scrollY;
        e.classList.toggle(`is-scrolled`, n > 30),
        n > 420 && n > t + 4 ? e.classList.add(`is-hidden`) : (n < t - 4 || n < 120) && e.classList.remove(`is-hidden`),
        t = n
    }
    ;
    n(),
    window.addEventListener(`scroll`, n, {
        passive: !0
    })
}
function d() {
    document.querySelectorAll(`.lang-switch a[hreflang]`).forEach(e => {
        e.addEventListener(`click`, () => {
            let t = location.protocol === `https:` ? `; Secure` : ``;
            document.cookie = `tkn_locale=${e.getAttribute(`hreflang`)}; path=/; max-age=31536000; SameSite=Lax${t}`
        }
        )
    }
    )
}
function f({lenis: e}) {
    let n = document.querySelector(`.fs-menu`);
    if (!n)
        return;
    let r = n.querySelectorAll(`.fs-menu__slat`)
      , i = n.querySelector(`.fs-menu__inner`)
      , a = n.querySelectorAll(`[data-menu-stagger]`)
      , o = document.querySelectorAll(`[data-menu-open]`)
      , s = n.querySelectorAll(`[data-menu-close]`)
      , c = !1
      , l = null
      , u = t.timeline({
        paused: !0
    });
    u.set(n, {
        visibility: `visible`
    }).to(r, {
        scaleY: 1,
        duration: .5,
        ease: `power3.inOut`,
        stagger: .06
    }).to(i, {
        opacity: 1,
        duration: .3
    }, `-=0.15`).to(a, {
        opacity: 1,
        y: 0,
        duration: .55,
        ease: `power3.out`,
        stagger: .045
    }, `-=0.1`),
    u.eventCallback(`onReverseComplete`, () => {
        t.set(n, {
            visibility: `hidden`
        })
    }
    );
    let d = () => {
        c || (c = !0,
        l = document.activeElement,
        n.classList.add(`is-open`),
        document.body.style.overflow = `hidden`,
        e?.stop(),
        u.timeScale(1).play(),
        n.querySelector(`a, button`)?.focus({
            preventScroll: !0
        }))
    }
      , f = () => {
        c && (c = !1,
        n.classList.remove(`is-open`),
        document.body.style.overflow = ``,
        e?.start(),
        u.timeScale(1.4).reverse(),
        l?.focus({
            preventScroll: !0
        }))
    }
    ;
    o.forEach(e => e.addEventListener(`click`, d)),
    s.forEach(e => e.addEventListener(`click`, f)),
    document.addEventListener(`keydown`, e => {
        if (c) {
            if (e.key === `Escape`) {
                f();
                return
            }
            if (e.key === `Tab`) {
                let t = n.querySelectorAll(`a[href], button:not([disabled])`);
                if (!t.length)
                    return;
                let r = t[0]
                  , i = t[t.length - 1];
                e.shiftKey && document.activeElement === r ? (e.preventDefault(),
                i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(),
                r.focus())
            }
        }
    }
    )
}
t.registerPlugin(n);
function p() {
    let r = new e({
        duration: 1.1,
        easing: e => Math.min(1, 1.001 - 2 ** (-10 * e)),
        smoothWheel: !0,
        syncTouch: !1,
        anchors: {
            offset: -90
        }
    });
    return r.on(`scroll`, n.update),
    t.ticker.add(e => {
        r.raf(e * 1e3)
    }
    ),
    t.ticker.lagSmoothing(0),
    window.__lenis = r,
    r
}
var m = `.head-1, .head-2`;
function h() {
    let e = document.querySelector(`.cursor-dot`);
    if (!e)
        return;
    document.documentElement.classList.add(`has-cursor`),
    window.addEventListener(`mousemove`, n => {
        t.set(e, {
            x: n.clientX,
            y: n.clientY,
            xPercent: -50,
            yPercent: -50
        })
    }
    ),
    document.addEventListener(`mouseleave`, () => t.to(e, {
        opacity: 0,
        duration: .2
    })),
    document.addEventListener(`mouseenter`, () => t.to(e, {
        opacity: 1,
        duration: .2
    }));
    let n = e => {
        let t = e.closest(m);
        return t && !t.closest(`.hero, .fs-menu`)
    }
      , r = e => !!e?.closest?.(`[data-cursor]`);
    document.addEventListener(`mouseover`, t => {
        n(t.target) && e.classList.add(`is-grown`),
        r(t.target) && e.classList.add(`is-hover`)
    }
    ),
    document.addEventListener(`mouseout`, t => {
        n(t.target) && e.classList.remove(`is-grown`),
        r(t.target) && !r(t.relatedTarget ?? document.body) && e.classList.remove(`is-hover`)
    }
    ),
    window.addEventListener(`mousedown`, () => e.classList.add(`is-pressed`)),
    window.addEventListener(`mouseup`, () => e.classList.remove(`is-pressed`))
}
t.registerPlugin(n);
function g() {
    v(),
    _(),
    b(),
    x(),
    S(),
    C()
}
function _() {
    document.querySelectorAll(`[data-stagger]`).forEach(e => {
        t.to(e.children, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .45,
            ease: `back.out(1.4)`,
            stagger: {
                each: .06,
                from: `start`,
                grid: `auto`
            },
            scrollTrigger: {
                trigger: e,
                start: `top 88%`,
                once: !0
            }
        })
    }
    )
}
function v() {
    document.querySelectorAll(`[data-reveal]`).forEach(e => {
        t.to(e, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: `power3.out`,
            delay: parseFloat(e.dataset.revealDelay || 0),
            scrollTrigger: {
                trigger: e,
                start: `top 88%`,
                once: !0
            }
        })
    }
    )
}
function y(e) {
    let t = Array.from(e.childNodes);
    return e.textContent = ``,
    t.forEach(t => {
        t.nodeType === Node.TEXT_NODE ? t.textContent.split(/(\s+)/).forEach(t => {
            if (!t)
                return;
            if (/^\s+$/.test(t)) {
                e.appendChild(document.createTextNode(` `));
                return
            }
            let n = document.createElement(`span`);
            n.className = `reveal-line`;
            let r = document.createElement(`span`);
            r.textContent = t,
            n.appendChild(r),
            e.appendChild(n)
        }
        ) : e.appendChild(t.cloneNode(!0))
    }
    ),
    e.querySelectorAll(`.reveal-line > span`)
}
function b() {
    document.querySelectorAll(`[data-reveal-line]`).forEach(e => {
        let n = y(e);
        t.to(n, {
            y: 0,
            duration: .85,
            ease: `power4.out`,
            stagger: .045,
            scrollTrigger: {
                trigger: e,
                start: `top 88%`,
                once: !0
            },
            onComplete: () => {
                t.set(n, {
                    clearProps: `transform`
                }),
                e.classList.add(`is-revealed`)
            }
        })
    }
    )
}
function x() {
    document.querySelectorAll(`.js-shutter`).forEach(e => {
        e.classList.add(`shutter`);
        let n = [];
        for (let t = 0; t < 5; t++) {
            let r = document.createElement(`span`);
            r.className = `shutter__strip`,
            r.style.top = `${100 / 5 * t}%`,
            r.style.height = `20.5%`,
            e.appendChild(r),
            n.push(r)
        }
        let r = e.querySelector(`img`)
          , i = t.timeline({
            scrollTrigger: {
                trigger: e,
                start: `top 85%`,
                once: !0
            }
        });
        i.to(n, {
            scaleY: 0,
            duration: .75,
            ease: `power3.inOut`,
            stagger: .07
        }),
        r && i.from(r, {
            scale: 1.15,
            duration: 1.3,
            ease: `power3.out`,
            clearProps: `transform`
        }, .15)
    }
    )
}
function S() {
    document.querySelectorAll(`[data-parallax]`).forEach(e => {
        let n = parseFloat(e.dataset.parallax || 8);
        t.fromTo(e, {
            yPercent: -n
        }, {
            yPercent: n,
            ease: `none`,
            scrollTrigger: {
                trigger: e.parentElement,
                start: `top bottom`,
                end: `bottom top`,
                scrub: .6
            }
        })
    }
    )
}
function C() {
    document.querySelectorAll(`[data-counter]`).forEach(e => {
        let n = parseFloat(e.dataset.counter)
          , r = parseInt(e.dataset.counterDecimals || 0, 10)
          , i = {
            val: 0
        };
        t.to(i, {
            val: n,
            duration: 1.8,
            ease: `power2.out`,
            scrollTrigger: {
                trigger: e,
                start: `top 90%`,
                once: !0
            },
            onUpdate: () => {
                e.textContent = i.val.toLocaleString(document.documentElement.lang, {
                    minimumFractionDigits: r,
                    maximumFractionDigits: r
                })
            }
        })
    }
    )
}
t.registerPlugin(n);
function w() {
    document.querySelectorAll(`.blueprint`).forEach(e => {
        let r = T(e);
        if (!r.length)
            return;
        let i = t.timeline({
            paused: !0
        }).to(r, {
            strokeDashoffset: 0,
            duration: 1.15,
            ease: `power2.out`,
            stagger: .018
        })
          , a = e.closest(`.fs-menu`);
        if (a) {
            E(a, i);
            return
        }
        n.create({
            trigger: e,
            start: `top 92%`,
            once: !0,
            onEnter: () => i.play()
        })
    }
    )
}
function T(e) {
    let n = [...e.querySelectorAll(`path:not([stroke-dasharray]), circle`)];
    return n.forEach(e => {
        let n = e.getTotalLength();
        t.set(e, {
            strokeDasharray: n,
            strokeDashoffset: n
        })
    }
    ),
    n
}
function E(e, t) {
    let n = new MutationObserver( () => {
        e.classList.contains(`is-open`) && (t.play(),
        n.disconnect())
    }
    );
    n.observe(e, {
        attributes: !0,
        attributeFilter: [`class`]
    })
}
function D() {
    document.querySelectorAll(`[data-magnetic]`).forEach(e => {
        let n = parseFloat(e.dataset.magnetic || .25);
        e.addEventListener(`mousemove`, r => {
            let i = e.getBoundingClientRect()
              , a = r.clientX - i.left - i.width / 2
              , o = r.clientY - i.top - i.height / 2;
            t.to(e, {
                x: a * n,
                y: o * n,
                duration: .4,
                ease: `power3.out`
            })
        }
        ),
        e.addEventListener(`mouseleave`, () => {
            t.to(e, {
                x: 0,
                y: 0,
                duration: .7,
                ease: `elastic.out(1, 0.4)`
            })
        }
        )
    }
    )
}
function O() {
    document.querySelectorAll(`.btn, .social-pill`).forEach(e => {
        let t = t => {
            let n = e.getBoundingClientRect();
            e.style.setProperty(`--lx`, ((t.clientX - n.left) / n.width * 100).toFixed(1) + `%`),
            e.style.setProperty(`--ly`, ((t.clientY - n.top) / n.height * 100).toFixed(1) + `%`)
        }
        ;
        e.addEventListener(`pointerenter`, t),
        e.addEventListener(`pointerleave`, t)
    }
    )
}
function k({reduceMotion: e, introGate: n=Promise.resolve()}) {
    let i = document.querySelector(`.hero`);
    if (!i)
        return;
    let l = i.querySelector(`.swiper`);
    if (!l) {
        let r = i.querySelectorAll(`[data-hero-el]`);
        !e && r.length && (t.set(r, {
            opacity: 0
        }),
        n.then( () => {
            t.fromTo(r, {
                opacity: 0,
                y: 28
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: `expo.out`,
                stagger: .08,
                delay: .15
            })
        }
        ));
        let a = i.querySelector(`.hero__video`);
        if (a) {
            let e = () => {
                [`captions`, `cc`].forEach(e => {
                    a.contentWindow?.postMessage(JSON.stringify({
                        event: `command`,
                        func: `unloadModule`,
                        args: [e]
                    }), `*`)
                }
                )
            }
            ;
            a.addEventListener(`load`, () => setTimeout(e, 700)),
            [1500, 3500].forEach(t => setTimeout(e, t))
        }
        return
    }
    let u = i.querySelector(`.hero__progress i`)
      , d = i.querySelector(`[data-hero-current]`)
      , f = i.querySelectorAll(`.swiper-slide`).length
      , p = n => {
        e || !n || t.fromTo(n.querySelectorAll(`[data-hero-el]`), {
            opacity: 0,
            y: 28
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: `expo.out`,
            stagger: .08,
            delay: .15
        })
    }
      , m = n => {
        if (e || !n)
            return;
        let r = n.querySelector(`.hero__media img`);
        r && (t.killTweensOf(r),
        t.fromTo(r, {
            scale: 1.12
        }, {
            scale: 1,
            duration: 8,
            ease: `none`
        }))
    }
      , h = new o(l,{
        modules: [s, a, c, r],
        effect: `fade`,
        fadeEffect: {
            crossFade: !0
        },
        speed: 1200,
        loop: f > 1,
        keyboard: {
            enabled: !0
        },
        autoplay: f > 1 && !e && {
            delay: 6500,
            disableOnInteraction: !1,
            pauseOnMouseEnter: !0
        },
        on: {
            init(r) {
                let i = r.slides[r.activeIndex];
                A(r),
                !e && i && t.set(i.querySelectorAll(`[data-hero-el]`), {
                    opacity: 0
                }),
                n.then( () => {
                    p(i),
                    m(i)
                }
                )
            },
            slideChangeTransitionStart(e) {
                A(e),
                p(e.slides[e.activeIndex]),
                m(e.slides[e.activeIndex]),
                d && (d.textContent = String(e.realIndex + 1).padStart(2, `0`))
            },
            autoplayTimeLeft(e, t, n) {
                u && (u.style.transform = `scaleX(${1 - n})`)
            }
        }
    });
    i.querySelector(`[data-hero-prev]`)?.addEventListener(`click`, () => h.slidePrev()),
    i.querySelector(`[data-hero-next]`)?.addEventListener(`click`, () => h.slideNext())
}
function A(e) {
    e.slides.forEach( (t, n) => t.toggleAttribute(`inert`, n !== e.activeIndex))
}
function j({reduceMotion: e=!1}={}) {
    let t = document.querySelector(`.testimonial-swiper`);
    t && new o(t,{
        modules: [s, a, r, i],
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: !0,
        autoplay: !e && {
            delay: 5200,
            disableOnInteraction: !1,
            pauseOnMouseEnter: !0
        },
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        pagination: {
            el: `.testimonial-pagination`,
            clickable: !0
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            }
        }
    })
}
function M() {
    document.querySelectorAll(`[data-project-filter]`).forEach(e => {
        let n = e.closest(`section`) || document
          , r = e.querySelectorAll(`[data-filter]`)
          , i = n.querySelectorAll(`[data-project-card]`);
        r.forEach(e => e.setAttribute(`aria-pressed`, String(e.classList.contains(`is-active`))));
        let a = decodeURIComponent((location.hash.match(/#filtre=(.+)/) || [])[1] || ``);
        r.forEach(e => {
            e.addEventListener(`click`, () => {
                let n = e.dataset.filter;
                r.forEach(t => {
                    t.classList.toggle(`is-active`, t === e),
                    t.setAttribute(`aria-pressed`, String(t === e))
                }
                ),
                n === `*` ? history.replaceState(null, ``, location.pathname + location.search) : history.replaceState(null, ``, `#filtre=` + encodeURIComponent(n)),
                i.forEach(e => {
                    let r = n === `*` || e.dataset.cat === n || e.dataset.city === n;
                    r && e.hidden ? (e.hidden = !1,
                    t.fromTo(e, {
                        opacity: 0,
                        scale: .96
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: .45,
                        ease: `power2.out`
                    })) : r || (e.hidden = !0)
                }
                )
            }
            )
        }
        ),
        a && [...r].find(e => e.dataset.filter === a)?.click()
    }
    )
}
function N({lenis: e}) {
    let t = document.querySelectorAll(`[data-video]`);
    if (!t.length)
        return;
    let n = null
      , r = null
      , i = () => {
        n?.remove(),
        n = null,
        document.body.style.overflow = ``,
        e?.start(),
        r?.focus()
    }
      , a = t => {
        let r = P(t);
        if (!r) {
            window.open(t, `_blank`, `noopener`);
            return
        }
        n = document.createElement(`div`),
        n.className = `video-overlay`,
        n.setAttribute(`role`, `dialog`),
        n.setAttribute(`aria-modal`, `true`),
        n.innerHTML = `
            <div class="video-overlay__box">
                <button type="button" class="video-overlay__close" aria-label="${window.uiLabels?.close ?? `Close`}">&times;</button>
                <iframe src="https://www.youtube-nocookie.com/embed/${r}?autoplay=1&rel=0"
                    title="Video" allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen></iframe>
            </div>`,
        n.addEventListener(`click`, e => {
            (e.target === n || e.target.closest(`.video-overlay__close`)) && i()
        }
        ),
        document.body.appendChild(n),
        document.body.style.overflow = `hidden`,
        e?.stop(),
        n.querySelector(`.video-overlay__close`).focus()
    }
    ;
    document.addEventListener(`keydown`, e => {
        e.key === `Escape` && i()
    }
    ),
    t.forEach(e => e.addEventListener(`click`, t => {
        t.preventDefault(),
        r = e,
        a(e.dataset.video || e.getAttribute(`href`))
    }
    ))
}
function P(e) {
    let t = String(e).match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
    return t ? t[1] : null
}
var F = `tkn_consent`
  , I = 3600 * 24 * 180;
function L() {
    let e = document.cookie.split(`; `).find(e => e.startsWith(`${F}=`));
    return e ? e.split(`=`)[1] : null
}
function R(e) {
    let t = window.location.protocol === `https:` ? `; Secure` : ``;
    document.cookie = `${F}=${e}; path=/; max-age=${I}; SameSite=Lax${t}`
}
function z() {
    let e = document.documentElement.dataset.gtm;
    if (!e || window.__tknGtm)
        return;
    window.__tknGtm = !0,
    window.dataLayer = window.dataLayer || [],
    window.dataLayer.push({
        "gtm.start": Date.now(),
        event: `gtm.js`
    });
    let t = document.createElement(`script`);
    t.async = !0,
    t.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(e)}`,
    document.head.appendChild(t)
}
function B() {
    z();
    let e = document.documentElement.dataset.ga4;
    if (!e || window.gtag)
        return;
    let t = document.createElement(`script`);
    t.async = !0,
    t.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(e)}`,
    document.head.appendChild(t),
    window.dataLayer = window.dataLayer || [],
    window.gtag = function() {
        window.dataLayer.push(arguments)
    }
    ,
    window.gtag(`js`, new Date),
    window.gtag(`config`, e, {
        anonymize_ip: !0
    })
}
function V({reduceMotion: e=!1}={}) {
    let t = document.querySelector(`[data-cookie-bar]`)
      , n = t?.hasAttribute(`data-consent-mode`)
      , r = L();
    if (n && r === `1` && B(),
    !t || r !== null)
        return;
    let i = () => {
        if (t.classList.remove(`is-visible`),
        e) {
            t.hidden = !0;
            return
        }
        t.addEventListener(`transitionend`, () => {
            t.hidden = !0
        }
        , {
            once: !0
        })
    }
      , a = () => {
        t.hidden = !1,
        requestAnimationFrame( () => t.classList.add(`is-visible`))
    }
    ;
    e ? a() : window.setTimeout(a, 1200),
    t.querySelector(`[data-cookie-accept]`)?.addEventListener(`click`, () => {
        R(`1`),
        n && B(),
        i()
    }
    ),
    t.querySelector(`[data-cookie-reject]`)?.addEventListener(`click`, () => {
        R(`0`),
        i()
    }
    )
}
function H() {
    let e = document.querySelector(`[data-chat]`);
    if (!e)
        return;
    let t = e.dataset.mode || `guided`
      , n = e.querySelector(`[data-chat-toggle]`)
      , r = e.querySelector(`[data-chat-panel]`)
      , i = e.querySelector(`[data-chat-close]`)
      , a = e.querySelector(`[data-chat-messages]`)
      , o = e.querySelector(`[data-chat-form]`)
      , s = o.querySelector(`input[name="message"]`)
      , c = e.querySelector(`[data-chat-handoff]`)
      , l = document.querySelector(`.sticky-whatsapp`)
      , u = t => {
        r.hidden = !t,
        n.setAttribute(`aria-expanded`, String(t)),
        e.classList.toggle(`is-open`, t),
        l && (l.style.display = t ? `none` : ``),
        t && s.focus()
    }
    ;
    n.addEventListener(`click`, () => u(r.hidden)),
    i.addEventListener(`click`, () => u(!1));
    let d = (e, t) => {
        let n = document.createElement(`div`);
        return n.className = `chat-msg chat-msg--${t}`,
        n.textContent = e,
        a.appendChild(n),
        a.scrollTop = a.scrollHeight,
        n
    }
      , f = e => new Promise(t => {
        let n = d(`…`, `bot`);
        n.classList.add(`chat-msg--typing`),
        setTimeout( () => {
            n.classList.remove(`chat-msg--typing`),
            n.textContent = e,
            a.scrollTop = a.scrollHeight,
            t(n)
        }
        , 450 + Math.min(e.length * 8, 700))
    }
    );
    t === `ai` ? m() : p();
    function p() {
        let t = JSON.parse(e.dataset.flow || `{}`)
          , i = e.dataset.number
          , l = {}
          , u = 0
          , p = null
          , m = /\b(merhabalar|merhaba|selamlar|selam|mrb|slm|g(ü|u)nayd(ı|i)n|iyi\s+(g(ü|u)nler|ak(ş|s)amlar|geceler)|nas(ı|i)ls(ı|i)n(ı|i)z|nas(ı|i)ls(ı|i)n|naber|hello|hi|hey|good\s+(morning|afternoon|evening)|how\s+are\s+you|hallo|servus|guten\s+(tag|morgen|abend)|wie\s+geht('s|s)?)\b|مرحبا|أهلا|اهلا|السلام\s*عليكم|صباح\s*الخير|مساء\s*الخير|كيف\s*حالك/giu
          , h = /\b(te(ş|s)ekk(ü|u)rler|te(ş|s)ekk(ü|u)r\s*ederim|te(ş|s)ekk(ü|u)r|sa(ğ|g)\s*olun|sa(ğ|g)\s*ol|thanks|thank\s+you|thx|danke(\s+sch(ö|o)n)?)\b|شكرا|شكرًا/giu
          , g = (e, t) => e.replace(t, ` `).replace(/[\s.,!?;:…()-]+/gu, ` `).trim()
          , _ = e => e.toLocaleLowerCase(`tr`).normalize(`NFD`).replace(/[̀-ͯ]/g, ``).replace(`ı`, `i`)
          , v = (e, t, n={}) => {
            let r = _(e);
            for (let e of t)
                if (_(e).split(/[\s/]+/).filter(e => e.length >= 3 && ![`sistemleri`, `systems`, `systeme`].includes(e)).some(e => r.includes(e)))
                    return e;
            for (let[t,r] of Object.entries(n))
                if (new RegExp(t,`iu`).test(e))
                    return r;
            return null
        }
          , y = () => {
            p?.remove(),
            p = null
        }
          , b = (e, t) => {
            y(),
            p = document.createElement(`div`),
            p.className = `chat-chips`,
            e.forEach(e => {
                let n = document.createElement(`button`);
                n.type = `button`,
                n.className = `chat-chip`,
                n.textContent = e,
                n.addEventListener(`click`, () => t(e)),
                p.appendChild(n)
            }
            ),
            a.appendChild(p),
            a.scrollTop = a.scrollHeight
        }
          , x = () => {
            let e = [t.summary_intro];
            return [[`product`, t.label_product], [`purpose`, t.label_purpose], [`city`, t.label_city], [`name`, t.label_name]].forEach( ([t,n]) => {
                l[t] && e.push(`${n}: ${l[t]}`)
            }
            ),
            e.join(`
`)
        }
          , S = async () => {
            s.disabled = !0;
            let e = l.name ? t.done.replace(`:name`, l.name) : t.done_anon;
            await f(e),
            c.href = `https://wa.me/${i}?text=${encodeURIComponent(x())}`,
            c.hidden = !1,
            b([t.restart], C)
        }
          , C = async () => {
            y(),
            l = {},
            u = 0,
            s.disabled = !1,
            c.hidden = !0,
            c.href = `#`,
            s.focus(),
            w[0].ask()
        }
          , w = [{
            ask: () => f(t.ask_product).then( () => b(t.products, T)),
            key: `product`
        }, {
            ask: () => f(t.ask_purpose).then( () => b(t.purposes, T)),
            key: `purpose`
        }, {
            ask: () => f(t.ask_city).then( () => b([t.skip], T)),
            key: `city`
        }, {
            ask: () => f(t.ask_name).then( () => b([t.skip], T)),
            key: `name`
        }];
        function T(e) {
            y(),
            e !== t.skip && (d(e, `user`),
            l[w[u].key] = e),
            u += 1,
            u < w.length ? w[u].ask() : S()
        }
        function E(e) {
            let n = g(e, m)
              , r = m.test(e) && n.length < 3;
            if (m.lastIndex = 0,
            r) {
                d(e, `user`),
                y(),
                f(t.greet_reply).then( () => w[u].ask());
                return
            }
            let i = g(e, h)
              , a = h.test(e) && i.length < 3;
            if (h.lastIndex = 0,
            a) {
                d(e, `user`),
                y(),
                f(t.thanks_reply).then( () => w[u].ask());
                return
            }
            let o = n.length >= 3 ? n : e
              , s = w[u].key;
            if (s === `product`) {
                let n = v(o, t.products);
                if (n) {
                    if (d(e, `user`),
                    l.product = n,
                    /fiyat|teklif|price|quote|angebot|preis|سعر|عرض/iu.test(e)) {
                        l.purpose = t.purposes[0],
                        y(),
                        u = 2,
                        w[2].ask();
                        return
                    }
                    y(),
                    u = 1,
                    w[1].ask();
                    return
                }
            }
            if (s === `purpose`) {
                let n = v(o, t.purposes, {
                    "fiyat|price|preis|سعر": t.purposes[0]
                });
                if (n) {
                    d(e, `user`),
                    l.purpose = n,
                    y(),
                    u = 2,
                    w[2].ask();
                    return
                }
            }
            T(o === e ? e : o)
        }
        o.addEventListener(`submit`, e => {
            e.preventDefault();
            let t = s.value.trim();
            !t || s.disabled || (s.value = ``,
            E(t))
        }
        );
        let D = !1;
        n.addEventListener(`click`, () => {
            !D && !r.hidden && (D = !0,
            w[0].ask())
        }
        )
    }
    function m() {
        let t = e.dataset.endpoint
          , n = o.querySelector(`input[name="_token"]`).value
          , r = !1;
        o.addEventListener(`submit`, async i => {
            i.preventDefault();
            let a = s.value.trim();
            if (!a || r)
                return;
            r = !0,
            s.value = ``,
            d(a, `user`);
            let o = d(`…`, `bot`);
            o.classList.add(`chat-msg--typing`);
            try {
                let e = await fetch(t, {
                    method: `POST`,
                    headers: {
                        "Content-Type": `application/json`,
                        "X-CSRF-TOKEN": n,
                        Accept: `application/json`
                    },
                    body: JSON.stringify({
                        message: a
                    })
                });
                if (!e.ok)
                    throw Error(String(e.status));
                let r = await e.json();
                o.classList.remove(`chat-msg--typing`),
                o.textContent = r.reply,
                r.handoff && r.whatsapp && (c.href = r.whatsapp,
                c.hidden = !1)
            } catch {
                o.classList.remove(`chat-msg--typing`),
                o.textContent = e.dataset.errorText || `…`,
                c.getAttribute(`href`) === `#` && e.dataset.fallback && (c.href = e.dataset.fallback),
                c.hidden = !1
            } finally {
                r = !1,
                s.focus()
            }
        }
        )
    }
}
function U() {
    let e = document.querySelectorAll(`[data-lightbox]`);
    if (!e.length)
        return;
    let t = window.uiLabels ?? {
        close: `Close`,
        prev: `Previous`,
        next: `Next`
    }
      , n = document.createElement(`div`);
    n.className = `lightbox`,
    n.setAttribute(`role`, `dialog`),
    n.setAttribute(`aria-modal`, `true`),
    n.hidden = !0,
    n.innerHTML = `
        <button type="button" class="lightbox__close" aria-label="${t.close}">&times;</button>
        <button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="${t.prev}">&#8249;</button>
        <img class="lightbox__img" alt="">
        <button type="button" class="lightbox__nav lightbox__nav--next" aria-label="${t.next}">&#8250;</button>
        <span class="lightbox__count" aria-live="polite"></span>`,
    document.body.appendChild(n);
    let r = n.querySelector(`.lightbox__img`)
      , i = n.querySelector(`.lightbox__count`)
      , a = n.querySelector(`.lightbox__close`)
      , o = []
      , s = 0
      , c = null
      , l = () => {
        let e = o[s];
        r.src = e.src,
        r.alt = e.alt,
        i.textContent = o.length > 1 ? `${s + 1} / ${o.length}` : ``
    }
      , u = (e, t, r) => {
        o = e,
        s = t,
        c = r ?? null,
        l(),
        n.hidden = !1,
        document.documentElement.style.overflow = `hidden`,
        requestAnimationFrame( () => {
            n.classList.add(`is-open`),
            a.focus()
        }
        )
    }
      , d = () => {
        n.classList.remove(`is-open`),
        document.documentElement.style.overflow = ``,
        setTimeout( () => {
            n.hidden = !0,
            r.src = ``
        }
        , 250),
        c?.focus()
    }
      , f = e => {
        s = (s + e + o.length) % o.length,
        l()
    }
    ;
    a.addEventListener(`click`, d),
    n.querySelector(`.lightbox__nav--prev`).addEventListener(`click`, () => f(-1)),
    n.querySelector(`.lightbox__nav--next`).addEventListener(`click`, () => f(1)),
    n.addEventListener(`click`, e => {
        e.target === n && d()
    }
    ),
    document.addEventListener(`keydown`, e => {
        if (n.hidden)
            return;
        let t = document.documentElement.dir === `rtl`;
        if (e.key === `Escape` && d(),
        e.key === `ArrowRight` && f(t ? -1 : 1),
        e.key === `ArrowLeft` && f(t ? 1 : -1),
        e.key === `Tab`) {
            let t = [...n.querySelectorAll(`button`)]
              , r = t[0]
              , i = t[t.length - 1];
            e.shiftKey && document.activeElement === r ? (e.preventDefault(),
            i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(),
            r.focus())
        }
    }
    ),
    e.forEach(e => {
        let t = [...e.querySelectorAll(`img`)]
          , n = t.map(e => ({
            src: e.currentSrc || e.src,
            alt: e.alt || ``
        }));
        t.forEach( (e, t) => {
            e.closest(`div, figure`)?.classList.add(`lightbox-item`),
            e.setAttribute(`role`, `button`),
            e.setAttribute(`tabindex`, `0`),
            e.addEventListener(`click`, () => u(n, t, e)),
            e.addEventListener(`keydown`, r => {
                (r.key === `Enter` || r.key === ` `) && (r.preventDefault(),
                u(n, t, e))
            }
            )
        }
        )
    }
    )
}
var W = `tkn_lead_tracked`;
function G(e, t={}) {
    typeof window.gtag == `function` && window.gtag(`event`, e, t)
}
function K(e) {
    try {
        return window.sessionStorage.getItem(e) ? !0 : (window.sessionStorage.setItem(e, `1`),
        !1)
    } catch {
        return !1
    }
}
function q() {
    document.addEventListener(`click`, e => {
        let t = e.target instanceof Element ? e.target.closest(`a[href]`) : null;
        if (!t)
            return;
        let n = t.getAttribute(`href`) || ``;
        if (n.includes(`wa.me`) || n.includes(`api.whatsapp.com`)) {
            G(`whatsapp_click`, {
                link_location: window.location.pathname
            });
            return
        }
        if (n.startsWith(`tel:`)) {
            G(`phone_click`, {
                link_location: window.location.pathname
            });
            return
        }
        (n.includes(`/storage/`) && /\.pdf$/i.test(n.split(`?`)[0]) || t.hasAttribute(`download`)) && G(`catalog_download`, {
            file_name: decodeURIComponent(n.split(`?`)[0].split(`/`).pop() || n)
        })
    }
    ),
    document.querySelector(`[data-lead-success]`) && !K(W) && G(`generate_lead`, {
        link_location: window.location.pathname
    })
}
var ee = `modulepreload`
  , te = function(e) {
    return `./` + e
}
  , J = {}
  , Y = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        function s(e) {
            return import.meta.resolve ? import.meta.resolve(e) : new URL(e,import.meta.url).href
        }
        r = o(t.map(t => {
            if (t = te(t, n),
            t = s(t),
            t in J)
                return;
            J[t] = !0;
            let r = t.endsWith(`.css`);
            for (let n = e.length - 1; n >= 0; n--) {
                let i = e[n];
                if (i.href === t && (!r || i.rel === `stylesheet`))
                    return
            }
            let i = document.createElement(`link`);
            if (i.rel = r ? `stylesheet` : ee,
            r || (i.as = `script`),
            i.crossOrigin = ``,
            i.href = t,
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
                return new Promise( (e, n) => {
                    i.addEventListener(`load`, e),
                    i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}
  , X = [`none`, `zip`, `giy`, `giyc`, `slide`, `door`]
  , ne = `system.mount.width.depth.height.angle.open.colour.colourName.panelSep.panelColour.panelColourName.fabricColour.fabricName.sideOpen.clean.giyDir.ledMode.ledColour.ledDim.night.rain.furniture.tech.sun.sunHour.sunMonth.north.city.env.rise.wedge.valance`.split(`.`);
function re() {
    let e = document.querySelectorAll(`[data-studio3d]`);
    if (!e.length)
        return;
    let t = e => {
        e.__studioBooting || (e.__studioBooting = !0,
        Y(async () => {
            let {mount: e} = await import(`./studio3d-engine-DMY0YNDV.js`);
            return {
                mount: e
            }
        }
        , __vite__mapDeps([0, 1])).then( ({mount: t}) => {
            let n = t(e);
            e.dataset.studio3d === `hero` ? ie(e, n) : oe(e, n)
        }
        ).catch(t => {
            e.classList.add(`is-failed`),
            console.error(`[studio3d]`, t)
        }
        ))
    }
      , n = Array.from(e).filter(e => [`hero`, `studio`].includes(e.dataset.studio3d));
    if (n.forEach(t),
    !(`IntersectionObserver` in window)) {
        e.forEach(t);
        return
    }
    let r = new IntersectionObserver(e => {
        e.forEach(e => {
            e.isIntersecting && (t(e.target),
            r.unobserve(e.target))
        }
        )
    }
    ,{
        rootMargin: `400px 0px`
    });
    e.forEach(e => {
        n.includes(e) || r.observe(e)
    }
    )
}
function ie(e, t) {
    let n = e.closest(`.hero3d`) || e
      , r = !1
      , i = () => {
        r = !1;
        let e = n.getBoundingClientRect()
          , i = Math.max(1, e.height - window.innerHeight)
          , a = Math.min(1, Math.max(0, -e.top / i));
        t.setScroll(a),
        n.style.setProperty(`--p`, a.toFixed(3))
    }
      , a = () => {
        r || (r = !0,
        requestAnimationFrame(i))
    }
    ;
    window.addEventListener(`scroll`, a, {
        passive: !0
    }),
    window.addEventListener(`resize`, a),
    i()
}
function Z(e) {
    let t = {};
    return ne.forEach(n => {
        t[n] = e[n]
    }
    ),
    t.sides = JSON.parse(JSON.stringify(e.sides)),
    t.led = {
        ...e.led
    },
    t
}
function Q(e) {
    let t = JSON.stringify(Z(e));
    return btoa(unescape(encodeURIComponent(t))).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``)
}
function ae(e) {
    try {
        let t = e.replace(/-/g, `+`).replace(/_/g, `/`);
        return JSON.parse(decodeURIComponent(escape(atob(t + `=`.repeat((4 - t.length % 4) % 4)))))
    } catch {
        return null
    }
}
function oe(e, t) {
    let n = e.querySelector(`[data-studio-form]`)
      , r = t.state
      , i = {}
      , a = {};
    try {
        i = JSON.parse(e.dataset.config || `{}`),
        a = i.labels || {}
    } catch {
        i = {},
        a = {}
    }
    let o = (a.months || `Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara`).split(`,`);
    if (e.querySelectorAll(`[data-view]`).forEach(n => {
        n.addEventListener(`click`, () => {
            t.goView(n.dataset.view),
            e.querySelectorAll(`[data-view]`).forEach(e => e.classList.toggle(`is-active`, e.dataset.view === n.dataset.view))
        }
        )
    }
    ),
    !n)
        return;
    let s = e => n.querySelector(e)
      , c = e => Array.from(n.querySelectorAll(e))
      , l = (e, t) => {
        let n = parseFloat(e);
        return Number.isFinite(n) ? n : t
    }
      , u = (e, t) => {
        let n = s(`input[name="${e}"]`);
        n && (n.value = t)
    }
      , d = (e, t) => {
        let n = s(`input[name="${e}"]`);
        n && (n.checked = !!t)
    }
      , f = (e, t) => {
        let n = s(`input[name="${e}"][value="${t}"]`);
        n && (n.checked = !0)
    }
      , p = (t, n) => {
        e.querySelectorAll(`[data-out="${t}"]`).forEach(e => {
            e.textContent = n
        }
        )
    }
      , m = c(`[role="tab"]`)
      , h = c(`[data-tab-panel]`)
      , g = s(`[data-tab-prev]`)
      , _ = s(`[data-tab-next]`)
      , v = s(`.panel__body`)
      , y = 0
      , b = e => {
        y = Math.max(0, Math.min(m.length - 1, e)),
        m.forEach( (e, t) => {
            e.classList.toggle(`is-active`, t === y),
            e.setAttribute(`aria-selected`, t === y ? `true` : `false`),
            t < y && e.classList.add(`is-done`)
        }
        ),
        h.forEach( (e, t) => e.classList.toggle(`is-active`, t === y)),
        g && (g.disabled = y === 0),
        _ && (_.disabled = y === m.length - 1),
        v?.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }
    ;
    m.forEach( (e, t) => e.addEventListener(`click`, () => b(t))),
    g?.addEventListener(`click`, () => b(y - 1)),
    _?.addEventListener(`click`, () => b(y + 1)),
    b(0),
    c(`input[name="system"]`).forEach(e => e.addEventListener(`change`, () => {
        e.checked && (t.setSystem(e.value),
        V())
    }
    )),
    c(`input[name="mount"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setMount(e.value)));
    let x = (e, n, i=!0) => {
        let a = s(`input[type="range"][name="${e}"]`)
          , o = s(`input[data-num="${e}"]`);
        if (!a)
            return;
        let c = l(a.min, 0)
          , u = l(a.max, 99999)
          , d = Math.min(u, Math.max(c, Math.round(n / 10) * 10));
        a.value = d,
        o && (o.value = d),
        i ? t.setDim(e, d / 1e3) : r[e] = d / 1e3
    }
    ;
    [`width`, `depth`, `height`].forEach(e => {
        let t = s(`input[type="range"][name="${e}"]`)
          , n = s(`input[data-num="${e}"]`);
        t?.addEventListener(`input`, () => x(e, l(t.value, 0))),
        n?.addEventListener(`change`, () => x(e, l(n.value, l(t?.value, 0))))
    }
    ),
    c(`[data-preset]`).forEach(e => e.addEventListener(`click`, () => {
        let[n,r] = e.dataset.preset.split(`x`).map(Number);
        x(`width`, n, !1),
        x(`depth`, r, !1),
        t.build(),
        c(`[data-preset]`).forEach(t => t.classList.toggle(`is-active`, t === e))
    }
    )),
    s(`input[name="angle"]`)?.addEventListener(`input`, e => t.setAngle(l(e.target.value, 0), !0)),
    s(`input[name="open"]`)?.addEventListener(`input`, e => t.setOpen(l(e.target.value, 0) / 100, !0)),
    s(`input[name="side_open"]`)?.addEventListener(`input`, e => t.setSideOpen(l(e.target.value, 0) / 100, !0)),
    c(`[data-roof]`).forEach(e => e.addEventListener(`click`, () => {
        let n = e.dataset.roof === `open`;
        [`rolling`, `pergola`, `awning`, `winawn`].includes(r.system) ? (t.setOpen(+!!n),
        u(`open`, n ? 100 : 0)) : (t.setAngle(n ? 105 : 0),
        u(`angle`, n ? 105 : 0))
    }
    )),
    c(`input[name="colour"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setColour(e.dataset.hex, e.value))),
    s(`input[name="panel_sep"]`)?.addEventListener(`change`, e => {
        t.setPanelSep(e.target.checked),
        V()
    }
    ),
    c(`input[name="panel_colour"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setPanelColour(e.dataset.hex, e.value))),
    c(`input[name="fabric"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setFabric(e.dataset.hex, e.value)));
    let S = {};
    [`front`, `back`, `left`, `right`].forEach(e => {
        S[e] = n.querySelector(`[data-plan-edge="${e}"]`)
    }
    );
    let C = ``;
    function w(e=!1) {
        let n = t.meta.modules || 1
          , i = n + JSON.stringify(r.sides) + r.mount;
        !e && i === C || (C = i,
        [`front`, `back`, `left`, `right`].forEach(e => {
            let i = S[e];
            if (!i)
                return;
            let o = e === `front` || e === `back` ? n : 1
              , s = t.sideKinds(e, o);
            i.innerHTML = ``,
            i.dataset.segs = o;
            let c = e === `back` && r.mount !== `free`;
            s.forEach( (n, r) => {
                let s = document.createElement(`button`);
                s.type = `button`,
                s.className = `plan__seg`,
                s.dataset.kind = c ? `wall` : n,
                s.disabled = c,
                s.innerHTML = `<b>${a[`side_` + e] || e}${o > 1 ? ` ` + (r + 1) : ``}</b><small>${c ? a.mount_wall || `Duvar` : a[`kind_` + n] || n}</small>`,
                s.title = a.plan_title || ``,
                s.addEventListener(`click`, () => {
                    let i = X[(X.indexOf(n) + 1) % X.length];
                    t.setSideSeg(e, r, i, o),
                    w(),
                    V()
                }
                ),
                i.appendChild(s)
            }
            )
        }
        ))
    }
    c(`[data-sides-all]`).forEach(e => e.addEventListener(`click`, () => {
        let n = e.dataset.sidesAll;
        [`front`, `back`, `left`, `right`].forEach(e => {
            r.sides[e] = n
        }
        ),
        t.build(),
        w(),
        V()
    }
    )),
    c(`input[name="giy_dir"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setGiyDir(e.value))),
    s(`input[name="clean"]`)?.addEventListener(`change`, e => t.setClean(e.target.checked)),
    s(`input[name="led_master"]`)?.addEventListener(`change`, e => t.setLedMaster(e.target.checked)),
    [`perimeter`, `panels`, `posts`, `giy`].forEach(e => s(`input[name="led_${e}"]`)?.addEventListener(`change`, n => t.setLedZone(e, n.target.checked))),
    c(`input[name="led_mode"]`).forEach(e => e.addEventListener(`change`, () => e.checked && t.setLedMode(e.value))),
    s(`input[name="led_custom"]`)?.addEventListener(`input`, e => {
        t.setLedColour(e.target.value),
        f(`led_mode`, `custom`)
    }
    ),
    s(`input[name="led_dim"]`)?.addEventListener(`input`, e => t.setLedDim(l(e.target.value, 100) / 100));
    let T = {
        dinner: {
            master: !0,
            mode: `warm`,
            dim: .6,
            night: !0
        },
        party: {
            master: !0,
            mode: `rgb`,
            dim: 1,
            night: !0,
            posts: !0
        },
        day: {
            master: !0,
            mode: `white`,
            dim: 1,
            night: !1
        },
        off: {
            master: !1,
            night: !0
        }
    };
    c(`[data-light-preset]`).forEach(e => e.addEventListener(`click`, () => {
        let n = T[e.dataset.lightPreset];
        n && (n.mode && t.setLedMode(n.mode),
        n.dim !== void 0 && t.setLedDim(n.dim),
        n.posts !== void 0 && t.setLedZone(`posts`, n.posts),
        t.setLedMaster(n.master),
        t.setNight(n.night),
        H(),
        c(`[data-light-preset]`).forEach(t => t.classList.toggle(`is-active`, t === e)))
    }
    )),
    s(`input[name="night"]`)?.addEventListener(`change`, e => {
        t.setNight(e.target.checked),
        d(`sun`, !1),
        V()
    }
    ),
    s(`input[name="rain"]`)?.addEventListener(`change`, e => {
        t.setRain(e.target.checked),
        e.target.checked && (u(`angle`, 0),
        u(`open`, 0))
    }
    ),
    s(`input[name="furniture"]`)?.addEventListener(`change`, e => t.setFurniture(e.target.checked)),
    s(`input[name="env"]`)?.addEventListener(`change`, e => t.setEnv(e.target.checked)),
    s(`input[name="dims"]`)?.addEventListener(`change`, e => t.setDims(e.target.checked)),
    s(`input[name="tech"]`)?.addEventListener(`change`, n => {
        t.setTech(n.target.checked),
        e.classList.toggle(`is-tech`, n.target.checked)
    }
    ),
    s(`input[name="autorotate"]`)?.addEventListener(`change`, e => t.setAutoRotate?.(e.target.checked));
    let E = () => {
        let e = r.sunHour
          , n = Math.floor(e)
          , i = Math.round((e - n) * 60);
        if (p(`sun_hour`, `${String(n).padStart(2, `0`)}:${String(i).padStart(2, `0`)}`),
        p(`sun_month`, o[(r.sunMonth - 1) % 12] || r.sunMonth),
        p(`north`, `${Math.round(r.north)}°`),
        r.sun) {
            let e = t.sunPos();
            p(`sun_el`, e.el > 0 ? `${Math.round(e.el)}° / ${Math.round(e.az)}°` : a.sun_below || `ufkun altında`)
        }
    }
    ;
    s(`input[name="sun"]`)?.addEventListener(`change`, e => {
        t.setSun(e.target.checked),
        d(`night`, r.night),
        V(),
        E()
    }
    ),
    s(`input[name="sun_hour"]`)?.addEventListener(`input`, e => {
        t.setSunParam(`sunHour`, l(e.target.value, 14)),
        E()
    }
    ),
    s(`input[name="sun_month"]`)?.addEventListener(`input`, e => {
        t.setSunParam(`sunMonth`, Math.round(l(e.target.value, 6))),
        E()
    }
    ),
    s(`input[name="north"]`)?.addEventListener(`input`, e => {
        t.setSunParam(`north`, l(e.target.value, 0)),
        E()
    }
    ),
    s(`select[name="city"]`)?.addEventListener(`change`, e => {
        t.setSunParam(`city`, e.target.value),
        E()
    }
    ),
    s(`[data-reset]`)?.addEventListener(`click`, () => {
        window.location.href = window.location.pathname
    }
    );
    let D = e.querySelector(`input[name="project_name"]`)
      , O = s(`[data-share]`)
      , k = i.code || null
      , A = ``
      , j = async (e, t, n) => {
        try {
            await navigator.clipboard.writeText(e),
            n?.classList.add(`is-ok`),
            t && (t.textContent = a.share_copied || `OK`),
            setTimeout( () => {
                n?.classList.remove(`is-ok`),
                t && (t.textContent = a.share || `Share`)
            }
            , 2200)
        } catch {
            if (navigator.share)
                try {
                    await navigator.share({
                        url: e
                    });
                    return
                } catch {}
            try {
                window.prompt(`URL`, e)
            } catch {
                t && (t.textContent = e)
            }
        }
    }
    ;
    async function M() {
        let e = `${window.location.origin}${window.location.pathname}?cfg=${Q(r)}`;
        if (!i.saveUrl)
            return e;
        let t = JSON.stringify(Z(r)) + `|` + (D?.value || ``);
        if (k && t === A)
            return `${i.designBase}/${k}`;
        try {
            let e = await fetch(i.saveUrl, {
                method: `POST`,
                credentials: `same-origin`,
                headers: {
                    "Content-Type": `application/json`,
                    Accept: `application/json`,
                    "X-CSRF-TOKEN": i.csrf || ``
                },
                body: JSON.stringify({
                    payload: Z(r),
                    name: D?.value || null,
                    system: r.system,
                    width: Math.round(r.width * 1e3),
                    depth: Math.round(r.depth * 1e3),
                    height: Math.round(r.height * 1e3)
                })
            });
            if (!e.ok)
                throw Error(String(e.status));
            let n = await e.json();
            if (n.code)
                return k = n.code,
                A = t,
                p(`design_code`, n.code),
                n.url || `${i.designBase}/${n.code}`
        } catch (e) {
            console.warn(`[studio3d] kayıt başarısız, uzun bağlantı kullanılıyor`, e)
        }
        return e
    }
    O?.addEventListener(`click`, async () => {
        O.disabled = !0;
        let e = await M();
        O.disabled = !1,
        j(e, O.querySelector(`[data-share-label]`), O)
    }
    ),
    e.querySelector(`[data-studio-download]`)?.addEventListener(`click`, () => {
        let e = document.createElement(`a`);
        e.href = t.snapshot(),
        e.download = `wlatshade-3d-${r.system}-${Math.round(r.width * 1e3)}x${Math.round(r.depth * 1e3)}.png`,
        e.click()
    }
    );
    let N = e.querySelector(`[data-sheet]`), P = e.querySelector(`[data-sheet-list]`), F = e.querySelector(`[data-print-host]`), I = null, L, R = async () => (I ??= await Y( () => import(`./studio3d-drawing-B9zThJeR.js`), []),
    L === void 0 && (L = i.logo ? await I.toDataUrl(i.logo) : null),
    I);
    async function z() {
        if (!N)
            return;
        let n = await R()
          , i = n.specRows(r, t.meta, a, t);
        P && (P.innerHTML = i.map( ([e,t]) => `<div class="sheet__row"><span>${e}</span><b>${String(t).replace(/</g, `&lt;`)}</b></div>`).join(``));
        let o = n.drawingSVG(r, t.meta, a, t, {
            logo: L,
            project: D?.value || ``,
            code: k || ``,
            date: new Date().toLocaleDateString(`tr-TR`)
        });
        F && (F.innerHTML = o),
        e.querySelectorAll(`[data-sheet-img]`).forEach(e => {
            e.src = t.snapshot()
        }
        )
    }
    e.querySelector(`[data-summary]`)?.addEventListener(`click`, async () => {
        N.hidden = !1,
        e.classList.add(`is-sheet`),
        await z()
    }
    ),
    e.querySelectorAll(`[data-sheet-close]`).forEach(t => t.addEventListener(`click`, () => {
        N.hidden = !0,
        e.classList.remove(`is-sheet`)
    }
    )),
    D?.addEventListener(`change`, () => {
        N?.hidden || z()
    }
    ),
    e.querySelector(`[data-drawing-print]`)?.addEventListener(`click`, () => {
        if (F?.innerHTML) {
            e.classList.add(`is-printing`);
            try {
                window.print()
            } finally {
                setTimeout( () => e.classList.remove(`is-printing`), 1500)
            }
        }
    }
    ),
    e.querySelector(`[data-drawing-pdf]`)?.addEventListener(`click`, async e => {
        let t = e.currentTarget;
        t.disabled = !0;
        try {
            let e = await R();
            await z(),
            await e.downloadPDF(F.innerHTML, `wlatshade-drawing-${r.system}-${Math.round(r.width * 1e3)}x${Math.round(r.depth * 1e3)}.pdf`)
        } catch (e) {
            console.error(`[studio3d] pdf`, e),
            window.alert(a.pdf_error || `PDF üretilemedi; "Yazdır" ile PDF olarak kaydedebilirsiniz.`)
        } finally {
            t.disabled = !1
        }
    }
    ),
    e.querySelector(`[data-drawing-png]`)?.addEventListener(`click`, async () => {
        let e = await R();
        await z(),
        e.downloadPNG(F.innerHTML, `wlatshade-drawing-${r.system}-${Math.round(r.width * 1e3)}x${Math.round(r.depth * 1e3)}.png`)
    }
    ),
    e.querySelector(`[data-sheet-share]`)?.addEventListener(`click`, async e => {
        let t = e.currentTarget;
        t.disabled = !0;
        let n = await M();
        t.disabled = !1,
        j(n, t.querySelector(`span`), t),
        N?.hidden || z()
    }
    );
    let B = e.querySelector(`[data-studio-quote]`);
    if (B) {
        let n = B.getAttribute(`href`)
          , o = () => {
            let e = t.meta.modules || 1
              , o = [`front`, `back`, `left`, `right`].map(n => {
                let r = t.sideKinds(n, n === `front` || n === `back` ? e : 1);
                return r.every(e => e === `none`) ? null : `${a[`side_` + n] || n}: ${[...new Set(r)].length === 1 ? a[`kind_` + r[0]] || r[0] : r.map(e => a[`kind_` + e] || e).join(` / `)}`
            }
            ).filter(Boolean).join(`, `)
              , s = [`perimeter`, `panels`, `posts`, `giy`].filter(e => r.led.master && r.led[e]).map(e => a[`led_` + e] || e).join(`, `)
              , aw = [`awning`, `winawn`].includes(r.system)
              , c = [a.summary_title || `3D Tasarım Stüdyosu seçimi`, D?.value ? `${a.project_name || `Proje`}: ${D.value}` : null, `${a.system || `Sistem`}: ${a[`system_` + r.system] || r.system}`, aw ? null : `${a.mount || `Montaj`}: ${a[`mount_` + r.mount] || r.mount}`, aw ? `${a.size || `Ölçü`}: ${Math.round(r.width * 1e3)}${r.system === `awning` ? ` × ` + Math.round(r.depth * 1e3) : ``} × ${Math.round(r.height * 1e3)} mm` : `${a.size || `Ölçü`}: ${Math.round(r.width * 1e3)} × ${Math.round(r.depth * 1e3)} × ${Math.round(r.height * 1e3)} mm (${e} ${a.modules || `modül`})`, (r.system === `glass` || r.system === `pergola`) && r.rise > .05 ? `${a.back_height || `Back height`}: ${Math.round((r.height + r.rise) * 1e3)} mm${r.wedge !== !1 && o ? ` · ` + (a.wedge || `Wedge glazing`) : ``}` : null, aw ? `${a.valance || `Valance`}: ${a[`valance_` + r.valance] || r.valance}` : null, `${a.colour || `Renk`}: ${r.colourName}`, r.panelSep && r.system !== `glass` && !aw ? `${(r.system === `pergola` ? a.slat_colour : a.panel_colour) || `Panel rengi`}: ${r.panelColourName}` : null, r.system === `pergola` || aw ? `${a.fabric_colour || `Kumaş`}: ${r.fabricName}` : null, o && !aw ? `${a.sides || `Yan kapamalar`}: ${o}` : null, aw ? null : `LED: ${s || a.off || `Yok`}${s ? ` · ${a[`led_mode_` + r.ledMode] || r.ledMode}` : ``}`, `${a.share || `Link`}: ${k ? `${i.designBase}/${k}` : `${window.location.origin}${window.location.pathname}?cfg=${Q(r)}`}`].filter(Boolean).join(`
`)
              , l = new URLSearchParams({
                project_size: `${r.width.toFixed(1)} m × ${r.depth.toFixed(1)} m`,
                message: c
            });
            B.dataset.product && l.set(`product`, B.dataset.product),
            B.href = `${n}?${l.toString()}#basvuru`,
            w()
        }
        ;
        e.addEventListener(`studio:change`, o),
        o()
    }
    function V() {
        let e = r.system;
        n.querySelectorAll(`[data-only]`).forEach(t => {
            t.hidden = !t.dataset.only.split(` `).includes(e)
        }
        );
        let t = Object.values(r.sides).flat()
          , i = t.includes(`giyc`)
          , o = t.some(e => e === `giy` || e === `giyc`)
          , s = t.some(e => e !== `none`);
        n.querySelectorAll(`[data-if-giyc]`).forEach(e => {
            e.hidden = !i
        }
        ),
        n.querySelectorAll(`[data-if-giy]`).forEach(e => {
            e.hidden = !o
        }
        ),
        n.querySelectorAll(`[data-if-sides]`).forEach(e => {
            e.hidden = !s
        }
        ),
        n.querySelectorAll(`[data-if-panelsep]`).forEach(e => {
            e.hidden = !r.panelSep
        }
        ),
        n.querySelectorAll(`[data-if-sun]`).forEach(e => {
            e.hidden = !r.sun
        }
        );
        let c = e === `pergola`;
        n.querySelectorAll(`[data-label-panel]`).forEach(e => {
            e.textContent = (c ? a.slat_colour : a.panel_colour) || e.textContent
        }
        ),
        n.querySelectorAll(`[data-label-panelsep]`).forEach(e => {
            e.textContent = (c ? a.slat_sep : a.panel_sep) || e.textContent
        }
        )
    }
    function H() {
        f(`system`, r.system),
        f(`mount`, r.mount),
        f(`giy_dir`, r.giyDir),
        f(`led_mode`, r.ledMode);
        let t = s(`input[name="colour"][value="${r.colourName}"]`);
        t && (t.checked = !0);
        let n = s(`input[name="panel_colour"][value="${r.panelColourName}"]`);
        n && (n.checked = !0);
        let i = s(`input[name="fabric"][value="${r.fabricName}"]`);
        i && (i.checked = !0),
        d(`panel_sep`, r.panelSep),
        [`width`, `depth`, `height`].forEach(e => x(e, r[e] * 1e3, !1)),
        u(`angle`, r.angle),
        u(`open`, r.open * 100),
        u(`side_open`, r.sideOpen * 100),
        u(`led_dim`, r.ledDim * 100),
        u(`sun_hour`, r.sunHour),
        u(`sun_month`, r.sunMonth),
        u(`north`, r.north);
        let a = s(`select[name="city"]`);
        a && (a.value = r.city);
        let o = s(`input[name="led_custom"]`);
        o && r.ledColour && (o.value = r.ledColour),
        d(`clean`, r.clean),
        d(`led_master`, r.led.master),
        [`perimeter`, `panels`, `posts`, `giy`].forEach(e => d(`led_` + e, r.led[e])),
        d(`night`, r.night),
        d(`rain`, r.rain),
        d(`furniture`, r.furniture),
        d(`tech`, r.tech),
        d(`sun`, r.sun),
        d(`env`, r.env),
        e.classList.toggle(`is-tech`, !!r.tech),
        w(!0),
        V(),
        E()
    }
    let U = null;
    try {
        U = e.dataset.design ? JSON.parse(e.dataset.design) : null
    } catch {
        U = null
    }
    if (!U) {
        let e = new URLSearchParams(window.location.search).get(`cfg`);
        U = e ? ae(e) : null
    }
    U && t.applyConfig && (t.applyConfig(U),
    i.code && (k = i.code,
    A = JSON.stringify(Z(r)) + `|` + (D?.value || ``))),
    i.projectName && D && (D.value = i.projectName),
    H()
}
var $ = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
  , se = window.matchMedia(`(pointer: fine)`).matches;
document.addEventListener(`DOMContentLoaded`, () => {
    let e = $ ? null : p()
      , t = l({
        reduceMotion: $
    });
    u(),
    d(),
    f({
        lenis: e
    }),
    k({
        reduceMotion: $,
        introGate: t
    }),
    j({
        reduceMotion: $
    }),
    M(),
    N({
        lenis: e
    }),
    V({
        reduceMotion: $
    }),
    H(),
    U(),
    q(),
    re(),
    $ || (g(),
    w()),
    !$ && se && (h(),
    D(),
    O())
}
);
