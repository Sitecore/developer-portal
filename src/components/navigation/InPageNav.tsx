import { Button, ButtonGroup, Heading, Icon, Wrap } from '@chakra-ui/react';
import { ContentHeading } from '@lib/interfaces/contentheading';

import { mdiChevronRight } from '@mdi/js';
import useInPageNavigation from '../../hooks/useInPageNavigation';

type InPageNavProps = {
  title?: string;
  titles: Array<ContentHeading>;
};

const InPageNav = ({ title, titles }: InPageNavProps) => {
  const links = useInPageNavigation(titles, true);

  return (
    <Wrap as={'nav'} direction="column" mt={{ base: 0, md: 10 }} mr={0} p={{ base: 2, md: 0 }} width={'2xs'} hideBelow={'xl'}>
      <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
        {title ? title : 'Table of contents'}
      </Heading>
      <ButtonGroup variant="navigation" orientation="vertical" spacing="1" mx="-2">
        {links.map((link, i) => {
          return (
            <Button
              as="a"
              href={link.href}
              key={i}
              // isActive={link.active}
              leftIcon={
                <Icon>
                  <path d={mdiChevronRight} />
                </Icon>
              }
            >
              {link.text}
            </Button>
          );
        })}
      </ButtonGroup>
    </Wrap>
  );
};

export default InPageNav;
