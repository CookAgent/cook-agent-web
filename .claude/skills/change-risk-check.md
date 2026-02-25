# Skill: change-risk-check

disable-model-invocation: true

## Description
Assess the risk level of a proposed change before merge.

## Inputs Required
- `diff`: The git diff or PR diff to analyze.
- `repo`: Which repository.
- `repo_role`: One of `public_web`, `internal_app`, `api`, `service`.

## Steps
1. **Classify change type**: feature / bugfix / refactor / config / dependency / migration.
2. **Blast radius**: Count files changed, lines changed, and affected modules.
3. **Dependency check**: Are any shared modules or APIs affected?
4. **Breaking change detection**: Check for API contract changes, DB schema changes, removed exports.
5. **Security review**: Scan for secrets, auth changes, input validation changes.
6. **Rollback feasibility**: Can this change be reverted cleanly?
7. **Risk rating**: Assign Low / Medium / High / Critical.

## Risk Matrix
| Factor | Low | Medium | High | Critical |
|--------|-----|--------|------|----------|
| Files changed | 1-3 | 4-10 | 11-20 | 20+ |
| DB migration | None | Add column | Modify column | Drop/rename |
| API change | None | Add endpoint | Modify response | Remove endpoint |
| Auth change | None | Add check | Modify logic | Remove check |

## Outputs
- Risk level: Low / Medium / High / Critical.
- Summary of risk factors.
- Recommended review level (self-merge OK / 1 reviewer / 2 reviewers / team review).
- Specific concerns to address.

## Quality Gates
- All High/Critical changes require explicit mitigation plan.
- DB migrations marked as High minimum.

## DoD Checklist
- [ ] Change type classified.
- [ ] Blast radius assessed.
- [ ] Breaking changes identified (if any).
- [ ] Security implications reviewed.
- [ ] Risk rating assigned with justification.
