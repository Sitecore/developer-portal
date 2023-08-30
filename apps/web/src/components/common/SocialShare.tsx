import { HStack } from '@chakra-ui/react';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
};

const SocialShare = ({ title, url }: SocialShareProps): JSX.Element => {
  return (
    <HStack>
      <EmailShareButton url={url} subject={'Share'} body="body">
        <EmailIcon size={32} round />
      </EmailShareButton>

      <LinkedinShareButton url={url} title={title} className="mr-2">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </HStack>
  );
};

export default SocialShare;
