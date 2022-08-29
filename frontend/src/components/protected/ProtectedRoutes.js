import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoutes = ({ component, ...props }) => {
  const ProtectedComponent = withAuthenticationRequired(component);
  return <ProtectedComponent {...props} />;
};

export default ProtectedRoutes;
