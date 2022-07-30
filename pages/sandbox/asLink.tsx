import { Button } from '@chakra-ui/button';
import { EmailIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import { MyTab } from '../../src/feature/sandbox/MyTab';

const Detail = () => {
    return (
        <Box
            w="1000px"
            h="80vh"
            mx="auto"
            mt="20"
            border="2px"
            borderStyle="dashed"
            borderColor="gray.500"
            borderRadius="xl"
            px="20"
            py="5"
        >
            <HStack spacing="20" justify="center">
                <Flex h="full" direction="column">
                    <Box h="80%" justifyContent="flex-end">
                        <Button
                            mx="auto"
                            size="lg"
                            leftIcon={<EmailIcon />}
                            // rightIcon={<EmailIcon />}
                            as={'a'}
                        >
                            Button
                        </Button>
                    </Box>
                    <Box>variant</Box>
                </Flex>

                <MyTab />
            </HStack>
        </Box>
    );
};

export default Detail;
