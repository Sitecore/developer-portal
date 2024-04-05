// Global
// Components
// Local
import { Card, CardBody, CardHeader, CardProps, Heading, Stack } from '@chakra-ui/react';
import { TextLink } from '../../../links/TextLink';
import { SitecoreCommunityNewsOrEventItem, SitecoreCommunityNewsOrEventItemSidebar } from '../SitecoreCommunityNewsOrEventItem';
import { SitecoreCommunityContent } from '../types';

type SitecoreCommunityNewsProps = CardProps & {
  title?: string;
  data?: SitecoreCommunityContent[];
  hideCategory?: boolean;
  listItem?: boolean;
};

export const SitecoreCommunityNews = ({ title, data, hideCategory, listItem }: SitecoreCommunityNewsProps): JSX.Element => {
  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Card variant={'flat'} shadow={'none'}>
      <CardHeader justifyContent={'space-between'} display={'flex'} px="0">
        <Heading as={'h3'} size={'xl'}>
          {title ? title : 'News and Announcements'}
        </Heading>
        <TextLink href={'https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00'} text={'See all'} />
      </CardHeader>
      <CardBody p="0">
        <Stack spacing={8} direction={{ base: 'column', md: 'row' }} py={5}>
          {data.map((item, i) =>
            listItem ? (
              <SitecoreCommunityNewsOrEventItemSidebar {...item} startDate={item.publishDate} key={i} />
            ) : (
              <SitecoreCommunityNewsOrEventItem {...item} startDate={item.publishDate} categoryTitle={!hideCategory ? 'News and Announcements' : undefined} key={i} />
            )
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
