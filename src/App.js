import React,{Component} from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ResultContainer from './components/ResultContainer';
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component{
  constructor(){
    super();
    this.state={
      heading: "Name It App Practice",
      suggNames:[]
    }
  }
  handleInput=(inputTxt)=>{
    this.setState({
      suggNames : name(inputTxt)
    })
  }
 
  render(){
    //console.log(name("Ayushee"));
    return(
      <div>
        <Header heading={this.state.heading}  />
        <SearchInput handleInput={this.handleInput}/>
        <ResultContainer suggNames={this.state.suggNames}/>
      </div>
    )
  }
}
export default App;