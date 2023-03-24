import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterInfo = characters.map(character => (
    <div key={character.portrayedby}>
      <Link to={`/detail/${character.name}`}>
        <Character {...character} />
      </Link>
    </div> 
  ));
  return (
    <ul data-testid="characters" >
      {characterInfo}
    </ul >
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    portrayedby: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })).isRequired
};

export default CharacterList;
