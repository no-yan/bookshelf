import React from 'react';
import {
    render as rtlRender,
    RenderResult,
    screen,
} from '@testing-library/react';
import { theme, ChakraProvider } from '@chakra-ui/react';
import { Custom } from './Custom';

const {colors} = theme;
const {gray} = colors;

// UI-less passthrough fallback to prevent using conditional logic in render
function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
    return children;
}

const render = (
    ui: JSX.Element,
    { wrapper: Wrapper = ChildrenPassthrough, ...options } = {}
): RenderResult =>
    rtlRender(
        <ChakraProvider>
            <Wrapper>{ui}</Wrapper>
        </ChakraProvider>,
        options
    );

describe('Home', () => {
    it('renders a specified color', () => {
        render(<Custom />);
        const colorButton = screen.getByRole('button');
        expect(colorButton).toHaveStyle({ backgroundColor: gray['100'] });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const style = window.getComputedStyle(contentDiv?.[0]);
        expect(style.color).toBe('red');
    });
});
