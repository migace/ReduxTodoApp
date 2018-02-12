import * as React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/index';
import { toggleTodo, deleteHandlerRequest, editHandlerRequest } from '../actions/todo';

const mapStateToProps = (state: any) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({    
    deleteHandler: (id: string, rev: string) => deleteHandlerRequest(id, rev),
    editHandler: (id: string, rev: string) => editHandlerRequest(id, rev)
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
