'use client';

import { mdiCheck, mdiChevronLeft, mdiChevronRight, mdiContentCopy } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, buttonVariants } from '@src/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@src/components/ui/tooltip';
import { cn } from '@src/lib/util/index';
import { toAbsolutePublicUrl } from '@src/lib/util/urlUtil';
import { EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import { forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { toast } from 'sonner';

/** next-share wraps children in a native `button`; use a span face so we do not nest buttons (invalid HTML / hydration errors). */
const ShareTooltipTriggerFace = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm', colorScheme: 'neutral' }), className)}
      {...props}
    />
  )
);
ShareTooltipTriggerFace.displayName = 'ShareTooltipTriggerFace';

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
          <WhatsappShareButton url={shareUrl} title={title} aria-label="Share by Whatsapp">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ShareTooltipTriggerFace>
                    <WhatsappIcon size={32} round />
                  </ShareTooltipTriggerFace>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Whatsapp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </WhatsappShareButton>
          <TelegramShareButton url={shareUrl} title={title} aria-label="Share by Telegram">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ShareTooltipTriggerFace>
                    <TelegramIcon size={32} round />
                  </ShareTooltipTriggerFace>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Telegram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TelegramShareButton>
          <RedditShareButton url={shareUrl} title={title} aria-label="Share by Reddit">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ShareTooltipTriggerFace>
                    <RedditIcon size={32} round />
                  </ShareTooltipTriggerFace>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link by Reddit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </RedditShareButton>
          <TwitterShareButton url={shareUrl} title={title} aria-label="Share on X">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ShareTooltipTriggerFace>
                    <TwitterIcon size={32} round />
                  </ShareTooltipTriggerFace>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link on X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TwitterShareButton>
        </div>
      )}

      <EmailShareButton url={shareUrl} title={title} aria-label="Share by email">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ShareTooltipTriggerFace>
                <EmailIcon size={32} round />
              </ShareTooltipTriggerFace>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share link by email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </EmailShareButton>

      <LinkedinShareButton url={shareUrl} title={title} aria-label="Share on LinkedIn">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ShareTooltipTriggerFace>
                <LinkedinIcon size={32} round />
              </ShareTooltipTriggerFace>
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
