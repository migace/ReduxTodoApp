import ITodo from '../interfaces/todo.interface';
import {
    ADD_TODO,
    TOGGLE_TODO,
    FETCH_TODOS,
    DELETE_TODO,
    EDIT_TODO
} from '../actions/todo';

const initialState: Array<ITodo> = [];

const todos = (state: Array<ITodo> = initialState, action: any): Array<ITodo> => {
    switch(action.type) {
        case ADD_TODO:
            return [                
                {
                    ...action.todo,
                    completed: false
                },
                ...state
            ];
        case TOGGLE_TODO:
            return state.map(item => {
                if (action.id === item.id) {
                    item.completed = !item.completed
                }

                return item;
            });
        case FETCH_TODOS:
            const todos = action.todos.rows.map((todo: any) => {
                return {
                    id: todo.id,
                    rev: todo.value.rev,
                    text: todo.doc.text,
                    completed: todo.doc.completed
                };
            });

            return [...state, ...todos];
        case EDIT_TODO:
            return state.map(item => {
                if (action.id === item.id) {
                    return {...item, ...action.data};
                }

                return item;
            });
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default: 
            return state;
    }
}

export default todos;