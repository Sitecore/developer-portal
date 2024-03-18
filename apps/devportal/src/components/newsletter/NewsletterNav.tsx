import { SidebarNavigationConfig } from '@/src/lib/interfaces/page-info';
import { NewsletterPath } from '@lib/staticPaths';
import { translateDateAsYearMonth } from 'ui/lib/utils/dateUtil';
import { SidebarNavigationItem } from '../../lib/interfaces/page-info';
import SidebarNavigation from '../navigation/SidebarNavigation';

interface NewsletterNavProps {
  paths: NewsletterPath[];
  currentYear: string;
  currentMonth: string;
}

const NewsletterNav = ({ paths, currentYear, currentMonth }: NewsletterNavProps) => {
  const links = paths
    .map((item) => ({
      month: parseInt(item.params.month, 10),
      year: parseInt(item.params.year, 10),
      active: parseInt(currentMonth, 10) == parseInt(item.params.month, 10) && parseInt(currentYear, 10) == parseInt(item.params.year, 10),
      // Set the dates as the 3rd of each month to avoid having to deal with timezones rolling it backwards
      text: translateDateAsYearMonth(`${item.params.year}-${item.params.month}-03`),
      href: `newsletter/${item.params.year}/${item.params.month}`,
    }))
    .sort((a, b) => {
      const yearDiff = b.year - a.year;
      return yearDiff !== 0 ? yearDiff : b.month - a.month;
    });

  const routes: SidebarNavigationItem[] = [];

  links.forEach((link) => {
    routes.push({
      title: link.text,
      path: link.href,
      children: [],
    });
  });

  const config: SidebarNavigationConfig = {
    title: 'Archive',
    description: 'Community newsletters',
    heading: true,
    showRootAsSections: false,
    routes,
    path: '',
  };

  return <SidebarNavigation config={config} />;
};

export default NewsletterNav;
