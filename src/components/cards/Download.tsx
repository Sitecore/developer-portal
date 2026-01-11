import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@src/components/ui/card";
import NextLink from "next/link";
import { cn } from "@/src/lib/util";
import { LinkButton } from "../links";

type DownloadProps = {
  title: string;
  description: string;
  link1text: string;
  link1href: string;
  link2text?: string;
  link2href?: string;
  className?: string;
};

export const Download = ({
  title,
  description,
  link1text,
  link1href,
  link2text,
  link2href,
  className,
}: DownloadProps) => {
  return (
    <Card className={cn("border mb-8", className)}>
      <CardHeader>
        <h4 className="text-lg font-heading mt-0">
          <NextLink href={link1href} className="hover:underline">
            {title}
          </NextLink>
        </h4>
      </CardHeader>
      <CardContent className="py-0">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="pt-0 gap-4 mt-4">
        <LinkButton href={link1href} text={link1text} />
        {link2text && link2href && (
          <LinkButton href={link2href} text={link2text} variant="outline" />
        )}
      </CardFooter>
    </Card>
  );
};
