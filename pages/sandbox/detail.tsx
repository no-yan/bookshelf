import { Button } from '@chakra-ui/button';
import { Box, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { chakra, useMultiStyleConfig } from '@chakra-ui/system';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import chakraTheme from '@chakra-ui/theme';
import theme from '../../src/theme';
const Detail = () => {
    console.log(
        theme.components.Tabs.baseStyle(theme.components.Tabs.defaultProps)
    );
    // const styles = useMultiStyleConfig('Tabs', { isMultiPart: true });
    // console.log(styles);
    // console.log(
    //     chakraTheme.components.Tabs.baseStyle(
    //         theme.components.Tabs.defaultProps
    //     )
    // );

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
    <TabPanel>
        {/* <Grid templateColumns="repeat(2, 1fr)" gap="10px 80px"> */}
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        {/* </Grid> */}
    </TabPanel>
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
                    <Grid templateColumns="repeat(2, 1fr)" gap="10px 80px">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </Grid>
                </TabPanel>
                <TabPanel>
                    {/* <Grid templateColumns="repeat(2, 1fr)" gap="10px 80px"> */}
                    <Feature />
                    <Feature />
                    <Feature />
                    <Feature />
                    <Feature />
                    {/* </Grid> */}
                </TabPanel>
                <TabPanel>
                    {/* <Grid templateColumns="repeat(2, 1fr)" gap="10px 80px"> */}
                    <Feature />
                    <Feature />
                    <Feature />
                    <Feature />
                    <Feature />
                    {/* </Grid> */}
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default Detail;
