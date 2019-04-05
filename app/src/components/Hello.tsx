import * as React from 'react';
import axios from 'axios'

export interface HelloProps {
    compiler: string, 
    framework: string
}

export default class Hello extends React.Component<HelloProps, {}> {
    onClick() {
        axios.get('/')
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            })

    }
    render() {
        const { compiler, framework} = this.props;
        return (
            <div>
                <h1>Hello from {compiler} and {framework}!</h1>
                <button onClick={this.onClick.bind(this)}>Get Request</button>
            </div>
        )
    }
}

