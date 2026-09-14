/**
 * Survivor M47W - Interactive Application Logic
 * Tournament Server • Staff Roster & DM Actions • Prize Matrix • Discord Insights
 */

function initApp() {
  initNavigation();
  initStaffRoster();
  initDynamicLinks();
  initDiscordInsights();
  initPrizeMatrix();
  initPosterGallery();
  initInspectProtection();
  initTournamentWinners();
  initTournamentCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Prevent Inspect Element, View Source, and DevTools Shortcuts
 */
function initInspectProtection() {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (typeof showToast === 'function') {
      showToast('⚠️ Right-click inspection is disabled on Survivor [M47W]');
    }
    return false;
  }, false);

  // Intercept DevTools keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const isCtrlOrMeta = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const key = e.key ? e.key.toUpperCase() : '';
    const keyCode = e.keyCode || e.which;

    // F12 key
    const isF12 = key === 'F12' || keyCode === 123;
    // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Selector)
    const isInspectCombo = isCtrlOrMeta && isShift && (key === 'I' || key === 'J' || key === 'C' || keyCode === 73 || keyCode === 74 || keyCode === 67);
    // Ctrl+U (View Source)
    const isViewSource = isCtrlOrMeta && (key === 'U' || keyCode === 85);
    // Ctrl+S (Save Page)
    const isSavePage = isCtrlOrMeta && (key === 'S' || keyCode === 83);

    if (isF12 || isInspectCombo || isViewSource || isSavePage) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof showToast === 'function') {
        showToast('⚠️ Source inspection is restricted on this platform');
      }
      return false;
    }
  }, true);

  // Disable dragging images to prevent inspect via dragging
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  }, false);

  // Clear console and print security warning
  try {
    console.clear();
    console.log(
      '%cSURVIVOR [M47W] - SECURED PORTAL\n%cSource inspection is restricted on this platform.',
      'color: #ff2a3f; font-size: 20px; font-weight: bold; font-family: monospace;',
      'color: #94a3b8; font-size: 13px;'
    );
  } catch (_) {}
}

/**
 * Sticky nav & scroll highlight
 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNav();
  }, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
      const isOpen = navMenu.classList.contains('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/**
 * Bind dynamic Discord, YouTube, and Partner links
 */
function initDynamicLinks() {
  const cfg = window.SURVIVOR_CONFIG;
  if (!cfg) return;

  const bind = (id, url) => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  };

  bind('linkDiscordMain', cfg.links.discordServer);
  bind('linkHeroDiscord', cfg.links.discordServer);
  bind('linkNavDiscord', cfg.links.discordServer);
  bind('linkFooterDiscord', cfg.links.discordServer);
  bind('linkSatTournament', cfg.links.saturdayTournament);
  bind('linkSunTournament', cfg.links.sundayTournament);
  bind('linkSatVideos', cfg.links.saturdayVideos);
  bind('linkSunVideos', cfg.links.sundayVideos);
  bind('linkResults', cfg.links.tournamentResults);
  bind('linkMonthlyTournament', cfg.links.monthlyTournament);
  bind('linkServerBoost', cfg.links.serverBoost);
  bind('linkSupportTicket', cfg.links.supportTicket);
  bind('linkNavSupport', cfg.links.supportTicket);
  bind('linkYouTube', cfg.links.youtubeChannel);
  bind('linkFooterYouTube', cfg.links.youtubeChannel);
  bind('linkArtstormServer', cfg.links.artstormServer);
  bind('linkMWCommunity', cfg.links.mwCommunity);
  bind('linkArenaServer', cfg.links.arenaServer);
  bind('linkArenaSupport', cfg.links.arenaSupportTicket);
}

/**
 * Render Staff Roster with interactive Discord DM buttons
 */
function initStaffRoster() {
  const staffGrid = document.getElementById('staffGrid');
  const filterBtns = document.querySelectorAll('.roster-filter-btn');
  const cfg = window.SURVIVOR_CONFIG;

  if (!staffGrid || !cfg || !cfg.staff) return;

  function renderStaff(filter = 'all') {
    staffGrid.innerHTML = '';

    const filtered = cfg.staff.filter(member => {
      if (filter === 'all') return true;
      if (filter === 'ArtStorm') return member.isArtstorm || member.roles.includes('ArtStorm Team') || member.roles.includes('Tournament Supervisor');
      if (filter === 'Owner') return member.roles.includes('Owner');
      if (filter === 'Admin') return member.roles.includes('Admin');
      if (filter === 'SuperAdmin') return member.roles.includes('SuperAdmin');
      if (filter === 'Commander') return member.roles.includes('Commander');
      if (filter === 'Support') return member.roles.includes('Support');
      if (filter === 'IT') return member.roles.includes('IT Support');
      if (filter === 'Artist') return member.roles.includes('Artist');
      return true;
    });

    // Only these 3 server staff members have DM options enabled (Daria & Osiris excluded)
    const allowedDmMembers = ['gocodes', 'hokage', 'cosmic'];

    filtered.forEach(member => {
      const card = document.createElement('article');
      let extraClass = '';
      if (member.isOwner) extraClass = 'card-owner';
      else if (member.isArtstorm) extraClass = 'card-artstorm';
      card.className = `roster-card ${extraClass}`;

      const roleBadgesHtml = member.roles.map(r => {
        let cls = 'badge-commander';
        if (r === 'Owner') cls = 'badge-owner';
        else if (r === 'Admin') cls = 'badge-admin';
        else if (r === 'SuperAdmin') cls = 'badge-superadmin';
        else if (r === 'IT Support') cls = 'badge-it';
        else if (r === 'Support') cls = 'badge-support';
        else if (r === 'Artist') cls = 'badge-artist';
        else if (r === 'ArtStorm Team') cls = 'badge-artstorm';
        else if (r === 'Tournament Supervisor') cls = 'badge-supervisor';
        return `<span class="staff-pill ${cls}">${r}</span>`;
      }).join(' ');

      const memberClean = (member.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const isDmAllowed = allowedDmMembers.some(name => memberClean.includes(name));

      let dmActionHtml = '';
      if (isDmAllowed) {
        const dmUrl = member.discordId 
          ? `https://discord.com/users/${member.discordId}`
          : `https://discord.gg/6sPeeaY6bj`;

        dmActionHtml = `
          <div class="staff-card-actions">
            <a href="${dmUrl}" target="_blank" rel="noopener noreferrer" class="btn-staff-dm" data-discord-id="${member.discordId || ''}" data-name="${escapeHtml(member.name)}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.771-.552 1.116a18.27 18.27 0 0 0-6.666 0A12.64 12.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.432 1.369C.887 8.58.127 12.687.507 16.737a19.92 19.92 0 0 0 5.993 3.026c.481-.657.91-1.35 1.282-2.076a12.99 12.99 0 0 1-2.02-.98c.17-.123.336-.25.496-.383 3.894 1.78 8.117 1.78 11.965 0 .162.133.328.26.497.383a12.95 12.95 0 0 1-2.024.982c.372.725.8 1.418 1.282 2.074a19.9 19.9 0 0 0 5.995-3.026c.446-4.693-.762-8.764-3.656-12.368ZM8.02 14.315c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.955 2.419-2.157 2.419Zm7.96 0c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.945 2.419-2.157 2.419Z"/>
              </svg>
              <span>DM on Discord</span>
            </a>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="roster-card-header">
          <div class="roster-rank-badge" title="${member.isArtstorm ? 'Official ArtStorm Partner' : 'Military Rank Badge'}">
            <img src="${member.rankIcon}" alt="Rank Badge" class="roster-rank-img">
          </div>
          <img src="${member.titleIcon}" alt="Title Badge" class="roster-title-img">
        </div>
        <h3 class="roster-player-name">${escapeHtml(member.name)}</h3>
        <p class="roster-player-role">${member.isOwner ? 'Server Owner' : escapeHtml(member.primaryRole)}</p>
        <div class="staff-badge-container">
          ${roleBadgesHtml}
        </div>
        ${dmActionHtml}
      `;

      staffGrid.appendChild(card);
    });

    // Bind DM click handler for all staff DM buttons (including dynamically rendered ones)
    document.querySelectorAll('.btn-staff-dm').forEach(dmBtn => {
      if (dmBtn.hasAttribute('data-bound-click')) return;
      dmBtn.setAttribute('data-bound-click', 'true');
      dmBtn.addEventListener('click', (e) => {
        const discordId = dmBtn.getAttribute('data-discord-id');
        const staffName = dmBtn.getAttribute('data-name');
        
        if (discordId) {
          showToast(`Opening Discord chat with ${staffName}...`);
        } else if (staffName) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(staffName);
            showToast(`Copied @${staffName} to clipboard! Direct messaging in Discord...`);
          }
        }
      });
    });
  }

  window.filterStaffRoster = function(filter, activeBtn) {
    const allBtns = document.querySelectorAll('.roster-filter-btn');
    allBtns.forEach(b => b.classList.remove('active'));
    if (activeBtn) {
      activeBtn.classList.add('active');
    } else {
      const match = document.querySelector(`.roster-filter-btn[data-filter="${filter}"]`);
      if (match) match.classList.add('active');
    }
    renderStaff(filter);
  };

  const filterBar = document.querySelector('.roster-filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.roster-filter-btn');
      if (!btn) return;
      const filterValue = btn.getAttribute('data-filter') || 'all';
      window.filterStaffRoster(filterValue, btn);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter') || 'all';
      window.filterStaffRoster(filterValue, btn);
    });
  });

  renderStaff('all');
}

/**
 * Initialize Discord Server Insights Telemetry
 */
function initDiscordInsights() {
  const cfg = window.SURVIVOR_CONFIG;
  if (!cfg || !cfg.discordInsights) return;
  // Stats are pre-rendered semantically in index.html, with dynamic live metrics in config
}

/**
 * Render Official Tournament Prize Pools Matrix (All 4 Events)
 */
function initPrizeMatrix() {
  const showcase = document.getElementById('prizeShowcase');
  const filterBtns = document.querySelectorAll('.prize-filter-btn');
  const cfg = window.SURVIVOR_CONFIG;

  if (!showcase || !cfg || !cfg.prizePools) return;

  function renderEventPrizes(eventId) {
    const event = cfg.prizePools.find(e => e.id === eventId) || cfg.prizePools[0];
    if (!event) return;

    const cardsHtml = event.prizes.map((p, index) => {
      let itemsListHtml = '';

      // Title item if exists
      if (p.titleBadge) {
        itemsListHtml += `
          <div class="prize-item-row">
            <img src="${p.titleIcon || 'Assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png'}" alt="Prestige Title" class="prize-item-icon" loading="lazy">
            <div class="prize-item-info">
              <span class="prize-item-label">Verified Title Reward</span>
              <strong class="prize-item-val val-title">${escapeHtml(p.titleBadge)}</strong>
            </div>
          </div>
        `;
      }

      // Special Gacha item if exists
      if (p.specialItem) {
        itemsListHtml += `
          <div class="prize-item-row">
            <img src="${p.specialIcon || 'Assets/icons/rewards/BP_vip_hires.png'}" alt="Special Event Reward" class="prize-item-icon" loading="lazy">
            <div class="prize-item-info">
              <span class="prize-item-label">Event Item Drop</span>
              <strong class="prize-item-val val-special">${escapeHtml(p.specialItem)}</strong>
            </div>
          </div>
        `;
      }

      // Artcoin (AC) if exists
      if (p.ac) {
        itemsListHtml += `
          <div class="prize-item-row">
            <img src="Assets/icons/rewards/artcoinOffer_6.png" alt="Artcoin (AC)" class="prize-item-icon" loading="lazy">
            <div class="prize-item-info">
              <span class="prize-item-label">Market Currency</span>
              <strong class="prize-item-val val-ac">${escapeHtml(p.ac)}</strong>
            </div>
          </div>
        `;
      }

      // Gold / Dollars (HD) if exists
      if (p.hd) {
        itemsListHtml += `
          <div class="prize-item-row">
            <img src="Assets/icons/rewards/goldOffer_6.png" alt="Tournament Currency (HD)" class="prize-item-icon" loading="lazy">
            <div class="prize-item-info">
              <span class="prize-item-label">Tournament Currency</span>
              <strong class="prize-item-val val-hd">${escapeHtml(p.hd)}</strong>
            </div>
          </div>
        `;
      }

      // Premium duration if exists
      if (p.premium) {
        itemsListHtml += `
          <div class="prize-item-row">
            <img src="Assets/icons/rewards/premiumAccount.png" alt="Premium Pass" class="prize-item-icon" loading="lazy">
            <div class="prize-item-info">
              <span class="prize-item-label">VIP Subscription</span>
              <strong class="prize-item-val val-premium">${escapeHtml(p.premium)}</strong>
            </div>
          </div>
        `;
      }

      const trophyEmoji = index === 0 ? '🥇' : (index === 1 ? '🥈' : '🥉');

      return `
        <article class="prize-card ${p.podiumClass}">
          <div class="prize-card-header">
            <div class="prize-place-num">
              <span>${trophyEmoji}</span>
              <span>${escapeHtml(p.place)}</span>
            </div>
            <span class="prize-trophy-pill">${escapeHtml(p.placeBadge)}</span>
          </div>

          <div class="prize-items-list">
            ${itemsListHtml}
          </div>

          <div class="prize-card-footer">
            <a href="${event.channelUrl}" target="_blank" rel="noopener noreferrer" class="btn ${index === 0 ? 'btn-primary' : 'btn-outline'} btn-sm">
              <span>Register in ${escapeHtml(event.channelName)}</span>
            </a>
          </div>
        </article>
      `;
    }).join('');

    showcase.innerHTML = `
      <div class="prize-event-banner">
        <div class="prize-event-title-wrap">
          <span class="prize-event-tag">${escapeHtml(event.badge)}</span>
          <h3 class="prize-event-title">${escapeHtml(event.name)}</h3>
        </div>
        <div class="prize-card-channel-note">
          Official Tournament Channel: <strong>${escapeHtml(event.channelName)}</strong>
        </div>
      </div>
      <div class="prize-podium-grid">
        ${cardsHtml}
      </div>
    `;
  }

  // Initial render: first event (Parallel Tour)
  renderEventPrizes('parallel-tour');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const eventId = btn.getAttribute('data-event');
      renderEventPrizes(eventId);
    });
  });
}

/**
 * Tactical floating toast notification
 */
let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById('tacticalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'tacticalToast';
    toast.className = 'tactical-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.771-.552 1.116a18.27 18.27 0 0 0-6.666 0A12.64 12.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.432 1.369C.887 8.58.127 12.687.507 16.737a19.92 19.92 0 0 0 5.993 3.026c.481-.657.91-1.35 1.282-2.076a12.99 12.99 0 0 1-2.02-.98c.17-.123.336-.25.496-.383 3.894 1.78 8.117 1.78 11.965 0 .162.133.328.26.497.383a12.95 12.95 0 0 1-2.024.982c.372.725.8 1.418 1.282 2.074a19.9 19.9 0 0 0 5.995-3.026c.446-4.693-.762-8.764-3.656-12.368ZM8.02 14.315c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.955 2.419-2.157 2.419Zm7.96 0c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.945 2.419-2.157 2.419Z"/>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function escapeHtml(string) {
  if (!string) return '';
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/**
 * Initialize SZone WorXz Single-Card Swipeable Poster Gallery
 * Supports touch swipe (left & right), desktop mouse drag, keyboard arrows, dots, lightbox, and auto-play
 */
function initPosterGallery() {
  const cfg = window.SURVIVOR_CONFIG;
  if (!cfg || !cfg.posters || cfg.posters.length === 0) return;

  const posters = cfg.posters;
  let currentIndex = 0;
  let isAutoplay = true;
  let autoplayTimer = null;
  let isUserHovering = false;
  let isLightboxActive = false;

  // DOM Elements
  const singlePosterCard = document.getElementById('singlePosterCard');
  const posterStage = document.getElementById('posterStage');
  const posterCurrentImg = document.getElementById('posterCurrentImg');
  const posterCategoryBadge = document.getElementById('posterCategoryBadge');
  const posterCounterBadge = document.getElementById('posterCounterBadge');
  const posterCurrentTitle = document.getElementById('posterCurrentTitle');
  const posterCurrentSubtitle = document.getElementById('posterCurrentSubtitle');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const posterDotsBar = document.getElementById('posterDotsBar');
  const galleryAutoplayToggle = document.getElementById('galleryAutoplayToggle');
  const autoplayStatusText = document.getElementById('autoplayStatusText');
  const btnPosterZoom = document.getElementById('btnPosterZoom');
  const btnCardZoom = document.getElementById('btnCardZoom');

  // Lightbox DOM Elements
  const posterLightbox = document.getElementById('posterLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (!singlePosterCard || !posterCurrentImg) return;

  // Render Pagination Dots
  if (posterDotsBar) {
    posterDotsBar.innerHTML = '';
    posters.forEach((p, idx) => {
      const dot = document.createElement('button');
      dot.className = `poster-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `View Poster ${idx + 1}: ${p.title}`);
      dot.setAttribute('title', `${idx + 1}. ${p.title}`);
      dot.addEventListener('click', () => {
        if (idx !== currentIndex) {
          const dir = idx > currentIndex ? 'next' : 'prev';
          currentIndex = idx;
          renderPoster(currentIndex, dir);
        }
      });
      posterDotsBar.appendChild(dot);
    });
  }

  function updateDots(index) {
    if (!posterDotsBar) return;
    const dots = posterDotsBar.querySelectorAll('.poster-dot');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Render Poster Display with Smooth Transition
  function renderPoster(index, direction = 'none') {
    const poster = posters[index];
    if (!poster) return;

    if (direction === 'next') {
      posterCurrentImg.classList.add('sliding-out-left');
    } else if (direction === 'prev') {
      posterCurrentImg.classList.add('sliding-out-right');
    }

    setTimeout(() => {
      posterCurrentImg.src = poster.image;
      posterCurrentImg.alt = `${poster.title} - SZone WorXz Poster`;
      if (posterCategoryBadge) posterCategoryBadge.textContent = poster.category;
      if (posterCounterBadge) {
        posterCounterBadge.textContent = `${String(index + 1).padStart(2, '0')} / ${String(posters.length).padStart(2, '0')}`;
      }
      if (posterCurrentTitle) posterCurrentTitle.textContent = poster.title;
      if (posterCurrentSubtitle) posterCurrentSubtitle.textContent = poster.subtitle;

      if (lightboxImg) {
        lightboxImg.src = poster.image;
        lightboxImg.alt = `${poster.title} - Fullscreen View`;
      }
      if (lightboxCaption) {
        lightboxCaption.innerHTML = `
          <strong>${escapeHtml(poster.title)}</strong>
          <span>${escapeHtml(poster.subtitle)} • Art by ${escapeHtml(poster.designer)}</span>
        `;
      }

      posterCurrentImg.className = 'poster-image ' + (direction === 'next' ? 'sliding-in-left' : (direction === 'prev' ? 'sliding-in-right' : ''));
      // Trigger repaint to run animation
      void posterCurrentImg.offsetWidth;
      posterCurrentImg.className = 'poster-image';

      updateDots(index);
    }, direction === 'none' ? 0 : 120);
  }

  function nextPoster() {
    currentIndex = (currentIndex + 1) % posters.length;
    renderPoster(currentIndex, 'next');
  }

  function prevPoster() {
    currentIndex = (currentIndex - 1 + posters.length) % posters.length;
    renderPoster(currentIndex, 'prev');
  }

  // Navigation button listeners
  if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', prevPoster);
  if (galleryNextBtn) galleryNextBtn.addEventListener('click', nextPoster);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevPoster);
  if (lightboxNext) lightboxNext.addEventListener('click', nextPoster);

  // Touch Gesture Listeners (Swipe Left / Swipe Right)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  if (posterStage) {
    posterStage.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    }, { passive: true });

    posterStage.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const elapsed = Date.now() - touchStartTime;

      // Detect horizontal swipe with minimum threshold and angle tolerance
      if (Math.abs(diffX) > 36 && Math.abs(diffX) > Math.abs(diffY) * 1.2 && elapsed < 650) {
        if (diffX < 0) {
          nextPoster(); // Swiped Left -> Next Poster
        } else {
          prevPoster(); // Swiped Right -> Previous Poster
        }
      }
    }, { passive: true });

    // Desktop Mouse Drag to Swipe
    let isMouseDown = false;
    let mouseStartX = 0;

    posterStage.addEventListener('mousedown', (e) => {
      // Don't intercept clicks on nav buttons
      if (e.target.closest('.poster-nav-btn')) return;
      isMouseDown = true;
      mouseStartX = e.clientX;
      posterStage.classList.add('is-dragging');
    });

    window.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      posterStage.classList.remove('is-dragging');
      const diffX = e.clientX - mouseStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextPoster();
        } else {
          prevPoster();
        }
      }
    });

    posterStage.addEventListener('mouseleave', () => {
      if (isMouseDown) {
        isMouseDown = false;
        posterStage.classList.remove('is-dragging');
      }
    });
  }

  // Keyboard navigation when card has focus or user is in gallery
  singlePosterCard.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevPoster();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextPoster();
    }
  });

  // Lightbox View Logic
  function openLightbox() {
    if (!posterLightbox) return;
    isLightboxActive = true;
    posterLightbox.classList.add('is-open');
    posterLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!posterLightbox) return;
    isLightboxActive = false;
    posterLightbox.classList.remove('is-open');
    posterLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnPosterZoom) btnPosterZoom.addEventListener('click', openLightbox);
  if (btnCardZoom) btnCardZoom.addEventListener('click', openLightbox);
  if (posterCurrentImg) {
    posterCurrentImg.addEventListener('click', (e) => {
      // Only open if not currently dragging
      openLightbox();
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

  window.addEventListener('keydown', (e) => {
    if (posterLightbox && posterLightbox.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevPoster();
      else if (e.key === 'ArrowRight') nextPoster();
    }
  });

  // Autoplay functionality
  function resetAutoplayTimer() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    if (!isAutoplay || isUserHovering || isLightboxActive) return;

    autoplayTimer = setInterval(() => {
      nextPoster();
    }, 5500);
  }

  singlePosterCard.addEventListener('mouseenter', () => {
    isUserHovering = true;
    if (autoplayTimer) clearInterval(autoplayTimer);
  });

  singlePosterCard.addEventListener('mouseleave', () => {
    isUserHovering = false;
    resetAutoplayTimer();
  });

  if (galleryAutoplayToggle) {
    galleryAutoplayToggle.addEventListener('click', () => {
      isAutoplay = !isAutoplay;
      if (autoplayStatusText) {
        autoplayStatusText.textContent = isAutoplay ? '⏸ Auto: On' : '▶ Auto: Paused';
      }
      if (isAutoplay) {
        resetAutoplayTimer();
        showToast('Gallery auto-slide enabled');
      } else {
        if (autoplayTimer) clearInterval(autoplayTimer);
        showToast('Gallery auto-slide paused');
      }
    });
  }

  // Initial render of first poster
  renderPoster(0, 'none');
  resetAutoplayTimer();
}

/**
 * Render Official Tournament Winners & Podium Scorecards
 * Synced with Config and Single-Tab Google Sheet / Published CSV
 */
function initTournamentWinners() {
  const winnersGrid = document.getElementById('winnersGrid');
  if (!winnersGrid) return;

  const cfg = window.SURVIVOR_CONFIG || {};
  let winnersData = Array.isArray(cfg.tournamentWinners) ? [...cfg.tournamentWinners] : [];

  const filterBtns = document.querySelectorAll('.btn-winner-filter');
  let currentFilter = 'all';

  function renderWinners(filter = 'all') {
    winnersGrid.innerHTML = '';

    const filtered = winnersData.filter(item => {
      if (filter === 'all') return true;
      const t = (item.tournament || '').toLowerCase();
      const f = filter.toLowerCase();
      return t.includes(f) || f.includes(t);
    });

    if (filtered.length === 0) {
      winnersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; margin-bottom: 16px;">🏆</div>
          <p style="font-family: var(--font-display); font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 8px; letter-spacing: 0.05em;">
            Results Will Appear Here After Each Tournament
          </p>
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Winners are posted on Discord after every Saturday, Sunday &amp; Monthly tournament. Check back after the next match!
          </span>
        </div>
      `;
      return;
    }

    filtered.forEach(winner => {
      const card = document.createElement('article');
      let rankCls = 'rank-3';
      let rankBadgeCls = 'badge-bronze';
      const rankStr = String(winner.rank || '');
      if (rankStr.includes('1')) {
        rankCls = 'rank-1';
        rankBadgeCls = 'badge-gold';
      } else if (rankStr.includes('2')) {
        rankCls = 'rank-2';
        rankBadgeCls = 'badge-silver';
      }

      let tourBadgeCls = 'tour-saturday';
      const tourLower = (winner.tournament || '').toLowerCase();
      if (tourLower.includes('sun')) tourBadgeCls = 'tour-sunday';
      else if (tourLower.includes('month')) tourBadgeCls = 'tour-monthly';

      const tourDisplayName = winner.tournamentName || (tourLower.includes('tour') ? winner.tournament : `${winner.tournament} Tournament`);

      // Reward chips
      const rewardsList = (winner.rewards || '').split(/[•, ]+/).filter(Boolean);
      const rewardsChipsHtml = rewardsList.map(r => `<span class="winner-prize-chip">${escapeHtml(r)}</span>`).join(' ');

      card.className = `winner-card ${rankCls}`;
      card.innerHTML = `
        <div class="winner-card-header">
          <span class="winner-tour-badge ${tourBadgeCls}">
            ${escapeHtml(tourDisplayName)}
          </span>
          <span class="winner-rank-badge ${rankBadgeCls}">
            ${escapeHtml(winner.rank)} ${winner.rankBadge ? `• ${escapeHtml(winner.rankBadge)}` : ''}
          </span>
        </div>

        <div class="winner-player-info">
          <div class="winner-player-handle">${escapeHtml(winner.player)}</div>
          ${winner.specificName ? `<div class="winner-specific-tournament" style="font-size:0.78rem; color: var(--text-muted); margin-top: 2px; font-style: italic; letter-spacing: 0.03em;">🏆 ${escapeHtml(winner.specificName)}</div>` : ''}
          <div class="winner-date-edition">${escapeHtml(winner.date || 'Certified Tournament Record')}</div>
        </div>

        <div class="winner-uid-box">
          <div>
            <div class="winner-uid-label">Player Game ID</div>
            <div class="winner-uid-code">${escapeHtml(winner.uid)}</div>
          </div>
          <button type="button" class="btn-copy-uid" data-uid="${escapeHtml(winner.uid)}" title="Copy Game ID">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          </button>
        </div>

        <div class="winner-rewards-box">
          ${winner.title ? `
            <div class="winner-title-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>${escapeHtml(winner.title)}</span>
            </div>
          ` : ''}
          <div class="winner-prizes-chips">
            ${rewardsChipsHtml}
          </div>
        </div>
      `;

      winnersGrid.appendChild(card);
    });

    // Bind Copy UID button actions
    winnersGrid.querySelectorAll('.btn-copy-uid').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const uid = btn.getAttribute('data-uid');
        if (uid && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(uid).then(() => {
            showToast(`Copied UID ${uid} to clipboard!`);
          }).catch(() => {
            showToast(`UID: ${uid}`);
          });
        } else if (uid) {
          showToast(`UID: ${uid}`);
        }
      });
    });
  }

  // Filter tab buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderWinners(currentFilter);
    });
  });

  // Optional Live Google Sheet / CSV fetch support for 1-tab sheet
  if (cfg.sheetSync && cfg.sheetSync.enabled && cfg.sheetSync.sheetCsvUrl) {
    fetch(cfg.sheetSync.sheetCsvUrl)
      .then(res => res.text())
      .then(csvText => {
        const parsedWinners = parseSheetCsv(csvText);
        if (parsedWinners && parsedWinners.length > 0) {
          winnersData = parsedWinners;
          renderWinners(currentFilter);
        }
      })
      .catch(err => {
        console.warn('Live sheet sync fallback to local config:', err);
      });
  }

  renderWinners('all');
}

/**
 * Parse Winners Sheet CSV
 * Columns: Tournament, Date, Rank, Player Name, Game ID, Title Won, Prizes Won, Tournament Name (optional)
 */
function parseSheetCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return null;

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = line.split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
    if (cols.length >= 5) {
      const tour = cols[0] || 'Saturday';
      const specificName = (cols[7] && cols[7] !== '-') ? cols[7] : null;
      rows.push({
        tournament: tour,
        tournamentName: tour.toLowerCase().includes('tour') ? tour : `${tour} Tournament`,
        specificName: specificName,
        date: cols[1] || '',
        rank: cols[2] || '',
        rankBadge: (cols[2] || '').includes('1') ? 'CHAMPION' : ((cols[2] || '').includes('2') ? 'RUNNER UP' : 'SEMI-FINALIST'),
        player: cols[3] || '',
        uid: cols[4] || '',
        title: cols[5] && cols[5] !== '-' ? cols[5] : null,
        rewards: cols[6] || '',
        status: 'Verified'
      });
    }
  }
  return rows;
}

/**
 * Dynamically render Weekend Tournament Cards from Google Sheet (Tournaments tab)
 * Columns: Type, Tournament Name, Date & Time, Channel Link, Banner Link, Status
 * Falls back to static HTML cards if sheet is empty or unreachable.
 */
function initTournamentCards() {
  const cfg = window.SURVIVOR_CONFIG || {};
  if (!cfg.sheetSync || !cfg.sheetSync.tournamentsCsvUrl) return;

  fetch(cfg.sheetSync.tournamentsCsvUrl)
    .then(res => res.text())
    .then(csvText => {
      const cards = parseTournamentsCsv(csvText);
      if (!cards || cards.length === 0) return;
      renderTournamentCards(cards);
    })
    .catch(() => { /* silently keep static cards */ });
}

function parseTournamentsCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return null;
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = line.split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
    if (cols.length >= 4) {
      rows.push({
        type:       cols[0] || '',
        name:       cols[1] || '',
        datetime:   cols[2] || '',
        channelUrl: cols[3] || '#',
        bannerUrl:  (cols[4] && cols[4] !== '-') ? cols[4] : null,
        status:     (cols[5] || 'Open').toLowerCase().trim()
      });
    }
  }
  return rows;
}

function renderTournamentCards(cards) {
  const grid = document.querySelector('.tournament-grid');
  if (!grid) return;

  const typeConfig = {
    saturday: { badge: 'SATURDAY SERIES',     articleCls: 'highlight-gold',  dotCls: '',         badgeCls: 'gold',   btnCls: 'btn-outline-gold', label: '#saturday-tournament' },
    sunday:   { badge: 'SUNDAY CHAMPIONSHIP',  articleCls: 'highlight-red',   dotCls: 'dot-red',  badgeCls: '',       btnCls: 'btn-primary',      label: '#sunday-tournament' },
    monthly:  { badge: 'MONTHLY CHAMPIONSHIP', articleCls: 'highlight-cyan',  dotCls: 'dot-cyan', badgeCls: 'cyan',   btnCls: 'btn-outline-cyan',  label: '#monthly-tournament' }
  };

  grid.innerHTML = '';

  cards.forEach(card => {
    const key = card.type.toLowerCase();
    const tc = typeConfig[key] || typeConfig.saturday;
    const isOpen = card.status === 'open';
    const statusBadge = isOpen
      ? `<span class="tour-status-badge open">🟢 OPEN</span>`
      : `<span class="tour-status-badge closed">🔴 CLOSED</span>`;

    const bannerHtml = card.bannerUrl
      ? `<img src="${escapeHtml(card.bannerUrl)}" alt="${escapeHtml(card.name)} Banner" class="tournament-card-banner" loading="lazy">`
      : '';

    const article = document.createElement('article');
    article.className = `tournament-card ${tc.articleCls}`;
    article.innerHTML = `
      ${bannerHtml}
      <div class="tournament-card-top">
        <span class="tournament-badge-pill ${tc.badgeCls}">${tc.badge}</span>
        <div style="display:flex;align-items:center;gap:8px;">
          ${statusBadge}
          <span class="live-dot ${tc.dotCls}"></span>
        </div>
      </div>
      <h3 class="tournament-day">${escapeHtml(card.name || card.type + ' Tournament')}</h3>
      <div class="tournament-meta">
        <div class="meta-row">
          <span>Registration:</span>
          <strong>In Discord Only</strong>
        </div>
        ${card.datetime ? `<div class="meta-row"><span>Date & Time:</span><strong style="color:var(--accent-gold);">${escapeHtml(card.datetime)}</strong></div>` : ''}
        <div class="meta-row">
          <span>Channel:</span>
          <strong>${tc.label}</strong>
        </div>
        <div class="meta-row">
          <span>Prizes:</span>
          <a href="prizes.html" style="color:var(--accent-gold);font-weight:700;text-decoration:none;font-size:0.85rem;" onmouseover="this.style.opacity='0.75'" onmouseout="this.style.opacity='1'">View Prize Pool &rarr;</a>
        </div>
      </div>
      <a href="${escapeHtml(card.channelUrl)}" target="_blank" rel="noopener noreferrer" class="btn ${tc.btnCls}" style="width:100%;${!isOpen ? 'opacity:0.55;pointer-events:none;' : ''}">
        <span>${isOpen ? 'Register in Discord (' + tc.label + ')' : 'Registration Closed'}</span>
      </a>
    `;
    grid.appendChild(article);
  });
}
