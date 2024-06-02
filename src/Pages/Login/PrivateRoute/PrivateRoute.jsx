import { CircularProgress } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Route path="/" element={<Navigate replace to="/login" />} />
        )
      }
    />
  );
};

export default PrivateRoute;
