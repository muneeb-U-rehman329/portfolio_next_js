'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Denk_One } from 'next/font/google';

const denkOne = Denk_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const logos = [
  { src: 'https://www.svgrepo.com/show/512355/html-124.svg', alt: 'HTML5' },
  { src: 'https://www.svgrepo.com/show/478223/css.svg', alt: 'CSS3' },
  { src: 'https://www.svgrepo.com/show/306831/tailwindcss.svg', alt: 'TailwindCSS' },
  { src: 'https://www.svgrepo.com/show/473670/javascript.svg', alt: 'JavaScript' },
  { src: 'https://www.svgrepo.com/show/521303/react-16.svg', alt: 'React' },
  { src: 'https://www.svgrepo.com/show/342062/next-js.svg', alt: 'Next.js' },
  { src: 'https://www.svgrepo.com/show/394395/redux.svg', alt: 'Redux Toolkit' },
  { src: 'https://img.icons8.com/?size=512&id=hhZfccTvdhiR&format=png', alt: 'Chakra UI' },
  { src: 'https://www.svgrepo.com/show/378837/node.svg', alt: 'Node.js' },
  { src: 'https://www.svgrepo.com/show/503445/nodejs.svg', alt: 'Express.js' },
  { src: 'https://www.svgrepo.com/show/473729/mongodb.svg', alt: 'MongoDB' },
  { src: 'https://www.svgrepo.com/show/509966/git.svg', alt: 'Git' },
  { src: 'https://www.svgrepo.com/show/512317/github-142.svg', alt: 'GitHub' },
  { src: 'https://www.svgrepo.com/show/378475/vercel-fill.svg', alt: 'Vercel' },
];

export default function SkillsSection() {
  const bg = useColorModeValue('#141414', '#141414');

  return (
    <Box pt={12} pb={20} position="relative" bg={bg} textAlign="center">
      <Marquee speed={60} gradient={false}>
        {logos.map((logo, i) => (
          <Box
            key={i}
            mx={12}
            display="flex"
            alignItems="center"
            className="transition-transform duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 w-auto mr-3"
              style={{ filter: 'brightness(0) invert(0.85)' }}
            />

            <Text
              fontSize="2xl"
              fontWeight="700"
              className={`${denkOne.className} tracking-wide text-gray-200`}
            >
              {logo.alt}
            </Text>
          </Box>
        ))}
      </Marquee>

      {/* Right gradient */}
      <Box
        position="absolute"
        right={0}
        bottom={0}
        width="50%"
        height="100%"
        bgGradient="linear(to-l, #141414 35%, transparent 100%)"
        zIndex={10}
        pointerEvents="none"
      />

      {/* Left gradient */}
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width="50%"
        height="100%"
        bgGradient="linear(to-r, #141414 35%, transparent 100%)"
        zIndex={10}
        pointerEvents="none"
      />
    </Box>
  );
}
