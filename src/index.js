import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

// import reducers from './store/reducers';
// import recipe from './store/reducers/recipeReducer';

/*eslint-disable */
// const composeEnhancers =
//     process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         : compose;
/* eslint-enable */

// const store = createStore(recipe, composeEnhancers(applyMiddleware(thunk)));
// store.subscribe(() => console.log(store.getState()));
// store.dispatch({type: 'GET_RECIPE'});

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
