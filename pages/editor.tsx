import { Button } from '@chakra-ui/button';
import { Center, HStack, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';

export const Editor = (): JSX.Element => {
    const bg = 'red.100';
    return (
        <Center>
            <HStack w="full">
                <Button bg={bg}>hello</Button>
                <Text>hello</Text>
            </HStack>
        </Center>
    );
};

export default Editor;
