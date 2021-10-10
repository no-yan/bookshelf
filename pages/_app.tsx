import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/*
              * カラーモード変更時にtransitionを加えたいが、これをすると 
            <Global
                styles={css`
                    * {
                        transition: background 0.3s, color 0.3s;
                    }
                `}
            /> */}
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
export default MyApp;
