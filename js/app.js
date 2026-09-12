/**
 * Survivor M47W - Interactive Application Logic
 * Tournament Server • Staff Roster Filter • Video Hub & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStaffRoster();
  initDynamicLinks();
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
 * Render Staff Roster without duplicate names
 * Shows badge icon without LVL text, with exact role badges
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
      `;
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

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
