'use client';

import React from 'react';
import { Box, SimpleGrid, Text, Flex, Badge, Button } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const ImageCard = dynamic(() => import("../ImageCard/ImageCard"), { ssr: false });
const SpotLightcard = dynamic(() => import("../SpotlightCard/SpotLightcard"), { ssr: false });
const projects = [
  {
    title: 'Instagram Auth',
    description:
      'Web app for visualizing personalized Instagram data. View top artists, tracks, and detailed stats.',
    image: '/Images/project_3.png',
    tags: ['React', 'Express', 'Instagram API', 'Heroku'],
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Chat App',
    description:
      'Real-time chat app with authentication, rooms, and typing indicators.',
    image: '/Images/project_1.png',
    tags: ['Next.js', 'Node.js', 'Socket.IO', 'MongoDB'],
    link: 'https://yourchatapp.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects, blogs, and skills.',
    image: '/Images/project_2.png',
    tags: ['Next.js', 'Chakra UI', 'Vercel'],
    link: 'https://yourportfolio.com',
  },
];

function ProjectsSection() {
  return (
    <Box
      id="project"
      position={'relative'}
      bg="#141414"
      py={{
        base: 10,
        md: 32,
      }}
      px={{ base: 6, xl: '32' }}
    >
      <Text
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="bold"
        color="white"
        mb={10}
        textAlign="center"
      >
        My <span style={{ color: '#ED8936' }}>Projects</span>
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project, index) => (
          // <SpotLightcard
          //   key={index}
          //   spotlightColor="rgba(237, 137, 54, 0.13)"
          //   padding={'1rem'}
          //   className="custom-spotlight-card"
          // >
            <Box key={index} p={6}>
              {/* <ImageCard
                imageSrc={project.image}
                altText={project.title}
                captionText=""
                containerHeight="18rem"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                borderRadius="0.5rem"
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              /> */}

              <Text
                fontSize="xl"
                fontWeight="bold"
                color="whiteAlpha.900"
                mt={4}
                mb={2}
              >
                {project.title}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.900" mb={4}>
                {project.description}
              </Text>

              <Flex wrap="wrap" gap={2} mb={4}>
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="rgba(249,115,22,0.1)"
                    color="#f97316"
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>

              <Flex justify="flex-end">
                <Button
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  bg="#ED8936"
                  rounded={'none'}
                  color="white"
                  _hover={{ bg: '#e07924' }}
                  borderRadius="md"
                >
                  View Project ↗
                </Button>
              </Flex>
            </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProjectsSection;
