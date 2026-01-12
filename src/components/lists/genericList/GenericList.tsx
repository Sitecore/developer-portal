import { cn } from '@/src/lib/util';
import { LinkButton } from '@src/components/links';
import { CardContent, CardFooter, CardHeader } from '@src/components/ui/card';
import { ExtendedCard } from '@src/components/ui/custom/card-extended';
import Image from 'next/image';
import type { CardVariant, GenericListData, GenericListItem } from './types';

const GRID_COLUMN_CLASSES: Record<number, string> = {
  1: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4',
};

const DEFAULT_COLUMNS = 4;
const DEFAULT_CARD_VARIANT: CardVariant = 'flat';

const getGridClasses = (columns: number): string => {
  return GRID_COLUMN_CLASSES[columns] || GRID_COLUMN_CLASSES[DEFAULT_COLUMNS];
};

const getButtonVariant = (cardVariant: CardVariant): 'ghost' | 'outline' => {
  return cardVariant === 'blurred' ? 'ghost' : 'outline';
};

const isBorderedImageVariant = (variant: CardVariant): boolean => {
  return variant === 'borderedImage';
};

interface GenericListItemProps {
  item: GenericListItem;
  cardVariant: CardVariant;
}

const GenericListItem = ({ item, cardVariant }: GenericListItemProps) => {
  const Icon = item.icon;
  const isBorderedImage = isBorderedImageVariant(cardVariant);
  const buttonVariant = getButtonVariant(cardVariant);

  const renderIconOrImage = () => {
    if (Icon) {
      return (
        <div className="rounded-full bg-[rgba(235,0,26,0.08)] inline-flex items-center justify-center p-2 md:p-1">
          <Icon className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      );
    }

    if (!item.img?.src) {
      return null;
    }

    if (item.img.width && item.img.height) {
      return <Image alt={item.img.alt || ''} src={item.img.src} width={item.img.width} height={item.img.height} priority />;
    }

    return (
      <div className="relative w-full sm:w-[200px] md:w-full h-[170px] sm:h-full md:h-[170px]">
        <Image fill alt={item.img.alt || ''} src={item.img.src} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-contain" />
      </div>
    );
  };

  return (
    <ExtendedCard style={cardVariant} padding="md" elevation="lg" className={cn(isBorderedImage ? 'text-center' : 'text-left')}>
      <CardHeader className={cn(isBorderedImage && 'border', '')}>
        <div className="flex items-center gap-2">
          {renderIconOrImage()}
          {!isBorderedImage && <h3 className="text-lg md:text-xl font-semibold font-heading">{item.title}</h3>}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-base text-muted-foreground">{item.description}</p>
      </CardContent>

      <CardFooter className={cn(isBorderedImage && 'justify-center')}>
        <LinkButton href={item.href} text={item.linkText} variant={buttonVariant} />
      </CardFooter>
    </ExtendedCard>
  );
};

export const GenericList = ({ title, subtitle, data, column = DEFAULT_COLUMNS, cardVariant = DEFAULT_CARD_VARIANT, className }: GenericListData) => {
  const gridClasses = getGridClasses(column);
  const hasTitle = title && title !== '';
  const hasSubtitle = subtitle && subtitle !== '';

  return (
    <div className={cn('w-full', className)}>
      {hasTitle && <h2 className="text-2xl font-heading font-medium mb-4 md:mb-8 text-center md:text-left">{title}</h2>}

      {hasSubtitle && <h3 className="text-lg font-heading pb-3 md:pb-6 mb-4 md:mb-8 text-center md:text-left">{subtitle}</h3>}

      <div className={cn('grid', gridClasses, 'gap-4 md:gap-6 items-stretch')}>
        {data.map((item) => (
          <GenericListItem key={item.href || item.title} item={item} cardVariant={cardVariant} />
        ))}
      </div>
    </div>
  );
};
