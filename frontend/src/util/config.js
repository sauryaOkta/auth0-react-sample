export function getConfig() {
  const audience = process.env.REACT_APP_OKTA_AUDIENCE;

  return {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    ...(audience ? { audience } : null),
  };
}
