# Frontend for Idirissa Portfolio

This is the static frontend for the portfolio site.

## Deploy to Vercel

1. Open Vercel and connect this repository.
2. Set the project root to `frontend`.
3. Use the default static site deployment.

## Configure the API URL

Open `frontend/script.js` and update:

```js
const apiBaseUrl = 'https://YOUR_RENDER_APP.onrender.com/api';
```

Replace with your Render backend URL, for example:

```js
const apiBaseUrl = 'https://my-portfolio-backend.onrender.com/api';
```

## Notes

- The frontend will request data from the backend API.
- Deploy this folder separately from `backend/`.
- Keep the static files in `frontend/` and do not deploy the backend static assets from the backend folder.
