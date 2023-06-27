import Image from 'next/legacy/image';
import Button from 'ui/components/buttons/Button';

interface NewsletterStoryPartialData {
  copy: string;
  link: {
    text?: string;
    href: string;
  };
  title: string;
}

export interface NewsletterStoryData extends NewsletterStoryPartialData {
  variant?: 'full-width';
  image: string;
}

const NewsletterStoryPartial = ({ copy, link, title }: NewsletterStoryPartialData) => (
  <div className="flex flex-1 flex-col justify-between">
    <div className="mb-4">
      <h2 className="heading-sm mb-4">{title}</h2>
      <p>{copy}</p>
    </div>
    <Button variant="text" text={link.text || 'Read more'} href={link.href} icon={true} aria-label={title} />
  </div>
);

const NewsletterStory = ({ variant, image, ...props }: NewsletterStoryData) => {
  if (variant === 'full-width') {
    return (
      <div className="md:col-span-3 md:grid md:grid-cols-3 md:gap-10">
        <div className="mb-4 block md:hidden">
          <Image src={image} alt="" width="300" height="300" />
        </div>
        <div className="col-span-2">
          <NewsletterStoryPartial {...props} />
        </div>
        <div className="hidden md:block">
          <Image src={image} alt="" width="300" height="300" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <Image src={image} alt="" width="300" height="300" />
      </div>
      <NewsletterStoryPartial {...props} />
    </div>
  );
};

export default NewsletterStory;
