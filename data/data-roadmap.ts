export type roadmapCategory = {
  title?: string;
  items: roadmapProductArea[];
};
export type roadmapProductArea = {
  key: string;
  title: string;
  caption: string;
};

export const presence: roadmapCategory = {
  title: 'Expand your presence',
  items: [
    {
      key: 'scrunch',
      title: 'Scrunch in SitecoreAI',
      caption: 'AI search monitoring, competitive visibility, content gap insights, and agent-ready optimization. Know exactly where your brand wins, loses, and goes missing in AI answers.',
    },
  ],
};

export const sitecoreai: roadmapCategory = {
  title: '',
  items: [
    {
      key: 'sitecoreai-cms',
      title: 'Sitecore AI Platform',
      caption: 'Create, manage, and publish digital experiences faster with a CMS designed for high-volume, multi-brand, multi-region, and omnichannel delivery.',
    },
  ],
};

export const operations: roadmapCategory = {
  title: 'Run your operations',
  items: [
    {
      key: 'sitecoreai-dam',
      title: 'SitecoreAI DAM',
      caption: 'End-to-end content operations, workflow automation, and governance. One governed system where content, data, approvals, and workflows are connected and every asset is structured for humans and AI.',
    },
  ],
};

export const outcomes: roadmapCategory = {
  title: 'Drive your outcomes',
  items: [
    {
      key: 'sitecoreai-cms',
      title: 'Sitecore AI Platform',
      caption: 'Create, manage, and publish digital experiences faster with a CMS designed for high-volume, multi-brand, multi-region, and omnichannel delivery.',
    },
    {
      key: 'sitecoreai-conversion-optimization',
      title: 'Sitecore AI Conversion Optimization',
      caption: 'Run personalization, testing, and search together to helps teams act on insight faster and refine experiences in real time.',
    },
  ],
};

// {
//   key: 'content-operations',
//   title: 'Content Operations',
//   caption: 'Plan, brief, create and approve in one workflow, with agents drafting, tagging and routing work under human review.'
//  },

export const studio: roadmapCategory = {
  items: [
    {
      key: 'sitecoreai-agentic-studio',
      title: 'Agentic Studio',
      caption: 'Build custom agents and workflows tailored to your exact operations. Embed your processes and IP into agents that handle your unique work.',
    },
    {
      key: 'marketplace',
      title: 'Marketplace',
      caption: 'Pre-built connectors, integrations, and AI agents that supercharge your SitecoreAI experience. Accredited, plug-and-play extensions built by Sitecore and partners.',
    },
  ],
};

export const across: roadmapCategory = {
  title: 'Across Sitecore AI',
  items: [
    {
      key: 'platform',
      title: 'Across SitecoreAI',
      caption: 'Unified data layer connecting content, customer signals, and campaigns. Infrastructure, governance, and APIs that enable seamless orchestration of how marketing works across the entire platform.',
    },
  ],
};

export const xmxp: roadmapCategory = {
  items: [
    {
      key: 'xm-xp',
      title: 'Sitecore XM & XP',
      caption: 'Create standout websites and digital experiences with an all-in-one composable platform. Designed for high-volume, multi-brand, and omnichannel delivery at enterprise scale.',
    },
  ],
};
