/**
 * Survivor M47W - Global Configuration
 * Tournament Server Settings, Links, Staff Hierarchy & Prize Matrix
 * Normalized URL-safe asset paths (Vercel & GitHub compatible)
 */
window.SURVIVOR_CONFIG = {
  server: {
    name: "Survivor M47W",
    tag: "M47W",
    type: "Tournament Server",
    owner: "gocodes",
    stats: {
      tournamentsConducted: "297+",
      totalMembers: "15,300",
      legendWinners: "150+",
      heroWinners: "200+",
    }
  },
  links: {
    discordServer: "https://discord.gg/6sPeeaY6bj",
    saturdayTournament: "https://discord.com/channels/1050414982417887283/1210456226505170964",
    sundayTournament: "https://discord.com/channels/1050414982417887283/1051428633106972762",
    saturdayVideos: "https://discord.com/channels/1050414982417887283/1512434301445210224",
    sundayVideos: "https://discord.com/channels/1050414982417887283/1125056647321108621",
    tournamentResults: "https://discord.com/channels/1050414982417887283/1051473469369491466",
    serverBoost: "https://discord.com/channels/1050414982417887283/1148118134398668922",
    supportTicket: "https://discord.com/channels/1050414982417887283/1246124680889241741",
    youtubeChannel: "https://youtube.com/@insfourtyseven7711?si=yuTAbnCFT_ipY31N",
    arenaServer: "https://discord.gg/cwB66GNWwY",
    arenaSupportTicket: "https://discord.com/channels/1063794604798902353/1457753365437087804",
    mwStats: "https://mwstats.info",
  },
  // Official Discord Server Insights Analytics
  discordInsights: {
    totalMembers: "15,300",
    metrics: [
      {
        id: "visitors",
        title: "Weekly Visitors",
        value: "1,478",
        change: "5% since last week",
        trend: "up"
      },
      {
        id: "communicators",
        title: "Weekly Communicators",
        value: "168",
        change: "147.1% since last week",
        trend: "up"
      },
      {
        id: "new_members",
        title: "Weekly New Members",
        value: "95",
        change: "79.2% since last week",
        trend: "up"
      },
      {
        id: "retention",
        title: "Weekly New Member Retention",
        value: "32.3%",
        change: "23.1% since last week",
        trend: "down"
      }
    ]
  },
  // Official Tournament Prize Pools Matrix for all 4 Events
  prizePools: [
    {
      id: "parallel-tour",
      name: "Survivor Tour (Parallel Tour)",
      shortName: "Parallel Tour",
      badge: "WEEKLY PARALLEL",
      channelUrl: "https://discord.com/channels/1050414982417887283/1210456226505170964",
      channelName: "#saturday-tournament",
      prizes: [
        {
          place: "1st Place",
          placeBadge: "CHAMPION",
          podiumClass: "podium-gold",
          titleBadge: "[HERO]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
          specialItem: null,
          specialIcon: null,
          ac: "2,000 AC",
          hd: "15,000 HD",
          premium: "PREMIUM 30d"
        },
        {
          place: "2nd Place",
          placeBadge: "RUNNER UP",
          podiumClass: "podium-silver",
          titleBadge: null,
          titleIcon: null,
          specialItem: null,
          specialIcon: null,
          ac: "1,000 AC",
          hd: "10,000 HD",
          premium: "PREMIUM 14d"
        },
        {
          place: "3rd - 4th Place",
          placeBadge: "SEMI-FINALISTS",
          podiumClass: "podium-bronze",
          titleBadge: null,
          titleIcon: null,
          specialItem: null,
          specialIcon: null,
          ac: "500 AC",
          hd: "5,000 HD",
          premium: "PREMIUM 7d"
        }
      ]
    },
    {
      id: "main-tour",
      name: "Survivor Tour (Main Tour)",
      shortName: "Main Tour",
      badge: "PREMIER CHAMPIONSHIP",
      channelUrl: "https://discord.com/channels/1050414982417887283/1051428633106972762",
      channelName: "#sunday-tournament",
      prizes: [
        {
          place: "1st Place",
          placeBadge: "CHAMPION",
          podiumClass: "podium-gold",
          titleBadge: "[HERO/LEGEND]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
          specialItem: null,
          specialIcon: null,
          ac: "3,000 AC",
          hd: "20,000 HD",
          premium: "PREMIUM 30d"
        },
        {
          place: "2nd Place",
          placeBadge: "RUNNER UP",
          podiumClass: "podium-silver",
          titleBadge: "[HERO]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
          specialItem: null,
          specialIcon: null,
          ac: "2,000 AC",
          hd: "15,000 HD",
          premium: "PREMIUM 14d"
        },
        {
          place: "3rd - 4th Place",
          placeBadge: "SEMI-FINALISTS",
          podiumClass: "podium-bronze",
          titleBadge: null,
          titleIcon: null,
          specialItem: null,
          specialIcon: null,
          ac: "1,000 AC",
          hd: "10,000 HD",
          premium: "PREMIUM 7d"
        }
      ]
    },
    {
      id: "monthly-gacha",
      name: "Survivor Tour (Monthly Gacha)",
      shortName: "Monthly Gacha",
      badge: "SPECIAL GACHA EVENT",
      channelUrl: "https://discord.com/channels/1050414982417887283/1210456226505170964",
      channelName: "#saturday-tournament",
      prizes: [
        {
          place: "1st Place",
          placeBadge: "CHAMPION",
          podiumClass: "podium-gold",
          titleBadge: "[HERO/LEGEND]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
          specialItem: "[GACHA SHIP]",
          specialIcon: "assets/icons/units/Battleship.png",
          ac: null,
          hd: "20,000 HD",
          premium: "PREMIUM 30d"
        },
        {
          place: "2nd Place",
          placeBadge: "RUNNER UP",
          podiumClass: "podium-silver",
          titleBadge: "[HERO]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
          specialItem: "[GACHA ITEM]",
          specialIcon: "assets/icons/rewards/BP_vip_hires.png",
          ac: null,
          hd: "15,000 HD",
          premium: "PREMIUM 14d"
        },
        {
          place: "3rd - 4th Place",
          placeBadge: "SEMI-FINALISTS",
          podiumClass: "podium-bronze",
          titleBadge: null,
          titleIcon: null,
          specialItem: "[EVENT ITEM]",
          specialIcon: "assets/icons/rewards/BP_premium_hires.png",
          ac: null,
          hd: "10,000 HD",
          premium: "PREMIUM 7d"
        }
      ]
    },
    {
      id: "teams-tour",
      name: "Survivor Teams (MonthlyTour)",
      shortName: "Teams (MonthlyTour)",
      badge: "TEAM SQUAD SERIES",
      channelUrl: "https://discord.com/channels/1050414982417887283/1051428633106972762",
      channelName: "#sunday-tournament",
      prizes: [
        {
          place: "1st Place",
          placeBadge: "CHAMPION",
          podiumClass: "podium-gold",
          titleBadge: "[HERO/LEGEND]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
          specialItem: null,
          specialIcon: null,
          ac: "3,000 AC",
          hd: "20,000 HD",
          premium: "PREMIUM 30d"
        },
        {
          place: "2nd Place",
          placeBadge: "RUNNER UP",
          podiumClass: "podium-silver",
          titleBadge: "[HERO]",
          titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
          specialItem: null,
          specialIcon: null,
          ac: "2,000 AC",
          hd: "15,000 HD",
          premium: "PREMIUM 14d"
        },
        {
          place: "3rd - 4th Place",
          placeBadge: "SEMI-FINALISTS",
          podiumClass: "podium-bronze",
          titleBadge: null,
          titleIcon: null,
          specialItem: null,
          specialIcon: null,
          ac: "1,000 AC",
          hd: "10,000 HD",
          premium: "PREMIUM 7d"
        }
      ]
    }
  ],
  // Exact 16 staff members with exact server roles & direct Discord DM link support
  staff: [
    {
      name: "gocodes",
      discordId: "",
      isOwner: true,
      primaryRole: "Owner",
      roles: ["Owner", "Admin", "SuperAdmin", "Commander", "Artist"],
      rankIcon: "assets/icons/ranks/Rank61.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "cosmicpower.",
      discordId: "",
      isOwner: false,
      primaryRole: "Admin",
      roles: ["Admin", "SuperAdmin", "Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank60.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "hokage_141",
      discordId: "",
      isOwner: false,
      primaryRole: "Admin",
      roles: ["Admin", "SuperAdmin", "Commander", "Support", "Artist"],
      rankIcon: "assets/icons/ranks/Rank60.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "bhavesh.21",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank58.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "vinayak_shree",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Support"],
      rankIcon: "assets/icons/ranks/Rank57.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "void_pr0",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank57.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "godzy0978",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank55.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "jokoers",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank54.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "shiro_kaieda",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank53.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "yah1ko.1586",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "assets/icons/ranks/Rank52.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "hacrrr_707",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander"],
      rankIcon: "assets/icons/ranks/Rank51.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "alii_ahmed",
      discordId: "",
      isOwner: false,
      primaryRole: "Support",
      roles: ["Support"],
      rankIcon: "assets/icons/ranks/Rank50.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "giwrgos.l",
      discordId: "",
      isOwner: false,
      primaryRole: "Support",
      roles: ["Support"],
      rankIcon: "assets/icons/ranks/Rank50.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "Animesh",
      discordId: "",
      isOwner: false,
      primaryRole: "IT Support",
      roles: ["IT Support"],
      rankIcon: "assets/icons/ranks/Rank59.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "vaibhavsharma0608_24692",
      discordId: "",
      isOwner: false,
      primaryRole: "Artist",
      roles: ["Artist"],
      rankIcon: "assets/icons/ranks/Rank56.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "kakkarot0276",
      discordId: "",
      isOwner: false,
      primaryRole: "Artist",
      roles: ["Artist"],
      rankIcon: "assets/icons/ranks/Rank55.png",
      titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    }
  ],
  // SZone WorXz - Official Survivor Creative & Poster Artist Team
  artistTeam: {
    name: "SZone WorXz",
    logo: "assets/images/szone-worxz.png",
    tagline: "Official Survivor Creative & Visual Arts Team",
    description: "The visionary design division powering Survivor [M47W] tournaments. From high-impact championship posters to tournament identity assets, SZone WorXz shapes the battlefield aesthetics.",
    members: [
      {
        name: "gocodes",
        role: "Founder & Creative Lead",
        tag: "Founder",
        rankIcon: "assets/icons/ranks/Rank61.png",
        titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png"
      },
      {
        name: "hokage",
        role: "Lead Visual Artist",
        tag: "Lead Artist",
        rankIcon: "assets/icons/ranks/Rank60.png",
        titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconLegend_Hires.png"
      },
      {
        name: "vaibhavsharma0608_24692",
        role: "Tournament Poster Artist",
        tag: "Artist",
        rankIcon: "assets/icons/ranks/Rank56.png",
        titleIcon: "assets/icons/title/MW_TitleSystem_TitleIconHero_Hires.png"
      },
      {
        name: "kakkarot0276",
        role: "Graphic & Asset Designer",
        tag: "Artist",
        rankIcon: "assets/icons/ranks/Rank55.png",
        titleIcon: "assets/icons/title/MW_TitleSystem_TitleIcon_Epic_Hires.png"
      }
    ]
  },
  // Tournament Posters Archive with clean URL-safe paths
  posters: [
    {
      id: "freedom-sat",
      title: "Freedom Saturday Tournament",
      subtitle: "Official Survivor Weekend Cup",
      image: "assets/posters/freedom-sat.jpg",
      designer: "SZone WorXz",
      category: "Saturday Championship"
    },
    {
      id: "ha-1",
      title: "Heavy Assault Division",
      subtitle: "High-Caliber Modern Warfare",
      image: "assets/posters/ha-1.png",
      designer: "SZone WorXz",
      category: "Special Tour"
    },
    {
      id: "img-0806",
      title: "Tactical Combat Championship",
      subtitle: "High Seas Elimination Bracket",
      image: "assets/posters/img-20260806-140649.jpg",
      designer: "SZone WorXz",
      category: "Bracket Poster"
    },
    {
      id: "img-0814",
      title: "Apex Naval Showdown",
      subtitle: "Elite Squad Skirmish",
      image: "assets/posters/img-20260814-113928.jpg",
      designer: "SZone WorXz",
      category: "Bracket Poster"
    },
    {
      id: "lotgf",
      title: "Lord of the Grand Fleet",
      subtitle: "Legendary Title Championship",
      image: "assets/posters/lotgf-1-1.png",
      designer: "SZone WorXz",
      category: "Major Event"
    },
    {
      id: "ss-sat",
      title: "Strike Series Saturday",
      subtitle: "Fast-Paced Action Bracket",
      image: "assets/posters/ss-sat.png",
      designer: "SZone WorXz",
      category: "Saturday Championship"
    },
    {
      id: "sunday-new",
      title: "Sunday Premier Tournament",
      subtitle: "Flagship Competitive Series",
      image: "assets/posters/sunday-new-tournament-1.png",
      designer: "SZone WorXz",
      category: "Sunday Championship"
    },
    {
      id: "tcl",
      title: "Tournament Champions League",
      subtitle: "Grand Stage Invitational",
      image: "assets/posters/tcl.png",
      designer: "SZone WorXz",
      category: "Major Event"
    },
    {
      id: "img-1",
      title: "Warships Clash of Titans",
      subtitle: "Fleet Warfare Arena",
      image: "assets/posters/image1.png",
      designer: "SZone WorXz",
      category: "Championship"
    },
    {
      id: "img-2",
      title: "Overlord Naval Dominion",
      subtitle: "Ocean Supremacy Battle",
      image: "assets/posters/image2.png",
      designer: "SZone WorXz",
      category: "Championship"
    },
    {
      id: "img-27",
      title: "Survivor Warzone League",
      subtitle: "Combat Fleet Cup",
      image: "assets/posters/image-27.jpg",
      designer: "SZone WorXz",
      category: "Tournament Event"
    },
    {
      id: "sart-1",
      title: "Survivor Art Showcase",
      subtitle: "Custom Edition Poster",
      image: "assets/posters/sart-1.png",
      designer: "SZone WorXz",
      category: "Special Edition"
    }
  ],
  // Special Tournament Formats & Unique Concepts
  specialTournaments: [
    {
      id: "rogue-nation",
      name: "Rogue Nation",
      rule: "All Ship • No Rules",
      badge: "NO RESTRICTIONS",
      badgeColor: "red",
      icon: "assets/icons/units/Corvette.png",
      unitType: "All Warships Allowed",
      description: "Unrestricted all-out naval mayhem! Deploy any warship class with zero equipment bans or tonnage limits. Total firepower and pure chaotic tactical brawl.",
      status: "Special Invitational"
    },
    {
      id: "rogue-wave",
      name: "Rogue Wave",
      rule: "All Sub • No Rules",
      badge: "UNDERWATER CARNAGE",
      badgeColor: "cyan",
      icon: "assets/icons/units/Submarine.png",
      unitType: "Submarines Only",
      description: "Deep-ocean predator clash. Only submarines are permitted in this silent yet lethal stealth bracket. Sonar pinging, torpedo salvos, and underwater dogfights.",
      status: "Stealth Special"
    },
    {
      id: "mach-de-march",
      name: "Mach De March",
      rule: "CV Tours • Yearly Major",
      badge: "YEARLY CV INVITATIONAL",
      badgeColor: "gold",
      icon: "assets/icons/units/Carrier.png",
      unitType: "Aircraft Carriers & Assault CVs",
      description: "Survivor's prestigious annual aircraft carrier championship! Elite flight deck captains battle for aerial superiority with strike fighters, bombers, and drones.",
      status: "Annual Major"
    },
    {
      id: "cursed-cruiser",
      name: "Cursed Cruiser",
      rule: "All Cruiser • No Rules",
      badge: "MISSILE BROADSIDE",
      badgeColor: "purple",
      icon: "assets/icons/units/Cruiser.png",
      unitType: "Cruisers Only",
      description: "High-tonnage missile firepower and rapid naval gun slugfest. All cruisers unleashed with no armaments withheld. Maximum durability meets devastating salvos.",
      status: "Special Class"
    },
    {
      id: "death-by-destroyer",
      name: "Death By Destroyer",
      rule: "All Destroyer • No Rules",
      badge: "SPEED & DESTRUCTION",
      badgeColor: "red",
      icon: "assets/icons/units/Destroyer.png",
      unitType: "Destroyers Only",
      description: "High-speed tactical duels where agile destroyers drift around islands and exchange blistering torpedo volleys and hyper-velocity railgun shots.",
      status: "Special Class"
    },
    {
      id: "rust-battleship",
      name: "Rust Battleship",
      rule: "All Battleship • Heavy Armor",
      badge: "TITANIC DREADNOUGHTS",
      badgeColor: "orange",
      icon: "assets/icons/units/Battleship.png",
      unitType: "Battleships Only",
      description: "Colossal steel behemoths trading catastrophic main battery blows. Colossal HP pools, armor plating, and massive cannon impacts across open waters.",
      status: "Heavyweight Special"
    },
    {
      id: "lazer-levitation",
      name: "Lazer Levitation",
      rule: "Ekranoplan • Sea Skimmer",
      badge: "GROUND-EFFECT WARFARE",
      badgeColor: "cyan",
      icon: "assets/icons/units/Ekranoplan.png",
      unitType: "Ekranoplans (Lun, etc.)",
      description: "High-velocity ground-effect skimming vehicles screaming across the water surface armed with rapid laser mounts, rocket pods, and hypersonic agility.",
      status: "Experimental Class"
    }
  ],
  // Future Innovation & Unique Concepts
  conceptTournaments: [
    {
      name: "Frigate Blitz",
      category: "Wolfpack Escorts",
      icon: "assets/icons/units/Frigate.png",
      concept: "Ultra-agile light combatants focusing on precision maneuvering, rapid reload guns, and rapid response team synergy."
    },
    {
      name: "Hover Warfare",
      category: "Amphibious Air-Cushion",
      icon: "assets/icons/units/LAV.png",
      concept: "High-speed hovercraft skipping across shallows and open seas for ambush lightning strikes and surprise maneuvers."
    },
    {
      name: "ASL (Anti-Sub League)",
      category: "Combined Arms ASW",
      icon: "assets/icons/units/Destroyer.png",
      concept: "Dedicated anti-submarine hunter-killer warfare matching specialized helicopter & surface fleets against wolfpacks."
    }
  ]
};
