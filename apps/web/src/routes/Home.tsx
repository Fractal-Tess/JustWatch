import { Search } from 'ui';
import { getSearch } from '$api';

export default function Home() {
  const onValueChange = (value: string) => {
    getSearch(value);
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
