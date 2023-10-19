import { PersonaType } from 'ui/components/integrations/engage/PersonaTypes';

export const FrontendSkills = {
  name: 'FrontendSkills',
};

export const BackendSkills = {
  name: 'BackendSkills',
};

export const DesignSkills = {
  name: 'DesignSkills',
};

export const MarketingSkills = {
  name: 'MarketingSkills',
};

export const FredPersona: PersonaType = {
  Name: 'Fred',
  Description: 'The four fingered front end developer',
  CommonAttributes: ['Prefers code examples vs. marketing fluff'],
  ImageUrl: '',
  PersonaKeys: [
    {
      ProfileKey: FrontendSkills,
      value: 10,
    },
    {
      ProfileKey: BackendSkills,
      value: 1,
    },
    {
      ProfileKey: DesignSkills,
      value: 5,
    },
    {
      ProfileKey: MarketingSkills,
      value: 1,
    },
  ],
};

export const SallyPersona: PersonaType = {
  Name: 'Sally',
  Description: 'The super savvy marketer',
  CommonAttributes: ['Prefers marketing fluff vs. code examples'],
  ImageUrl: '',
  PersonaKeys: [
    {
      ProfileKey: FrontendSkills,
      value: 2,
    },
    {
      ProfileKey: BackendSkills,
      value: 1,
    },
    {
      ProfileKey: DesignSkills,
      value: 3,
    },
    {
      ProfileKey: MarketingSkills,
      value: 10,
    },
  ],
};
