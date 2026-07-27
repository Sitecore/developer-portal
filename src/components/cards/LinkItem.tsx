import { cn } from "@/src/lib/util";
import { Card } from "@src/components/ui/card";
import { LinkButton } from "../links";

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};

export const LinkItem = ({ title, link, className }: LinkProps) => {
  return (
    <Card
      style="outline"
      elevation="xs"
      className={cn("py-4 px-2", "hover:bg-subtle-bg", className)}
    >
      <LinkButton
        colorScheme="primary"
        variant="link"
        text={title}
        href={link}
        className="w-full h-full justify-between"
      />
    </Card>
  );
};
