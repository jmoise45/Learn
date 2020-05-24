import React from 'react';
import {deleteTask} from '../../actions/';
import {connect} from 'react-redux';

class Task extends React.Component {

    onClickDeleteTask =()=>{
        this.props.deleteTask(this.props.id)

    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    {this.props.id}
                </td>
                <td>
                    <button onClick={this.onClickDeleteTask }>Delete</button>
                </td>
            </tr>
        );
    }
};



export default connect( null, { deleteTask } )(Task);