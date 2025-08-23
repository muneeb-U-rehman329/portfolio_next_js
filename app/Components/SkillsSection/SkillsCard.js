'use client';
import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import { Denk_One } from 'next/font/google';

const denkOne = Denk_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const skills = [
  {
    src: 'https://www.svgrepo.com/show/512355/html-124.svg',
    alt: 'HTML5',
    desc: 'Semantic, accessible, and modern markup',
  },
  {
    src: 'https://www.svgrepo.com/show/478223/css.svg',
    alt: 'CSS3',
    desc: 'Responsive layouts with animations',
  },
  {
    src: 'https://www.svgrepo.com/show/306831/tailwindcss.svg',
    alt: 'TailwindCSS',
    desc: 'Utility-first styling for modern UIs',
  },
  {
    src: 'https://www.svgrepo.com/show/473670/javascript.svg',
    alt: 'JavaScript',
    desc: 'Dynamic and interactive web applications',
  },
  {
    src: 'https://www.svgrepo.com/show/521303/react-16.svg',
    alt: 'React',
    desc: 'Reusable UI components with hooks',
  },
  {
    src: 'https://www.svgrepo.com/show/342062/next-js.svg',
    alt: 'Next.js',
    desc: 'Server-side rendering & fullstack power',
  },
  {
    src: 'https://www.svgrepo.com/show/394395/redux.svg',
    alt: 'Redux Toolkit',
    desc: 'State management with slices',
  },
  {
    src: 'https://img.icons8.com/?size=512&id=hhZfccTvdhiR&format=png',
    alt: 'Chakra UI',
    desc: 'Accessible, styled components system',
  },
  {
    src: 'https://www.svgrepo.com/show/378837/node.svg',
    alt: 'Node.js',
    desc: 'Backend runtime with async power',
  },
  {
    src: 'https://www.svgrepo.com/show/503445/nodejs.svg',
    alt: 'Express.js',
    desc: 'Minimal, fast backend framework',
  },
  {
    src: 'https://www.svgrepo.com/show/473729/mongodb.svg',
    alt: 'MongoDB',
    desc: 'NoSQL database for modern apps',
  },
  {
    src: 'https://www.svgrepo.com/show/512317/github-142.svg',
    alt: 'GitHub',
    desc: 'Version control & collaboration',
  },
];

export default function SkillsGrid() {
  return (
    <Box bg="#141414" py={20} px={6}>
      <Text
        fontSize="4xl"
        textAlign="center"
        mb={12}
        fontWeight="900"
        style={{ fontFamily: denkOne.style.fontFamily }}
        className="text-gray-100"
      >
        My Skills
      </Text>

      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={{ base: 0, md: 10 }}
        justifyItems="center"
      >
        {skills.map((skill, i) => (
          <Box
            key={i}
            bg="rgba(255,255,255,0.05)"
            borderRadius="2xl"
            p={6}
            textAlign="center"
            className="transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="h-14 w-auto mx-auto mb-4"
              style={{ filter: 'brightness(0) invert(0.9)' }}
            />
            <Text
              fontSize="xl"
              fontWeight="800"
              className="text-gray-200"
              style={{ fontFamily: denkOne.style.fontFamily }}
            >
              {skill.alt}
            </Text>
            <Text
              fontSize="sm"
              mt={2}
              className="text-gray-400"
            >
              {skill.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
