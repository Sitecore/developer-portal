import { cn } from "@/src/lib/util";
import { CenteredContent } from "@src/components/ui/sections";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@src/components/ui/sidebar";
import type { CSSProperties, HTMLAttributes } from "react";

type ThreeColumnLayoutProps = HTMLAttributes<HTMLDivElement> & {
  sidebar: React.ReactNode;
  inPageNav?: React.ReactNode | null;
  children: React.ReactNode;
  background?: string;
};

export const ThreeColumnLayout = ({
  sidebar,
  inPageNav,
  children,
  background,
  ...rest
}: ThreeColumnLayoutProps) => {
  const hasLeftSidebar = Boolean(sidebar);
  const hasRightSidebar = Boolean(inPageNav);

  return (
    <div className={cn("w-full", background)} {...rest}>
      <SidebarProvider
        mobileBreakpoint={1024}
        className="w-full min-h-0 bg-white dark:bg-subtle-bg"
        style={
          {
            "--sidebar-width": "20rem",
          } as CSSProperties
        }
      >
        {hasLeftSidebar && (
          <ShadcnSidebar side="left" collapsible="offcanvas" className="z-20">
            <SidebarContent className="bg-muted p-5 h-full">
              {sidebar}
            </SidebarContent>
          </ShadcnSidebar>
        )}

        <div className="relative flex w-full flex-1 flex-col">
          {hasLeftSidebar && (
            <div className="flex justify-start px-4 pt-2 lg:hidden">
              <SidebarTrigger aria-label="Open section navigation" />
            </div>
          )}

          <SidebarProvider
            mobileBreakpoint={1280}
            enableKeyboardShortcut={false}
            className={cn(
              "w-full min-h-0",
              hasLeftSidebar && !hasRightSidebar && "xl:pr-72",
              !hasLeftSidebar && hasRightSidebar && "xl:pl-72",
            )}
            style={
              {
                "--sidebar-width": "18rem",
              } as CSSProperties
            }
          >
            <SidebarInset className="">
              <main className="w-full max-w-7xl mx-auto min-h-[calc(100vh-430px)] px-2 2xl:px-0">
                {hasRightSidebar && (
                  <div className="mb-2 flex justify-end xl:hidden">
                    <SidebarTrigger
                      aria-label="Open table of contents"
                      className="[&_svg]:rotate-180"
                    />
                  </div>
                )}
                <CenteredContent>{children}</CenteredContent>
              </main>
            </SidebarInset>

            {hasRightSidebar && (
              <ShadcnSidebar
                side="right"
                collapsible="offcanvas"
                className="z-20"
              >
                <SidebarContent className="p-5 h-full">
                  {inPageNav}
                </SidebarContent>
              </ShadcnSidebar>
            )}
          </SidebarProvider>
        </div>
      </SidebarProvider>
    </div>
  );
};
