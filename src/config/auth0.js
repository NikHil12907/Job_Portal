// Auth0 Configuration
export const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN || 'dev-bl2bpajawv8dtilk.us.auth0.com',
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'N67yfYFNLFxsw6fNi4SRVAWueTGODTha',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};