import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavApp from "../components/NavApp/NavApp";
import AuthProvider from "../context/AuthContext";
import { About, Contact, Home, Login, Product } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";



const Router = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "/product" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavApp navItems={navItems} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/product" component={Product} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute exact path="/contact" component={Contact} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
