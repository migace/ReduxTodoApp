/// <reference path="Todo.tcss.d.ts" />

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { completed as completedClass } from './Todo.tcss';

interface Props {
    id: string,
    text: string,
    completed: boolean,
    changeHandler: (id: string) => void
}

const Todo = ({id, text, completed, changeHandler}: Props) => (
    <li className="panel-block">
        <label className="checkbox">
            <input type="checkbox" onChange={(e) => changeHandler(id)} />
            <span className={completed ? completedClass : ''}>
                {text}
            </span>
        </label>
    </li>
);

export default Todo;
