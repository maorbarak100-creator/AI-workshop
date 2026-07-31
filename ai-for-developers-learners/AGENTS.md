# AI for Developers — Learners Kit

Training workspace for hands-on Cursor exercises. Follow `playbook.html` in the browser.

## Layout

| Path | Role |
|------|------|
| `playbook.html` | Exercise guide (תרגיל 1 then תרגיל 2) |
| `sample-code/` | Warm-up code for תרגיל 1 |

תרגיל 2 uses a **separate** FinDash repository (clone URL from the instructor). Do not assume FinDash lives in this folder.

## Conventions (תרגיל 1)

- Identifiers and file names: English. Comments and JSDoc: Hebrew.
- Prefer small steps: change, run, verify.
- Do not add external libraries without approval.

## Agent behavior

1. Work in **Agent** mode when the learner asks for code changes or commands.
2. The learner is the reviewer: explain before large edits; wait for approval on risky changes.
3. Prefer running code to verify claims (terminal / tests) over guessing.
4. Keep diffs minimal. No unrelated refactors.
5. When the playbook asks for a plan first, do not write implementation code yet.
