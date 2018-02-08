import * as React from 'react';
import TodoListContainer from './TodoList';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions/todo';
import store from '../store';

class TodoApp extends React.Component {
    constructor(props: any) {
        super(props);
    }

    submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const inputNode = (e.target as Element).querySelector('input'),
              content = inputNode.value;              

        store.dispatch(addTodo(content));
        inputNode.value = '';
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="m-b-2">
                        <TodoForm submitHandler={this.submitHandler.bind(this)} />
                    </div>
                    <div>
                        <TodoListContainer />                    
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoApp;
