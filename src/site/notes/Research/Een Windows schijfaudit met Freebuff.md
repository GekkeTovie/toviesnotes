---
{"dg-publish":true,"dg-permalink":"/notities/windows-schijfaudit/","permalink":"/notities/windows-schijfaudit/","title":"Waar is de vrije ruimte op Windows gebleven?","topic":"local-ai","summary":"Een alleen-lezen schijfaudit begon met bestandsgroottes, sloeg junctions over en scheidde de inventaris van de beslissing om op te ruimen.","researchDate":"2026-11-17","researchLabel":"17 november 2026","homeOrder":6,"tags":["windows","freebuff","opslag"],"locale":"nl","alternateUrl":"/en/notes/windows-disk-space-audit/"}
---

## De vraag

Hoe bepaal je welke ruimte een schijf inneemt als meerdere apps hun eigen downloads, caches en werkbestanden opslaan? De eerste stap is een inventaris op basis van bestandsgroottes. De eigenaar kan daarna per categorie bepalen wat behouden moet blijven.

## Hoe we het onderzochten

Freebuff telde bestanden per map en vatte ze samen in categorieën zoals games, downloads en werkbestanden. Windows-junctions kregen speciale aandacht. Als je zo’n verwijzing als gewone map afloopt, kan dezelfde inhoud onder meerdere namen in het rapport komen. Een map die groot is, kan zowel herstelbare cache als onvervangbaar werk bevatten. Controleer daarom het type en de functie van de bestanden voordat je een opruimactie voorstelt.

Voor een herhaalbare proef kun je drie fictieve mappen maken met respectievelijk een werkbestand, download en nagemaakte cache. Voeg aan de proef een verwijzing naar één map toe. De verwachte telling verandert door de verwijzing zelf nauwelijks. Telt de inhoud een tweede keer mee, dan moet je de scan aanpassen.

## AI-setup toen

Een lokaal Freebuff-CLI-gesprek legde de opdracht vast om alleen te inventariseren. De opgeslagen chat laat de scan en de samenvatting zien. Het gebruikte model is niet bevestigd. Voor de publieke voorbeelden volstaan neutrale labels en zelfgemaakte bestanden.
