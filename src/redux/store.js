import { createStore } from 'redux';

// aca importamos nuestro reducer
import rootReducer from './reducer';
const store = createStore(rootReducer);

export default store;