import InPageNavSmall from '@components/navigation/InPageNavSmall';
import { CenteredContent } from '@components/ui/sections';
import { ContentHeading } from '../lib/interfaces/contentheading';
import { Sidebar } from './Sidebar';
import { cn } from '@lib/utils';

type ThreeColumnLayoutProps = {
  sidebar: React.ReactNode;
  inPageNav?: React.ReactNode | null;
  inPageLinks?: Array<ContentHeading>;
  children: React.ReactNode;
  background?: string;
};

export const ThreeColumnLayout = ({ sidebar, inPageNav, inPageLinks, children, background, ...rest }: ThreeColumnLayoutProps) => {
  return (
    <div className={cn('flex flex-grow-0 justify-between w-full gap-0 flex-col md:flex-row', background)} {...rest}>
      <Sidebar showBackground>{sidebar}</Sidebar>

      <main className="w-full max-w-6xl min-h-[calc(100vh-430px)] px-4 md:px-0">
        {inPageLinks && <InPageNavSmall hideFrom="xl" titles={inPageLinks} />}
        <CenteredContent>{children}</CenteredContent>
      </main>

      <Sidebar>{inPageNav}</Sidebar>
    </div>
  );
};
