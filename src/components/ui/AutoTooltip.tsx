import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link as ChakraLink, CloseButton, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// ============================================
// AUTO TOOLTIP - White with Colored Header
// ============================================

interface AutoTooltipProps {
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  isExternal?: boolean;
  delay?: number;
  onClose?: () => void;
  storageKey?: string; // NEW: Allow custom storage key
}

export const AutoTooltip: React.FC<AutoTooltipProps> = ({
  title,
  description,
  linkHref,
  linkText,
  isExternal = false,
  delay = 1000,
  onClose,
  storageKey = 'autoTooltipShown' // NEW: Default storage key
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if tooltip has already been shown in this session
    const hasShown = sessionStorage.getItem(storageKey);
    
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mark as shown
      sessionStorage.setItem(storageKey, 'true');
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, storageKey]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom={4}
      right={4}
      bg="white"
      borderRadius="lg"
      boxShadow="2xl"
      maxW="320px"
      zIndex={9999}
      overflow="hidden"
      animation="slideIn 0.3s ease-out"
      sx={{
        '@keyframes slideIn': {
          from: {
            transform: 'translateX(100%)',
            opacity: 0
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1
          }
        }
      }}
    >
      {/* Colored Header */}
      <Flex 
        justify="space-between" 
        align="center" 
        p={3} 
        bg="primary.500" 
        color="white"
      >
        <Heading as="h4" size="xs" color="white">
          {title}
        </Heading>
        <CloseButton 
          size="sm" 
          onClick={handleClose}
          color="whiteAlpha.800"
          _hover={{ color: 'white' }}
        />
      </Flex>
      
      {/* White Body */}
      <Box p={4}>
        <Text fontSize="xs" color="gray.700" mb={3}>
          {description}
        </Text>
        
        <ChakraLink
          href={linkHref}
          isExternal={isExternal}
          fontSize="xs"
          color="primary.600"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={1}
          _hover={{ color: 'primary.700', textDecoration: 'underline' }}
        >
          {linkText}
          {isExternal && <ExternalLinkIcon boxSize={3} />}
          {!isExternal && ' →'}
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default AutoTooltip;