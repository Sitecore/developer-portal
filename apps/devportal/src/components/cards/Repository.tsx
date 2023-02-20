import { GithubButton } from 'ui/components/buttons/GitHubButton';
import SvgLogo, { Logo } from 'ui/components/common/SvgLogo';

export type RepositoryProps = {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
};

export const Repository = ({ name, description, repositoryUrl, framework }: RepositoryProps) => {
  const frameworkType = framework as Logo;

  return (
    <div className="relative flex flex-col justify-between p-3 bg-white border shadow-md border-theme-border dark:bg-theme-bg-alt">
      <div className="px-5">
        <div className="w-1/3 ml-auto mr-0 opacity-75 ">
          <SvgLogo logo={frameworkType} />
        </div>
        {name && <h4>{name}</h4>}
        {description && <p>{description}</p>}
      </div>
      <GithubButton url={repositoryUrl} text="Repository" className="mb-2 ml-2" />
    </div>
  );
};
