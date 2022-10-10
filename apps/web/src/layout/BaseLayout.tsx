import { ThemeProvider } from '$provider/Theme';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function BaseLayout() {
  return (
    <ThemeProvider>
      <div className="bg-base-200 min-h-screen flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
