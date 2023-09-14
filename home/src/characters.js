const API_SERVER = 'https://rickandmortyapi.com/api';

export const getAllCharacter = () =>
  fetch(`${API_SERVER}/character`).then((res) => res.json());

export const getCharacterById = (id) =>
  fetch(`${API_SERVER}/character/${id}`).then((res) => res.json());
