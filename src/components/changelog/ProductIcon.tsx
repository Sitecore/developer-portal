"use client";

import { getSlug } from '@/src/lib/util/stringUtil';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@src/components/ui/tooltip';
import type { SitecoreProduct } from '@src/lib/changelog/types';
import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from 'next/link';

type ProductIconProps = {
  product: SitecoreProduct;
};

export const ProductIcon = ({ product }: ProductIconProps) => {
  const { theme } = useTheme();
  const iconSrc = theme === 'dark' ? product.darkIcon : product.lightIcon;

  try {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={`/changelog/${getSlug(product.productName)}`} className="flex items-center gap-2 hover:underline">
              <Image src={iconSrc} alt={product.productName} width={20} height={20} priority />
              <span className="text-base">{product.productName}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go to the {product.productName} changelog page</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
