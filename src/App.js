import React, { Component } from 'react';
import './App.css';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Navbar";
import friends from "./friends.json";



let counter=0;
let nbaArray=[];
let highScore=0;
let headline="Test your knowledge of memory. Click a gif but not the same one twice!";

class App extends Component {
  
state = {
  friends,
  counter,
  highScore,
  headline
};




shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


gameCounter = id => {

  nbaArray.push(id);
  const newArr = nbaArray.filter(idCheck=>idCheck===id);
  console.log(newArr);
  if (newArr.length>1){
    nbaArray=[];
    headline="Incorrect! You clicked it already";
    if(counter > highScore){
      highScore = counter;
      console.log('top score: '+ highScore);
      
    
    }
    counter = 0;
    this.setState({headline, highScore});
    
  } 
  else{
    counter++;
    headline="Correct! One point added";
    console.log('score: '+ counter);
    this.setState({headline, counter});
    
  }

  this.shuffle(friends);
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
