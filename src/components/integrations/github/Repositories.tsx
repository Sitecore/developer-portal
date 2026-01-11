import { Repository } from "@src/components/cards";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import type { GitHubRepo } from "@src/lib/interfaces/github";
import { Info } from "lucide-react";
import Link from "next/link";

export type RepositoryProps = {
	repositories: GitHubRepo[];
};

const Repositories = ({ repositories }: RepositoryProps) => {
	return (
		<>
			<h2 className="text-xl font-heading mb-6">
				Recently updated repositories
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				{repositories.length > 0 &&
					repositories.map((repo) => (
						<Repository
							key={repo.url}
							name={repo.full_name}
							description={repo.description}
							repositoryUrl={repo.html_url}
							framework={repo.language}
							forks={repo.forks_count}
							stars={repo.stargazers_count}
							topics={repo.topics}
						/>
					))}
			</div>

			<Alert variant="default" className="mt-8">
				<Info className="h-4 w-4" />
				<AlertTitle>More open source projects?</AlertTitle>
				<AlertDescription>
					Look for the{" "}
					<Link
						href="https://github.com/orgs/Sitecore/repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						Sitecore organization
					</Link>{" "}
					on GitHub or search through GitHub using the hashtag{" "}
					<Link
						href="https://github.com/search?q=%23sitecore&type=repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						#sitecore
					</Link>
				</AlertDescription>
			</Alert>
		</>
	);
};

export default Repositories;
