import { Alert, AlertDescription, AlertIcon, AlertTitle, Heading, Link, SimpleGrid, Wrap } from '@chakra-ui/react';
import { Repository } from '@components/cards';
import { GitHubRepo } from '@lib/interfaces/github';

export type RepositoryProps = {
  repositories: GitHubRepo[];
};

const Repositories = ({ repositories }: RepositoryProps) => {
  return (
    <>
      <Heading size="lg">Recently updated repositories</Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
        {repositories.length > 0 &&
          repositories.map((repo) => (
            <Repository key={repo.url} name={repo.full_name} description={repo.description} repositoryUrl={repo.html_url} framework={repo.language} forks={repo.forks_count} stars={repo.stargazers_count} topics={repo.topics} />
          ))}
      </SimpleGrid>

      <Alert>
        <AlertIcon />
        <Wrap w="100%">
          <AlertTitle w="full">More open source projects?</AlertTitle>
          <AlertDescription>
            Look for the <Link href="https://github.com/orgs/Sitecore/repositories">Sitecore organization</Link> on GitHub or search through GitHub using the hashtag{' '}
            <Link href="https://github.com/search?q=%23sitecore&type=repositories">#sitecore</Link>
          </AlertDescription>
        </Wrap>
      </Alert>
    </>
  );
};

export default Repositories;
