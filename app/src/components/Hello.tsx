import * as React from 'react';
import {login, logout} from '../actions'
import { StoreState} from '../types'
import {Dispatch} from 'redux';
import { connect } from 'react-redux';

type HelloProps = {
    onLogin?: any,
    onLogout?: any,
}

type HelloState = {

}

class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
    }
    
    render() {
        const {onLogin, onLogout} = this.props;
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={onLogin}>Login</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state: HelloState, ownProps: HelloProps) => {
    return {
        value: state
    }
}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: HelloProps) => {
    return {
        onLogin: () => {
            dispatch(login({user: 'admin', password: '123'}))
        },
        onLogout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)

