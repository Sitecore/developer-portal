import type { Product } from "@src/lib/changelog/types";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { type FC } from "react";

interface TrackPageViewProps {
  children: React.ReactNode;
  pageInfo?: PageInfo | undefined;
  product?: Product | undefined;
  slug?: string;
}

export const TrackPageView: FC<TrackPageViewProps> = (props) => {
  // Tracking functionality disabled
  return <>{props.children}</>;
};
