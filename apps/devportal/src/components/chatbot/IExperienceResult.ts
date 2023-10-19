import { PersonaType } from 'ui/components/integrations/engage/PersonaTypes';

export interface IExperienceResult {
  persona: PersonaType;
  relevant_tags: string[];
  recent_products: { product: string; cloud: string };
  recent_search_context: string;
}
