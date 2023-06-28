import Image from 'next/image';
import Link from 'next/link';
import Button from '../buttons/Button';

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
  imageUrl?: string;
  hideLinkText?: boolean;
};
export const Article = ({ title, description, link, linktext, imageUrl, hideLinkText }: ArticleProps) => {
  return (
    <div className="article">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      {imageUrl && link && (
        <div className="not-prose relative aspect-video w-full">
          <Link href={link} title={title} rel="noreferrer noopener">
            <Image
              src={imageUrl}
              alt={title || ''}
              className="relative z-10"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            />
          </Link>
        </div>
      )}
      {link && !hideLinkText && <Button variant="text" text={linktext ? linktext : 'Read more'} href={link} icon={true} />}
    </div>
  );
};
