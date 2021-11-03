import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ChakraProvider resetCSS>
                <Flex minH="100vh" direction="column">
                    <NavBar />
                    <Component {...pageProps} />
                </Flex>
            </ChakraProvider>
        </>
    );
}
export default MyApp;
