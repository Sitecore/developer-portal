import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { Info } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Feedback from "./Feedback";

type GithubContributionNoticeProps = {
  pageInfo: PageInfo;
  config: ManifestConfig;
};

const GithubContributionNotice = ({
  pageInfo,
  config,
}: GithubContributionNoticeProps) => {
  const { asPath } = useRouter();

  const URL = `https://developers.sitecore.com${asPath.split("#")[0]}`;
  const fileName = pageInfo.fileName.replace(
    "https://github.com/sitecore/developer-portal/edit/main/data/",
    "",
  );
  const issueLink = `https://github.com/sitecore/developer-portal/issues/new?title=&body=%0A%0A%5BEnter%20feedback%20here%5D%0A%0A%0A---%0A%23%23%23%23%20Document%20Details%0A%0A%E2%9A%A0%20*Do%20not%20edit%20this%20section.%20It%20is%20required%20for%20developer.sitecore.com%20%E2%9E%9F%20GitHub%20issue%20linking.*%0A%0A*%20Page%3A%20%5B${pageInfo.title}%5D(${URL})%0A*%20Source%3A%20%5B${fileName}%5D(${pageInfo.fileName})`;

  if (!pageInfo?.area?.includes("accelerate")) {
    return (
      <div className="flex flex-row justify-end gap-4">
        <Link
          href={pageInfo.fileName}
          className="text-xs font-medium text-muted-foreground hover:underline"
        >
          Edit this page on GitHub
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={issueLink}
                className="text-xs font-medium text-muted-foreground hover:underline"
              >
                Feedback
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Report an issue or provide feedback</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }

  return (
    <Alert variant="default">
      <Info className="h-4 w-4" />
      <div className="flex flex-col items-start">
        <AlertTitle>Have feedback or a recipe suggestion?</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-2">
            <li>
              For recipe suggestions, questions or feedback, please use the{" "}
              <Feedback
                variant={"link"}
                projectId="RCPS"
                issueTypeId="3"
                product={config?.productFeedbackLabel}
              />{" "}
              form.
            </li>
            <li>
              For direct contribution, please{" "}
              <Link href="/contribute" className="text-primary hover:underline">
                create a pull request
              </Link>{" "}
              on the Github repository for review.
            </li>
          </ul>
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default GithubContributionNotice;
