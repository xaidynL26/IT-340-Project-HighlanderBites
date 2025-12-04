# Highlander Bites – Backend (Auth + API)

## Overview

This is the **backend** for the Highlander Bites project.  
It handles:

- User registration and login  
- JWT-based authentication  
- Protected routes (only accessible when logged in)  
- Connection to a MongoDB database  

The backend will eventually run on a **Backend VM** and connect to a **Database VM** in our 4-VM architecture.

---

## Tech Stack

- Node.js  
- Express  
- MongoDB (via Mongoose)  
- JSON Web Tokens (JWT)  
- bcrypt (password hashing)  
- dotenv (environment variables)  
- CORS  

---

## Branching / Git Workflow

- Main backend work happens on the **`backend`** branch.  
- New features should be developed in **feature branches** off `backend`, for example:
  - `feature/auth`
  - `feature/cart`
  - `feature/db-schema`

### Clone and use the `backend` branch

```bash
git clone <REPO_URL>
cd highlander-bites-backend
git checkout backend
git pull origin backend

