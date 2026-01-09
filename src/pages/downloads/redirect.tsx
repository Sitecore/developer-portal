import Link from 'next/link';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../layouts/Layout';
import { isAuthenticatedCloudPortalUser, isAuthenticatedOktaUser } from '../../lib/auth/verify';

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { file, redirect = '/' } = router.query;

  const [downloadUrl, setDownloadUrl] = useState<string>('');

  if (isAuthenticatedCloudPortalUser(session)) {
    return (
      <Layout title={'Downloading...'}>
        <div className="h-[calc(100vh-165px)]">
          <div className="flex items-center justify-center h-full bg-muted">
            <p>Please use your Sitecore ID account to download this file.</p>
          </div>
        </div>
      </Layout>
    );
  }

  useEffect(() => {
    if (isAuthenticatedOktaUser(session) && file) {
      fetch(`/api/download/url?file=${encodeURIComponent(file.toString())}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.url) {
            setDownloadUrl(data.url);
            window.location.href = data.url;
            setTimeout(() => {
              router.replace(redirect.toString());
            }, 3000);
          } else {
            alert('Failed to generate download URL');
            router.replace(redirect.toString());
          }
        });
    }
  }, [file, redirect, router, session]);

  return (
    <Layout title={'Downloading...'}>
      <div className="h-[calc(100vh-165px)]">
        <div className="flex items-center justify-center h-full bg-muted">
          <p>
            Please wait while we prepare your download. <Link href={downloadUrl} className="text-primary hover:underline">Click here</Link> to start the download manually.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RedirectPage;
