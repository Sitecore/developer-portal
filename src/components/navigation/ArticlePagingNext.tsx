import { Card, CardBody, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import { mdiArrowLeft, mdiArrowRight, mdiCheckCircleOutline } from '@mdi/js';
import { ButtonLink } from '@src/components/links';

import { PageInfo, SidebarNavigationConfig } from '@/src/lib/interfaces/page-info';
import { getItemUrl } from '@/src/lib/sidebarNav';

import useSidebarNav from '../../hooks/useSidebarNav';

export interface ArticlePagingProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: SidebarNavigationConfig;
}

export const ArticlePagingNext = ({ config, currentPage, enabled = false }: ArticlePagingProps) => {
  const { previousItem, nextItem } = useSidebarNav(currentPage, config);

  if (!enabled) {
    return null;
  }

  return (
    <HStack justifyContent={'space-around'}>
      {/* {previousItem != null && (
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
      )} */}

      <Card variant="outlineRaised" size="sm" textAlign={'center'} py={10} px={20}>
        <CardBody gap={10}>
          {nextItem != null && (
            <Stack>
              <Heading variant="section">Next step:</Heading>
              <ButtonLink
                hidden={!nextItem}
                variant="solid"
                rightIcon={
                  <Icon>
                    <path d={mdiArrowRight} />
                  </Icon>
                }
                href={getItemUrl(config, nextItem)}
                text={nextItem.title}
              />
            </Stack>
          )}
          {nextItem == null && (
            <>
              <Icon color="success" boxSize="icon.3xl">
                <path d={mdiCheckCircleOutline} />
              </Icon>
              <Heading variant="section">You have completed this tutorial!</Heading>
            </>
          )}
          {previousItem != null && (
            <Stack mt={10}>
              <Heading variant="section">go back to:</Heading>
              <ButtonLink
                variant="outline"
                href={getItemUrl(config, previousItem)}
                text={previousItem.title}
                leftIcon={
                  <Icon>
                    <path d={mdiArrowLeft} />
                  </Icon>
                }
                rightIcon={undefined}
              />
            </Stack>
          )}
        </CardBody>
      </Card>
    </HStack>
  );
};
