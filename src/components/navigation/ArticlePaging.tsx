import { Button, HStack, Icon, Link } from '@chakra-ui/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { getItemUrl } from '@/src/lib/manifestHelper';

export interface ArticlePagingProps {
  enabled?: boolean;
  currentfileName: string;
  config: ManifestConfig;
  currentPath: string;
}

export const ArticlePaging = ({ config, currentfileName, enabled = false, currentPath }: ArticlePagingProps) => {
  const { previousItem, nextItem } = useManifestRoutes(config, currentPath);

  if (!enabled) {
    return null;
  }

  return (
    <HStack justifyContent={'space-around'} border={'1px solid'} borderColor={'chakra-border-color'} height={20}>
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
