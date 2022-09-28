export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <span className="bg-primary text-primary-content p-1 rounded-md">
          React.js
        </span>
      </h1>
      <p className="border-b-4 border-primary border-dashed">
        You should be coding...
      </p>
    </div>
  );
}
