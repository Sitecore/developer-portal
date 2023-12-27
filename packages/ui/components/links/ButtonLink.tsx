import { Button, ButtonProps } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

type ButtonLinkProps = ButtonProps & {
  href: string;
  text: string;
  showIcon?: boolean;
  icon?: JSX.Element;
  variant?: string;
  colorScheme?: string;
  // color?: string;
};

export const ButtonLink = ({ href, text, showIcon, variant, colorScheme, icon, ...rest }: ButtonLinkProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} />;

  return (
    <Button as={NextLink} href={href} variant={variant} colorScheme={colorScheme} rightIcon={showIcon != false ? ButtonIcon : undefined} size={rest.size ? rest.size : 'md'} {...rest} whiteSpace={'normal'}>
      {text}
    </Button>
  );
};
