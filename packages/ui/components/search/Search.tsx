import { useRef } from 'react';

type Props = {
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
};

export function Search({ onValueChange, onSubmit }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current && onSubmit) onSubmit(ref.current.value);
      }}
    >
      <input
        ref={ref}
        onChange={e => {
          if (onValueChange) onValueChange(e.currentTarget.value);
        }}
        type="text"
        placeholder="Search..."
        className="input w-82 md:w-[400px] lg:w-[600px]"
      />
    </form>
  );
}
