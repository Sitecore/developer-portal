export const Loading = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
