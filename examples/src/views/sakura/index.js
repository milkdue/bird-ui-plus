/*
 * @Author: 可以清心
 * @Description: Sakura
 * @Date: 2024-01-25 20:09:00
 * @LastEditTime: 2024-01-31 18:09:00
 */
import img from "./img.json";
const frequency = 50;
let stoper, staticx, IMG;

class Sakura {
    constructor(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
    }

    draw(cxt) {
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.rotate(this.r);
        cxt.drawImage(IMG, 0, 0, 40 * this.s, 40 * this.s);
        cxt.restore();
    }

    update() {
        this.x = this.fn.x(this.x, this.y);
        this.y = this.fn.y(this.y, this.y);
        this.r = this.fn.r(this.r);

        if (
            this.x > window.innerWidth ||
            this.x < 0 ||
            this.y > window.innerHeight - 60 ||
            this.y < 0
        ) {
            this.r = getRandom("fnr");

            if (Math.random() > 0.4) {
                this.x = getRandom("x");
                this.y = 0;
                this.s = getRandom("s");
                this.r = getRandom("r");
            } else {
                this.x = window.innerWidth;
                this.y = getRandom("y");
                this.s = getRandom("s");
                this.r = getRandom("r");
            }
        }
    }
}

class SakuraList {
    constructor() {
        this.list = [];
    }

    push(sakura) {
        this.list.push(sakura);
    }

    update() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].update();
        }
    }

    draw(cxt) {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].draw(cxt);
        }
    }

    get(index) {
        return this.list[index];
    }

    size() {
        return this.list.length;
    }
}

function getRandom(option) {
    let ret, random;

    switch (option) {
        case "x":
            ret = Math.random() * window.innerWidth;
            break;
        case "y":
            ret = Math.random() * (window.innerHeight - 60);
            break;
        case "s":
            ret = Math.random();
            break;
        case "r":
            ret = Math.random() * 6;
            break;
        case "fnx":
            random = -0.5 + Math.random();
            ret = function(x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case "fny":
            random = 1.5 + Math.random() * 0.7;
            ret = function(x, y) {
                return y + random;
            };
            break;
        case "fnr":
            random = Math.random() * 0.03;
            ret = function(r) {
                return r + random;
            };
            break;
        default:
            break;
    }

    return ret;
}

function startSakura(el) {
    let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;

    let canvas = document.createElement("canvas");
    let cxt;
    staticx = true;

    canvas.height = window.innerHeight - 60;
    canvas.width = window.innerWidth;

    canvas.setAttribute(
        "style",
        "position: fixed; left: 0; top: 0; pointer-events: none;"
    );
    canvas.setAttribute("id", "canvas-sakura");

    el.appendChild(canvas);

    cxt = canvas.getContext("2d");

    let sakuraList = new SakuraList();

    for (let i = 0; i < frequency; i++) {
        let sakura,
            randomX,
            randomY,
            randomS,
            randomR,
            randomFnx,
            randomFny,
            randomFnr;

        randomX = getRandom("x");
        randomY = getRandom("y");
        randomR = getRandom("r");
        randomS = getRandom("s");
        randomFnx = getRandom("fnx");
        randomFny = getRandom("fny");
        randomFnr = getRandom("fnr");

        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnr
        });

        sakura.draw(cxt);
        sakuraList.push(sakura);
    }

    function animation() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stoper = requestAnimationFrame(animation);
    }

    stoper = requestAnimationFrame(animation);
}

function start(el) {
    IMG = new Image();
    IMG.src = img.src;

    IMG.onload = function() {
        startSakura(el);
    };
}

function stop() {
    if (staticx) {
        let child = document.getElementById("canvas-sakura");
        child && child.parentNode && child.parentNode.removeChild(child);

        window.cancelAnimationFrame(stoper);
        staticx = false;
    }
}

function resize() {
    let child = document.getElementById("canvas-sakura");

    if (child) {
        child.width = window.innerWidth;
        child.height = window.innerHeight - 60;
    }
}

export { start, stop, resize };
