import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../src/components/NavBar';
import theme from '../src/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ChakraProvider resetCSS theme={theme}>
                <Flex direction="column" minH="100vh">
                    <NavBar />
                    <Component {...pageProps} />
                </Flex>
            </ChakraProvider>
        </>
    );
}
export default MyApp;
