import type {AppProps} from 'next/app';
import '../styles/globals.scss';
import RootLayout from './layout';

export default function App({Component, pageProps}: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}
