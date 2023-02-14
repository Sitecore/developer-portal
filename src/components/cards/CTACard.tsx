// Global
import Link from 'next/link';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import DynamicTag from '@/src/components/common/DynamicTag';

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
  <div className="w-full px-16 py-10 my-8 bg-theme-bg-alt clear-both">
    <DynamicTag tag={headingLevel} className="mb-4 heading-md">
      {title}
    </DynamicTag>
    <p className="mb-6 text-theme-text">{description}</p>
    <Link href={href} className="btn-primary">
      {linkText}
    </Link>
    {link2href && link2Text && (
      <Link href={link2href} className="ml-4 btn-primary">
        {link2Text}
      </Link>
    )}
  </div>
);

export default CTACard;
