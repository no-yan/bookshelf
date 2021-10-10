// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};

// const styles = {
//     styles: {
//         global: {
//             // styles for the `body`
//             '*': {
//                 transition: 'all 1s',
//             },
//             // styles for the `a`
//             a: {
//                 color: 'teal.500',
//                 _hover: {
//                     textDecoration: 'underline',
//                 },
//             },
//         },
//     },
// };

// 3. extend the theme
const theme = extendTheme({ config });
export default theme;
