import Link from 'next/link';
import SvgIcon from './SvgIcon';

export type GithubButtonProps = {
  url: string;
  text: string;
  className?: string;
};

export const GithubButton = ({ url, text, className = '' }: GithubButtonProps) => (
  <div
    className={`text-white bg-black hover:bg-black/30 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:bg-teal dark:hover:bg-teal-dark ${className}`}
  >
    <Link href={url} className="text-xs no-underline">
      <SvgIcon
        icon="github"
        width={24}
        height={24}
        className="w-4 h-4 mr-2 -ml-1 text-white fill-white inline-block"
      />
      {text}
    </Link>
  </div>
);
