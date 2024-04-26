import { Box, Button, ButtonGroup, Heading, Highlight, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { mdiClose, mdiFilterVariant } from '@mdi/js';
import NextLink from 'next/link';
import React from 'react';
import { appendPathToBasePath } from '../../../../../packages/ui/src/lib/utils/stringUtil';
import { SidebarNavigationConfig } from '../../lib/interfaces/page-info';

export interface SidebarNavigationProps {
  title?: string;
  config: SidebarNavigationConfig;
  onFocus: () => void;
  onBlur: () => void;
}

const SidebarSearch = ({ config, onFocus, onBlur }: SidebarNavigationProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') return reset();

    setSearchTerm(event.target.value);
    onFocus();
  };

  const reset = () => {
    setSearchTerm('');
    onBlur();
  };

  const searchRoutes = (searchTerm: string) => {
    return config.routes
      .map((route) => ({
        ...route,
        children: route.children.filter((child) => child.title.toLowerCase().includes(searchTerm.toLowerCase())),
      }))
      .filter((route) => route.title.toLowerCase().includes(searchTerm.toLowerCase()) || route.children.length > 0);
  };

  const filteredRoutes = searchRoutes(searchTerm);

  return (
    <>
      <Box mt={4}>
        <InputGroup maxW="full">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon>
                <path d={mdiFilterVariant} />
              </Icon>
            }
          />
          <Input placeholder="Filter" onChange={handleSearch} value={searchTerm} />
          <InputRightElement>
            <IconButton
              onClick={reset}
              variant="ghost"
              icon={
                <Icon>
                  <path d={mdiClose} />
                </Icon>
              }
              size="sm"
              aria-label={'Close'}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box>
        {filteredRoutes.length == 0 && (
          <Heading variant="section" p="2">
            No results found
          </Heading>
        )}

        {filteredRoutes.map((link, i) => (
          <Box key={i} hidden={filteredRoutes.length == 0 || searchTerm == ''} mt={6}>
            {filteredRoutes.length == 0 && <Heading variant="section">No results found</Heading>}

            <Heading variant="section" mb="4">
              {link.title}
            </Heading>
            {link.children.map((child, j) => (
              <Box key={j}>
                <ButtonGroup variant="navigation" orientation="vertical" spacing="1" width={'full'} key={i}>
                  <Button as={NextLink} colorScheme="neutral" href={appendPathToBasePath(config.path, child.path)} px={2} width={'full'} display={'inline-block'} alignContent={'center'}>
                    <Highlight styles={{ px: '0', py: '0.5', bg: 'orange.100' }} query={searchTerm}>
                      {child.title}
                    </Highlight>
                  </Button>
                </ButtonGroup>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SidebarSearch;
