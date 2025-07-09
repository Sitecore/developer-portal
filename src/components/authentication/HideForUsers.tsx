import { useSession } from 'next-auth/react';

export type HideForUsersProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const HideForUsers = (props: HideForUsersProps) => {
  const { data: session } = useSession();

  if (session?.user) {
    return;
  }

  return props.children;
};
