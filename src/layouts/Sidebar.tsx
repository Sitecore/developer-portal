import { cn } from "@/src/lib/util";

interface SidebarProps {
  showBackground?: boolean;
  children: React.ReactNode;
  className?: string;
  hideBelow?: string;
}

export const Sidebar = ({
  children,
  showBackground = false,
  className,
  hideBelow = "lg",
  ...rest
}: SidebarProps) => {
  return (
    <aside
      className={cn(
        "w-full md:w-80 sm:w-full",
        hideBelow === "lg" && "hidden lg:block",
        "order-[-1] md:order-0",
        showBackground && children && "bg-muted",
        "p-5",
        className,
      )}
      {...rest}
    >
      {children && (
        <div className={cn("flex flex-col gap-8", showBackground && "h-auto")}>
          {children}
        </div>
      )}
    </aside>
  );
};
