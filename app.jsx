import {Provider} from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import store from './store';

import 'bulma/css/bulma.css';
import './app.scss';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);