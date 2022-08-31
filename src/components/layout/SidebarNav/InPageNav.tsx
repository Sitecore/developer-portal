// Lib
import { ContentHeading } from '@/src/lib/rehype/extractHeadings';
import SidebarNav from './SidebarNav';

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
