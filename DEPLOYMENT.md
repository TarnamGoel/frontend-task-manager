# Deploying to Vercel with a Render Backend

## Frontend: Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, create a new project from the repository.
3. Use these settings:

   - Framework Preset: Angular
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: `dist/team-task-manager/browser`

The `vercel.json` file in this repo already sets the build command, output directory, and SPA fallback rewrite.

## Backend: Render

The frontend is configured to call:

```text
https://backend-task-manager-4f3d.onrender.com
```

Make sure the Render backend allows requests from your Vercel domain in CORS. After the first Vercel deploy, add both of these origins to the backend CORS allowlist:

```text
https://your-project-name.vercel.app
https://your-custom-domain.com
```

Only add the custom domain if you use one.

## Verify After Deploy

1. Open the Vercel URL.
2. Try signup or login.
3. If the browser console shows a CORS error, update the Render backend CORS origins and redeploy/restart the backend.
4. If API requests return `404`, confirm the backend routes include `/auth/signup`, `/auth/login`, `/dashboard`, `/users`, `/projects`, and `/tasks`.
