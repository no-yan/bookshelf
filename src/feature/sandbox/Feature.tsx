import { Box, Heading } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';
import { LayoutProps, Layout } from './Layout';

export const Feature = () => {
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
