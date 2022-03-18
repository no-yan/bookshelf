import {
    Box,
    Button,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import {
    ChevronDownIcon,
    ChevronRightIcon,
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import { DarkModeSwitcher } from './darkModeSwitcher';

// <Button onClick={toggleColorMode}>
// Toggle {colorMode === "light" ? "Dark" : "Light"}
// </Button>
export default function NabVar(): JSX.Element {
    const { isOpen, onToggle } = useDisclosure();
    const props = { my: '2', mx: '4' };

    // const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <Box {...props} mx="4" px="2">
                Hello
            </Box>
            <Flex
                align="center"
                minH="60px"
                px={{ base: 4 }}
                py={{ base: 2 }}
                color={useColorModeValue('gray.600', 'white')}
                bg={useColorModeValue('white', 'gray.800')}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                borderBottom={1}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    d={{ base: 'flex', md: 'none' }}
                    ml={{ base: -2 }}
                >
                    <IconButton
                        aria-label="Toggle Navigation"
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        key="11"
                        variant="ghost"
                        onClick={onToggle}
                    />
                </Flex>
                <Flex
                    justify={{ base: 'center', md: 'start' }}
                    flex={{ base: 1 }}
                    verticalAlign="baseline"
                >
                    <NextLink href="/" passHref>
                        <Text
                            as={Link}
                            color={useColorModeValue('gray.800', 'white')}
                            fontFamily="heading"
                            fontSize="lg"
                            fontWeight={600}
                            textAlign={useBreakpointValue({
                                base: 'center',
                                md: 'left',
                            })}
                        >
                            Book Shelf
                        </Text>
                    </NextLink>

                    <Flex d={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    justify="flex-end"
                    direction="row"
                    flex={{ base: 1, md: 0 }}
                    spacing={6}
                >
                    <DarkModeSwitcher />
                    <Button
                        as="a"
                        fontSize="sm"
                        fontWeight={400}
                        href="#"
                        variant="link"
                    >
                        Sign In
                    </Button>
                    <Button
                        d={{ base: 'none', md: 'inline-flex' }}
                        color="white"
                        fontSize="sm"
                        fontWeight={600}
                        bg="pink.400"
                        _hover={{
                            bg: 'pink.300',
                        }}
                        href="#"
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Flex>
            <Collapse animateOpacity in={isOpen}>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction="row" spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover placement="bottom-start" trigger="hover">
                        <PopoverTrigger>
                            {/* Because PopoverTrigger requires inner top component be focusable, 
                                    NextLink on the top doesn't work well. 
                                    By that reason, empty div is here.

                                    >> When using this component, ensure the children passed to PopoverTrigger is focusable. 
                                    https://chakra-ui.com/docs/overlay/popover
                                */}
                            <div>
                                <NextLink href={navItem.href ?? '#'} passHref>
                                    <Link
                                        p={2}
                                        color={linkColor}
                                        fontSize="sm"
                                        fontWeight={500}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}
                                        isExternal={navItem.href?.startsWith(
                                            'http'
                                        )}
                                    >
                                        {navItem.label}
                                    </Link>
                                </NextLink>
                            </div>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                minW="sm"
                                p={4}
                                bg={popoverContentBgColor}
                                border={0}
                                boxShadow="xl"
                                rounded="xl"
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => (
    <NextLink href={href ?? '#'}>
        <Link
            d="block"
            p={2}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
            role="group"
            rounded="md"
            tabIndex={0}
        >
            <Stack align="center" direction="row">
                <Box>
                    <Text
                        fontWeight={500}
                        _groupHover={{ color: 'pink.400' }}
                        transition="all .3s ease"
                    >
                        {label}
                    </Text>
                    <Text fontSize="sm">{subLabel}</Text>
                </Box>
                <Flex
                    align="center"
                    justify="flex-end"
                    flex={1}
                    opacity={0}
                    _groupHover={{
                        opacity: '100%',
                        transform: 'translateX(0)',
                    }}
                    transform="translateX(-10px)"
                    transition="all .3s ease"
                >
                    <Icon as={ChevronRightIcon} w={5} h={5} color="pink.400" />
                </Flex>
            </Stack>
        </Link>
    </NextLink>
);

const MobileNav = () => (
    <Stack d={{ md: 'none' }} p={4} bg={useColorModeValue('white', 'gray.800')}>
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
    </Stack>
);

const X = () => <Box w="11" h={12} />;
const Y = () => (
    <Box
        w={'11'}
        // hello
        h={12 + 1}
    />
);

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                align="center"
                justify="space-between"
                py={2}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <NextLink href={href ?? '#'}>
                    <Text
                        color={useColorModeValue('gray.600', 'gray.200')}
                        fontWeight={600}
                    >
                        {label}
                    </Text>
                </NextLink>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        w={6}
                        h={6}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        transition="all .25s ease-in-out"
                    />
                )}
            </Flex>

            <Collapse
                animateOpacity
                in={isOpen}
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    align="start"
                    mt={2}
                    pl={4}
                    borderStyle="solid"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    borderLeft={1}
                >
                    {children &&
                        children.map((child) => (
                            <NextLink
                                href={child.href ?? '#'}
                                key={child.label}
                            >
                                <Link py={2}>{child.label}</Link>
                            </NextLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Sandbox',
        href: '/sandbox',
        children: [
            {
                label: 'Button Color Selector',
                subLabel: 'ボタン、スライダー、color picker',
                href: '/sandbox',
            },
            {
                label: 'Button Layout 1',
                subLabel: 'Up-and-coming Designers',
                href: '/sandbox/layout1',
            },
            {
                label: 'Button Detail 1',
                subLabel: 'Up-and-coming Designers',
                href: '/sandbox/detail',
            },
        ],
    },
    {
        label: 'Chakra UI',
        href: 'https://chakra-ui.com/',
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: 'hello',
    },
];
