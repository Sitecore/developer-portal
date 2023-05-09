import TextLink from 'ui/components/common/TextLink';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};
export const LinkItem = ({ title, link, className = 'bg-violet-lightest' }: LinkProps) => {
  return (
    <div className={`text-link  ${className}`}>
      <TextLink text={title} href={link}></TextLink>
    </div>
  );
};
