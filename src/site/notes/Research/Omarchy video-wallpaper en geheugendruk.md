---
{"dg-publish":true,"dg-permalink":"/notities/omarchy-video-wallpaper-ram/","permalink":"/notities/omarchy-video-wallpaper-ram/","title":"Waarom een video-wallpaper het RAM liet vollopen","topic":"ricing","summary":"Een transparante balk koos zijn tekstkleur uit de wallpaper. Met video als bron betekende dat een volledige decode per scherm.","researchDate":"2026-08-29","researchLabel":"29 augustus 2026","featured":true,"homeOrder":1,"tags":["omarchy","quickshell","ricing"],"locale":"nl","alternateUrl":"/en/notes/omarchy-video-wallpaper-memory/"}
---

## Het symptoom

Chromium-renderers en ImageMagick vielen kort na elkaar uit op een Linux-desktop. De kernelmeldingen wezen op zware geheugendruk. Daarmee werd de vraag welk proces in korte tijd zoveel geheugen vroeg.

## Hoe we het ontdekten

We volgden het pad van de transparante Quickshell-balk naar het script dat de tekstkleur kiest. Het script bekeek het gedeelte van de wallpaper onder de balk en gebruikte de gemiddelde kleur om het contrast te bepalen. De achtergrond wees op dat moment naar een video.

ImageMagick delegeerde het openen aan een videodecoder die alle frames aanleverde. De uitsnede kwam later. Voor een 4K-videoframe met vier 32-bits kleurkanalen vraagt de ruwe pixelbuffer al ongeveer 127 MiB. Bij 1.710 frames loopt de theoretische pixelcache op tot ongeveer 211 GiB, nog vóór andere kosten. Het werk werd bovendien per scherm uitgevoerd. Het getal is een berekening van de cachevraag. De kernelmeldingen en procesanalyse wezen onafhankelijk daarvan op geheugendruk.

## Wat een robuuste oplossing moet controleren

Laat de kleurmeting één representatief frame lezen, begrens de decode en deel het resultaat tussen schermen die dezelfde bron gebruiken. Bij een statische achtergrond kun je het beeld direct bemonsteren. Een apart script kan met een zelfgemaakte testvideo dezelfde kleurstaal berekenen en tegelijk de piek in geheugen meten.

Controleer bij toepassing welke Omarchy-versie, shell en wallpaper-backend actief zijn. De instellingen en overgangen zijn versiegebonden. [Omarchy-themadocumentatie](https://github.com/omacom/omarchy/blob/quattro/docs/theming.md)

## AI-setup toen

De case komt uit de technische notities van de Linux-desktop. Het AI-model voor deze sessie is niet bevestigd. De kernelmeldingen, de aanroepketen en de grootte van een gedecodeerd frame leveren de aanwijzingen voor de diagnose.
