import { TextLink } from "@src/components/links";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@src/components/ui/card";
import Image from "next/image";

interface NewsletterStoryPartialData {
  copy: string;
  linkText?: string;
  linkHref: string;
  title: string;
  image?: string;
}

export interface NewsletterStoryData extends NewsletterStoryPartialData {
  variant?: "full-width";
  image: string;
}

const NewsletterStoryPartial = ({
  copy,
  linkHref,
  linkText,
  title,
  image,
}: NewsletterStoryPartialData) => (
  <Card className="flex-1 flex flex-col shadow-lg">
    {image && (
      <Image
        src={image}
        alt=""
        width={400}
        height={200}
        className="w-full max-h-[200px] object-cover"
      />
    )}
    <CardHeader>
      <h2 className="text-lg font-heading">{title}</h2>
    </CardHeader>
    <CardContent>
      <p className="text-lg">{copy}</p>
    </CardContent>
    <CardFooter>
      {linkHref && (
        <TextLink
          text={linkText || "Read more"}
          href={linkHref}
          aria-label={title}
        />
      )}
    </CardFooter>
  </Card>
);

export const NewsletterStory = ({
  variant,
  image,
  ...props
}: NewsletterStoryData) => {
  if (variant === "full-width") {
    return (
      <div className="col-span-1 md:col-span-3">
        <Card className="flex-0 flex flex-col-reverse md:flex-row bg-muted">
          <div className="flex flex-col justify-between gap-0">
            <CardHeader>
              <h2 className="text-lg font-heading">{props.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{props.copy}</p>
            </CardContent>
            <CardFooter>
              {props.linkHref && (
                <TextLink
                  text={props.linkText || "Read more"}
                  href={props.linkHref}
                  aria-label={props.title}
                  size="lg"
                />
              )}
            </CardFooter>
          </div>
          <Image
            width={300}
            height={300}
            src={image}
            alt={props.title}
            className="object-fill"
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <NewsletterStoryPartial {...props} image={image} />
    </div>
  );
};

export default NewsletterStory;
