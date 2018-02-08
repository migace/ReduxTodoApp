import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
    text: string
}

const Todo = ({text}: Props) => (
    <li className="panel-block">
        <span className="panel-icon">
            <i className="fas fa-book"></i>
        </span>
        {text}
    </li>
);

export default Todo;
