import { getSlug } from '@/../../packages/sc-changelog/utils/stringUtils';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import Link from 'next/link';
import { Option } from 'ui/components/dropdown/MultiSelect';

type HintProps = {
  products?: Option[];
  enabled: boolean;
};

export const Hint = ({ products, enabled }: HintProps): JSX.Element => {
  if (!enabled || products == undefined) return <></>;

  return (
    <Alert status="info" colorScheme="neutral">
      <AlertIcon />
      <AlertTitle>Did you know that {products[0].label} has its own changelog page?</AlertTitle>
      <AlertDescription>
        <Link href={`/changelog/${getSlug(products[0].label)}`}>Click here tot visit</Link>
      </AlertDescription>
    </Alert>
  );
};
