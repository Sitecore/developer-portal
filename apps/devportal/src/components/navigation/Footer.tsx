import { Box, Center, Container, HStack, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import { SocialButton } from '@scdp/ui/components';
import NextLink from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => (
  <Box bg={'chakra-subtle-bg'} borderTop={'1px'} borderColor={'chakra-border-color'} position={'relative'} bottom={0} left={0} width={'full'}>
    <Container as={Stack} maxW={'6xl'} py={8} px={2} direction={{ base: 'column', md: 'column' }} spacing={4} gap={8}>
      <Center>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/WeAreSitecore'} aria-label="Twitter">
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/DiscoverSitecore'} aria-label="YouTube">
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/sitecore/'} aria-label="LinkedIn">
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/Sitecore'} aria-label="facebook">
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/sitecore'} aria-label="instagram">
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Center>
      <Center>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing={3}>
          <HStack>
            <Text>© Copyright 2024, Sitecore. All Rights Reserved</Text>
          </HStack>
          <HStack>
            <Text display={{ base: 'none', md: 'block' }}>|</Text>
            <Link as={NextLink} href={'https://www.sitecore.com/legal'} target="_blank" title="Opens in new tab">
              <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
                Legal
              </Text>
            </Link>
            <Text>|</Text>
            <Link as={NextLink} href={'https://www.sitecore.com/trust/privacy-policy'} target="_blank" title="Opens in new tab">
              <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
                Privacy
              </Text>
            </Link>
            <Text>|</Text>
            <Link as={NextLink} href={'/help'} target="_blank" title="Opens in new tab">
              <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
                Get Help
              </Text>
            </Link>
            <Text>|</Text>
            <Tooltip label="Read more on how to contribute to the developer portal" placement="top">
              <Link as={NextLink} href={'/contribute'} title="Learn how to contribute to the developer portal">
                <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
                  Contribute
                </Text>
              </Link>
            </Tooltip>
          </HStack>
        </Stack>
      </Center>
    </Container>
  </Box>
);
