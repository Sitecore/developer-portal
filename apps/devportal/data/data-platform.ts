import { GenericListData, GenericListItem } from 'ui/common/types/genericList';

const content: GenericListItem[] = [
  {
    title: 'Experience Platform',
    description: 'Create connections, drive conversions, and foster loyalty. With customer data, analytics, marketing automation, and more, with the stand alone Sitecore Experience Platform™.',
    href: '/marketing-automation/experience-platform',
    linkText: 'Learn more!',
    img: {
      src: 'https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/newnavigation/products/white/paas-brandmark-sitecore-xp-white.svg?md=20220921T192152Z&la=en&hash=1619E49613784560269E6EDAF415BDC5',
      alt: 'Experience Platform',
    },
  },
  {
    title: 'Experience Manager',
    description: 'There’s no experience without content. Sitecore Experience Manager® is a powerful and intuitive CMS for the simplified creation and management of experiences across channels and devices.',
    href: '/content-management/experience-manager',
    linkText: 'Learn more!',
    img: {
      src: 'https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/newnavigation/products/white/paas-brandmark-sitecore-xm-white.svg?md=20220921T184459Z&la=en&hash=455AB7582A2AF7F6C1E178E8C28C44B7',
      alt: 'Experience Manager',
    },
  },
  {
    title: 'Managed Cloud',
    description: 'Sitecore Managed Cloud service actively hosts, monitors, manages, and maintains the installation of Sitecore Experience Platform™ and Sitecore Experience Manager',
    href: '/devops/managed-cloud',
    linkText: 'Learn more',
    img: {
      src: 'https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/icons/cloud-icons/sitecore-managed-cloud-white2.svg?md=20221017T171003Z&la=en&hash=911AF2ECA4312DE849B46285A0B90FE5',
      alt: 'Managed Cloud',
    },
  },
];

const communityListData: GenericListData = {
  title: 'All-in-one Sitecore Experience Platform',
  subtitle: 'Deliver personalized experiences by combining customer data, AI, and marketing automation with our Sitecore Experience Platform™',
  CssClass: 'platform',
  content,
};

export default communityListData;
