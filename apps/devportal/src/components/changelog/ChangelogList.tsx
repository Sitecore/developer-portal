import axios from 'axios';
import { useEffect, useState } from 'react';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';
import { LinkValue } from 'ui/common/types/link-value';
import { Dropdown } from 'ui/components/dropdown/Dropdown';
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
    return { href: x.name, text: x.name };
  });

  const changes: LinkValue[] = ChangeTypes.map((x) => {
    return { href: x.name, text: x.name };
  });

  useEffect(() => {
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
