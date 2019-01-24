import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import characters from "./characters.json";
import CharacterCard from "./Components/CharacterCards";

class App extends Component {
  state = {
    characters,
    Score: 0,
    maxScore: 12,
  };

  removeCharacter = id => {
    const characters = this.state.characters.filter(friend => friend.id !== id);
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>All the Spideys!</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
