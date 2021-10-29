import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Heading, Text } from '@chakra-ui/layout';

type FeatureProps = {
    title: string;
    desc: string;
};
export const Feature = ({ title, desc }: FeatureProps) => {
    const bgConfig_HoverFocus = {
        background: useColorModeValue('white', 'gray.600'),
    };
    return (
        <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            bg={useColorModeValue('blue.50', 'gray.700')}
            color={useColorModeValue('gray.900', 'white')}
            flex="1"
            borderRadius="md"
            _hover={bgConfig_HoverFocus}
            _focusVisible={bgConfig_HoverFocus}
            tabIndex={0}
        >
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    );
};
