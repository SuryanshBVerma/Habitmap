# Project Requirement Document
## Personal Habit Tracker

## 1. Purpose & Goals

### Objective
Build a simple, single-user habit tracker that allows tracking daily habits and visualizing consistency over time using a GitHub-style heatmap.

### Primary goals
- Extremely simple daily interaction (check/uncheck)
- Clear visual feedback over time
- Works in multiple deployment modes without changing core logic
- Clean data model that avoids derived state

### Explicit non-goals (v1)
- Authentication / multi-user support
- Notifications or reminders
- Habit scheduling (weekly/monthly)
- Partial completion
- Gamification (streaks, badges, scores)
- Social features or sharing

## 2. User Assumptions
- Single user (the owner of the app)
- User opens the app at least once per day
- User tracks habits only for today
- User is comfortable managing habits manually

## 3. Core Functional Requirements

### 3.1 Habit Management

#### Create Habit
User can create a habit with:
- Name (required)
- Habit is active by default

#### Archive Habit
User can archive a habit

Archived habits:
- Are shown in a separate section
- Appear visually muted (shaded)
- Cannot be checked
- Retain historical data

#### Delete Habit
User can permanently delete a habit

Deleting a habit:
- Removes the habit
- Removes all associated logs permanently
- Action must be confirmed

### 3.2 Daily Tracking

#### Rules
- Only today's date is trackable
- No retroactive or future tracking
- Each habit has exactly one boolean value per day
- Default state is false

#### Behavior
- User checks a habit → value becomes true for today
- User unchecks a habit → value becomes false for today
- State is persisted immediately (no save button)

### 3.3 Analytics & Visualization

#### Heatmap
Each habit has its own heatmap

Heatmap displays:
- Dates on X-axis
- Weeks on Y-axis

Color rules:
- `false` → light gray
- `true` → green
- No intensity gradients in v1

#### Time range
- Default: last 90 days
- Backend returns sparse data
- Frontend fills missing dates as false

## 4. Data Model Requirements

### Habit
- `id`
- `name`
- `createdAt`
- `archived` (boolean)

### Habit Log
- `id`
- `habitId`
- `date` (YYYY-MM-DD)
- `value` (boolean)

### Constraints
- One log per habit per day (enforced)
- Logs are removed when a habit is deleted
- Dates are stored as date strings, not timestamps

## 5. Backend Requirements

### Responsibilities
- Enforce "today-only" rule
- Prevent duplicate logs
- Own date generation (not client-supplied)
- Provide clean APIs for UI consumption

### Required API Capabilities
- Create, archive, delete habits
- Fetch today's tracker state
- Toggle today's habit state
- Fetch heatmap data for a date range

### Database
- MongoDB
- Unique constraint on `(habitId, date)`
- Connection string provided at runtime via environment variables

## 6. Frontend Requirements

### Pages

#### Tracker (default page)
- Shows today's date
- Lists all active habits
- Checkbox per habit
- Archived habits hidden or disabled

#### Habit Management
- Create habit
- Archive / unarchive habit
- Delete habit (with confirmation)

#### Analytics
- Heatmap per habit
- Archived habits shown muted or collapsed

## 7. Deployment & Runtime Modes

### Mono-repo
- Single codebase
- Shared types and utilities
- Frontend + backend in same repository

### Runtime DB Strategy
Application reads `DATABASE_URL`

Behavior depends solely on environment:
- Docker Compose → MongoDB container
- Hosted → MongoDB Atlas
- No runtime "mode flags" in code

## 8. Non-Functional Requirements

### Performance
- Heatmap queries should be range-based, not per-day
- Frontend computes derived views

### Reliability
- API calls must be idempotent
- Repeated toggles should not create duplicates

### Simplicity
- Avoid storing derived state (streaks, totals)
- Prefer recomputation over persistence

## 9. Known Constraints & Tradeoffs
- No offline-first support in v1
- Timezone handled at server level
- Unlimited habits may affect UI performance (accepted)
- No undo for destructive actions

## 10. Future Considerations (Explicitly Deferred)
- LocalStorage-only mode
- Google Drive sync
- Multiple habit values (numbers)
- Auth & multi-user support
- Streaks & summaries

## 11. Success Criteria

The project is considered successful when:
- User can track habits daily without friction
- Heatmap accurately reflects past activity
- Same codebase works with:
  - Docker + local Mongo
  - Hosted frontend + MongoDB Atlas
- Codebase remains simple and understandable after a break
