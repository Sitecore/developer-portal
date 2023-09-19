// Lib

import { Heading, List, ListIcon, ListItem, Wrap } from '@chakra-ui/react';
import { mdiMenuRight } from '@mdi/js';
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
    <Wrap as={'nav'} direction="column" position={'sticky'} top={'9rem'}>
      {title && (
        <Heading variant={'section'} size={'sm'} mb={8}>
          Table of contents
        </Heading>
      )}
      <List spacing="1" m="-2.5" position={'sticky'}>
        {links.map((link, i) => {
          return (
            <ListItem display={'inline-flex'} paddingLeft={2} key={i}>
              <ListIcon boxSize={6}>
                <path d={mdiMenuRight} />
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
