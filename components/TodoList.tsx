import * as React from 'react';
import Todo from './Todo';
import ITodo from '../interfaces/todo.interface';

export interface Props {
    todos: Array<ITodo>
}

const TodoList = ({todos}: Props) => (
    <ul className="panel">
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} />
        ))}
    </ul>
);

export default TodoList;
