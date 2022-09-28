import { type PropsWithChildren } from 'react';
import ThemeWrapper from '$layout/ThemeWrapper';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function BaseLayout({ children: page }: PropsWithChildren) {
  return (
    <ThemeWrapper>
      <div className="bg-gradient-to-t from-base-300 to-base-100 min-h-screen flex flex-col justify-between">
        <Header />
        {page}
        <Outlet />
        <Footer />
      </div>
    </ThemeWrapper>
  );
}
