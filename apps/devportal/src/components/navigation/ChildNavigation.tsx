import { Box, Button, ButtonGroup, Collapse, Heading, Icon, Stack, Text, Tooltip, Wrap, useDisclosure } from '@chakra-ui/react';
import React from 'react';
//import { useGlobalState } from '../../lib/globalState';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { SubPageNavigation, SubPageNavigationItem } from '../../lib/interfaces/page-info';

interface ChildNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

const ChildNavigation = ({ subPageNavigation }: ChildNavigationProps) => {
  const basePath = subPageNavigation.path;

  return (
    <Box as={'aside'}>
      <Wrap layerStyle="" direction="column" maxH={`calc(100vh - 3.5rem)`} h={`calc(100vh - 3.5rem)`} top="14" overflow="auto" position={'sticky'} display="flex" flexFlow="column nowrap">
        {subPageNavigation.heading && (
          <Heading size="sm" mb={8} paddingLeft={5}>
            {subPageNavigation.title}
          </Heading>
        )}

        {subPageNavigation?.routes.map((link, i) => {
          const linkUrl = appendPathToBasePath(basePath, link.path);

          return (
            <Wrap mb={4} key={i}>
              <Heading variant="section" px={2} fontWeight={'bold'}>
                {link.title}
              </Heading>
              <ButtonGroup variant="navigation" orientation="vertical" spacing="1" mx={-2} width={'full'}>
                {link.children?.length > 0 && renderChildren(link, linkUrl)}
              </ButtonGroup>
            </Wrap>
          );
        })}
      </Wrap>
    </Box>
  );
};

function renderChildren(link: SubPageNavigationItem, currentBasePath: string): React.ReactNode {
  const router = useRouter();
  return (
    <Stack py={0}>
      {link.children?.map((child, i) => {
        const childUrl = appendPathToBasePath(currentBasePath, child.path);

        return (
          <React.Fragment key={i}>
            {!child.children ? (
              <Tooltip label={child.title} aria-label="A tooltip">
                <Button as={NextLink} href={childUrl} key={i} isActive={router.asPath == childUrl}>
                  <Text maxW={190} isTruncated px={2}>
                    {child.title}
                  </Text>
                </Button>
              </Tooltip>
            ) : (
              renderGroup(i, child, childUrl)
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

function renderGroup(i: number, child: SubPageNavigationItem, basePath: string): React.ReactNode {
  const { isOpen, onToggle, onOpen } = useDisclosure();
  const router = useRouter();

  return (
    <React.Fragment key={i}>
      <Tooltip label={child.title} aria-label="A tooltip">
        <Button
          rightIcon={router.asPath.includes(basePath) ? undefined : <Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronDown} /> : <path d={mdiChevronRight} />}</Icon>}
          pl={3}
          justifyContent={'space-between'}
          width={'full'}
          transition={'ease-in-out'}
        >
          {child.path ? (
            <Text as={NextLink} href={basePath} maxW={190} isTruncated px={2}>
              {child.title}
            </Text>
          ) : (
            <Text maxW={190} isTruncated px={2}>
              {child.title}
            </Text>
          )}
        </Button>
      </Tooltip>

      <Collapse in={router.asPath.includes(basePath) ? !isOpen : isOpen} animateOpacity>
        <Box pl={2}>{child.children?.length > 0 && renderChildren(child, basePath)}</Box>
      </Collapse>
    </React.Fragment>
  );
}

function appendPathToBasePath(basePath: string, path: string): string {
  if (basePath.endsWith('/')) {
    basePath += path;
  } else {
    basePath += `/${path}`;
  }
  return basePath;
}

export default ChildNavigation;
