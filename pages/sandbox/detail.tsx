import { Button } from '@chakra-ui/button';
import { Box, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';

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
                <VStack>
                    <MyTab />
                </VStack>
            </HStack>
        </Box>
    );
};

type LayoutProps = {
    label: string;
    text: string;
};
const Layout = ({ label, text }: LayoutProps) => {
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

            <Text as="span" w="50%" fontWeight="thin">
                {text}
            </Text>
        </HStack>
    );
};

const Feature = () => {
    const data: LayoutProps[] = [
        {
            label: 'font',
            text: '12px',
        },
        {
            label: 'color',
            text: 'red.200',
        },
        {
            label: 'Bg Color',
            text: 'gray.500',
        },
    ];
    return (
        <>
            <Box mt="4">
                <Heading
                    as={'h4'}
                    size="lg"
                    w="full"
                    borderBottomWidth={'1px'}
                    borderBottomColor="gray.500"
                    borderBottomStyle="dashed"
                    mb="1"
                    // borderBottom="thick double #32a1ce;"
                >
                    Basics
                </Heading>
                <chakra.div>
                    {data.map((ele) => (
                        <Layout
                            label={ele.label}
                            text={ele.text}
                            key={ele.label}
                        />
                    ))}
                </chakra.div>
            </Box>
        </>
    );
};

const Atom = () => (
    <>
        {/* <Grid templateColumns="repeat(2, 1fr)" gap="10px 80px"> */}
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        {/* </Grid> */}
    </>
);

function MyTab() {
    return (
        <Tabs w="500px">
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Atom />
                </TabPanel>
                <TabPanel>
                    <Atom />
                </TabPanel>
                <TabPanel>
                    <Atom />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default Detail;
