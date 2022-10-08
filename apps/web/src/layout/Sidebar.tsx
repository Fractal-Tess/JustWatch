import { ThemeCtx } from '$context/theme';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeToggle } from 'ui';
import Anchor from 'ui/components/anchor/Anchor';
import Nav from '$layout/Nav';

export default function Sidebar() {
  const themeCtx = useContext(ThemeCtx);

  return (
    //   TODO: Fix drawer for mobile devices
    <div className="hidden md:flex w-48 md:w-44 lg:w-56 bg-base-100 flex-col items-center py-8 justify-between">
      {/* TODO: Add proper logo */}
      <img
        src="react.png"
        alt="logo"
        className="w-1/2 object-contain animate-spin-slow"
      />
      <nav className="w-full mt-20">
        <ul className="text-2xl font-bold space-y-8 w-full">
          <Nav />
        </ul>
      </nav>

      <div className="[&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-colors flex items-center space-x-16">
        <ThemeToggle onClick={themeCtx?.toggleTheme} />
        <Anchor
          href="https://github.com/Fractal-Tess/Turborepo-React"
          newTab={true}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6" />
        </Anchor>
      </div>
    </div>
  );
}
