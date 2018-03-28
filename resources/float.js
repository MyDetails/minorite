jQuery(document).ready(function (e) {
    function F(e) {
        t.animate({
            scrollTop: e
        }, E)
    }
    var t = e("html,body");
    var n = e("body");
    var r = e(window);
    var i = e(document);
    var s = e("section");
    var v = e(".slide");
    var w = [];
    var E = 1e3;
    var S, x;
    var T = n.scrollTop();
    var N = [];
    var C = 0;
    var k;
    var L = [];
    var A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
        window.setTimeout(e, 1e3 / 10)
    };
    k = {
        stopped: true,
        add: function (e, t) {
            var n = {
                name: t,
                callback: e,
                stopped: false
            };
            L.push(n)
        },
        anim: function () {
            var e = this;
            if (!this.stopped) {
                var t;
                for (var n = 0; n < L.length; n++) {
                    if (!L[n].stopped) {
                        t = L[n].callback;
                        t()
                    }
                }
                A(function () {
                    e.anim()
                })
            }
        },
        start: function (e) {
            if (typeof e === "undefined") {
                if (this.stopped !== false) {
                    this.stopped = false;
                    this.anim()
                }
            } else {
                for (var t = 0; t < L.length; t++) {
                    if (L[t].name === e) {
                        L[t].stopped = false
                    }
                }
            }
        },
        stop: function (e) {
            if (typeof e === "undefined") {
                this.stopped = true
            } else {
                for (var t = 0; t < L.length; t++) {
                    if (L[t].name === e) {
                        L[t].stopped = true
                    }
                }
            }
        }
    };
    r.on("scroll", function () {
        topD = i.scrollTop();
        S = r.height();
        T = i.scrollTop();
        if (k.stopped) {
            k.start()
        }
    });

    var H = function () {
        var e = r.height();
        v.height(e);
        for (var t = 0; t < N.length; t++) {
            N[t].thisTop = N[t].e.parent().offset().top
        }
    };
    H();
    r.on("resize", H);
    var B = function () {
        if (C === T) {
            k.stop()
        }
        if (Math.abs(T - C) < .2)
            ; if (C < 0)
            C = 0;
        C += (T - C) * .1;
        for (var e = 0; e < N.length; e++) {
            var t = N[e];
            // var n = 0;
            var r = t.e;
            var i = t.thisTop;
            var s = t.s;
            var o = S * s;
            var u = (i - (S + C)) * s + o;
            r.css({
                transform: "translate3d(0," + u + "px,0)",
                "-webkit-transform": "translate3d(0," + u + "px,0)",
                "-moz-transform": "translate3d(0," + u + "px,0)",
                "-o-transform": "translate3d(0," + u + "px,0)",
                "-ms-transform": "translate3d(0," + u + "px,0)"
            })
        }
    };
    var j = function () {
        e(".parallax-item").each(function () {
            var t = e(this);
            var n = t.data("speed");
            var r = [0, 99999999];
            var i = {
                timing: r,
                e: t,
                s: n,
                t: 0,
                thisTop: t.parent().offset().top
            };
            N.push(i)
        });
        k.add(function () {
            B()
        }, "parallax-item");
        k.start()
    };
    j();
    for (var I = 0; I < s.length; I++) {
        var q = s.eq(I).offset().top;
        w.push(q)
    }
})