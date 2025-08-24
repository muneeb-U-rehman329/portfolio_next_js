import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      bg="#141414"
      color="whiteAlpha.900"
      py={6}
      px={4}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      textAlign="center"
    >
      <Flex direction="column" align="center" gap={3}>
        <Text fontSize="sm">
          Designed & Developed by <b>Muneeb U Rehman</b>
        </Text>
        <Text fontSize="xs" color="whiteAlpha.600">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
