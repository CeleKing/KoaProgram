import * as React from 'react';
import {login, logout} from '../actions'
import axios from 'axios'
import { store } from '../store';

export interface HelloProps {
    user: string, 
    password: string
}

export default class Hello extends React.Component<HelloProps, object> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {}
    }
    
    onLogin() {
        store.dispatch(login({user: 'admin', password: "123"}))
    }

    onLogout() {
        
    }
    
    render() {
        const { user, password} = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>Hello from {user} and {password}!</h1>
                <button onClick={this.onLogin.bind(this)}>Login</button>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}

