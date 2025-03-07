import { Card, CardBody, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import { mdiArrowLeft, mdiArrowRight, mdiCheckCircleOutline } from '@mdi/js';
import { LinkButton } from '@src/components/links';

import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { getItemUrl } from '@/src/lib/manifestHelper';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';

export interface ArticlePagingProps {
  enabled?: boolean;
  currentFileName: string;
  config: ManifestConfig;
  currentPath: string;
}

export const ArticlePagingNext = ({ config, currentFileName, enabled = false, currentPath }: ArticlePagingProps) => {
  const { previousItem, nextItem } = useManifestRoutes(config, currentPath);

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
              <LinkButton
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
              <LinkButton
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
