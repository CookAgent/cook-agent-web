# Definition of Done

A feature or fix is "done" when ALL of the following are true:

## Code
- [ ] Code is written, reviewed, and merged to main branch.
- [ ] Linting and formatting checks pass.
- [ ] No new warnings introduced.
- [ ] TypeScript: no `any` types without inline justification.

## Testing
- [ ] Unit tests written for new logic.
- [ ] Regression test added for bug fixes.
- [ ] All existing tests pass in CI.

## Security
- [ ] No secrets committed to version control.
- [ ] Input validation applied at system boundaries.
- [ ] OWASP Top 10 risks considered.

## Documentation
- [ ] README updated if setup steps changed.
- [ ] API changes reflected in OpenAPI/Swagger docs.
- [ ] ADR written for significant architectural decisions.

## Deployment
- [ ] CI pipeline passes (lint + test + build).
- [ ] Deployment to staging verified (if applicable).
- [ ] No breaking changes without migration plan.

## Observability
- [ ] Errors are logged with sufficient context.
- [ ] Key operations have appropriate log levels.
