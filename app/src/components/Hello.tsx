import * as React from 'react';
import {login, logout} from '../actions'
import axios from 'axios'
import { store } from '../store';

export interface HelloProps {
    compiler: string, 
    framework: string
}

export default class Hello extends React.Component<HelloProps, object> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {}
    }
    
    onLogin() {
        
    }

    onLogout() {
        
    }
    
    render() {
        const { compiler, framework} = this.props;
        return (
            <div>
                <h1>Hello from {compiler} and {framework}!</h1>
                <button onClick={this.onLogin.bind(this)}>Login</button>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}

