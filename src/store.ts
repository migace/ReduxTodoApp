import {createStore} from 'redux';
import IStore from './interfaces/store.interface';
import todoApp from './reducers/todoApp';
import { fetchTodos } from './actions/todo';
import TodosService from './services/todos';

let store = createStore(todoApp);

TodosService.getInstance().getTodos().then(todos => {
    store.dispatch(fetchTodos(todos));
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

export default store;
