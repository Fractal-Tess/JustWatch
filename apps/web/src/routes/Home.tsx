import { Search } from 'ui';
import { query } from '$api';

export default function Home() {
  const onValueChange = (value: string) => {
    query(value);
  };
  const onSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <div className="min-h-full flex flex-col items-center py-8">
      <Search onValueChange={onValueChange} onSubmit={onSubmit} />
    </div>
  );
}
