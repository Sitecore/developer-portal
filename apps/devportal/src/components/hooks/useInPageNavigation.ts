import { useEffect, useState } from 'react';
import { ContentHeading } from '../../lib/interfaces/contentheading';

type Link = {
  text: string;
  href: string;
  active: boolean;
};

const useInPageNavigation = (titles: ContentHeading[], enableHighlight?: boolean): Link[] => {
  const [links, setLinks] = useState(
    titles.map((text) => ({
      text: text.title,
      href: `#${text.id}`,
      active: false,
    }))
  );

  if (!enableHighlight) return links;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setLinks((prevLinks) => prevLinks.map((link) => (link.href === `#${id}` ? { ...link, active: true } : { ...link, active: false })));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    titles.forEach((title) => {
      const element = document.getElementById(title.id);
      if (element) observer.observe(element);
    });

    return () => {
      titles.forEach((title) => {
        const element = document.getElementById(title.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [titles]);

  return links;
};

export default useInPageNavigation;
