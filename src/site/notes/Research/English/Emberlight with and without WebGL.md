---
{"dg-publish":true,"dg-permalink":"/en/notes/emberlight-webgl-fallback/","permalink":"/en/notes/emberlight-webgl-fallback/","title":"A status page with and without WebGL","topic":"web","summary":"On Emberlight, the interactive visual and the surrounding status labels communicate the same information.","researchDate":"2026-11-17","researchLabel":"November 17, 2026","homeOrder":9,"tags":["tovieit","webgl","accessibility"],"locale":"en","alternateUrl":"/notities/emberlight-webgl-fallback/"}
---

## The interface

Emberlight Status shows the health of public services. In the interactive view, a Three.js visual responds to the current status. The text labels and history remain readable in the static view. When an incident occurs, visitors should be able to see which service is affected even on a device that cannot render the visual.

## How we verified it

We reviewed the same public status page on desktop and mobile. In the test environment, we then simulated an outage and checked the static view without WebGL. We tested keyboard and touch controls separately to understand how the rest of the interface worked alongside the animation. [Emberlight Status](https://tovie.it.com/status/)

For a small independent test, use one fictitious service with two states, operational and outage. Read only the labels for each state, then enable the canvas. Check that the text, timestamp, and legend still communicate the same status.

## AI setup at the time

Claude Code with Fable 5.2 worked on the design and Three.js implementation. Codex checked the different views and input methods. The simulated outage was part of development testing.
