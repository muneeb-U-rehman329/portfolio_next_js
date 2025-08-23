// 'use client';

import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import DotGrid from '../Ogl_animated/Ogl_animated';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa';

function HeroSection() {
  return (
    <Flex
    id='home'
      bg={'#141414'}
      minH={{ base: '100vh', md: '900px' }}
      px={{ base: 4, sm: 10, md: 20, lg: 32 }}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={{ base: 'column', lg: 'row' }}
      textAlign={{ base: 'center', lg: 'left' }}
      position="relative"
    >
      {/* Content */}
      <Flex
        zIndex={10}
        flexDirection={'column'}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        {/* Heading */}
        <Text
          className="font-poppins"
          fontWeight={'600'}
          mt={{
            base: 'auto',
            lg: 'auto',
            xl: 8,
          }}
          fontSize={{
            base: '4xl',
            sm: '4xl',
            md: '6xl',
            lg: '6xl',
            xl: '8xl',
            '2xl': '9xl',
          }}
          color={'white'}
        >
          {' '}
          Hi, I am Muneeb<span className="font-bold text-orange-500">
            .
          </span>{' '}
        </Text>{' '}
        <Flex alignItems={'center'} flexWrap={'wrap'} mt={-1} gap={'4'}>
          {' '}
          <Text fontSize={{
            base: '2xl',
            sm: '2xl',
            md: '4xl',
            lg: '5xl',
            xl: '6xl',
            '2xl': '7xl',
          }} fontWeight={'800'} color={'orange.400'}>
            {' '}
            FullStack{' '}
          </Text>{' '}
          <Text fontWeight={'600'}fontSize={{
            base: '2xl',
            sm: '2xl',
            md: '3xl',
            lg: '4xl',
            xl: '5xl',
            '2xl': '6xl',
          }} color={'white'}>
            {' '}
            Developer{' '}
          </Text>
        </Flex>
        {/* Paragraph */}
        <Text
          mt={3}
          className="font-inter"
          w={{ base: '100%', md: '70%', lg: '42%' }}
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          color={'whiteAlpha.800'}
        >
          I’m a full-stack developer specializing in React, Next.js, Node.js,
          and Express — passionate about building modern, scalable, and
          high-performance web applications that deliver seamless user
          experiences.
        </Text>
        {/* Social Links */}
        <Flex
          mt={7}
          gap={7}
          alignItems={'center'}
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <Flex cursor={'pointer'} color={'whiteAlpha.600'} fontSize={'3xl'}>
            <FaGithub />
          </Flex>
          <Flex cursor={'pointer'} color={'whiteAlpha.600'} fontSize={'3xl'}>
            <FaLinkedin />
          </Flex>
          <Flex cursor={'pointer'} color={'whiteAlpha.600'} fontSize={'3xl'}>
            <FaInstagram />
          </Flex>
          <Flex cursor={'pointer'} color={'whiteAlpha.600'} fontSize={'3xl'}>
            <FaFacebookSquare />
          </Flex>
        </Flex>
        {/* Button */}
        <Box my={9}>
          <Button
            variant={'unstyled'}
            px={6}
            py={6}
            bg={'orange.400'}
            textColor={'white'}
            rounded={'none'}
            border={'2px solid orange'}
            _hover={{ bg: 'orange.500' }}
          >
            Be in touch
          </Button>
        </Box>
      </Flex>

      {/* DotGrid Background */}
      <Box
        position="absolute"
        w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', '2xl': '50%' }}
        h={{ base: '40vh', sm: '55vh', md: '65vh', lg: '75vh' }}
        right={{ base: '0', md: '0', lg: '50px', '2xl': '150px' }}
        top={{ base: 'auto', sm: 'auto', lg:'4%', xl: '14%' }}
        bottom={{ base: '10', lg: 'auto' }}
        opacity={{ base: 0.4, md: 1 }}
      >
        <DotGrid
          dotSize={7}
          gap={27}
          baseColor="#7d7d7d"
          activeColor="#ff8c00"
          proximity={190}
          shockRadius={250}
          shockStrength={20}
          resistance={950}
          returnDuration={1}
        />
      </Box>
    </Flex>
  );
}

export default HeroSection;
