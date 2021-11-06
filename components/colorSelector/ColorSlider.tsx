import { Box } from '@chakra-ui/layout';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/slider';
import React from 'react';

export const ColorSlider = ({ colorScheme, value, setValue }): JSX.Element => {
    return (
        <Slider
            defaultValue={value}
            onChange={setValue}
            min={0}
            max={900}
            step={100}
        >
            <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} bg={`${colorScheme}.${value}`} />
        </Slider>
    );
};
