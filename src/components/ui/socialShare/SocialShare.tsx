'use client';

import { mdiCheck, mdiChevronLeft, mdiChevronRight, mdiContentCopy } from '@mdi/js';
import Icon from '@mdi/react';
import { Button } from '@src/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@src/components/ui/tooltip';
import { toAbsolutePublicUrl } from '@src/lib/util/urlUtil';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function useShareAbsoluteUrl(url: string): string {
  const [shareUrl, setShareUrl] = useState(() => toAbsolutePublicUrl(url));

  useEffect(() => {
    const fromEnv = toAbsolutePublicUrl(url);
    if (/^https?:\/\//i.test(fromEnv)) {
      setShareUrl(fromEnv);
      return;
    }
    try {
      setShareUrl(new URL(url, window.location.origin).href);
    } catch {
      setShareUrl(fromEnv);
    }
  }, [url]);

  return shareUrl;
}

type SocialShareProps = {
  url: string;
  title: string;
};

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const shareUrl = useShareAbsoluteUrl(url);
  const [hasCopied, setHasCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
    toast('Link copied to clipboard');
  };

  return (
    <div className="flex items-center gap-0">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" aria-label="More sharing methods" onClick={() => setIsOpen(!isOpen)} size="icon-sm" className="mx-1">
              <Icon path={isOpen ? mdiChevronRight : mdiChevronLeft} size={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>More sharing methods</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isOpen && (
        <div className="flex items-center gap-0">
          <WhatsappShareButton url={shareUrl} title={title}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" aria-label="Share by Whatsapp" size="icon-sm">
                    <WhatsappIcon size={32} round />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Whatsapp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl} title={title}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" aria-label="Share by Telegram" size="icon-sm">
                    <TelegramIcon size={32} round />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Telegram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TelegramShareButton>
          <RedditShareButton url={shareUrl} title={title}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" aria-label="Share by Reddit" size="icon-sm">
                    <RedditIcon size={32} round />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Reddit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </RedditShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" aria-label="Share on X" size="icon-sm">
                    <TwitterIcon size={32} round />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link on X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TwitterShareButton>
        </div>
      )}

      <EmailShareButton url={shareUrl} title={title}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" aria-label="Share by email" size="icon-sm">
                <EmailIcon size={32} round />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share link by email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </EmailShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" aria-label="Share on LinkedIn" size="icon-sm">
                <LinkedinIcon size={32} round />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share link on LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </LinkedinShareButton>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onCopy} aria-label="Copy" variant="ghost" size="icon-sm">
              {hasCopied ? <Icon path={mdiCheck} size={0.8} /> : <Icon path={mdiContentCopy} size={0.8} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy link to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialShare;
