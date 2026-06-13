# Portfolio Project

This repository contains a React (Vite) frontend and a Laravel backend API.

Backend (Laravel):
- Run migrations and seeders, configure Sanctum for API tokens.
- Start the backend server with `php artisan serve` inside the `backend` folder.

Frontend (Vite + React):
- `npm install` then `npm run dev` to start.
- Run the frontend in the `frontend` folder.

One-command launch:
- Run `.\
ame\start-portfolio.ps1` from the project root to open backend and frontend servers in separate PowerShell windows.

API endpoints:
- `GET /api/portfolio` public
- `POST /api/login` returns token
- Protected: create/update/delete skills and projects under `auth:sanctum` middleware
