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
  const [error, setError] = useState('');
  const [finishedFetching, setFinishedFetching] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      const request = await fetch(`https://rickandmortyapi.com/api/character/2`);
      const result = await request.json();
      setCharacter(result);
    };

    getCharacter();
  }, []);

  const handleFetch = async (characterNumber: string) => {
    setFinishedFetching(false);

    const request = await fetch(`https://rickandmortyapi.com/api/character/${characterNumber}`);
    const result = await request.json();

    if (result?.error) {
      setCharacter(undefined);
      setError(result?.error);
    } else {
      setCharacter(result);
      setError('');
    }

    setFinishedFetching(true);
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
        <CharacterFetcher handleFetch={handleFetch} finishedFetching={finishedFetching} />
        {(character || error) && <CharacterDisplay character={character} error={error} />}
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
