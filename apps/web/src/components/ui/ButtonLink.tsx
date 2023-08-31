import { Button, ButtonProps, Link, useColorModeValue } from '@chakra-ui/react';
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

export const ButtonLink = (props: ButtonLinkProps) => {
  const ButtonIcon = props.icon != null ? props.icon : <Icon path={mdiArrowRight} size={0.8} color={props.iconColor} />;

  return (
    <Button variant={'link'} rightIcon={props.showIcon != false ? ButtonIcon : null} size={props.size ? props.size : 'sm'} {...props} color={props.color != null ? useColorModeValue('primary.500', 'white !important') : null}>
      <Link as={NextLink} href={props.href} color={props.color != null ? useColorModeValue(props.color ? props.color : 'black', 'white !important') : null} whiteSpace={'normal'}>
        {props.text}
      </Link>
    </Button>
  );
};
