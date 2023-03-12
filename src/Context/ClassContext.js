import React from 'react';
import { Login } from '../App';
class ClassContext extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h3>Class context</h3>
            <Login.Consumer>
                {data => {
                    return data.isLogin ? <p> Logged in Class component, Welcome {data.userName} </p> : <p>Logged out of Class  Component</p>
                }}
            </Login.Consumer>
            </React.Fragment>
        )
    }
}
export default ClassContext;