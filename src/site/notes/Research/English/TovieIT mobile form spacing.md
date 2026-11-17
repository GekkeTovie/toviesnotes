---
{"dg-publish":true,"dg-permalink":"/en/notes/tovieit-mobile-form-spacing/","permalink":"/en/notes/tovieit-mobile-form-spacing/","title":"Reducing mobile form spacing from 50 to 16 px","topic":"web","summary":"Full-page screenshots revealed inconsistent spacing further down the TovieIT site. Follow-up measurements confirmed the fix.","researchDate":"2026-11-17","researchLabel":"November 17, 2026","featured":true,"homeOrder":3,"tags":["css","qa","tovieit"],"locale":"en","alternateUrl":"/notities/tovieit-mobiele-formulieren/"}
---

## What we saw

A visual review of the public TovieIT pages turned up inconsistent spacing around forms. Screenshots of the first viewport would have missed the forms and the sections below them. We captured the full pages on both mobile and desktop.

## How we tracked it down

Compare the same fields on the same route at the same viewport width. Measure both the space between the fields and the space after the form. This makes it easier to see whether a shared layout accounts for the pattern on multiple pages.

On the public Websitezorg form, the measured gap between the name and email fields on mobile went from **50 to 16 px**. The gap below the form went from 97 to 45 px. Those figures apply to that specific form and mobile check.

## How we verified the change

The QA pass covered 42 public routes and the 404 page. We captured the routes again after deployment and ran 36 targeted layout checks across viewport widths of 320, 390, and 1440 px. We simulated error and confirmation messages locally to check how they affected the layout. [TovieIT](https://tovie.it.com/)

## AI setup at the time

Claude Code with Fable 5.2 reviewed the screenshots and worked on the layout changes. Codex captured the pages in a browser and checked the results in production. Comparing before and after at the same viewport made the change in spacing directly measurable.
