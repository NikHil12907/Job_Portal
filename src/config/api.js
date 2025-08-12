// API Configuration
const API_CONFIG = {
  USER_API_URL: import.meta.env.VITE_USER_API_URL || 'http://localhost:3000',
  JOB_API_URL: import.meta.env.VITE_JOB_API_URL || 'http://localhost:4000',
  ADMIN_API_URL: import.meta.env.VITE_ADMIN_API_URL || 'http://localhost:5000',
  JOB_POST_API_URL: import.meta.env.VITE_JOB_POST_API_URL || 'http://localhost:2000',
};

export default API_CONFIG;