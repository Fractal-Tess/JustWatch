import '../styles/globals.css';
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps
} from 'next/app';

import { Theme } from '$types';
import { getThemeFromCookie } from '$utils';
import BaseLayout from '$layout/BaseLayout';

type AppProps = { cookieTheme: Theme | null };
type CombineProps<T> = AppProps & T;

export function App({
  Component,
  pageProps,
  cookieTheme
}: CombineProps<NextAppProps>) {
  return (
    <BaseLayout cookieTheme={cookieTheme}>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

App.getInitialProps = async (
  context: AppContext
): Promise<CombineProps<AppInitialProps>> => {
  const cookieTheme = getThemeFromCookie(context.ctx.req?.headers.cookie);
  const ctx = await NextApp.getInitialProps(context);
  return { ...ctx, cookieTheme };
};

export default App;
