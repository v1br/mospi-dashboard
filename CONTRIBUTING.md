# Contributing

The TL;DR Version:
1. Adhere to the project structure. Analysis and model training should *only* be done within `/notebooks` and `/models` respectively. Website-development should be restricted to `/app`.

2. Every single feature, no matter what, should have a corresponding `issue`. If a feature was completed without one, create a new issue and close it immediately.

3. Never work on the `main` branch for any feature that is complex, time-consuming or likely to break the existing iteration of the project. Create a separate branch, finish the feature, then create a `pull request`.

4. To avoid potential miscommunication, ensure proper comments accompany each issue that concerns more than one person.

5. Maintain consistent commit headers. Only use `lower-case` characters and add a commit signature. The following signatures are in order-of-priority from highest to lowest. If your commit does multiple things, always opt for a higher priority signature.
```
init: initialize project
feat: add new feature
fix: remove existing bug
refactor: clean existing code
style: visual project improvements
chore: trivial changes
``` 

6. Mark all Merge commits with the lowercase `merge` signature. If you are unsure how to merge two branches due to a merge conflict, ask someone else to help you with it.