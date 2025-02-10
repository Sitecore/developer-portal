import { PageInfo, SidebarNavigationConfig } from '@/src/lib/interfaces/page-info';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Link, List, ListItem, Stack, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Feedback from './Feedback';

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
  config: SidebarNavigationConfig;
};

const GithubContributionNotice = ({ pageInfo, config }: GithubContributionNoticeProps) => {
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const URL = `https://developers.sitecore.com${asPath.split('#')[0]}`;
  const fileName = pageInfo.fileName.replace('https://github.com/sitecore/developer-portal/edit/main/data/', '');
  const issueLink = `https://github.com/sitecore/developer-portal/issues/new?title=&body=%0A%0A%5BEnter%20feedback%20here%5D%0A%0A%0A---%0A%23%23%23%23%20Document%20Details%0A%0A%E2%9A%A0%20*Do%20not%20edit%20this%20section.%20It%20is%20required%20for%20developer.sitecore.com%20%E2%9E%9F%20GitHub%20issue%20linking.*%0A%0A*%20Page%3A%20%5B${pageInfo.title}%5D(${URL})%0A*%20Source%3A%20%5B${fileName}%5D(${pageInfo.fileName})`;

  if (!pageInfo?.area?.includes('accelerate')) {
    return (
      <Stack direction={'row'} justifyContent={'flex-end'}>
        <Link href={pageInfo.fileName}>
          <Text fontWeight={'medium'} fontSize={'xs'} color={'chakra-subtle-text'}>
            Edit this page on GitHub
          </Text>
        </Link>
        <Tooltip label="Report an issue or provide feedback">
          <Link href={issueLink}>
            <Text fontWeight={'medium'} fontSize={'xs'} color={'chakra-subtle-text'}>
              Feedback
            </Text>
          </Link>
        </Tooltip>
      </Stack>
    );
  }

  return (
    <>
      <Alert>
        <AlertIcon />
        <Stack align={'flex-start'}>
          <AlertTitle>Have feedback or a recipe suggestion?</AlertTitle>
          <AlertDescription>
            <List>
              <ListItem>
                If you have a recipe suggestion to share, please <Link href="/contribute">create a pull request</Link> on the Github repository
              </ListItem>
              <ListItem>
                For questions or feedback, please <Link href={issueLink}>create</Link> an GitHub issue or use the <Feedback variant={'link'} projectId="RCPS" issueTypeId="3" product={config?.productFeedbackLabel || ''} /> form.
              </ListItem>
            </List>
          </AlertDescription>
        </Stack>
      </Alert>
    </>
  );
};

export default GithubContributionNotice;
