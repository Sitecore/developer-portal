// Interfaces
import type { SitecoreCommunityContent } from '../types';
// Global
import axios from 'axios';
import { useEffect, useState } from 'react';
// Components
// Local
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Card, CardBody, CardHeader, CardProps, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { TextLink } from '../../../links/TextLink';
import { ForumOption, SortOption } from '../SitecoreCommunity.api';
import { SitecoreCommunityBlogOrQuestion } from '../SitecoreCommunityBlogOrQuestion';
import { FORUM_TO_TITLE } from '../sitecore-community.constants';

type SitecoreCommunityQuestionsProps = CardProps & {
  data?: SitecoreCommunityContent[];
  sortKeys?: SortOption | SortOption[];
  forumKeys?: ForumOption | ForumOption[];
};

export const SitecoreCommunityQuestions = ({ data, sortKeys, forumKeys, ...rest }: SitecoreCommunityQuestionsProps): JSX.Element => {
  if (!data || data.length === 0) {
    return <></>;
  }

  const [fetchedResults, setFetchedResults] = useState<SitecoreCommunityContent[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [forum, setForum] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    console.log('fetching questions');
    const query = ['contentType=questions'];
    if (sort) {
      query.push(`sort=${sort}`);
    }
    if (forum) {
      query.push(`forum=${forum}`);
    }
    axios
      .get(`/api/sitecore-community?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sort, forum]);

  const items = fetchedResults || data;

  return (
    <Card shadow={'none'} {...rest} background={'transparent'} variant={'unstyled'} width={'100%'}>
      <CardHeader justifyContent={'space-between'} display={'flex'}>
        <Heading as={'h3'} size={'xl'}>
          Questions from the community
        </Heading>
        <TextLink href={'https://community.sitecore.com/community?id=community_forum&sys_id=671511531b357810486a4083b24bcb62'} text={'See all'} />
      </CardHeader>
      <CardBody paddingTop={8}>
        {sortKeys && Array.isArray(sortKeys) && sortKeys.length > 1 && (
          <Menu>
            <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} w={6} h={6} />}>
              Order by
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSort('publish')}>Recent Questions</MenuItem>
              <MenuItem onClick={() => setSort('view')}>Most Popular</MenuItem>
              <MenuItem onClick={() => setSort('created')}>Created</MenuItem>
            </MenuList>
          </Menu>
        )}

        {forumKeys && Array.isArray(forumKeys) && forumKeys.length > 1 && (
          <Menu>
            <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} w={6} h={6} />}>
              Filter by
            </MenuButton>
            <MenuList>
              {forumKeys.map((key) => (
                <MenuItem key={key} value={key} onClick={(changeEvent) => setForum(changeEvent.currentTarget.value)}>
                  {FORUM_TO_TITLE[key]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}

        {items.map((item, i) => (
          <SitecoreCommunityBlogOrQuestion item={item} contentType="Questions" loading={isLoading} key={i} />
        ))}
      </CardBody>
    </Card>
  );
};
