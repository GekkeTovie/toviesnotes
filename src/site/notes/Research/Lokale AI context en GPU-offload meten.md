---
{"dg-publish":true,"dg-permalink":"/notities/lm-studio-context-offload/","permalink":"/notities/lm-studio-context-offload/","title":"Context en GPU-offload meten in LM Studio","topic":"local-ai","summary":"Met synthetische SQL- en contextproeven onderzochten we hoeveel context stabiel draaide en hoeveel offload uitmaakte voor de snelheid.","researchDate":"2026-09-20","researchLabel":"20 september 2026","homeOrder":5,"tags":["lm-studio","rocm","benchmark"],"locale":"nl","alternateUrl":"/en/notes/lm-studio-context-offload/"}
---

## De vraag

We wilden lokaal een model gebruiken voor programmeerwerk en grotere projecten. Om te bepalen welk profiel prettig werkt, moesten we twee dingen apart meten. Hoeveel context doorliep het model bruikbaar, en hoe veranderde de snelheid als er meer lagen op de GPU terechtkwamen?

## Hoe we het onderzochten

Eerst valideerden we de contextprofielen van 16K en 32K met synthetische gegevens. Daarna draaiden we een compacte SQL-proef onder verschillende GPU-offloadprofielen. Bij de SQL-proef hielden we de taak en de controles aan de antwoorden gelijk. Bij een samenhangende meting noteer je de tijd tot het eerste token apart van de snelheid van de daaropvolgende tokens.

In de gemelde korte SQL-proef ging de gemeten snelheid van 8,01 tokens per seconde op het eerste 16K-profiel naar 21,98 tokens per seconde op het 12K-profiel met volledige GPU-offload. Beide antwoorden haalden alle 24 controles. De profielinstellingen verschilden in contextbudget én offload. De vergelijking laat zien welke combinatie voor die proef sneller werkte.

## AI-setup toen

Op het Windows-werkstation draaide LM Studio 0.4.25+1 met ROCm en Qwen3.8-27B in GGUF Q4_K_M. Codex hielp bij de opzet en het vastleggen van de proeven. Er was ook een geslaagde aparte toolronde van Claude Code via een lokale compatibiliteitsadapter. De SQL-data kwamen uit een synthetische fixture.

De genoemde snelheden horen bij die historische proef. Voor werken met lange bestanden is een afzonderlijke meting met een representatieve prompt nodig.
