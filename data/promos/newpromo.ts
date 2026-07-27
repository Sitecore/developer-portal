import type { PromoCardProps } from "@/src/components/cards/PromoCard";

const data: PromoCardProps = {
  title: "Newsletter archive",
  description:
    "Read earlier editions of the Sitecore for Developers newsletter. ",
  img: {
    src: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/newsletter?v=b6070bd5",
  },
  link: {
    href: "/newsletter",
    text: "Check it out!",
  },
};

export default data;
