import { PromoCard } from './PromoCard';
import { PromoCardProps } from './types';

type PromoListProps = {
  data: PromoCardProps[] | undefined;
};

const PromoList = ({ data }: PromoListProps): JSX.Element | null => {
  if (data && data.length === 0) {
    return (
      <>
        {data.map((promo, i) => (
          <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
        ))}
      </>
    );
  }
  return null;
};

export default PromoList;
