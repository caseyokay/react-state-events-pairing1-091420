import React from 'react';
import DogCard from '../Components/DogCard';

class Favorites extends React.Component{
    render(){
        console.log("PROPS IN FAV", this.props.dog)
        return(
            <>
            <h1>Dog Favorites</h1>
            <DogCard dog={this.props.dog}/>
            </>
        )
    }
}

export default Favorites;