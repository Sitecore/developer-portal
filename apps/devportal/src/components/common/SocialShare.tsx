import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
  className?: string;
};

const SocialShare = ({ className, title, url }: SocialShareProps): JSX.Element => {
  return (
    <div className={`social-share ${className} flex gap-2`}>
      <span className="fill-none opacity-30 transition-opacity duration-150 hover:opacity-100">
        <EmailShareButton url={url} subject={'Share'} body="body">
          <EmailIcon size={32} round />
        </EmailShareButton>
      </span>
      <span className="fill-none opacity-30 transition-opacity duration-150 hover:opacity-100">
        <LinkedinShareButton url={url} title={title} className="mr-2">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </span>
      <span className="fill-none opacity-30 transition-opacity duration-150 hover:opacity-100">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </span>
    </div>
  );
};

export default SocialShare;
