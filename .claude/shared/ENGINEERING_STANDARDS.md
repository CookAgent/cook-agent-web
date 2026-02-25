# Engineering Standards

## Code Quality
- All code must pass linting and formatting checks before merge.
- TypeScript: strict mode enabled; no `any` without justification.
- Python: type hints required on public functions; PEP 8 enforced.
- No commented-out code in main branches.

## Branching & Commits
- Branch naming: `feat/`, `fix/`, `chore/`, `docs/` prefixes.
- Commits: conventional commits format (`feat:`, `fix:`, `chore:`, `docs:`).
- One logical change per commit.

## Code Review
- All changes require at least one approval before merge.
- Reviewers check: correctness, security, tests, documentation.
- Self-merges allowed only for trivial docs/config changes.

## Dependencies
- Pin major versions in production.
- Audit dependencies quarterly for vulnerabilities.
- Prefer well-maintained, widely-adopted packages.

## Error Handling
- Never swallow errors silently.
- Use structured error responses with consistent schemas.
- Log errors with sufficient context for debugging.

## Testing
- New features require tests (unit at minimum).
- Bug fixes require a regression test.
- Tests must be deterministic — no flaky tests in CI.

## Documentation
- Public APIs must have OpenAPI/Swagger docs.
- README in every repo with setup instructions.
- Architecture decisions recorded as ADRs.
