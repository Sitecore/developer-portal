import { usePageContext } from '@/src/context/DeveloperPortalContext';
import useSidebarNav from '@/src/hooks/useSidebarNav';
import { getItemUrl } from '@/src/lib/sidebarNav';
import { CardProps, Link, List, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type ChildPagesListProps = CardProps & {};

export const ChildPagesList = ({ ...rest }: ChildPagesListProps) => {
  const { context } = usePageContext();
  const router = useRouter();
  if (context) {
    const { children } = useSidebarNav(context.pageInfo.fileName, context.navigation, router.asPath);

    return (
      <List>
        {children?.map((child, i) => (
          <ListItem key={i}>
            <Link href={getItemUrl(context.navigation, child)}>{child.title}</Link>
          </ListItem>
        ))}
      </List>
    );
  }
};
