import {
    chakra,
    HStack,
    omitThemingProps,
    useStyleConfig,
    VStack,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import { SelectorRadio } from './Radio';
import { cx } from '@chakra-ui/utils';
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

export const OptionSelector = ({
    dispatch,
    selectedValue,
}: any): JSX.Element => {
    return (
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
    );
};

export const Custom = (): JSX.Element => {
    const buttonStyles = useStyleConfig('Button');
    // TODO: customizable by props!!
    const [selectedValue, dispatch] = useReducer(reducer, initialState);
    // const { } = selectedValue;
    const { bg, color, size, ...rest } = omitThemingProps({});
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
                {/* <chakra.button
                    bg={bg}
                    color={color}
                    size={size}
                    __css={styles}
                    id="btn"
                    data-testid="test-check-button"
                    { ...rest }
                >
                    hello
                </chakra.button> */}
                <chakra.button
                    //   disabled={isDisabled || isLoading}
                    //   ref={useMergeRefs(ref, _ref)}
                    //   as={as}
                    //   type={type ?? defaultType}
                    //   data-active={dataAttr(isActive)}
                    //   data-loading={dataAttr(isLoading)}
                    __css={buttonStyles}
                    className={cx('chakra-button')}
                    {...rest}
                >
                    hello
                </chakra.button>
                <OptionSelector
                    dispatch={dispatch}
                    selectedValue={selectedValue}
                />
                {/* Since chakra props takes precedence over __css, we get the default style here and override it with each property such as bg. */}
            </HStack>
        </>
    );
};
