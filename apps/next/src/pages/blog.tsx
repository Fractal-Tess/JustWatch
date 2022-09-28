import type { NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A sample description Blog the page" />
      </Head>
      <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
        <h1 className="text-6xl font-bold">
          This is the{' '}
          <span className="bg-primary text-primary-content p-1 rounded-md">
            Blog
          </span>{' '}
          Page
        </h1>
      </div>
    </>
  );
};

export default Blog;
