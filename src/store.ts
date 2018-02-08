import {createStore} from 'redux';
import IStore from './interfaces/store.interface';
import todoApp from './reducers/todoApp';

let store = createStore(todoApp);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

export default store;
