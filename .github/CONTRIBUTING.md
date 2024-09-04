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
  |cypress/
  |public/
  |stories/
  |src/
    |components/
    |utils/
    |context/
    |images/
    |style/
    |pages/
      |About.jsx
      |OccupationPage.jsx
      |Search.jsx
```
## Running the development environment
Both the frontend and backend environments can be run with the following terminal command (run from inside their respective root folders):
```bash
npm run dev
```

## Environment variables
### Frontend 
REACT_APP_SERVER gives the frontend the address for the backend
### Backend 
API_KEY the key for accessing the occupational maps API, BASE_URL the part of the URL use in all calls to the occupational maps API, PORT what port to use if running locally, FRONTEND the address for the frontend.
