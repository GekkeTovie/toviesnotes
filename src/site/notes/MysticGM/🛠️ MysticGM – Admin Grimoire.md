---
{"dg-publish":true,"permalink":"/mystic-gm/mystic-gm-admin-grimoire/","noteIcon":""}
---

# 🛠️ MysticGM – Admin Grimoire

_Practical rituals for keeping the guild tidy, informed, and on-track._

---

## ✨ What’s inside?
- Quick, high-impact admin actions (purge, slowmode, promote/demote).
- Announcement + staff XP levers.
- “Nuke and republish” helpers for slash commands when you reshuffle cogs.

## ⚡ Quickcast (use these often)
- `/config` — Set or adjust guild settings.
- `/purge` — Delete 1–100 messages.
- `/slowmode` — Apply channel slowmode.
- `/promote` / `/demote` — Grant or remove a role.

## 🧭 Deep page – All commands
**Slash (standalone)**
- `/config` — Configure guild settings.
- `/purge` — Delete messages from a channel.
- `/slowmode` — Set slowmode for a channel.
- `/promote` — Promote a user with a role.
- `/demote` — Demote a user by removing a role.

**Group: `/admin ...`**
- `announcement` — Send a saved announcement embed.
- `reload-cogs` — Reload all bot extensions.
- `clear-slash-commands` — Remove all registered slash commands for this server (then run `/sync`).
- `set-staff-xp` — Set the staff XP reward for moderation or ticket actions.

> **Tip:** After major cog changes, run `/admin clear-slash-commands` then `/sync` to publish a clean set.
