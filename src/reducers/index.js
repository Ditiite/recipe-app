import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recipesReducer from './recipesReducer';

const reducers = combineReducers({
    recipe: recipesReducer,
    form: formReducer
});

export default reducers;
