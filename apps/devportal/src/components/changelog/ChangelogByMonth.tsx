import ProductIcon from '@/../../packages/ui/components/common/ProductIcon';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';

type ChangelogByMonthProps = {
  className?: string;
  items: { [month: string]: ChangelogEntry[] };
};

const ChangelogByMonth = ({ className, items }: ChangelogByMonthProps): JSX.Element => {
  for (const month in items) {
    return (
      <>
        <h3 className="text-charcoal-light mb-4 text-xs font-semibold uppercase">{month}</h3>
        {items[month].map((item, i) => (
          <div className="flex items-center gap-5 py-2" key={i}>
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
    );
  }
  return <></>;
};
ChangelogByMonth.defaultProps = {
  className: '',
};

export default ChangelogByMonth;
