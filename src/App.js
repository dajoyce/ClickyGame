import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Nav from "./components/Nav";

function shufflecharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = { characters, currentScore: 0, topScore: 0, rightWrong: "", clicked: [] };

  handleClick = id => {
    const newScore = this.state.currentScore + 1;
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.setState({ rightWrong: "WRONG" });
      this.handleReset();
    }
    if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
      this.setState({ topScore: newScore });
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,

      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledcharacter = shufflecharacters(characters);
    this.setState({ characters: shuffledcharacter });
  };

  render() {
    return (
      // <Nav score={this.state.currentScore} topScore={this.state.topScore} />
      <Wrapper>
        <Nav score={this.state.currentScore} topScore={this.state.topScore} rightWrong={this.state.rightWrong} />
        <Jumbotron />
        {this.state.characters.map(character => (
          // <CharacterCard id={character.id} name={character.name} image={character.image} />
          <CharacterCard
            key={character.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
