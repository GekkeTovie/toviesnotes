---
{"dg-publish":true,"dg-permalink":"/notities/tovieit-mobiele-formulieren/","permalink":"/notities/tovieit-mobiele-formulieren/","title":"Mobiele formulierafstand van 50 naar 16 px","topic":"web","summary":"Volledige paginaopnamen maakten een afwijkende afstand lager op de TovieIT-site zichtbaar. Een gerichte nameting bevestigde de correctie.","researchDate":"2026-11-17","researchLabel":"17 november 2026","featured":true,"homeOrder":3,"tags":["css","qa","tovieit"],"locale":"nl","alternateUrl":"/en/notes/tovieit-mobile-form-spacing/"}
---

## Wat we zagen

Bij de visuele controle van de publieke TovieIT-pagina’s vielen verschillen in formulierafstand op. Een opname van alleen het eerste scherm zou het formulier en de delen daaronder missen. We maakten daarom volledige opnamen op mobiel en desktop.

## Hoe we het ontdekten

Vergelijk dezelfde invoervelden op dezelfde route en viewport. Meet de lege ruimte tussen de twee velden én de ruimte na het formulier. Daarmee kun je de onderlinge afstand beoordelen en controleren of een gemeenschappelijke layout het probleem op meerdere pagina’s veroorzaakt.

Bij het openbare formulier voor Websitezorg ging de gemeten afstand tussen naam en e-mail op mobiel van **50 naar 16 px**. De witruimte onder het formulier ging van 97 naar 45 px. De cijfers horen bij dat formulier en die mobiele controle.

## De hercontrole

De QA-ronde omvatte 42 publieke routes en de 404-pagina. Na publicatie zijn de routes opnieuw vastgelegd. Daarnaast waren er 36 gerichte layoutcontroles op viewportbreedtes van 320, 390 en 1440 px. Fout- en bevestigingsmeldingen zijn apart in een lokale omgeving nagebootst, zodat hun effect op de layout beoordeeld kon worden. [TovieIT](https://tovie.it.com/)

## AI-setup toen

Claude Code met Fable 5.2 beoordeelde de paginaopnamen en werkte aan de layoutwijzigingen. Codex verzorgde de browseropnamen en controleerde het resultaat op productie. De voor- en nameting gebruiken dezelfde soort weergave, zodat het verschil in afstand direct te controleren is.
