import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component{

  state = {
    text: "",
    textLength : null
  }

  changeTextHandler = (event) => {
      let text = event.target.value;
      let textLength = text.length;

      this.setState({
        text:text,
        textLength : textLength
      });
  }

  deleteCharHandler = (index) => {
    let text = this.state.text;
    let textArray = text.split('');
    textArray.splice(index,1);
    text = textArray.join('');
    this.setState({
      text:text,
      textLength : text.length
    })
    // console.log(index);
  }

  render(){
    return(
      <div className="App">
        <input type="text" value={this.state.text} onChange={(event) => this.changeTextHandler(event)}/>
        <p>Lenght of the text : {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength}/>
        <CharComponent text={this.state.text} clicked={this.deleteCharHandler} />
      </div>
    )
  }

}

export default App;
