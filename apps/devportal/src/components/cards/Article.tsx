import TextLink from 'ui/components/common/TextLink';

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
};
export const Article = ({ title, description, link, linktext }: ArticleProps) => {
  return (
    <div className="article">
      <h4>{title}</h4>
      <p>{description}</p>
      {link && <TextLink text={linktext ? linktext : 'Read more'} href={link} />}
    </div>
  );
};
