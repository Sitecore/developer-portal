import { Button } from "@src/components/ui/button";
import { Card } from "@src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export type RestrictedContentProps = {
	children?: React.ReactNode | Array<React.ReactNode>;
};

export const RestrictedContent = (props: RestrictedContentProps) => {
	const { data: session } = useSession();
	const orgId = session?.user?.orgId;

	if (session?.user && orgId != null) {
		return props.children;
	}

	if (session?.user && orgId == null) {
		return (
			<Card className="border py-4 px-2">
				<div className="flex items-start gap-4">
					<Image
						width={48}
						height={48}
						src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock"
						alt="lock"
						className="mx-8"
					/>
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-heading">Restricted</h3>
						<p>
							The account you&apos;re using is <strong>not</strong> currently
							linked to an organization or you are using an{" "}
							<strong>Sitecore ID</strong> account.
						</p>
						<p>
							This content is available exclusively to customers and partners
							with a Sitecore Cloud Portal account linked to their organization.
						</p>
						<div className="flex">
							<Link
								href="/login?redirect=/roadmap"
								className="text-primary hover:underline"
							>
								Logout or switch credentials
							</Link>
						</div>
					</div>
				</div>
			</Card>
		);
	}

	return (
		<Card className="border py-4 px-2">
			<div className="flex items-start gap-4">
				<Image
					width={48}
					height={48}
					src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock"
					alt="lock"
					className="mx-8"
				/>
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-heading">Restricted</h3>
					<p>You don&apos;t have permission to access this content.</p>
					<p>
						This content is available exclusively to customers and partners with
						a <strong>Sitecore Cloud Portal</strong> account linked to their
						organization. Please log in with your{" "}
						<strong>Sitecore Cloud Portal</strong> credentials.
					</p>
					<div className="flex">
						<Button variant="link" onClick={() => signIn("sitecore")}>
							Login
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};
