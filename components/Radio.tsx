import { RadioGroup, Stack, Radio, Text } from '@chakra-ui/react';
import { ReducerAction, useState } from 'react';
import type { Action } from './Custom';

type Props = {
    label: string;
    options: (number | string)[];
    value: string;
    onChange: (target: Action['target']) => void;
};

export const SelectorRadio = ({
    label,
    options,
    value,
    onChange,
}: Props): JSX.Element => {
    console.log(value);

    return (
        <RadioGroup onChange={(e) => onChange(e)} value={value}>
            <Stack direction="row" alignItems="center">
                <Text color="orange.400" marginRight={10}>
                    {label}
                </Text>
                {options.map((option) => (
                    <Radio
                        colorScheme="gray"
                        value={option.toString()}
                        key={option}
                    >
                        {option}
                    </Radio>
                ))}
            </Stack>
        </RadioGroup>
    );
};
// function RadioExample() {
//     const [value, setValue] = useState(1)
//     return (
//       <RadioGroup onChange={setValue} value={value}>
//         <Stack direction="row">
//           <Radio value={1}>First</Radio>
//           <Radio value={2}>Second</Radio>
//           <Radio value={3}>Third</Radio>
//         </Stack>
//       </RadioGroup>
//     )
//   }
