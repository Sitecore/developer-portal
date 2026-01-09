import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
// Placeholder for Sitecore icon - replace with actual icon path if needed
const iconSitecore = 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
import { signIn } from 'next-auth/react';
import Icon from '@mdi/react';
import { cn } from '@lib/utils';

interface LoginProps {
  redirectUrl?: string;
}

export const Login = ({ redirectUrl = '/' }: LoginProps) => {
  const isRoadmapRedirect = redirectUrl.startsWith('/roadmap');
  const isDownloadsRedirect = redirectUrl.startsWith('/downloads');

  return (
    <div className="flex flex-col items-center text-center gap-6 max-w-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-heading">Login</h1>
      </div>
      <div className="flex flex-col gap-2 max-w-lg">
        {!isDownloadsRedirect && !isRoadmapRedirect && (
          <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0 text-xl">
            Choose your preferred sign-in method
          </h2>
        )}
      </div>
      <Card className="shadow-lg">
        <CardContent className="py-10 px-4">
          {!isRoadmapRedirect && (
            <>
              <p className="text-sm mb-8">
                To access the downloads, please sign in using your Sitecore ID
              </p>
              <div className="flex justify-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => signIn('okta', { callbackUrl: redirectUrl })}
                        className="flex items-center gap-2"
                      >
                        <Icon path={iconSitecore} size={1} className="text-red-500" />
                        Sitecore ID
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Sign in using your Sitecore ID to get access to the downloads</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </>
          )}
          {!isRoadmapRedirect && !isDownloadsRedirect && (
            <>
              <div className="relative py-10 px-4">
                <div className="border-t border-border" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-background px-4 text-muted-foreground">OR</span>
                </div>
              </div>
            </>
          )}

          {!isDownloadsRedirect && (
            <>
              <p className="text-sm mb-8">
                To access the roadmap, please sign in using your Sitecore Cloud Portal account
              </p>
              <div className="flex justify-center items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => signIn('sitecore', { callbackUrl: redirectUrl })}
                        className="flex items-center gap-2"
                      >
                        <Icon path={iconSitecore} size={1} className="text-red-500" />
                        Sitecore Cloud Portal
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Sign in using your Sitecore ID to get access to the roadmap</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
