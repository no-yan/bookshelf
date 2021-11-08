import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import { Editor, DrawerExample } from '../src/components/editor/editor';

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
        <DrawerExample>
            <Editor />
        </DrawerExample>
    </Stack>
);

export default Home;
