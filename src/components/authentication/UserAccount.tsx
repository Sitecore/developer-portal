import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { mdiAccountCircleOutline, mdiLogin, mdiLogout } from '@mdi/js';
// Placeholder for Sitecore icon - replace with actual icon path if needed
const iconSitecore = 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
import Icon from '@mdi/react';

const UserAccount: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const loginUrl = router.asPath != '/' ? '/login?destination=' + encodeURIComponent(router.asPath) : '/login';

  if (!session?.user) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link href={loginUrl} aria-label="Login">
          <Icon path={mdiLogin} size={1} />
        </Link>
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session.user.image || ''} alt={session.user.name || ''} />
              <AvatarFallback>
                {session.user.name?.charAt(0).toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <div className="px-3.5 py-2">
            <div className="flex items-center gap-2 mb-2">
              <Icon path={iconSitecore} size={1} className="text-red-500" />
              <span className="font-semibold">{session.provider == 'okta' ? 'Sitecore ID' : 'Cloud Portal'}</span>
            </div>
            <div className="border-t border-border my-2 mx-3.5" />
            <p className="font-semibold">{session.user.name}</p>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => router.push('/login')}>
            <Icon path={mdiAccountCircleOutline} size={1} className="mr-2" />
            Switch account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            <Icon path={mdiLogout} size={1} className="mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAccount;
