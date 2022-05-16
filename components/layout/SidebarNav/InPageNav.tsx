// Lib
import getSectionId from '@/lib/section-id';
import SidebarNav from '../SidebarNav/SidebarNav';

type InPageNavProps = {
  titles: string[];
};

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const links = titles.map((text) => ({
    text,
    href: `#${getSectionId(text)}`,
  }));

  return <SidebarNav links={links} title="Table of contents" />;
};

export default InPageNav;
