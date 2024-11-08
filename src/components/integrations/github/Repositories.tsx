import { Alert, AlertDescription, AlertIcon, AlertTitle, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import { Repository } from '@components/cards';
import { GitHubRepo } from '@lib/interfaces/github';

export type RepositoryProps = {
  repositories: GitHubRepo[];
};

const Repositories = ({ repositories }: RepositoryProps) => {
  return (
    <>
      <Heading>Recently updated repositories</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {repositories.length > 0 &&
          repositories.map((repo) => (
            <Repository key={repo.url} name={repo.full_name} description={repo.description} repositoryUrl={repo.html_url} framework={repo.language} forks={repo.forks_count} stars={repo.stargazers_count} topics={repo.topics} />
          ))}
      </SimpleGrid>

      <Alert>
        <AlertIcon />
        <AlertTitle>Looking for more open source projects?</AlertTitle>
        <AlertDescription>
          Look for the <Link href="https://github.com/orgs/Sitecore/repositories">Sitecore organization</Link> on GitHub
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Repositories;
