/**
 * Survivor M47W - Interactive Application Logic
 * Tournament Server • Staff Roster & DM Actions • Prize Matrix • Discord Insights
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStaffRoster();
  initDynamicLinks();
  initDiscordInsights();
  initPrizeMatrix();
});

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
  bind('linkServerBoost', cfg.links.serverBoost);
  bind('linkSupportTicket', cfg.links.supportTicket);
  bind('linkNavSupport', cfg.links.supportTicket);
  bind('linkYouTube', cfg.links.youtubeChannel);
  bind('linkFooterYouTube', cfg.links.youtubeChannel);
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
      if (filter === 'Owner') return member.roles.includes('Owner');
      if (filter === 'Admin') return member.roles.includes('Admin');
      if (filter === 'SuperAdmin') return member.roles.includes('SuperAdmin');
      if (filter === 'Commander') return member.roles.includes('Commander');
      if (filter === 'Support') return member.roles.includes('Support');
      if (filter === 'IT') return member.roles.includes('IT Support');
      return true;
    });

    filtered.forEach(member => {
      const card = document.createElement('article');
      card.className = `roster-card ${member.isOwner ? 'card-owner' : ''}`;

      const roleBadgesHtml = member.roles.map(r => {
        let cls = 'badge-commander';
        if (r === 'Owner') cls = 'badge-owner';
        else if (r === 'Admin') cls = 'badge-admin';
        else if (r === 'SuperAdmin') cls = 'badge-superadmin';
        else if (r === 'IT Support') cls = 'badge-it';
        else if (r === 'Support') cls = 'badge-support';
        return `<span class="staff-pill ${cls}">${r}</span>`;
      }).join(' ');

      const dmUrl = member.discordId 
        ? `https://discord.com/users/${member.discordId}`
        : `https://discord.gg/6sPeeaY6bj`;

      card.innerHTML = `
        <div class="roster-card-header">
          <div class="roster-rank-badge" title="Military Rank Badge">
            <img src="${member.rankIcon}" alt="Rank Badge" class="roster-rank-img">
          </div>
          <img src="${member.titleIcon}" alt="Title Badge" class="roster-title-img">
        </div>
        <h3 class="roster-player-name">${escapeHtml(member.name)}</h3>
        <p class="roster-player-role">${member.isOwner ? 'Server Owner' : escapeHtml(member.primaryRole)}</p>
        <div class="staff-badge-container">
          ${roleBadgesHtml}
        </div>
        <div class="staff-card-actions">
          <a href="${dmUrl}" target="_blank" rel="noopener noreferrer" class="btn-staff-dm" data-discord-id="${member.discordId || ''}" data-name="${escapeHtml(member.name)}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.771-.552 1.116a18.27 18.27 0 0 0-6.666 0A12.64 12.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.432 1.369C.887 8.58.127 12.687.507 16.737a19.92 19.92 0 0 0 5.993 3.026c.481-.657.91-1.35 1.282-2.076a12.99 12.99 0 0 1-2.02-.98c.17-.123.336-.25.496-.383 3.894 1.78 8.117 1.78 11.965 0 .162.133.328.26.497.383a12.95 12.95 0 0 1-2.024.982c.372.725.8 1.418 1.282 2.074a19.9 19.9 0 0 0 5.995-3.026c.446-4.693-.762-8.764-3.656-12.368ZM8.02 14.315c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.955 2.419-2.157 2.419Zm7.96 0c-1.182 0-2.157-1.086-2.157-2.419 0-1.332.955-2.418 2.157-2.418 1.212 0 2.177 1.096 2.157 2.418 0 1.333-.945 2.419-2.157 2.419Z"/>
            </svg>
            <span>DM on Discord</span>
          </a>
        </div>
      `;

      // Intercept DM click for smooth UX if no numeric Discord Snowflake ID is present
      const dmBtn = card.querySelector('.btn-staff-dm');
      dmBtn.addEventListener('click', (e) => {
        const discordId = dmBtn.getAttribute('data-discord-id');
        const staffName = dmBtn.getAttribute('data-name');
        
        if (!discordId) {
          // If no numeric snowflake ID is configured yet, copy their username so the user can easily find them in Discord
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(staffName);
            showToast(`Copied @${staffName} to clipboard! Direct messaging in Discord...`);
          }
        }
      });

      staffGrid.appendChild(card);
    });
  }

  renderStaff('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderStaff(filterValue);
    });
  });
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
            <img src="${p.titleIcon || 'MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png'}" alt="Prestige Title" class="prize-item-icon">
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
            <img src="${p.specialIcon || 'MW Icons/BP_vip_hires.png'}" alt="Special Event Reward" class="prize-item-icon">
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
            <img src="MW Icons/artcoinOffer_6.png" alt="Artcoin (AC)" class="prize-item-icon">
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
            <img src="MW Icons/goldOffer_6.png" alt="Tournament Currency (HD)" class="prize-item-icon">
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
            <img src="MW Icons/premiumAccount.png" alt="Premium Pass" class="prize-item-icon">
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
