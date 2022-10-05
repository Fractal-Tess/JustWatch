import { navLinks } from '$routes/links';
import { NavLink } from 'react-router-dom';

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
