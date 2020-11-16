import React, {useContext} from 'react';
import AuthContext from './authContext';


const UsinguseContext = (props) => {

    const cont = useContext(AuthContext);



    return (
        <div>
            {cont.isAuth ? 
                <div>
                    <p>This text is displayed after checking if the user has logged in using the useContext hooks</p>    
                </div>
            :
                <h3>Please Login</h3>
            }
        </div>
    )
}

export default UsinguseContext;