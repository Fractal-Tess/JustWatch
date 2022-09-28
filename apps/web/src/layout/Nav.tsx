import { NavLink } from 'react-router-dom';

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
  return (
    <nav>
      <ul className="flex space-x-4 ">
        {navLinks.map(({ text, to }, i) => {
          return (
            <li key={i}>
              <NavLink
                end
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'underline decoration-primary underline-offset-4'
                    : ''
                }
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
