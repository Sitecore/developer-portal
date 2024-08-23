import { Heading, List, ListItem, Wrap } from '@chakra-ui/react';
import { ContentHeading } from '@lib/interfaces/contentheading';
import Link from 'next/link';
import { title } from 'process';
import useInPageNavigation from '../hooks/useInPageNavigation';

type InPageNavProps = {
  titles: ContentHeading[];
};

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const links = useInPageNavigation(titles, true);

  return (
    <Wrap as={'nav'} direction="column" mt={{ base: 0, md: 10 }} mr={0} p={{ base: 2, md: 0 }} width={'2xs'} hideBelow={'xl'}>
      {title && (
        <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
          Table of contents
        </Heading>
      )}
      <List spacing="1">
        {links.map((link, i) => {
          return (
            <ListItem display={'flex'} paddingLeft={0} key={i} fontWeight={link.active ? 'bold' : 'normal'} borderLeft={link.active ? '4px solid' : 'none'} borderColor={'primary-fg'} pl={link.active ? 3 : 4}>
              <Link href={link.href} key={i} title={link.text}>
                {link.text}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );
};

export default InPageNav;
