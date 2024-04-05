import { Card, CardBody, CardHeader, CardProps, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { SetStateAction, useState } from 'react';
//import { SitecoreCommunityBlogOrQuestion, SitecoreCommunityBlogOrQuestionSidebar, SitecoreCommunityContent, SortOption } from '../SitecoreCommunity.api';
import { TextLink } from '../../../links/TextLink';
import { SitecoreCommunityContent } from '../types';
import { SitecoreCommunityBlogOrQuestion, SitecoreCommunityBlogOrQuestionSidebar } from '../SitecoreCommunityBlogOrQuestion';
import { SortOption } from '../SitecoreCommunity.api';

type SitecoreCommunityBlogProps = CardProps & {
  entries?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
  listItem?: boolean;
};

export const SitecoreCommunityBlog = ({ entries, sortKeys, listItem, ...rest }: SitecoreCommunityBlogProps): JSX.Element => {
  if (!entries || entries.length === 0) {
    return <></>;
  }

  // eslint-disable-next-line no-unused-vars
  const [fetchedResults, setFetchedResults] = useState<SitecoreCommunityContent[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNewResults = (val: string) => {
    setIsLoading(true);
    const query = ['contentType=blog', 'forum=blog', `sort=${val}`];
    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response: { data: SetStateAction<SitecoreCommunityContent[] | null>; }) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Card border={'none'} shadow={'none'} {...rest} size={{ base: 'xs', md: 'md' }}>
      <CardHeader justifyContent={'space-between'} display={'flex'} py={8}>
        <Heading as="h3" size="md">
          Latest blog posts
        </Heading>

        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=a1c2eb6b1b313c10486a4083b24bcbba" text="See all" />
      </CardHeader>
      <CardBody py={{ base: '2', md: '4' }}>
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

        {entries.map((item, i) => (listItem ? <SitecoreCommunityBlogOrQuestionSidebar item={item} contentType="Blog" key={i} loading={isLoading} /> : <SitecoreCommunityBlogOrQuestion item={item} contentType="Blog" key={i} loading={isLoading} />))}
      </CardBody>
    </Card>
  );
};
