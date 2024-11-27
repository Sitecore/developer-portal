import { useUser } from '@auth0/nextjs-auth0/client';

export type HideForUsersProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const HideForUsers = (props: HideForUsersProps) => {
  const user = useUser();

  if (user.user) {
    return;
  }

  return props.children;
};
