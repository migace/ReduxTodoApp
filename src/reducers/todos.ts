import * as uuid from 'uuid';
import ITodo from '../interfaces/todo.interface';
import {
    ADD_TODO,
    TOGGLE_TODO
} from '../actions/todo';

const initialState: Array<ITodo> = [];

const todos = (state: Array<ITodo> = initialState, action: any): Array<ITodo> => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(item => {
                if (action.id === item.id) {
                    item.completed = !item.completed
                }

                return item;
            });
        default: 
            return state;
    }
}

export default todos;