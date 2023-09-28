import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

type ButtonLinkProps = ButtonProps & {
  href: string;
  text: string;
  showIcon?: boolean;
  iconColor?: string;
  icon?: JSX.Element;
  color?: string;
};

export const ButtonLink = ({ href, text, showIcon, iconColor, icon, color, ...rest }: ButtonLinkProps) => {
  const ButtonIcon = icon != null ? icon : <Icon path={mdiArrowRight} size={0.8} color={iconColor} />;

  return (
    <Button
      as={NextLink}
      href={href}
      variant={'link'}
      rightIcon={showIcon != false ? ButtonIcon : undefined}
      size={rest.size ? rest.size : 'sm'}
      {...rest}
      color={color != null ? useColorModeValue(color ? color : 'inherit', 'white !important') : undefined}
      whiteSpace={'normal'}
    >
      {text}
    </Button>
  );
};
