import { Box, Button, ButtonGroup, Collapse, Icon, useDisclosure } from '@chakra-ui/react';
import { mdiChevronDown } from '@mdi/js';

import { SidebarNavigationConfig } from '@/src/lib/interfaces/page-info';

import { SidebarGroupItem } from './SidebarNavigation';

export interface SidebarNavigationProps {
  title?: string;
  showSearch?: boolean;
  config: SidebarNavigationConfig;
}

export const DropDownNavigation = ({ config, ...rest }: SidebarNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as={'nav'} hideFrom={'lg'} {...rest}>
      <Button
        as={Button}
        onClick={onToggle}
        variant={'outline'}
        width={'full'}
        rightIcon={
          <Icon layerStyle="menuButtonIcon">
            <path d={mdiChevronDown} />
          </Icon>
        }
      >
        {config.title}
      </Button>
      <Collapse in={isOpen}>
        <Box position={'relative'}>
          <ButtonGroup variant="navigation" orientation="vertical" width={'full'} spacing="1" mt={2} as="ul">
            {config.routes.map((link, i) => (
              <SidebarGroupItem {...link} key={i} />
            ))}
          </ButtonGroup>
        </Box>
      </Collapse>
    </Box>
  );
};
