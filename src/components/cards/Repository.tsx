import { Badge, Card, CardBody, CardFooter, CardHeader, CardProps, HStack, Icon, Link, Tag, TagLeftIcon, Text, Wrap } from '@chakra-ui/react';
import { isValidLogo, SvgLogo } from '@components/ui/logos';
import { mdiGithub, mdiSourceFork, mdiStar } from '@mdi/js';
import { LinkButton } from '../links';

export type RepositoryProps = CardProps & {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
  forks?: number;
  stars?: number;
  topics?: Array<string>;
};

export const Repository = ({ name, description, repositoryUrl, framework, stars, forks, topics, ...rest }: RepositoryProps) => {
  const frameworks = framework?.split('|');
  const frameworkLogos: Array<string> = [];

  if (frameworks == null || frameworks.length == 0) {
    console.log('frameworks is null or empty');
  }

  frameworks?.forEach((logo) => {
    if (isValidLogo(logo)) {
      frameworkLogos.push(logo);
    }
  });

  return (
    <Card variant={'outline'} size={'sm'} display={'flex'} {...rest}>
      <CardHeader justifyContent={'flex-end'}>
        <HStack>
          {frameworks &&
            frameworkLogos.map((framework, index) => {
              return <SvgLogo logo={framework} key={index} height={25} />;
            })}
        </HStack>
      </CardHeader>

      <CardBody>
        {name && (
          <Text variant="strong" mb={4}>
            {name}
          </Text>
        )}
        {description && <Text>{description}</Text>}
        {topics && topics.length > 0 && (
          <Wrap mt={4}>
            {topics.map((topic, index) => {
              return (
                <Badge key={index} colorScheme="info">
                  {topic}
                </Badge>
              );
            })}
          </Wrap>
        )}
      </CardBody>
      <CardFooter pt={0} justifyContent={'space-between'}>
        <HStack>
          {stars && stars > 0 && (
            <Wrap>
              <Tag>
                <TagLeftIcon>
                  <Icon>
                    <path d={mdiStar} />
                  </Icon>
                </TagLeftIcon>
                {stars}
              </Tag>
            </Wrap>
          )}

          {forks && (
            <Wrap>
              <Link href={`${repositoryUrl}/forks`} isExternal>
                <Tag>
                  <TagLeftIcon>
                    <Icon>
                      <path d={mdiSourceFork} />
                    </Icon>
                  </TagLeftIcon>
                  {forks}
                </Tag>
              </Link>
            </Wrap>
          )}
        </HStack>
        <LinkButton
          href={repositoryUrl}
          text="Repository"
          icon={
            <Icon>
              <path d={mdiGithub} />
            </Icon>
          }
          colorScheme="neutral"
          variant="outline"
        />
      </CardFooter>
    </Card>
  );
};
