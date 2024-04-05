// Interfaces
import { Card, CardBody, CardHeader, CardProps, Heading, Stack } from '@chakra-ui/react';
import { SitecoreCommunityNewsOrEventItem } from '../SitecoreCommunityNewsOrEventItem';
import type { SitecoreCommunityEvent } from '../types';
import { TextLink } from '@scdp/ui/components';

type SitecoreCommunityEventsProps = CardProps & {
  title?: string;
  data?: SitecoreCommunityEvent[];
};

export const SitecoreCommunityEvents = ({ data, title, ...rest }: SitecoreCommunityEventsProps): JSX.Element => {
  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest}>
      <CardHeader justifyContent={'space-between'} display={'flex'}>
        <Heading as={'h3'} size={'xl'}>
          {title ? title : 'Events'}
        </Heading>
        <TextLink href={'https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5'} text={'See all'} />
      </CardHeader>
      <CardBody>
        <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
          {data.map((event, i) => (
            <SitecoreCommunityNewsOrEventItem {...event} categoryTitle="Event" key={i} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
