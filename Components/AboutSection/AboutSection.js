'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { SiChakraui, SiRedux, SiTailwindcss } from 'react-icons/si';
import { FaGithub, FaGit } from 'react-icons/fa';
import { MdWork, MdOutlineAssignment } from 'react-icons/md';
import React from 'react';

import dynamic from 'next/dynamic';
const ImageCard = dynamic(() => import('../ImageCard/ImageCard'), {
  ssr: false,
});
const SpotLightcard = dynamic(() => import('../SpotlightCard/SpotLightcard'), {
  ssr: false,
});

function AboutSection() {
  return (
    <Flex
      id="about"
      bg={'#141414'}
      direction={{ base: 'column', lg: 'row' }}
      pt={{ base: 10, md: 16, lg: 20 }}
      px={{ base: 6, sm: 10, md: 16, lg: 32 }}
      pb={{ base: 10, lg: 20 }}
      gap={{ base: 10, lg: 16 }}
      alignItems="center"
      flexWrap={{
        base: 'wrap',
        md: 'wrap',
        lg: 'wrap',
        xl: 'nowrap',
        '2xl': 'nowrap',
      }}
    >
      {/* Image Section */}
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexShrink={0}
        w={{ base: '100%', sm: '80%', md: '28rem', lg: '40rem' }}
        h={{ base: 'auto', md: '45rem' }}
      >
        <ImageCard
          imageSrc={'/Images/my_image1.jpeg'}
          altText=""
          captionText=""
          containerHeight="37rem"
          containerWidth="45rem"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.15}
          showMobileWarning={false}
          showTooltip={false}
          filter="grayscale(100%) brightness(0.8)"
          displayOverlayContent={false}
        />
      </Flex>

      {/* Content Section */}
      <Box
        w={{ base: '100%', md: '90%', lg: '55rem' }}
        pt={{ base: 6, lg: 4 }}
        pl={{ base: 0, lg: 6 }}
        h={{ base: 'auto', md: '40rem' }}
      >
        <Text
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="bold"
          color="white"
          mb={{ base: 6, md: 10 }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          About <span style={{ color: '#ED8936' }}>Me</span>
        </Text>

        <Text
          my={6}
          lineHeight={'7'}
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
          letterSpacing={'wide'}
          color={'whiteAlpha.800'}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          I am a Software Engineering student at Superior University with strong
          expertise in{' '}
          <span style={{ color: '#fb923c' }}>
            HTML, CSS, JavaScript, React, Next.js, Node.js, Express,
          </span>{' '}
          and
          <span style={{ color: '#fb923c' }}> MongoDB</span>. I completed a
          3-month internship at{' '}
          <span style={{ color: '#fb923c' }}>Crickslab</span>, where I
          contributed to real projects and strengthened my development skills.
          Alongside academics, I have built multiple projects that showcase my
          ability to design and deliver modern, user-focused applications.
        </Text>

        {/* Tabs Section */}
        <Tabs variant="unstyled" mt={{ base: 6, md: 8 }}>
          <TabList justifyContent={{ base: 'center', lg: 'flex-start' }}>
            {['Education', 'Skills', 'Experience'].map((label, index) => (
              <Tab
                key={index}
                position="relative"
                className="px-4 md:px-6 pb-3 text-lg font-medium text-white/70"
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'rgba(255,255,255,0.25)',
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '36px',
                  background:
                    'linear-gradient(to top, rgba(251,146,60,0.4), rgba(251,146,60,0))',
                  borderRadius: '6px 6px 0 0',
                  opacity: 0,
                  transition: 'all 0.4s ease',
                }}
                _selected={{
                  color: 'white',
                  _after: { opacity: 1 },
                  _before: { background: 'rgba(251,146,60,0.9)' },
                }}
              >
                {label}
              </Tab>
            ))}
          </TabList>

          {/* Panels */}
          <TabPanels>
            {/* Education */}
            <TabPanel>
              <Text
                color="orange.400"
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="semibold"
              >
                Intermediate:
              </Text>
              <Text
                mt={2}
                color={'whiteAlpha.800'}
                fontSize={{ base: 'sm', md: 'md' }}
                textAlign="justify"
              >
                Punjab group of universities, Supperior univeristy, 2021-2023
              </Text>

              <Text
                mt={6}
                color="orange.400"
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="semibold"
              >
                Bachelors:
              </Text>
              <Text
                mt={2}
                color={'whiteAlpha.800'}
                fontSize={{ base: 'sm', md: 'md' }}
                textAlign="justify"
              >
                Software Engineering, Supperior univeristy, 2024-2028{' '}
                <span className="text-orange-400">(Continued)</span>
              </Text>
            </TabPanel>

            {/* Skills */}
            <TabPanel>
              <Heading size="md" color="orange.400" mb={4}>
                My Skills
              </Heading>
              <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={3}>
                {[
                  { name: 'HTML', icon: <FaHtml5 /> },
                  { name: 'CSS', icon: <FaCss3Alt /> },
                  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                  { name: 'JavaScript', icon: <FaJs /> },
                  { name: 'React.js', icon: <FaReact /> },
                  { name: 'Next.js', icon: <SiNextdotjs /> },
                  { name: 'Chakra UI', icon: <SiChakraui /> },
                  { name: 'Redux Tool Kit', icon: <SiRedux /> },
                  { name: 'Git', icon: <FaGit /> },
                  { name: 'GitHub', icon: <FaGithub /> },
                  { name: 'Node.js', icon: <FaNode /> },
                  { name: 'Express.js', icon: <SiExpress /> },
                  { name: 'MongoDB', icon: <SiMongodb /> },
                ].map((skill, i) => (
                  <SpotLightcard
                    key={i}
                    spotlightColor="rgba(237,137,54,0.2)"
                    padding={'0.4rem'}
                    borderRadius={'12px'}
                  >
                    <Flex
                      key={i}
                      align="center"
                      gap={2}
                      px={3}
                      py={2}
                      color="whiteAlpha.900"
                      fontSize="sm"
                      fontWeight="600"
                    >
                      <Box fontSize={{ md: 'md' }} color="orange.400">
                        {skill.icon}
                      </Box>
                      <Box ml={2} fontSize={{ md: 'sm' }}>
                        {skill.name}
                      </Box>
                    </Flex>
                  </SpotLightcard>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Experience */}
            <TabPanel>
              <Heading size="md" color="orange.400" mb={4}>
                My Experience
              </Heading>
              <VStack align="start" spacing={6}>
                <Box
                  p={5}
                  rounded="xl"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    borderColor: 'orange.400',
                    transform: 'scale(1.02)',
                  }}
                >
                  <Flex align="center" gap={3}>
                    <MdWork size="20px" color="#fb923c" />
                    <Heading size="sm" color="white">
                      Internship @ Crickslab
                    </Heading>
                  </Flex>
                  <Text mt={2} color="whiteAlpha.800" fontSize="sm">
                    Worked as a <b>Frontend Intern</b> for 3 months,
                    contributing to cricket-related apps.
                  </Text>
                </Box>

                <Box
                  p={5}
                  rounded="xl"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    borderColor: 'orange.400',
                    transform: 'scale(1.02)',
                  }}
                >
                  <Flex align="center" gap={3}>
                    <MdOutlineAssignment size="20px" color="#fb923c" />
                    <Heading size="sm" color="white">
                      Projects
                    </Heading>
                  </Flex>
                  <Text mt={2} color="whiteAlpha.800" fontSize="sm">
                    🚀 Built multiple projects including:
                    <br />- Fullstack Chat Application (Next.js, Node, MongoDB)
                    <br />- Portfolio Website with modern UI/UX
                  </Text>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}

export default AboutSection;
