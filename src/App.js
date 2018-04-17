import React, { Component } from 'react';
import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Navbar";
import friends from "./friends.json";


// counters and arrays to be used
let counter=0;
let nbaArray=[];
let highScore=0;
let headline="Test your knowledge of memory. Click a gif but not the same one twice!";

class App extends Component {
  
  // setting state to track game progress
state = {
  friends,
  counter,
  highScore,
  headline
};



// shuffle array algorithm
shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// game logic
gameCounter = id => {
  nbaArray.push(id);

  // create new array with all elements that pass the idCheck
  const newArr = nbaArray.filter(idCheck=>idCheck===id);
  if (newArr.length>1){
    nbaArray=[];
    headline="Incorrect! You clicked it already";
    if(counter > highScore){
      highScore = counter;
      console.log('top score: '+ highScore);
      
    
    }
    // reset score to 0 if clicked twice
    counter = 0;
    this.setState({headline, highScore});
    
  } 

  // increment score and adjust the state
  else{
    counter++;
    headline="Correct! One point added";
    console.log('score: '+ counter);
    this.setState({headline, counter});
    
  }

  // shuffle images on each click
  this.shuffle(friends);

  // update the state
  this.setState({ friends, headline, highScore, counter });
};



render() {
  return (
    <Wrapper>
      <Nav
      counter={this.state.counter}
      highScore={this.state.highScore}
      />
      <Title>{this.state.headline}</Title>
      {this.state.friends.map(friend => (
        <FriendCard
          gameCounter={this.gameCounter}
          id={friend.id}
          key={friend.id}
          image={friend.image}
        />
      ))}
    </Wrapper>
  );
}
}


export default App;
