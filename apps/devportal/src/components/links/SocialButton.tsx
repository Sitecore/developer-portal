import { ButtonProps, IconButton, Link, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import { JSXElementConstructor, ReactElement } from 'react';

type SocialButtonProps = ButtonProps & {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  label: string;
  href: string;
};

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <Tooltip label={label}>
      <Link as={NextLink} href={href}>
        <IconButton icon={children} colorScheme="gray" variant={'outline'} aria-label={label} />
      </Link>
    </Tooltip>
  );
};
