import { Button, ButtonProps, Link } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import { JSX } from 'react';

type LinkButtonProps = ButtonProps & {
  href: string;
  text: string;
  showIcon?: boolean;
  icon?: JSX.Element;
  variant?: string;
  colorScheme?: string;
  color?: string;
};

export const LinkButton = ({ href, text, showIcon, variant, colorScheme, color = 'chakra-body-text', icon, ...rest }: LinkButtonProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} />;

  return (
    <Link as={NextLink} href={href} color={color}>
      <Button variant={variant} colorScheme={colorScheme} rightIcon={showIcon != false ? ButtonIcon : undefined} size={rest.size ? rest.size : 'md'} {...rest} whiteSpace={'normal'}>
        {text}
      </Button>
    </Link>
  );
};
