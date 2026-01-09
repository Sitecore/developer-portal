'use client';

import { useEffect, useState } from 'react';
import { Button } from '@components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="hidden md:block fixed bottom-[120px] right-4 md:right-[84px] z-[3]">
      <Button onClick={scrollToTop} variant="default" className="gap-2">
        Scroll to top
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
