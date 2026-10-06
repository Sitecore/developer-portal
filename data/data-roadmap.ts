export type roadmapCategory = {
  title: string;
  items: roadmapProductArea[];
}
export type roadmapProductArea = {
  key: string;
  title: string;
  caption: string;
};


export const presence: roadmapCategory = {
  title: "Expand your presence",
  items: [
  { 
  key: 'scrunch',
  title: 'Scrunch',
  caption: 'See how AI answer engines represent your brand. where competitors are winning, and send fixes into your publishing workflow.'
 }
  ]
};

  
export const operations: roadmapCategory = {
  title: "Run your operations",
  items: [
  { 
  key: 'sitecoreai-cms',
  title: 'Sitecore AI CMS',
  caption: 'Create, manage, and publish digital experiences faster with a CMS designed for high-volume, multi-brand, multi-region, and omnichannel delivery.'
 },
{ 
  key: 'content-operations',
  title: 'Content Operations',
  caption: 'Plan, brief, create and approve in one workflow, with agents drafting, tagging and routing work under human review.'
 },

 { 
  key: 'sitecoreai-conversion-optimization',
  title: 'Sitecore AI Conversion Optimization',
  caption: 'Run personalization, testing, and search together to helps teams act on insight faster and refine experiences in real time.'
 },
{ 
  key: 'sitecoreai-dam',
  title: 'Sitecore AI DAM',
  caption: 'Organize, find and reuse approved assets from one governed source.'
 }
  ]
};

export const studio: roadmapCategory = {
  title: "Sitecore Studio",
  items: [
  { 
  key: 'sitecoreai-agentic-studio',
  title: 'Sitecore AI Agentic Studio',
  caption: 'Agents that draft, tag, translate and optimize inside your workflows, with clear guardrails on what people approve'
 },
{ 
  key: 'marketplace',
  title: 'Marketplace',
  caption: 'Marketplace delivers accredited, plug-and-play apps, connectors integrations, and AI agents that supercharge your Sitecore experience. '
  }
  ]
};

export const across: roadmapCategory = {
  title: "Across Sitecore AI",
  items: [
{ 
  key: 'platform',
  title: 'Platform',
  caption: 'Features that span across the Sitecore AI ecosystem, enabling seamless integration and enhanced capabilities.'
  },
  ]
};

export const xmxp: roadmapCategory = {
  title: "XM & XP",
  items: [
{ 
  key: 'xm-xp',
  title: 'Sitecore XM & XP',
  caption: 'Create standout websites and digital experiences with an all-in-one experience platform.'
  }
  ]
};