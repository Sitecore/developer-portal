import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertIcon, AlertTitle, Tooltip } from '@chakra-ui/react';
import { getSlug } from '@lib/utils';
import Link from 'next/link';
type HintProps = {
  products?: Array<Option>;
  enabled: boolean;
};

export const Hint = ({ products, enabled }: HintProps): JSX.Element => {
  if (!enabled || products == undefined) {
    return <></>;
  }

  return (
    <Alert status="info" colorScheme="neutral" alignItems="center" my={4}>
      <AlertIcon />
      <AlertTitle>
        <Tooltip label={`Visit the ${products[0].label} changelog page`} aria-label="A tooltip">
          <Link href={`/changelog/${getSlug(products[0].label)}`}>Did you know that {products[0].label} has its own changelog page?</Link>
        </Tooltip>
      </AlertTitle>
    </Alert>
  );
};
