import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Link, Stack } from '@chakra-ui/react';

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
};

const GithubContributionNotice = ({ pageInfo }: GithubContributionNoticeProps) => {
  // Only show this notice on pages that are in the Accelerate area
  if (!pageInfo?.area?.includes('accelerate')) {
    return null;
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