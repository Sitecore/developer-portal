import TextLink from '../common/TextLink';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};
export const LinkItem = ({ title, link, className = 'bg-violet-lightest' }: LinkProps) => {
  return (
    <div
      className={`flex flex-col border border-theme-border dark:bg-theme-bg-alt dark:bg-gray-800 dark:border-gray-700 shadow-sm
    transition duration-300 transform hover:shadow-md hover:accent-theme-bg-alt text-center  not-prose p-4 ${className}`}
    >
      <TextLink text={title} href={link}></TextLink>
    </div>
  );
};
