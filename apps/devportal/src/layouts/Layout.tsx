// Global
import { Alert, AlertDescription, AlertIcon, Box, BoxProps, VisuallyHidden } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Meta from '../components/common/Meta';
import { usePreview } from '../context/PreviewContext';

type LayoutProps = BoxProps & {
  title: string;
  description?: string;
  openGraphImage?: string;
  preview?: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ title, description = '', openGraphImage, children, ...rest }: LayoutProps) => {
  const { isPreview } = usePreview();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Meta title={title} description={description} openGraphImage={openGraphImage} />

      <Box as="main" {...rest}>
        <VisuallyHidden>
          <a href="#main-content">Skip to main content</a>
        </VisuallyHidden>
        {/* a11y announcement for route changes. */}
        <VisuallyHidden aria-live="polite" aria-atomic="true">{`The ${title} page has loaded.`}</VisuallyHidden>
        {isPreview && (
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>Preview mode enabled</AlertDescription>
          </Alert>
        )}
        {children}
      </Box>
    </>
  );
};

export default Layout;
