// Nested component
export type TabItemProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

export const TabItem = ({ title, children }: TabItemProps) => {
  return (
    <div>
      {title}: {children}
    </div>
  );
};

export default TabItem;
