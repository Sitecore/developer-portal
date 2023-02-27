import ChangeTypes from '@/../../packages/sc-changelog/constants/changeTypes';
import Products from '@/../../packages/sc-changelog/constants/products';
import { getSlug } from '@/../../packages/sc-changelog/utils/stringUtils';
import { LinkValue } from '@/../../packages/ui/common/types/link-value';
import { Dropdown } from '@/../../packages/ui/components/dropdown/Dropdown';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';
import ChangeLogItem from './ChangeLogItem';

type ChangelogListProps = {
  className?: string;
  items?: ChangelogEntry[];
};

const ChangelogList = ({ className, items }: ChangelogListProps): JSX.Element => {
  const [fetchedResults, setFetchedResults] = useState<ChangelogEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<string | undefined>(undefined);
  const [changeType, setChangeType] = useState<string | undefined>(undefined);

  const products: LinkValue[] = Products.map((x) => {
    return { href: getSlug(x.name), text: x.name };
  });

  const changes: LinkValue[] = ChangeTypes.map((x) => {
    return { href: getSlug(x.name), text: x.name };
  });

  useEffect(() => {
    console.log('reload');
    setIsLoading(true);
    const query = [];
    if (product) {
      query.push(`product=${product}`);
    }
    if (changeType) {
      query.push(`changeType=${changeType}`);
    }
    axios
      .get(`/api/changelog?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [product, changeType]);

  const data = fetchedResults || [];

  return (
    <>
      <Dropdown options={products} initialText="All Products" onSelectChange={(selectedValue) => setProduct(selectedValue)} />
      <Dropdown options={changes} initialText="All changes" onSelectChange={(selectedValue) => setChangeType(selectedValue)} />

      {data.map((item, i) => (
        <ChangeLogItem item={item} key={i} loading={isLoading} />
      ))}
    </>
  );
};
ChangelogList.defaultProps = {
  className: '',
};

export default ChangelogList;
