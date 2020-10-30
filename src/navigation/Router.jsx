import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/* Component */
import NavApp from "../components/NavApp/NavApp";

/* Pages */
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import ListProduk from "../pages/Product/Product";
import Login from "../pages/Login/Login";

function Router() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "/product" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <BrowserRouter>
      <NavApp navItems={navItems} />
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={ListProduk} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Router;
