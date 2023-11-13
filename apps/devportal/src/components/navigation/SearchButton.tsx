import { Icon, IconButton, Link } from '@chakra-ui/react';
import { mdiMagnify } from '@mdi/js';

export const SearchButton = () => {
  return (
    <IconButton
      as={Link}
      variant={'ghost'}
      size={'sm'}
      icon={
        <Icon color="neutral">
          <path d={mdiMagnify} />
        </Icon>
      }
      aria-label="Go to the search page"
      href="/search"
    />
  );
};
