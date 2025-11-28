import { Box, Button, Link as ChakraLink, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export interface PromoCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  linkText: string;
  badge?: string;
  variant?: 'default' | 'featured' | 'event';
  compact?: boolean; // NEW: Add compact mode
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  image,
  link,
  linkText,
  badge,
  variant = 'default',
  compact = false // NEW: Default to false
}) => {
  const isExternal = link.startsWith('http');

  return (
    <Box
      bg="whiteAlpha.900"
      backdropFilter="blur(10px)"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={compact ? 'md' : 'xl'} // Smaller shadow in compact mode
      transition="all 0.3s"
      _hover={{
        transform: compact ? 'translateY(-2px)' : 'translateY(-4px)', // Less movement in compact
        boxShadow: compact ? 'lg' : '2xl',
      }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Image Section */}
      {image && (
        <Box position="relative" height={compact ? "160px" : "200px"} overflow="hidden">
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
          />
          {badge && (
            <Box
              position="absolute"
              top={compact ? 2 : 4}
              right={compact ? 2 : 4}
              bg="primary.500"
              color="white"
              px={compact ? 2 : 3}
              py={compact ? 0.5 : 1}
              borderRadius="full"
              fontSize={compact ? 'xs' : 'sm'}
              fontWeight="bold"
            >
              {badge}
            </Box>
          )}
        </Box>
      )}

      {/* Content Section */}
      <Flex direction="column" p={compact ? 4 : 6} flex="1">
        <Heading as="h3" size={compact ? 'sm' : 'md'} mb={compact ? 2 : 3} color="gray.900">
          {title}
        </Heading>
        
        <Text 
          color="gray.700" 
          mb={compact ? 4 : 6} 
          flex="1" 
          fontSize={compact ? 'sm' : 'md'}
          noOfLines={compact ? 3 : undefined} 
          display={{ base: 'none', md: 'block' }}

        >
          {description}
        </Text>

        {/* CTA Button */}
        {isExternal ? (
          <ChakraLink href={link} isExternal _hover={{ textDecoration: 'none' }}>
            <Button
              colorScheme="primary"
              size={compact ? 'md' : 'lg'}
              width="full"
              variant={variant === 'featured' ? 'solid' : 'outline'}
            >
              {linkText}
            </Button>
          </ChakraLink>
        ) : (
          <Link href={link} passHref legacyBehavior>
            <ChakraLink _hover={{ textDecoration: 'none' }}>
              <Button
                colorScheme="primary"
                size={compact ? 'md' : 'lg'}
                width="full"
                variant={variant === 'featured' ? 'solid' : 'outline'}
              >
                {linkText}
              </Button>
            </ChakraLink>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default PromoCard;