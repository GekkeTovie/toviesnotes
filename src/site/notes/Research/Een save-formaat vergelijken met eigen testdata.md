---
{"dg-publish":true,"dg-permalink":"/notities/save-format-gecontroleerde-vergelijking/","permalink":"/notities/save-format-gecontroleerde-vergelijking/","title":"Hoe je een save-formaat leert lezen","topic":"reverse-engineering","summary":"Met twee zelfgemaakte saves en één wijziging kun je een hypothese over de datastructuur testen, geïnspireerd op het werk aan Sextant.","researchDate":"2026-05-11","researchLabel":"11 mei 2026","homeOrder":7,"tags":["save-formaat","sextant","testdata"],"locale":"nl","alternateUrl":"/en/notes/reading-a-save-file-format/"}
---

## De vraag

Bij het werk aan Sextant moesten opgeslagen waarden worden onderscheiden van metadata die verandert wanneer je opslaat. Een binaire diff toont welke bytes verschilden. De betekenis daarvan kun je testen door telkens precies één invoer te wijzigen.

## Een proef met eigen testdata

Hieronder staat een zelfbedacht formaat. De eerste vier bytes zijn een herkenningswaarde. Maak één save met 10 sterren, wijzig daarna uitsluitend het aantal sterren naar 15 en bewaar beide versies.

```text
10 sterren    44 45 4d 4f  0a 00  01
15 sterren    44 45 4d 4f  0f 00  01
```

De eerste gewijzigde byte komt overeen met het nieuwe aantal. Aan de tweede byte kun je in deze twee voorbeelden nog weinig aflezen. Maak daarom een derde save met 256 sterren. Als deze waarde een 16-bits little-endian getal op die plek is, verwacht je `00 01` waar eerder `0a 00` stond. Test je voorspelling voordat je het veld als zodanig documenteert.

## Wat de parser moet controleren

Laat je eigen parser eerst de herkenningswaarde en de lengte controleren. Test vervolgens of hij weggeschreven waarden terugleest en een te kort bestand afkeurt. Maak ook een extra save zonder spelwaarde te wijzigen. Als die toch verschilt, heb je een aanwijzing voor metadata zoals een tijdstempel. Zo krijgt iedere aanname een eigen tegenproef.

## AI-setup toen

De lokale Sextant-geschiedenis uit mei vermeldt werk aan savevalidatie en testbestanden. Bij de oorspronkelijke formaatanalyse is geen AI-model vastgesteld. De bytes op deze pagina zijn speciaal voor deze uitleg gemaakt.
