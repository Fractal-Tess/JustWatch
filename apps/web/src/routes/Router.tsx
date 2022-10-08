import type { RouteLinks } from '$types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from '$layout/BaseLayout';
import Home from '$routes/Home';
import History from '$routes/History';
import NotFound from '$routes/NotFound';
import Settings from '$routes/Settings';

import {
  faClockRotateLeft,
  faGear,
  faHouse
} from '@fortawesome/free-solid-svg-icons';

export const routeLinks: RouteLinks[] = [
  { text: 'Home', to: '/', icon: faHouse },
  { text: 'History', to: '/history', icon: faClockRotateLeft },
  { text: 'Settings', to: '/Settings', icon: faGear }
];

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
