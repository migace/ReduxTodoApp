import * as React from 'react';
import * as styles from './Todo.tcss';
import Edit from '../../containers/Todo/Edit/index';

interface Props {
    id: string,
    text: string,
    rev: string,
    edit: boolean,
    completed: boolean,
    deleteHandler: (id: string, rev: string) => void
    editHandler: (id: string, data: any) => void
}

const Todo = ({id, rev, text, completed, deleteHandler, editHandler, edit}: Props) => (
    <li className="control panel-block has-icons-right">    
        <Edit 
            text={text}
            edit={edit}
            completed={completed}
            editHandler={(data: any) => editHandler(id, {...data, _rev: rev, _id: id})}
        />           
        <span className={`${styles.icon} ${styles.edit} icon is-small is-right`}>
            <i onClick={(e) => editHandler(id, rev)} className="fas fa-pencil-alt has-text-warning"></i>
        </span>
        <span className={`${styles.icon} icon is-small is-right`}>
            <i onClick={(e) => deleteHandler(id, rev)} className="fas fa-trash has-text-danger"></i>
        </span>
    </li>
);

export default Todo;
