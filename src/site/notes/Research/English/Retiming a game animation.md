---
{"dg-publish":true,"dg-permalink":"/en/notes/retiming-game-animation/","permalink":"/en/notes/retiming-game-animation/","title":"Retiming a game animation without moving the impact frame","topic":"modding","summary":"Measuring peak frame-to-frame motion made the visible jump quantifiable. A shared timing curve preserved the pose and the intended pause.","researchDate":"2026-11-15","researchLabel":"November 15, 2026","homeOrder":8,"tags":["animation","keyframes","freebuff"],"locale":"en","alternateUrl":"/notities/animatie-hertimen/"}
---

## Measuring the jump

Some game animations appeared to jump during playback. We measured how far each animated component moved between successive frames. Comparing the largest step with the clip's average step showed where too much movement was being compressed into a short interval.

## How we tracked it down

The first attempt retimed keyframes independently for each component. That also changed how the movements lined up. Comparing the result with the original pose showed that individual curves could look smooth while the figure as a whole fell out of sync.

In the next test, every component used the same timing curve and the impact frame stayed fixed. This preserved the relative timing of the pose while spreading the large movement over more frames. The measured peak fell in both clips and the pause around impact was preserved.

## A small test to reproduce it

Build a demo with a rotating rod and a second joint. Set them up to reach their final poses at the same time. At the same playback frame rate, compare independent retiming for each joint with a shared timing curve up to the common impact frame. Watch in slow motion to see where the pose falls out of sync, then measure the largest step between frames.

## AI setup at the time

Freebuff on the Windows workstation compared the keyframes and recorded the tests in the synchronized notes. The model used is unconfirmed. The diagnosis comes from the measurements and the comparison between the two retiming methods.
