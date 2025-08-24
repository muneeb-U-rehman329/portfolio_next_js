'use client';

import React from 'react';
import { Box, Text, useColorModeValue, Image } from '@chakra-ui/react';
import { Denk_One } from 'next/font/google';

const denkOne = Denk_One({
  subsets: ['latin'],
  weight: '400',
});

const logos = [
  { src: 'https://www.svgrepo.com/show/512355/html-124.svg', alt: 'HTML5' },
  { src: 'https://www.svgrepo.com/show/478223/css.svg', alt: 'CSS3' },
  {
    src: 'https://www.svgrepo.com/show/306831/tailwindcss.svg',
    alt: 'TailwindCSS',
  },
  {
    src: 'https://www.svgrepo.com/show/473670/javascript.svg',
    alt: 'JavaScript',
  },
  { src: 'https://www.svgrepo.com/show/521303/react-16.svg', alt: 'React' },
  { src: 'https://www.svgrepo.com/show/342062/next-js.svg', alt: 'Next.js' },
  {
    src: 'https://www.svgrepo.com/show/394395/redux.svg',
    alt: 'Redux Toolkit',
  },
  {
    src: 'https://img.icons8.com/?size=512&id=hhZfccTvdhiR&format=png',
    alt: 'Chakra UI',
  },
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
    <Box pt={20} pb={20} position="relative" bg={bg} textAlign="center">
      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100px;
        }

        .marquee-content {
          display: flex;
          animation: scroll 20s linear infinite;
          align-items: center;
          will-change: transform;
          /* Ensure seamless infinite loop */
          animation-fill-mode: none;
          animation-iteration-count: infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .skill-item {
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 14s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>

      <div className="marquee">
        <div className="marquee-content">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <Box
              key={i}
              mx={8}
              display="flex"
              alignItems="center"
              flexShrink={0}
              className="skill-item"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                boxSize="56px"
                filter="brightness(0) invert(0.85)"
                fallbackSrc="/favicon.ico"
                transition="all 0.3s ease"
              />
              <Text
                fontSize="2xl"
                fontWeight="700"
                className={denkOne.className}
                color="gray.200"
                ml={3}
                whiteSpace="nowrap"
              >
                {logo.alt}
              </Text>
            </Box>
          ))}
        </div>
      </div>

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
