import { HStack, Icon, IconButton, Tooltip, useClipboard, useToast } from '@chakra-ui/react';
import { mdiCheck, mdiContentCopy } from '@mdi/js';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
};

const SocialShare = ({ title, url }: SocialShareProps): JSX.Element => {
  const { onCopy, hasCopied } = useClipboard(url);
  const toast = useToast();

  return (
    <HStack>
      <Tooltip label="Share link by email" aria-label="Share link by email">
        <IconButton as={EmailShareButton} url={url} title={title} aria-label="Share by email" icon={<EmailIcon size={32} round />} />
      </Tooltip>
      <Tooltip label="Share link on LinkedIn" aria-label="Share link on LinkedIn">
        <IconButton as={LinkedinShareButton} url={url} title={title} aria-label="Share by email" icon={<LinkedinIcon size={32} round />} />
      </Tooltip>
      <Tooltip label="Share link on Twitter" aria-label="Share link on Twitter">
        <IconButton as={TwitterShareButton} url={url} title={title} aria-label="Share on Twitter" icon={<TwitterIcon size={32} round />} />
      </Tooltip>
      <Tooltip label="Copy link to clipboard" aria-label="Copy link to clipboard">
        <IconButton
          onClick={() => {
            onCopy(), toast({ title: 'Link copied to clipboard', status: 'info', duration: 2000 });
          }}
          aria-label={'Copy'}
          icon={
            hasCopied ? (
              <Icon boxSize={4}>
                <path d={mdiCheck} />
              </Icon>
            ) : (
              <Icon boxSize={4}>
                <path d={mdiContentCopy} />
              </Icon>
            )
          }
          size={'sm'}
        >
          {hasCopied ? 'Copied!' : 'Copy'}
        </IconButton>
      </Tooltip>
    </HStack>
  );
};

export default SocialShare;
