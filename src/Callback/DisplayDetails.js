import React,{Component} from 'react';

class DisplayDetails extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log('display details', this.props.text);
        return(
        <h2>{this.props.count}</h2>
        )
    }
}
//Used react.memo becuase when parent component gets re-rendered 
//this child component even when it's dependencies are not changed gets re-rendered to avoid that we use react memo
//Given the same input it'll produce the same output so no need to re-render instead use the last rendered result.
export default React.memo(DisplayDetails);