document.addEventListener('DOMContentLoaded', () => {

  /* ── STONE DATA ───────────────────────────── */
  const stoneData = {
    'multicolour-slate': {
      name:      'Multicolour Slate — Floor Installation',
      category:  '✓ Our Work · Actual Project',
      desc:      'A completed outdoor courtyard in Accra using mixed grey, gold, russet, and terracotta slate tiles laid in a natural split-face pattern. Real installation by City Natural Mabel Stones.',
      img:       'assets/IMG_4296.jpg',
      type:      'Natural Slate (Mixed Colours)',
      origin:    'Ghana — Volta / Eastern Region',
      thickness: '2 – 4 cm',
      finish:    'Natural Split-Face',
      weight:    '28 – 35 kg/m²',
      coverPerCrate: 12,
      density:   30,
    },
    'driveway-facade': {
      name:      'Stone Driveway & Façade',
      category:  '✓ Our Work · Completed Project',
      desc:      'Crazy pave slate driveway with matching natural stone entry facade. A real completed project by City Natural Mabel Stones in Accra — showing the full potential of natural stone for driveways and home entries.',
      img:       'assets/stone_17.jpg',
      type:      'Natural Slate — Crazy Pave',
      origin:    'Ghana',
      thickness: '3 – 6 cm',
      finish:    'Natural Split',
      weight:    '30 – 40 kg/m²',
      coverPerCrate: 10,
      density:   32,
    },
    'stone-facade-house': {
      name:      'Full Stone Exterior Cladding',
      category:  '✓ Our Work · Completed Project',
      desc:      'Two-storey Accra villa clad floor-to-roof with natural slate and quartzite combination. Columns, walls, and tower all covered — a full stone exterior transformation.',
      img:       'assets/stone_14.jpg',
      type:      'Mixed Slate & Quartzite',
      origin:    'Ghana',
      thickness: '2 – 5 cm',
      finish:    'Natural Split',
      weight:    '28 – 40 kg/m²',
      coverPerCrate: 10,
      density:   30,
    },
    'compound-wall': {
      name:      'Compound Wall — Stone Clad',
      category:  '✓ Our Work · Completed Project',
      desc:      'Large-piece multicolour slate cladding installed on a full compound perimeter wall in Accra. Mixed grey, amber, and terracotta slate pieces — bold and dramatic.',
      img:       'assets/stone_15.jpg',
      type:      'Natural Slate (Large Pieces)',
      origin:    'Ghana',
      thickness: '2 – 5 cm',
      finish:    'Natural Split',
      weight:    '30 – 38 kg/m²',
      coverPerCrate: 10,
      density:   32,
    },
    'crazy-pave': {
      name:      'Crazy Pave Flagstone',
      category:  'Wall Cladding / Flooring',
      desc:      'Irregular-cut stone pieces in gold, grey, and green tones — a striking choice for outdoor paving, garden paths, pool surrounds, and decorative feature walls.',
      img:       'assets/stone_2.jpg',
      type:      'Natural Quartzite Flagstone',
      origin:    'Ghana',
      thickness: '2 – 4 cm',
      finish:    'Natural Irregular',
      weight:    '28 – 36 kg/m²',
      coverPerCrate: 10,
      density:   30,
    },
    'charcoal-slate': {
      name:      'Charcoal Slate Tiles',
      category:  'Granite / Slate',
      desc:      'Deep charcoal grey slate tiles with a smooth, calibrated cut. Elegant for indoor floors, exterior stairs, bathrooms, and modern minimalist building facades.',
      img:       'assets/stone_4.jpg',
      type:      'Natural Slate (Charcoal)',
      origin:    'Ghana — Eastern Region',
      thickness: '1 – 2 cm',
      finish:    'Smooth Cut / Calibrated',
      weight:    '25 – 32 kg/m²',
      coverPerCrate: 12,
      density:   28,
    },
    'rough-wall': {
      name:      'Rough Stone Wall Cladding',
      category:  'Wall Cladding',
      desc:      'Rustic multi-tone natural stone pieces in bold russet, grey, and charcoal — raw, dramatic texture for compound and boundary walls, exterior facades, and pillar cladding.',
      img:       'assets/stone_3.jpg',
      type:      'Mixed Natural Stone',
      origin:    'Ghana',
      thickness: '3 – 7 cm',
      finish:    'Rough Natural',
      weight:    '35 – 50 kg/m²',
      coverPerCrate: 8,
      density:   40,
    },
    'terracotta-flag': {
      name:      'Terracotta Flagstone',
      category:  'Wall Cladding / Flooring',
      desc:      'Warm amber and teal natural flagstone — ideal for garden paths, verandas, pool surrounds, and outdoor entertainment areas.',
      img:       'assets/stone_5.jpg',
      type:      'Natural Flagstone',
      origin:    'Ghana',
      thickness: '2 – 4 cm',
      finish:    'Irregular Cut',
      weight:    '28 – 36 kg/m²',
      coverPerCrate: 10,
      density:   30,
    },
    'multicolour-tile': {
      name:      'Multicolour Slate Tiles',
      category:  'Tile / Slab',
      desc:      'Premium calibrated slate tiles in bold amber, russet, and charcoal — sold per crate. Ideal for statement floors, feature walls, and high-traffic interior areas.',
      img:       'assets/stone_11.jpg',
      type:      'Natural Slate (Calibrated)',
      origin:    'Ghana — Volta Region',
      thickness: '1.5 – 2 cm',
      finish:    'Cut & Calibrated',
      weight:    '25 – 30 kg/m²',
      coverPerCrate: 12,
      density:   27,
    },
    'slate-cladding': {
      name:      'Accra Grey Slate Cladding',
      category:  'Wall Cladding',
      desc:      'Rugged split-face slate tiles with exceptional moisture resistance and dramatic textural depth. Widely used for building facades, exterior pillars, boundary walls, and water features across Accra and beyond.',
      img:       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85',
      type:      'Natural Slate (Phyllite)',
      origin:    'Volta Region, Ghana',
      thickness: '2 – 4 cm',
      finish:    'Split-Face (Natural)',
      weight:    '28 – 35 kg/m²',
      coverPerCrate: 12,
      density:   30,
    },
    'carrara-marble': {
      name:      'Carrara White Marble',
      category:  'Luxury Marble Slab',
      desc:      'Premium white Carrara marble with soft grey veining — the hallmark of luxury interiors. Perfect for kitchen countertops, bathroom floors, vanity tops, and statement feature walls.',
      img:       'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85',
      type:      'Crystalline Limestone (Marble)',
      origin:    'Imported — Italy',
      thickness: '2 cm (standard) / 3 cm (thick)',
      finish:    'Polished / Honed',
      weight:    '50 – 60 kg/m²',
      coverPerCrate: 5,
      density:   55,
    },
    'gold-quartzite': {
      name:      'Keta Gold Quartzite',
      category:  'Wall Cladding',
      desc:      'Warm golden and copper-toned quartzite featuring natural quartz crystal sparkle. A popular premium choice for gate pillars, foyer feature walls, and modern exterior facades in Accra.',
      img:       'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85',
      type:      'Natural Quartzite',
      origin:    'Eastern Region, Ghana',
      thickness: '2 – 5 cm',
      finish:    'Natural Split',
      weight:    '30 – 40 kg/m²',
      coverPerCrate: 10,
      density:   35,
    },
    'charcoal-granite': {
      name:      'Nero Charcoal Granite',
      category:  'Granite',
      desc:      'Deep charcoal and black igneous granite with crystalline mineral specs. Extreme hardness makes it ideal for outdoor staircases, driveway edging, pool surrounds, and high-traffic exterior paths.',
      img:       'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=85',
      type:      'Igneous Granite',
      origin:    'Brong Ahafo, Ghana',
      thickness: '2 – 3 cm',
      finish:    'Flamed / Sandblasted',
      weight:    '55 – 70 kg/m²',
      coverPerCrate: 8,
      density:   60,
    },
    'rustic-sandstone': {
      name:      'Volta Rustic Sandstone',
      category:  'Wall Cladding',
      desc:      'Layered sandstone in warm earth tones — perfect for classic, colonial, and traditional Ghanaian facades. The natural stratification gives compound walls and exterior columns an organic heritage feel.',
      img:       'https://images.unsplash.com/photo-1609902726285-00668009f004?auto=format&fit=crop&w=900&q=85',
      type:      'Sedimentary Sandstone',
      origin:    'Volta Region, Ghana',
      thickness: '3 – 6 cm',
      finish:    'Rough-Cut (Natural)',
      weight:    '25 – 35 kg/m²',
      coverPerCrate: 12,
      density:   28,
    },
    'black-granite': {
      name:      'Absolute Black Granite',
      category:  'Granite',
      desc:      'Mirror-polished jet-black granite slab for sleek modern kitchens and high-end bathroom vanities. Its deep, reflective surface pairs beautifully with white marble accents and stainless steel fixtures.',
      img:       'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
      type:      'Igneous Granite (Gabbro)',
      origin:    'Imported — South India',
      thickness: '2 cm / 3 cm',
      finish:    'Mirror-Polished',
      weight:    '55 – 68 kg/m²',
      coverPerCrate: 5,
      density:   60,
    },
  };

  /* ── VISUALIZER STONE DESCRIPTIONS ───────── */
  const visDesc = {
    'rough-wall':       { title: 'Rough Stone Wall Cladding', desc: 'Rustic multi-tone natural stone pieces — raw, bold texture perfect for compound walls, facades, and pillar cladding in Accra.' },
    'crazy-pave':       { title: 'Crazy Pave Flagstone', desc: 'Irregular-cut stone pieces in gold, grey, and green — striking outdoor paving, garden paths, and decorative feature walls.' },
    'charcoal-slate':   { title: 'Charcoal Slate Tiles', desc: 'Deep charcoal grey smooth-cut slate — elegant choice for indoor floors, exterior steps, and modern minimalist facades.' },
    'multicolour-tile': { title: 'Multicolour Slate Tiles', desc: 'Premium bold amber, russet, and charcoal slate tiles — sold per crate for floors and feature walls across Accra.' },
  };

  /* ── STICKY HEADER ────────────────────────── */
  const header = document.getElementById('mainHeader');
  const navCTA  = document.getElementById('navCTA');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
    if (navCTA) navCTA.style.display = scrolled ? 'inline-flex' : 'none';
  });

  /* ── HAMBURGER / MOBILE MENU ──────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
      spans[1].style.cssText = 'opacity:0';
      spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => (s.style.cssText = ''));
    }
  });

  // close menu on link click
  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.querySelectorAll('span').forEach(s => (s.style.cssText = ''));
    });
  });

  /* ── ACTIVE NAV ON SCROLL ─────────────────── */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], div[id="home"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  /* ── CATALOG FILTER ───────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogItems = document.querySelectorAll('.catalog-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      catalogItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
        item.style.animation = match ? 'fadeUp .4s var(--ease) forwards' : '';
      });
    });
  });

  /* ── CATALOG ITEM CLICK → MODAL ───────────── */
  catalogItems.forEach(item => {
    item.addEventListener('click', () => openModal(item.dataset.stoneKey));
  });

  /* ── MODAL ────────────────────────────────── */
  const modal     = document.getElementById('stoneModal');
  const modalClose = document.getElementById('modalClose');

  function openModal(key) {
    const data = stoneData[key];
    if (!data) return;

    document.getElementById('modalImg').src       = data.img;
    document.getElementById('modalImg').alt       = data.name;
    document.getElementById('modalCat').textContent   = data.category;
    document.getElementById('modalTitle').textContent = data.name;
    document.getElementById('modalDesc').textContent  = data.desc;
    document.getElementById('specType').textContent   = data.type;
    document.getElementById('specOrigin').textContent = data.origin;
    document.getElementById('specThickness').textContent = data.thickness;
    document.getElementById('specFinish').textContent    = data.finish;
    document.getElementById('specWeight').textContent    = data.weight;

    const msg = `Hi! I'm interested in: *${data.name}*\nCould you share more details and pricing?`;
    document.getElementById('modalQuoteBtn').href = `https://wa.me/233546006340?text=${encodeURIComponent(msg)}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── VISUALIZER ───────────────────────────── */
  const visOptions  = document.querySelectorAll('.vis-option');
  const facadeBase  = document.getElementById('facadeBase');
  const visTitle    = document.getElementById('visTitle');
  const visDescEl   = document.getElementById('visDesc');

  // Hide the old overlay element if still in DOM
  const overlay = document.getElementById('facadeOverlay');
  if (overlay) overlay.style.display = 'none';

  // Set initial active option description
  const firstOpt = document.querySelector('.vis-option.active');
  if (firstOpt) {
    const firstKey = firstOpt.dataset.stone;
    if (visDesc[firstKey]) {
      visTitle.textContent  = visDesc[firstKey].title;
      visDescEl.textContent = visDesc[firstKey].desc;
    }
  }

  visOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      visOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      const texture = opt.dataset.texture;
      const key     = opt.dataset.stone;

      // Fade out → swap image → fade in
      if (facadeBase) {
        facadeBase.style.opacity = '0';
        setTimeout(() => {
          facadeBase.src = texture;
          facadeBase.style.opacity = '1';
        }, 220);
      }

      if (visDesc[key]) {
        visTitle.textContent  = visDesc[key].title;
        visDescEl.textContent = visDesc[key].desc;
      }
    });
  });

  /* ── CALCULATOR ───────────────────────────── */
  const calcStone  = document.getElementById('calcStone');
  const calcWidth  = document.getElementById('calcWidth');
  const calcHeight = document.getElementById('calcHeight');
  const calcWaste  = document.getElementById('calcWaste');

  const resArea   = document.getElementById('resArea');
  const resCrates = document.getElementById('resCrates');
  const resUnit   = document.getElementById('resUnit');
  const resWeight = document.getElementById('resWeight');
  const resTotal  = document.getElementById('resTotal');

  function runCalc() {
    const w       = parseFloat(calcWidth?.value) || 0;
    const h       = parseFloat(calcHeight?.value) || 0;
    const waste   = parseFloat(calcWaste?.value) || 10;
    const key     = calcStone?.value || 'slate-cladding';
    const data    = stoneData[key];

    const area    = w * h;
    const totalArea = area * (1 + waste / 100);
    const crates  = Math.ceil(totalArea / data.coverPerCrate);
    const weight  = (totalArea * data.density) / 1000; // tons

    const isSlabs = data.coverPerCrate <= 5;

    if (resArea)   resArea.textContent   = area.toFixed(1);
    if (resTotal)  resTotal.textContent  = totalArea.toFixed(1);
    if (resCrates) resCrates.textContent = crates;
    if (resUnit)   resUnit.textContent   = isSlabs ? 'Slabs Needed' : 'Crates Needed';
    if (resWeight) resWeight.textContent = weight.toFixed(2);
  }

  [calcStone, calcWidth, calcHeight, calcWaste].forEach(el => {
    el?.addEventListener('input', runCalc);
    el?.addEventListener('change', runCalc);
  });
  runCalc();

  /* ── CONTACT FORM → WHATSAPP ──────────────── */
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();

    const name     = document.getElementById('contactName')?.value.trim();
    const phone    = document.getElementById('contactPhone')?.value.trim();
    const interest = document.getElementById('contactInterest')?.value;
    const msg      = document.getElementById('contactMsg')?.value.trim();

    const text = `Hello City Natural Mabel Stones! 🪨\n\nName: *${name}*\nPhone: ${phone}\nInterest: *${interest}*\n\nProject details:\n${msg}`;
    window.open(`https://wa.me/233546006340?text=${encodeURIComponent(text)}`, '_blank');
  });

  /* ── ANIMATE ON SCROLL ─────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity .6s var(--ease), transform .6s var(--ease); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const revealEls = document.querySelectorAll('.why-card, .catalog-item, .sourcing-point, .contact-item, .result-box, .stat-item');
  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));

});
