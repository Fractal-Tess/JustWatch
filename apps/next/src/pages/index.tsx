import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A sample description about the page"
        />
      </Head>
      <div className="flex-1 flex flex-col items-center justify-center select-none space-y-4 text-5xl">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="bg-primary text-primary-content rounded-md px-2 py-1">
            Next.js
          </span>
        </h1>
      </div>
    </>
  );
};

export default Home;
