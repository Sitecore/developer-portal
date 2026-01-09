import NextLink from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';
import { SocialButton } from '../links';

export const Footer = () => (
  <footer className="py-8 px-2 flex flex-col-reverse md:flex-row gap-4 w-full bg-muted border-t border-border">
    <div className="flex flex-col md:flex-row w-full justify-between max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <p className="text-sm">© Copyright 2025, Sitecore. All Rights Reserved</p>

        <div className="flex flex-row items-center gap-2 mb-4 md:mb-0">
          <NextLink
            href="https://www.sitecore.com/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-all duration-300 hover:underline"
            title="Opens in new tab"
          >
            Legal
          </NextLink>
          <span className="text-border">|</span>
          <NextLink
            href="https://www.sitecore.com/trust/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-all duration-300 hover:underline"
            title="Opens in new tab"
          >
            Privacy
          </NextLink>
          <span className="text-border">|</span>
          <NextLink
            href="/help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-all duration-300 hover:underline"
            title="Opens in new tab"
          >
            Get Help
          </NextLink>
          <span className="text-border">|</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NextLink
                  href="/llms.txt"
                  className="text-sm font-medium transition-all duration-300 hover:underline"
                  title="Read LLM file"
                >
                  LLM
                </NextLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Integrate Sitecore resources using LLMs</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="flex flex-row gap-6 justify-center">
        <SocialButton label="Twitter" href="https://twitter.com/Sitecore" aria-label="Twitter">
          <FaTwitter />
        </SocialButton>
        <SocialButton label="YouTube" href="https://www.youtube.com/c/DiscoverSitecore" aria-label="YouTube">
          <FaYoutube />
        </SocialButton>
        <SocialButton label="LinkedIn" href="https://www.linkedin.com/company/sitecore/" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialButton>
        <SocialButton label="Facebook" href="https://www.facebook.com/Sitecore" aria-label="facebook">
          <FaFacebook />
        </SocialButton>
        <SocialButton label="Instagram" href="https://www.instagram.com/sitecore" aria-label="instagram">
          <FaInstagram />
        </SocialButton>
        <SocialButton label="LLM" href="/llms.txt" aria-label="LLM">
          <Icon path={mdiStarFourPoints} size={1} />
        </SocialButton>
      </div>
    </div>
  </footer>
);
