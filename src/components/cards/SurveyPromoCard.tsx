import { cn } from "@/src/lib/util";
import type { PromoCardProps } from "@src/components/cards/PromoCard";
import { LinkButton } from "@src/components/links";
import { Card, CardContent } from "@src/components/ui/card";
import Image from "next/image";

// Homepage-only rendering of the survey promo data, kept separate from the shared PromoCard component.
export const SurveyPromoCard = ({
  title,
  description,
  img,
  link,
  className,
}: PromoCardProps) => (
  <div className="flex justify-center">
    <Card
      style="outline"
      elevation="xs"
      className={cn("overflow-hidden max-w-3xl p-0!", className)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[310px] h-40 md:h-auto">
          <Image
            src={img.src}
            alt={img.alt || ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 310px"
          />
        </div>
        <CardContent className="flex flex-col justify-center items-start gap-2 p-5 md:p-6">
          <div>
            <h4 className="text-lg font-heading mb-1">{title}</h4>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          {link && (
            <LinkButton href={link.href} text={link.text} target="_blank" />
          )}
        </CardContent>
      </div>
    </Card>
  </div>
);
