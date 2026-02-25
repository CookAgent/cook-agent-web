# Skill: repo-audit

disable-model-invocation: true

## Description
Audit a repository for governance compliance, standards adherence, and common issues.

## Inputs Required
- `repo_path`: Path to the repository to audit.
- `repo_role`: One of `public_web`, `internal_app`, `api`, `service`.

## Steps
1. **Governance check**: Verify presence of CLAUDE.md, .claude/shared/, .claude/rules/, .github/CODEOWNERS, PR template, CI workflow, .editorconfig.
2. **Sync freshness**: Read `.claude/shared/.sync-marker` — warn if older than 7 days.
3. **Security scan**: Check for .env files not in .gitignore, hardcoded secrets patterns, exposed credentials.
4. **Indexing compliance**:
   - If `internal_app`: verify noindex meta tag or X-Robots-Tag header exists.
   - If `public_web`: verify NO noindex directives exist.
5. **Code quality**: Check linter config exists, TypeScript strict mode (if TS), test files present.
6. **Documentation**: Verify README exists with setup instructions. Check for stale/outdated docs.
7. **Dependencies**: Check for known vulnerabilities (`npm audit` / `pip audit`).

## Outputs
- Compliance scorecard (pass/warn/fail per check).
- List of issues with severity (critical/warning/info).
- Recommended fixes for each issue.

## Quality Gates
- All critical issues must have an action plan.
- Security issues are always critical.

## DoD Checklist
- [ ] All governance files present.
- [ ] Sync marker is current.
- [ ] No secrets in codebase.
- [ ] Indexing policy compliant.
- [ ] Linter and tests configured.
- [ ] README is adequate.
