// Global
// Interfaces
import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
// Components
import DynamicTag from 'ui/components/common/DynamicTag';
import Button from '../buttons/Button';

export type CTACardProps = {
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  linkText: string;
  link2href?: string;
  link2Text?: string;
  title: string;
};

const CTACard = ({ description, headingLevel = 'h2', href, linkText, title, link2Text, link2href }: CTACardProps): JSX.Element => (
  <div className="bg-theme-bg-alt clear-both my-8 w-full px-16 py-10">
    <DynamicTag tag={headingLevel} className="heading-md mb-4">
      {title}
    </DynamicTag>
    <p className="text-theme-text mb-6">{description}</p>
    <Button href={href} text={linkText} size={'lg'} />

    {link2href && link2Text && <Button href={link2href} text={link2Text} size={'lg'} className="ml-4" />}
  </div>
);

export default CTACard;
