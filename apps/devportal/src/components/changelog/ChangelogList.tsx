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

      {isLoading && (
        <div role="status" className="position-center mt-16 text-center align-middle">
          <svg aria-hidden="true" className="fill-violet mr-2 inline h-8 w-8 animate-spin text-white dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span>Loading...</span>
        </div>
      )}

      {!isLoading && data.length == 0 && <span className={`bg-violet mt-5 inline-block w-full rounded-md py-2 px-3 text-xs text-white`}>No results found</span>}
    </div>
  );
};
ChangelogList.defaultProps = {
  className: '',
};

export default ChangelogList;
