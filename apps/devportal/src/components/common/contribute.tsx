import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
};

const GithubContributionNotice = ({ pageInfo }: GithubContributionNoticeProps) => {
  const { asPath } = useRouter();

  const URL = `https://developers.sitecore.com${asPath.split('#')[0]}`;
  const fileName = pageInfo.fileName.replace('https://github.com/sitecore/developer-portal/edit/main/apps/devportal/data/', '');
  const issueLink = `https://github.com/sitecore/developer-portal/issues/new?title=&body=%0A%0A%5BEnter%20feedback%20here%5D%0A%0A%0A---%0A%23%23%23%23%20Document%20Details%0A%0A%E2%9A%A0%20*Do%20not%20edit%20this%20section.%20It%20is%20required%20for%20developer.sitecore.com.com%20%E2%9E%9F%20GitHub%20issue%20linking.*%0A%0A*%20Page%3A%20%5B${pageInfo.title}%5D(${URL})%0A*%20Source%3A%20%5B${fileName}%5D(${pageInfo.fileName})`;

  // Only show this notice on pages that are in the Accelerate area
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
    <Alert>
      <AlertIcon />
      <Stack align={'flex-start'}>
        <AlertTitle>Have a recipe suggestion?</AlertTitle>
        <AlertDescription>If you have a recipe suggestion to share, please create a pull request on the Github repository. If you have a question or feedback, please submit an issue.</AlertDescription>
        <Button variant="link">
          <Link href="/contribute">Click here for instructions on how to contribute.</Link>
        </Button>
      </Stack>
    </Alert>
  );
};

export default GithubContributionNotice;