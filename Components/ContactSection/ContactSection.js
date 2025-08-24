'use client';
import React, { useRef, useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import dynamic from 'next/dynamic';
const SpotLightcard = dynamic(() => import("../SpotlightCard/SpotLightcard"), { ssr: false });

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  Divider,
  Link,
  useToast,
} from '@chakra-ui/react';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { FormErrorMessage } from '@chakra-ui/react';



function ContactSection() {
  const form = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // Validation states
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on typing
  };

  // Validation function
  const validate = () => {
    let newErrors = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)
    ) {
      newErrors.user_email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    emailjs
      .sendForm(
        'service_ih5sqe2',
        'template_qq8s6dh',
        form.current,
        '4S21e3bysxDMDPmKV'
      )
      .then(
        () => {
          toast({
            title: 'Message sent!',
            description: 'I will get back to you soon.',
            status: 'success',
            duration: 4000,
            isClosable: true,
          });
          setLoading(false);
          form.current.reset();
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        () => {
          toast({
            title: 'Error!',
            description: 'Something went wrong, please try again.',
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <Flex
      id="contact"
      bg="#141414"
      pt={{ base: 5, md: 16, lg: 20 }}
      px={{ base: 6, md: 32 }}
      pb={20}
      justify="center"
      align="center"
    >
      {/* <SpotLightcard
        spotlightColor="rgba(237, 137, 54, 0.09)"
        padding={'1rem'}
        className="custom-spotlight-card"
      > */}
        <Flex
          position={'relative'}
          flexWrap={'wrap'}
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          gap={20}
          direction={{ base: 'column', md: 'row' }}
          w={{ base: '100%', md: '100%' }}
          boxShadow="xl"
        >
          {/* Profile Section (unchanged) */}
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            gap={6}
            textAlign="center"
          >
            <ProfileCard
              name="Muneeb"
              title="Web Developer"
              handle="muniCodes"
              avatarUrl="/Images/my_image2.jpeg"
              iconUrl="/Images/icon_pattern.png"
              behindGradient="none"
              innerGradient="none"
              enableTilt={true}
              enableMobileTilt={false}
              showUserInfo={true}
              phone="+92 318 6044351"
              address="Lahore, Pakistan"
              contactButton={true}
            />

            {/* Social Links */}
            <Flex
              position="absolute"
              display={{ base: 'none', md: 'flex' }}
              top={20}
              right={0}
              flexDirection={{ base: 'row', md: 'column' }}
              gap={9}
              alignItems={'center'}
            >
              <Link
                href="https://github.com/yourusername"
                isExternal
                color="whiteAlpha.700"
                transition="all 0.15s"
                fontSize="3xl"
                _hover={{ color: 'orange.400' }}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                isExternal
                color="whiteAlpha.700"
                transition="all 0.15s"
                fontSize="3xl"
                _hover={{ color: 'orange.400' }}
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://instagram.com/yourusername"
                isExternal
                color="whiteAlpha.700"
                transition="all 0.15s"
                fontSize="3xl"
                _hover={{ color: 'orange.400' }}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com/yourusername"
                isExternal
                color="whiteAlpha.700"
                transition="all 0.15s"
                fontSize="3xl"
                _hover={{ color: 'orange.400' }}
              >
                <FaFacebookSquare />
              </Link>
            </Flex>

            {/* Contact Info */}
            <Box mt={6} color="whiteAlpha.900" textAlign="left">
              <Text fontSize="md">
                <span style={{ color: '#ED8936', fontWeight: 'bold' }}>
                  Address:{' '}
                </span>{' '}
                Lahore, Pakistan
              </Text>
              <Text fontSize="md" mt={2}>
                <span style={{ color: '#ED8936', fontWeight: 'bold' }}>
                  Email:
                </span>{' '}
                <Link
                  href="mailto:muneebrehman.codes@gmail.com"
                  color="whiteAlpha.700"
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline', color: 'orange.400' }}
                >
                  muneebrehman.codes@gmail.com
                </Link>
              </Text>
              <Text fontSize="md" mt={2}>
                <span style={{ color: '#ED8936', fontWeight: 'bold' }}>
                  Phone:
                </span>{' '}
                +92 318 6044351
              </Text>
            </Box>

            <Divider borderColor="gray.700" w="80%" />
          </Box>

          {/* Contact Form with EmailJS */}
        <Box
            flex="2"
            bg="transparent"
            borderRadius="lg"
            pt={2}
            px={{ base: 1, sm: 4, md: 8 }}
            mr={{ base: 0, md: 14 }}
            color="white"
            width={{ base: '100%', sm: '90%', md: '600px' }}
            maxW="full"
          >
            <Text
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
              mb={5}
              textAlign={{ base: 'left', md: 'left' }}
            >
              Let's <span style={{ color: '#ED8936' }}>Connect</span>
            </Text>

            <form ref={form} onSubmit={sendEmail}>
              <VStack spacing={6} w="100%">
                {/* Name */}
                <FormControl isRequired isInvalid={errors.user_name}>
                  <FormLabel color="whiteAlpha.700">Name</FormLabel>
                  <Input
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    bg="transparent"
                    border="1px solid #333"
                    _placeholder={{ color: 'whiteAlpha.700' }}
                    _focus={{
                      borderColor: 'orange.400',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                  <FormErrorMessage>{errors.user_name}</FormErrorMessage>
                </FormControl>

                {/* Email */}
                <FormControl isRequired isInvalid={errors.user_email}>
                  <FormLabel color="whiteAlpha.700">Email</FormLabel>
                  <Input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    bg="transparent"
                    border="1px solid #333"
                    _placeholder={{ color: 'whiteAlpha.700' }}
                    _focus={{
                      borderColor: 'orange.400',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                  <FormErrorMessage>{errors.user_email}</FormErrorMessage>
                </FormControl>

                {/* Message */}
                <FormControl isRequired isInvalid={errors.message}>
                  <FormLabel color="whiteAlpha.700">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    bg="transparent"
                    border="1px solid #333"
                    rows={6}
                    _placeholder={{ color: 'whiteAlpha.700' }}
                    _focus={{
                      borderColor: 'orange.400',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={loading}
                  loadingText="Sending..."
                  bg="orange.400"
                  color="black"
                  w="100%"
                  size="lg"
                  mt={2}
                  _hover={{ bg: 'orange.500' }}
                  _active={{ bg: 'orange.600' }}
                  transition="0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      {/* </SpotLightcard> */}
    </Flex>
  );
}

export default ContactSection;
