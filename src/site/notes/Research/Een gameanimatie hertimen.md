---
{"dg-publish":true,"dg-permalink":"/notities/animatie-hertimen/","permalink":"/notities/animatie-hertimen/","title":"Een gameanimatie hertimen met behoud van het impactmoment","topic":"modding","summary":"De piek per frame maakte een zichtbare sprong meetbaar. Eén gedeelde tijdcurve hield de pose en de geplande pauze intact.","researchDate":"2026-11-15","researchLabel":"15 november 2026","homeOrder":8,"tags":["animatie","keyframes","freebuff"],"locale":"nl","alternateUrl":"/en/notes/retiming-game-animation/"}
---

## Het probleem zichtbaar maken

Een paar gameanimaties leken bij het afspelen te springen. We maten op opeenvolgende frames hoeveel elk betrokken onderdeel bewoog. De grootste stap tussen twee frames werd afgezet tegen de gemiddelde stap in dezelfde clip. Zo werd zichtbaar waar beweging zich in een te kort tijdsinterval ophoopte.

## Hoe we het ontdekten

De eerste poging verschoof de keyframes per onderdeel afzonderlijk. Dat veranderde tegelijk hoe de bewegingen op elkaar aansloten. De vergelijking met de oorspronkelijke pose liet zien dat je met die aanpak een technisch vloeiende curve kunt krijgen terwijl het hele figuur er vreemd uitziet.

In de volgende proef gebruikte ieder onderdeel dezelfde tijdcurve. Het impactmoment bleef een vast anker. De poses behielden daardoor hun onderlinge timing, terwijl de grootste stap over meer frames kon worden verdeeld. De gemeten piek daalde in beide onderzochte clips. De pauze rond het impactmoment bleef behouden.

## Een eenvoudige herhaalproef

Maak een demo met een draaibare staaf en een tweede scharnier. Laat beide tegelijk hun eindpose bereiken. Vergelijk bij dezelfde afspeelfrequentie een versie met losse hertiming per scharnier en een versie met één tijdcurve tot aan het gezamenlijke impactframe. Bekijk in slow motion waar de pose uiteenloopt en meet op dat punt de grootste stap per frame.

## AI-setup toen

Freebuff op het Windows-werkstation vergeleek de keyframes en legde de verschillende proeven vast in de gesynchroniseerde werknotities. Het gebruikte model staat niet bij deze sessie. De meetmethode en de vergelijkingen vormen de basis van de diagnose.
