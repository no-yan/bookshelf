import { Button, ButtonProps } from '@chakra-ui/button';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/editable';
import { Center, HStack, Stack, VStack } from '@chakra-ui/layout';
import {
    useStyleConfig,
    theme,
    RadioGroup,
    Radio,
    CSSObject,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const useEditor = (): {
    variants: string[];
    getterSetter: {
        [key in keyof ButtonProps]?: {
            value: string;
            setValue: (arg: string) => void;
        };
    };
    variant: string;
    setVariant: React.Dispatch<React.SetStateAction<string>>;
    styles: CSSObject;
} => {
    const variants = Object.keys(theme.components.Button.variants);
    const [bg, setBg] = useState('red.100');
    const [size, setSize] = useState('md');
    const [boxShadow, setBoxShadow] = useState('lg');
    const [variant, setVariant] = useState('solid');
    const getterSetter: {
        bg: { value: string; setValue: (arg: string) => void };
        size: { value: string; setValue: (arg: string) => void };
        boxShadow: { value: string; setValue: (arg: string) => void };
    } = {
        bg: { value: bg, setValue: setBg },
        size: { value: size, setValue: setSize },
        boxShadow: { value: boxShadow, setValue: setBoxShadow },
    };

    const styles = useStyleConfig('Button', { size, variant });
    // console.log(size, styles);

    return { variants, getterSetter, variant, setVariant, styles };
};

export const Editor = (): JSX.Element => {
    const { variants, getterSetter, variant, setVariant, styles } = useEditor();
    const propertyKeys = Object.keys(getterSetter) as unknown as [
        keyof ButtonProps
    ];

    return (
        <Center>
            <HStack w="full" spacing="2px">
                <VStack>
                    <Button>hello</Button>
                    <Button
                        bg={getterSetter.bg?.value}
                        boxShadow={getterSetter.boxShadow?.value}
                        __css={styles}
                    >
                        hello
                    </Button>
                </VStack>
                <VStack>
                    {propertyKeys.map((property) => {
                        // console.log(property, getterSetter[property]?.value);
                        return (
                            <Editable
                                key={property}
                                defaultValue={getterSetter[property]?.value}
                                onChange={getterSetter[property]?.setValue}
                            >
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        );
                    })}
                    <RadioGroup
                        key="variant"
                        value={variant}
                        onChange={setVariant}
                    >
                        <Stack direction="row">
                            {variants.map((value) => (
                                <Radio value={value} key={value}>
                                    {value}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </VStack>
            </HStack>
        </Center>
    );
};

export default Editor;
