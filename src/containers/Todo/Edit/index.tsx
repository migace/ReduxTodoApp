import {connect} from 'react-redux';
import Edit from '../../../components/Todo/components/Edit/index';
import {toggleTodo} from '../../../actions/todo';

const mapStateToProps = (state: any, ownProps: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    changeHandler: (id: string) => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);
