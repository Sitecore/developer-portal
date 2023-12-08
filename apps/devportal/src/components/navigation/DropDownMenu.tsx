import { SubPageNavigation, SubPageNavigationItem } from '@/src/lib/interfaces/page-info';
import { Box, Button, ButtonGroup, Collapse, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { appendPathToBasePath } from 'ui/lib/utils/stringUtil';

export interface DropdownNavigationProps {
  title?: string;
  subPageNavigation: SubPageNavigation;
}

export const DropDownMenu = ({ subPageNavigation }: DropdownNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const basePath = subPageNavigation.path;

  return (
    <Box as={'aside'}>
      <Button
        as={Button}
        onClick={onToggle}
        width={'full'}
        rightIcon={
          <Icon layerStyle="menuButtonIcon">
            <path d={mdiChevronDown} />
          </Icon>
        }
      >
        {subPageNavigation.title}
      </Button>

      <Collapse in={isOpen}>
        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" border={'1px'} borderColor={'chakra-border-color'} borderRadius={'lg'} shadow={'base'} mt={2} position={'relative'} bg="chakra-subtle-bg" width={'full'}>
          {subPageNavigation.routes.map((link, i) => {
            if (link.children?.length > 0) {
              return renderMenuGroup(link, basePath, i);
            } else {
              return renderMenuItem(link, basePath);
            }
          })}
        </ButtonGroup>
      </Collapse>
    </Box>
  );
};

function renderMenuGroup(child: SubPageNavigationItem, basePath: string, i: number): React.ReactNode {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <React.Fragment key={i}>
      <Button
        rightIcon={
          router.asPath.includes(basePath) ? <Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronUp} /> : <path d={mdiChevronDown} />}</Icon> : <Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronDown} /> : <path d={mdiChevronUp} />}</Icon>
        }
        justifyContent={'space-between'}
        width={'full'}
        transition={'ease-in-out'}
      >
        {child.ignoreLink ? (
          <Text px={2}>{child.title}</Text>
        ) : (
          <Text as={NextLink} href={appendPathToBasePath(basePath, child.path)} px={2}>
            {child.title}
          </Text>
        )}
      </Button>

      <Collapse animateOpacity in={isOpen}>
        <Box pl={2}>
          {child.children?.length > 0 &&
            child.children.map((link, i) => {
              if (link.children?.length > 0) {
                return renderMenuGroup(link, appendPathToBasePath(basePath, child.path), i);
              }

              return renderMenuItem(link, appendPathToBasePath(basePath, child.path));
            })}
        </Box>
      </Collapse>
    </React.Fragment>
  );
}

function renderMenuItem(menuItem: SubPageNavigationItem, basePath: string): React.ReactNode {
  return (
    <Button variant="navigation" pl={3} justifyContent={'space-between'} width={'full'} transition={'ease-in-out'}>
      <Text as={NextLink} href={appendPathToBasePath(basePath, menuItem.path)} px={2}>
        {menuItem.title}
      </Text>
    </Button>
  );
}
