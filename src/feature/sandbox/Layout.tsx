import { HStack, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';

export type LayoutProps = {
    readonly label: string;
    readonly text: string;
};
export const Layout = ({ label, text }: LayoutProps) => {
    return (
        <HStack>
            <Text
                as="span"
                w="50%"
                textTransform="capitalize"
                fontWeight="thin"
            >
                {label}
            </Text>
            <Box
                flexDir="column"
                w="1"
                px={2}
                color="red.500"
                bgGradient={'red.500'}
                className=""
            ></Box>
            <Text as="span" w="50%" fontWeight="thin">
                {text}
            </Text>
        </HStack>
    );
};
