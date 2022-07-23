import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AppPropsWithLayout } from '../types/nextapp';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
