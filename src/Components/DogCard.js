import React from "react";

class DogCard extends React.Component {

  state = {
    clicked: false
  }

  barkClickHandler = () => {
    console.log("clicking")
    this.setState({
      clicked: !this.state.clicked 
    })
  }

  localClickHandler = (id) => {
    let appClickHandler = this.props.appClickHandler
    let dog = this.props.dog
    console.log("Toggling Favorites:", dog)
    appClickHandler(dog)
  }

  

  render(){
    const {dog} = this.props;
  return (
    <div className="card">
      <span className="content">
        <h2 >{dog.name}</h2>
        <img onClick={this.localClickHandler} alt="dog" src={dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.barkClickHandler}>Bark</button>
        {this.state.clicked ? (<h2>Bark</h2>): null}
      </span>
    </div>
  );
  }
}

export default DogCard;
