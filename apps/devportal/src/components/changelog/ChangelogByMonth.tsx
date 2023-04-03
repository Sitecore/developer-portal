import Product from '@/../../packages/sc-changelog/types/product';
import { getChangelogEntryUrl } from '@/src/common/changelog';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import ProductIcon from 'ui/components/common/ProductIcon';

// Record<string, ChangelogEntrySummary[]>

type ChangelogByMonthProps = {
  className?: string;
  product?: Product;
};

const ChangelogByMonth = ({ className, product }: ChangelogByMonthProps): JSX.Element => {
  const [fetchedResults, setFetchedResults] = useState<Record<string, ChangelogEntrySummary[]> | null>(null);

  useEffect(() => {
    const query: string[] = [];
    if (product) {
      query.push(`product=${product.id}`);
    }
    axios
      .get(`/api/changelog/all?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = fetchedResults || [];

  return (
    <div className={`${className}`}>
      {Object.entries(data).map(([month, changelogItems], i) => (
        <div key={i}>
          <h3 key={i} className={`text-charcoal my-4 text-xs font-semibold uppercase`}>
            {month}
          </h3>
          {changelogItems.map((item, index) => (
            <div className="flex items-center gap-5 py-2" key={index}>
              <div className={`text-sm`}>
                {item.imageId && (
                  <div className="absolute h-5 w-5">
                    <div className="dark:hidden">
                      <ProductIcon product={item.imageId} variant="Light" alt={item.productName} className="relative h-5 w-5" width={20} height={20} />
                    </div>
                    <div className="hidden dark:block">
                      <ProductIcon product={item.imageId} variant="Dark" alt={item.productName} className="relative h-5 w-5" width={20} height={20} />
                    </div>
                  </div>
                )}
                <div className="ml-6">
                  <Link className="text-violet dark:text-teal text-xs hover:font-semibold" href={getChangelogEntryUrl(item)} title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}>
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
ChangelogByMonth.defaultProps = {
  className: '',
};

export default ChangelogByMonth;
