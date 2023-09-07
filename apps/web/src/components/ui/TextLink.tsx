import { HStack, Heading, HeadingProps, Link, Text, TextProps } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';

type TextLinkProps = TextProps &
  HeadingProps & {
    href: string;
    text: string;
    isHeading?: boolean;
  };

export const TextLink = ({ href, text, isHeading, ...rest }: TextLinkProps) => {
  if (isHeading)
    return (
      <Heading size="lg" {...rest}>
        <TextWithLink href={href} text={text} />
      </Heading>
    );

  return (
    <Text {...rest}>
      <TextWithLink href={href} text={text} />
    </Text>
  );
};

const TextWithLink = ({ href, text }: TextLinkProps) => (
  <HStack as={'span'}>
    <Link href={href} color={'neutral.fg'} fontWeight={'semibold'}>
      {text}
    </Link>
    <Icon path={mdiArrowRight} size={0.8} />
  </HStack>
);
