'use client';

import { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Press_Start_2P, Geist_Mono } from 'next/font/google';
import gsap from 'gsap';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-geist-mono',
});

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.fade-in', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });
    tl.to('#wave', {
      y: 250,
      scaleY: 7.5,
      transformOrigin: 'center bottom',
      duration: 4,
      ease: 'power2.inOut',
    });

    let count = 0;
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval);

        // Delay before fade-out
        setTimeout(() => {
          gsap.to('#preloader', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              const el = document.getElementById('preloader');
              if (el) el.style.display = 'none';
            },
          });
        }, 500);
      } else {
        count += 1;
        setProgress(count);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      id="preloader"
      className=" items-center justify-center fixed top-0 left-0 w-screen h-screen z-[9999] px-4 py-10"
      style={{
        background: 'black',
        backdropFilter: 'blur(100px)',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box width="100%" maxWidth="1000px" className="fade-in">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
          fill="#595959"
          stroke="#595959"
          strokeWidth={2}
        >
          <defs>
            <clipPath id="text-clip">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="180"
                letterSpacing="10"
                fontFamily={pressStart2P.style.fontFamily}
              >
                M.R.C
              </text>
            </clipPath>
          </defs>

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="180"
            fill="#595959"
            letterSpacing="10"
            fontFamily={pressStart2P.style.fontFamily}
          >
            M.R.C
          </text>

          <g clipPath="url(#text-clip)">
            <rect width="100%" height="100%" fill="black" />
            <path
              id="wave"
              d="M0 200 Q 100 150, 200 200 T 400 200 T 600 200 T 800 200 T 1000 200 V300 H0 Z"
              fill="white"
            />
          </g>
        </svg>
      </Box>

      <Flex
        w="100%"
        maxW="1000px"
        justify="flex-start"
        flexDirection="column"
        textAlign="left"
        className="fade-in"
        pl={'23px'}
      >
        <Text
          fontSize="md"
          color="white"
          style={{ fontFamily: geistMono.style.fontFamily }}
        >
          {progress}%
        </Text>
        <Text
          fontSize="md"
          color="white"
          className="loading-text"
          style={{ fontFamily: geistMono.style.fontFamily }}
        >
          loading
          {progress % 4 === 0
            ? '.'
            : progress % 4 === 1
            ? '..'
            : progress % 4 === 2
            ? '...'
            : ''}
        </Text>
      </Flex>
    </Flex>
  );
}
