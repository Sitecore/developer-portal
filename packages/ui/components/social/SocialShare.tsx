import { HStack, IconButton } from '@chakra-ui/react';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
};

const SocialShare = ({ title, url }: SocialShareProps): JSX.Element => {
  return (
    <HStack>
      <IconButton as={EmailShareButton} url={url} title={title} aria-label="Share by email" icon={<EmailIcon size={32} round />} />
      <IconButton as={LinkedinShareButton} url={url} title={title} aria-label="Share by email" icon={<LinkedinIcon size={32} round />} />
      <IconButton as={TwitterShareButton} url={url} title={title} aria-label="Share on Twitter" icon={<TwitterIcon size={32} round />} />
    </HStack>
  );
};

export default SocialShare;
