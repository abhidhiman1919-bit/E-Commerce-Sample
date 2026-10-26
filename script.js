const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCgPW7dY0asAzy1VitGxYE7JcEAODMvgR0',
  authDomain: 'smart-products-zone.firebaseapp.com',
  databaseURL: 'https://smart-products-zone-default-rtdb.firebaseio.com',
  projectId: 'smart-products-zone',
  appId: '1:414455250776:web:9cdeee377cb56a38f36f2d'
};
const FB_ON = !!(window.firebase && FIREBASE_CONFIG.databaseURL && !/YOUR_/.test(FIREBASE_CONFIG.databaseURL));

const PRODUCTS = [
    { id: 1, best: true, ship: 0, returns: 7, name: 'Boom Pro Wireless Headphones', cat: 'Electronics', art: 'headphones', img: 'images/headphones.jpg', h: 205, price: 2499, mrp: 3999, rating: 4.4, count: 3218,
      desc: 'Over-ear Bluetooth headphones with deep bass and soft memory-foam cushions. Made for long commutes and late-night playlists.',
      pts: ['Bluetooth 5.3 with 30-hour battery', '40 mm drivers with bass boost', 'Built-in mic for calls', 'Foldable with a carry pouch'] },
    { id: 2, best: true, ship: 49, returns: 7, replace: 7, name: 'Pulse 2 Smartwatch', cat: 'Electronics', art: 'watch', img: 'images/watch.jpg', h: 262, price: 3299, mrp: 5999, rating: 4.2, count: 1876,
      desc: 'A bright 1.8-inch display, heart-rate and SpO2 tracking, and more than 100 sport modes on a light silicone strap.',
      pts: ['Up to 7 days of battery', 'IP68 water resistance', 'Call and message alerts on the wrist', 'Sleep and step tracking'] },
    { id: 3, best: true, ship: 0, replace: 10, name: 'Dhoom Mini Bluetooth Speaker', cat: 'Electronics', art: 'speaker', img: 'images/speaker.jpg', h: 14, price: 1799, mrp: 2999, rating: 4.3, count: 2540,
      desc: 'Pocket-sized speaker with loud, clear stereo sound. Take it to the terrace, the beach or the kitchen.',
      pts: ['12 W stereo output', 'IPX6 splash-proof body', '10 hours of playback', 'Type-C fast charging'] },
    { id: 4, best: true, ship: 40, returns: 0, name: 'Charge 10K Power Bank', cat: 'Electronics', art: 'powerbank', img: 'images/powerbank.jpg', h: 152, price: 1199, mrp: 1899, rating: 4.1, count: 4412,
      desc: 'A slim 10,000 mAh power bank that charges a phone almost twice and fits in a jeans pocket.',
      pts: ['10,000 mAh capacity', '22.5 W fast charging', 'Dual output ports', 'Short-circuit and overheat protection'] },
    { id: 5, best: true, name: 'Daily Carry Backpack 25L', cat: 'Fashion', art: 'backpack', img: 'images/backpack.jpg', h: 28, price: 1499, mrp: 2499, rating: 4.5, count: 5120,
      desc: 'A roomy everyday backpack with a padded laptop sleeve and a hidden pocket for your wallet and phone.',
      pts: ['25 litres, fits a 15.6-inch laptop', 'Water-repellent fabric', 'Padded back panel and straps', 'Hidden anti-theft pocket'] },
    { id: 6, name: 'Stride Everyday Sneakers', cat: 'Fashion', art: 'sneaker', img: 'images/sneaker.jpg', h: 350, price: 2199, mrp: 3499, rating: 4.3, count: 3087,
      desc: 'Light, breathable sneakers that go with jeans, shorts and everything in between.',
      pts: ['Breathable mesh upper', 'Cushioned EVA midsole', 'Anti-slip rubber outsole', 'Available in UK 6 to 11'] },
    { id: 7, name: 'Coast Polarised Sunglasses', cat: 'Fashion', art: 'sunglasses', img: 'images/sunglasses.jpg', h: 44, price: 899, mrp: 1599, rating: 4.0, count: 962,
      desc: 'Polarised lenses cut glare on bright roads and water. The frame is light enough to forget you are wearing it.',
      pts: ['Polarised lenses', 'UV400 protection', 'Lightweight flexible frame', 'Hard case included'] },
    { id: 8, name: 'Classic Bifold Wallet', cat: 'Fashion', art: 'wallet', img: 'images/wallet.jpg', h: 22, price: 699, mrp: 1299, rating: 4.4, count: 2241,
      desc: 'A slim bifold in soft vegan leather with room for your cards, cash and a few receipts.',
      pts: ['6 card slots and 2 note sections', 'RFID-blocking lining', 'Slim 8 mm profile', 'Gift box included'] },
    { id: 9, name: 'Steel Insulated Bottle 750 ml', cat: 'Home', art: 'bottle', img: 'images/bottle.jpg', h: 188, price: 549, mrp: 899, rating: 4.6, count: 6310,
      desc: 'Double-wall steel bottle that keeps water cold through a hot day or chai warm through a long morning.',
      pts: ['Cold for 24 hours, hot for 12', 'Food-grade 304 stainless steel', 'Leak-proof screw lid', 'BPA free'] },
    { id: 10, name: 'Chai Time Ceramic Mug', cat: 'Home', art: 'mug', img: 'images/mug.jpg', h: 6, price: 399, mrp: 649, rating: 4.2, count: 1432,
      desc: 'A glazed 350 ml mug with a comfortable handle. Holds a full cup of chai with room for biscuits.',
      pts: ['350 ml capacity', 'Microwave and dishwasher safe', 'Smooth glaze, easy to clean', 'Sold as a single mug'] },
    { id: 11, name: 'Arc LED Desk Lamp', cat: 'Home', art: 'lamp', img: 'images/lamp.jpg', h: 48, price: 1299, mrp: 2199, rating: 4.3, count: 1789,
      desc: 'A bendable desk lamp with warm and cool light for study, work or reading in bed.',
      pts: ['3 colour temperatures', '5 brightness levels', 'Flexible neck', 'USB powered'] },
    { id: 12, name: 'Terra Planter with Tray', cat: 'Home', art: 'planter', img: 'images/planter.jpg', h: 124, price: 449, mrp: 799, rating: 4.5, count: 874,
      desc: 'A matte planter with a drainage hole and tray. Sized for money plants, succulents and small herbs.',
      pts: ['15 cm pot with drainage hole', 'Water-catching tray included', 'Matte finish', 'Plant not included'] }
  ];

const ART = {
    headphones: `<path class="sa" stroke-width="12" stroke-linecap="round" d="M52 118V104a48 48 0 0 1 96 0v14"/><path class="sb" stroke-width="3" stroke-linecap="round" d="M52 112V104a48 48 0 0 1 96 0v8"/><rect class="a" x="34" y="108" width="36" height="60" rx="16"/><rect class="b" x="58" y="118" width="14" height="40" rx="7"/><rect class="a" x="130" y="108" width="36" height="60" rx="16"/><rect class="b" x="128" y="118" width="14" height="40" rx="7"/>`,
    watch: `<rect class="c" x="76" y="16" width="48" height="168" rx="12"/><circle class="b" cx="100" cy="30" r="3"/><circle class="b" cx="100" cy="170" r="3"/><rect class="k" x="144" y="86" width="7" height="20" rx="3"/><rect class="k" x="56" y="54" width="88" height="94" rx="24"/><rect class="a" x="64" y="62" width="72" height="78" rx="17"/><path class="sw" stroke-width="5" stroke-linecap="round" d="M100 102V82M100 102l15 8"/>`,
    speaker: `<rect class="a" x="46" y="40" width="108" height="128" rx="28"/><circle class="k" cx="100" cy="72" r="12"/><circle class="b" cx="100" cy="72" r="5"/><circle class="k" cx="100" cy="124" r="32"/><circle class="b" cx="100" cy="124" r="18"/><circle class="k" cx="100" cy="124" r="6"/>`,
    powerbank: `<rect class="a" x="60" y="26" width="80" height="148" rx="18"/><rect class="b" x="74" y="44" width="52" height="8" rx="4"/><rect class="b" x="74" y="58" width="40" height="8" rx="4"/><rect class="b" x="74" y="72" width="26" height="8" rx="4"/><path class="w" d="M106 100l-16 24h11l-4 20 18-26h-11z"/><rect class="k" x="86" y="156" width="28" height="8" rx="3"/>`,
    backpack: `<path class="sc" stroke-width="9" stroke-linecap="round" d="M84 52V40a16 16 0 0 1 32 0v12"/><rect class="k" x="42" y="82" width="12" height="72" rx="6"/><rect class="k" x="146" y="82" width="12" height="72" rx="6"/><rect class="a" x="50" y="48" width="100" height="126" rx="32"/><path class="sk" stroke-width="3" stroke-linecap="round" d="M62 88a38 28 0 0 1 76 0"/><rect class="b" x="64" y="108" width="72" height="52" rx="16"/><path class="sk" stroke-width="3" stroke-linecap="round" d="M72 122h56"/>`,
    sneaker: `<path class="k" d="M22 142h160a6 6 0 0 1 6 6v4a14 14 0 0 1-14 14H36a14 14 0 0 1-14-14z"/><path class="a" d="M26 142c0-30 12-52 32-60l26-12c8 10 20 16 34 18 26 4 52 16 62 54z"/><path class="b" d="M142 100c20 6 34 20 40 42h-48z"/><path class="c" d="M58 82l26-12 4 14-26 12z"/><path class="sw" stroke-width="5" stroke-linecap="round" d="M96 84l14-8M108 92l14-8M120 98l12-6"/>`,
    sunglasses: `<path class="sk" stroke-width="7" stroke-linecap="round" d="M92 100q8-9 16 0M30 96L14 86M170 96l16-10"/><rect class="k" x="24" y="84" width="68" height="52" rx="22"/><rect class="k" x="108" y="84" width="68" height="52" rx="22"/><rect class="a" x="29" y="89" width="58" height="42" rx="18"/><rect class="a" x="113" y="89" width="58" height="42" rx="18"/><path class="sw" opacity=".55" stroke-width="5" stroke-linecap="round" d="M40 102l12-6M124 102l12-6"/>`,
    wallet: `<rect class="a" x="32" y="60" width="136" height="96" rx="18"/><path class="b" d="M32 82a22 22 0 0 1 22-22h92a22 22 0 0 1 22 22v10H32z"/><rect x="42" y="102" width="68" height="44" rx="10" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-dasharray="5 5"/><rect class="k" x="122" y="104" width="46" height="32" rx="12"/><circle class="w" cx="140" cy="120" r="5"/>`,
    bottle: `<rect class="k" x="82" y="18" width="36" height="24" rx="7"/><rect class="c" x="86" y="40" width="28" height="14"/><rect class="a" x="60" y="52" width="80" height="132" rx="28"/><rect class="b" x="60" y="98" width="80" height="40"/><rect class="w" opacity=".35" x="71" y="66" width="8" height="104" rx="4"/>`,
    mug: `<path class="sc2" fill="none" stroke-width="5" stroke-linecap="round" stroke="#9aa" opacity=".6" d="M76 52q-8-10 0-20M100 52q-8-10 0-20M124 52q-8-10 0-20"/><path class="sa" stroke-width="13" d="M138 84h8a18 18 0 0 1 0 44h-8"/><path class="a" d="M50 64h92v76a28 28 0 0 1-28 28H78a28 28 0 0 1-28-28z"/><rect class="b" x="50" y="96" width="92" height="14"/>`,
    lamp: `<circle fill="#FFD66B" opacity=".35" cx="142" cy="110" r="32"/><rect class="k" x="62" y="164" width="76" height="12" rx="6"/><path class="sk" stroke-width="8" stroke-linecap="round" d="M100 164V104l30-44"/><circle class="b" cx="100" cy="104" r="7"/><path class="a" d="M112 44l58 28-18 30-56-30z"/><circle fill="#FFE9A3" cx="142" cy="92" r="8"/>`,
    planter: `<path fill="#2F7F4D" d="M100 104c-4-24-2-52 0-74 8 24 8 50 0 74z"/><path fill="#3C9A5F" d="M100 104C70 100 60 70 66 48c26 8 36 32 34 56z"/><path fill="#58B97A" d="M100 104c30-6 42-34 34-60-26 10-36 36-34 60z"/><path class="a" d="M64 114h72l-10 54a8 8 0 0 1-8 6H82a8 8 0 0 1-8-6z"/><rect class="b" x="58" y="102" width="84" height="16" rx="6"/>`
  };

(() => {
  'use strict';
  const P = PRODUCTS;
  let BRAND = 'Smart Products Zone';
  let TAGLINE = 'Aapki gali ki dukaan, ab online.';
  let LOGO = 'images/logo.png';
  const logoHTML = () => `<span class="lg" aria-hidden="true">${esc(BRAND[0])}<img src="${LOGO}" alt="" onload="this.parentNode.classList.add('has')" onerror="this.remove()"></span>`;

  const CK = 'spz.cache.v1';
  let CACHE = {}; try { CACHE = JSON.parse(localStorage.getItem(CK) || '{}') || {}; } catch (e) {}
  const STATIC = PRODUCTS.slice();
  const FBS = { custom: !!CACHE.custom, cod: CACHE.cod !== false, upi: typeof CACHE.upi === 'string' ? CACHE.upi : '', upiName: typeof CACHE.upiName === 'string' ? CACHE.upiName : '', brand: CACHE.brand || {}, products: Array.isArray(CACHE.products) ? CACHE.products : undefined };
  const SOLD = Object.assign({}, CACHE.sold || {});
  let DB = null;
  const STATES = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];
  const fromFB = p => ({
    id: Number(p.id), name: p.name || '', cat: p.cat || 'General', art: p.art || '', imgs: (p.imgs || []).slice(), img: (p.imgs && p.imgs[0]) || '',
    h: p.h == null ? 200 : p.h, price: +p.price || 0, mrp: Math.max(+p.mrp || 0, +p.price || 0), rating: +p.rating || 0, count: +p.count || 0,
    desc: p.desc || '', pts: p.pts || [], best: !!p.best, ship: Math.max(0, +p.ship || 0),
    returns: p.policy === 'return' ? (p.pdays || 7) : p.policy === 'none' ? 0 : undefined,
    replace: p.policy === 'replace' ? (p.pdays || 7) : undefined, exch: p.policy === 'exchange' ? (p.pdays || 7) : undefined,
    qty: p.qty == null ? null : +p.qty
  });
  const useCatalog = list => { P.length = 0; list.forEach(x => P.push(x)); };
  const leftOf = p => p.qty == null ? Infinity : Math.max(0, p.qty - (SOLD[p.id] || 0));
  const maxQ = p => Math.min(10, leftOf(p));
  if (FB_ON) {
    if (FBS.brand.name) BRAND = FBS.brand.name;
    if (FBS.brand.tagline) TAGLINE = FBS.brand.tagline;
    if (FBS.brand.logo) LOGO = FBS.brand.logo;
    if (FBS.custom && FBS.products) useCatalog(FBS.products.map(fromFB));
  }

  const art = (p, label, eager) => `<svg viewBox="0 0 200 200" ${label ? `role="img" aria-label="${esc(p.name)}"` : 'aria-hidden="true"'}><circle class="c" cx="100" cy="106" r="82" opacity=".5"/>${ART[p.art] || ''}</svg><img class="shot" src="${esc(p.img || '')}" alt="${label ? esc(p.name) : ''}" loading="${eager ? 'eager' : 'lazy'}" onerror="this.remove()">`;

  const CATS = ['All'];
  const setCats = () => { CATS.length = 0; CATS.push('All'); P.forEach(x => { if (x.cat && !CATS.includes(x.cat)) CATS.push(x.cat); }); };
  setCats();

  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const INR = n => '₹' + n.toLocaleString('en-IN');
  const num = n => n.toLocaleString('en-IN');
  const byId = id => P.find(p => p.id === Number(id));
  const off = p => Math.round((p.mrp - p.price) / p.mrp * 100);
  const mask = ph => `+91 ${ph.slice(0, 2)}••••••${ph.slice(-2)}`;
  const main = $('#main'), drawer = $('#cart'), scrim = $('#scrim'), modal = $('#modal'), sheet = $('#sheet'), toastEl = $('#toast');

  const S = { view: 'home', sec: null, stack: [], pend: null, users: {}, lang: 'en', gi: 0, id: null, q: '', cat: 'All', dq: 1, cart: {}, user: null };
  const KEY = 'Smart Products Zone.v1';
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (d.cart) for (const [k, v] of Object.entries(d.cart)) if (byId(k) && v > 0) S.cart[k] = Math.min(10, v | 0);
    if (typeof d.user === 'string' && /^\d{10}$/.test(d.user)) S.user = d.user;
    if (d.lang === 'hi') S.lang = 'hi';
    if (d.users && typeof d.users === 'object') for (const [ph, u] of Object.entries(d.users)) if (/^\d{10}$/.test(ph) && u && typeof u === 'object') {
      const pr = u.profile, ok = pr && ['name', 'phone', 'addr', 'pin'].every(k => typeof pr[k] === 'string');
      S.users[ph] = { profile: ok ? { name: pr.name, phone: pr.phone, addr: pr.addr, pin: pr.pin, lm: typeof pr.lm === 'string' ? pr.lm : '', state: typeof pr.state === 'string' ? pr.state : '' } : null,
        addrs: (Array.isArray(u.addrs) ? u.addrs : []).filter(a => a && typeof a.id === 'string' && ['name', 'phone', 'addr', 'pin'].every(k => typeof a[k] === 'string')).map(a => ({ id: a.id, name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: typeof a.lm === 'string' ? a.lm : '', state: typeof a.state === 'string' ? a.state : '', area: typeof a.area === 'string' ? a.area : '', city: typeof a.city === 'string' ? a.city : '' })),
        fav: (Array.isArray(u.fav) ? u.fav : []).filter(i => byId(i)).map(Number),
        orders: (Array.isArray(u.orders) ? u.orders : []).filter(o => o && typeof o.id === 'string' && Array.isArray(o.lines)).slice(0, 50) };
    }
  } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ cart: S.cart, user: S.user, users: S.users, lang: S.lang })); } catch (e) {} };

  const qtyOf = id => S.cart[id] || 0;
  const cartCount = () => Object.values(S.cart).reduce((a, b) => a + b, 0);
  const subtotal = () => Object.entries(S.cart).reduce((a, [id, q]) => a + byId(id).price * q, 0);
  const savings = () => Object.entries(S.cart).reduce((a, [id, q]) => a + (byId(id).mrp - byId(id).price) * q, 0);
  const SHIP_PER_QTY = false;
  const hasShip = p => typeof p.ship === 'number' && p.ship >= 0;
  const shipOf = (p, q) => hasShip(p) ? p.ship * (SHIP_PER_QTY ? q : 1) : 0;
  const cartShip = () => Object.entries(S.cart).reduce((a, [id, q]) => a + shipOf(byId(id), q), 0);
  const cartHasShip = () => Object.keys(S.cart).some(id => hasShip(byId(id)));
  const jumpTop = () => {
    const r = document.documentElement, prev = r.style.scrollBehavior;
    r.style.scrollBehavior = 'auto';
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
    document.body.scrollTop = 0; r.scrollTop = 0;
    r.style.scrollBehavior = prev;
  };
  let toastT;
  const toast = msg => { toastEl.textContent = msg; toastEl.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('on'), 2200); };

  (function splash() {
    $('#splashWm').innerHTML = [...BRAND].map((c, i) => `<span style="--i:${i}">${esc(c)}</span>`).join('') + `<span class="dot" style="--i:${BRAND.length}">.</span>`;
    $('#splashWm').setAttribute('aria-label', BRAND);
    $('#splashTag').textContent = TAGLINE;
    const fit = () => {
      const wm = $('#splashWm'); wm.style.fontSize = '';
      const max = document.documentElement.clientWidth - 48, w = wm.scrollWidth;
      if (w > max) wm.style.fontSize = (parseFloat(getComputedStyle(wm).fontSize) * max / w * 0.97) + 'px';
    };
    fit(); addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    const el = $('#splash');
    el.addEventListener('click', () => el.remove());
    setTimeout(() => el.remove(), 4200);
  })();
  document.title = BRAND;
  $('#brandBtn').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
  $('#footBrand').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
  $('#footTag').textContent = TAGLINE;

  const card = p => `
    <div class="card" role="button" tabindex="0" data-act="open" data-id="${p.id}" aria-label="${esc(p.name)}, ${INR(p.price)}">
      <div class="ph" style="--h:${p.h}">${art(p)}<span class="off">${off(p)}% off</span>${heart(p.id)}${leftOf(p) === 0 ? '<span class="oos">Out of stock</span>' : ''}</div>
      <div class="cb">
        <h3>${esc(p.name)}</h3>
        <div class="rt"><span class="pill">${p.rating.toFixed(1)} ★</span><span>(${num(p.count)})</span></div>
        <div class="pr"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s></div>
      </div>
    </div>`;

  const ICO = d => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const shortName = (s, n = 26) => { s = String(s).trim(); if (s.length <= n) return s; const cut = s.slice(0, n), sp = cut.lastIndexOf(' '); return (sp > 10 ? cut.slice(0, sp) : cut).trimEnd() + '…'; };
  const bestList = () => P.filter(p => p.best);
  const bslide = p => `<button class="bs" style="--h:${p.h}" data-act="open" data-id="${p.id}" aria-label="${esc(p.name)}, ${INR(p.price)}">
      <span class="bt"><span class="bl">Bestseller</span><span class="bh">${esc(shortName(p.name))}</span><span class="bp"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em>${off(p)}% off</em></span><span class="bcta">Shop now</span></span>
      <span class="bi"><span class="ph">${art(p, false, true)}</span></span>
    </button>`;
  let best = null, bestTimer;
  function initBest() {
    clearInterval(bestTimer); best = null;
    const b = document.querySelector('.best'); if (!b) return;
    const trk = b.querySelector('.btrk'), dd = b.querySelector('.bdots');
    const n = trk.children.length; if (!n) return;
    let idx = 0, hold = 0, down = false;
    const mark = () => {
      idx = Math.min(n - 1, Math.max(0, Math.round(trk.scrollLeft / (trk.clientWidth || 1))));
      if (!dd) return;
      dd.querySelectorAll('button').forEach((x, k) => x.setAttribute('aria-current', String(k === idx)));
      const c = dd.querySelector('.bcnt'); if (c) c.textContent = (idx + 1) + ' / ' + n;
    };
    const to = (i, smooth) => { i = ((i % n) + n) % n; trk.scrollTo({ left: i * trk.clientWidth, behavior: smooth ? 'smooth' : 'auto' }); };
    const poke = () => { hold = Date.now() + 4000; };
    best = { go: i => { poke(); to(i, true); }, step: d => { poke(); const j = idx + d; to(j, j >= 0 && j < n); } };
    trk.addEventListener('scroll', mark, { passive: true });
    b.addEventListener('pointerdown', () => { down = true; });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, () => { if (down) { down = false; poke(); } }));
    b.addEventListener('wheel', poke, { passive: true });
    b.addEventListener('keydown', poke);
    let sx = null, dragged = false;
    trk.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') { sx = e.clientX; dragged = false; } });
    trk.addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) { dragged = true; best.step(dx < 0 ? 1 : -1); } });
    trk.addEventListener('click', e => { if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; } }, true);
    mark();
    bestTimer = setInterval(() => {
      if (!document.body.contains(trk)) { clearInterval(bestTimer); return; }
      if (n < 2 || document.hidden || down || Date.now() < hold) return;
      to(idx + 1, idx + 1 < n);
    }, 4000);
  }

  function heroHTML() {
    const L = bestList();
    const banner = L.length ? `
      <section class="hb" aria-label="Bestsellers">
        <div class="best" role="region" aria-roledescription="carousel" aria-label="Bestsellers">
          <div class="btrk" tabindex="0">${L.map(bslide).join('')}</div>
          ${L.length > 1 ? `<div class="bdots">${L.length <= 8 ? L.map((_, k) => `<button data-act="best-go" data-i="${k}" aria-label="Product ${k + 1}"></button>`).join('') : '<span class="bcnt"></span>'}</div>` : ''}
        </div>
      </section>` : '';
    return `${banner}
      <div class="trust-row">
        <div>${ICO('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')}<span><b>Secure checkout</b>Safe and private</span></div>
        <div>${ICO('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>')}<span><b>Genuine products</b>Quality checked</span></div>
      </div>`;
  }

  function renderHome() {
    const q = S.q.trim().toLowerCase();
    const list = P.filter(p => (S.cat === 'All' || p.cat === S.cat) && (!q || (p.name + ' ' + p.cat + ' ' + p.desc).toLowerCase().includes(q)));
    const hero = (!S.q.trim() && S.cat === 'All') ? heroHTML() : '';
    const title = S.q.trim() ? `Results for “${esc(S.q.trim())}”` : (S.cat === 'All' ? 'All products' : S.cat);
    main.innerHTML = `
      ${hero}<div class="wrap" id="collection">
        <nav class="chips" aria-label="Categories">${CATS.map(c => `<button class="chip" data-act="cat" data-cat="${c}" aria-pressed="${c === S.cat}">${c}</button>`).join('')}</nav>
        <div class="head"><h2>${title}</h2><span>${list.length} ${list.length === 1 ? 'product' : 'products'}</span></div>
        ${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : `
          <div class="empty"><h3>Nothing matched your search</h3><p>Try a shorter word like “bag” or “lamp”, or browse all products.</p><button class="btn" data-act="home">Show all products</button></div>`}
      </div>`;
    initBest();
  }

  const polHTML = p => {
    const c = [];
    if (hasShip(p)) c.push([p.ship > 0 ? 'Delivery ' + INR(p.ship) + (SHIP_PER_QTY ? ' per item' : '') : 'Free delivery', 0]);
    if (typeof p.returns === 'number') c.push([p.returns > 0 ? p.returns + '-day returns' : 'No returns', p.returns > 0 ? 0 : 1]);
    if (typeof p.replace === 'number') c.push([p.replace > 0 ? p.replace + '-day replacement' : 'No replacement', p.replace > 0 ? 0 : 1]);
    if (typeof p.exch === 'number' && p.exch > 0) c.push([p.exch + '-day exchange', 0]);
    return c.length ? `<div class="pol">${c.map(([t, no]) => `<span${no ? ' class="no"' : ''}>${esc(t)}</span>`).join('')}</div>` : '';
  };

  function renderDetail() {
    const p = byId(S.id); if (!p) return renderHome();
    const inCart = qtyOf(p.id), q = inCart || S.dq;
    main.innerHTML = `
      <div class="wrap">
        <div class="dback"><button class="pg-back" data-act="back" aria-label="Back">${ARROW}</button></div>
        <div class="dt">
          ${galleryHTML(p)}
          <div class="info">
            <div class="crow"><p class="crumb">${esc(p.cat)}</p><button class="fv" data-act="fav" data-id="${p.id}" aria-pressed="${isFav(p.id)}">${HEART}<span>${isFav(p.id) ? 'Saved' : 'Save'}</span></button></div>
            <h1>${esc(p.name)}</h1>
            <div class="rt big"><span class="pill">${p.rating.toFixed(1)} ★</span><span>${num(p.count)} ratings</span></div>
            <div class="price"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em>${off(p)}% off</em></div>
            ${polHTML(p)}
            ${leftOf(p) === 0 ? '' : `<div class="qrow"><span>Quantity</span><div class="step" role="group" aria-label="Quantity">
              <button data-act="dq-" aria-label="Decrease quantity" ${q <= 1 && !inCart ? 'disabled' : ''}>−</button>
              <output aria-live="polite">${q}</output>
              <button data-act="dq+" aria-label="Increase quantity" ${q >= Math.max(1, maxQ(p)) ? 'disabled' : ''}>+</button>
            </div></div>`}
            <p class="desc${S.dx ? '' : ' clamp'}" id="descTx">${esc(p.desc)}</p>
            <button class="lnk dmore" id="descBtn" data-act="desc-more" hidden>${S.dx ? 'See less' : 'See more'}</button>
            <ul class="pts">${p.pts.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
            <div class="buy">
              ${leftOf(p) === 0 ? '<button class="btn" disabled>Out of stock</button>' : `<button class="btn${inCart ? ' added' : ''}" data-act="add">${inCart ? 'Added ✓' : 'Add to cart'}</button>
              <button class="btn buy" data-act="buy-now">Buy now · ${INR(p.price * q)}</button>`}
            </div>
          </div>
        </div>
        ${relatedHTML(p)}
      </div>`;
    initGallery(); initDesc();
  }

  function initDesc() {
    const t = document.getElementById('descTx'), b = document.getElementById('descBtn'); if (!t || !b) return;
    const chk = () => { b.hidden = !S.dx && t.scrollHeight <= t.clientHeight + 1 ? true : false; };
    chk(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(chk);
    addEventListener('resize', chk, { once: true });
  }

  const artSvg = p => `<svg viewBox="0 0 200 200" role="img" aria-label="${esc(p.name)}"><circle class="c" cx="100" cy="106" r="82" opacity=".5"/>${ART[p.art] || ''}</svg>`;
  const galleryHTML = p => {
    const list = p.imgs && p.imgs.length ? p.imgs : [p.img, ...[2, 3, 4, 5].map(n => p.img.replace(/(\.\w+)$/, `-${n}$1`))];
    return `<div class="gal ph" style="--h:${p.h}">
      <div class="trk" tabindex="0" role="group" aria-label="${esc(p.name)} photos">
        <div class="sl artsl" hidden>${artSvg(p)}</div>
        ${list.map((s, i) => `<div class="sl im"><img class="gi" src="${esc(s)}" alt="${esc(p.name)}${i ? ', photo ' + (i + 1) : ''}" draggable="false"></div>`).join('')}
      </div>
      <span class="cnt" hidden></span>
      <button class="gn l" data-act="gal-prev" aria-label="Previous photo">‹</button>
      <button class="gn r" data-act="gal-next" aria-label="Next photo">›</button>
      <div class="dd"></div>
    </div>`;
  };
  function initGallery() {
    const g = document.querySelector('.gal'); if (!g) return;
    const trk = g.querySelector('.trk'), dd = g.querySelector('.dd'), cnt = g.querySelector('.cnt'), artsl = g.querySelector('.artsl');
    const ims = () => [...trk.querySelectorAll('.sl.im')];
    const mark = () => {
      const n = ims().length, i = Math.min(n - 1, Math.max(0, Math.round(trk.scrollLeft / (trk.clientWidth || 1))));
      S.gi = i < 0 ? 0 : i;
      dd.querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-current', String(k === S.gi)));
      cnt.textContent = `${S.gi + 1} / ${n}`;
    };
    const build = () => {
      const n = ims().length;
      artsl.hidden = n > 0;
      g.classList.toggle('multi', n > 1);
      cnt.hidden = n < 2;
      dd.innerHTML = n > 1 ? ims().map((_, k) => `<button data-act="gal-go" data-i="${k}" aria-label="Photo ${k + 1}"></button>`).join('') : '';
      mark();
    };
    const drop = img => { const s = img.closest('.sl'); if (s) { s.remove(); build(); } };
    trk.addEventListener('error', e => { if (e.target.tagName === 'IMG') drop(e.target); }, true);
    trk.querySelectorAll('img').forEach(im => { if (im.complete && im.naturalWidth === 0) im.closest('.sl').remove(); });
    trk.addEventListener('scroll', mark, { passive: true });
    build();
    if (S.gi) trk.scrollTo({ left: S.gi * trk.clientWidth, behavior: 'auto' });
  }
  const galGo = i => { const t = document.querySelector('.trk'); if (t) t.scrollTo({ left: i * t.clientWidth, behavior: 'smooth' }); };

  function relatedHTML(p) {
    const same = P.filter(x => x.id !== p.id && x.cat === p.cat);
    const rest = P.filter(x => x.id !== p.id && x.cat !== p.cat);
    const sec = (title, list) => list.length ? `<section class="more"><div class="head"><h2>${title}</h2></div><div class="grid">${list.map(card).join('')}</div></section>` : '';
    return sec(`More in ${esc(p.cat)}`, same) + sec('You may also like', rest.slice(0, 8));
  }

  function showHome(reset) {
    S.view = 'home'; S.stack.length = 0; S.pend = null; S.ck = null; hidePage();
    if (reset) { S.q = ''; S.cat = 'All'; $('#q').value = ''; }
    renderHome();
  }
  function openProduct(id) { if (PAGES.includes(S.view)) pushHist(); hidePage(); S.gi = 0; S.view = 'detail'; S.id = Number(id); S.dq = 1; S.dx = false; jumpTop(); renderDetail(); jumpTop(); }

  function setQty(id, n) {
    const pp = byId(id); n = Math.max(0, Math.min(pp ? maxQ(pp) : 10, n));
    if (n === 0) delete S.cart[id]; else S.cart[id] = n;
    save(); renderCart();
    if (S.view === 'detail') renderDetail();
  }
  function renderCart() {
    const n = cartCount();
    const badge = $('#badge');
    badge.hidden = n === 0; badge.textContent = n;
    $('#cartBtn').setAttribute('aria-label', `Open cart, ${n} ${n === 1 ? 'item' : 'items'}`);
    $('#cartCount').textContent = n ? `(${n})` : '';
    const ids = Object.keys(S.cart);
    if (!ids.length) {
      $('#cartBody').innerHTML = `<div class="empty" style="margin-top:18px"><h3>Your cart is empty</h3><p>Add something you like and it will show up here.</p><button class="btn" data-act="shop">Start shopping</button></div>`;
      $('#cartFoot').innerHTML = '';
      return;
    }
    $('#cartBody').innerHTML = ids.map(id => {
      const p = byId(id), q = S.cart[id];
      return `
        <div class="ci">
          <button class="cth" data-act="open-cart" data-id="${p.id}" aria-label="View ${esc(p.name)}"><span class="ph" style="--h:${p.h}">${art(p)}</span></button>
          <div class="cm">
            <button class="cn" data-act="open-cart" data-id="${p.id}">${esc(p.name)}</button>
            <div class="cp"><span>${INR(p.price)} each</span><b>${INR(p.price * q)}</b></div>
            ${hasShip(p) ? `<p class="dl">${p.ship > 0 ? 'Delivery ' + INR(shipOf(p, q)) : 'Free delivery'}</p>` : ''}
            <div class="cr">
              <div class="step sm" role="group" aria-label="Quantity of ${esc(p.name)}">
                <button data-act="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
                <output>${q}</output>
                <button data-act="inc" data-id="${p.id}" aria-label="Increase quantity" ${q >= maxQ(p) ? 'disabled' : ''}>+</button>
              </div>
              <button class="lnk red" data-act="rm" data-id="${p.id}">Remove</button>
            </div>
          </div>
        </div>`;
    }).join('');
    const sh = cartShip();
    $('#cartFoot').innerHTML = `
      <div class="srow"><span>Subtotal</span><span>${INR(subtotal())}</span></div>
      ${cartHasShip() ? `<div class="srow"><span>Delivery</span><span>${sh ? INR(sh) : 'Free'}</span></div>` : ''}
      <div class="tot"><span>Total</span><span>${INR(subtotal() + sh)}</span></div>
      ${savings() ? `<p class="save">You save ${INR(savings())} on this order</p>` : ''}
      <button class="btn block" data-act="checkout">Checkout</button>`;
  }
  let lastFocus = null;
  function openCart() {
    closeMenu();
    lastFocus = document.activeElement;
    drawer.inert = false; drawer.classList.add('open'); scrim.classList.add('open');
    setTimeout(() => drawer.querySelector('.x').focus(), 50);
  }
  function closeCart() {
    drawer.classList.remove('open'); scrim.classList.remove('open'); drawer.inert = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  let lg = { step: 'phone', phone: '', otp: '', err: '', after: null, order: null };
  function renderAcct() {
    const pr = S.user && S.users[S.user] && S.users[S.user].profile;
    $('#acctLbl').textContent = S.user ? (pr ? (pr.name.trim().split(/\s+/)[0] || mask(S.user)) : mask(S.user)) : 'Login';
    $('#acctBtn').classList.toggle('named', !!S.user);
    $('#acctCh').hidden = !S.user;
    $('#menuPhone').textContent = S.user ? mask(S.user) : '';
  }
  function closeMenu() { $('#menu').hidden = true; $('#acctBtn').setAttribute('aria-expanded', 'false'); }
  function openLogin(after, only) { closeCart(); lg = { step: 'phone', phone: '', otp: '', err: '', after: after || null, only: only || null, order: null }; renderModal(); modal.hidden = false; }
  function closeModal() { modal.hidden = true; }

  function renderModal() {
    if (lg.step === 'phone') {
      sheet.innerHTML = `
        <h2 id="mTitle">Login or sign up</h2>
        <p class="sub">Enter your mobile number and we will send a 6-digit OTP.</p>
        <form id="fPhone" novalidate>
          <div><label for="phone">Mobile number</label></div>
          <div class="phone"><span>+91</span><input id="phone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" placeholder="9876543210" value="${esc(lg.phone)}"></div>
          <p class="err" id="err" role="alert">${esc(lg.err)}</p>
          <button class="btn block" type="submit">Get OTP</button>
        </form>
        <button class="lnk" data-act="modal-close" style="justify-self:start">Cancel</button>`;
      setTimeout(() => $('#phone') && $('#phone').focus(), 30);
    } else if (lg.step === 'otp') {
      sheet.innerHTML = `
        <h2 id="mTitle">Enter the OTP</h2>
        <p class="sub">Sent to ${mask(lg.phone)}</p>
        <div class="demo">Demo mode: your OTP is <b>${lg.sent}</b>. A live store sends this by SMS.</div>
        <form id="fOtp" novalidate>
          <div><label for="otp">6-digit OTP</label></div>
          <div class="otpf"><input id="otp" type="text" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="••••••"></div>
          <p class="err" id="err" role="alert">${esc(lg.err)}</p>
          <button class="btn block" type="submit">Verify and login</button>
        </form>
        <div class="row"><button class="lnk" data-act="change-num">Change number</button><button class="lnk" data-act="resend">Resend OTP</button></div>`;
      setTimeout(() => $('#otp') && $('#otp').focus(), 30);
    } else if (lg.step === 'cancel') {
      sheet.innerHTML = `
        <h2 id="mTitle">Cancel this order?</h2>
        <p class="sub">This cannot be undone.</p>
        <div class="cf"><button class="btn block" data-act="cancel-yes">Yes, cancel order</button><button class="btn alt block" data-act="modal-close">Keep order</button></div>`;
    } else if (lg.step === 'logout') {
      sheet.innerHTML = `
        <h2 id="mTitle">Log out?</h2>
        <p class="sub">You will need to login again with an OTP.</p>
        <div class="cf"><button class="btn block" data-act="logout-yes">Yes, log out</button><button class="btn alt block" data-act="modal-close">Stay logged in</button></div>`;
    } else {
      const o = lg.order;
      sheet.innerHTML = `
        <div class="done">
          <div class="ok" aria-hidden="true"><svg viewBox="0 0 52 52"><circle class="ring" cx="26" cy="26" r="24"/><path class="chk" d="M15 27l8 8 15-16"/></svg></div>
          <h2 id="mTitle">Order placed</h2>
          <p class="sub">Thank you for shopping with ${esc(BRAND)}. ${o.pay === 'cod' ? 'Please keep ' + INR(o.total) + ' ready to pay when your order arrives.' : 'We have your payment details. The seller will confirm your payment shortly.'}</p>
        </div>
        <div class="receipt"><div><span>Order number</span><b>${o.id}</b></div><div><span>Items</span><b>${o.items}</b></div>${o.dl ? `<div><span>Delivery</span><b>${o.ship ? INR(o.ship) : 'Free'}</b></div>` : ''}<div><span>Total</span><b>${INR(o.total)}</b></div><div><span>Payment</span><b>${payName(o.pay)}</b></div>${o.dAt ? `<div><span>Delivery by</span><b>${dwk(o.dAt)}</b></div>` : ''}<div><span>Deliver to</span><b>${esc(o.to || '')}</b></div></div>
        <button class="btn block" data-act="order-view" data-id="${esc(o.id)}">View order</button>
        <button class="btn alt block" data-act="modal-close">Continue shopping</button>`;
    }
  }
  function sendOtp() { lg.sent = String(100000 + Math.floor(Math.random() * 900000)); lg.step = 'otp'; lg.err = ''; renderModal(); }

  function calc(only) {
    const lines = only ? [{ id: only.id, qty: only.qty }] : Object.entries(S.cart).map(([id, q]) => ({ id: Number(id), qty: q }));
    const items = lines.reduce((a, l) => a + l.qty, 0);
    const sub = lines.reduce((a, l) => a + byId(l.id).price * l.qty, 0);
    const ship = lines.reduce((a, l) => a + shipOf(byId(l.id), l.qty), 0), dl = lines.some(l => hasShip(byId(l.id)));
    return { lines, items, sub, ship, dl, total: sub + ship };
  }
  const ckAddr = () => (S.ck && S.user) ? (U().addrs.find(a => a.id === S.ck.sel) || null) : null;
  const rd = n => String(Math.floor(Math.random() * Math.pow(10, n))).padStart(n, '0');
  const genOid = () => 'TZ' + rd(4) + 'X' + rd(4) + 'C' + rd(6);
  const validUpi = s => /^[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9]{2,64}$/.test(s || '');
  const rndDays = () => 5 + (Math.random() < 0.5 ? 0 : 1);
  const addrLine = a => `${esc(a.addr)}${a.lm ? ', ' + esc(a.lm) : ''}${a.area ? ', ' + esc(a.area) : ''}${a.city && a.city !== a.area ? ', ' + esc(a.city) : ''}${a.state ? ', ' + esc(a.state) : ''} - ${esc(a.pin)}`;

  function checkout(only) {
    if (!calc(only).lines.length) return;
    if (!S.user) { openLogin('checkout', only); return; }
    const l = U().addrs;
    S.ck = { only: only || null, step: l.length ? 'addr' : 'form', sel: l[0] ? l[0].id : null, pay: null, oid: null, dAt: null, busy: false };
    S.af = { id: null };
    closeCart(); closeModal(); go('chk');
  }

  function pageBack() {
    const ck = S.ck;
    if (S.view === 'chk' && ck && !ck.busy) {
      const prev = { sum: 'addr', pay: 'sum' }[ck.step];
      if (prev || (ck.step === 'form' && U().addrs.length)) { ck.step = prev || 'addr'; render(); page.scrollTop = 0; return; }
    }
    backStep();
  }

  const STEP_LBL = [['addr', 'Address'], ['sum', 'Summary'], ['pay', 'Payment']];
  const stepper = () => '';

  function addrListHTML(pick) {
    const l = U().addrs;
    const cards = l.map(a => {
      const on = pick && S.ck && S.ck.sel === a.id;
      const inner = `${pick ? '<span class="rad" aria-hidden="true">✓</span>' : ''}<span class="at"><b>${esc(a.name)}</b><span>${addrLine(a)}</span><span>+91 ${esc(a.phone)}</span></span>`;
      return `<div class="acard${pick ? ' pick' : ''}${on ? ' on' : ''}">${pick ? `<button class="abody" data-act="ck-sel" data-id="${esc(a.id)}" aria-pressed="${on}">${inner}</button>` : `<div class="abody">${inner}</div>`}<div class="aact"><button class="lnk" data-act="aedit" data-id="${esc(a.id)}">Edit</button><button class="lnk red" data-act="adel" data-id="${esc(a.id)}">Delete</button></div></div>`;
    }).join('');
    return `${l.length ? `<div class="alist">${cards}</div>` : '<div class="empty"><h3>No saved addresses</h3><p>Add an address and we will deliver your orders there.</p></div>'}
      <button class="btn alt block" data-act="anew" style="margin-top:.9rem">+ Add new address</button>`;
  }

  let PL = { pin: '', status: null, offices: [], district: '', state: '' }, plSeq = 0;
  const normState = s => { s = String(s || '').replace(/&/g, 'and').trim().toLowerCase(); return STATES.find(x => x.toLowerCase() === s) || null; };
  const pinStatusHTML = () => PL.status === 'wait' ? 'Checking pincode…' : PL.status === 'ok' ? `<span class="gd">✓ ${esc(PL.district)}${PL.district && PL.state ? ', ' : ''}${esc(PL.state)}</span>` : PL.status === 'bad' ? '<span class="rd">Pincode not found. Please enter a valid pincode.</span>' : PL.status === 'net' ? 'Could not check the pincode right now. Please select your state.' : '';
  const areaOpts = sel => PL.offices.map(n => `<option value="${esc(n)}"${n === sel ? ' selected' : ''}>${esc(n)}</option>`).join('');
  function paintPin() {
    const st = $('#pinst'); if (!st) return;
    st.innerHTML = pinStatusHTML();
    const ok = PL.status === 'ok', has = ok && PL.offices.length;
    const af = $('#areaF'), cf = $('#cityF'), sel = $('#pstate');
    if (af) { af.hidden = !has; const pa = $('#parea'); if (pa) { const cur = pa.value; pa.innerHTML = areaOpts(PL.offices.includes(cur) ? cur : PL.offices[0]); } }
    if (cf) { cf.hidden = !(ok && PL.district); const pc = $('#pcity'); if (pc) pc.value = PL.district; }
    if (ok && PL.state && sel) { if (![...sel.options].some(o => o.value === PL.state)) sel.add(new Option(PL.state, PL.state)); sel.value = PL.state; }
  }
  async function lookupPin(pin) {
    const my = ++plSeq; PL = { pin, status: 'wait', offices: [], district: '', state: '' }; paintPin();
    let res = { pin, status: 'net', offices: [], district: '', state: '' };
    try {
      const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 7000);
      const r = await fetch('https://api.postalpincode.in/pincode/' + pin, { signal: ctl.signal }); clearTimeout(to);
      const j = await r.json(), d = Array.isArray(j) ? j[0] : null;
      if (d && d.Status === 'Success' && Array.isArray(d.PostOffice) && d.PostOffice.length) { const po = d.PostOffice; res = { pin, status: 'ok', offices: po.map(x => x.Name).filter(Boolean), district: po[0].District || po[0].Block || '', state: normState(po[0].State) || po[0].State || '' }; }
      else if (d && /no records/i.test(String(d.Message || ''))) res = { pin, status: 'bad', offices: [], district: '', state: '' };
    } catch (e) {}
    if (my !== plSeq) return;
    PL = res; paintPin();
  }
  const AV = {
    pname: v => v.trim().length < 2 ? 'Please enter your full name' : '',
    pphone: v => /^[6-9]\d{9}$/.test(v) ? '' : v.length < 10 ? 'Please enter a valid 10-digit mobile number' : 'Mobile number must start with 6, 7, 8 or 9',
    paddr: v => v.trim().length < 8 ? 'Please enter your full address with house number, street and city' : '',
    ppin: v => /^\d{6}$/.test(v) ? '' : 'Please enter a valid 6-digit pincode'
  };
  function showFE(k) {
    const el = $('#' + k), er = $('#e_' + k); if (!el || !er) return '';
    const m = AV[k](el.value); er.textContent = m; el.classList.toggle('bad', !!m); return m;
  }

  function addrFormHTML(id) {
    const a = id ? U().addrs.find(x => x.id === id) : null;
    PL = a && a.pin ? { pin: a.pin, status: a.state ? 'ok' : null, offices: a.area ? [a.area] : [], district: a.city || '', state: a.state || '' } : { pin: '', status: null, offices: [], district: '', state: '' };
    const okA = PL.status === 'ok';
    return `<form id="fAddr" class="cf" novalidate>
      <div class="fld"><label for="pname">Full name</label><input id="pname" autocomplete="name" maxlength="60" value="${esc(a ? a.name : '')}"><p class="ferr" id="e_pname" role="alert"></p></div>
      <div class="fld"><label for="pphone">Mobile number</label><div class="phone"><span>+91</span><input id="pphone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" value="${esc(a ? a.phone : S.user || '')}"></div><p class="ferr" id="e_pphone" role="alert"></p></div>
      <div class="fld"><label for="paddr">Address</label><textarea id="paddr" rows="3" maxlength="200" autocomplete="street-address" placeholder="House no., building, street, area">${esc(a ? a.addr : '')}</textarea><p class="ferr" id="e_paddr" role="alert"></p></div>
      <div class="fld"><label for="plm">Landmark (optional)</label><input id="plm" maxlength="80" placeholder="Near school, temple, shop…" value="${esc(a ? a.lm : '')}"></div>
      <div class="two"><div class="fld"><label for="ppin">Pincode</label><input id="ppin" inputmode="numeric" maxlength="6" autocomplete="postal-code" value="${esc(a ? a.pin : '')}"></div>
        <div class="fld"><label for="pstate">State</label><select id="pstate"><option value="">Select state</option>${STATES.map(x => `<option value="${esc(x)}"${a && a.state === x ? ' selected' : ''}>${esc(x)}</option>`).join('')}</select></div></div>
      <p class="ferr" id="e_ppin" role="alert"></p><p class="pinst" id="pinst">${pinStatusHTML()}</p>
      <div class="fld" id="areaF"${okA && PL.offices.length ? '' : ' hidden'}><label for="parea">Area</label><select id="parea">${areaOpts(a ? a.area : '')}</select></div>
      <div class="fld" id="cityF"${okA && PL.district ? '' : ' hidden'}><label for="pcity">City / District</label><input id="pcity" readonly value="${esc(PL.district)}"></div>
      <p class="err" id="err" role="alert"></p>
      <button class="btn block" type="submit">Save address</button>
    </form>`;
  }

  const priceCard = c => {
    const mrp = c.lines.reduce((a, l) => a + byId(l.id).mrp * l.qty, 0), disc = Math.max(0, mrp - c.sub), pct = mrp ? Math.round(disc / mrp * 100) : 0;
    return `<section class="dcard"><h3>Price details</h3>
      <div class="prow"><span>Price (${c.items} ${c.items === 1 ? 'item' : 'items'})</span><s>${INR(mrp)}</s></div>
      ${disc ? `<div class="prow"><span>Discount (${pct}% off)</span><span class="gd">− ${INR(disc)}</span></div>` : ''}
      <div class="prow"><span>Selling price</span><b>${INR(c.sub)}</b></div>
      <div class="prow"><span>Delivery charges</span>${c.ship ? `<span>${INR(c.ship)}</span>` : '<span class="gd">Free</span>'}</div>
      <div class="prow t"><span>Total amount</span><span>${INR(c.total)}</span></div>
      ${disc ? `<p class="sbn">You will save ${INR(disc)} (${pct}% off) on this order</p>` : ''}</section>`;
  };
  const itemRow = (l, edit, many) => {
    const p = byId(l.id);
    return `<div class="ci2">${thumb({ id: l.id })}<div class="oi-b"><b>${esc(p.name)}</b>
      <div class="pr"><b>${INR(p.price)}</b><s>${INR(p.mrp)}</s><em class="gd">${off(p)}% off</em></div>
      ${edit ? `<div class="cr"><div class="step sm" role="group" aria-label="Quantity of ${esc(p.name)}"><button data-act="ck-q" data-id="${p.id}" data-d="-1" aria-label="Decrease quantity"${l.qty <= 1 ? ' disabled' : ''}>−</button><output>${l.qty}</output><button data-act="ck-q" data-id="${p.id}" data-d="1" aria-label="Increase quantity"${l.qty >= maxQ(p) ? ' disabled' : ''}>+</button></div>${many ? `<button class="lnk red" data-act="ck-rm" data-id="${p.id}">Remove</button>` : ''}</div>` : `<span class="sub">Qty ${l.qty}</span>`}
    </div><b class="lt">${INR(p.price * l.qty)}</b></div>`;
  };
  const cbar = (c, btn) => `<div class="cbar"><div class="cbt"><small>Total</small><b>${INR(c.total)}</b></div>${btn}</div>`;
  const trustStrip = () => `<div class="tstrip"><span>${ICO('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')}Secure checkout</span><span>${ICO('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>')}Genuine products</span><span>${ICO('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>')}Track your order</span></div>`;

  function chkHTML() {
    const ck = S.ck; if (!ck) return pgBar('Checkout');
    const c = calc(ck.only), a = ckAddr();
    const sl = ck.shown !== ck.step ? ' slide' : ''; ck.shown = ck.step;
    if (ck.step === 'form') return pgBar(S.af && S.af.id ? 'Edit address' : 'Add address') + `<div class="pg-in${sl}">${stepper('addr')}${addrFormHTML(S.af && S.af.id)}</div>`;
    if (ck.step === 'addr' || !a) {
      const many = !ck.only && c.lines.length > 1;
      return pgBar('Select address') + `<div class="pg-in${sl}">${stepper('addr')}${addrListHTML(true)}
        <section class="dcard" style="margin-top:1.1rem"><h3>Your order</h3>${c.lines.map(l => itemRow(l, true, many)).join('')}
          <div class="prow t"><span>Total (${c.items} ${c.items === 1 ? 'item' : 'items'})</span><span>${INR(c.sub)}</span></div></section>
        ${cbar({ total: c.sub + c.ship }, `<button class="btn" data-act="ck-confirm"${a ? '' : ' disabled'}>Deliver to this address</button>`)}</div>`;
    }
    if (ck.step === 'sum') {
      return pgBar('Order summary') + `<div class="pg-in${sl}">${stepper('sum')}
        <section class="dcard"><h3>Deliver to</h3><b>${esc(a.name)}</b><p class="sub">${addrLine(a)}</p><p class="sub">+91 ${esc(a.phone)}</p><button class="lnk" data-act="ck-change" style="justify-self:start">Change address</button></section>
        <section class="dcard"><h3>Items (${c.items})</h3>${c.lines.map(l => itemRow(l, false)).join('')}</section>
        <section class="dcard"><h3>Delivery</h3><div class="prow"><span>Order date</span><b>${dwk(Date.now())}</b></div><div class="prow"><span>Expected delivery</span><b class="gd">${dwk(ck.dAt)}</b></div><div class="prow"><span>Delivery charges</span>${c.ship ? `<b>${INR(c.ship)}</b>` : '<b class="gd">Free</b>'}</div></section>
        ${priceCard(c)}${trustStrip()}
        ${cbar(c, '<button class="btn" data-act="ck-next">Continue to payment</button>')}</div>`;
    }
    const codOff = FB_ON && FBS.cod === false, upi = validUpi(FBS.upi) ? FBS.upi : '';
    const pm = (act, ico, t, d, on, dis) => `<button class="pm${on ? ' on' : ''}" data-act="${act}" aria-pressed="${on}"${dis ? ' disabled aria-disabled="true"' : ''}><span class="pmi">${ico}</span><span class="pmt"><b>${t}</b><span>${d}</span></span><span class="rad" aria-hidden="true">✓</span></button>`;
    const cashIco = ICO('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v.01M18 14v.01"/>');
    const upiIco = ICO('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10.5 18h3"/><path d="m9.5 10 2 2 3.5-4"/>');
    let panel = '';
    if (ck.pay === 'online' && upi) {
      const link = 'upi://pay?pa=' + encodeURIComponent(upi) + '&pn=' + encodeURIComponent(FBS.upiName || BRAND) + '&am=' + c.total.toFixed(2) + '&cu=INR&tn=' + encodeURIComponent('Order ' + ck.oid);
      panel = `<section class="dcard upi"><h3>Pay with UPI</h3>
        <div class="prow"><span>UPI ID</span><b>${esc(upi)}</b></div>
        <div class="prow"><span>Amount</span><b>${INR(c.total)}</b></div>
        <button class="lnk" data-act="upi-copy" style="justify-self:start">Copy UPI ID</button>
        <a class="btn block" href="${esc(link)}">Pay ${INR(c.total)} with UPI app</a>
        <p class="sub small">This opens GPay, PhonePe, Paytm or any UPI app on your phone with the amount filled in. After paying, come back here and tap Place order. On a computer, pay to the UPI ID above from your phone.</p>
        <div class="fld"><label for="utr">UPI transaction ID (optional)</label><input id="utr" inputmode="numeric" maxlength="12" placeholder="12 digits, shown after payment"></div></section>`;
    } else if (ck.pay === 'cod') {
      panel = `<section class="dcard"><h3>Cash on Delivery</h3><p class="sub">Please keep ${INR(c.total)} ready. You pay the delivery person when your order arrives at your door.</p></section>`;
    }
    const mrp = c.lines.reduce((x, l) => x + byId(l.id).mrp * l.qty, 0), disc = Math.max(0, mrp - c.sub);
    const label = ck.busy ? 'Placing order…' : ck.pay === 'online' ? 'I have paid, place order' : ck.pay === 'cod' ? 'Place order' : 'Select payment method';
    return pgBar('Payment') + `<div class="pg-in${sl}">${stepper('pay')}
      <section class="amt"><div><small>Amount payable</small><b>${INR(c.total)}</b></div>${disc ? `<span class="sv">You save ${INR(disc)}</span>` : ''}</section>
      <p class="sec-t">Choose payment method</p>
      <div class="pms">${pm('pay-cod', cashIco, 'Cash on Delivery', codOff ? 'Currently unavailable' : 'Pay when your order arrives', ck.pay === 'cod', codOff || ck.busy)}${pm('pay-online', upiIco, 'Prepaid (UPI)', upi ? 'GPay, PhonePe, Paytm or any UPI app' : 'Currently unavailable', ck.pay === 'online', !upi || ck.busy)}</div>
      ${panel}${priceCard(c)}${trustStrip()}
      ${cbar(c, `<button class="btn" data-act="pay-place"${ck.pay && !ck.busy ? '' : ' disabled'}>${label}</button>`)}</div>`;
  }

  async function placeOrder(pay, utr) {
    const ck = S.ck; if (!ck || ck.busy) return;
    const only = ck.only, c = calc(only), a = ckAddr();
    pay = pay === 'online' ? 'online' : 'cod';
    if (!c.lines.length || !a) return;
    if (pay === 'cod' && FB_ON && FBS.cod === false) { toast('Cash on Delivery is currently unavailable'); ck.pay = null; render(); return; }
    if (pay === 'online' && !validUpi(FBS.upi)) { toast('Online payment is currently unavailable'); ck.pay = null; render(); return; }
    const bad = c.lines.find(l => { const p = byId(l.id); return !p || leftOf(p) < l.qty; });
    if (bad) { const p = byId(bad.id); toast(p ? `Only ${leftOf(p)} left of ${p.name}` : 'An item is no longer available'); S.ck = null; showHome(false); renderCart(); return; }
    const now = Date.now(), dAt = ck.dAt || now + rndDays() * DAY;
    const order = { id: ck.oid || genOid(), ts: now, st: 'placed', t: { placed: now }, sAt: now + SHIP_AFTER, dAt, pay,
      items: c.items, sub: c.sub, ship: c.ship, dl: true, total: c.total, to: `${a.name}, ${a.pin}`, addr: { name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: a.lm || '', state: a.state || '', area: a.area || '', city: a.city || '' },
      lines: c.lines.map(l => { const p = byId(l.id); return { id: l.id, name: p.name, qty: l.qty, price: p.price, ret: typeof p.returns === 'number' ? p.returns : undefined, rep: typeof p.replace === 'number' ? p.replace : undefined }; }) };
    if (utr) order.utr = utr;
    ck.busy = true; render();
    if (FB_ON && DB) {
      const done = [];
      try {
        for (const l of c.lines) {
          const p = byId(l.id);
          const r = await DB.ref('spz/sold/' + l.id).transaction(cur => { cur = +cur || 0; if (p.qty != null && cur + l.qty > p.qty) return; return cur + l.qty; });
          if (!r.committed) throw new Error('stock:' + p.name);
          done.push(l);
        }
        order.key = order.id + '-' + Math.random().toString(36).slice(2, 12);
        order.phone = S.user; order.payStatus = pay === 'online' ? 'verify' : 'pending';
        await DB.ref('spz/orders/' + order.key).set(JSON.parse(JSON.stringify(order)));
      } catch (e) {
        await Promise.all(done.map(l => DB.ref('spz/sold/' + l.id).transaction(cur => Math.max(0, (+cur || 0) - l.qty)).catch(() => {})));
        ck.busy = false;
        toast(/^stock:/.test(e.message) ? 'Sorry, ' + e.message.slice(6) + ' just went out of stock' : 'Could not place the order. Check your internet and try again.');
        render(); return;
      }
    }
    const u = U(); u.addrs = [a, ...u.addrs.filter(x => x.id !== a.id)]; syncProf();
    u.orders = [order, ...u.orders].slice(0, 50); save(); watchOrders();
    if (!only) { S.cart = {}; save(); renderCart(); }
    S.ck = null; showHome(false);
    lg = { step: 'done', phone: '', otp: '', err: '', after: null, only: null, order };
    renderModal(); modal.hidden = false;
  }

  const watched = new Set();
  function watchOrders() {
    if (!FB_ON || !DB || !S.user) return;
    U().orders.forEach(o => {
      if (!o.key || watched.has(o.key)) return; watched.add(o.key);
      DB.ref('spz/orders/' + o.key).on('value', sn => {
        const v = sn.val(); if (!v) return;
        const ch = o.st !== v.st || o.payStatus !== v.payStatus;
        if (o.st !== v.st) toast(`Order ${o.id}: ${STL[v.st] || v.st}`);
        o.st = v.st; o.t = Object.assign({ placed: o.ts }, v.t || {}); o.payStatus = v.payStatus; o.reason = v.reason || '';
        if (ch) { save(); if (PAGES.includes(S.view)) render(); }
      }, () => {});
    });
  }

  const U = () => {
    const u = (S.users[S.user] = S.users[S.user] || { profile: null, fav: [], orders: [], addrs: [] });
    if (!Array.isArray(u.addrs)) u.addrs = [];
    if (!u.addrs.length && u.profile) u.addrs.push(Object.assign({ id: 'a' + Date.now().toString(36) }, u.profile));
    return u;
  };
  const syncProf = () => { const u = U(), a = u.addrs[0]; u.profile = a ? { name: a.name, phone: a.phone, addr: a.addr, pin: a.pin, lm: a.lm || '', state: a.state || '' } : null; };
  const isFav = id => !!S.user && U().fav.includes(Number(id));
  const HEART = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>';
  const heart = id => `<button class="hrt" data-act="fav" data-id="${id}" aria-pressed="${isFav(id)}" aria-label="Save to favorites">${HEART}</button>`;
  const rerender = () => S.view === 'detail' ? renderDetail() : PAGES.includes(S.view) ? render() : renderHome();
  function toggleFav(id) {
    if (!S.user) { openLogin(); toast('Login to save favorites'); return; }
    const f = U().fav, i = f.indexOf(Number(id));
    if (i < 0) f.unshift(Number(id)); else f.splice(i, 1);
    save(); rerender(); toast(i < 0 ? 'Saved to favorites' : 'Removed from favorites');
  }
  const dstr = ts => new Date(ts).toLocaleDateString(S.lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const PAGES = ['account', 'orders', 'order', 'fav', 'lang', 'addrs', 'aform', 'chk'];
  const page = $('#page');
  let histOK = false;
  const hidePage = () => { page.hidden = true; document.body.classList.remove('lock'); };
  function pushHist() { S.stack.push({ view: S.view, id: S.id }); try { history.pushState({ n: S.stack.length }, ''); histOK = true; } catch (e) {} }
  function go(view) { closeCart(); closeMenu(); pushHist(); S.view = view; render(); page.scrollTop = 0; jumpTop(); }
  function goBack() {
    const s = S.stack.pop(); if (!s) return showHome(false);
    S.view = s.view; S.id = s.id;
    if (s.view === 'detail') { hidePage(); renderDetail(); } else if (PAGES.includes(s.view)) render(); else { hidePage(); renderHome(); }
  }
  let skipPop = 0;
  const backStep = () => { if (!S.stack.length) return showHome(false); if (histOK) { skipPop++; try { history.back(); } catch (e) { skipPop--; } } goBack(); };
  window.addEventListener('popstate', () => { if (skipPop) { skipPop--; return; } if (S.stack.length) goBack(); else if (S.view !== 'home') showHome(false); });
  function render() {
    if (!PAGES.includes(S.view)) { hidePage(); return S.view === 'detail' ? renderDetail() : renderHome(); }
    const st = page.scrollTop;
    page.hidden = false; document.body.classList.add('lock'); page.innerHTML = pageHTML(); page.scrollTop = st;
  }

  const ARROW = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>';
  const pgBar = t => `<div class="pg-bar"><button class="pg-back" data-act="pback" aria-label="Back">${ARROW}</button><h1>${t}</h1></div>`;
  const emptyBox = (h, p) => `<div class="empty"><h3>${h}</h3><p>${p}</p><button class="btn" data-act="shop">Start shopping</button></div>`;
  const DAY = 864e5, SHIP_AFTER = DAY, DELIVER_AFTER = 4 * DAY;
  const RANK = { placed: 0, shipped: 1, delivered: 2 };
  const STL = { placed: 'Order placed', accepted: 'Confirmed', shipped: 'In transit', delivered: 'Delivered', cancelled: 'Cancelled', rejected: 'Rejected' };
  const dead = o => o.st === 'cancelled' || o.st === 'rejected';
  const loc = () => S.lang === 'hi' ? 'hi-IN' : 'en-IN';
  const dwk = ts => new Date(ts).toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' });
  const dmon = ts => new Date(ts).toLocaleDateString(loc(), { day: 'numeric', month: 'short' });
  const dfull = ts => { const d = new Date(ts); return d.toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' }) + " '" + String(d.getFullYear()).slice(2) + ' · ' + d.toLocaleTimeString(loc(), { hour: 'numeric', minute: '2-digit' }); };
  const payName = p => p === 'cod' ? 'Cash on Delivery' : p === 'online' ? 'Prepaid' : '';
  function syncOrder(o) {
    let ch = false; const now = Date.now();
    if (!o.st) { o.st = 'placed'; ch = true; }
    if (!o.t) { o.t = { placed: o.ts }; ch = true; }
    if (!o.sAt) { o.sAt = o.ts + SHIP_AFTER; ch = true; }
    if (!o.dAt) { o.dAt = o.ts + DELIVER_AFTER; ch = true; }
    if (!FB_ON && o.st === 'placed' && now >= o.sAt) { o.st = 'shipped'; o.t.shipped = o.sAt; ch = true; }
    if (!FB_ON && o.st === 'shipped' && now >= o.dAt) { o.st = 'delivered'; o.t.delivered = o.dAt; ch = true; }
    return ch;
  }
  const syncAll = () => { let ch = false; U().orders.forEach(o => { if (syncOrder(o)) ch = true; }); if (ch) save(); };
  window.setOrderStatus = (id, st) => {
    const o = S.user && U().orders.find(x => x.id === id);
    if (!o) return 'Order nahi mila. Login karke sahi order ID likho.';
    const now = Date.now(); syncOrder(o);
    if (st === 'placed') { o.st = 'placed'; delete o.t.shipped; delete o.t.delivered; delete o.t.cancelled; o.sAt = now + SHIP_AFTER; o.dAt = now + DELIVER_AFTER; }
    else if (st === 'shipped') { o.st = 'shipped'; o.t.shipped = now; delete o.t.delivered; delete o.t.cancelled; o.sAt = now; o.dAt = Math.max(o.dAt, now + DAY); }
    else if (st === 'delivered') { o.st = 'delivered'; o.t.shipped = o.t.shipped || now; o.t.delivered = now; delete o.t.cancelled; o.sAt = Math.min(o.sAt, now); o.dAt = now; }
    else if (st === 'cancelled') { o.st = 'cancelled'; o.t.cancelled = now; }
    else return "st 'placed', 'shipped', 'delivered' ya 'cancelled' likho.";
    save(); if (PAGES.includes(S.view)) render();
    return o.id + ' -> ' + o.st;
  };
  const stSub = o => o.st === 'delivered' ? 'on ' + dwk(o.t.delivered) : dead(o) ? 'on ' + dwk(o.t.cancelled || o.t.rejected || o.ts) : 'Expected by ' + dwk(o.dAt);
  function lineChips(l, o) {
    const out = [], d = o.t && o.t.delivered;
    if (dead(o)) return out;
    const one = (v, word, noText, closed) => {
      if (typeof v !== 'number') return;
      if (v <= 0) out.push([noText, 1]);
      else if (d) { const u = d + v * DAY; out.push(Date.now() <= u ? [word + ' till ' + dmon(u), 0] : [closed, 1]); }
      else out.push([v + '-day ' + (word === 'Return' ? 'returns' : 'replacement'), 0]);
    };
    one(l.ret, 'Return', 'No returns', 'Return window closed');
    one(l.rep, 'Replacement', 'No replacement', 'Replacement window closed');
    return out;
  }
  const chipsHTML = arr => arr.map(([t, bad]) => `<span class="ochip${bad ? ' no' : ''}">${esc(t)}</span>`).join('');
  const thumb = l => { const p = byId(l.id); return `<span class="ph oth"${p ? ` style="--h:${p.h}"` : ''}>${p ? art(p) : ''}</span>`; };
  const orderRow = o => {
    const f = o.lines[0], n = o.lines.length;
    const ch = (o.pay ? `<span class="ochip pay">${o.pay === 'cod' ? 'COD' : 'Prepaid'}</span>` : '') + (n === 1 ? chipsHTML(lineChips(f, o)) : '');
    return `<button class="oc" data-act="order-open" data-id="${esc(o.id)}" aria-label="Order ${esc(o.id)}">
      <span class="oc-img">${thumb(f)}</span>
      <span class="oc-body">
        <span class="oc-n">${esc(f.name)}${n > 1 ? ` <small>+ ${n - 1} more</small>` : ''}</span>
        <span class="oc-s"><span class="st ${o.st}">${STL[o.st]}</span><span class="sd">${esc(stSub(o))}</span></span>
        <span class="oc-m">Ordered ${dstr(o.ts)} · ${esc(o.id)}</span>
        ${ch ? `<span class="oc-c">${ch}</span>` : ''}
      </span>
      <span class="oc-r"><b>${INR(o.total)}</b><span class="chev" aria-hidden="true">›</span></span>
    </button>`;
  };
  function stepsHTML(o) {
    const t = o.t, r = RANK[o.st] || 0, st = [{ n: (FB_ON && o.st === 'placed') ? 'Order placed' : 'Order Confirmed', at: (FB_ON && t.accepted) || t.placed, done: true }];
    if (dead(o)) st.push({ n: o.st === 'rejected' ? 'Rejected' : 'Cancelled', at: t.cancelled || t.rejected, done: true, bad: true });
    else {
      st.push({ n: 'Shipped', at: t.shipped, done: r >= 1 });
      st.push(r >= 2 ? { n: 'Delivered', at: t.delivered, done: true } : { n: 'Delivery expected by ' + dwk(o.dAt), done: false });
    }
    return `<div class="tl">${st.map((x, i) => {
      const nx = st[i + 1];
      const cls = ['tl-s', x.done ? 'done' : '', x.bad ? 'bad' : '', nx && nx.done ? (nx.bad ? 'lnb' : 'ln') : '', x.done && !(nx && nx.done) ? 'cur' : ''].filter(Boolean).join(' ');
      return `<div class="${cls}"><div class="tl-t">${x.n}</div>${x.done && x.at ? `<div class="tl-d">${dfull(x.at)}</div>` : ''}</div>`;
    }).join('')}</div>`;
  }
  function orderPage(o) {
    const a = o.addr, sub = o.sub != null ? o.sub : o.total - (o.ship || 0);
    const items = o.lines.map(l => { const c = lineChips(l, o); return `<div class="oi">${thumb(l)}<div class="oi-b"><b>${esc(l.name)}</b><span>${l.qty | 0} × ${INR(l.price)} = ${INR(l.price * l.qty)}</span>${c.length ? `<div class="oc-c">${chipsHTML(c)}</div>` : ''}</div></div>`; }).join('');
    return `
      <section class="dcard"><div class="oh"><b>${esc(o.id)}</b><span>Ordered ${dstr(o.ts)}</span></div><div class="oc-s"><span class="st ${o.st}">${STL[o.st]}</span><span class="sd">${esc(stSub(o))}</span></div>${o.st === 'rejected' && o.reason ? `<p class="sub" style="margin-top:.5rem">Reason: ${esc(o.reason)}</p>` : ''}</section>
      <section class="dcard"><h3>Order status</h3>${stepsHTML(o)}${o.st === 'placed' ? '<button class="btn alt block" data-act="cancel-ask" style="margin-top:.5rem">Cancel order</button>' : ''}</section>
      <section class="dcard"><h3>Items</h3>${items}</section>
      ${o.pay ? `<section class="dcard"><h3>Payment</h3><b>${o.pay === 'cod' ? 'Cash on Delivery' : 'Online payment (Prepaid)'}</b><p class="sub">${o.pay === 'cod' ? (o.payStatus === 'paid' ? 'Paid ' + INR(o.total) + ' on delivery.' : 'Pay ' + INR(o.total) + ' when your order arrives.') : (o.payStatus === 'paid' ? 'Payment of ' + INR(o.total) + ' received.' : 'Payment of ' + INR(o.total) + ' submitted. The seller will confirm it shortly.')}</p></section>` : ''}
      <section class="dcard"><h3>Delivery address</h3>${a ? `<b>${esc(a.name)}</b><p class="sub">${addrLine(a)}</p><p class="sub">+91 ${esc(a.phone)}</p>` : `<p class="sub">${esc(o.to || '')}</p>`}</section>
      <section class="dcard"><h3>Price details</h3>
        <div class="prow"><span>Subtotal</span><span>${INR(sub)}</span></div>
        ${o.dl ? `<div class="prow"><span>Delivery</span><span>${o.ship ? INR(o.ship) : 'Free'}</span></div>` : ''}
        <div class="prow t"><span>Total</span><span>${INR(o.total)}</span></div>
      </section>`;
  }

  function pageHTML() {
    const u = U(), pr = u.profile;
    if (S.view === 'chk') return chkHTML();
    if (S.view === 'addrs') return pgBar('Addresses') + `<div class="pg-in">${addrListHTML(false)}</div>`;
    if (S.view === 'aform') return pgBar(S.af && S.af.id ? 'Edit address' : 'Add address') + `<div class="pg-in">${addrFormHTML(S.af && S.af.id)}</div>`;
    if (S.view === 'order') { syncAll(); const o = u.orders.find(x => x.id === S.oid); if (o) return pgBar('Order details') + `<div class="pg-in">${orderPage(o)}</div>`; S.view = 'orders'; }
    if (S.view === 'orders') { syncAll(); return pgBar('Orders') + `<div class="pg-in ol">${u.orders.length ? u.orders.map(orderRow).join('') : emptyBox('No orders yet', 'Your placed orders will show up here.')}</div>`; }
    if (S.view === 'fav') { const l = u.fav.map(byId).filter(Boolean); return pgBar('Favorites') + `<div class="pg-in wide">${l.length ? `<div class="grid">${l.map(card).join('')}</div>` : emptyBox('No favorites yet', 'Tap the heart on a product to save it here.')}</div>`; }
    if (S.view === 'lang') return pgBar('Language') + `<div class="pg-in"><p class="sub" style="margin-bottom:1rem">Choose your language</p><div class="alist">${[['en', 'English'], ['hi', 'हिन्दी']].map(([c, n]) => `<button class="rh lopt" data-act="lang" data-l="${c}" aria-pressed="${S.lang === c}"><span class="rl">${n}</span><span class="ck" aria-hidden="true">✓</span></button>`).join('')}</div></div>`;
    const name = pr ? pr.name.trim() : '';
    const ico = (d, c) => `<span class="ri">${ICO(d)}</span>`;
    const rows = [
      ['orders', 'Orders', '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', u.orders.length],
      ['fav', 'Favorites', '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>', u.fav.length],
      ['lang', 'Language', '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>', S.lang === 'hi' ? 'हिन्दी' : 'English'],
      ['addrs', 'Addresses', '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', u.addrs.length || null]];
    return pgBar('My account') + `
      <div class="pg-in">
        <div class="ahead"><div class="av" aria-hidden="true">${esc((name || '+')[0].toUpperCase())}</div><div><h1>${name ? esc(name) : '+91 ' + esc(S.user)}</h1><p>${mask(S.user)}</p></div></div>
        <div class="alist">
          ${rows.map(r => `<div class="ar"><button class="rh" data-act="goto" data-to="${r[0]}">${ico(r[2])}<span class="rl">${r[1]}</span>${r[3] === null ? '<span class="rc">Add</span>' : `<span class="rc">${r[3]}</span>`}<span class="chev" aria-hidden="true">›</span></button></div>`).join('')}
          <div class="ar"><button class="rh out" data-act="logout"><span class="ri">${ICO('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>')}</span><span class="rl">Log out</span></button></div>
        </div>
      </div>`;
  }

  const HI = {
    'Free delivery on orders above ₹999': '₹999 से ऊपर के ऑर्डर पर फ्री डिलीवरी', '7-day easy returns': '7 दिन में आसान रिटर्न', '100% genuine products': '100% असली प्रोडक्ट',
    'Login': 'लॉगिन', 'Cart': 'कार्ट', 'Your cart': 'आपका कार्ट', 'Secure checkout': 'सुरक्षित चेकआउट', 'Easy returns': 'आसान रिटर्न', 'Genuine products': 'असली प्रोडक्ट',
    'Everyday things,': 'रोज़ की चीज़ें,', 'chosen with care.': 'पूरी परख के साथ चुनी हुई।',
    'Headphones, bags, lamps and more. Hand-picked, fairly priced and delivered to your door.': 'हेडफ़ोन, बैग, लैंप और बहुत कुछ। चुने हुए प्रोडक्ट, सही दाम, सीधे आपके दरवाज़े तक।',
    'Shop the collection': 'कलेक्शन देखें', 'Shop now': 'अभी खरीदें', 'In transit': 'रास्ते में', 'Delivered': 'डिलीवर हो गया', 'Cancelled': 'रद्द', 'Order Confirmed': 'ऑर्डर कन्फ़र्म', 'Shipped': 'शिप हो गया', 'Order status': 'ऑर्डर स्टेटस', 'Order details': 'ऑर्डर विवरण', 'Payment': 'पेमेंट', 'Payment method': 'पेमेंट का तरीका', 'Delivery address': 'डिलीवरी पता', 'Price details': 'कीमत विवरण', 'Cancel order': 'ऑर्डर रद्द करें', 'Cancel this order?': 'ऑर्डर रद्द करें?', 'Yes, cancel order': 'हाँ, रद्द करें', 'Keep order': 'ऑर्डर रखें', 'Cash on Delivery': 'कैश ऑन डिलीवरी', 'Online payment (Prepaid)': 'ऑनलाइन पेमेंट (प्रीपेड)', 'Prepaid': 'प्रीपेड', 'Place order': 'ऑर्डर करें', 'View order': 'ऑर्डर देखें', 'Delivery': 'डिलीवरी', 'Free': 'फ्री', 'No returns': 'रिटर्न नहीं', 'No replacement': 'रिप्लेसमेंट नहीं', 'Curated products': 'चुने हुए प्रोडक्ट', 'Average rating': 'औसत रेटिंग', '7 days': '7 दिन', 'Bestseller': 'बेस्टसेलर',
    'Free delivery': 'फ्री डिलीवरी', 'Above ₹999': '₹999 से ऊपर', '7-day returns': '7 दिन रिटर्न', 'No questions asked': 'कोई सवाल नहीं', 'Safe and private': 'सुरक्षित और प्राइवेट', 'Quality checked': 'क्वालिटी जाँची हुई',
    'All': 'सभी', 'Electronics': 'इलेक्ट्रॉनिक्स', 'Fashion': 'फ़ैशन', 'Home': 'घर', 'All products': 'सभी प्रोडक्ट', 'Nothing matched your search': 'आपकी खोज से कुछ नहीं मिला', 'Show all products': 'सभी प्रोडक्ट दिखाएँ',
    '← Back to products': '← प्रोडक्ट पर वापस', 'Add to cart': 'कार्ट में डालें', 'You may also like': 'आपको ये भी पसंद आ सकते हैं', 'Free delivery above ₹999': '₹999 से ऊपर फ्री डिलीवरी',
    'Your cart is empty': 'आपका कार्ट खाली है', 'Add something you like and it will show up here.': 'अपनी पसंद की चीज़ जोड़ें, वो यहाँ दिखेगी।', 'Start shopping': 'खरीदारी शुरू करें', 'Subtotal': 'कुल', 'Checkout': 'चेकआउट', 'Remove': 'हटाएँ',
    'Login or sign up': 'लॉगिन या साइन अप', 'Enter your mobile number and we will send a 6-digit OTP.': 'अपना मोबाइल नंबर डालें, हम 6 अंकों का OTP भेजेंगे।', 'Mobile number': 'मोबाइल नंबर', 'Get OTP': 'OTP पाएँ', 'Cancel': 'रद्द करें',
    'Enter the OTP': 'OTP डालें', '6-digit OTP': '6 अंकों का OTP', 'Verify and login': 'जाँचें और लॉगिन करें', 'Change number': 'नंबर बदलें', 'Resend OTP': 'OTP दोबारा भेजें',
    'Order placed': 'ऑर्डर हो गया', 'Continue shopping': 'खरीदारी जारी रखें', 'Order number': 'ऑर्डर नंबर', 'Items': 'आइटम', 'Total': 'कुल योग', 'Deliver to': 'डिलीवरी पता',
    'My account': 'मेरा खाता', 'Orders': 'ऑर्डर', 'Favorites': 'पसंदीदा', 'Language': 'भाषा', 'Address': 'पता', 'Log out': 'लॉग आउट', 'Add': 'जोड़ें',
    'No orders yet': 'अभी कोई ऑर्डर नहीं', 'Your placed orders will show up here.': 'आपके ऑर्डर यहाँ दिखेंगे।', 'No favorites yet': 'अभी कोई पसंदीदा नहीं', 'Tap the heart on a product to save it here.': 'किसी प्रोडक्ट पर दिल दबाएँ, वो यहाँ सेव हो जाएगा।',
    'Choose your language': 'अपनी भाषा चुनें', 'Name': 'नाम', 'Pincode': 'पिनकोड', 'Landmark': 'लैंडमार्क', 'Landmark (optional)': 'लैंडमार्क (ज़रूरी नहीं)', 'No address added yet.': 'अभी कोई पता नहीं जोड़ा गया।',
    'Add address': 'पता जोड़ें', 'Change details': 'विवरण बदलें', 'Your delivery details': 'आपके डिलीवरी विवरण', 'We will use these to deliver your orders.': 'हम इनका उपयोग आपके ऑर्डर पहुँचाने में करेंगे।',
    'Save details': 'विवरण सेव करें', 'Fill later': 'बाद में भरें', 'Log out?': 'लॉग आउट करें?', 'You will need to login again with an OTP.': 'दोबारा OTP से लॉगिन करना होगा।', 'Yes, log out': 'हाँ, लॉग आउट करें', 'Stay logged in': 'लॉगिन रहने दें',
    'Save': 'सेव करें', 'Saved': 'सेव हो गया', 'item': 'आइटम', 'items': 'आइटम', 'Search headphones, bags, lamps…': 'हेडफ़ोन, बैग, लैंप खोजें…',
    'Enter your full name.': 'अपना पूरा नाम डालें।', 'Enter a valid 10-digit mobile number.': 'सही 10 अंकों का मोबाइल नंबर डालें।', 'Enter your full address with house number, street and city.': 'मकान नंबर, गली और शहर के साथ पूरा पता डालें।', 'Enter a valid 6-digit pincode.': 'सही 6 अंकों का पिनकोड डालें।',
    'Optional. Helps the delivery person find you.': 'ज़रूरी नहीं। डिलीवरी वाले को आपको ढूँढने में मदद मिलती है।', 'Add your delivery address to place your order.': 'ऑर्डर करने के लिए अपना डिलीवरी पता जोड़ें।',
    'Currently unavailable': 'अभी उपलब्ध नहीं', 'Select address': 'पता चुनें', 'Add address': 'पता जोड़ें', 'Edit address': 'पता बदलें', 'Addresses': 'पते', 'Order summary': 'ऑर्डर समरी', 'Confirm': 'कन्फ़र्म करें', 'Confirm address': 'पता कन्फ़र्म करें', '+ Add new address': '+ नया पता जोड़ें', 'Shipping': 'शिपिंग', 'Edit': 'बदलें', 'Delete': 'हटाएँ', 'Save address': 'पता सेव करें', 'Change address': 'पता बदलें', 'Order date': 'ऑर्डर की तारीख', 'Expected delivery': 'डिलीवरी की तारीख', 'Delivery by': 'डिलीवरी तक', 'Out of stock': 'स्टॉक खत्म', 'Confirmed': 'कन्फ़र्म', 'Rejected': 'अस्वीकृत', 'State': 'राज्य', 'Select state': 'राज्य चुनें', 'Select your state.': 'अपना राज्य चुनें।', 'Login successful': 'लॉगिन हो गया', 'Details saved': 'विवरण सेव हो गए', 'Saved to favorites': 'पसंदीदा में सेव किया', 'Removed from favorites': 'पसंदीदा से हटाया', 'Login to save favorites': 'पसंदीदा सेव करने के लिए लॉगिन करें', 'You have been logged out': 'आप लॉग आउट हो गए'
  };
  const ORIG = new WeakMap();
  let langObs, langPend = false;
  function applyLang() {
    if (langObs) langObs.disconnect();
    const hi = S.lang === 'hi';
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    let n;
    while ((n = w.nextNode())) {
      let o = ORIG.get(n); if (o === undefined) { o = n.nodeValue; ORIG.set(n, o); }
      const k = o.trim(), nv = hi && HI[k] ? o.replace(k, HI[k]) : o;
      if (n.nodeValue !== nv) n.nodeValue = nv;
    }
    const q = $('#q'); if (!q.dataset.en) q.dataset.en = q.placeholder;
    q.placeholder = hi ? (HI[q.dataset.en] || q.dataset.en) : q.dataset.en;
    if (langObs) langObs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  langObs = new MutationObserver(() => { if (S.lang === 'hi' && !langPend) { langPend = true; requestAnimationFrame(() => { langPend = false; applyLang(); }); } });
  function setLang(l) {
    S.lang = l === 'hi' ? 'hi' : 'en'; save();
    document.documentElement.lang = S.lang;
    if (PAGES.includes(S.view)) render();
    applyLang();
  }

  const actions = {
    home: () => { showHome(true); jumpTop(); },
    'desc-more': () => { S.dx = !S.dx; renderDetail(); },
    'gal-prev': () => galGo(Math.max(0, S.gi - 1)),
    'gal-next': () => galGo(S.gi + 1),
    'gal-go': t => galGo(Number(t.dataset.i)),
    'best-go': t => best && best.go(Number(t.dataset.i)),
    'hero-go': () => { const c = document.getElementById('collection'); if (c) c.scrollIntoView(); },
    shop: () => { closeCart(); showHome(false); jumpTop(); },
    back: () => backStep(),
    pback: () => pageBack(),
    goto: t => { S.pend = null; go(t.dataset.to); },
    open: t => openProduct(t.dataset.id),
    'open-cart': t => { closeCart(); openProduct(t.dataset.id); },
    cat: t => { S.cat = t.dataset.cat; renderHome(); },
    'dq+': () => { const c = qtyOf(S.id); if (c) return setQty(S.id, c + 1); S.dq = Math.min(Math.max(1, maxQ(byId(S.id))), S.dq + 1); renderDetail(); },
    'dq-': () => { const c = qtyOf(S.id); if (c) return setQty(S.id, c - 1); S.dq = Math.max(1, S.dq - 1); renderDetail(); },
    add: () => {
      const p = byId(S.id), before = qtyOf(p.id);
      if (before) return openCart();
      const n = Math.min(maxQ(p), S.dq);
      setQty(p.id, n);
      toast(n === S.dq ? `Added ${S.dq} × ${p.name}` : `Only ${maxQ(p)} available`);
    },
    inc: t => setQty(t.dataset.id, qtyOf(t.dataset.id) + 1),
    dec: t => setQty(t.dataset.id, qtyOf(t.dataset.id) - 1),
    rm: t => { const p = byId(t.dataset.id); setQty(t.dataset.id, 0); toast(`Removed ${p.name}`); },
    'cart-open': openCart,
    'cart-close': closeCart,
    checkout: () => checkout(),
    'buy-now': () => checkout({ id: S.id, qty: qtyOf(S.id) || S.dq }),
    account: () => { if (!S.user) return openLogin(); go('account'); },
    lang: t => setLang(t.dataset.l),
    fav: t => toggleFav(t.dataset.id),
    logout: () => { lg = { step: 'logout' }; renderModal(); modal.hidden = false; },
    'order-open': t => { S.oid = t.dataset.id; go('order'); },
    'order-view': t => { closeModal(); S.oid = t.dataset.id; go('order'); },
    anew: () => { S.af = { id: null }; if (S.view === 'chk' && S.ck) { S.ck.step = 'form'; render(); page.scrollTop = 0; } else go('aform'); },
    aedit: t => { S.af = { id: t.dataset.id }; if (S.view === 'chk' && S.ck) { S.ck.step = 'form'; render(); page.scrollTop = 0; } else go('aform'); },
    adel: t => {
      if (!confirm('Delete this address?')) return;
      const u = U(), id = t.dataset.id; u.addrs = u.addrs.filter(x => x.id !== id); syncProf();
      if (S.ck && S.ck.sel === id) S.ck.sel = u.addrs[0] ? u.addrs[0].id : null;
      save(); renderAcct(); render();
    },
    'ck-sel': t => { if (S.ck) { S.ck.sel = t.dataset.id; render(); } },
    'ck-confirm': () => { const ck = S.ck; if (!ck || !ckAddr()) return; ck.dAt = ck.dAt || Date.now() + rndDays() * DAY; ck.step = 'sum'; render(); page.scrollTop = 0; },
    'ck-change': () => { if (S.ck) { S.ck.step = 'addr'; render(); page.scrollTop = 0; } },
    'ck-next': () => { const ck = S.ck; if (!ck) return; ck.oid = ck.oid || genOid(); ck.step = 'pay'; ck.pay = (FB_ON && FBS.cod === false) ? (validUpi(FBS.upi) ? 'online' : null) : 'cod'; render(); page.scrollTop = 0; },
    'ck-q': t => { const ck = S.ck, id = Number(t.dataset.id), d = Number(t.dataset.d), p = byId(id); if (!ck || !p) return; if (ck.only) ck.only.qty = Math.max(1, Math.min(maxQ(p), ck.only.qty + d)); else { const n = qtyOf(id) + d; if (n < 1) return; setQty(id, n); } render(); },
    'ck-rm': t => { const ck = S.ck; if (!ck || ck.only || Object.keys(S.cart).length < 2) return; setQty(Number(t.dataset.id), 0); render(); },
    'pay-cod': () => { const ck = S.ck; if (!ck || ck.busy || (FB_ON && FBS.cod === false)) return; ck.pay = 'cod'; render(); },
    'pay-online': () => { const ck = S.ck; if (!ck || ck.busy || !validUpi(FBS.upi)) return; ck.pay = 'online'; render(); },
    'pay-place': () => { const ck = S.ck; if (!ck || ck.busy || !ck.pay) return; const el = $('#utr'); placeOrder(ck.pay, ck.pay === 'online' && el ? el.value.replace(/\D/g, '') : ''); },
    'upi-copy': () => { const done = () => toast('UPI ID copied'); try { navigator.clipboard.writeText(FBS.upi).then(done, () => toast(FBS.upi)); } catch (e) { toast(FBS.upi); } },
    'cancel-ask': () => { lg = { step: 'cancel' }; renderModal(); modal.hidden = false; },
    'cancel-yes': async () => {
      const o = S.user && U().orders.find(x => x.id === S.oid);
      if (o) syncOrder(o);
      if (o && o.st === 'placed') {
        if (FB_ON && DB && o.key) {
          try {
            const r = await DB.ref('spz/orders/' + o.key).transaction(cur => { if (cur === null) return null; if (cur.st !== 'placed') return; cur.st = 'cancelled'; cur.t = cur.t || {}; cur.t.cancelled = Date.now(); cur.restocked = true; return cur; });
            if (!r.committed) { toast('The seller has already accepted this order, so it cannot be cancelled'); closeModal(); return; }
            o.lines.forEach(l => DB.ref('spz/sold/' + l.id).transaction(c => Math.max(0, (+c || 0) - l.qty)));
          } catch (e) { toast('Could not cancel. Check your internet and try again.'); closeModal(); return; }
        }
        o.st = 'cancelled'; o.t.cancelled = Date.now(); save(); toast('Order cancelled');
      }
      closeModal(); if (PAGES.includes(S.view)) render();
    },
    'logout-yes': () => { S.user = null; S.sec = null; save(); renderAcct(); closeMenu(); closeModal(); showHome(true); jumpTop(); toast('You have been logged out'); },
    'modal-close': closeModal,
    'change-num': () => { lg.step = 'phone'; lg.err = ''; renderModal(); },
    resend: () => { sendOtp(); toast('A new OTP has been generated'); }
  };
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-act]');
    if (t && actions[t.dataset.act]) { actions[t.dataset.act](t, e); return; }
    if (!e.target.closest('.rel')) closeMenu();
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.card')) { e.preventDefault(); openProduct(e.target.dataset.id); }
    if (e.key === 'Escape') { if (!modal.hidden) closeModal(); else if (drawer.classList.contains('open')) closeCart(); else if (!page.hidden) pageBack(); else closeMenu(); }
  });
  document.addEventListener('input', e => {
    const t = e.target;
    if (['phone', 'otp', 'pphone', 'ppin', 'utr'].includes(t.id)) t.value = t.value.replace(/\D/g, '');
    if (AV[t.id] && t.dataset.t) showFE(t.id);
    if (t.id === 'ppin') {
      if (t.value.length === 6) { if (PL.pin !== t.value) lookupPin(t.value); }
      else { plSeq++; PL = { pin: '', status: null, offices: [], district: '', state: '' }; paintPin(); }
    }
  });
  document.addEventListener('focusout', e => { const t = e.target; if (t && AV[t.id]) { t.dataset.t = '1'; showFE(t.id); } });
  document.addEventListener('submit', e => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'searchForm') { return; }
    if (id === 'fPhone') {
      const v = $('#phone').value.replace(/\D/g, '');
      lg.phone = v;
      if (!/^[6-9]\d{9}$/.test(v)) { lg.err = 'Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.'; $('#err').textContent = lg.err; $('#phone').focus(); return; }
      sendOtp();
    }
    if (id === 'fAddr') {
      const v = k => $('#' + k).value.trim();
      let first = null;
      ['pname', 'pphone', 'paddr', 'ppin'].forEach(k => { const m = showFE(k); if (m && !first) first = k; });
      const name = v('pname'), ph = v('pphone').replace(/\D/g, ''), addr = v('paddr'), pin = v('ppin').replace(/\D/g, ''), lm = v('plm'), state = v('pstate'), err = $('#err');
      err.textContent = '';
      if (!first) {
        if (PL.pin !== pin) { lookupPin(pin); err.textContent = 'Checking pincode… please tap Save address again.'; return; }
        if (PL.status === 'wait') { err.textContent = 'Checking pincode… please wait a moment.'; return; }
        if (PL.status === 'bad') { $('#e_ppin').textContent = 'Pincode not found. Please enter a valid pincode'; $('#ppin').classList.add('bad'); first = 'ppin'; }
        else if (!state) { err.textContent = 'Select your state.'; $('#pstate').focus(); return; }
      }
      if (first) { $('#' + first).focus(); return; }
      const area = PL.status === 'ok' ? ($('#parea') ? $('#parea').value : '') : '', city = PL.status === 'ok' ? PL.district : '';
      const u = U(), eid = S.af && S.af.id;
      let a = eid ? u.addrs.find(x => x.id === eid) : null;
      if (a) Object.assign(a, { name, phone: ph, addr, pin, lm, state, area, city });
      else { a = { id: 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), name, phone: ph, addr, pin, lm, state, area, city }; u.addrs.unshift(a); }
      syncProf(); save(); renderAcct(); S.af = null;
      toast('Details saved');
      if (S.view === 'chk' && S.ck) { S.ck.sel = a.id; S.ck.step = 'addr'; render(); page.scrollTop = 0; } else backStep();
    }
    if (id === 'fOtp') {
      const v = $('#otp').value;
      if (v !== lg.sent) { lg.err = 'That OTP does not match. Check the code and try again.'; $('#err').textContent = lg.err; $('#otp').focus(); return; }
      S.user = lg.phone; U(); save(); renderAcct(); watchOrders();
      const after = lg.after, only = lg.only;
      toast('Login successful');
      closeModal();
      if (after === 'checkout') checkout(only);
    }
  });
  $('#searchForm').addEventListener('input', e => {
    if (e.target.id !== 'q') return;
    S.q = e.target.value; S.view = 'home'; renderHome();
  });

  renderAcct(); renderCart(); renderHome();
  document.documentElement.lang = S.lang; applyLang();

  function saveCache() {
    const base = { brand: FBS.brand, custom: FBS.custom, sold: SOLD, cod: FBS.cod, upi: FBS.upi, upiName: FBS.upiName };
    try { localStorage.setItem(CK, JSON.stringify(Object.assign(base, { products: FBS.products }))); }
    catch (e) { try { localStorage.setItem(CK, JSON.stringify(Object.assign(base, { products: (FBS.products || []).map(x => Object.assign({}, x, { imgs: (x.imgs || []).slice(0, 1) })) }))); } catch (e2) {} }
  }
  function brandPaint() {
    document.title = BRAND;
    $('#brandBtn').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
    $('#footBrand').innerHTML = `${logoHTML()}<span class="bn">${esc(BRAND)}</span>`;
    $('#footTag').textContent = TAGLINE;
  }
  function catalogChanged() {
    if (FBS.custom && !FBS.products) return;
    useCatalog(FBS.custom ? FBS.products.map(fromFB) : STATIC); setCats();
    if (S.cat !== 'All' && !CATS.includes(S.cat)) S.cat = 'All';
    let ch = false;
    Object.keys(S.cart).forEach(id => { const p = byId(id), m = p ? maxQ(p) : 0; if (m <= 0) { delete S.cart[id]; ch = true; } else if (S.cart[id] > m) { S.cart[id] = m; ch = true; } });
    if (ch) save();
    renderCart(); saveCache();
    if (S.view === 'detail' && !byId(S.id)) showHome(false); else rerender();
  }
  if (FB_ON) {
    try {
      firebase.initializeApp(FIREBASE_CONFIG); DB = firebase.database();
      const on = (path, fn) => DB.ref(path).on('value', sn => fn(sn.val()), () => {});
      on('spz/custom', v => { FBS.custom = !!v; catalogChanged(); });
      on('spz/products', v => { FBS.products = v ? Object.values(v).filter(Boolean) : []; catalogChanged(); });
      on('spz/sold', v => { Object.keys(SOLD).forEach(k => delete SOLD[k]); Object.assign(SOLD, v || {}); catalogChanged(); });
      on('spz/brand', v => {
        v = v || {}; FBS.brand = v;
        BRAND = v.name || 'Smart Products Zone'; TAGLINE = v.tagline || 'Aapki gali ki dukaan, ab online.'; LOGO = v.logo || 'images/logo.png';
        brandPaint(); saveCache();
      });
      const ckRefresh = () => { if (S.view === 'chk' && S.ck && S.ck.step === 'pay' && !S.ck.busy) { if (S.ck.pay === 'online' && !validUpi(FBS.upi)) S.ck.pay = null; if (S.ck.pay === 'cod' && FBS.cod === false) S.ck.pay = null; render(); } };
      on('spz/settings/cod', v => { FBS.cod = v !== false; saveCache(); ckRefresh(); });
      on('spz/settings/upi', v => { FBS.upi = typeof v === 'string' ? v.trim() : ''; saveCache(); ckRefresh(); });
      on('spz/settings/upiName', v => { FBS.upiName = typeof v === 'string' ? v.trim() : ''; saveCache(); ckRefresh(); });
      watchOrders();
    } catch (e) { console.warn('Firebase start nahi hua', e); }
  }
})();
