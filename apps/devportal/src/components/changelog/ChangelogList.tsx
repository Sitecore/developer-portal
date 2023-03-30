import ChangeType from '@/../../packages/sc-changelog/types/changeType';
import SvgIcon from '@/../../packages/ui/components/common/SvgIcon';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import MultiSelect, { Option } from 'ui/components/dropdown/MultiSelect';
import Product from '../../../../../packages/sc-changelog/types/product';
import ChangeLogItem from './ChangeLogItem';

type ChangelogListProps = {
  className?: string;
  initialProduct?: Product;
  intialChangeType?: string;
};

const ChangelogList = ({ className, initialProduct }: ChangelogListProps): JSX.Element => {
  const [fetchedResults, setFetchedResults] = useState<ChangelogEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cursor, setCursor] = useState<string>();
  const [reload, setReload] = useState<boolean>(false);
  const [clearResults, setClearResults] = useState<boolean>(false);
  const [changeType, setChangeType] = useState<ChangeType[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);

  const loadData = useRef(true);

  function updateData() {
    loadData.current = true;
    setReload(true);
  }

  function handleApplyProductFilter(selectedValue: Option[], filter: string) {
    loadData.current = true;

    if (filter == 'product') setSelectedProduct(selectedValue);
    if (filter == 'changes') setSelectedChange(selectedValue);

    setClearResults(true);
    setIsLoading(true);
  }

  function getParameters(): string[] {
    const query = [];
    query.push(`limit=5`);

    // Preset to specific product
    if (initialProduct) query.push(`product=${initialProduct.id}`);

    selectedProduct.map((p) => {
      query.push(`product=${p.value}`);
    });

    selectedChange.map((c) => {
      query.push(`changeType=${c.value}`);
    });

    if (reload) query.push(`end=${cursor}`);
    return query;
  }

  useEffect(() => {
    const query = getParameters();

    if (loadData.current) {
      loadData.current = false;
      if (fetchedResults.length == 0) setIsLoading(true);

      // Fill dropdowns
      axios.get(`/api/changelog/types`).then((response) => {
        setChangeType(response.data);
      });
      axios.get(`/api/changelog/products?all=false`).then((response) => {
        setProducts(response.data);
      });

      // Get results
      axios
        .get(`/api/changelog?${query.join('&')}`)
        .then((response) => {
          clearResults ? setFetchedResults(response.data.entries) : setFetchedResults((prev) => [...prev, ...response.data.entries]);
          setCursor(response.data.endCursor);
          // We are at the final results
          if (cursor != null) setReload(false);
          setIsLoading(false);
          setClearResults(false);
        })
        .catch((err) => console.log(err));
    }
  }, [reload, selectedProduct, selectedChange]);

  const data = fetchedResults ? fetchedResults : [];

  return (
    <div className={`${className}`}>
      <div className={`z-50 ${initialProduct ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>
        {initialProduct && (
          <div className="bg-violet-lighter text-violet mb-2 mr-2 flex rounded-md px-3 py-2 text-sm">
            <div className="m-auto">
              <strong>Product:</strong> {initialProduct.name}
              <Link href="/changelog">
                <SvgIcon icon="close" width={24} height={24} className="text-violet dark:text-red relative -top-0.5 left-1 inline-block h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
        {!initialProduct && (
          <>
            <label className="sr-only" htmlFor="react-select-productSelector-input">
              Filter by product
            </label>
            <MultiSelect
              id="productSelector"
              instanceId="productSelector"
              key="example_id"
              options={products.map((e) => ({ label: e.name, value: e.id }))}
              classNames={{
                control: () => 'mb-2 text-sm dark:bg-theme-bg',
              }}
              onChange={(selectedValues: Option[]) => handleApplyProductFilter(selectedValues, 'product')}
              value={selectedProduct}
              isSelectAll={true}
              menuPlacement={'bottom'}
              placeholder="Select one or more products to filter"
            />
          </>
        )}
        <label className="sr-only" htmlFor="react-select-changeSelector-input">
          Filter by change
        </label>
        <MultiSelect
          id="changeSelector"
          instanceId="changeSelector"
          key="example_id2"
          options={changeType.map((e) => ({ label: e.name, value: e.id }))}
          classNames={{
            control: () => 'mb-2 text-sm dark:bg-theme-bg',
          }}
          onChange={(selectedValues: Option[]) => handleApplyProductFilter(selectedValues, 'changes')}
          value={selectedChange}
          isSelectAll={true}
          menuPlacement={'bottom'}
          placeholder="Select one or more options to filter"
        />
      </div>

      {data.map((item, i) => (
        <ChangeLogItem item={item} key={i} loading={isLoading} isLast={i === data.length - 1} loadEntries={() => updateData()} />
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

      {reload == false && cursor == null && !isLoading && fetchedResults.length > 0 && <span className={`border-violet text-violet mt-5 inline-block w-full border-2 py-2 px-3 text-center text-sm`}>No more results</span>}
    </div>
  );
};
ChangelogList.defaultProps = {
  className: '',
};

export default ChangelogList;
