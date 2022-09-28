export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center flex-col space-y-8 text-5xl select-none">
      <h1 className="text-6xl font-bold">
        This is the{' '}
        <span className="bg-primary text-primary-content p-1 rounded-md">
          Contact
        </span>{' '}
        Page
      </h1>
      <p className="border-b-4 border-primary border-dashed">
        You should be coding...
      </p>
    </div>
  );
}
