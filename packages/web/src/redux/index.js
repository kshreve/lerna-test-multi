import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import joke from './ducks/joke'

const reducers = combineReducers({
  joke,
});

const configureStore = (intialState = {}) => {
  const store = createStore(reducers, intialState, applyMiddleware(thunk))

  return {
    store,
  }
}

export default configureStore;
