/* WLAT SHADE 3D Studio — controls for the parts the original app does not know about:
 * roof slope (back height), fixed wedge glazing, the awning valance, and the size limits
 * of the two awning systems. It talks to the engine through element.__studio.
 * Loads as a plain script at the end of <body>. */
(function () {
    'use strict';
    var root = document.querySelector('[data-studio3d="studio"]');
    if (!root) return;
    var form = root.querySelector('[data-studio-form]');
    if (!form) return;

    var LIMITS = {
        other: { width: [2000, 12000], depth: [2000, 7600], height: [2200, 4000] },
        awning: { width: [2000, 7000], depth: [1500, 4000], height: [2200, 4000] },
        winawn: { width: [1000, 6000], depth: [2000, 7600], height: [1200, 3000] }
    };
    var MAX_RISE = 2500;
    var AWNINGS = { awning: 1, winawn: 1 };

    function q(sel) { return form.querySelector(sel); }
    function qa(sel) { return Array.prototype.slice.call(form.querySelectorAll(sel)); }

    function whenReady(cb) {
        if (root.__studio) return cb(root.__studio);
        var timer = setInterval(function () {
            if (root.__studio) { clearInterval(timer); cb(root.__studio); }
        }, 120);
    }

    whenReady(function (api) {
        var st = api.state;
        var lastSystem = null;
        var backRange = q('[data-x-range="back"]');
        var backNum = q('[data-x-num="back"]');
        var wedge = q('[data-x-check="wedge"]');
        var valance = qa('input[name="x_valance"]');

        // Slider ranges differ per system; returns true when a size had to be pulled into range.
        function applyLimits(system) {
            var lim = LIMITS[system] || LIMITS.other;
            var changed = false;
            ['width', 'depth', 'height'].forEach(function (key) {
                var range = q('input[type="range"][name="' + key + '"]');
                var num = q('input[data-num="' + key + '"]');
                if (!range) return;
                range.min = lim[key][0];
                range.max = lim[key][1];
                if (num) { num.min = lim[key][0]; num.max = lim[key][1]; }
                var marks = range.parentNode.querySelectorAll('.studio__limits span');
                if (marks.length === 2) { marks[0].textContent = lim[key][0]; marks[1].textContent = lim[key][1]; }
                var now = Math.round(st[key] * 1000);
                var fit = Math.min(lim[key][1], Math.max(lim[key][0], now));
                if (fit !== now) { st[key] = fit / 1000; changed = true; }
                range.value = fit;
                if (num) num.value = fit;
            });
            return changed;
        }

        function sync() {
            var rebuild = false;
            if (st.system !== lastSystem) {
                lastSystem = st.system;
                if (applyLimits(st.system)) rebuild = true;
                // The hung (tie-rod) mounting only exists for the fabric pergola.
                if (st.mount === 'hang' && st.system !== 'pergola') {
                    st.mount = 'wall';
                    var wall = q('input[name="mount"][value="wall"]');
                    if (wall) wall.checked = true;
                    rebuild = true;
                }
                qa('[data-x-notawn]').forEach(function (el) {
                    if (AWNINGS[st.system]) el.setAttribute('data-x-hide', ''); else el.removeAttribute('data-x-hide');
                });
            }
            var front = Math.round(st.height * 1000);
            var rise = Math.round((+st.rise || 0) * 1000);
            if (backRange) {
                backRange.min = front;
                backRange.max = front + MAX_RISE;
                backRange.value = front + rise;
                var marks = backRange.parentNode.querySelectorAll('.studio__limits span');
                if (marks.length === 2) { marks[0].textContent = front; marks[1].textContent = front + MAX_RISE; }
            }
            if (backNum) {
                backNum.min = front;
                backNum.max = front + MAX_RISE;
                if (document.activeElement !== backNum) backNum.value = front + rise;
            }
            if (wedge) wedge.checked = st.wedge !== false;
            valance.forEach(function (r) { r.checked = r.value === (st.valance || 'wave'); });
            if (rebuild) api.build();
        }

        function setBack(mm) {
            var front = Math.round(st.height * 1000);
            var v = Math.min(front + MAX_RISE, Math.max(front, Math.round((+mm || front) / 10) * 10));
            api.setDim('rise', (v - front) / 1000);
        }
        if (backRange) backRange.addEventListener('input', function () { setBack(backRange.value); });
        if (backNum) backNum.addEventListener('change', function () { setBack(backNum.value); });
        if (wedge) wedge.addEventListener('change', function () { api.setDim('wedge', wedge.checked); });
        valance.forEach(function (r) {
            r.addEventListener('change', function () { if (r.checked) api.setDim('valance', r.value); });
        });

        root.addEventListener('studio:change', sync);
        sync();
    });
})();
