import { PersonaType, ProductInfoType } from '@scdp/ui/components';
import { Product } from '@scdp/ui/lib';

export interface IExperienceResult {
  persona: string;
  relevant_tags: string[];
  product_details: string;
  recent_searches_summary: string;
}

export interface IPersonalizedExperience {
  persona?: PersonaType | undefined;
  relevant_tags: string[];
  productInfo?: ProductInfoType | undefined;
  product?: Product | undefined;
  recent_searches_summary: string;
}
