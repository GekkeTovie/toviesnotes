---
{"dg-publish":true,"dg-permalink":"/en/notes/lm-studio-context-offload/","permalink":"/en/notes/lm-studio-context-offload/","title":"Measuring context and GPU offload in LM Studio","topic":"local-ai","summary":"Synthetic SQL and context tests helped us see which context lengths ran reliably and how throughput changed with offload.","researchDate":"2026-09-20","researchLabel":"September 20, 2026","homeOrder":5,"tags":["lm-studio","rocm","benchmark"],"locale":"en","alternateUrl":"/notities/lm-studio-context-offload/"}
---

## The question

We wanted a local model for coding and larger projects. Picking a usable profile meant measuring two things separately. How much context could the model handle reliably? How did throughput change when more layers ran on the GPU?

## How we tested it

First, we validated the 16K and 32K context profiles with synthetic data. Then we ran a short SQL task with different GPU offload profiles, keeping the task and its checks the same. When comparing runs, record time to first token separately from generation speed.

In the recorded SQL test, generation rose from 8.01 tokens per second with the first 16K profile to 21.98 tokens per second with the 12K profile and full GPU offload. Both runs passed all 24 checks. The profiles differed in both context budget and offload. The result tells us which combination performed better on that task.

## AI setup at the time

The Windows workstation ran LM Studio 0.4.25+1 with ROCm and Qwen3.8-27B in GGUF Q4_K_M. Codex helped set up and document the tests. A separate Claude Code tool-call test succeeded through a local compatibility adapter. The SQL data came from a synthetic fixture.

The reported speeds apply to that historical test. Long-file workloads need their own run with a representative prompt.
