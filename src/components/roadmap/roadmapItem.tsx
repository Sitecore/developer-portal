'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@components/ui/badge';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { getBadgeColor } from '@/src/lib/jira';
import { IRoadmapItem, RoadmapProduct } from '@/src/lib/roadmap';
import { getQueryValue } from '@/src/lib/utils/requests';
import { slugify } from '@/src/lib/utils/stringUtil';
import { useRouter } from 'next/router';
import { excludedProducts, getStatusColor } from '../../lib/jira';
import { LinkedHeading } from '../links/LinkedHeading';
import { ImageModal } from '../ui/imageModal';

interface RoadmapItemProps {
  item: IRoadmapItem;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({ item }: RoadmapItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { details } = router.query;
  const selectedItem = getQueryValue(details);
  const images: string[] = item.attachments?.map((attachment) => attachment.url) || [];

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
          <h3 className="text-lg font-heading cursor-pointer hover:underline" onClick={handleClick}>
            {item.title}
          </h3>
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
                        <Link href={`/roadmap/${slugify(label.name)}`} className="hover:underline">
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
              <LinkedHeading id={slugify(item.id.toString())}>{item.title}</LinkedHeading>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <div className="p-4 border rounded-md border-border">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Roadmap Phase:</p>
                <Badge variant="default" className={getBadgeColor(item.roadmapPhase)}>{item.roadmapPhase}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Status:</p>
                <Badge variant="default" className={getStatusColor(item.status)}>{item.status}</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Product(s):</p>
                {item.product?.map((label: RoadmapProduct) => (
                  <Badge key={label.id} variant="default">
                    <Link href={`/roadmap/${slugify(label.name)}`} className="hover:underline">{label.name}</Link>
                  </Badge>
                ))}
              </div>
            </div>

            <article className="prose max-w-none my-4" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
          {item.attachments.length > 0 && (
            <SheetFooter className="flex-col items-start">
              <div className="w-full">
                <hr className="my-4" />
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                  Attachments:
                </p>
                <div className="flex gap-2 h-[100px]">
                  {images.map((url, index) => (
                    <div className="w-[20%] flex-shrink-0" key={index}>
                      <ImageModal key={index} src={url} disableModal={false} border="none" />
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
