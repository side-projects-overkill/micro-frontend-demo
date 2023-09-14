import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { getCharacterById } from 'home/characters';
import placeLocationDetails from 'locations/placeLocationDetails';

export default function PDPContent() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const locationDetailsRef = useRef(null);

  useEffect(() => {
    if (id) {
      getCharacterById(id).then(setCharacter);
    } else {
      setCharacter(null);
    }
  }, [id]);

  useEffect(() => {
    if (locationDetailsRef.current) {
      const url = character.origin.url || character.location.url;
      placeLocationDetails(locationDetailsRef.current, url);
    }
  }, [character]);

  if (!character) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{character.name}</h1>
        </div>
        <p className="font-bold text-3xl flex-grow">
          Status : {character.status}
        </p>
        <p className="font-bold text-3xl flex-grow">
          Species : {character.species}
        </p>
        <p
          ref={locationDetailsRef}
          className="font-bold text-3xl flex-grow"
        ></p>
      </div>
    </div>
  );
}
