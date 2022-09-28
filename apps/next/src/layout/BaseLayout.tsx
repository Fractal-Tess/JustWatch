import { PropsWithChildren } from 'react';
import ThemeWrapper from '$layout/ThemeWrapper';
import Header from '$layout/Header';
import Footer from '$layout/Footer';
import type { Theme } from '$types';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function BaseLayout({ cookieTheme, children: page }: Props) {
  return (
    <ThemeWrapper cookieTheme={cookieTheme}>
      <div className="bg-gradient-to-t from-base-300 to-base-100 min-h-screen flex flex-col">
        <Header />
        {page}
        <Footer />
      </div>
    </ThemeWrapper>
  );
}
