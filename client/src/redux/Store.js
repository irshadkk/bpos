import RootReducer from './RootReducer';
import Reducer from "./CartReducer";


import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


function configureStore() {
  return createStore(RootReducer,applyMiddleware(thunk));
}
export default configureStore;