import { GithubButton } from 'ui/components/buttons/GitHubButton';
import SvgLogo, { isValidLogo, Logo } from 'ui/components/common/SvgLogo';

export type RepositoryProps = {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
};

export const Repository = ({ name, description, repositoryUrl, framework }: RepositoryProps) => {
  const frameworks = framework.split('|');
  const frameworkLogos: string[] = [];

  frameworks.forEach((logo) => {
    if (isValidLogo(logo)) frameworkLogos.push(logo);
  });

  return (
    <div className="border-theme-border dark:bg-theme-bg-alt relative flex flex-col justify-between border bg-white p-3 shadow-md">
      <div className="px-5">
        <div className="ml-auto mr-0 flex flex-row justify-end opacity-75 ">
          {frameworks &&
            frameworkLogos.map((framework, index) => {
              return <SvgLogo logo={framework as Logo} className={`ml-4 h-6`} key={index} />;
            })}
        </div>
        {name && <h4>{name}</h4>}
        {description && <p>{description}</p>}
      </div>
      <GithubButton url={repositoryUrl} text="Repository" className="mb-2 ml-2" />
    </div>
  );
};
