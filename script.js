// ---------- Menu data ----------
const CATEGORY_LABEL = { ala: 'Ala Carte', nasi: 'Menu Nasi', beverage: 'Beverage', coffee: 'Coffee' };
const MENU = [
  // Ala carte
  ['ala', 'Dendeng Batokok', 'Dendeng sapi, irisan cabai hijau & bawang, minyak kelapa.', '26K', 'dendeng-batokok', 'Signature'],
  ['ala', 'Dendeng Lambok', 'Dendeng sapi dengan sambal balado merah basah.', '26K', 'dendeng-lambok'],
  ['ala', 'Paru Berempah', 'Paru goreng bumbu rempah dengan irisan cabai.', '22K', 'paru-berempah'],
  ['ala', 'Cumi Cabe Ijo', 'Cumi asin dengan irisan cabe hijau.', '20K', 'cumi-cabe-ijo'],
  ['ala', 'Telur Barendo', 'Telur goreng Padang yang gurih dan krispi.', '18K', 'telur-barendo'],
  ['ala', 'Ayam Pop', 'Ayam Pop dengan kuah putih dan sambal.', '32K', 'ayam-pop'],
  ['ala', 'Ayam Berempah', 'Ayam goreng dengan bumbu rempah kari khas dan sambal.', '32K', 'ayam-berempah'],
  ['ala', 'Ayam Masak Lemak', 'Ayam dengan kuah santan dan irisan cabai.', '32K', 'ayam-masak-lemak'],
  // Nasi
  ['nasi', 'Nasi Dendeng Batokok', 'Nasi, Dendeng Batokok, labu.', '32K', 'nasi-dendeng'],
  ['nasi', 'Nasi Dendeng Batokok Spesial', 'Nasi, Dendeng Batokok, sambalado tanak, labu.', '37K', 'nasi-dendeng', 'Spesial'],
  ['nasi', 'Nasi Dendeng Lambok', 'Nasi, Dendeng Lambok, labu.', '32K', 'nasi-lambok'],
  ['nasi', 'Nasi Dendeng Lambok Spesial', 'Nasi, Dendeng Lambok, sambalado tanak, labu.', '37K', 'nasi-lambok', 'Spesial'],
  ['nasi', 'Nasi Paru Berempah', 'Nasi, Paru Berempah, labu.', '28K', 'paru-berempah'],
  ['nasi', 'Nasi Paru Berempah Spesial', 'Nasi, Paru Berempah, sambalado tanak, labu.', '34K', 'paru-berempah', 'Spesial'],
  ['nasi', 'Nasi Cumi Cabe Ijo', 'Nasi, Cumi Cabe Ijo, labu.', '26K', 'cumi-cabe-ijo'],
  ['nasi', 'Nasi Cumi Cabe Ijo Spesial', 'Nasi, Cumi Cabe Ijo, sambalado tanak, labu.', '32K', 'cumi-cabe-ijo', 'Spesial'],
  ['nasi', 'Nasi Ayam Pop', 'Nasi, Ayam Pop, sambal, labu.', '38K', 'ayam-pop'],
  ['nasi', 'Nasi Ayam Masak Lemak', 'Nasi, Ayam Masak Lemak, labu.', '38K', 'ayam-masak-lemak'],
  ['nasi', 'Nasi Ayam Berempah', 'Nasi, Ayam Berempah, labu.', '38K', 'ayam-berempah'],
  ['nasi', 'Nasi Telur Barendo', 'Nasi, Telur Barendo, labu.', '24K', 'telur-barendo'],
  // Beverage
  ['beverage', 'Es Limau', 'Minuman limau segar.', '12K', 'es-limau'],
  ['beverage', 'Limau Hangat', 'Minuman limau hangat.', '10K', 'es-limau'],
  ['beverage', 'Es Teh Tarik', 'Teh tarik dingin yang menyegarkan.', '15K', 'es-teh-manis'],
  ['beverage', 'Teh Tarik Panas', 'Teh tarik hangat.', '13K', 'es-teh-manis'],
  ['beverage', 'Es Teh Manis', 'Teh manis dingin.', '10K', 'es-teh-manis'],
  ['beverage', 'Es Teh Tawar', 'Teh tawar dingin.', '6K', 'es-teh-manis'],
  ['beverage', 'Teh Manis Panas', 'Teh manis hangat.', '8K', 'es-teh-manis'],
  ['beverage', 'Teh Tawar Panas', 'Teh tawar hangat.', '4K', 'es-teh-manis'],
  ['beverage', 'Air Mineral Botol', 'Air mineral kemasan botol.', '6K', 'es-limau'],
  ['beverage', 'Teh Pucuk', 'Teh siap minum.', '6K', 'es-teh-manis'],
  // Coffee
  ['coffee', 'Kopi O', 'Kopi hitam panas dengan gula.', '10K', 'kopi-o'],
  ['coffee', 'Kopi O Kosong', 'Kopi hitam panas tanpa gula.', '8K', 'kopi-o'],
  ['coffee', 'Kopi Susu', 'Kopi dengan krimer.', '12K', 'kopi-susu-pandan'],
  ['coffee', 'Es Kopi Susu Pandan', 'Espresso dengan susu, krimer, dan pandan.', '23K', 'kopi-susu-pandan'],
  ['coffee', 'Es Kopi Susu Gula Aren', 'Espresso dengan susu, krimer, dan gula aren.', '23K', 'kopi-susu-pandan'],
  ['coffee', 'Es Americano', 'Espresso dengan es, bold yet light.', '18K', 'kopi-o'],
];

// ---------- Render + carousel ----------
const track = document.getElementById('menuTrack');
const prevBtn = document.querySelector('.car-btn.prev');
const nextBtn = document.querySelector('.car-btn.next');
const idxEl = document.getElementById('carIndex');
const totalEl = document.getElementById('carTotal');
const barEl = document.getElementById('carBar');
const pad = n => String(n).padStart(2, '0');

track.innerHTML = MENU.map(([cat, name, desc, price, img, tag]) => `
  <article class="menu-card" data-category="${cat}">
    <div class="food-photo">
      <img src="assets/hd/${img}.jpg" alt="${name}" loading="lazy" draggable="false">
      ${tag ? `<span class="food-tag">${tag}</span>` : ''}
    </div>
    <b class="price">${price}</b>
    <div class="food-info">
      <span class="food-cat">${CATEGORY_LABEL[cat]}</span>
      <h3>${name}</h3>
      <p>${desc}</p>
    </div>
  </article>`).join('');

const cards = [...track.children];
const visibleCards = () => cards.filter(c => !c.hidden);

function activeCard() {
  const mid = track.scrollLeft + track.clientWidth / 2;
  let best = null, dist = Infinity;
  visibleCards().forEach(c => {
    const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
    if (d < dist) { dist = d; best = c; }
  });
  return best;
}

let ticking = false;
function update() {
  ticking = false;
  const vis = visibleCards();
  const act = activeCard();
  cards.forEach(c => c.classList.toggle('is-active', c === act));
  idxEl.textContent = pad(Math.max(vis.indexOf(act), 0) + 1);
  totalEl.textContent = pad(vis.length);
  const max = track.scrollWidth - track.clientWidth;
  barEl.style.width = (max > 0 ? Math.max(track.scrollLeft / max, 0.04) * 100 : 100) + '%';
  prevBtn.disabled = track.scrollLeft < 8;
  nextBtn.disabled = track.scrollLeft > max - 8;
}
track.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
window.addEventListener('resize', update);

function step(dir) {
  const w = (visibleCards()[0]?.offsetWidth || 300) + 26;
  track.scrollBy({ left: dir * w, behavior: 'smooth' });
}
prevBtn.addEventListener('click', () => step(-1));
nextBtn.addEventListener('click', () => step(1));
track.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
});

// Mouse drag-to-scroll (touch uses native swipe)
let down = false, startX = 0, startLeft = 0;
track.addEventListener('pointerdown', e => {
  if (e.pointerType !== 'mouse') return;
  down = true; startX = e.clientX; startLeft = track.scrollLeft;
});
window.addEventListener('pointermove', e => {
  if (!down) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 4) track.classList.add('dragging');
  track.scrollLeft = startLeft - dx;
});
window.addEventListener('pointerup', () => {
  if (!down) return;
  down = false;
  track.classList.remove('dragging');
  const act = activeCard();
  if (act) track.scrollTo({ left: act.offsetLeft + act.offsetWidth / 2 - track.clientWidth / 2, behavior: 'smooth' });
});

// Category tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', () => {
  const f = tab.dataset.filter;
  tabs.forEach(t => { const on = t === tab; t.classList.toggle('active', on); t.setAttribute('aria-selected', String(on)); });
  cards.forEach(c => { c.hidden = !(f === 'all' || c.dataset.category === f); });
  track.scrollTo({ left: 0, behavior: 'auto' });
  update();
}));

// Open the carousel centered on the signature item
requestAnimationFrame(() => { track.scrollLeft = 0; update(); });
window.addEventListener('load', update);

// ---------- Mobile navigation ----------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const setNav = open => { nav.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); };
menuToggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNav(false)));

// ---------- Reveal on scroll ----------
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(i => io.observe(i));
} else {
  revealItems.forEach(i => i.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Preloader ----------
(() => {
  const pre = document.getElementById('preloader');
  const start = performance.now();
  const MIN = 2100;
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    const wait = Math.max(0, MIN - (performance.now() - start));
    setTimeout(() => {
      pre.classList.add('done');
      setTimeout(() => {
        document.body.classList.remove('loading');
        window.scrollTo(0, 0);
      }, 500);
      setTimeout(() => pre.remove(), 1500);
    }, wait);
  };
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish);
  setTimeout(finish, 5000); // never trap the visitor behind slow assets
})();

// ---------- Scroll progress + header state ----------
const sBar = document.getElementById('scrollBar');
const header = document.querySelector('.site-header');
function onScroll() {
  const h = document.documentElement.scrollHeight - innerHeight;
  sBar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  header.classList.toggle('scrolled', scrollY > 40);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Hero parallax (desktop pointer only) ----------
const heroEl = document.querySelector('.hero');
const heroVis = document.querySelector('.hero-visual');
if (matchMedia('(hover:hover) and (min-width:901px)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  heroEl.addEventListener('pointermove', e => {
    const r = heroEl.getBoundingClientRect();
    heroVis.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -22 + 'px');
    heroVis.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -16 + 'px');
  });
  heroEl.addEventListener('pointerleave', () => { heroVis.style.setProperty('--px', '0px'); heroVis.style.setProperty('--py', '0px'); });
}

// ---------- Branch open/closed status (WIB) ----------
(() => {
  const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const fmt = t => t.replace(':', '.');
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
  const now = (Number(parts.find(p => p.type === 'hour').value) % 24) * 60 + Number(parts.find(p => p.type === 'minute').value);
  document.querySelectorAll('.br-row').forEach(r => {
    const o = r.dataset.open, cl = r.dataset.close, om = toMin(o), cm = toMin(cl);
    const st = r.querySelector('.br-status'), label = st.querySelector('em');
    if (now >= om && now < cm) { label.textContent = 'Buka sekarang'; st.classList.remove('closed'); }
    else { label.textContent = now < om ? 'Tutup · buka ' + fmt(o) : 'Tutup · buka besok ' + fmt(o); st.classList.add('closed'); }
  });
})();
