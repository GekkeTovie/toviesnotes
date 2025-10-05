---
{"dg-publish":true,"permalink":"/projects/os/rice/sway-nc-tovie-edition/","title":"🧪 Tovie’s Note Cauldron","contentClasses":"tovie-cauldron matrix-enable matrix-preset","noteIcon":""}
---

# Summoning SwayNC: a Triple-Monitor Tale from the Hyprland Underworld 🔮

## *This could be better he said. It'll be done in a jiffy he said... (insert 1 week later meme here)*

There I was, staring into the cold, unblinking eye of Wayland, clutching a lukewarm coffee and a handful of dotfiles like tarot cards. ☕🃏 Mako had been my messenger sprite for a while—loyal, but… minimal. I wanted a proper **notification grimoire**. Something with presence. Something with flair. Enter **SwayNC**, draped in a Hyprstellar cloak, with fonts sharp enough to shave pixels and colors whispered from my wallpaper like a prophecy. ✨🧙‍♂️

This is the chronicle of how I kicked Mako off the summoning circle, carved a **sixth** workspace rune for the third monitor, taught Waybar a new trick, and stitched the whole thing together with **pywal** and a couple of deliciously cursed fonts. 🪄🧵

---

## Chapter I — Replacing the Sprite (Mako → SwayNC) 🐉

Mako’s tiny bells fell quiet. In `~/.config/hypr/autostart.conf` I pulled the velvet rope:

```ini
# Retire the old herald
# exec-once = mako

# Summon the new oracle
exec-once = swaync
```

And because some spirits just don’t know when to leave:

```bash
pkill -f mako || true
grep -Rin "mako" ~/.config ~/.local/share /etc/xdg 2>/dev/null
```

If it squeaks, I exorcise it. 🧹

---

## Chapter II — Forging the Sixth Sigil (Workspaces for 3 Screens) 🗿

Two monitors are civilized. Three are **mythic**. I etched a sixth workspace into Waybar so each screen could claim its own altar. 🖥️🖥️🖥️

`~/.config/waybar/config`:

```json
"hyprland/workspaces": {
  "on-click": "activate",
  "format": "{icon}",
  "format-icons": {
    "default": "",
    "1": "1", "2": "2", "3": "3",
    "4": "4", "5": "5", "6": "6",
    "7": "7", "8": "8", "9": "9",
    "active": "󱓻"
  },
  "persistent-workspaces": {
    "1": [], "2": [], "3": [],
    "4": [], "5": [], "6": []
  }
},
```

Six thrones, six crowns. The desktop finally **felt** like a command bridge, not a folding chair. 👑

---

## Chapter III — Teaching Waybar to Wink (Notifications on the Right) 👁️

The default network widget? Cute. But I wanted a **red-dot omen** when messages arrived—like a familiar tapping the window. 🔴🕊️

`modules-right` now includes my custom SwayNC herald:

```json
"modules-right": [
  "group/tray-expander",
  "bluetooth",
  "custom/notification",
  "pulseaudio",
  "cpu",
  "battery"
]
```

And the herald itself:

```json
"custom/notification": {
  "tooltip": false,
  "format": "{icon}",
  "format-icons": {
    "notification": "<span foreground='red'><sup></sup></span>",
    "none": "",
    "dnd-notification": "<span foreground='red'><sup></sup></span>",
    "dnd-none": "",
    "inhibited-notification": "<span foreground='red'><sup></sup></span>",
    "inhibited-none": "",
    "dnd-inhibited-notification": "<span foreground='red'><sup></sup></span>",
    "dnd-inhibited-none": ""
  },
  "return-type": "json",
  "exec-if": "which swaync-client",
  "exec": "swaync-client -swb"
}
```

Now the bar **whispers** when something wants attention, not just coughs politely. 🤫

---

## Chapter IV — Dressing the Oracle (Hyprstellar, Pywal, and Unreasonably Handsome Fonts) 👗

I borrowed the robe from **Xeji’s Hyprstellar** and realized the magic thread came from **pywal**. No `~/.cache/wal/colors-waybar.css`, no vibes. Also, the fonts. Oh, the fonts. ✍️

### The Ritual

```bash
# 1) Colors from the void
sudo pacman -S python-pywal

# 2) A drawer for your glyphs
mkdir -p ~/.local/share/fonts

# 3) A net for catching fonts
sudo pacman -S wget

# 4) The artist formerly known as DepartureMono Nerd Font
cd ~/.local/share/fonts
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/DaddyTimeMono.zip
unzip DaddyTimeMono.zip && rm DaddyTimeMono.zip

# 5) Ndot55 enters stage left (after you download it)
mv Ndot55*.ttf ~/.local/share/fonts/

# 6) Teach the system the new letters
fc-cache -f -v
```

Then I told pywal to drink in my wallpaper and breathe out a palette:

```bash
wal -i /path/to/your/wallpaper
```

Waybar’s style pulls the potion here:

```css
/* ~/.config/waybar/style.css (or your theme css) */
@import '../../.cache/wal/colors-waybar.css';
```

If your CSS name-drops `DepartureMono Nerd Font`, don’t panic—**DaddyTimeMono** is the glow-up. Keep both in your `font-family` just to flex: 😎

```css
font-family: "Ndot55Caps","Ndot55","DaddyTimeMono Nerd Font","DepartureMono Nerd Font", monospace;
```

---

## Chapter V — The Mirror Test (Did the Magic Take?) 🪞

I checked my sigils:

```bash
# Fonts present?
fc-list | grep -i "ndot\|departure\|daddytime"

# Colors poured into Waybar?
ls -l ~/.cache/wal/colors-waybar.css
```

Then I nudged the spirits:

```bash
# Refresh the oracle
swaync -R
swaync -rs

# Wake the status serpent
pkill -SIGUSR2 waybar 2>/dev/null || true

# If in doubt, reload the whole realm
hyprctl reload
```

And there it was—notifications gleaming, fonts crisp like midnight frost, colors synchronized with the wallpaper like it had been prophesied since kernel 2.6. ❄️🌌

---

## Epilogue — Tiny Monsters, Trapped Humanely 🧟

- **Mako won’t die?**  
    It’s probably autostarting from a dusty corner. You already ran:
    
    ```bash
    grep -Rin "mako" ~/.config ~/.local/share /etc/xdg 2>/dev/null
    ```
    
    Find it. Starve it. Move on. 🪤
    
- **SwayNC icon inert?**  
    Make sure `swaync` is actually running and your module calls `swaync-client`. It’s a herald, not a mind reader. 🧠
    
- **Colors look wrong?**  
    You must **run `wal` after choosing your wallpaper**. No potion, no glow. 🧪
    

---

## What Changed (a.k.a. The Spoils) 🏆

- Retired **Mako** and crowned **SwayNC** as the one true notifier.
    
- Forged **6 persistent workspaces** to honor the triple-monitor pantheon.
    
- Replaced the network widget with a **notification talisman** on the right.
    
- Wrapped everything in **Hyprstellar robes**, dyed by **pywal**, lettered by **Ndot55** and **DaddyTimeMono**. ✍️✨
    

If you want this whole ritual as a one-command **setup script**, say the word and I’ll bottle it like liquid lightning. ⚡ Until then—may your dots be tidy, your bar be bright, and your desktop a little bit haunted. 👻