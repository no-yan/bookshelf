import { useStyleConfig, chakra, HStack, VStack, Text } from '@chakra-ui/react';

import { SelectorRadio } from './Radio';

const rules = {
    bg: ['A', 'B', 3],
    color: [1, 2, 3],
    size: [1, 2, 3],
};
export const Custom = (): JSX.Element => {
    const styles = useStyleConfig('Button');
    // TODO: customizable by props!!

    return (
        <>
            <HStack
                bg="white"
                rounded="xl"
                w="450px"
                h="250px"
                p={22}
                spacing={12}
                justify="center"
            >
                <chakra.button
                    __css={styles}
                    bg="gray.100"
                    id="btn"
                    data-testid="test-check-button"
                >
                    hello
                </chakra.button>
                <VStack>
                    {Object.entries(rules).map(([rule, options]) => (
                        <>
                            <SelectorRadio label={rule} options={options} />
                        </>
                    ))}
                </VStack>

                {/* Since chakra props takes precedence over __css, we get the default style here and override it with each property such as bg. */}
            </HStack>
        </>
    );
};
