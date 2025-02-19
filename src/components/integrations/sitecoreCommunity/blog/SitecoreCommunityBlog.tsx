import { Card, CardBody, CardHeader, CardProps, Heading, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { SetStateAction, useState } from 'react';

// import { SitecoreCommunityBlogOrQuestion, SitecoreCommunityBlogOrQuestionSidebar, SitecoreCommunityContent, SortOption } from '../SitecoreCommunity.api';
import { TextLink } from '../../../links/TextLink';
import { SortOption } from '../SitecoreCommunity.api';
import { SitecoreCommunityBlogOrQuestion, SitecoreCommunityBlogOrQuestionSidebar } from '../SitecoreCommunityBlogOrQuestion';
import { SitecoreCommunityContent } from '../types';

type SitecoreCommunityBlogProps = CardProps & {
  entries?: Array<SitecoreCommunityContent>;
  sortKeys?: SortOption | Array<SortOption>;
  listItem?: boolean;
};

export const SitecoreCommunityBlog = ({ entries, sortKeys, listItem, ...rest }: SitecoreCommunityBlogProps) => {
  const [fetchedResults, setFetchedResults] = useState<Array<SitecoreCommunityContent> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNewResults = (val: string) => {
    setIsLoading(true);

    const query = ['contentType=blog', 'forum=blog', `sort=${val}`];

    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response: { data: SetStateAction<Array<SitecoreCommunityContent> | null> }) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err: any) => console.log(err));
  };

  if (!entries || entries.length === 0) {
    return <></>;
  }

  return (
    <Card variant={'unstyled'} {...rest} size={{ base: 'xs', md: 'md' }}>
      <CardHeader justifyContent={'space-between'} display={'flex'} py={8} px={0}>
        <Heading as="h3" size={listItem ? 'md' : 'xl'} fontFamily={'"DM Sans", sans-serif'} fontWeight={'400'}>
          Latest community blog posts
        </Heading>

        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba" text="See all" />
      </CardHeader>
      <CardBody p="0">
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <div className="flex justify-end mb-6">
            <label>
              Order by:
              <select onChange={(changeEvent) => fetchNewResults(changeEvent.target.value)}>
                <option value="created">Recent Questions</option>
                <option value="view">Most Popular</option>
                <option value="created">Created</option>
              </select>
            </label>
          </div>
        )}

        {listItem ? (
          entries.map((item, i) => <SitecoreCommunityBlogOrQuestionSidebar item={item} contentType="Blog" key={i} loading={isLoading} />)
        ) : (
          <Stack spacing={8} direction={{ base: 'column', md: 'row' }} py={5}>
            {entries.slice(0, 3).map((item, i) => (
              <SitecoreCommunityBlogOrQuestion item={item} contentType="Blog" key={i} loading={isLoading} />
            ))}
          </Stack>
        )}
      </CardBody>
    </Card>
  );
};
