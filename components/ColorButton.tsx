import { Flex, HStack } from '@chakra-ui/layout';
import { Button, chakra } from '@chakra-ui/react';
import React from 'react';

export const ColorBox = () => {
    const menu = [
        'red.100',
        'red.200',
        'red.300',
        'red.400',
        'red.500',
        'red.600',
        'red.700',
        'red.800',
        'red.900',
    ];
    const firstItem = 0;
    const lastItem = menu.length - 1;
    const textColor = [
        'gray.900',
        'gray.800',
        'gray.800',
        'gray.800',
        'gray.200',
        'gray.100',
        // 'gray.200',
        // 'gray.200',
        'white',
        'white',
        'white',
    ];
    const textColorOff = [
        'gray.600',
        'gray.600',
        'gray.600',
        'gray.600',
        'gray.200',
        'gray.100',
        'gray.100',
        'gray.100',
        'white',
    ];
    return (
        <>
            <Flex p="2">
                {menu.map((item, index) => (
                    // <chakra.button
                    //     bg="green.100"
                    //     border="1px"
                    //     borderColor="blue.200"
                    //     borderStartRadius={index === 0 ? 'md' : 'unset'}
                    //     borderEndRadius={index === menu.length ? 'md' : 'unset'}
                    //     key={item}
                    // >
                    //     {item}
                    // </chakra.button>
                    <Button
                        size="sm"
                        bg={item}
                        textColor={textColor[index]}
                        border="1px"
                        borderColor="blue.200"
                        borderStartRadius={index === firstItem ? 'md' : 'unset'}
                        borderEndRadius={index === lastItem ? 'md' : 'unset'}
                        key={item}
                    >
                        {item}
                    </Button>
                ))}
            </Flex>
            <Flex p="2">
                {menu.map((item, index) => (
                    // <chakra.button
                    //     bg="green.100"
                    //     border="1px"
                    //     borderColor="blue.200"
                    //     borderStartRadius={index === 0 ? 'md' : 'unset'}
                    //     borderEndRadius={index === menu.length ? 'md' : 'unset'}
                    //     key={item}
                    // >
                    //     {item}
                    // </chakra.button>
                    <Button
                        size="sm"
                        bg={item}
                        textColor={textColorOff[index]}
                        border="1px"
                        borderColor="blue.200"
                        borderStartRadius={index === firstItem ? 'md' : 'unset'}
                        borderEndRadius={index === lastItem ? 'md' : 'unset'}
                        key={item}
                    >
                        {item}
                    </Button>
                ))}
            </Flex>
        </>
    );
};
