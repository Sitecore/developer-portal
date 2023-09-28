import { GenericListData, GenericListItem } from 'ui/components/lists/genericList/types';

const content: GenericListItem[] = [
  {
    title: 'Experience Platform',
    description: 'Create connections, drive conversions, and foster loyalty. With customer data, analytics, marketing automation, and more, with the stand alone Sitecore Experience Platform™.',
    href: '/marketing-automation/experience-platform',
    linkText: 'Experience Platform',
    img: {
      src: '/images/platform/experience-platform.svg',
      alt: 'Experience Platform',
      width: 94,
      height: 70,
    },
  },
  {
    title: 'Experience Manager',
    description: 'There’s no experience without content. Sitecore Experience Manager® is a powerful and intuitive CMS for the simplified creation and management of experiences across channels and devices.',
    href: '/content-management/experience-manager',
    linkText: 'Experience Manager',
    img: {
      src: '/images/platform/experience-manager.svg',
      alt: 'Experience Manager',
      width: 120,
      height: 70,
    },
  },
  {
    title: 'Managed Cloud',
    description: 'Sitecore Managed Cloud service actively hosts, monitors, manages, and maintains the installation of Sitecore Experience Platform™ and Sitecore Experience Manager',
    href: '/devops/managed-cloud',
    linkText: 'Managed Cloud',
    img: {
      src: '/images/platform/managed-cloud.svg',
      alt: 'Managed Cloud',
      width: 110,
      height: 70,
    },
  },
];

const communityListData: GenericListData = {
  title: 'All-in-one Sitecore Experience Platform',
  subtitle: 'Deliver personalized experiences by combining customer data, AI, and marketing automation with our Sitecore Experience Platform™',
  data: content,
};

export default communityListData;
