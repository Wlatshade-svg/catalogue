---
name: make-it-web
description: Publish a Wlat Shade (ووڵات شەید) page, app or 3D tool as a live web page under wlatshade.pages.dev/<folder>/. Use whenever the user says "بیکە بە وێب", "بیکە بە ویب", "بیخە سەر وێب", "make it web", "put it online", or names a file, folder, branch or repo (e.g. in shad3d) and wants it on the website — even when they only give a name like "padel".
---

# Make it web — بیکە بە وێب

Takes something the user already has (a folder in a GitHub repo or branch, an
uploaded file or zip, or an HTML page) and makes it a live page on the Wlat
Shade site, without touching the main catalogue page.

**Where it goes live:** repo `Wlatshade-svg/catalogue`, branch `main`.
Cloudflare Pages deploys `main` automatically, so a folder `X/` is served at
`https://wlatshade.pages.dev/X/` about 2–3 minutes after the push.

Reply to the user in Kurdish Sorani, short and plain; they follow on a phone.

## 1. Find the thing they mean

- A bare name ("padel", "3d") is a folder or file name, not a description.
  Search for it before asking:
  - every branch of every repo they mention, not just `main`:
    `git fetch --depth 5 origin '+refs/heads/*:refs/remotes/origin/*'`, then
    `git ls-tree -r --name-only <branch> | grep -i <name>` per branch;
  - if the repo is not in the session yet, attach it with `add_repo`
    (owner `Wlatshade-svg`) and clone it — don't say it's unreachable first.
- If they send a screenshot of GitHub, read the repo name off it.
- Several matches → take the newest commit that touches it, and say which
  branch it came from. Ask only if two matches are genuinely different things.
- Wrong guess? The user will say "نا ئەوە ناڵێم". Then remove what you
  published by mistake (or replace it) — don't leave it live.

## 2. Check it before it goes public

Copy it into a fresh scratch folder (`git archive <branch> <path> | tar -x`)
and look before publishing — everything on the site is downloadable by anyone.

- **Paths must be relative** (`./app.js`, `fonts/x.woff2`), not `/app.js`.
  Absolute paths break inside a subfolder. Check `src=`, `href=`, importmaps,
  `fetch(`, and `import ... from`.
- **External dependencies:** list every `https://` host it loads. CDNs and
  Google Fonts are fine; note anything else.
- **Tracking/analytics IDs** (`G-…`, `GTM-…`, `UA-…`): a hard-coded ID that
  isn't theirs must be flagged — it would send their visitors' data elsewhere.
- **Other companies' brand names** (anything with ®/™, or a supplier name):
  don't remove silently; tell the user where it shows and ask.
- **Service workers** (`sw.js`, `navigator.serviceWorker`): fine, but they
  are scoped to the folder. If you later replace a folder that had one, leave
  a self-removing `sw.js` behind (see `scripts/retire-sw.js`) so old visitors
  don't stay stuck on cached files.
- Leave out source-only files (`*.src.js`, `.map`, README with private
  notes, `THIRDPARTY` files) unless the page needs them.

## 3. Test it the way it will be served

Serve from a parent folder so the page runs under `/<folder>/`, exactly like
production, then open it at phone and desktop size:

```bash
SRV=<scratch>/srv; mkdir -p $SRV/<folder>; cp -r <files> $SRV/<folder>/
(cd $SRV && nohup python3 -m http.server 8765 >/dev/null 2>&1 &)
NODE_PATH=$(npm root -g) node .claude/skills/make-it-web/scripts/check-page.js \
  http://localhost:8765/<folder>/ <scratch>/shots
```

The script prints JS errors, failed requests, 4xx/5xx responses, canvas count
and horizontal overflow for 390×844 and 1366×850, and saves screenshots.
Look at both screenshots yourself. Ignore only Google Fonts failures (the
sandbox proxy blocks them; they work on the real site).
The script already starts Chromium with software WebGL, so three.js renders.

Don't publish if there are page errors, missing files or the 3D view is blank.
Fix what is clearly a packaging problem (a wrong path); anything about the
page's design or content, ask first.

## 4. Publish

```bash
cd <catalogue clone>; git checkout main; git pull origin main
mkdir -p <folder>; cp <checked files> <folder>/
git add <folder>; git commit -m "Serve <what it is> at /<folder>/ ..."
git push origin main
```

- **Folder name:** short, lowercase, ASCII, what the user called it
  (`padel`, `3d`). If it already exists, check what's there (`git log -- <folder>`)
  — replacing it is fine only when the user meant to update that same page.
- **Never edit the root `index.html`** or other folders as part of this.
  The catalogue page stays exactly as it was; confirm with
  `git show --stat HEAD` that only `<folder>/` changed.
- Pushing to `main` is expected here — "make it web" means go live. Larger
  changes to the catalogue page itself still go on a branch for approval.
- Commit footer: the session's attribution lines. Never a model name.

## 5. Tell the user

In Kurdish, in this order:

1. The link, bold: `https://wlatshade.pages.dev/<folder>/`, live in 2–3 min.
2. That you couldn't open the live link from here (the sandbox blocks
   pages.dev), so they should open it once on their phone — but that you ran
   it on phone and desktop sizes with no errors. Send the screenshots.
3. What it is in one or two lines (where it came from: repo + branch).
4. That the catalogue page did not change.
5. Anything from step 2 that needs their decision (foreign brand names,
   tracking IDs), and that it's a copy: changes in the source repo need
   "make it web" again to update the site.

Keep it short. No technical jargon beyond the link and folder name.
