import { Box, Collapse, Flex, Icon, IconButton, Show, useDisclosure } from '@chakra-ui/react';
import { mdiClose, mdiMagnify } from '@mdi/js';
import PreviewSearchInput from '../sitecore-search/PreviewSearchInput';
import SearchInput from '../sitecore-search/SearchInput';

export const SearchButton = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Collapse in={isOpen} animateOpacity={false} style={{ width: '100%' }}>
        {/* Mobile version - below navigation bar */}
        <Show below="md">
          <Flex flex={{ base: 1 }} padding={3} width={'full'} left={0} top={'50px'} pos={'absolute'} background={'chakra-body-bg'} shadow={'md'} zIndex={'999'}>
            {/* <PreviewSearchInput rfkId="rfkid_6" /> */}
            <SearchInput />
          </Flex>
        </Show>

        {/* Desktop version - in navigation bar */}
        {/* <Show above="md">
          <Hide above="lg">
            <Flex flex={{ base: 1 }} padding={3} width={'full'}>
              <SearchInput />
            </Flex>
          </Hide>
        </Show> */}
        {/* Large Desktop - preview search below navigation bar */}
        <Show above="md">
          <Flex flex={{ base: 1 }} padding={3} width={'full'} left={0} top={'50px'} pos={'absolute'} background={'chakra-body-bg'} shadow={'md'} justifyContent={'center'}>
            <Box display={'flex'} width={'full'} maxWidth={'4xl'}>
              <PreviewSearchInput rfkId="rfkid_6" defaultItemsPerPage={6} width={'full'} />
            </Box>
          </Flex>
        </Show>
      </Collapse>
      <IconButton
        onClick={onToggle}
        variant={'ghost'}
        size={'sm'}
        icon={
          !isOpen ? (
            <Icon color="neutral">
              <path d={mdiMagnify} />
            </Icon>
          ) : (
            <Icon color="neutral">
              <path d={mdiClose} />
            </Icon>
          )
        }
        mr={2}
        aria-label="Toggle the search box"
      />
    </>
  );
};
