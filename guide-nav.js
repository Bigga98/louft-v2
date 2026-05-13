(function () {

  // ─── Vanlige sider ────────────────────────────────
  const PAGES = [
    { label: 'Fundament',  href: 'Brandguideline.html' },
    { label: 'Delside 2',  href: 'delside-2.html' },
    { label: 'Delside 3',  href: 'delside-3.html' },
  ];

  // ─── Mega-menu-knapper ────────────────────────────
  // ─── SVG ikoner (Google Material, viewBox 0 -960 960 960) ───
  const ICONS = {
    truck:      `<path fill="#233D6F" d="m20-427 20-80h220l-20 80H20Zm175 232q-35-35-35-85H60l20-87h207l36-146h84l50-200H180l6-24q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35q-50 0-85-35Zm-95-378 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Zm-43-200h193l4-21-74-99h-95l-28 120Z"/>`,
    box:        `<path fill="#233D6F" d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm424 80H320v255q0 23 19 34.5t39 1.5l102-51 102 51q20 10 39-1.5t19-34.5v-255Z"/>`,
    deceased:   `<path fill="#233D6F" d="M440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5T240-680v-136q0-26 23-36.5t43 6.5l74 64 69-84q12-14 31-14t31 14l69 84 74-64q20-17 43-6.5t23 36.5v136q0 90-57 156.5T520-443v153q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Z"/>`,
    piano:      `<path fill="#233D6F" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h130v-180h-10q-17 0-28.5-11.5T280-420v-340h-80v560Zm430 0h130v-560h-80v340q0 17-11.5 28.5T640-380h-10v180Zm-240 0h180v-180h-10q-17 0-28.5-11.5T520-420v-340h-80v340q0 17-11.5 28.5T400-380h-10v180Z"/>`,
    cases:      `<path fill="#233D6F" d="M120-80q-33 0-56.5-23.5T40-160v-400q0-17 11.5-28.5T80-600q17 0 28.5 11.5T120-560v400h640q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H120Zm160-160q-33 0-56.5-23.5T200-320v-400q0-17 11.5-28.5T240-760h160v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h160q17 0 28.5 11.5T920-720v400q0 33-23.5 56.5T840-240H280Zm200-520h160v-80H480v80Z"/>`,
    assignment: `<path fill="#233D6F" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm181.5-198.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5Z"/>`,
    encrypted:  `<path fill="#233D6F" d="M444-360h72q9 0 15.5-7.5T536-384l-19-105q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-19 105q-2 9 4.5 16.5T444-360Zm23 275q-6-1-12-3-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1q-7 0-13-1Z"/>`,
    globe:      `<path fill="#233D6F" d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 35-47.5t24-53q9-27.5 13-56t4-58.5q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/>`,
    waterdrop:  `<path fill="#233D6F" d="M480-80q-133 0-226.5-93.5T160-400q0-89 44.5-163T326-680l154-240 154 240q77 54 121.5 128T800-400q0 133-93.5 226.5T480-80Zm0-80q100 0 170-70t70-170q0-66-32.5-121T600-616L480-800 360-616q-55 45-87.5 100T240-400q0 100 70 170t170 70Z"/>`,
    placeholder:`<path fill="rgba(35,61,111,0.3)" d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>`,
  };

  const MENUS = [
    {
      label: 'Tjenester',
      columns: [
        {
          heading: 'Privatmarked',
          twoCol: true,
          items: [
            { label: 'Privat flytting',        desc: 'Fra pakking til overtakelse',        href: '#', iconBg: '#c2e2fc', icon: ICONS.truck },
            { label: 'Nedpakking',             desc: 'Vi pakker, du slapper av',           href: '#', iconBg: '#f4cdff', icon: ICONS.box },
            { label: 'Dødsbo',                 desc: 'Diskret og hensynsfull tømming',     href: '#', iconBg: '#fdcac2', icon: ICONS.deceased },
            { label: 'Pianoflytting',          desc: 'Spesialhåndtering av tunge ting',    href: '#', iconBg: '#c2e2fc', icon: ICONS.piano },
            { label: 'Distanseflytting',       desc: 'Hele Norge og Norden',               href: '#', iconBg: '#f4cdff', icon: ICONS.truck },
            { label: 'Internasjonal flytting', desc: 'Flytting til og fra utlandet',       href: '#', iconBg: '#fdcac2', icon: ICONS.globe },
            { label: 'Flyttevask',             desc: 'Klar til overtakelse',               href: '#', iconBg: '#c2e2fc', icon: ICONS.waterdrop },
            { label: 'Minilager',              desc: 'Trygg lagring i Oslo',               href: '#', iconBg: '#f4cdff', icon: ICONS.cases },
            { label: 'Pakkemateriell',         desc: 'Alt du trenger til pakking',         href: '#', iconBg: '#fdcac2', icon: ICONS.box },
          ]
        },
        {
          heading: 'Bedrift',
          items: [
            { label: 'Kontorflytting',         desc: 'Minimal driftsstans',                href: '#', iconBg: '#c2e2fc', icon: ICONS.truck },
            { label: 'Prosjektledelse',        desc: 'Dedikert prosjektleder',             href: '#', iconBg: '#f4cdff', icon: ICONS.assignment },
            { label: 'Kontoravvikling',        desc: 'Tømming og tilbakelevering',         href: '#', iconBg: '#fdcac2', icon: ICONS.encrypted },
          ]
        }
      ],
      promo: {
        label: 'Planlegg din flytting',
        desc: 'Få et uforpliktende prisestimat på under 2 minutter.',
        href: '#'
      }
    }
  ];
  // ─────────────────────────────────────────────────

  const current = window.location.pathname.split('/').pop() || 'Brandguideline.html';

  const style = document.createElement('style');
  style.textContent = `
    #guide-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 64px;
      background: #3882E9;
      border-bottom: none;
      z-index: 1000;
    }
    .guide-nav-inner {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 72px;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 28px;
    }
    .guide-nav-logo {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    .guide-nav-logo svg {
      height: 28px;
      width: auto;
    }
    .guide-nav-divider {
      width: 1px;
      height: 16px;
      background: rgba(255,255,255,0.3);
      flex-shrink: 0;
    }
    .guide-nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
      flex: 1;
    }
    .guide-nav-link {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 15px;
      font-weight: 500;
      color: rgba(255,255,255,0.88);
      text-decoration: none;
      transition: color 0.12s;
    }
    .guide-nav-link:hover  { color: #ffffff; }
    .guide-nav-link.active { color: #ffffff; font-weight: 600; }
    .guide-nav-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #ffffff;
      border-radius: 10px;
      padding: 0 12px 0 18px;
      height: 44px;
      text-decoration: none;
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 15px;
      font-weight: 600;
      color: #233D6F;
      white-space: nowrap;
      margin-left: auto;
    }
    .guide-nav-cta-dot {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: #233D6F;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* ── Mega-menu trigger ── */
    .guide-mega-wrap {
      position: static;
      display: flex;
      align-items: center;
      height: 64px;
    }
    .guide-mega-trigger {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 15px;
      font-weight: 500;
      color: rgba(255,255,255,0.88);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: color 0.12s;
      user-select: none;
    }
    .guide-mega-wrap:hover .guide-mega-trigger { color: #ffffff; }
    .guide-mega-trigger svg { transition: transform 0.15s; }
    .guide-mega-wrap:hover .guide-mega-trigger svg { transform: rotate(180deg); }

    /* ── Mega-panel ── */
    .guide-mega-panel {
      position: fixed;
      top: 63px;
      left: 0; right: 0;
      background: #ffffff;
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-8px);
      transition: opacity 0.18s ease, transform 0.18s ease;
      z-index: 999;
    }
    .guide-mega-wrap:hover .guide-mega-panel {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .guide-mega-panel-inner {
      max-width: calc(var(--content-width, 1200px) + 2 * var(--section-padding, 72px));
      margin: 0 auto;
      padding: var(--nav-padding-v, 36px) var(--section-padding, 72px);
      display: grid;
      grid-template-columns: repeat(var(--grid-columns, 12), 1fr);
      gap: var(--card-gap, 24px);
      align-items: start;
    }
    .guide-mega-col:nth-child(1) { grid-column: 1 / 7; grid-row: 1; }
    .guide-mega-col:nth-child(2) { grid-column: 7 / 10; grid-row: 1; }
    a.guide-mega-promo           { grid-column: 10 / 13; grid-row: 1; }
    .guide-mega-col-items        { display: flex; flex-direction: column; }
    .guide-mega-col-items.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 8px; }

    /* ── Kolonner ── */
    .guide-mega-col-heading {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: var(--nav-cat-size, 12px);
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-nav-cat, #111);
      padding-bottom: 10px;
      border-bottom: 1px solid #ebebeb;
      margin-bottom: 14px;
    }
    .guide-mega-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      text-decoration: none;
      padding: 8px 6px;
      border-radius: 8px;
      transition: background 0.12s;
    }
    .guide-mega-item:hover { background: #f4f5f7; }
    .guide-mega-item-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .guide-mega-item-icon-placeholder {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: rgba(35,61,111,0.2);
    }
    .guide-mega-item-text { display: flex; flex-direction: column; gap: 2px; }
    .guide-mega-item-label {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: var(--nav-link-size, 15px);
      font-weight: 600;
      color: var(--color-nav-link, #111);
      line-height: 1.2;
    }
    .guide-mega-item-desc {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 12px;
      font-weight: 400;
      color: var(--color-nav-promo-desc, #888);
      line-height: 1.3;
    }
    .guide-mega-item:hover .guide-mega-item-label { color: var(--color-nav-link-hover, #111); }

    /* ── Promo-kort ── */
    a.guide-mega-promo {
      grid-column: span 4;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-decoration: none;
    }
    .guide-mega-promo-img {
      width: 100%;
      aspect-ratio: 16/9;
      background: #f4f4f5;
      border-radius: 10px;
      border: 1px solid #ebebeb;
    }
    .guide-mega-promo-label {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 14px;
      font-weight: 600;
      color: var(--color-nav-promo-title, #111);
    }
    .guide-mega-promo-desc {
      font-family: var(--font-body, 'IBM Plex Sans', sans-serif);
      font-size: 12px;
      color: var(--color-nav-promo-desc, #888);
      line-height: 1.5;
    }
    a.guide-mega-promo:hover .guide-mega-promo-label { color: var(--color-bg-dark, #233D6F); }
  `;
  document.head.appendChild(style);

  const menusHTML = MENUS.map(m => `
    <div class="guide-mega-wrap">
      <span class="guide-mega-trigger">
        ${m.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.75)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <div class="guide-mega-panel">
        <div class="guide-mega-panel-inner">
          ${m.columns.map(col => `
            <div class="guide-mega-col">
              <p class="guide-mega-col-heading">${col.heading}</p>
              <div class="guide-mega-col-items${col.twoCol ? ' two-col' : ''}">
              ${col.items.map(i => `
                <a href="${i.href}" class="guide-mega-item">
                  <div class="guide-mega-item-icon" style="background:${i.iconBg || '#eef2f8'};">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="22" height="22">${i.icon || ICONS.placeholder}</svg>
                  </div>
                  <div class="guide-mega-item-text">
                    <span class="guide-mega-item-label">${i.label}</span>
                    ${i.desc ? `<span class="guide-mega-item-desc">${i.desc}</span>` : ''}
                  </div>
                </a>`).join('')}
              </div>
            </div>
          `).join('')}
          <a href="${m.promo.href}" class="guide-mega-promo">
            <div class="guide-mega-promo-img"></div>
            <p class="guide-mega-promo-label">${m.promo.label}</p>
            <p class="guide-mega-promo-desc">${m.promo.desc}</p>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  const nav = document.createElement('nav');
  nav.id = 'guide-nav';
  nav.innerHTML = `
    <div class="guide-nav-inner">
      <span class="guide-nav-logo"><svg viewBox="0 0 523 154" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#nav-logo-clip)"><path d="M0 154V0H26.4298V130.403H115.048V154H0Z" fill="#ffffff"/><path d="M154.848 23.9073V0H251.55V96.25H227.608V41.2944L145.209 123.883L127.485 106.185L210.195 23.9073H154.848Z" fill="#ffffff"/><path d="M264.609 154V0H375.304V23.5968H291.039V67.375H364.11V90.9718H291.039V154H264.609Z" fill="#ffffff"/><path d="M442.156 154V23.5968H388.363V0H523V23.5968H468.586V154H442.156Z" fill="#ffffff"/></g><defs><clipPath id="nav-logo-clip"><rect width="523" height="154" fill="white"/></clipPath></defs></svg></span>
      <div class="guide-nav-divider"></div>
      <div class="guide-nav-links">
        ${PAGES.map(p => `<a href="${p.href}" class="guide-nav-link${p.href === current ? ' active' : ''}">${p.label}</a>`).join('')}
        ${menusHTML}
        <a href="#" class="guide-nav-link">Minilager</a>
        <a href="#" class="guide-nav-link">Bedrift</a>
        <a href="#" class="guide-nav-link">Forsikring</a>
        <a href="#" class="guide-nav-link">Om oss</a>
        <a href="#" class="guide-nav-cta">
          Kontakt oss
          <span class="guide-nav-cta-dot">
            <svg width="8" height="7" viewBox="0 0 14 13" fill="none"><path d="M1 6.5H13M13 6.5L7.5 1M13 6.5L7.5 12" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </div>
    </div>
  `;

  document.body.prepend(nav);
  document.body.style.paddingTop = '64px';

})();
