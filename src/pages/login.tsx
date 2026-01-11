import { Login } from "@src/components/authentication/Login";
import { SwitchAuthentication } from "@src/components/authentication/switchAuthentication";
import Layout from "@src/layouts/Layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export async function getServerSideProps() {
	return {
		props: {},
	};
}

const LoginPage: NextPage = () => {
	const router = useRouter();
	const { redirect = "/", file, page } = router.query;
	const redirectUrl =
		file != null && page != null
			? `/downloads/redirect?file=${file}&redirect=${page}`
			: (redirect as string);

	const { data: session } = useSession();

	return (
		<Layout
			title={"Login"}
			description={
				"Use this page to login using your Sitecore ID (Okta) or Sitecore Cloud Portal account"
			}
		>
			<div className="h-[calc(100vh-165px)]">
				<div className="flex items-center justify-center h-full bg-muted">
					{session?.user != null && <SwitchAuthentication />}
					{session?.user == null && <Login redirectUrl={redirectUrl} />}
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
