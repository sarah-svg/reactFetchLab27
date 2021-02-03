/* eslint-disable max-len */
export const getCharacters = () => {

  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
  
  // return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=3')
  //   .then(res => res.json())
  //   .then(json => json.results);
};

export const getOneCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};

