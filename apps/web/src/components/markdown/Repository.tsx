import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import SvgLogo, { Logo, isValidLogo } from '../common/SvgLogo';
import { ButtonLink } from '../ui/ButtonLink';

export type RepositoryProps = {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
};

export const Repository = ({ name, description, repositoryUrl, framework }: RepositoryProps) => {
  const frameworks = framework.split('|');
  const frameworkLogos: string[] = [];

  frameworks.forEach((logo) => {
    if (isValidLogo(logo)) frameworkLogos.push(logo);
  });

  return (
    <Card variant={'outlineRaised'} size={'sm'} display={'flex'}>
      <CardHeader justifyContent={'flex-end'}>
        {frameworks &&
          frameworkLogos.map((framework, index) => {
            return <SvgLogo logo={framework as Logo} key={index} height={40} />;
          })}
      </CardHeader>

      <CardBody>
        {name && <Heading as="h4">{name}</Heading>}
        {description && <Text>{description}</Text>}
        <ButtonLink href={repositoryUrl} variant="outline" size="sm" icon={<Icon path={mdiGithub} size={1} />} text="Repository" />
      </CardBody>
    </Card>
  );
};
