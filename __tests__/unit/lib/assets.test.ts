import ProductLogos, { Product, Variant } from '@lib/assets';
import { describe, expect, it } from 'vitest';

describe('ProductLogos', () => {
  it('should have unique combinations of Product and Variant', () => {
    const uniqueCombinations = new Set<string>();

    ProductLogos.forEach((productImage) => {
      const combination = `${productImage.Product}-${productImage.Variant}`;
      uniqueCombinations.add(combination);
    });

    expect(uniqueCombinations.size).toBe(ProductLogos.length);
  });

  it('should have valid logo and icon file names for each product image', () => {
    ProductLogos.forEach((productImage) => {
      expect(productImage.logoFileName).toMatch(/^logo-.+$/);
      expect(productImage.iconFileName).toMatch(/^mark-.+$/);
    });
  });

  it('should have valid product names for each product image', () => {
    ProductLogos.forEach((productImage) => {
      expect(Product[productImage.Product]).toBeDefined();
    });
  });

  it('should have valid variant values for each product image', () => {
    ProductLogos.forEach((productImage) => {
      expect(Variant[productImage.Variant]).toBeDefined();
    });
  });
});
