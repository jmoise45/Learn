import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([])

    const fetchResource = async (resource) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data)
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource])


    return (
        <div>{resources.length}</div>
    );

}

export default ResourceList;

//https://jsonplaceholder.typicode.com/




//[prevProps] how prevProps works : https://www.udemy.com/course/react-redux/learn/lecture/12823363#questions






/*

class ResourceList extends React.Component {
    state = { resources: [] };

    async componentDidMount() { //only called once during the begining!
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data });
        // axios puts all the infom from response in .data

    }
                            //[prevProps]
    async componentDidUpdate(prevProps) { //update if comonpent or parent component gets updated

        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }

    }

    render() {
        return (
            <div>{this.state.resources.length}</div>
        );
    }
}
*/


