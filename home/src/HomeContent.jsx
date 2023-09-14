import React, { useState, useEffect } from 'react';
import { getAllCharacter } from './characters';

export default function HomeContent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacter().then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{character.name}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
