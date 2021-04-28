import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="nav">
          <div>BRANDED SHOES</div>
          <div>
            <Link className="title" to="/">
              Home
            </Link>
            <Link className="title" to="/about">
              About
            </Link>
            <Link className="title" to="/product">
              Products
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
