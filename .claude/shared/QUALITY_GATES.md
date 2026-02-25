# Quality Gates

## Gate 1 — Local Development
Before pushing:
- Code compiles/transpiles without errors.
- Linter passes with zero warnings on changed files.
- Unit tests pass locally.

## Gate 2 — Pull Request
CI must pass:
- **Node repos** (cook-agent-api, reciplab-web, cook-agent-app):
  - `npm run lint` (ESLint/Prettier)
  - `npm run build` (TypeScript compilation / Astro build)
  - `npm test` (Jest, if tests exist)
- **Python repos** (ai-agent):
  - `ruff check .` or equivalent linter
  - `pytest` (if tests exist)

PR requirements:
- At least 1 approval.
- All CI checks green.
- DoD checklist completed in PR description.

## Gate 3 — Pre-Merge
- No merge conflicts.
- Branch is up to date with main.
- Change risk assessed (see `change-risk-check` skill).

## Gate 4 — Post-Deploy
- Health check endpoint responds 200.
- No new error spikes in logs within 15 minutes.
- Smoke test critical paths if applicable.
