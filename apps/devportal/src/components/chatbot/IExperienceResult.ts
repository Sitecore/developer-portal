import { ProductInfoType } from 'ui/components/hexagons/HexagonTypes';
import { PersonaType } from 'ui/components/integrations/engage/PersonaTypes';

export interface IExperienceResult {
  persona: string;
  relevant_tags: string[];
  product_details: { Product: string; Cloud: string };
  recent_search_summary: string;
}

export interface IPersonalizedExperience {
  persona?: PersonaType | undefined;
  relevant_tags: string[];
  product?: ProductInfoType | undefined;
  recent_search_summary: string;
}
