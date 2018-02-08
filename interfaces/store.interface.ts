import ITodo from './todo.interface';

interface IStore extends Object {
    todo: Array<ITodo>
};

export default IStore;