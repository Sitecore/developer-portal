// Global
import { FormControl, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useEngageTracker } from 'ui/components/integrations';

const SearchInput = () => {
  const tracker = useEngageTracker();
  const router = useRouter();
  const [keywords, setKeywords] = useState(router.query['q'] ?? '');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Track search event
    tracker.TrackEvent('SEARCH', { keywords });

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
          placeholder="What are you looking for?"
          autoComplete="off"
          value={keywords}
          onChange={(event) => {
            setKeywords(event.target.value);
          }}
        />
        <InputRightElement width={'200px'}>
          <Text display={{ base: 'none', md: 'flex ' }}>Powered by</Text>
          <Image src="https://developers.sitecore.com/_next/image?url=https%3A%2F%2Fsitecorecontenthub.stylelabs.cloud%2Fapi%2Fpublic%2Fcontent%2F43e414bbc80143e2b21acd0808456e26&w=96&q=75" alt="Sitecore Search logo" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
