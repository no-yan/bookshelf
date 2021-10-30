import { RadioGroup, Stack, Radio, Text } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
    label: string;
    options: (number | string)[];
};

export const SelectorRadio = ({ label, options }: Props): JSX.Element => {
    const [value, setValue] = useState(options[0].toString());
    return (
        <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
                <Text color="orange.400" marginRight={10}>
                    {label}
                </Text>
                {options.map((option) => (
                    <Radio colorScheme="gray" value={option.toString()}>
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
