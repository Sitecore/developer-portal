import Image from 'next/image';
import TextLink from '../helper/TextLink';

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
  <>
    <h2 className="heading-sm mb-4">{title}</h2>
    <p className="mb-4">{copy}</p>
    <TextLink text={link.text || 'Read more'} href={link.href} />
  </>
);

const NewsletterStory = ({ variant, image, ...props }: NewsletterStoryData) => {
  if (variant === 'full-width') {
    return (
      <div className="md:grid md:gap-8 md:grid-cols-3 md:col-span-3">
        <div className="block mb-8 md:hidden">
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
    <div>
      <div className="mb-8 md:mb-0">
        <Image src={image} alt="" width="300" height="300" />
      </div>
      <NewsletterStoryPartial {...props} />
    </div>
  );
};

export default NewsletterStory;
