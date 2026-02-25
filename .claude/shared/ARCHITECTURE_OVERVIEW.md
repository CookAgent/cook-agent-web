# Architecture Overview — CookAgent / RecipLab

## System Boundaries

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  reciplab-web   │     │  cook-agent-app   │     │  External Users │
│  (Astro SSG)    │     │  (React Native)   │     │  (Mobile/Web)   │
│  Marketing site │     │  iOS + Android    │     └────────┬────────┘
└────────┬────────┘     └────────┬──────────┘              │
         │                       │                          │
         │              ┌────────▼──────────┐              │
         │              │  cook-agent-api   │◄─────────────┘
         │              │  (Express.js TS)  │
         │              │  REST API         │
         │              └────────┬──────────┘
         │                       │
         │              ┌────────▼──────────┐
         │              │    ai-agent       │
         │              │  (FastAPI/Python) │
         │              │  LangGraph AI     │
         │              └───────────────────┘
```

## Repos & Roles

| Repo | Role | Stack | Deployment |
|------|------|-------|------------|
| `reciplab-web` | Public marketing site | Astro + Tailwind | Static hosting |
| `cook-agent-app` | Consumer mobile app | React Native / Expo | App Store / Play Store (EAS) |
| `cook-agent-api` | REST API backend | Express.js / TypeScript / Sequelize / MySQL | Docker → Hetzner VPS |
| `ai-agent` | AI recipe agent service | Python / FastAPI / LangGraph | Docker → Hetzner VPS |

## Integration Points

- **cook-agent-app → cook-agent-api**: REST calls (Axios + React Query). Auth via Clerk.
- **cook-agent-api → ai-agent**: Internal HTTP calls for recipe generation/transcription.
- **cook-agent-api → MySQL**: Sequelize ORM. Migrations managed via Sequelize CLI.
- **cook-agent-api → Redis**: BullMQ job queues for background processing.
- **cook-agent-api → S3**: Object storage for recipe images.
- **cook-agent-api → Resend**: Transactional emails.
- **cook-agent-api → Expo Push**: Push notifications to mobile clients.
- **ai-agent → OpenAI**: GPT-4o for LLM processing.
- **ai-agent → Tavily**: Web search for recipe discovery.

## Data Flow

1. User opens mobile app → Clerk authenticates → API validates token.
2. User submits recipe request (text/URL/image) → API creates job → AI agent processes.
3. AI agent returns structured recipe → API persists to MySQL → App displays.

## Infrastructure

- **Production**: Hetzner VPS (Docker containers).
- **Mobile builds**: Expo EAS (cloud builds).
- **Static site**: Deployed as static files.
- **Secrets**: GitHub Secrets → injected via CI/CD.
