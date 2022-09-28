import type { PropsWithChildren } from 'react';

type Props = {
  newTab?: boolean;
  rel?: 'noopener noreferrer';
  href: string;
  className?: string;
} & PropsWithChildren;

export default function Anchor({
  href,
  newTab,
  rel,
  children,
  className
}: Props) {
  return (
    <a
      href={href}
      rel={rel}
      target={newTab ? '_blank' : '_self'}
      className={className}
    >
      {children}
    </a>
  );
}
