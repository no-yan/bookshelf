import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Flex, VStack, Heading, Text, Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import type { NextPage } from 'next';
import WithSubnavigation from '../components/nabvar';

type FeatureProps = {
    title: string;
    desc: string;
};

const Feature = ({ title, desc }: FeatureProps) => {
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
            // transition={'all 1s'}
        >
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    );
};
const Main = () => (
    <Box bg={useColorModeValue('blue.50', 'gray.800')} flex={1} width={'full'}>
        <Center>
            <Image
                src="/tree.jpg"
                alt="tree"
                width={400}
                height={200}
                fallback={<Spinner />}
            />
        </Center>
        <main>
            <Text
                pt={5}
                fontSize={'3xl'}
                color={useColorModeValue('blue.700', 'teal.100')}
                align="center"
            >
                This is Book Shelf
            </Text>
            <VStack pt="10">
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
                <Feature title={'hoge'} desc="fuga" />
            </VStack>
        </main>
    </Box>
);
const Home: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <WithSubnavigation />

            <Main />
        </Flex>
    );
};

export default Home;
