import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { cn } from '@lib/utils';

export interface PromoCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkText: string;
  badge?: string;
  variant?: 'default' | 'featured' | 'event';
  compact?: boolean; // NEW: Add compact mode
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  image,
  link,
  linkText,
  badge,
  variant = 'default',
  compact = false // NEW: Default to false
}) => {
  const isExternal = link.startsWith('http');

  return (
    <div
      className={cn(
        'bg-white/90 dark:bg-background/90 backdrop-blur-md rounded-lg overflow-hidden',
        compact ? 'shadow-md hover:shadow-lg' : 'shadow-xl hover:shadow-2xl',
        'transition-all duration-300 h-full flex flex-col',
        compact ? 'hover:-translate-y-0.5' : 'hover:-translate-y-1'
      )}
    >
      {/* Image Section */}
      {image && (
        <div className={cn('relative overflow-hidden', compact ? 'h-40' : 'h-50')}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {badge && (
            <div
              className={cn(
                'absolute top-2 right-2 md:top-4 md:right-4',
                'bg-primary text-white rounded-full font-bold',
                compact ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
              )}
            >
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={cn('flex flex-col flex-1', compact ? 'p-4' : 'p-6')}>
        <h3 className={cn('font-heading mb-2 md:mb-3 text-gray-900 dark:text-foreground', compact ? 'text-sm' : 'text-base')}>
          {title}
        </h3>
        
        <p 
          className={cn(
            'text-gray-700 dark:text-muted-foreground mb-4 md:mb-6 flex-1',
            compact ? 'text-sm' : 'text-base',
            compact ? 'line-clamp-3' : '',
            'hidden md:block'
          )}
        >
          {description}
        </p>

        {/* CTA Button */}
        {isExternal ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:no-underline">
            <Button
              size={compact ? 'default' : 'lg'}
              className="w-full"
              variant={variant === 'featured' ? 'default' : 'outline'}
            >
              {linkText}
            </Button>
          </Link>
        ) : (
          <Link href={link} className="hover:no-underline">
            <Button
              size={compact ? 'default' : 'lg'}
              className="w-full"
              variant={variant === 'featured' ? 'default' : 'outline'}
            >
              {linkText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PromoCard;