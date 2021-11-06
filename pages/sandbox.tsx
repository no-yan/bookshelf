import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { ColorBox } from '../components/colorSelector/ColorButton';
import { ColorPicker } from '../components/colorSelector/ColorPicker';
import { ColorSlider } from '../components/colorSelector/ColorSlider';

const ButtonSelect = () => {
    const [color, setColor] = useState('red.100');

    return (
        <HStack>
            <Button bg={color}>Check The Color</Button>

            <ColorBox setValue={setColor} />
        </HStack>
    );
};

const SliderSelect = () => {
    const colorScheme = 'red';
    const [colorValue, setColorValue] = useState(100);
    console.log(colorValue);
    return (
        <HStack>
            <Button bg={`${colorScheme}.${colorValue}`}>Check The Color</Button>
            <ColorSlider
                colorScheme={colorScheme}
                value={colorValue}
                setValue={setColorValue}
            />
        </HStack>
    );
};

const Sandbox = (): JSX.Element => {
    return (
        <>
            <ButtonSelect />
            <SliderSelect />
            <ColorPicker />
        </>
    );
};

export default Sandbox;
