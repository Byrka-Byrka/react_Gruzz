import { createStore, combineReducers } from 'redux';
import { servicesReducer } from './reducers/servicesReducer'

const rootReducer = combineReducers({
    services: servicesReducer,
})

const store = createStore(rootReducer);

export default store;