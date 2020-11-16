import './App.css';
import Person from './Person';
import AuthContext from './ContextAPI/authContext';
import React,{Component} from 'react';
class App extends Component{
  
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  state ={
    isAuth:false,
    username:null,
    password:null
  }

  changeHandler = (e) => {
    let name=e.target.name;
    let val = e.target.value;
    this.setState({
      [name]:val
    })
  }

  submitHandler = (e) => {
      e.preventDefault();
      this.setState({
        isAuth:true
      })
  }

  //The below line is written so that the focus first mainly done on the username field
  componentDidMount(){
    this.ref.focus();
  }

  render(){

    return (
      <div className="App">
        <form onSubmit={this.submitHandler} className="loginform">
          {/* In the below line we used ref keyword and gave a input so that it is automatically focused when the application starts */}
          <input type="text" name="username" className="forminput" value={this.state.username} placeholder="Enter Username" ref={(input) => this.ref =input}onChange={this.changeHandler}/><br/><br/>
          <input type="password" name="password" className="forminput" value={this.state.password} placeholder="Enter Password" onChange={this.changeHandler} /><br/><br/>
          <button type="submit">Login</button>
        </form>
        {this.state.isAuth?
          <div>
            <AuthContext.Provider value={{isAuth: this.state.isAuth}}>
              <Person />
            </AuthContext.Provider>
            
          </div>
          
          :
          null
          
        }

      </div>
    );
  }
}

export default App;
