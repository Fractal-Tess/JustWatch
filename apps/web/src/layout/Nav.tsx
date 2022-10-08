import { routeLinks } from '$routes/Router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      {routeLinks.map(({ text, to, icon }, i) => {
        return (
          <li key={i}>
            <NavLink
              end
              to={to}
              className={({ isActive }) =>
                `rounded-l-md px-2 py-1 block ${isActive ? 'bg-base-200' : ''}`
              }
            >
              {icon && (
                <FontAwesomeIcon icon={icon} size="xs" className="mx-2" />
              )}
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
