/* eslint-disable max-len */
export const getCharacters = () => {

  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
  
  
  // return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=3')
  //   .then(res => res.json())
  //   .then(json => json.results);
};
 const  get1Characters = async () => {
   let res = await fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
   let json = res.json()
   return json.result;
};
export const getOneCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};

