import { Button, CardProps, Link, useColorModeValue } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

type GuidedDemoProps = CardProps & {
  link: string;
  linkText?: string;
};
export const GuidedDemo = ({ link, linkText, ...rest }: GuidedDemoProps) => {
  return (
    <Link as={NextLink} href={link} color={useColorModeValue('white', 'black !important')}>
      <Button rightIcon={<Icon path={mdiArrowRight} size={0.8} />}>{linkText ?? 'Launch Guided Demo'}</Button>
    </Link>
  );
};
