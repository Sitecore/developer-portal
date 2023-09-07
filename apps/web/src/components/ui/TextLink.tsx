import { HStack, Link, Text, TextProps } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';

type TextLinkProps = TextProps & {
  href: string;
  title: string;
};

export const TextLink = ({ href, title, ...rest }: TextLinkProps) => {
  return (
    <Text {...rest}>
      <HStack as={'span'}>
        <Link href={href} color={'neutral.fg'} fontWeight={'bold'}>
          {title}
        </Link>
        <Icon path={mdiArrowRight} size={0.8} />
      </HStack>
    </Text>
  );
};
