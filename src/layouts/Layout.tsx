// Global
import { Alert, AlertDescription, AlertIcon, Box, BoxProps, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';

import ScrollToTop from '../components/navigation/ScrollToTop';
import { usePreview } from '../context/PreviewContext';
import Meta from './Meta';

type LayoutProps = BoxProps & {
  title: string;
  baseTitle?: string;
  section?: string;
  description?: string;
  twitterDescription?: string;
  openGraphImage?: string;
  preview?: boolean;
  children: React.ReactNode | Array<React.ReactNode>;
};

const Layout = ({ title, description = '', openGraphImage, baseTitle, section, children, ...rest }: LayoutProps) => {
  const { isPreview } = usePreview();

  return (
    <Box as="main" {...rest}>
      <Meta title={title} description={description} baseTitle={baseTitle} section={section} openGraphImageUrl={openGraphImage} />
      <VisuallyHidden>
        <a href="#main-content">Skip to main content</a>
      </VisuallyHidden>
      {/* a11y announcement for route changes. */}
      <VisuallyHidden aria-live="polite" aria-atomic="true">{`The ${title} page has loaded.`}</VisuallyHidden>
      <ScrollToTop />
      {isPreview && (
        <Alert status="warning">
          <AlertIcon />
          <AlertDescription>Preview mode enabled</AlertDescription>
        </Alert>
      )}
      {children}
    </Box>
  );
};

export default Layout;
