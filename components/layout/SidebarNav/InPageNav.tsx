// Lib
import { ContentHeading } from '@/lib/rehype/extractHeadings';
import getSectionId from '@/lib/section-id';
import SidebarNav from '../SidebarNav/SidebarNav';

type InPageNavProps = {
  titles: ContentHeading[];
};

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const links = titles.map((text) => ({
    text: text.title,
    href: `#${text.id}`,
  }));

  return <SidebarNav links={links} title="Table of contents" />;
};

export default InPageNav;
