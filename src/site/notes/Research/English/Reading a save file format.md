---
{"dg-publish":true,"dg-permalink":"/en/notes/reading-a-save-file-format/","permalink":"/en/notes/reading-a-save-file-format/","title":"How to read an unfamiliar save file format","topic":"reverse-engineering","summary":"Inspired by Sextant, this example uses two synthetic saves and one controlled change to test a hypothesis about the data layout.","researchDate":"2026-05-11","researchLabel":"May 11, 2026","homeOrder":7,"tags":["save-format","sextant","test-data"],"locale":"en","alternateUrl":"/notities/save-format-gecontroleerde-vergelijking/"}
---

## The question

While working on Sextant, we needed to distinguish stored values from metadata that changes each time you save. A binary diff shows which bytes changed. You can test what they represent by changing one input at a time.

## A test with synthetic saves

The example uses an invented format. The first four bytes are a file signature. Create one save with 10 stars, change only the number of stars to 15, and keep both versions.

```text
10 stars     44 45 4d 4f  0a 00  01
15 stars     44 45 4d 4f  0f 00  01
```

The changed byte corresponds to the new star count. These examples say little about the second byte of the field. Make a third save with 256 stars. If the count is a 16-bit little-endian integer at that offset, expect `00 01` where the first save had `0a 00`. Test the prediction before documenting the field.

## What the parser should check

Have your parser check the signature and file length first. Then test that it can read values back after writing them and reject a truncated file. Save once more without changing any in-game values. If the bytes still change, you may be looking at metadata such as a timestamp. The extra save gives you a separate test for that assumption.

## AI setup at the time

The local Sextant history from May records work on save validation and test files. We could not verify which AI model was used for the original analysis. The bytes above were created for this explanation.
