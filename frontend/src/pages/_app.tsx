import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/fonts.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LoadingScreen } from '@components/LoadingScreen/LoadingScreen';

import { GlobalStyle } from '@styles/global';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * (60 * 1000), // 5 mins
            cacheTime: 10 * (60 * 1000), // 10 mins
        },
    },
});
export default function App({ Component, pageProps, router }: AppProps) {
    const [routerLoading, setRouterLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            setRouterLoading(false);
        }
    }, [router.isReady]);

    if (routerLoading || router.isFallback) {
        return <LoadingScreen />;
    }
    return (
        <>
            <Head>
                <title>uxstudio challenge</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
}
