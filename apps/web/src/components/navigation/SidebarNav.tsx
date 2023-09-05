import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { LinkValue } from 'ui/common/types/link-value';
import { useGlobalState } from '../../lib/globalState';
import { ButtonLink } from '../ui/ButtonLink';
import styles from './SidebarNav.module.css';

interface SidebarNavProps {
  title?: string;
  links: LinkValue[];
}

const SidebarNav = ({ links, title }: SidebarNavProps) => {
  const [navScrolled] = useGlobalState('navScrolled');
  const positionalClasses = navScrolled ? 'md:top-24' : 'md:top-36';

  return (
    // <nav className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses} `}>
    <Box as="nav" position={'sticky'} top={'9rem'}>
      {title && (
        <Heading size={'sm'} mb={8}>
          {title}
        </Heading>
      )}
      <UnorderedList position={'sticky'} listStyleType={'none'}>
        {links.map((link, i) => {
          return (
            <ListItem className={styles.sidebarNavItem} border={1} key={i} pb={4} pr={2} pl={4} pt={1} position={'relative'}>
              <ButtonLink variant={'link'} showIcon={false} href={link.href} text={link.text} textAlign={'left'} />
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default SidebarNav;
