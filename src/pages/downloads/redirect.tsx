import Layout from "@src/layouts/Layout";
import {
  isAuthenticatedCloudPortalUser,
  isAuthenticatedOktaUser,
} from "@src/lib/auth/verify";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const getFirstQueryValue = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
};

const getSafeRedirectPath = (redirectValue: string | string[] | undefined): string => {
  const redirectPath = getFirstQueryValue(redirectValue).trim();

  if (!redirectPath) {
    return "/";
  }

  if (!redirectPath.startsWith("/") || redirectPath.startsWith("//")) {
    return "/";
  }

  return redirectPath;
};

const getSafeDownloadUrl = (urlValue: unknown): string | null => {
  if (typeof urlValue !== "string" || !urlValue.trim()) {
    return null;
  }

  if (typeof window === "undefined") {
    return null;
  }

  try {
    const parsedUrl = new URL(urlValue, window.location.origin);
    const isHttpProtocol =
      parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";

    if (!isHttpProtocol) {
      return null;
    }

    const isSameOrigin = parsedUrl.origin === window.location.origin;
    const isHttps = parsedUrl.protocol === "https:";

    if (!isSameOrigin && !isHttps) {
      return null;
    }

    return parsedUrl.toString();
  } catch {
    return null;
  }
};

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { file, redirect } = router.query;
  const safeRedirectPath = getSafeRedirectPath(redirect);

  const [downloadUrl, setDownloadUrl] = useState<string>("");

  useEffect(() => {
    if (!isAuthenticatedOktaUser(session) || !file) {
      return;
    }

    let isMounted = true;
    let redirectTimer: ReturnType<typeof setTimeout> | null = null;

    const fileValue = getFirstQueryValue(file);

    const run = async () => {
      try {
        const response = await fetch(
          `/api/download/url?file=${encodeURIComponent(fileValue)}`,
        );

        if (!response.ok) {
          throw new Error("Failed to generate download URL");
        }

        const data: { url?: unknown } = await response.json();
        const safeUrl = getSafeDownloadUrl(data.url);

        if (!isMounted || !safeUrl) {
          router.replace(safeRedirectPath);
          return;
        }

        setDownloadUrl(safeUrl);
        window.location.assign(safeUrl);

        redirectTimer = setTimeout(() => {
          router.replace(safeRedirectPath);
        }, 3000);
      } catch {
        if (isMounted) {
          router.replace(safeRedirectPath);
        }
      }
    };

    void run();

    return () => {
      isMounted = false;
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [file, router, safeRedirectPath, session]);

  if (isAuthenticatedCloudPortalUser(session)) {
    return (
      <Layout title={"Downloading..."}>
        <div className="h-[calc(100vh-165px)]">
          <div className="flex items-center justify-center h-full bg-muted">
            <p>Please use your Sitecore ID account to download this file.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={"Downloading..."}>
      <div className="h-[calc(100vh-165px)]">
        <div className="flex items-center justify-center h-full bg-muted">
          <p>
            Please wait while we prepare your download.{" "}
            {downloadUrl ? (
              <Link href={downloadUrl} className="text-primary hover:underline">
                Click here
              </Link>
            ) : (
              <span>Click here</span>
            )}{" "}
            to start the download manually.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RedirectPage;
