import { Button } from '@chakra-ui/button';
import { Box, HStack, VStack } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';

const Detail = () => {
    return (
        <Box w="1200" h="800" mx="auto" mt="20">
            <HStack spacing="20">
                <Box h="full">
                    <Button my="auto">Button</Button>
                </Box>
                <VStack>
                    <MyTab />
                </VStack>
            </HStack>
        </Box>
    );
};

export default Detail;
function MyTab() {
    return (
        <Tabs>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
