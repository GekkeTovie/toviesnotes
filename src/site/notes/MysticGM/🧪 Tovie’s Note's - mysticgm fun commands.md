---
{"dg-publish":true,"permalink":"/mystic-gm/tovie-s-note-s-mysticgm-fun-commands/","noteIcon":""}
---

# MysticGM Fun Command Playbook

## Using This Guide
- Every command below is a slash command (type `/` in Discord and start typing the name).
- Options shown in `<angle brackets>` are required; `[square brackets]` are optional.
- Cooldowns, permissions, and flavour tips are noted so you know what to expect in live play.
- Jump to the **Interactive RPG Tutorial** at the end if you prefer to learn through a short narrative.

## Quick Randomizers & Decisions
- **`/8ball <question>`** — Ask the arcane orb for a yes/no take. Fun for quick icebreakers or chaotic planning.
- **`/roll [dice] [sides]`** — Default is 1d6. Supports up to 100 dice and 1000 sides; great for tabletop nights or loot rolls.
- **`/choose <options> [question]`** — Feed up to 20 options separated by commas, pipes, or new lines. The bot selects one and shows what it considered.

## Mood Checks & Ratings
- **`/vibecheck <thing>`** — Rates the energy of anything from 0‑100 with a short blurb.
- **`/rate <thing>`** — Delivers a playful 1‑10 score plus a star bar. Ideal for rating outfits, builds, or pizza tiers.

## Social Spark & Banter
- **`/ship <user_one> <user_two>`** — Generates compatibility percentage and commentary; light-hearted by design.
- **`/roast <user>`** — Friendly snark with a 30-second per-user cooldown. Only run on volunteers!
- **`/compliment [user]`** — Sends a wholesome boost. Target defaults to you if no user is provided.
- **`/pickup-line`** — Drops a cheesy line when you need laughs or cringe content on demand.

## Party Prompts & Mini Games
- **`/wyr`** — Supplies a “Would You Rather” prompt and interactive buttons so friends can vote.
- **`/truth-or-dare [mode]`** — Pick `truth`, `dare`, or leave blank to let fate decide. Prompts are PG and server-safe.
- **`/dadjoke`** — Quick setup/punchline combo for groan-worthy humour.
- **`/quote [topic]`** — Pulls an inspirational or quirky line. Topics include motivation, creativity, friendship, gaming, life, and humor.

## Reactions & Wordplay
- **`/meme [keyword]`** — Grabs a curated meme. Add a keyword (like `deploy` or `debug`) to theme the result.
- **`/gif [keyword]`** — Returns a reaction GIF from the bot’s library, filtered by vibe when you provide a tag.
- **`/uwu <text>`** — Uwuifies any sentence while preserving punctuation.
- **`/emojify <text>`** — Translates keywords into emoji-based storytelling.

## MysticGM RPG Command Deck

### Economy & Banking
- **`/balance [user]`** — View wallet, bank, prestige, job, and current biome. Defaults to your profile.
- **`/bank deposit <amount|all>`** — Move coins from wallet to bank. Accepts numeric values or `all`.
- **`/bank withdraw <amount|all>`** — Pull coins back into your wallet.
- **`/pay <user> <amount>`** — Direct wallet-to-wallet transfer (capped to the transfer limit).
- **`/daily`** — Claim a streak-based stipend (22 hour cooldown). Pet perks and seasons can boost rewards.
- **`/weekly`** — Collect the weekly stipend (7 day cooldown).
- **`/rankings [category]`** — Browse economy, XP, or prestige standings with pagination.

### Jobs & Skills
- **`/job set <miner|angler|forager|artisan>`** — Specialise for tailored rewards.
- **`/work`** — 15 minute cooldown quick shift that pays coins and nudges job-aligned skills.
- **`/skills [user]`** — Inspect skill levels and XP totals tracked for the guild.

### Gathering, Farming & Collections
- **`/fish [biome]`**, **`/mine [biome]`**, **`/forage [biome]`** — 5–7 minute cooldown gathering loops. Specify a biome key to force travel; otherwise the bot uses your current biome.
- **`/farm plant <seed_key>`** — Starts a 30-minute growth timer (shorter with pet perks or seasonal boosts).
- **`/collect`** — Harvest ripe farm plots and retrieve completed pet mission rewards in one sweep.
- **`/explore [biome]`** — 20 minute cooldown encounter roll. Unlocks points of interest, triggers event bus objectives, and can change your current biome.

### Inventory, Crafting & Gear
- **`/inventory [user]`** — Paginated view of everything you’re carrying.
- **`/craft <recipe_key> [quantity]`** — Spend materials/coins to create items and gain crafting XP.
- **`/gear equip <item_key>`** — Remove an item from your inventory and mark it as equipped.
- **`/enchant <item_key> [rune]`** — Pay the coin cost to infuse gear with a rune tag for future logic hooks.
- **`/salvage <item_key>`** — Break an item down into salvage shards.

### Market & Trading
- **`/market list <item_key> <price> [quantity]`** — Post items to the shared market (tax applied on sale).
- **`/market buy <listing_id> [quantity]`** — Purchase from active listings by ID.
- **`/trade <user>`** — Launches a secure, two-party trade UI where both adventurers confirm offers.

### Companions & Pets
- **`/pet adopt <species_key> [make_active]`** — Adopt a companion and optionally set it as active immediately.
- **`/pet send <activity> [biome]`** — Dispatch your active pet on a timed mission; rewards arrive via `/collect`.

### Quests & Progression
- **`/quest list [zone]`** — Shows quests loaded from the JSON packs. Filter by zone slug such as `verdant_hollow`.
- **`/quest accept <quest_id>`** — Adds the quest to your progress log (duplicates are blocked).
- **`/quest submit <quest_id>`** — Validates objectives, changes status to completed, and prepares rewards for payout hooks.

### Duels, Dungeons & Co-op
- **`/duel challenge <user> [wager]`** — Instant-resolution duel with optional coin stake.
- **`/dungeon start <tier>`** — Opens a lobby UI for co-op runs (tier 1–5).

### Seasonal Festivals
- **`/festival_start <name> [duration_mins]`** — Guild staff action (Manage Guild permission). Start `fishing_contest`, `seed_relay`, or `lantern_run`.
- **`/festival_join`** — Registers you for all active festivals in the channel.
- **`/festival_cast [size]`**, **`/festival_seed [bundles]`**, **`/festival_lantern [minutes]`** — Score points in the corresponding mini-game.
- **`/festival_score`** — View live standings; works mid-event or after the ticker announces the finale.

## Interactive RPG Tutorial — “Lumin’s First Week in Hearthwell”

Step into the boots of **Lumin**, a new arrival assigned to Hearthwell. Follow along in order, or pick scenes that fit your current progress.

### 1. Arrival at the Ember Gate
- Story: Guild Scribe Pip Lanternboy welcomes you and hands over a stamped ledger.
- Try: `/balance` to confirm your starting wallet and biome.
- Try: `/daily` (and `/weekly` if ready) to collect the guild stipend. Pip notes pet or seasonal bonuses if you have them.
- Tip: Funds go to your wallet; stash long-term savings with `/bank deposit all`.

### 2. Settling Your Finances
- Story: Quartermaster Breda Grain insists everyone banks responsibly before exploring.
- Try: `/bank deposit all` to secure your coins, then `/bank withdraw 200` to keep some walking money.
- Try: `/pay @party-mate 50` to reimburse a teammate for trail rations.
- Peek: `/rankings prestige` to see who currently leads the town.

### 3. Choosing a Trade
- Story: Elder Marlen offers four apprenticeships tied to the valley’s needs.
- Try: `/job set forager` (or your flavour). The decision affects gathering rewards.
- Try: `/work` to complete your first contract shift. Cooldown: 15 minutes.
- Track: `/skills` to make sure crafting, fishing, or other XP is registering.

### 4. First Quest Chain
- Story: Archivist Thalen pins a parchment about glowcap lanterns to the quest board.
- Browse: `/quest list zone: verdant_hollow` to read the available arcs.
- Accept: `/quest accept verdant_01_glowcaps`.
- Adventure: Head to the forest with `/forage biome: verdant_hollow`. Each gather dispatches an `rpg_event` behind the scenes, ticking up your objective counter.
- Check: `/inventory` and `/collect` to see if mission rewards or crops are ready.

### 5. Expanding the Toolkit
- Story: Ressa Emberwright offers to retool gear if you bring parts.
- Craft: `/craft lantern_frame 1` (replace with any unlocked recipe) to learn the interface and spend materials.
- Equip: `/gear equip lantern_frame` so the stats apply.
- Enchant: `/enchant lantern_frame ember` to add a rune flourish.
- Salvage: `/salvage cracked_ore_blade` when you outgrow low-tier gear.

### 6. Sustaining the Homestead
- Story: Breda hands you emberroot seeds for the communal garden.
- Plant: `/farm plant emberroot_seed`.
- Gather: Rotate `/fish`, `/mine`, and `/forage` while the timer runs. Pets provide extra bonuses if active.
- When the timer expires, `/collect` to harvest crops and pet rewards.

### 7. Companions & Missions
- Story: Pip introduces you to a shy **sprig fox** looking for a handler.
- Adopt: `/pet adopt sprig_fox make_active:true`.
- Send: `/pet send scouting biome: verdant_hollow` to start a 45 minute mission (seasonal bonuses may shorten it).
- Once the timer hits zero, run `/collect` again to cash in the haul.

### 8. Market Day in Brineglass
- Story: Merchant Verdure sets up a traveling stall near the coast.
- List: `/market list glowcap_bundle 120 2` to sell excess forage.
- Buy: `/market buy 17` (replace with a live listing ID) for bait or kits you need.
- Trade: `/trade @angler` to swap coins; confirm both sides in the UI.

### 9. Festival of Springtide
- Story: Tidecaller Kain Tidemarch kicks off the seasonal celebration.
- If you have staff perms, run `/festival_start fishing_contest 30`. Otherwise, wait for the announcement.
- Join: `/festival_join`, then spam `/festival_cast size:3` during the contest window.
- Track: `/festival_score` for standings. Don’t forget `/festival_seed` or `/festival_lantern` if those events are active.

### 10. Friendly Rivalries
- Story: Ser Jor Flint challenges you to prove your mettle.
- Duel: `/duel challenge @ser-jor 200` to place a wagered spar (make sure you can afford the stake).
- Explore: `/explore biome: emberfield` afterwards to recover lore snippets and quest flags.

### 11. Into the Rootbound Nursery
- Story: With glowcaps delivered, Elder Marlen unlocks a novice dungeon.
- Rally allies via `/dungeon start 1` and use the lobby buttons to fill the party.
- After victory, finish quests with `/quest submit verdant_01_glowcaps`.
- Celebrate by checking `/rankings xp` to see how the run boosted you.

### 12. Wrapping the Week
- Story: Mystic Council tallies contributions for the Tidemother.
- Visit the bank (`/bank deposit all`), claim lingering rewards (`/collect`, `/daily`), and ensure your gear is ready for the next festival.
- Optional epilogue: Host a tavern night using `/truth-or-dare`, `/meme`, `/gif`, and `/dadjoke` to keep morale high.

## What’s Next?
- TBA

Enjoy blending documentation with narrative—see you in Hearthwell! 
