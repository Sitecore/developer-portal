import { ProductInfoType } from 'ui/components/hexagons/HexagonTypes';
import { PersonaType } from 'ui/components/integrations/engage/PersonaTypes';
import { Product } from 'ui/lib/assets';

export interface IExperienceResult {
  persona: string;
  relevant_tags: string[];
  product_details: string;
  recent_search_summary: string;
}

export interface IPersonalizedExperience {
  persona?: PersonaType | undefined;
  relevant_tags: string[];
  productInfo?: ProductInfoType | undefined;
  product?: Product | undefined;
  recent_search_summary: string;
}
