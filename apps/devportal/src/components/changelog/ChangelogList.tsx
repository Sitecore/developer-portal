import SvgIcon from '@/../../packages/ui/components/common/SvgIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { LinkValue } from 'ui/common/types/link-value';
import { Dropdown } from 'ui/components/dropdown/Dropdown';
import ChangeLogItem from './ChangeLogItem';

type ChangelogListProps = {
  className?: string;
  items: ChangelogEntry[];
  product?: string;
  changeType?: string;
};

const products: LinkValue[] = Products.map((x) => {
  return { href: getSlug(x.name), text: x.name };
});

const changes: LinkValue[] = ChangeTypes.map((x) => {
  return { href: getSlug(x.name), text: x.name };
});

const ChangelogList = ({ className, product, changeType, items }: ChangelogListProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className={`${className}`}>
      <div className="flex flex-row">
        {product && (
          <div className="bg-violet-lighter text-violet mr-2 inline-block rounded-md p-3 text-sm">
            <strong>Product:</strong> {product}
            <Link href="/changelog">
              <SvgIcon icon="close" width={24} height={24} className="text-violet dark:text-red relative -top-0.5 left-1 inline-block h-5 w-5" />
            </Link>
          </div>
        )}
        {!product && <Dropdown options={products} initialText="All Products" onSelectChange={(selectedValue) => router.push(`/changelog/${selectedValue}`)} />}
        <Dropdown options={changes} initialText="All changes" onSelectChange={(selectedValue) => router.push(`${router.asPath}/${selectedValue}`)} />
      </div>
      {items.map((item, i) => (
        <ChangeLogItem item={item} key={i} />
      ))}

      {items == null && <span className={`bg-violet mt-5 inline-block w-full rounded-md py-2 px-3 text-xs text-white`}>No results found</span>}
    </div>
  );
};

export default ChangelogList;
