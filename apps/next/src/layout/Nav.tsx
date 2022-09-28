import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkType = {
  to: string;
  text: string;
};

const navLinks: LinkType[] = [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' },
  { text: 'Does not exist', to: '/foo-spam-eggs' }
];

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex space-x-4 ">
        {navLinks.map(({ text, to }, i) => {
          return (
            <li key={i}>
              <Link href={to}>
                <a
                  className={
                    router.pathname === to
                      ? 'underline decoration-primary underline-offset-4'
                      : ''
                  }
                >
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
