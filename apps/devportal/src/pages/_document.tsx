/* eslint-disable react/no-unknown-property */
import { VisuallyHidden } from '@chakra-ui/react';
import { DocumentContext, DocumentInitialProps, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export class MyDocument<P = {}> extends Component<DocumentProps & P> {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return ctx.defaultGetInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" style={{ height: '100%' }}>
        <Head />
        <body style={{ scrollMarginTop: '9em' }}>
          <Main />
          <NextScript />
          <VisuallyHidden>
            <svg className="hidden">
              <symbol id="link-icon" fill="currentColor">
                <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z" />
              </symbol>
            </svg>
          </VisuallyHidden>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
