import * as React from 'react';
import * as styles from '../../Todo.tcss';
import * as editStyles from './Edit.tcss';

interface IProps {
    changeHandler: () => void;
    completed: boolean;
    text: string;
    edit: boolean;
    editHandler: (data: any) => void;
}

class Edit extends React.Component<any, any> {
    props: IProps;

    constructor(props: IProps) {
        super(props);

        this.props = props;
        this.state = {
            text: this.props.text,
            completed: this.props.completed
        };
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            text: nextProps.text,
            completed: nextProps.completed
        });
    }

    onChangeHandler(key: string, value: string | boolean) {
        this.setState((prevState: any) => {
            prevState[key] = value;
            
            return prevState;
        });
    }

    onKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        const { key } = e;

        if (key === "Enter") {
            this.props.editHandler(this.state);
        }
    }

    renderValue() {
        return (
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    onChange={(e) => this.onChangeHandler('completed', e.target.checked)} 
                    checked={this.state.completed} />
                <span className={this.state.completed ? styles.completed : ''}>
                    {this.state.text}
                </span>
            </label>
        );
    }

    renderEdit() {
        return (
            <label className="checkbox">                
                <input 
                    className={`${editStyles.edit} input is-warning is-small`} 
                    value={this.state.text} 
                    onChange={(e) => this.onChangeHandler('text', e.target.value)} 
                    onKeyPress={(e) => this.onKeyPressHandler(e)} />
            </label>
        );
    }

    render() {
        return this.props.edit ? this.renderEdit() : this.renderValue();
    }
}

export default Edit;
