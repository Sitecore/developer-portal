import TextLink from '../common/TextLink';

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
};
export const Article = ({ title, description, link, linktext }: ArticleProps) => {
  return (
    <div
      className="flex flex-col border border-theme-border dark:bg-theme-bg-alt dark:bg-gray-800 dark:border-gray-700 p-3 shadow-sm
    transition duration-300 transform hover:shadow-md hover:accent-theme-bg-alt"
    >
      <h4>{title}</h4>
      <p>{description}</p>
      {link && <TextLink text={linktext ? linktext : 'Read more'} href={link} />}
    </div>
  );
};
