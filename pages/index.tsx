// NextJS
import Head from 'next/head';
import Image from 'next/image';

// React
import React, { ReactElement } from 'react';

// Components
import CharacterFetcher from './CharacterFetcher';
export default function Home() {
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
        <div>
          <CharacterFetcher />
        </div>
      </main>

      <footer>
        {/* <a href="https://mikevpeeren.nl" target="_blank" rel="noopener noreferrer">
          Powered by Mike van Peeren
        </a> */}
      </footer>
    </div>
  );
}
