import * as React from 'react';
import Todo from '../../containers/Todo/index';
import ITodo from '../../interfaces/todo.interface';

export interface Props {
    todos: Array<ITodo>,
    deleteHandler: (id: string, rev: string) => void,
    editHandler: (id: string, data: any) => void
}

const TodoList = ({todos, deleteHandler, editHandler}: Props) => (
    <ul className="panel">
        {todos.map((todo: ITodo, index: number) => (
            <Todo 
                key={index} 
                {...todo} 
                deleteHandler={deleteHandler}
                editHandler={editHandler} />
        ))}
    </ul>
);

export default TodoList;
