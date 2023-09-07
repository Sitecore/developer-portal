import { Box, Card, CardBody, CardFooter, CardProps, Center, Grid, Heading, Stack, chakra, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { TextLink } from './TextLink';

export type GenericListData = CardProps & {
  title: string;
  subtitle: string;
  data: GenericListItem[];
  column?: number;
  overrideColor?: {
    light: string;
    dark: string;
  };
};

export type GenericListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
  img: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

export const GenericList = (props: GenericListData) => {
  const cols = props.column || 4;
  const color = props.overrideColor != null ? useColorModeValue(props.overrideColor.light, props.overrideColor.light) : undefined;

  return (
    <Box>
      <Heading as="h2" pt={6} mb={8}>
        {props.title}
      </Heading>
      {props.subtitle != '' && (
        <Heading as="h3" size={'sm'} pb={6} mb={8}>
          {props.subtitle}
        </Heading>
      )}

      <Grid templateColumns={{ base: `repeat(1}, 1fr)`, md: `repeat(${cols}, 1fr)` }} gap={6} alignItems={'items-stretch'}>
        {props.data.map((item, key) => (
          <Card key={key} background={'whiteAlpha.300'} backdropFilter={'blur(16px)'} color={color} width={props.width} mx={'auto'}>
            <CardBody padding={0}>
              <Stack direction={['column', 'row-reverse', 'column']} spacing={5} padding={{ base: 5, md: 0 }}>
                <Center>
                  <CustomImage src={item.img.src} alt={item.img.alt || ''} width={item.img.width || '368'} height={item.img.width || '150'} />
                </Center>
                <Box padding={5}>
                  <Heading as="h3" size="sm" mb={2}>
                    {item.title}
                  </Heading>
                  {item.description}
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <TextLink text={item.linkText} href={item.href} />
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
