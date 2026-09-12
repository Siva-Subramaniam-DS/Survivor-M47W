/**
 * Survivor M47W - Global Configuration
 * Tournament Server Settings, Links, Staff Hierarchy & Prize Matrix
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
          specialItem: "[GACHA SHIP]",
          specialIcon: "MW Icons/Units/Battleship.png",
          ac: null,
          hd: "20,000 HD",
          premium: "PREMIUM 30d"
        },
        {
          place: "2nd Place",
          placeBadge: "RUNNER UP",
          podiumClass: "podium-silver",
          titleBadge: "[HERO]",
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
          specialItem: "[GACHA ITEM]",
          specialIcon: "MW Icons/BP_vip_hires.png",
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
          specialIcon: "MW Icons/BP_premium_hires.png",
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
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
          titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
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
  // Exact 14 staff members with their exact server roles & direct Discord DM link support
  staff: [
    {
      name: "gocodes",
      discordId: "",
      isOwner: true,
      primaryRole: "Owner",
      roles: ["Owner", "Admin", "SuperAdmin", "Commander"],
      rankIcon: "MW Icons/Ranks/Rank61.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "cosmicpower.",
      discordId: "",
      isOwner: false,
      primaryRole: "Admin",
      roles: ["Admin", "SuperAdmin", "Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank60.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "hokage_141",
      discordId: "",
      isOwner: false,
      primaryRole: "Admin",
      roles: ["Admin", "SuperAdmin", "Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank60.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconLegend_Hires.png",
    },
    {
      name: "bhavesh.21",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank58.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "vinayak_shree",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Support"],
      rankIcon: "MW Icons/Ranks/Rank57.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "void_pr0",
      discordId: "",
      isOwner: false,
      primaryRole: "SuperAdmin",
      roles: ["SuperAdmin", "Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank57.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
    },
    {
      name: "godzy0978",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank55.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "jokoers",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank54.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "shiro_kaieda",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank53.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "yah1ko.1586",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander", "Support"],
      rankIcon: "MW Icons/Ranks/Rank52.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Epic_Hires.png",
    },
    {
      name: "hacrrr_707",
      discordId: "",
      isOwner: false,
      primaryRole: "Commander",
      roles: ["Commander"],
      rankIcon: "MW Icons/Ranks/Rank51.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "alii_ahmed",
      discordId: "",
      isOwner: false,
      primaryRole: "Support",
      roles: ["Support"],
      rankIcon: "MW Icons/Ranks/Rank50.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "giwrgos.l",
      discordId: "",
      isOwner: false,
      primaryRole: "Support",
      roles: ["Support"],
      rankIcon: "MW Icons/Ranks/Rank50.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIcon_Rare_Hires.png",
    },
    {
      name: "Animesh",
      discordId: "",
      isOwner: false,
      primaryRole: "IT Support",
      roles: ["IT Support"],
      rankIcon: "MW Icons/Ranks/Rank59.png",
      titleIcon: "MW Icons/Title/MW_TitleSystem_TitleIconHero_Hires.png",
    }
  ]
};
