import React,{Component} from 'react';

class UsingRef extends Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.ref.focus();
    }

    render(){
        return(
            <div>
                <input type="text" name="usr"  ref={(input) => {this.ref = input}}/>
            </div>

        )
    }
}

export default UsingRef;