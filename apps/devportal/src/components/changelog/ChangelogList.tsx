import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { LinkValue } from 'ui/common/types/link-value';
import { Dropdown } from 'ui/components/dropdown/Dropdown';
import ChangeLogItem from './ChangeLogItem';

type ChangelogListProps = {
  className?: string;
  items?: ChangelogEntry[];
  product?: string;
  changeType?: string;
};

const ChangelogList = ({ className, product, changeType }: ChangelogListProps): JSX.Element => {
  const [fetchedResults, setFetchedResults] = useState<ChangelogEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const products: LinkValue[] = Products.map((x) => {
    return { href: getSlug(x.name), text: x.name };
  });

  const changes: LinkValue[] = ChangeTypes.map((x) => {
    return { href: getSlug(x.name), text: x.name };
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
    <div className={`${className}`}>
      <Dropdown options={products} initialText="All Products" onSelectChange={(selectedValue) => router.push(`/changelog/${selectedValue}`)} />
      <Dropdown options={changes} initialText="All changes" onSelectChange={(selectedValue) => router.push(`${router.asPath}/${selectedValue}`)} />

      {data.map((item, i) => (
        <ChangeLogItem item={item} key={i} loading={isLoading} />
      ))}

      {data.length == 0 && (
        <span className={`bg-violet mt-5 inline-block w-full rounded-md py-2 px-3 text-xs text-white`}>
          <strong>TODO</strong> ADD NO RESULTS MESSAGE
        </span>
      )}
    </div>
  );
};
ChangelogList.defaultProps = {
  className: '',
};

export default ChangelogList;
