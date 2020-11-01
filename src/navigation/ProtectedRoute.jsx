import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { dataLogin } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        dataLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
};
