import { HStack, Icon, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Tooltip, useClipboard, useToast } from '@chakra-ui/react';
import { mdiCheck, mdiChevronUp, mdiContentCopy } from '@mdi/js';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
};

const SocialShare = ({ title, url }: SocialShareProps): JSX.Element => {
  const { onCopy, hasCopied } = useClipboard(url);
  const toast = useToast();

  return (
    <HStack gap={1}>
      <Popover placement="top" closeOnBlur closeOnEsc>
        <PopoverTrigger>
          <IconButton
            variant="ghost"
            aria-label="More sharing methods"
            icon={
              <Icon boxSize={5}>
                <path d={mdiChevronUp} />
              </Icon>
            }
            boxSize={8}
            minWidth={4}
            mx={1}
          />
        </PopoverTrigger>

        <PopoverContent style={{ maxWidth: 'unset', width: 'unset' }} shadow={'lg'}>
          <PopoverArrow />
          <PopoverBody p={4}>
            <HStack gap={4}>
              <WhatsappShareButton url={url} title={title}>
                <Tooltip label="Share link by Whatsapp" aria-label="Share link by Whatsapp">
                  <IconButton variant="ghost" aria-label="Share by Whatsapp" icon={<WhatsappIcon size={32} round />} />
                </Tooltip>
              </WhatsappShareButton>
              <TelegramShareButton url={url} title={title}>
                <Tooltip label="Share link by Telegram" aria-label="Share link by Telegram">
                  <IconButton variant="ghost" aria-label="Share by Telegram" icon={<TelegramIcon size={32} round />} />
                </Tooltip>
              </TelegramShareButton>
              <RedditShareButton url={url} title={title}>
                <Tooltip label="Share link by Reddit" aria-label="Share link by Reddit">
                  <IconButton variant="ghost" aria-label="Share by Reddit" icon={<RedditIcon size={32} round />} />
                </Tooltip>
              </RedditShareButton>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <EmailShareButton url={url} title={title}>
        <Tooltip label="Share link by email" aria-label="Share link by email">
          <IconButton variant={'ghost'} aria-label="Share by email" icon={<EmailIcon size={32} round />} />
        </Tooltip>
      </EmailShareButton>

      <LinkedinShareButton url={url} title={title}>
        <Tooltip label="Share link on LinkedIn" aria-label="Share link on LinkedIn">
          <IconButton variant={'ghost'} aria-label="Share by email" icon={<LinkedinIcon size={32} round />} />
        </Tooltip>
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title}>
        <Tooltip label="Share link on Twitter" aria-label="Share link on Twitter">
          <IconButton variant={'ghost'} aria-label="Share on Twitter" icon={<TwitterIcon size={32} round />} />
        </Tooltip>
      </TwitterShareButton>

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
          mx={1}
        >
          {hasCopied ? 'Copied!' : 'Copy'}
        </IconButton>
      </Tooltip>
    </HStack>
  );
};

export default SocialShare;
