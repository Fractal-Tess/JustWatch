import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="Yikes, this page does not exist" />
      </Head>
      <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
        <h1 className="text-6xl font-bold">Page not found </h1>
        <h2 className="bg-error text-error-content p-1 rounded-md text-9xl">
          404
        </h2>
        <p>
          Are you lost?
          <br />
          <br />
          Let&quot;s go &nbsp;
          <Link href="/">
            <a className="border-b-4 border-dashed border-primary text-primary-content bg-primary rounded px-2 py-1 animate-pulse">
              Home
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
