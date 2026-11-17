---
{"dg-publish":true,"dg-permalink":"/en/notes/baritone-hotbar/","permalink":"/en/notes/baritone-hotbar/","title":"Why cobblestone kept returning to the hotbar","topic":"reverse-engineering","summary":"The stack came back every time it was moved. The active configuration and the source code explained the pattern.","researchDate":"2026-10-27","researchLabel":"October 27, 2026","homeOrder":4,"tags":["minecraft","baritone","source-code"],"locale":"en","alternateUrl":"/notities/baritone-hotbar/"}
---

## The recurring pattern

You could move cobblestone out of the hotbar by hand. Moments later, it would reappear in one of the nine slots. The consistency suggested a question worth investigating. Which code checks the inventory and actively puts a usable building block into the hotbar?

## How we tracked it down

The active Baritone configuration had `allowInventory` enabled. In `InventoryBehavior`, we found a code path that can move suitable blocks from the main inventory into the hotbar when it runs out of building blocks. With cobblestone available in the inventory, that accounted for both the returning stack and the timing. [InventoryBehavior source code](https://github.com/cabaletta/baritone/blob/master/src/main/java/baritone/behavior/InventoryBehavior.java)

## The change and a follow-up test

The session records that `allowInventory` was disabled. To check the result in a local world, use the same inventory and mod version for both runs. Move the stack out of the hotbar once with the setting on and once with it off. Observe whether it comes back in each run.

## AI setup at the time

Gemini 3.8 Flash via Antigravity CLI compared the active setting with the source code. Together, they explain the behavior. The historical chat does not contain a verified in-world A/B test.
