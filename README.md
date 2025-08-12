# Job Portal Frontend

A modern job portal frontend built with React, Material-UI, and Auth0 authentication.

## Technologies Used

- **ReactJS** - Frontend framework
- **Material-UI (MUI)** - UI component library
- **Auth0** - Authentication service
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Vite** - Build tool

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   - Auth0 domain and client ID
   - Backend API URLs

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Build the project:
```bash
npm run build
```

### Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

**Important**: You need to deploy the backend services separately and update the environment variables with the production API URLs.

## Backend Services Required

This frontend requires the following backend services to be deployed separately:

1. **User Service** (Port 3000) - Handles user profiles and authentication
2. **Job Service** (Port 4000) - Manages job listings and search
3. **Admin Service** (Port 5000) - Admin authentication and management
4. **Job Posting Service** (Port 2000) - Handles job posting functionality

## Environment Variables

Create a `.env` file with the following variables:

```env
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_USER_API_URL=https://your-user-service.com
VITE_JOB_API_URL=https://your-job-service.com
VITE_ADMIN_API_URL=https://your-admin-service.com
VITE_JOB_POST_API_URL=https://your-job-post-service.com
```

## Features

- User authentication with Auth0
- Job search and filtering
- User profile management
- Job posting (for employers)
- Admin dashboard
- Responsive design
- Dark theme UI

## Project Structure

```
src/
├── components/          # React components
├── config/             # Configuration files
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```