import Link from 'next/link';
import SvgIcon from 'ui/components/common/SvgIcon';

export type GithubButtonProps = {
  url: string;
  text: string;
  className?: string;
};

export const GithubButton = ({ url, text, className = '' }: GithubButtonProps) => (
  <div className={`btn-secondary-invert ${className}`}>
    <Link href={url} className="block w-full text-xs no-underline">
      <SvgIcon icon="github" width={24} height={24} className=" mr-2 ml-1 inline-block h-5 w-5 fill-white" />
      {text}
    </Link>
  </div>
);
