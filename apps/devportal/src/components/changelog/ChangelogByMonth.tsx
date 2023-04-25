import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import Product from 'sc-changelog/types/product';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
import useSWR, { Fetcher } from 'swr';

// Record<string, ChangelogEntrySummary[]>

type ChangelogByMonthProps = {
  className?: string;
  product?: Product;
};

const ChangelogByMonth = ({ className, product }: ChangelogByMonthProps): JSX.Element => {
  const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent m-1';

  const fetcher: Fetcher<Record<string, ChangelogEntrySummary[]> | null, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const query: string[] = [];
  if (product) {
    query.push(`product=${product.id}`);
  }

  const { data, error, isLoading } = useSWR<Record<string, ChangelogEntrySummary[]> | null>(`/api/changelog/all?${query.join('&')}`, fetcher);

  if (error) {
    console.log(error);
  }
  const items = data || [];

  return (
    <div className={`${className}`}>
      {Object.entries(items).map(([month, changelogItems], i) => (
        <div key={i}>
          <h3 key={i} className={`text-charcoal my-4 text-xs font-semibold uppercase ${isLoading ? 'w-full' && skeletonLoaderClasses : ''}`}>
            {month}
          </h3>
          {changelogItems.map((item, index) => (
            <div className={`flex items-center gap-5 py-2 ${isLoading ? 'w-full' && skeletonLoaderClasses : ''}`} key={index}>
              <div className={`text-sm`}>
                <div className="absolute h-5 w-5">
                  <div className="dark:hidden">
                    <Image src={item.lightIcon} alt={item.productName ?? item.title} className="relative h-5 w-5" width={20} height={20} priority={true} />
                  </div>
                  <div className="hidden dark:block">
                    <Image src={item.darkIcon} alt={item.productName ?? item.title} className="relative h-5 w-5" width={20} height={20} priority={true} />
                  </div>
                </div>
                <div className="ml-6">
                  <Link className="text-violet dark:text-teal text-xs hover:underline" href={getChangelogEntryUrl(item)} title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}>
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
