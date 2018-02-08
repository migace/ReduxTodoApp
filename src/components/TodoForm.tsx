import * as React from "react";

interface Props {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
};

const TodoForm = ({submitHandler}: Props) => (
    <form onSubmit={(e) => submitHandler(e)}>
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Task:</label>
            </div>
            <div className="field-body">
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input className="input" placeholder="do sth amazing" />
                    </p>
                    <p className="control">
                        <button className="button is-primary">
                            <span className="icon">
                                <i className="fas fa-plus"></i>                                
                            </span>
                            <span>Add</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </form>
);

export default TodoForm;
