import { PromoCard, type PromoCardProps } from "./PromoCard";

type PromoListProps = {
  data: Array<PromoCardProps> | undefined;
};

export const PromoList = ({ data }: PromoListProps) => {
  if (data && data.length === 0) {
    return (
      <>
        {data.map((promo, i) => (
          <PromoCard
            {...promo}
            key={promo.link?.href || promo.title || i}
            isImageLeft={i % 2 === 0}
          />
        ))}
      </>
    );
  }

  return null;
};

export default PromoList;
