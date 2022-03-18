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
                bgGradient={'red.500'}
                className=""
                color="red.500"
                flexDir="column"
                px={2}
                w="1"
            ></Box>
            <Text as="span" w="50%" fontWeight="thin">
                {text}
            </Text>
        </HStack>
    );
};
