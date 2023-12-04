// Global
import { FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductLogo from 'ui/components/common/ProductLogo';
import { Product } from 'ui/lib/assets';

const SearchInput = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState(router.query['q'] ?? '');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push('/search?q=' + keywords).then(() => router.reload());
  };

  return (
    <FormControl onSubmit={submit} as="form">
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
    </FormControl>
  );
};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
