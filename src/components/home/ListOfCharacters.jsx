import React, { Component } from 'react';
import { getCharacters } from '../../services/xfilesapi';
import CharacterList from '../characters/CharacterList';

export default class ListCharacters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return (
      <section >
        <CharacterList characters={characters} />
      </section>
    );
  }
}
