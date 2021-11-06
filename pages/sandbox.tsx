import { Button } from '@chakra-ui/button';
import React, { useState } from 'react';
import { ColorBox } from '../components/colorSelector/ColorButton';
import { ColorSlider } from '../components/colorSelector/ColorSlider';

const Sandbox = () => {
    const [color, setColor] = useState('red.100');
    console.log(color);
    const colorScheme = 'red';
    const [colorValue, setColorValue] = useState(100);
    return (
        <>
            <Button bg={color}>Check The Color</Button>

            <ColorBox setValue={setColor} />
            <Button bg={`${colorScheme}.${colorValue}`}>Check The Color</Button>
            <ColorSlider
                colorScheme={colorScheme}
                value={colorValue}
                setValue={setColorValue}
            />
        </>
    );
};

export default Sandbox;
