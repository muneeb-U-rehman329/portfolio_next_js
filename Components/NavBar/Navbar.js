'use client';

import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import { X } from 'lucide-react';

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
              delay={0}
              duration={400}
              offset={-10}
              spy={true}
              activeClass="active-link"
              className="relative font-semibold uppercase tracking-normal text-base text-white cursor-pointer pb-1
                 hover:text-orange-400 transition-colors"
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
              // as={'a'}

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

      {/* Drawer Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-700 flex items-center justify-between">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6 space-y-2">
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              delay={0}
              duration={200}
              // spy={true}
              offset={-80}
              activeClass="bg-orange-400 text-white"
              className="w-full block text-left px-3 py-2 rounded-lg transition-colors font-medium uppercase text-gray-300 hover:bg-zinc-700 hover:text-white cursor-pointer"
              onClick={onClose}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default Navbar;
