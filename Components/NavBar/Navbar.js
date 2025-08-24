'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPath, setCurrentPath] = useState('/');

  const links = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'project' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <Box
      bg="#141414"
      px={{ base: 4, md: 10, lg: 32 }}
      py={4}
      position="fixed"
      top="0"
      w="100%"
      zIndex="50"
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Text
          fontSize={{ base: '3xl', md: '5xl' }}
          letterSpacing="widest"
          className="font-bold text-white"
        >
          M.R.C
        </Text>

        {/* Desktop Nav Links */}
        <Flex
          gap={10}
          display={{ base: 'none', md: 'flex' }}
          className="font-inter"
        >
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={400}
              offset={-10}
              spy={true}
              activeClass="active-link"
              className="relative font-semibold uppercase tracking-normal text-base text-white cursor-pointer pb-1 hover:text-orange-400 transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
        </Flex>

        {/* Desktop Resume Button */}
        <Box display={{ base: 'none', md: 'block' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/docs/Muneeb's_resume.pdf"
          >
            <Button
              variant="unstyled"
              px={5}
              py={6}
              textColor="orange.400"
              rounded="none"
              border="2px solid orange"
              _hover={{
                bg: 'orange.400',
                textColor: 'white',
              }}
            >
              My resume
            </Button>
          </a>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
          variant="ghost"
          color="white"
          fontSize="2xl"
          _hover={{ bg: 'transparent', color: 'orange.400' }}
        />
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="zinc.900">
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="1px" borderColor="zinc.700" color="white">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={3}>
              {links.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={200}
                  offset={-80}
                  onClick={onClose}
                  className="w-full block text-left px-3 py-2 rounded-lg transition-colors font-medium uppercase text-gray-300 hover:bg-zinc-700 hover:text-white cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
