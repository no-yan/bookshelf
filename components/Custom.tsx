import { Center, Checkbox, useStyleConfig, chakra } from '@chakra-ui/react';
import React from 'react';
export const Custom = (): JSX.Element => {
    const styles = useStyleConfig('Button');

    return (
        <>
            <Center bg="white" rounded={'xl'} p={24} w={'500px'}>
                <Checkbox>Checkbox</Checkbox>
                {/* Since chakra props takes precedence over __css, we get the default style here and override it with each property such as bg. */}
                <chakra.button
                    __css={styles}
                    bg="gray.100"
                    id="btn"
                    data-testid="test-check-button"
                >
                    hello
                </chakra.button>
            </Center>
        </>
    );
};
