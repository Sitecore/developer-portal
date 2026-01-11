"use client";

import { LinkedHeading } from "@src/components/links/LinkedHeading";
import { Badge } from "@src/components/ui/badge";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import { ImageModal } from "@src/components/ui/imageModal";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@src/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import { excludedProducts, getBadgeColor, getStatusColor } from "@src/lib/jira";
import type { IRoadmapItem, RoadmapProduct } from "@src/lib/roadmap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getQueryValue } from "@/src/lib/util/requests";
import { slugify } from "@/src/lib/util/stringUtil";

interface RoadmapItemProps {
  item: IRoadmapItem;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({
  item,
}: RoadmapItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { details } = router.query;
  const selectedItem = getQueryValue(details);
  const images: string[] =
    item.attachments?.map((attachment) => attachment.url) || [];

  useEffect(() => {
    if (selectedItem.toLowerCase() === item.id.toString()) {
      setIsOpen(true);
    }
  }, [selectedItem, item.id]);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Card className="border shadow-md">
        <CardHeader>
          <button
            type="button"
            className="text-lg font-heading cursor-pointer hover:underline text-left w-full"
            onClick={handleClick}
          >
            {item.title}
          </button>
        </CardHeader>
        <CardContent className="hidden sm:block">
          <div className="flex flex-wrap gap-2 mb-4">
            {item.product?.map((label: RoadmapProduct) => (
              <Badge key={label.id} variant="default">
                {excludedProducts.includes(label.name) ? (
                  label.name
                ) : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={`/roadmap/${slugify(label.name)}`}
                          className="hover:underline"
                        >
                          {label.name}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Go to the roadmap page for {label.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-2xl">
          <SheetHeader>
            <SheetTitle>
              <LinkedHeading id={slugify(item.id.toString())}>
                {item.title}
              </LinkedHeading>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <div className="p-4 border rounded-md border-border">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Roadmap Phase:
                </p>
                <Badge
                  variant="default"
                  className={getBadgeColor(item.roadmapPhase)}
                >
                  {item.roadmapPhase}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Status:
                </p>
                <Badge
                  variant="default"
                  className={getStatusColor(item.status)}
                >
                  {item.status}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Product(s):
                </p>
                {item.product?.map((label: RoadmapProduct) => (
                  <Badge key={label.id} variant="default">
                    <Link
                      href={`/roadmap/${slugify(label.name)}`}
                      className="hover:underline"
                    >
                      {label.name}
                    </Link>
                  </Badge>
                ))}
              </div>
            </div>

            <article
              className="prose max-w-none my-4"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
          {item.attachments.length > 0 && (
            <SheetFooter className="flex-col items-start">
              <div className="w-full">
                <hr className="my-4" />
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Attachments:
                </p>
                <div className="flex gap-2 h-[100px]">
                  {images.map((url) => (
                    <div className="w-[20%] flex-shrink-0" key={url}>
                      <ImageModal
                        src={url}
                        disableModal={false}
                        border="none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
