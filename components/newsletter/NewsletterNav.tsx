// Scripts
import { NewsletterPath } from '@/scripts/static-paths/newletter-static-paths';
// Lib
import { translateDateAsYearMonth } from '@/lib/translate-date';
// Components
import SidebarNav from '../layout/SidebarNav/SidebarNav';

interface NewsletterNavProps {
  paths: NewsletterPath[];
}

const NewsletterNav = ({ paths }: NewsletterNavProps) => {
  const links = paths
    .map((item) => ({
      month: parseInt(item.params.month, 10),
      year: parseInt(item.params.year, 10),
      // Set the dates as the 3rd of each month to avoid having to deal with timezones rolling it backwards
      text: translateDateAsYearMonth(`${item.params.year}-${item.params.month}-03`),
      href: `/newsletter/${item.params.year}/${item.params.month}`,
    }))
    .sort((a, b) => {
      const yearDiff = b.year - a.year;
      return yearDiff !== 0 ? yearDiff : b.month - a.month;
    });
  return <SidebarNav links={links} title="Newsletters" />;
};

export default NewsletterNav;
