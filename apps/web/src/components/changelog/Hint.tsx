import { getSlug } from '@/../../packages/sc-changelog/utils/stringUtils';
import Link from 'next/link';
import { Option } from 'ui/components/dropdown/MultiSelect';

type HintProps = {
  products?: Option[];
  enabled: boolean;
};

export const Hint = ({ products, enabled }: HintProps): JSX.Element => {
  if (!enabled || products == undefined) return <></>;

  return (
    <span className="text-xs italic">
      Did you know that {products[0].label} has its own
      <Link href={`/changelog/${getSlug(products[0].label)}`} title="" className="mx-1 font-bold hover:underline">
        changelog
      </Link>
      page for direct access?
    </span>
  );
};
