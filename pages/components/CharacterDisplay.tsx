// React
import React, { FC, ReactElement } from 'react';

interface CharacterDisplayProps {
  character:
    | {
        image: string;
        name: string;
        id: number;
        status: string;
        species: string;
        gender: string;
        origin: {
          name: string;
        };
        location: {
          name: string;
        };
      }
    | undefined;
  error: string | undefined;
}
const CharacterDisplay: FC<CharacterDisplayProps> = ({ character, error }: CharacterDisplayProps): ReactElement => {
  return (
    <div className="flex flex-col justify-center m-10">
      <div className="flex justify-center">
        <div className="w-full md:w-2/4 h-1/2 flex justify-center">
          {character && !error && (
            <>
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
            </>
          )}
          {!character && error && (
            <div className="flex flex-row">
              <div className="border-red-700 border border-dashed rounded-2xl flex justify-center align-middle items-center flex-col text-center w-full">
                <svg
                  className="text-red-700"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  height="10em"
                  width="5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-red-700 text-4xl">{404}</h1>
                <h2 className="text-red-700 text-lg mt-4">{error}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDisplay;
