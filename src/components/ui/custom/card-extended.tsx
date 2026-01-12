import { cn } from '@/src/lib/util/index';
import * as React from 'react';
import { Card as BaseCard } from '../card';

// Extended style variants - add your new style options here
const extendedStyleVariants = {
  // Original styles from card.tsx: flat, outline, filled
  // Add your new style variants below:
  blurred: 'bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/30',
  glass: 'bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/30',
  borderedImage: 'border-none shadow-none',
} as const;

export type ExtendedStyle = keyof typeof extendedStyleVariants;
export type OriginalStyle = 'flat' | 'outline' | 'filled';

export interface ExtendedCardProps extends Omit<React.ComponentProps<typeof BaseCard>, 'style'> {
  style?: OriginalStyle | ExtendedStyle;
}

/**
 * Extended Card component that adds new style variants without modifying the original Card component.
 *
 * Usage:
 * ```tsx
 * <ExtendedCard
 *   elevation="md"
 *   style="elevated"  // New style variant
 *   padding="lg"
 * >
 *   Content here
 * </ExtendedCard>
 * ```
 */
export function ExtendedCard({ className, style, ...props }: ExtendedCardProps) {
  // Check if it's an extended style variant
  const isExtendedStyle = style && style in extendedStyleVariants;

  // If it's an extended style, apply the extended classes and use a base style
  // Otherwise, pass through the original style prop
  const baseStyle: OriginalStyle | undefined = isExtendedStyle ? 'flat' : (style as OriginalStyle);
  const extendedClasses = isExtendedStyle ? extendedStyleVariants[style as ExtendedStyle] : '';

  return <BaseCard className={cn(extendedClasses, className)} style={baseStyle} {...props} />;
}

// Re-export all other Card components for convenience
export { CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card';
