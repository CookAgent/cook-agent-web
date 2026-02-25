# Skill: release-checklist

disable-model-invocation: true

## Description
Generate and verify a release checklist for a deployment.

## Inputs Required
- `repo`: Which repository to release.
- `repo_role`: One of `public_web`, `internal_app`, `api`, `service`.
- `version`: Version or tag being released (optional).
- `changes`: Summary of changes included in the release.

## Steps
1. **Pre-release checks**:
   - All CI checks passing on main branch.
   - No open critical/high severity issues.
   - All migrations tested (if applicable).
   - API docs updated (if API changes).
2. **Build verification**:
   - Production build completes without errors.
   - Docker image builds successfully (if containerized).
   - EAS build succeeds (if mobile app).
3. **Deployment**:
   - Deploy to staging first (if available).
   - Run smoke tests against staging.
   - Deploy to production.
   - Verify health check endpoint (APIs/services).
4. **Post-deployment**:
   - Monitor error rates for 15 minutes.
   - Verify key user flows work.
   - Check no new errors in logs.
   - Notify team via Discord.

## Repo-Specific Checks

### api / service (Docker deployments)
- [ ] Docker image tagged correctly.
- [ ] Environment variables up to date.
- [ ] Database migrations applied.
- [ ] Health endpoint responding.

### internal_app (Expo/EAS)
- [ ] EAS build profile correct (production).
- [ ] Version number incremented.
- [ ] App store submission ready (if applicable).

### public_web (Static site)
- [ ] Build output verified locally.
- [ ] No broken links.
- [ ] Lighthouse score > 90.
- [ ] SEO tags intact.

## Outputs
- Completed checklist with pass/fail per item.
- Blockers list (items that must be resolved before release).
- Go/no-go recommendation.

## Quality Gates
- All critical items must pass.
- No unresolved blockers.

## DoD Checklist
- [ ] Pre-release checks complete.
- [ ] Build verified.
- [ ] Deployment successful.
- [ ] Post-deployment monitoring complete.
- [ ] Team notified.
