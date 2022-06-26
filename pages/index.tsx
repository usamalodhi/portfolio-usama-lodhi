import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta property='og:title' content='Usama Lodhi | Front End Web Developer' />
        <meta property='og:description' content='React wizard, CSS Mysfit' />
        <meta property='og:image' content='https://example.com/image.jpg' />
        <meta property='og:url' content='https://example.com' />
        <meta property='og:type' content='website' /> <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <h1>Usama Lodhi Developer Portfolio </h1>
          <p>Write Text Here For The Main Body </p>
        </div>
      </main>
      <footer>
        <p>Footer goes here</p>
      </footer>
    </div>
  );
};

export default Home;
