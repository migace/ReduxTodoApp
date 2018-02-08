import * as React from 'react';
import Todo from './Todo';
import ITodo from '../interfaces/todo.interface';

export interface Props {
    todos: Array<ITodo>,
    changeHandler: (id: string) => void
}

const TodoList = ({todos, changeHandler}: Props) => (
    <ul className="panel">
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} changeHandler={changeHandler} />
        ))}
    </ul>
);

export default TodoList;
