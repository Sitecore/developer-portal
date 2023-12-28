import { PageInfo } from '@/src/lib/interfaces/page-info';
import { Card, CardBody, Heading, Link, Text } from '@chakra-ui/react';

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
};

const GithubContributionNotice = ({ pageInfo }: GithubContributionNoticeProps) => {
  
  console.log(pageInfo);

  if (pageInfo?.area?.findIndex(a => a.toLocaleLowerCase() === 'accelerate')) {
    return null;
  }

  return (
    <Card>
      <CardBody>
        <Heading as="h2"  mb="4" size='md'>Have a recipe suggestion?</Heading>
        <Text>
          If you have a recipe suggestion to share, please create a pull request on the Github repository. If you have a question or feedback, please submit an issue.<br /><br />
          <Link href="/contribute">
            Click here for instructions on how to contribute.
          </Link>
        </Text>
      </CardBody>
    </Card>
  );

};

export default GithubContributionNotice;