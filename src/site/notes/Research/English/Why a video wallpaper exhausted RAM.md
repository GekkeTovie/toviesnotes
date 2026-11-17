---
{"dg-publish":true,"dg-permalink":"/en/notes/omarchy-video-wallpaper-memory/","permalink":"/en/notes/omarchy-video-wallpaper-memory/","title":"Why a video wallpaper exhausted RAM","topic":"ricing","summary":"A transparent bar sampled the wallpaper to choose its text color. With a video as the source, that meant decoding the entire clip once per display.","researchDate":"2026-08-29","researchLabel":"August 29, 2026","featured":true,"homeOrder":1,"tags":["omarchy","quickshell","ricing"],"locale":"en","alternateUrl":"/notities/omarchy-video-wallpaper-ram/"}
---

## The symptom

Chromium renderer processes and ImageMagick crashed within a short period on a Linux desktop. Kernel messages pointed to severe memory pressure. The question was which process was requesting so much memory so quickly.

## How we tracked it down

We followed the transparent Quickshell bar to the script that chose its text color. The script sampled the section of the wallpaper beneath the bar and used the average color to pick a contrasting foreground. At the time, the configured wallpaper pointed to a video.

ImageMagick handed the input to a video decoder, which supplied every frame. The crop happened afterward. A 4K frame with four 32-bit channels needs about 127 MiB of raw pixel storage. Across 1,710 frames, the theoretical pixel cache comes to about 211 GiB before other overhead. The sampling job also ran separately for each display. The cache figure is an estimate of demand. Kernel messages and process inspection independently pointed to memory pressure.

## What to test in a fix

Sample one representative frame, cap the resources available to the decoder, and share the result across displays using the same source. For a static wallpaper, sample the image directly. To isolate the cost, use a video you made yourself and measure peak memory while calculating the same color sample.

Before applying the fix, check the Omarchy version, shell, and wallpaper backend. The settings and transitions vary by version. [Omarchy theming documentation](https://github.com/omacom/omarchy/blob/quattro/docs/theming.md)

## AI setup at the time

The case comes from the Linux desktop's technical notes. The AI model for this session is unconfirmed. The diagnosis rests on the kernel messages, the call chain, and the size of a decoded frame.
