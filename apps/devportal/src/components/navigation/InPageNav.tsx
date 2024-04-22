// Lib

import { Heading, List, ListIcon, ListItem, Wrap } from '@chakra-ui/react';
import { mdiCircleSmall } from '@mdi/js';
import Link from 'next/link';
import { title } from 'process';
import { ContentHeading } from '../../lib/interfaces/contentheading';

type InPageNavProps = {
  titles: ContentHeading[];
};

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const links = titles.map((text) => ({
    text: text.title,
    href: `#${text.id}`,
  }));

  return (
    <Wrap as={'nav'} direction="column" mt={{ base: 0, md: 10 }} mr={4} p={{ base: 2, md: 0 }} width={'2xs'} hideBelow={'xl'}>
      {title && (
        <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
          Table of contents
        </Heading>
      )}
      <List spacing="1">
        {links.map((link, i) => {
          return (
            <ListItem display={'flex'} paddingLeft={0} key={i}>
              <ListIcon boxSize={6} mr={0}>
                <path d={mdiCircleSmall} />
              </ListIcon>
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
