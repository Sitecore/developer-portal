import { mdiGithub, mdiSourceFork, mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import { Badge } from "@src/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@src/components/ui/card";
import { isValidLogo, SvgLogo } from "@src/components/ui/logos";
import Link from "next/link";
import { cn } from "@/src/lib/util";
import { LinkButton } from "../links";

export type RepositoryProps = {
  name?: string;
  description: string;
  repositoryUrl: string;
  framework: string;
  forks?: number;
  stars?: number;
  topics?: Array<string>;
  className?: string;
};

export const Repository = ({
  name,
  description,
  repositoryUrl,
  framework,
  stars,
  forks,
  topics,
  className,
}: RepositoryProps) => {
  const frameworks = framework?.split("|");
  const frameworkLogos: Array<string> = [];

  if (frameworks == null || frameworks.length === 0) {
    console.log("frameworks is null or empty");
  }

  frameworks?.forEach((logo) => {
    if (isValidLogo(logo)) {
      frameworkLogos.push(logo);
    }
  });

  return (
    <Card className={cn("border flex flex-col", className)}>
      <CardHeader className="justify-end">
        <div className="flex items-center gap-2">
          {frameworks &&
            frameworkLogos.map((framework) => {
              return <SvgLogo logo={framework} key={framework} height={25} />;
            })}
        </div>
      </CardHeader>

      <CardContent>
        {name && (
          <p className="font-semibold mb-4">
            <Link
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {name}
            </Link>
          </p>
        )}
        {description && <p>{description}</p>}
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {topics.map((topic) => {
              return (
                <Badge key={topic} variant="default">
                  {topic}
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 justify-between">
        <div className="hidden sm:flex items-center gap-2">
          {stars && stars > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted">
              <Icon path={mdiStar} size={0.8} />
              <span className="text-sm">{stars}</span>
            </div>
          )}

          {forks && (
            <Link
              href={`${repositoryUrl}/forks`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted hover:bg-muted/80"
            >
              <Icon path={mdiSourceFork} size={0.8} />
              <span className="text-sm">{forks}</span>
            </Link>
          )}
        </div>
        <LinkButton
          href={repositoryUrl}
          text="Repository"
          icon={<Icon path={mdiGithub} size={1} />}
          variant="outline"
          size="sm"
        />
      </CardFooter>
    </Card>
  );
};
