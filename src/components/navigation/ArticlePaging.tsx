import { PageInfo, SidebarNavigationConfig } from '@/src/lib/interfaces/page-info';
import { getItemUrl } from '@/src/lib/sidebarNav';
import { Button, HStack, Icon, Link } from '@chakra-ui/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import useSidebarNav from '../hooks/useSidebarNav';

export interface ArticlePagingProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: SidebarNavigationConfig;
}

export const ArticlePaging = ({ config, currentPage, enabled = false }: ArticlePagingProps) => {
  const { previousItem, nextItem } = useSidebarNav(currentPage, config);

  if (!enabled) return null;

  return (
    <HStack justifyContent={'space-around'}>
      {previousItem != null && (
        <Button
          variant="ghostColorOnHover"
          leftIcon={
            <Icon>
              <path d={mdiArrowLeft} />
            </Icon>
          }
        >
          <Link href={getItemUrl(config, previousItem)}>{previousItem?.title}</Link>
        </Button>
      )}
      {nextItem != null && (
        <Button
          hidden={!nextItem}
          variant="ghostColorOnHover"
          rightIcon={
            <Icon>
              <path d={mdiArrowRight} />
            </Icon>
          }
        >
          <Link href={getItemUrl(config, nextItem)}>{nextItem.title}</Link>
        </Button>
      )}
    </HStack>
  );
};
