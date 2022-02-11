import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';
import { Component } from 'react';

export class MyDocument<P = {}> extends Component<DocumentProps & P> {
  static getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return ctx.defaultGetInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
