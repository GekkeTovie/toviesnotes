---
{"dg-publish":true,"dg-permalink":"/notities/emberlight-webgl-fallback/","permalink":"/notities/emberlight-webgl-fallback/","title":"Een statuspagina met en zonder WebGL","topic":"web","summary":"Bij Emberlight draagt de interactieve visual dezelfde informatie als de tekst en de statuslabels eromheen.","researchDate":"2026-11-17","researchLabel":"17 november 2026","homeOrder":9,"tags":["tovieit","webgl","toegankelijkheid"],"locale":"nl","alternateUrl":"/en/notes/emberlight-webgl-fallback/"}
---

## De interface

Emberlight Status toont de toestand van publieke diensten. In de interactieve weergave reageert een Three.js-visual op de status. De tekstlabels en geschiedenis blijven ook leesbaar in de statische weergave. Een bezoeker moet bij een storing snel kunnen zien welke dienst geraakt is, ook op een apparaat waarop de visual wegvalt.

## Hoe we het controleerden

We keken op desktop en mobiel naar dezelfde publieke statuspagina. Daarna doorliepen we in de testomgeving een gesimuleerde storing en de statische weergave zonder WebGL. Bediening met het toetsenbord en aanraking zijn afzonderlijk getest. Zo beoordeel je zowel de animatie als de bruikbaarheid van de informatie eromheen. [Emberlight Status](https://tovie.it.com/status/)

Een compacte eigen proef begint met één fictieve dienst en twee toestanden, operationeel en storing. Lees voor iedere toestand eerst alleen de labels. Schakel daarna de canvasweergave in. Controleer dat de tekst, het tijdstip en de legenda dezelfde melding blijven geven.

## AI-setup toen

Claude Code met Fable 5.2 werkte aan het ontwerp en de Three.js-implementatie. Codex controleerde de verschillende weergaven en bedieningsvormen. De proef met een gesimuleerde storing hoorde bij de ontwikkelcontrole.
