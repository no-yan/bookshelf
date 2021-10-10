import { useColorModeValue } from '@chakra-ui/color-mode';
import {
    Box,
    Center,
    Container,
    Flex,
    HStack,
    Stack,
    VStack,
    Heading,
    Text,
} from '@chakra-ui/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CallToActionWithAnnotation from '../components/example';
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

const Home: NextPage = () => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <WithSubnavigation />

            <Box
                bg={useColorModeValue('blue.50', 'gray.800')}
                flex={1}
                width={'full'}
            >
                <main>
                    <VStack pt="10">
                        <Feature title={'hoge'} desc="fuga" />
                        <Feature title={'hoge'} desc="fuga" />
                        <Feature title={'hoge'} desc="fuga" />
                        <Feature title={'hoge'} desc="fuga" />
                    </VStack>
                    <Link href="/hello">
                        <a>hello page</a>
                    </Link>
                </main>
            </Box>
        </Flex>
    );
};

export default Home;
