import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { mdiLogout } from '@mdi/js';
// Placeholder for Sitecore icon - replace with actual icon path if needed
const iconSitecore = 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
import Icon from '@mdi/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const SwitchAuthentication = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { redirect = '/', file, page } = router.query;
  const redirectUrl = file != null && page != null ? `/downloads/redirect?file=${file}&redirect=${page}` : (redirect as string);

  if (session?.user == null) {
    return null;
  }
  console.log(redirect);
  return (
    <div className="flex flex-col items-center text-center gap-6 max-w-lg">
      <div className="flex flex-col gap-2 max-w-lg">
        <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0 text-xl">
          Welcome back
        </h2>
      </div>
      <Card className="shadow-lg">
        <CardContent className="py-10 px-4">
          <p>You are currently logged in using {session?.provider == 'okta' ? 'Sitecore ID' : 'Sitecore Cloud Portal'} credentials.</p>
          <div className="flex justify-center mt-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() => signIn(session?.provider == 'sitecore' ? 'okta' : 'sitecore', { callbackUrl: redirectUrl })}
                    className="flex items-center gap-2"
                  >
                    <Icon path={iconSitecore} size={1} className="text-red-500" />
                    Switch to {session?.provider == 'sitecore' ? 'Sitecore ID' : 'Sitecore Cloud Portal'}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign in using your {session?.provider == 'sitecore' ? 'Sitecore ID' : 'Sitecore Cloud Portal'} credentials</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
      <Button
        variant="link"
        onClick={() => signOut({ callbackUrl: '/' })}
        className="flex items-center gap-2"
      >
        <Icon path={mdiLogout} size={1} />
        Logout
      </Button>
    </div>
  );
};
