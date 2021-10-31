import { useStyleConfig, chakra, HStack, VStack } from '@chakra-ui/react';
import { useReducer, useState } from 'react';

import { SelectorRadio } from './Radio';

const rules = {
    bg: ['gray.100', 'blue.500', 'white'],
    color: ['gray.100', 'blue.500', 'white'],
    size: ['lg', 'md', 'sm'],
};
type Rule = keyof typeof rules;

const initialState = {
    bg: rules.bg[0],
    color: rules.color[0],
    size: rules.size[0],
};
type State = typeof initialState;
export type Action = {
    type: 'bg' | 'color' | 'size';
    target: string;
};
function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'bg':
            return { ...state, bg: action.target };
        case 'color':
            return { ...state, color: action.target };
        case 'size':
            return { ...state, size: action.target };
        default:
            throw new Error();
    }
}
export const Custom = (): JSX.Element => {
    const styles = useStyleConfig('Button');
    // TODO: customizable by props!!
    const [selectedValue, dispatch] = useReducer(reducer, initialState);
    const { bg, color, size } = selectedValue;

    return (
        <>
            <HStack
                bg="white"
                rounded="xl"
                w="900px"
                h="250px"
                p={22}
                spacing={12}
                justify="center"
            >
                <chakra.button
                    __css={styles}
                    bg={bg}
                    color={color}
                    size={size}
                    id="btn"
                    data-testid="test-check-button"
                >
                    hello
                </chakra.button>
                <VStack>
                    {(Object.keys(rules) as Rule[]).map((rule) => {
                        const options = rules[rule];
                        const curry = (target: Action['target']) =>
                            dispatch({ type: rule, target });

                        return (
                            <>
                                <SelectorRadio
                                    label={rule}
                                    options={options}
                                    value={selectedValue[rule]}
                                    onChange={curry}
                                />
                            </>
                        );
                    })}
                </VStack>

                {/* Since chakra props takes precedence over __css, we get the default style here and override it with each property such as bg. */}
            </HStack>
        </>
    );
};
