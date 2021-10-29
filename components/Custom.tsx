import {
    Center,
    Checkbox,
    useStyleConfig,
    Button,
    Theme,
    chakra,
} from '@chakra-ui/react';
import { useState } from 'react';
export const Custom = () => {
    const styles = useStyleConfig('Button');

    return (
        <>
            <Center bg="white" rounded={'xl'} p={24} w={500} id="test-checkbox">
                <Checkbox>Checkbox</Checkbox>
                {/* Since chakra props takes precedence over __css, we get the default style here and override it with each property such as bg. */}
                <chakra.button __css={styles} bg="gray.100">
                    hello
                </chakra.button>
            </Center>
        </>
    );
};