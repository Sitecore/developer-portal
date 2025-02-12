import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Heading, HStack, Icon, Stack, StackDivider, StackProps, Tag, Wrap } from '@chakra-ui/react';
import { mdiAccountMultipleOutline, mdiCalendarOutline, mdiFinance, mdiTagOutline } from '@mdi/js';
import { iconSitecore } from '@sitecore/blok-theme';
import { JSX } from 'react';

type AccelerateMetaDataProps = StackProps & {
  pageInfo: PageInfo;
};

export const AccelerateMetaData = ({ pageInfo, ...rest }: AccelerateMetaDataProps) => {
  if (!pageInfo.features && !pageInfo.audience && !pageInfo.topics && !pageInfo.level && !pageInfo.lastUpdated) {
    return;
  }

  return (
    <Stack divider={<StackDivider />} spacing="4" {...rest}>
      {pageInfo.features && (
        <MetaDataField
          field={pageInfo.features}
          label="Features"
          icon={
            <Icon>
              <path d={iconSitecore} />
            </Icon>
          }
        />
      )}
      {pageInfo.audience && (
        <MetaDataField
          field={pageInfo.audience}
          label="Audience"
          icon={
            <Icon>
              <path d={mdiAccountMultipleOutline} />
            </Icon>
          }
        />
      )}
      {pageInfo.topics && (
        <MetaDataField
          field={pageInfo.topics}
          label="Topics"
          icon={
            <Icon>
              <path d={mdiTagOutline} />
            </Icon>
          }
        />
      )}
      {pageInfo.level && (
        <MetaDataField
          field={pageInfo.level}
          label="Level"
          icon={
            <Icon>
              <path d={mdiFinance} />
            </Icon>
          }
        />
      )}
      {pageInfo.lastUpdated && (
        <MetaDataField
          field={new Date(pageInfo.lastUpdated).toLocaleString('en-US', { dateStyle: 'medium' })}
          label="Last Updated"
          icon={
            <Icon>
              <path d={mdiCalendarOutline} />
            </Icon>
          }
        />
      )}
    </Stack>
  );
};

type MetaDataFieldProps = {
  label: string;
  field?: string | string[] | undefined;
  icon?: JSX.Element;
};

const MetaDataField = ({ label, field, icon }: MetaDataFieldProps) => {
  const values = Array.isArray(field) ? field : [field];

  return (
    <HStack alignItems={'flex-start'}>
      <HStack width={'60%'}>
        {icon}
        <Heading variant={'section'}>{label}</Heading>
      </HStack>
      <Wrap w="full">
        {values?.map((audience, i) => (
          <Tag colorScheme="primary" variant="subtle" key={i}>
            {audience}
          </Tag>
        ))}
      </Wrap>
    </HStack>
  );
};
