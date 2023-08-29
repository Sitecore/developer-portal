// Global
// Components
// Local
import { Card, CardBody, CardHeader, CardProps, Heading, Stack } from '@chakra-ui/react';
import { SitecoreCommunityContent } from 'ui/common/types/sitecoreCommunity';
import { ButtonLink } from '../../ui/ButtonLink';
import SitecoreCommunityNewsOrEventItem, { SitecoreCommunityNewsOrEventItemSidebar } from '../SitecoreCommunityNewsOrEventItem';

type SitecoreCommunityNewsProps = CardProps & {
  title?: string;
  data?: SitecoreCommunityContent[];
  columns?: number;
  className?: string;
  headingClass?: string;
  hideCategory?: boolean;
  listItem?: boolean;
};

const SitecoreCommunityNews = ({ title, data, columns, className, hideCategory, listItem, ...rest }: SitecoreCommunityNewsProps): JSX.Element => {
  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} background={'transparent'}>
      <CardHeader justifyContent={'space-between'} display={'flex'}>
        <Heading as={'h3'} size={'xl'}>
          {title ? title : 'News and Announcements'}
        </Heading>
        <ButtonLink href={'https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00'} text={'See all'} />
      </CardHeader>
      <CardBody>
        <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
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

export default SitecoreCommunityNews;
