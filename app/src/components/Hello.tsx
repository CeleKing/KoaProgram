import * as React from 'react';
import {login, logout} from '../actions'
import axios from 'axios'
import { store } from '../store';

type HelloProps = {
    user: string, 
    password: string
}

type HelloState = {

}

export default class Hello extends React.Component<HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {}
    }
    
    onLogin() {
        store.dispatch(login({user: 'str', password: "123"}))
    }

    onLogout() {
        
    }
    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.onLogin.bind(this)}>Login</button>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}

