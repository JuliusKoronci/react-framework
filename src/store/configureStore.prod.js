import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(thunk, apiMiddleware)
);

export default configureStore
