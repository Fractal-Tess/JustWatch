import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="A sample description about the the page"
        />
      </Head>
      <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
        <h1 className="text-6xl font-bold">
          This is the{' '}
          <span className="bg-primary text-primary-content p-1 rounded-md">
            About
          </span>{' '}
          Page
        </h1>
      </div>
    </>
  );
};

export default About;
