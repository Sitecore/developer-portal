import { Button, ButtonProps } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

type ButtonLinkProps = ButtonProps & {
  href: string;
  text: string;
  showIcon?: boolean;
  icon?: JSX.Element;
  // color?: string;
};

export const ButtonLink = ({ href, text, showIcon, icon, ...rest }: ButtonLinkProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} />;

  return (
    <Button as={NextLink} href={href} variant={'link'} rightIcon={showIcon != false ? ButtonIcon : undefined} size={rest.size ? rest.size : 'sm'} {...rest} whiteSpace={'normal'}>
      {text}
    </Button>
  );
};
