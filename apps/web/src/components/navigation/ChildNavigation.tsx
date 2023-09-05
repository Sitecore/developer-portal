import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
//import { useGlobalState } from '../../lib/globalState';
import { SubPageNavigation } from '../../lib/interfaces/page-info';
import { ButtonLink } from '../ui/ButtonLink';

interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  //const [navScrolled] = useGlobalState('navScrolled');

  return (
    // <nav className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses} `}>
    <Box as="nav" position={'sticky'} top={'9rem'}>
      {subPageNavigation.title && (
        <Heading size={'sm'} mb={8}>
          {subPageNavigation.title}
        </Heading>
      )}
      <Stack spacing={4} direction="column" align="left">
        {subPageNavigation?.routes.map((link, i) => {
          const urlSegment = `${subPageNavigation.path}/${link.path}`;

          return (
            <React.Fragment key={i}>
              <ButtonLink showIcon={false} href={urlSegment} text={link.title} justifyContent={'left'} alignItems={'left'} />

              {link.children?.length > 0 && (
                <Stack spacing={4} direction="column" paddingLeft={6}>
                  {link.children?.map((child, i) => {
                    return <ButtonLink href={`${urlSegment}/${child.path}`} text={child.title} justifyContent={'left'} alignItems={'left'} showIcon={false} key={i} />;
                  })}
                </Stack>
              )}
            </React.Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ChildNavigation;
