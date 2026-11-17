---
{"dg-publish":true,"dg-permalink":"/notities/baritone-hotbar/","permalink":"/notities/baritone-hotbar/","title":"Waarom cobblestone steeds terug in de hotbar kwam","topic":"reverse-engineering","summary":"Het blok sprong terug zodra je het verplaatste. De actieve configuratie en de broncode verklaarden samen het patroon.","researchDate":"2026-10-27","researchLabel":"27 oktober 2026","homeOrder":4,"tags":["minecraft","baritone","broncode"],"locale":"nl","alternateUrl":"/en/notes/baritone-hotbar/"}
---

## Het terugkerende patroon

Cobblestone liet zich handmatig uit de hotbar verplaatsen. Kort daarna stond het weer op een van de negen plekken. Dat regelmatige gedrag gaf een aanknopingspunt. Welke code leest de inventaris en probeert er actief een bruikbaar bouwblok in te zetten?

## Hoe we het ontdekten

In de actieve Baritone-configuratie stond `allowInventory` aan. In de broncode van `InventoryBehavior` zagen we een pad dat bij ontbrekende bouwblokken in de hotbar een geschikt stapelbaar blok uit de rest van de inventaris kan verplaatsen. Met cobblestone beschikbaar in de inventaris verklaarde dat zowel de terugkerende stapel als de timing. [Broncode van InventoryBehavior](https://github.com/cabaletta/baritone/blob/master/src/main/java/baritone/behavior/InventoryBehavior.java)

## De wijziging en een controleproef

De sessie rapporteert het uitschakelen van `allowInventory`. Voor een controle in een lokale testwereld kun je dezelfde inventaris gebruiken en het blok twee keer verplaatsen. Vergelijk het resultaat met de instelling aan en uit. Zo maak je zichtbaar wat het uitschakelen doet en voorkom je dat verschillen in inventaris of modversie de proef vertekenen.

## AI-setup toen

Gemini 3.8 Flash via Antigravity CLI vergeleek de actieve instellingen met de broncode. Die combinatie verklaart het gedrag. De historische chat bevat geen bevestigde A/B-meting in een wereld.
