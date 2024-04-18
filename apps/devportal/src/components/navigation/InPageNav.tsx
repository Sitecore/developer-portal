import { Heading, List, ListIcon, ListItem, Wrap } from '@chakra-ui/react';
import { mdiCircleSmall } from '@mdi/js';
import Link from 'next/link';
import { title } from 'process';
import { useEffect, useState } from 'react';
import { ContentHeading } from '../../lib/interfaces/contentheading';

type InPageNavProps = {
  titles: ContentHeading[];
};

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const [links, setLinks] = useState(
    titles.map((text) => ({
      text: text.title,
      href: `#${text.id}`,
      active: false,
    }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setLinks((prevLinks) => prevLinks.map((link) => (link.href === `#${id}` ? { ...link, active: true } : { ...link, active: false })));
          }
        });
      },
      { threshold: 1, rootMargin: '0px 0px -90% 0px' }
    );

    titles.forEach((title) => {
      const element = document.getElementById(title.id);
      if (element) observer.observe(element);
    });

    return () => {
      titles.forEach((title) => {
        const element = document.getElementById(title.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [titles]);

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
            <ListItem display={'flex'} paddingLeft={0} key={i} fontWeight={link.active ? 'bold' : 'normal'}>
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
