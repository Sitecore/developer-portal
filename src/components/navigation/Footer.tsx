import { Flex, HStack, Icon, Link, Stack, StackDivider, Text, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { mdiStarFourPoints } from '@mdi/js';
import { SocialButton } from '../links';

export const Footer = () => (
  <Flex py={8} px={2} direction={{ base: 'column-reverse', md: 'row' }} gap={4} width={'full'} bg={'chakra-subtle-bg'} borderTop={'1px'} borderColor={'chakra-border-color'}>
    <Flex direction={{ base: 'column', md: 'row' }} width={'full'} justifyContent={'space-between'} maxWidth={'7xl'} mx={'auto'}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6} alignItems={'center'}>
        <Text>© Copyright 2025, Sitecore. All Rights Reserved</Text>

        <HStack divider={<StackDivider borderColor="gray.200" />} mb={{ base: 4, md: 0 }}>
          <Link as={NextLink} href={'https://www.sitecore.com/legal'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Legal
            </Text>
          </Link>
          <Link as={NextLink} href={'https://www.sitecore.com/trust/privacy-policy'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Privacy
            </Text>
          </Link>
          <Link as={NextLink} href={'/help'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Get Help
            </Text>
          </Link>
          <Tooltip label="Integrate Sitecore resources using LLMs" placement="top">
            <Link href={'/llms.txt'} title="Read LLM file">
              <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
                LLM
              </Text>
            </Link>
          </Tooltip>
        </HStack>
      </Stack>

      <Stack direction={'row'} spacing={6} justifyContent={'center'}>
        <SocialButton label={'Twitter'} href={'https://twitter.com/Sitecore'} aria-label="Twitter">
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
        <SocialButton label={'LLM'} href={'/llms.txt'} aria-label="LLM">
          <Icon>
            <path d={mdiStarFourPoints} />
          </Icon>
        </SocialButton>
      </Stack>
    </Flex>
  </Flex>
);
