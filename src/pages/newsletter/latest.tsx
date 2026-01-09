import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Button } from '@components/ui/button';
import { getLatestNewsletter } from '@/src/lib/newsletter';

export async function getStaticProps() {
  const page = await getLatestNewsletter();

  return {
    props: {
      page: page,
    },
  };
}

export default function Latest({ page }: { page: string }) {
  const router = useRouter();

  useEffect(() => {
    if (page) {
      router.push(page);
    }
  }, [page, router]);

  return (
    <div className="h-[calc(100vh-200px)]">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-sm">
          <Image width={128} height={128} src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-map-search" alt="map-search" />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-heading">Newsletter</h1>
            <p className="text-sm text-muted-foreground">You should be redirected to the latest newsletter automatically</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="link" asChild>
              <Link href={page}>Click here if the redirect doesn&apos;t work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
