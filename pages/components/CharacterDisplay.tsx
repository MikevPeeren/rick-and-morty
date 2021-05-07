// React
import React, { FC, ReactElement, useState } from 'react';

interface CharacterDisplayProps {
  character: any;
}
const CharacterDisplay: FC<{ CharacterDisplayProps }> = ({ character }: CharacterDisplayProps): ReactElement => {
  return (
    <div className="flex flex-col justify-center m-10">
      <div className="flex justify-center">
        <div className="w-full md:w-2/4 h-1/2 flex justify-center">
          <img
            className="rounded-2xl object-contain md:object-scale-down"
            src={character?.image}
            alt={character?.name}
          />
          <div className="flex flex-col ml-4">
            <h1 className="text-white text-4xl">{character?.name}</h1>
            <h2 className="text-white text-lg mt-4">{`#${character?.id}, ${character?.status}, ${character?.species}, ${character?.gender}`}</h2>
            <h3 className="text-white text-l mt-4">{`Origin: ${character?.origin?.name}`}</h3>
            <h3 className="text-white text-l">{`Location: ${character?.location?.name}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDisplay;
