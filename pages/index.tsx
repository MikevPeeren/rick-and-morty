// NextJS
import Head from 'next/head';
import Image from 'next/image';

// React
import React, { FC, ReactElement, useState, useEffect } from 'react';

// Components
import CharacterFetcher from './components/CharacterFetcher';
import CharacterDisplay from './components/CharacterDisplay';

const Home: FC = (): ReactElement => {
  const [character, setCharacter] = useState();

  //@ts-ignore
  useEffect(async () => {
    const request = await fetch(`https://rickandmortyapi.com/api/character/2`);
    const result = await request.json();
    setCharacter(result);

    return () => {
      //@ts-ignore
      cleanup;
    };
  });

  const handleFetch = async (characterNumber: string) => {
    const request = await fetch(`https://rickandmortyapi.com/api/character/${characterNumber}`);
    const result = await request.json();

    setCharacter(result);
  };

  return (
    <div>
      <Head>
        <title>Rick and Morty Characters</title>
        <meta name="description" content="Rick and Morty Characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="m-10 flex flex-col">
          <div className="text-center">
            <Image
              className="w-full rounded-2xl"
              src="/background.jpg"
              alt="Rick Enjoying Flower Garden"
              width={350}
              height={250}
            />
          </div>
        </div>
        <CharacterFetcher handleFetch={handleFetch} />
        {character && <CharacterDisplay character={character} />}
      </main>

      <footer>
        {/* <a href="https://mikevpeeren.nl" target="_blank" rel="noopener noreferrer">
          Powered by Mike van Peeren
        </a> */}
      </footer>
    </div>
  );
};

export default Home;
