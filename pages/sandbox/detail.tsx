import { Button } from '@chakra-ui/button';
import { Box, HStack, VStack } from '@chakra-ui/layout';
import React from 'react';
import { MyTab } from '../../src/feature/sandbox/MyTab';

const Detail = () => {
    return (
        <Box
            w="1000px"
            h="80vh"
            mx="auto"
            mt="20"
            border="2px"
            borderStyle="dashed"
            borderColor="gray.500"
            borderRadius="xl"
            px="20"
            py="5"
        >
            <HStack spacing="20" justify="center">
                <Box h="full">
                    <Button my="auto" size="lg">
                        Button
                    </Button>
                </Box>

                <MyTab />
            </HStack>
        </Box>
    );
};

export default Detail;
