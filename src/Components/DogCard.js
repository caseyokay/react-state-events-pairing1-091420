import React from "react";

class DogCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("clicking")
    this.setState({
      clicked: !this.state.clicked 
    })
  }

  render(){
    const {dog} = this.props;
  return (
    <div className="card">
      <span className="content">
        <h2 >{dog.name}</h2>
        <img alt="dog" src={dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.clickHandler}>Bark</button>
        {this.state.clicked ? (<h2>Bark</h2>): null}
      </span>
    </div>
  );
  }
}

export default DogCard;
