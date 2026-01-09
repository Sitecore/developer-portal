import Link from 'next/link';
import { Button } from '@components/ui/button';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { getItemUrl } from '@/src/lib/manifestHelper';
import { cn } from '@lib/utils';

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
    <div className="flex justify-around items-center border border-border h-20">
      {previousItem != null && (
        <Button variant="ghost" asChild>
          <Link href={getItemUrl(config, previousItem)} className="flex items-center gap-2">
            <Icon path={mdiArrowLeft} size={1} />
            {previousItem?.title}
          </Link>
        </Button>
      )}
      {nextItem != null && (
        <Button variant="ghost" asChild className={cn(!nextItem && 'hidden')}>
          <Link href={getItemUrl(config, nextItem)} className="flex items-center gap-2">
            {nextItem.title}
            <Icon path={mdiArrowRight} size={1} />
          </Link>
        </Button>
      )}
    </div>
  );
};
