import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button, Hide } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Hide below="md">
      {isVisible && (
        <Box onClick={scrollToTop} position="fixed" bottom="120px" right={['16px', '84px']} zIndex={3}>
          <Button rightIcon={<ArrowUpIcon />} colorScheme="neutral" variant="solid">
            Scroll to top
          </Button>
        </Box>
      )}
    </Hide>
  );
}
