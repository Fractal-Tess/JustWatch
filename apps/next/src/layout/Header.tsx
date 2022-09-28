import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeCtx } from '$context/Theme';
import { useContext } from 'react';
import { ThemeToggle } from 'ui';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '$layout/Nav';

export default function Header() {
  const themeCtx = useContext(ThemeCtx);

  return (
    <div className="bg-base-100 h-12 shadow-2xl flex justify-between px-8 items-center">
      <Link href="/">
        <a className="h-full">
          <Image
            src="/logo.png"
            alt="Website logo"
            className="max-h-full py-1"
          />
        </a>
      </Link>
      <Nav />

      <div className="[&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-colors flex items-center space-x-2">
        <Link href="https://github.com/Fractal-Tess/Turborepo-React">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="h-6" />
          </a>
        </Link>
        <ThemeToggle onClick={themeCtx?.toggleTheme!} />
      </div>
    </div>
  );
}
