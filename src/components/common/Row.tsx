type RowProps = {
  children: React.ReactNode | React.ReactNode[];
  columns: number;
};

export const Row = ({ children, columns }: RowProps) => {
  return (
    <div className={`grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`}>
      {children}
    </div>
  );
};
