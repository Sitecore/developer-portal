// Global
import Link from 'next/link';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import DynamicTag from 'ui/components/common/DynamicTag';

export type CTACardProps = {
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  linkText: string;
  link2href?: string;
  link2Text?: string;
  title: string;
};

const CTACard = ({
  description,
  headingLevel = 'h2',
  href,
  linkText,
  title,
  link2Text,
  link2href,
}: CTACardProps): JSX.Element => (
  <div className="bg-theme-bg-alt clear-both my-8 w-full px-16 py-10">
    <DynamicTag tag={headingLevel} className="heading-md mb-4">
      {title}
    </DynamicTag>
    <p className="text-theme-text mb-6">{description}</p>
    <Link href={href} className="btn-primary">
      {linkText}
    </Link>
    {link2href && link2Text && (
      <Link href={link2href} className="btn-primary ml-4">
        {link2Text}
      </Link>
    )}
  </div>
);

export default CTACard;
