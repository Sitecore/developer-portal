import { Box, Collapse, HStack, Icon, IconButton, Tooltip, useClipboard, useDisclosure, useToast } from '@chakra-ui/react';
import { mdiCheck, mdiChevronLeft, mdiChevronRight, mdiContentCopy } from '@mdi/js';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';

type SocialShareProps = {
  url: string;
  title: string;
};

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const { onCopy, hasCopied } = useClipboard(url);
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  return (
    <HStack gap={0}>
      <Tooltip label="More sharing methods" aria-label="More sharing methods">
        <IconButton
          variant="ghost"
          aria-label="More sharing methods"
          onClick={onToggle}
          icon={
            <Icon>
              <path d={isOpen ? mdiChevronRight : mdiChevronLeft} />
            </Icon>
          }
          boxSize={8}
          minWidth={4}
          mx={1}
        />
      </Tooltip>

      <Collapse in={isOpen} animateOpacity>
        <HStack hidden={!isOpen} gap={0}>
          <WhatsappShareButton url={url} title={title}>
            <Tooltip label="Share link by Whatsapp" aria-label="Share link by Whatsapp">
              <IconButton variant="ghost" aria-label="Share by Whatsapp" icon={<WhatsappIcon size={32} round />} as={Box} />
            </Tooltip>
          </WhatsappShareButton>
          <TelegramShareButton url={url} title={title}>
            <Tooltip label="Share link by Telegram" aria-label="Share link by Telegram">
              <IconButton variant="ghost" aria-label="Share by Telegram" icon={<TelegramIcon size={32} round />} as={Box} />
            </Tooltip>
          </TelegramShareButton>
          <RedditShareButton url={url} title={title}>
            <Tooltip label="Share link by Reddit" aria-label="Share link by Reddit">
              <IconButton variant="ghost" aria-label="Share by Reddit" icon={<RedditIcon size={32} round />} as={Box} />
            </Tooltip>
          </RedditShareButton>
          <TwitterShareButton url={url} title={title}>
            <Tooltip label="Share link on X" aria-label="Share link on X">
              <IconButton variant={'ghost'} aria-label="Share on X" icon={<TwitterIcon size={32} round />} as={Box} />
            </Tooltip>
          </TwitterShareButton>
        </HStack>
      </Collapse>

      <EmailShareButton url={url} title={title}>
        <Tooltip label="Share link by email" aria-label="Share link by email">
          <IconButton variant={'ghost'} aria-label="Share by email" icon={<EmailIcon size={32} round />} as={Box} />
        </Tooltip>
      </EmailShareButton>

      <LinkedinShareButton url={url} title={title}>
        <Tooltip label="Share link on LinkedIn" aria-label="Share link on LinkedIn">
          <IconButton variant={'ghost'} aria-label="Share by email" icon={<LinkedinIcon size={32} round />} as={Box} />
        </Tooltip>
      </LinkedinShareButton>

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
          as={Box}
        >
          {hasCopied ? 'Copied!' : 'Copy'}
        </IconButton>
      </Tooltip>
    </HStack>
  );
};

export default SocialShare;
