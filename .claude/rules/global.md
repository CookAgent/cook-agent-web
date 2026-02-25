# Global Rules

## Code Changes
- Read existing code before modifying. Understand context first.
- Follow the existing patterns and conventions in the repo.
- Do not introduce new dependencies without justification.
- Keep changes focused — one concern per PR.

## Security
- Never commit secrets, API keys, or credentials.
- Validate all external input at system boundaries.
- Use parameterized queries / ORM — never raw string concatenation for DB queries.

## Testing
- New features require tests. Bug fixes require regression tests.
- Tests must be deterministic.
- Do not skip or disable existing tests without documented justification.

## Documentation
- Update README if setup steps change.
- Record architectural decisions as ADRs.
- Update API docs (Swagger) for any endpoint changes.

## Git Hygiene
- Use conventional commit messages: `feat:`, `fix:`, `chore:`, `docs:`.
- Branch names: `feat/description`, `fix/description`, `chore/description`.
- Keep commits atomic — one logical change per commit.
- Do not force-push to shared branches.
