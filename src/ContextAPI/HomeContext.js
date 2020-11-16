import React,{Component} from 'react';
import AuthContext from './authContext';

class HomeContext extends Component {

    //Here we are assigning the AuthContext to static variable so that we'll be able to use context functionality
    static contextType = AuthContext;
    render(){
        return(
            <div>
                {this.context.isAuth?
                    <h3>This is displayed after evaluating user using the class based component context functionality</h3>
                    :
                    null
                }
            </div>
        );
    }
}

export default HomeContext;