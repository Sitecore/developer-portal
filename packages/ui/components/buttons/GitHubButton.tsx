import Link from 'next/link';
import SvgIcon from 'ui/components/common/SvgIcon';

export type GithubButtonProps = {
  url: string;
  text: string;
  className?: string;
};

export const GithubButton = ({ url, text, className = '' }: GithubButtonProps) => (
  <div
    className={`dark:bg-teal dark:hover:bg-teal-dark inline-flex items-center rounded-lg bg-black px-5 py-2 text-center text-sm text-white hover:bg-black/30 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:focus:ring-gray-500 ${className}`}
  >
    <Link href={url} className="text-xs no-underline">
      <SvgIcon
        icon="github"
        width={24}
        height={24}
        className="inline-block w-4 h-4 mr-2 -ml-1 text-white fill-white"
      />
      {text}
    </Link>
  </div>
);
