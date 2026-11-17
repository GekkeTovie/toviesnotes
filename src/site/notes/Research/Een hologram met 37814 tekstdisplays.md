---
{"dg-publish":true,"dg-permalink":"/notities/minecraft-hologram-entitylek/","permalink":"/notities/minecraft-hologram-entitylek/","title":"Eén hologram, 37.814 tekstdisplays","topic":"modding","summary":"Een spark-profiel van trage ticks wees naar één Minecraft-chunk. De telling verklaarde waarom laden én opslaan vertraagden.","researchDate":"2026-09-24","researchLabel":"24 september 2026","featured":true,"homeOrder":2,"tags":["minecraft","performance"],"locale":"nl","alternateUrl":"/en/notes/minecraft-hologram-entity-leak/"}
---

## Het symptoom

De Create-server liep af en toe ver achter. Er draaide ook chunkgeneratie, dus die was een vroege verdachte. Om een piek te verklaren moesten we zien waar de tijd tijdens die specifieke tick naartoe ging.

## Hoe we het ontdekten

Met spark profileerden we alleen ticks die langer dan 100 ms duurden. In het profiel sprongen twee paden eruit. Minecraft besteedde veel tijd aan het opslaan van `TextDisplay`-entities en de afhandeling van spawn-events stond ook hoog. De telling per chunk liet zien hoe die paden samenhingen.

Eén chunk bevatte **37.814 tekstdisplays met dezelfde hologramtag**. Er hoorden er twee te staan. Bij het laden kwamen de displays elk door de spawn-afhandeling. Bij het uitladen gingen ze opnieuw door de serialisatie voor opslag. Eén oplopende entitytelling verklaarde zo onder meer de twee grote posten in het profiel.

## De ingreep en de nameting

Na een back-up ruimden we de opgehoopte tekstdisplays op. Daarna bleef de hologramchunk geladen, zodat de renderer zijn oude displays bij een update kon verwijderen. De telling kwam uit op twee en bleef ook bij latere controles op twee staan.

Tijdens de nameting werd nog terrein voorbereid. De telling bevestigde dat de ophoping gestopt was. Voor een uitspraak over de prestaties van de volledige server zou een afzonderlijk profiel zonder die achtergrondtaak nodig zijn.

## AI-setup toen

De diagnose is vastgelegd in de gesynchroniseerde notities van het Windows-werkstation. In de sessie is bij deze diagnose geen model vermeld. Het spark-profiel, de entitytelling en de herhaalde telling na de ingreep dragen de conclusie.
