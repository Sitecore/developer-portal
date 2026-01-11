import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { Button } from "@src/components/ui/button";
import { CenteredContent, Hero, VerticalGroup } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getPageInfo } from "@src/lib/page-info";
import { Info } from "lucide-react";
import type { NextPage } from "next";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { LinkItem } from "@src/components";
import { HideForUsers } from "@src/components/authentication/HideForUsers";
import { RestrictedContent } from "@src/components/authentication/RestrictedContent";
import type { Option } from "@src/components/ui/dropdown";
import { getRoadmap } from "@src/lib/jira";
import { slugify } from "@src/lib/utils/stringUtil";

interface RoadmapPageProps {
	pageInfo: PageInfo;
	fallback: RoadmapInformation;
	products: Option[];
}

export async function getServerSideProps() {
	const pageInfo = await getPageInfo("_roadmap");
	const roadmap = await getRoadmap();

	return {
		props: {
			pageInfo,
			products: roadmap.products,
		},
	};
}

const Roadmap: NextPage<RoadmapPageProps> = ({ pageInfo, products }) => {
	return (
		<TrackPageView pageInfo={pageInfo}>
			<Layout
				title={pageInfo.title}
				description={pageInfo.description}
				openGraphImage={pageInfo.openGraphImage}
			>
				<Hero
					title={pageInfo.title}
					description={pageInfo.description}
					image={pageInfo.heroImage}
					productLogo={pageInfo.productLogo}
				/>

				<VerticalGroup className="min-h-[calc(100vh-430px)]">
					<CenteredContent>
						<HideForUsers>
							<Alert variant="default" className="mb-4">
								<Info className="h-4 w-4" />
								<AlertDescription>
									To access the detailed roadmaps, please log in using your
									cloud portal credentials.
									<Button
										variant="link"
										onClick={() => signIn("sitecore")}
										className="ml-2"
									>
										Login
									</Button>
								</AlertDescription>
							</Alert>
						</HideForUsers>

						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex-1">
								<h2 className="text-xl font-heading mb-4">Roadmap overview</h2>

								<p className="my-4">
									This section provides a comprehensive view of the development
									progress for each of our products, structured into four
									distinct phases:
								</p>

								<ul className="list-disc ml-5 space-y-2">
									<li>Done - presenting completed features and updates</li>
									<li>
										Now - outlining current initiatives which we expect to ship
										this quarter
									</li>
									<li>Next - detailing plans for the upcoming two quarters</li>
									<li>
										Future - offering a glimpse into long-term developments
										beyond nine months.
									</li>
								</ul>
							</div>
							<Image
								src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/3de0d9d0071446fa95353cfd41748fa9?t=sc700x700"
								alt="Roadmap"
								width={300}
								height={300}
								className="hidden md:block"
							/>
						</div>

						<RestrictedContent>
							<Alert variant="default" className="my-4">
								<Info className="h-4 w-4" />
								<AlertDescription>
									The product roadmap is for informational purposes only and
									subject to change at Sitecore's sole discretion. Timelines and
									features are not commitments, and the roadmap may be amended
									or discontinued without notice. Customers should not rely on
									it for purchasing or planning decisions.
								</AlertDescription>
							</Alert>
							<h2 className="text-xl font-heading mb-4">Available roadmaps</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{products.map((product) => (
									<LinkItem
										link={`/roadmap/${slugify(product.label)}`}
										key={product.value}
										title={product.label}
									/>
								))}
							</div>

							<Alert variant="default" className="my-4">
								<Info className="h-4 w-4" />
								<AlertTitle>Confidentiality Disclaimer:</AlertTitle>
								<AlertDescription>
									This product roadmap contains highly confidential information
									and is intended solely for the recipient. By accessing this
									information, you acknowledge that it is subject to the
									confidentiality obligations set forth in your existing
									agreements with Sitecore. Any unauthorized disclosure,
									distribution, or use of this information is strictly
									prohibited.
								</AlertDescription>
							</Alert>
						</RestrictedContent>
					</CenteredContent>
				</VerticalGroup>
			</Layout>
		</TrackPageView>
	);
};

export default Roadmap;
