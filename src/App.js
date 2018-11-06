import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/styles.scss';
import FrontPage from './components/frontPage/index';
import Recipes from './components/recipes/Recipes';
import SingleRecipe from './components/recipes/SingleRecipe';
import AddRecipe from './components/addRecipe/index';

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <Route exact path="/" render={() => <FrontPage />} />
        <Route exact path="/recipes" render={() => <Recipes />} />
        <Route exact path="/salad" render={() => <SingleRecipe />} />
        <Route exact path="/addRecipe" render={() => <AddRecipe />} />
      </div>
    );
  }
}

export default App;
