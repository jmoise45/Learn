import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/'

class TaskList extends React.Component{


    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/*this.props.tasks.map( (task,index)=> <Task key={index} task={task} /> )*/}
                {this.props.tasks}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        tasks: state.tasks
    });
}

export default connect(mapStateToProps)(TaskList);