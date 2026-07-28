# FinDash — Agent Instructions

FinDash is a mock finance dashboard: accounts, transactions, and balances.
Stack: **Node.js + Express** (port 3000) + **Angular 17** (port 4200).

## Architecture

```
Angular (4200) → HTTP/JSON → Express (3000) → repository.js → data/*.json
```

| Layer | Location |
|-------|----------|
| API routes | `backend/src/app.js` |
| Business logic | `backend/src/services/` |
| Data access | `backend/src/repository.js` |
| Seed data | `backend/data/` |
| Frontend API | `frontend/src/app/api.service.ts` |
| Models | `frontend/src/app/models.ts` |

## Run

```bash
cd backend && npm install && npm start    # :3000
cd frontend && npm install && npm start   # :4200
```

## Conventions

- Code identifiers: English. Comments/JSDoc: Hebrew. UI: Hebrew (RTL).
- Backend logic in `services/`, not in route handlers.
- Frontend HTTP only via `api.service.ts`.
- Tests: `npm test` in `backend/` (node:test).
- Amounts: positive numbers; `deposit` adds, `withdrawal` subtracts.

## Agent behavior

1. Read existing code before editing.
2. Explain root cause before fixing bugs.
3. Run tests and verify endpoints after changes.
4. Keep diffs minimal — no unrelated refactors.
5. Do not add libraries or databases without approval.

## API (current)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/accounts` | All accounts |
| GET | `/api/accounts/:id` | Single account |
| GET | `/api/accounts/:id/transactions` | Account transactions |
| GET | `/api/accounts/:id/balance` | Account balance |
| POST | `/api/accounts/:id/transactions` | Add transaction |

When adding endpoints, update backend routes **and** `api.service.ts`.
