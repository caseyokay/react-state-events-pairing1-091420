import React from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import Favorites from './Containers/Favorites'

class App extends React.Component {

  state = {
    //enmpty at first until clicked
    dog: {}
  }

  appClickHandler = (dogObj) => {
    console.log("BEEN CLICKED IN  APP", dogObj)
    //now pass it into the favorites container
    //time to make an internal varibale 
    this.setState({
      dog: dogObj
    })
    //set it  equal to what was clicked, will rerender it
  }


  render() {
    return (
      <div className="app">
        <DogsList appClickHandler={this.appClickHandler}/>
        <Favorites dog={this.state.dog}/>
      </div>
    );
  }
}

export default App;
