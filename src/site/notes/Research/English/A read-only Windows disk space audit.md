---
{"dg-publish":true,"dg-permalink":"/en/notes/windows-disk-space-audit/","permalink":"/en/notes/windows-disk-space-audit/","title":"Where did the free space on Windows go?","topic":"local-ai","summary":"A read-only disk audit started with file sizes, skipped junctions, and kept the inventory separate from cleanup decisions.","researchDate":"2026-11-17","researchLabel":"November 17, 2026","homeOrder":6,"tags":["windows","freebuff","storage"],"locale":"en","alternateUrl":"/notities/windows-schijfaudit/"}
---

## The question

How can you tell what is taking up disk space when several apps maintain their own downloads, caches, and working files? Start by inventorying the files by size. The owner can then decide what to keep in each category.

## How we investigated

Freebuff counted files by directory and summarized them in categories such as games, downloads, and working files. Windows junctions needed special handling. If you traverse a junction like an ordinary directory, the audit can count the same contents under two paths. A large directory can hold both disposable cache files and irreplaceable work. Check what the files are for before suggesting cleanup.

For a repeatable test, create three dummy directories containing a work file, a download, and a mock cache. Add a junction pointing to one of the directories. The total file size should stay the same when the scan skips the junction. If the scan counts the target files again, adjust how it handles the link.

## AI setup at the time

A local Freebuff CLI chat records the instruction to take inventory without modifying files. The saved chat shows the scan and its summary. The model is unconfirmed. Neutral labels and dummy files are enough to demonstrate the method publicly.
