# Security & Privacy Standards

## Secrets Management
- Never commit secrets, API keys, or credentials to version control.
- Use `.env` files locally (always in `.gitignore`).
- Production secrets managed via GitHub Secrets or environment variables.
- Rotate keys immediately if exposed.

## Authentication & Authorization
- User auth handled via Clerk (JWT tokens).
- API endpoints must validate auth tokens on every request.
- Use middleware for auth — never inline token checks in controllers.
- Principle of least privilege for all service accounts.

## Input Validation
- Validate all external input (user input, webhook payloads, API params).
- Use schema validation (Zod, Joi, Pydantic) at system boundaries.
- Sanitize data before database queries — use ORM/parameterized queries.
- Never trust client-side validation alone.

## OWASP Top 10
- SQL Injection: prevented via Sequelize ORM / parameterized queries.
- XSS: sanitize output; use framework defaults (React auto-escapes).
- CSRF: API uses token-based auth (not cookies), mitigating CSRF.
- Security headers: use `helmet` middleware (Express) or equivalent.

## Data Privacy
- Minimize personal data collection.
- User data deletion must be supported (GDPR right to erasure).
- Logs must not contain PII (passwords, tokens, personal details).
- Cookie consent required on public web properties (reciplab-web).

## Dependency Security
- Run `npm audit` / `pip audit` regularly.
- Address critical/high vulnerabilities before deploy.
- Keep dependencies up to date (monthly review cadence).
