import * as React from 'react';
import Todo from '../../components/Todo/index';

interface Props {
    id: string;
    text: string;
    rev: string;
    edit: boolean;
    completed: boolean;
    changeHandler: (id: string) => void;
    deleteHandler: (id: string, rev: string) => void;
    editHandler: (id: string, rev: string) => void;
}

class TodoContainer extends React.Component<any, any>  {
    state: any;

    constructor(props: Props) {
        super(props);

        this.props = props;
        
        this.state = {
            edit: false
        };
    }

    editHandler(id: string, text: string) {
        this.setState((prevState: any) => {
            prevState.edit = !prevState.edit;

            if (!prevState.edit) {
                this.props.editHandler(id, text);
            }

            return prevState;
        });
    }

    render() {
        const props = {...this.props, editHandler: this.editHandler.bind(this), edit: this.state.edit};
        
        return <Todo {...props as Props} />
    }
}

export default TodoContainer;
