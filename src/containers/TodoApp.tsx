import * as React from 'react';
import TodoListContainer from './TodoList';
import TodoForm from '../components/TodoForm/index';
import { addTodoRequest } from '../actions/todo';

class TodoApp extends React.Component {
    constructor(props: any) {
        super(props);
    }

    submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const inputNode = (e.target as Element).querySelector('input'),
              text = inputNode.value;

        if (text) {
            addTodoRequest(text);
            inputNode.value = '';
        }
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
