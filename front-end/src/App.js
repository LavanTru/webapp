import React, { Component } from 'react';
import './App.css';
import LoginScreen from './LoginScreen';
import LavantruApp from './component/LavantruApp'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        <LavantruApp/>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;