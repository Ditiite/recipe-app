import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/" activeClassName="activeLink">
        Home
      </Link>
      <Link to="/recipes" activeClassName="activeLink">
        Recipes
      </Link>
      <Link to="/addRecipe" activeClassName="activeLink">
        Add Recipe
      </Link>
    </nav>
  );
};

export default Navigation;
