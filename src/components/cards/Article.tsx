import { Button } from "@src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@src/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/util";

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
  imageUrl?: string;
  hideLinkText?: boolean;
  className?: string;
};

export const Article = ({
  title,
  description,
  link,
  linktext,
  imageUrl,
  hideLinkText,
  className,
}: ArticleProps) => {
  return (
    <Card className={cn("border shadow-md", className)}>
      <CardHeader>
        <h4 className="text-lg font-medium font-heading">{title}</h4>
      </CardHeader>
      <CardContent className="py-0">
        {description && <p className="mb-8">{description}</p>}
        {imageUrl && link && (
          <div>
            <Link
              href={link}
              title={title}
              rel="noreferrer noopener"
              className="text-white"
            >
              <Image
                src={imageUrl}
                alt={title || ""}
                className="relative z-10"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              />
            </Link>
          </div>
        )}
      </CardContent>
      {link && !hideLinkText && (
        <CardFooter className="pt-0">
          <Link href={link} className="no-underline">
            <Button
              variant="outline"
              size="default"
              className="rounded-full px-6 font-semibold whitespace-normal border hover:bg-primary hover:text-white hover:border-primary active:bg-primary/90"
            >
              {linktext ?? "Read more"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
