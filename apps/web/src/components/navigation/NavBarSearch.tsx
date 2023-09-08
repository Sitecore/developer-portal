import { Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const NavBarSearch = (): JSX.Element => {
  {
    /* Search menu */
  }
  return (
    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} padding={3} paddingX={'2rem'} position={'static'} background={'chakra-body-bg'} shadow={'md'}>
      <Flex display={{ base: 'flex', md: 'flex' }} justify={'flex-center'} boxSize={'100%'} maxWidth="6xl">
        <InputGroup size="md" width={'full'} rounded={'none'}>
          <InputLeftElement>
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="What are you looking for?" />
          <InputRightElement width={'200px'}>
            <Text display={{ base: 'none', sm: 'flex ' }}>Powered by</Text>
            <Image src="https://developers.sitecore.com/_next/image?url=https%3A%2F%2Fsitecorecontenthub.stylelabs.cloud%2Fapi%2Fpublic%2Fcontent%2F43e414bbc80143e2b21acd0808456e26&w=96&q=75" opacity={0.5} alt="Sitecore Search logo" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};
export default NavBarSearch;
