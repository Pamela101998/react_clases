import { createStore } from 'redux';

// importando reducer:
import rootReducer from './reducer';
const store = createStore (rootReducer);


export default store;
