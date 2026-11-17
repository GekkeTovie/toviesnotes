---
{"dg-publish":true,"dg-permalink":"/en/notes/minecraft-hologram-entity-leak/","permalink":"/en/notes/minecraft-hologram-entity-leak/","title":"One hologram, 37,814 text displays","topic":"modding","summary":"A spark profile of slow ticks pointed to one Minecraft chunk. Counting its entities explained why loading and saving both took so long.","researchDate":"2026-09-24","researchLabel":"September 24, 2026","featured":true,"homeOrder":2,"tags":["minecraft","performance"],"locale":"en","alternateUrl":"/notities/minecraft-hologram-entitylek/"}
---

## The symptom

The Create modpack server fell behind in occasional bursts. Chunk generation was running in the background, so it was an early suspect. To explain a spike, we needed to see where the server spent its time during a slow tick.

## How we tracked it down

We used spark to profile only ticks that took longer than 100 ms. Two code paths stood out. Minecraft spent a lot of time saving `TextDisplay` entities and also spent substantial time handling spawn events. Counting entities by chunk showed how those paths were related.

One chunk contained **37,814 text displays with the same hologram tag**. It was supposed to have two. Loading the chunk sent every display through spawn handling. Unloading it then serialized them for storage. The buildup explained both hot paths in the profile.

## The fix and follow-up measurement

After taking a backup, we removed the accumulated displays and kept the hologram's chunk loaded. That let the renderer remove its previous displays when updating the hologram. The count dropped to two and remained at two on subsequent checks.

Terrain was still being generated during the follow-up. The entity count confirmed that the buildup had stopped. Measuring the effect on overall server performance would require a separate profile with background generation off.

## AI setup at the time

The synchronized notes from the Windows workstation record the diagnosis. That entry does not identify an AI model for this work. The spark profile, the original entity count, and the repeated checks after the fix support the conclusion.
