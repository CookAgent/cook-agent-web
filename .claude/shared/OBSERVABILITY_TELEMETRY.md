# Observability & Telemetry

## Logging

### Standards
- Use structured logging (JSON format in production).
- Log levels: `error`, `warn`, `info`, `debug`.
- Production runs at `info` level minimum.
- Include request ID / correlation ID in API logs.

### What to Log
- Incoming requests (method, path, status, duration).
- Error details with stack traces.
- External service calls (AI agent, Clerk, S3, Resend).
- Background job lifecycle (enqueued, started, completed, failed).

### What NOT to Log
- Passwords, tokens, API keys.
- Full request/response bodies (log summaries instead).
- PII (user emails, names) — use user IDs only.

## Monitoring
- Health check endpoints: `GET /health` on every service.
- Monitor response times and error rates.
- Alert on: sustained 5xx errors, health check failures, queue backlog growth.

## Tracing
- ai-agent: LangSmith tracing enabled for LLM call observability.
- cook-agent-api: Winston logger with request correlation.

## Analytics
- reciplab-web: Google Analytics / GTM (with cookie consent).
- cook-agent-app: RevenueCat for subscription analytics.
