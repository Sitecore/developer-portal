import { Button, ButtonGroup, Heading, Wrap } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LinkValue } from '../../lib/types/link-value';

interface SidebarNavProps {
  title?: string;
  links: LinkValue[];
}

const SidebarNav = ({ links, title }: SidebarNavProps) => {
  //const [navScrolled] = useGlobalState('navScrolled');

  return (
    <Wrap as={'nav'} direction="column" position={'sticky'} top={'9rem'} width={'xs'}>
      {title && (
        <Heading variant={'section'} size={'sm'} mb={8}>
          {title}
        </Heading>
      )}
      <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2.5" position={'sticky'}>
        {links.map((link, i) => {
          return (
            <Button as={NextLink} href={link.href} key={i}>
              {link.text}
            </Button>
          );
        })}
      </ButtonGroup>
    </Wrap>
  );
};

export default SidebarNav;
