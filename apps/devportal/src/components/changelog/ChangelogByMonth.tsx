import ProductIcon from '@/../../packages/ui/components/common/ProductIcon';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';

// Record<string, ChangelogEntrySummary[]>

type ChangelogByMonthProps = {
  className?: string;
  productName?: string;
  changeType?: string;
};

const ChangelogByMonth = ({ className, productName, changeType }: ChangelogByMonthProps): JSX.Element => {
  const [fetchedResults, setFetchedResults] = useState<Record<string, ChangelogEntrySummary[]> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const query: string[] = [];
    if (productName) {
      query.push(`product=${productName}`);
    }
    if (changeType) {
      query.push(`changeType=${changeType}`);
    }
    axios
      .get(`/api/changelog/all?${query.join('&')}`)
      .then((response) => {
        setFetchedResults(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = fetchedResults || [];

  return (
    <div>
      {Object.entries(data).map(([month, changelogItems]) => (
        <>
          <h3 key={month} className="text-charcoal-light my-4 text-xs font-semibold uppercase">
            {month}
          </h3>
          {changelogItems.map((item, index) => (
            <div className="flex items-center gap-5 py-2" key={index}>
              <div className="text-sm">
                {item.imageId && (
                  <div className="absolute h-5 w-5">
                    <ProductIcon product={item.imageId} variant="Light" className="relative h-5 w-5" />
                  </div>
                )}
                <div className="ml-6">{item.title}</div>
              </div>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};
ChangelogByMonth.defaultProps = {
  className: '',
};

export default ChangelogByMonth;
