type RowProps = {
  children: React.ReactNode | React.ReactNode[];
  columns: number;
};

export const Row = ({ children, columns }: RowProps) => {
  return <div className={`mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-${columns}`}>{children}</div>;
};
