'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';

type ImageModalProps = {
  src: string;
  title?: string;
  maxW?: string;
  disableModal?: boolean;
  border?: string;
};

export const ImageModal = ({ src, title, maxW, disableModal, border = '1px' }: ImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (disableModal) {
    return (
      <div className={cn('p-4 my-8 w-fit border rounded-lg', border === '0' ? 'border-0' : 'border-border')}>
        <Image src={src} alt={title || ''} width={800} height={600} className={cn('max-w-full', maxW)} />
      </div>
    );
  }

  return (
    <>
      <div className={cn('p-4 my-8 w-fit border rounded-lg', border === '0' ? 'border-0' : 'border-border')}>
        <div
          className="cursor-zoom-in"
          onClick={() => setIsOpen(true)}
          title="Click to enlarge"
          aria-label="Click to enlarge"
        >
          <Image
            src={src}
            alt={title || ''}
            width={800}
            height={600}
            className={cn('max-w-full md:max-w-full', maxW && `md:max-w-[${maxW}]`)}
          />
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {title && <DialogDescription>Click outside to close</DialogDescription>}
          </DialogHeader>
          <div className="flex items-center justify-center overflow-auto">
            <Image src={src} alt={title || ''} width={1200} height={900} className="max-w-full max-h-[70vh] object-contain" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageModal;
