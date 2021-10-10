import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global
                styles={css`
                    * {
                        transition: background 0.3s, color 0.3s;
                    }
                `}
            />
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
export default MyApp;
