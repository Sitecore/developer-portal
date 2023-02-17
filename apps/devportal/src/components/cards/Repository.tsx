import { GithubButton } from '../common/GitHubButton';
import SvgLogo, { Logo } from '../common/SvgLogo';

export type RepositoryProps = {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
};

export const Repository = ({ name, description, repositoryUrl, framework }: RepositoryProps) => {
  const frameworkType = framework as Logo;

  return (
    <div className="repository">
      <div className="px-5">
        <div className="w-1/3 ml-auto mr-0 opacity-75	">
          <SvgLogo logo={frameworkType} />
        </div>
        {name && <h4>{name}</h4>}
        {description && <p>{description}</p>}
      </div>
      <GithubButton url={repositoryUrl} text="Repository" className="ml-2 mb-2" />
    </div>
  );
};
