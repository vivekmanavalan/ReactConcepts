import React, {useContext} from "react"
import {Login} from '../App';
const FunctionalContext = () => {
    let data = useContext(Login);
    console.log('isloing', data);
    return(
        <div>
            <h3>Functional context</h3>
            {data.isLogin ? <p> Logged in Functional component, Welcome {data.userName} </p> : <p>Logged out of Functional Component</p>}
        </div>
    )
}

export default FunctionalContext;