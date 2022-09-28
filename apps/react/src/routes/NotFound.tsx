import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
      <h1 className="text-6xl font-bold">Page not found </h1>
      <h2 className="bg-error text-error-content p-1 rounded-md text-9xl">
        404
      </h2>
      <p>
        You should be going ...{' '}
        <Link
          to={'/'}
          className={'border-b-4 border-dashed border-primary text-primary'}
        >
          Home?
        </Link>
      </p>
    </div>
  );
}
