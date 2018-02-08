import * as React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/todo';

const mapStateToProps = (state: any) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
    changeHandler: (id: string) => dispatch(toggleTodo(id))
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
