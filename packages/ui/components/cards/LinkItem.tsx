import Button from '../buttons/Button';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};
export const LinkItem = ({ title, link, className = 'bg-violet-lightest' }: LinkProps) => {
  return (
    <div className={`text-link  ${className}`}>
      <Button variant="text" text={title} href={link} icon={true} className="no-underline"></Button>
    </div>
  );
};
