import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <Flex direction='column'>
      <Head>
        <meta property='og:title' content='Usama Lodhi | Front End Web Developer' />
        <meta property='og:description' content='React wizard, CSS Mysfit' />
        <meta property='og:image' content='https://example.com/image.jpg' />
        <meta property='og:url' content='https://example.com' />
        <meta property='og:type' content='website' /> <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
};

export default Home;
