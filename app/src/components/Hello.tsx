import * as React from 'react';
import {login, logout} from '../actions'
import { StoreState} from '../types'
import axios from 'axios'
import { store } from '../store';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';

type HelloProps = {
    user: string, 
    password: string
}

type HelloState = {

}

class Hello extends React.Component<HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {}
    }

    onLogin() {

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

const mapStateToProps = (state: HelloState, ownProps: HelloProps) => {
    console.log(state, ownProps);
    return {
        value: state
    }
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: HelloProps) => {
    return {
        login: () => {
            dispatch(login({user: 'str', password: "123"}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)

