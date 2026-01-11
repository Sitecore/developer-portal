import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import { useEffect, useState } from "react";

type Link = {
  text: string;
  href: string;
  active: boolean;
};

const useInPageNavigation = (
  titles: Array<ContentHeading>,
  enableHighlight?: boolean,
): Array<Link> => {
  const [links, setLinks] = useState(
    titles.map((text) => ({
      text: text.title,
      href: `#${text.id}`,
      active: false,
    })),
  );

  useEffect(() => {
    if (!enableHighlight) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            setLinks((prevLinks) =>
              prevLinks.map((link) =>
                link.href === `#${id}`
                  ? { ...link, active: true }
                  : { ...link, active: false },
              ),
            );
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -90% 0px",
      },
    );

    titles.forEach((title) => {
      const element = document.getElementById(title.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      titles.forEach((title) => {
        const element = document.getElementById(title.id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [titles, enableHighlight]);

  return links;
};

export default useInPageNavigation;
