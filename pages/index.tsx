import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Text } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import { Center } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { Editor } from './editor';
import { Custom } from '../components/Custom';
import React from 'react';

const Home: NextPage = () => (
    <Box bg={useColorModeValue('blue.100', 'gray.800')} flex={1} width="full">
        <main>
            <Text
                pt={5}
                fontSize="3xl"
                color={useColorModeValue('blue.700', 'teal.100')}
                align="center"
            >
                This is Book Shelf
            </Text>

            <Center mt={12}>
                <Custom />
            </Center>
        </main>
    </Box>
);

export default Home;
