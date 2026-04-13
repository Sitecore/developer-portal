"use client";

import { mdiCheck, mdiChevronDown, mdiLanguageMarkdownOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { useState } from "react";
import { toast } from "sonner";
import { ButtonGroup } from "../../ui/button-group";
import {
  OpenIn,
  OpenInChatGPT,
  OpenInClaude,
  OpenInContent,
  OpenInCursor,
  OpenInTrigger,
} from "../../ui/custom/open-in-chat";

export type useWithAIProps = {
  pageInfo: PageInfo;
};

export const useWithAI = ({ pageInfo }: useWithAIProps) => {
  const editUrl = "https://github.com/sitecore/developer-portal/edit";
  const rawUrl =
    "https://raw.githubusercontent.com/Sitecore/developer-portal/refs/heads";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "") ?? "";
  const urltoParse = pageInfo.fileName.replace(editUrl, rawUrl);
  const markdownUrl = `${baseUrl}${encodeURIComponent(urltoParse)}`;
  const sampleQuery = `Read this article ${decodeURIComponent(markdownUrl)} so I can questions about it`;

  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(decodeURIComponent(markdownUrl) || "");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast("Link copied to clipboard");
  };

  return (
    <div className="w-full z-1 xl:block not-prose">
      <ButtonGroup>
        <Button
          variant="outline"
          size="sm"
          onClick={onCopy}
          className="rounded-sm"
        >
          <span className="text-sm">Copy link</span>
          {isCopied ? (
            <Icon path={mdiCheck} size={0.9} />
          ) : (
            <Icon path={mdiLanguageMarkdownOutline} size={0.9} />
          )}
        </Button>
        <OpenIn query={sampleQuery}>
          <OpenInTrigger>
            <Button variant="outline" size="sm" className="rounded-sm">
              Open in <Icon path={mdiChevronDown} size={0.9} />
            </Button>
          </OpenInTrigger>
          <OpenInContent>
            <OpenInChatGPT />
            <OpenInClaude />
            <OpenInCursor />
          </OpenInContent>
        </OpenIn>
      </ButtonGroup>
    </div>
  );
};

export default useWithAI;
