// Global
import { Button, FormControl, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ProductLogo } from '@scdp/ui/components';
import { useEngageTracker } from '@scdp/ui/components';
import { Product } from '@scdp/ui/lib';


export interface SearchInputProps {
  showButton?: boolean;
}

const SearchInput = ({ showButton }: SearchInputProps) => {
  const tracker = useEngageTracker();
  const router = useRouter();
  const [keywords, setKeywords] = useState(router.query['q'] ?? '');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Track search event
    tracker.TrackEvent('SEARCH', { keywords });

    router.push('/search?q=' + keywords).then(() => router.reload());
  };

  const inputBox = (
    <InputGroup width={'full'} rounded={'none'}>
      <InputLeftElement>
        <FaSearch />
      </InputLeftElement>
      <Input
        name="scdp-search"
        autoComplete="off"
        value={keywords}
        onChange={(event) => {
          setKeywords(event.target.value);
        }}
      />
      <InputRightElement width={{ base: '100px', md: '150px' }} opacity={'0.5'}>
        <Text as={'span'} display={{ base: 'none', md: 'flex ' }} variant="tiny">
          Powered by
        </Text>

        <ProductLogo product={Product.Search} width={67} height={18} />
      </InputRightElement>
    </InputGroup>
  );

  if (showButton)
    return (
      <FormControl onSubmit={submit} as="form">
        <HStack>
          {inputBox}
          <Button onClick={submit}>Search</Button>
        </HStack>
      </FormControl>
    );

  return (
    <FormControl onSubmit={submit} as="form">
      {inputBox}
    </FormControl>
  );
};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
