var F = Object.defineProperty;
var B = (s) => {
  throw TypeError(s);
};
var N = (s, e, t) =>
  e in s
    ? F(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var m = (s, e, t) => N(s, typeof e != "symbol" ? e + "" : e, t),
  g = (s, e, t) => e.has(s) || B("Cannot " + t);
var b = (s, e, t) => (
    g(s, e, "read from private field"), t ? t.call(s) : e.get(s)
  ),
  L = (s, e, t) =>
    e.has(s)
      ? B("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(s)
      : e.set(s, t),
  S = (s, e, t, i) => (
    g(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t
  ),
  C = (s, e, t) => (g(s, e, "access private method"), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = t(n);
    fetch(n.href, o);
  }
})();
const q = `
      <div class="modal__form">
        <h2>SEND US MESSAGE</h2>
        <form novalidate data-js-form='{"url": "/submit", "method": "POST", "showModalAfterSuccess": "Thank you!", "preventDefault": true}' id="contactForm">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Your full name">
          
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email">
          
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" rows="4"></textarea>
          
          <button class = "btn" type="submit">Submit</button>
        </form>
      </div>
    `;
var u;
const c = class c {
  constructor() {
    return c.instance || (c.instance = this), c.instance;
  }
  static lock() {
    if (b(this, u)) return;
    S(c, u, !0);
    const e = window.scrollY;
    (document.body.style.position = "fixed"),
      (document.body.style.top = `-${e}px`),
      (document.body.style.width = "100%"),
      (document.body.dataset.scrollLock = e);
  }
  static unlock() {
    if (!b(this, u)) return;
    S(c, u, !1);
    const e = parseInt(document.body.dataset.scrollLock || "0", 10);
    (document.body.style.position = ""),
      (document.body.style.top = ""),
      (document.body.style.width = ""),
      (document.body.dataset.scrollLock = ""),
      window.scrollTo(0, e);
  }
  get isLocked() {
    return b(c, u);
  }
};
(u = new WeakMap()), L(c, u, !1), m(c, "instance");
let v = c;
const a = class a {
  constructor(e = {}) {
    if (a.instance) return a.instance;
    (this.defaultOptions = { animationClass: "fade", ...e }),
      this.createOverlay(),
      (a.instance = this);
  }
  createOverlay() {
    if (!document.querySelector(a.selectors.modalOverlay)) {
      const e = document.createElement("div");
      (e.className = a.stateClasses.overlay), document.body.appendChild(e);
    }
  }
  attachCloseHandler(e, t) {
    const i = () => {
      t(), this.closeAll();
    };
    e.addEventListener("click", i);
  }
  attachOverlayClickHandler(e, t) {
    e.addEventListener("click", (i) => {
      i.target === e && (t(), this.closeAll());
    });
  }
  openModal({
    message: e,
    needCloseBtn: t,
    inCloseBtn: i = "Close",
    extraClasses: n = "",
    onClose: o = () => {},
    options: l = {},
  } = {}) {
    const r = document.querySelector(a.selectors.modalOverlay),
      f = { ...this.defaultOptions, ...l };
    (r.innerHTML = `
      <div class="modal ${n} ${f.animationClass}">
        ${t ? `<button data-js-close-btn class="closeBtn">${i}</button>` : ""}
        ${e}
      </div>
    `),
      r.classList.add(a.stateClasses.overlayOpen),
      r.classList.remove(a.stateClasses.overlayClose),
      v.lock();
    const h = r.querySelector(a.selectors.closeBtn);
    h && this.attachCloseHandler(h, o), this.attachOverlayClickHandler(r, o);
  }
  closeAll() {
    const e = document.querySelector(a.selectors.modalOverlay);
    e &&
      (e.classList.remove(a.stateClasses.overlayOpen),
      e.classList.add(a.stateClasses.overlayClose),
      (e.innerHTML = ""),
      v.unlock());
  }
  static getInstance(e = {}) {
    return a.instance || (a.instance = new a(e)), a.instance;
  }
};
m(a, "instance", null),
  m(a, "stateClasses", {
    overlay: "modal__overlay",
    overlayOpen: "modal__overlay_open",
    overlayClose: "modal__overlay_close",
  }),
  m(a, "selectors", {
    modalOverlay: ".modal__overlay",
    closeBtn: "[data-js-close-btn]",
  });
let p = a;
var y, x, w;
const d = class d {
  constructor() {
    L(this, y);
    m(this, "attrs", { form: "data-js-form" });
    if (d.instance) return d.instance;
    C(this, y, w).call(this), (d.instance = this);
  }
  static getInstance() {
    return d.instance || (d.instance = new d()), d.instance;
  }
};
(y = new WeakSet()),
  (x = function (e) {
    const { target: t, submitter: i } = e;
    if (
      !t.hasAttribute(`${this.attrs.form}`) ||
      !t.tagName.toLowerCase() === "form"
    )
      return;
    if (t.hasAttribute("unsolicited")) {
      i.disabled = !1;
      return;
    }
    const n = JSON.parse(t.getAttribute(this.attrs.form)),
      {
        url: o,
        method: l = "POST",
        showModalAfterSuccess: r,
        preventDefault: f = !0,
        redirectUrlAfterSuccess: h,
        delayBeforeRedirect: E,
      } = n,
      A = new FormData(t);
    f && e.preventDefault(),
      (i.disabled = !0),
      fetch(o, { method: l, body: A })
        .then((T) => {
          r &&
            (p.getInstance().closeAll(),
            p.getInstance().openModal({
              message: "<p>Данные успешно отправлены</p>",
              needCloseBtn: !0,
              extraClasses: "modalAfterSuccess__content",
              inCloseBtn: '<img src="assets/modal/closeBtn.svg" alt="" />',
            })),
            h &&
              (E
                ? setTimeout(() => {
                    location.href = h;
                  }, E)
                : (location.href = h));
        })
        .finally(() => {
          i.disabled = !1;
        });
  }),
  (w = function () {
    document.addEventListener("submit", C(this, y, x).bind(this), !1);
  }),
  m(d, "instance");
let O = d;
class $ {
  constructor(e, t) {
    (this.form = e),
      (this.config = t),
      (this.errors = {}),
      (this.submitButton = e.querySelector('[type="submit"]')),
      this.init(),
      this.bindSubmitListener();
  }
  init() {
    this.form.addEventListener("input", this.handleInput.bind(this));
  }
  bindSubmitListener() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this), !0);
  }
  handleInput(e) {
    const t = e.target;
    this.config[t.name] && this.validateField(t);
  }
  handleSubmit(e) {
    this.validateForm(),
      this.isValidForm()
        ? this.form.removeAttribute("unsolicited")
        : (e.preventDefault(), this.form.setAttribute("unsolicited", "true"));
  }
  validateField(e) {
    const t = this.config[e.name],
      i = e.value.trim(),
      n = [],
      o = (l) => {
        const r = l % 10,
          f = l % 100;
        return f >= 11 && f <= 14
          ? "ов"
          : r === 1
          ? ""
          : r >= 2 && r <= 4
          ? "а"
          : "ов";
      };
    if (!t.required && !i) {
      (this.errors[e.name] = []), this.displayErrors(e, []);
      return;
    }
    t.required && !i && n.push("Это поле обязательно."),
      t.minLength &&
        i.length < t.minLength &&
        n.push(`Минимальная длина ${t.minLength} символ${o(t.minLength)}.`),
      t.maxLength &&
        i.length > t.maxLength &&
        n.push(`Максимальная длина ${t.maxLength} символ${o(t.maxLength)}.`),
      t.pattern && !t.pattern.test(i) && n.push("Неверный формат."),
      (this.errors[e.name] = n),
      this.displayErrors(e, n);
  }
  validateForm() {
    this.form.querySelectorAll("input, textarea, select").forEach((t) => {
      this.config[t.name] && this.validateField(t);
    }),
      this.updateSubmitButtonState();
  }
  displayErrors(e, t) {
    let i = e.nextElementSibling;
    (!i || !i.classList.contains("error-message")) &&
      ((i = document.createElement("div")),
      (i.className = "error-message"),
      e.after(i)),
      (i.innerHTML = t.join("<br>"));
  }
  updateSubmitButtonState() {
    this.isValidForm()
      ? (this.submitButton.classList.remove("disabled"),
        (this.submitButton.disabled = !1))
      : (this.submitButton.classList.add("disabled"),
        (this.submitButton.disabled = !0));
  }
  isValidForm() {
    return Object.values(this.errors).every((e) => e.length === 0);
  }
}
class D {
  static setup(e) {
    const t = {
      email: {
        type: "text",
        required: !0,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      message: { type: "text", required: !1, minLength: 8, maxLength: 50 },
      fullName: { type: "text", required: !0, minLength: 3, maxLength: 15 },
    };
    return new $(e, t);
  }
}
function I() {
  return new Promise((s) => {
    document.readyState == "loading"
      ? document.addEventListener("DOMContentLoaded", () => {
          s();
        })
      : s();
  });
}
I().then(() => {
  console.debug("DOM ready"),
    document.getElementById("openModalBtn").addEventListener("click", () => {
      const s = p.getInstance(),
        e = q;
      s.openModal({
        message: e,
        needCloseBtn: !0,
        extraClasses: "modal__content",
        inCloseBtn: '<img src="assets/modal/closeBtn.svg" alt="" />',
      });
      const t = document.getElementById("contactForm");
      D.setup(t), new O();
    });
});
