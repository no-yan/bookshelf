import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, VStack, Text, Center } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import NavBar from '../components/NavBar';
import { Feature } from '../components/Feature';
import { Button } from '@chakra-ui/react';
import { Custom } from '../components/Custom';

const Main = () => (
    <Box bg={useColorModeValue('blue.100', 'gray.800')} flex={1} width={'full'}>
        <main>
            <Text
                pt={5}
                fontSize={'3xl'}
                color={useColorModeValue('blue.700', 'teal.100')}
                align="center"
            >
                This is Book Shelf
            </Text>
            {/* <VStack pt="10">
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
            </VStack> */}
            <Custom />
        </main>
    </Box>
);
const Home: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <NavBar />

            <Main />
        </Flex>
    );
};

export default Home;
