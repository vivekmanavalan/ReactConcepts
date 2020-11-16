import WithClass from './withClass';
import AuthContext from './ContextAPI/authContext';
import UseContext from './ContextAPI/UsinguseContext';
import HomeContext from './ContextAPI/HomeContext';
import React, {useState} from 'react';
const Person = (props) => {

    const [isClick,setClick] = useState(false);

    const clickHandler = () => {
        setClick(true);
    }
    return(
        <WithClass>
            <h1>Hey React :)</h1>
            <AuthContext.Consumer>
                {(context) => context.isAuth ? <h3>Hurrah! You have successfully logged in </h3>:<h3>Please Login</h3>}
            </AuthContext.Consumer>
            <button type="button" onClick={clickHandler}>Read More</button>
            {isClick ? 
            <React.Fragment>
            <UseContext />
            <HomeContext />
            </React.Fragment>
            :
            null
            }
        </WithClass>
    )
}

export default Person;