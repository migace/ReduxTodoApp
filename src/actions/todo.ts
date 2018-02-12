export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
import store from '../store';
import TodosService from '../services/todos';

export const addTodo = (todo: any) => ({
    type: ADD_TODO,
    todo
});

export const toggleTodo = (id: string) => ({
    type: TOGGLE_TODO,
    id
});

export const fetchTodos = (todos: Array<any>) => ({
    type: FETCH_TODOS,
    todos
});

export const removeTodo = (id: string) => ({
    type: DELETE_TODO,
    id
});

export const editTodo = (id: string, data: any) => ({
    type: EDIT_TODO,
    id,
    data
});

export const addTodoRequest = (text: string) => {
    TodosService.getInstance().addTodo({text, completed: false})
        .then(data => store.dispatch(addTodo({
            text, 
            id: data.id,
            rev: data.rev    
        })));
};

export const deleteHandlerRequest = (id: string, rev: string) => {
    TodosService.getInstance().removeTodo(id, rev)
        .then(data => store.dispatch(removeTodo(id)));
};

export const editHandlerRequest = (id: string, data: any) => {
    TodosService.getInstance().editTodo(id, data)
        .then(response => store.dispatch(editTodo(
            id,
            data
        )));
};
