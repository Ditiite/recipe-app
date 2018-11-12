import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/" className="activeLink">
        Home
      </Link>
      <Link to="/recipes" className="activeLink">
        Recipes
      </Link>
      <Link to="/addRecipe" className="activeLink">
        Add Recipe
      </Link>
    </nav>
  );
};

export default Navigation;
