"use client";

import { Button } from "@src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@src/components/ui/dialog";
import ProductIcon from "@src/components/ui/logos/ProductIcon";
import { Product, Variant } from "@src/lib/assets";
import { useState } from "react";
import { cn } from "@/src/lib/util";

type GuidedDemoProps = {
  demoId: string;
  linkText?: string;
  productName: string;
  productLogo?: string;
  className?: string;
};

export const GuidedDemo = ({
  demoId,
  linkText,
  productName,
  productLogo,
  className,
}: GuidedDemoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const product: Product = Product[productLogo as keyof typeof Product];

  return (
    <div className={cn("w-1/4", className)}>
      <Button onClick={() => setIsOpen(true)} className="mt-4">
        {linkText ?? "Launch guided tour"}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] bg-transparent shadow-lg border-0 p-0">
          <div className="bg-primary dark:bg-gray-700 text-white rounded-t-3xl shadow-lg p-6">
            <DialogHeader>
              <div className="flex items-center">
                {productLogo && (
                  <ProductIcon product={product} variant={Variant.Dark} />
                )}
                <DialogTitle className="ml-2 text-white">
                  Guided tour: {productName}
                </DialogTitle>
              </div>
            </DialogHeader>
          </div>
          <div className="bg-background p-0">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <iframe
                src={`https://capture.navattic.com/${demoId}`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="Interactive demo"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
