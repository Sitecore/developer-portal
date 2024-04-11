import { getLatestNewsletter } from '@/src/lib/newsletter';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

  return null;
}
