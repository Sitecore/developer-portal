import { Presence } from '@sitecore-search/ui';

const Loader = ({ enabled = true }: { enabled?: boolean }): JSX.Element => (
  <div className="flex justify-center items-center h-full mb-10">
    <Presence present={enabled}>
      <svg aria-busy={enabled} aria-hidden={!enabled} focusable="false" role="progressbar" viewBox="0 0 20 20" className="m-auto block h-7 w-7 animate-spin">
        <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
      </svg>
    </Presence>
  </div>
);

export default Loader;
