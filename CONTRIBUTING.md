## Repo Structure
Pathways is organized into a `monorepo`, meaning there are two projects stored within the file structure. The backend and frontend deploy on separate servers and communicate on runtime.

```
|backend/
  |server/
    |routes/
    |server.js
    |src/
      |index.js
|frontend/
  |src/
  |components/
  |utils/
  |stories/
```
## Running the development environment
Both the frontend and backend environments can be run with the following terminal command (run from inside their respective root folders):
```bash
npm run dev
```