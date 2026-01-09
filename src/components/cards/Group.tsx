import { Card, CardContent } from '@components/ui/card';
import { cn } from '@lib/utils';
import styles from '../markdown/MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */

type GroupProps = {
  title: string;
  description?: string;
  columns?: number;
  children: any;
  className?: string;
};

const gridColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export const Group = ({ title, description, columns = 2, children, className }: GroupProps) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-4xl font-heading">
        {title}
      </h2>
      {description && <p className="text-lg mt-2">{description}</p>}

      <div className={cn('grid grid-cols-1', gridColsMap[columns] || `lg:grid-cols-${columns}`, 'gap-2 md:gap-10 my-4')}>
        {children}
      </div>
    </div>
  );
};

export const GroupItem = ({ children }: { children: any }) => {
  return (
    <Card>
      <CardContent>
        <div className={cn('prose prose-lg max-w-none', styles.richText)}>{children}</div>
      </CardContent>
    </Card>
  );
};
