import { Box, Card, CardBody, Flex, HStack, Heading, Icon, Link, Skeleton, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { translateDate } from '@scdp/ui/lib';
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';
import { SitecoreCommunityContent } from './types';

type SitecoreCommunityBlogOrQuestionProps = {
  contentType: 'Blog' | 'Questions';
  item: SitecoreCommunityContent;
  loading?: boolean;
};

export const SitecoreCommunityBlogOrQuestion = ({ item, loading }: SitecoreCommunityBlogOrQuestionProps): JSX.Element => (
  <Card variant={'elevated'} shadow={'md'} justifyContent={'space-between'} marginY={4}>
    <CardBody>
      <HStack spacing={16} justifyContent={'space-between'}>
        <Skeleton isLoaded={!loading} flexGrow={1}>
          <Stack>
            <Heading variant="section">{item.contentType}</Heading>

            <Heading size={'md'} my={4}>
              <Link as={NextLink} href={`${SITECORE_COMMUNITY_URL}${item.url}`} isExternal={true} rel="noreferrer noopener" target="_blank" color={useColorModeValue('black', 'white')}>
                {item.title}
              </Link>
            </Heading>
            <Text>
              by <strong>{item.userName}</strong>
            </Text>
            <Text>
              Published <strong>{translateDate(item.publishDate)}</strong>
            </Text>
          </Stack>
        </Skeleton>
        <Skeleton isLoaded={!loading} flexGrow={0}>
          <Stack justifyItems={'right'}>
            <Box>
              <Text>{item.commentCount} comments</Text>
              <Text>{item.viewCount} views</Text>
            </Box>
          </Stack>
        </Skeleton>
      </HStack>
    </CardBody>
  </Card>
);

export const SitecoreCommunityBlogOrQuestionSidebar = ({ item, loading }: SitecoreCommunityBlogOrQuestionProps): JSX.Element => {
  return (
    <Flex justifyContent={'items-start'} mb={5}>
      <Skeleton isLoaded={!loading}>
        <Box display={{ base: 'none', sm: 'block' }} textAlign={'center'} mr={5} height={'min-content'}>
          <Icon boxSize={3} viewBox="0 0 30 30" width="25" height="25" margin={'.5rem'}>
            <rect x="1.304" y="1.314" width="27.337" height="27.337" fill="none" stroke="currentColor" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 3.841 25.19 3.874" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 15.624 25.19 15.657" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 17.544 25.19 17.577" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 19.398 25.19 19.431" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 21.318 25.19 21.351" />
            <rect x="5.197" y="6.323" width="19.496" height="7.117" fill="currentColor" stroke="currentColor" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 23.486 25.19 23.519" />
            <polyline fill="currentColor" stroke="currentColor" points="4.7 25.406 25.19 25.439" />
          </Icon>
        </Box>
      </Skeleton>
      <Skeleton isLoaded={!loading} flexGrow={1}>
        <Stack fontSize={'sm'}>
          <Heading as={'h4'} size="sm">
            <Link as={NextLink} href={`${SITECORE_COMMUNITY_URL}${item.url}`} isExternal={true} rel="noreferrer noopener" target="_blank" color={useColorModeValue('black', 'white')}>
              {item.title}
            </Link>
          </Heading>
          <HStack spacing={'24px'}>
            <Text>{new Date(item.publishDate).toLocaleString('en-US', { dateStyle: 'medium' })}</Text>
            <Text>{item.commentCount} comments</Text>
            <Text>{item.viewCount} views</Text>
          </HStack>
        </Stack>
      </Skeleton>
    </Flex>
  );
};
