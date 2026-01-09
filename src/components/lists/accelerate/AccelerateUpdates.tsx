'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { AccelerateRecipe } from '@/src/lib/accelerate/types/recipe';
import { Product, Variant } from '@/src/lib/assets';
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { TextLink } from '@src/components/links';
import { GetProductIcon } from '../../../lib/assets';
import { cn } from '@lib/utils';

type AccelerateUpdatesProps = {
  recipes: AccelerateRecipe[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
  columns?: number;
  url: string;
};

const AccelerateUpdates = ({ title = 'Sitecore Accelerate updates', linkHref = '/learn/accelerate', linkText = 'See all recipes', recipes, hideProductIcon, columns, className }: AccelerateUpdatesProps) => {
  return (
    <Card className={cn('border-0 shadow-none', className)}>
      <CardHeader className="flex flex-col sm:flex-row justify-between sm:justify-between py-8 items-baseline">
        <h3 className="text-2xl font-heading font-medium flex items-center gap-2">
          {title}
          <Link href="/learn/accelerate/updates" className="ml-1">
            <Button variant="ghost" size="sm" aria-label="RSS" className="h-6 w-6 p-0">
              <Icon path={mdiRss} size={0.8} />
            </Button>
          </Link>
        </h3>
        <div className="hidden md:block">
          <TextLink href={linkHref} text={linkText} />
        </div>
      </CardHeader>
      <CardContent className="py-2 md:py-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="xmcloud">XM Cloud</TabsTrigger>
            <TabsTrigger value="contenthub">Content Hub</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <RecipeList recipes={recipes} hideProductIcon={hideProductIcon} columns={columns} />
          </TabsContent>
          <TabsContent value="xmcloud">
            <div className="relative">
              <RecipeList recipes={recipes.filter((recipe: AccelerateRecipe) => recipe.product === 'XMCloud')} />
              <Link href="/learn/accelerate/xm-cloud/updates" className="absolute top-0 right-0">
                <Button variant="ghost" size="sm" aria-label="RSS">
                  <Icon path={mdiRss} size={0.8} />
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="contenthub">
            <div className="relative">
              <RecipeList recipes={recipes.filter((recipe: AccelerateRecipe) => recipe.product === 'ContentHub')} />
              <Link href="/learn/accelerate/content-hub/updates" className="absolute top-0 right-0">
                <Button variant="ghost" size="sm" aria-label="RSS">
                  <Icon path={mdiRss} size={0.8} />
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="md:hidden py-0 self-end">
        <TextLink href={linkHref} text={linkText} />
      </CardFooter>
    </Card>
  );
};

const RecipeList = ({ recipes, hideProductIcon, columns = 1, show = 5 }: { recipes: AccelerateRecipe[]; hideProductIcon?: boolean; columns?: number; show?: number }) => {
  const { theme } = useTheme();

  return (
    <div className={cn('grid', columns ? `grid-cols-${columns}` : 'grid-cols-1', 'gap-0')}>
      {recipes.slice(0, show).map((entry, key) => {
        const iconSrc = theme === 'dark' 
          ? GetProductIcon(Product.XMCloud, Variant.Dark)
          : GetProductIcon(entry.product || Product.Default, Variant.Light);
        
        return (
          <div className="flex items-start mb-4" key={key}>
            {!hideProductIcon && (
              <div className="hidden sm:block text-center mr-5 h-[43px] w-[43px]">
                <Image
                  src={iconSrc}
                  alt="Product icon"
                  width={25}
                  height={25}
                  priority
                  className="m-2"
                />
              </div>
            )}
            <div className="text-sm">
              <h4 className="text-lg font-heading">
                <Link href={entry.url || '#'} title={entry.title} className="text-foreground hover:underline">
                  {entry.title}
                </Link>
              </h4>
              <div className="flex items-center gap-6">
                <p>{new Date(entry.lastUpdated).toLocaleString('en-US', { dateStyle: 'medium' })}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccelerateUpdates;
