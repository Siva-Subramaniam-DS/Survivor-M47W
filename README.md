# Survivor [M47W] Website

The website for Survivor [M47W], a Modern Warships tournament server on Discord. It presents the server's tournament formats, prizes, staff and poster gallery. Tournament registration itself happens in Discord.

## Pages

| Page | Content |
|---|---|
| `index.html` | Home: server overview, stats and links to Discord and YouTube |
| `tournaments.html` | Tournament arenas and special formats (Saturday Series, Sunday Championship and more) |
| `prizes.html` | Prize pools and title rewards |
| `gallery.html` | Tournament poster gallery |
| `staff.html` | Staff roster and partners, with Discord contact buttons |

## Tech stack

Plain HTML, CSS and JavaScript with no build step. Hosted on Vercel (`vercel.json` sets clean URLs and asset caching).

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Editing content

Most content lives in one file, so pages rarely need editing by hand:

- `js/config.js`: server stats, Discord and YouTube links, staff roster, prize matrix
- `js/lang.js`: interface text
- `js/app.js`: rendering and interactions
- `css/`: styles
- `Assets/` and `MW Icons/`: images, posters, rank and title icons

## Project structure

```
index.html, tournaments.html, prizes.html, gallery.html, staff.html
css/        style.css, components.css
js/         config.js, lang.js, app.js
Assets/     icons, images, posters
MW Icons/   ranks, titles, units
vercel.json
```

## Credits

Server owner: gocodes. Modern Warships is a trademark of its respective owner; this is a community site.
