import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';


class TaskBar extends React.Component {

    onClickAddAction = () => {
        this.props.addTask(this.refs.task.value)
        this.refs.task.value='';

    }

    render() {
        return (
            <div>
                <input type="text" ref="task" placeholder="add you tasks here" />
                <button onClick={this.onClickAddAction}>Add Task</button>
            </div>
        )
    }

};


export default connect(null, { addTask })(TaskBar);

//export default connect(store,{action})(Componenet);

