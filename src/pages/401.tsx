import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/button';
import Layout from '../layouts/Layout';

export default function Custom401() {
  const router = useRouter();
  const file: string = (router?.query['file'] as string) ?? '';

  return (
    <Layout title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'}>
      <div className="h-[calc(100vh-215px)]">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center text-center gap-6 max-w-lg">
            <Image
              width={128}
              height={128}
              src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-stop"
              alt="stop"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-heading">Unauthorized</h1>
              <p className="text-sm text-muted-foreground">Error 401</p>
            </div>
            <div className="flex flex-col gap-2 max-w-lg">
              <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0">
                To access this page, please use your Sitecore ID (Okta)
              </h2>
            </div>
            <div className="flex">
              <Button variant="link" onClick={() => signIn('okta', { callbackUrl: file != null ? `/api/download?file=${file}` : '/downloads' })}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
