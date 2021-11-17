import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { Atom } from './Atom';

export function MyTab() {
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
