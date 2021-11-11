import { Button } from '@chakra-ui/button';
import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Layout = (): JSX.Element => {
    return (
        <>
            <HStack w="full" justify="center" spacing="12">
                <Button>Button</Button>
                <HStack>
                    <VStack as="ul">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </VStack>
                    <Box>
                        <Heading>hello</Heading>
                        <Text>This is a area we can write</Text>
                    </Box>
                </HStack>
            </HStack>
        </>
    );
};

export default Layout;
