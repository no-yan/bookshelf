import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import { Editor } from './editor';

import React from 'react';

const Home: NextPage = () => (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        flex={1}
        width="full"
        as="main"
        justify="center"
        align="center"
        spacing="12px"
    >
        <Editor />
    </Stack>
);

export default Home;
