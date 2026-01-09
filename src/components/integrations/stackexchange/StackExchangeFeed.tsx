import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { TextLink } from '../../links';
import { StackExchangeQuestion } from './stackExchange';
import { cn } from '@lib/utils';

type StackExchangeFeedProps = {
  data: Array<StackExchangeQuestion>;
  title?: string;
  className?: string;
};

export const StackExchangeFeed = ({ data, title, className }: StackExchangeFeedProps) => {
  const { theme } = useTheme();

  if (data.length === 0) {
    return <></>;
  }

  return (
    <Card className={cn('shadow-none bg-transparent', className)}>
      <CardHeader className="flex flex-col md:flex-row justify-between px-0">
        <h2 className="text-2xl font-heading font-medium mb-8">
          {title ? title : `The Latest on Sitecore StackExchange`}
        </h2>
        <TextLink href="https://sitecore.stackexchange.com/" text="See all questions on StackExchange" />
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          {data.map((question) => (
            <div key={question.question_id} className="flex items-start gap-4 md:gap-8">
              <div className={cn('border p-1 md:p-4', theme === 'dark' ? 'border-white/30' : 'border-black/30')}>
                <p className="text-center">{question.view_count}</p>
                <p className="text-sm">Views</p>
              </div>

              <div className="flex flex-col gap-2">
                <Link href={question.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-foreground hover:underline">
                  {question.title}
                  <span className="sr-only">Opens in a new tab</span>
                </Link>
                <span className="sr-only">Tags:</span>
                {question.tags.length > 0 && (
                  <div className="flex flex-col xl:flex-row gap-2 hidden md:flex">
                    {question.tags.map((tag, i) => (
                      <Link
                        href={`https://sitecore.stackexchange.com/questions/tagged/${tag}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                      >
                        <Button variant="default" size="sm" className="rounded-none bg-purple-600 hover:bg-purple-700 text-white">
                          {tag}
                          <span className="sr-only">Opens in a new tab</span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
