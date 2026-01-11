import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import type { CategoryTileListData } from "./types";

export const CategoryTileList = (props: CategoryTileListData) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
		{props.cards.map((card) => (
			<article key={card.href || card.title}>
				<Link href={card.href} className="block">
					<Card className="border shadow-md hover:shadow-lg transition-shadow">
						<CardHeader>
							<div className="flex items-center gap-2">
								<h3 className="text-2xl font-heading">{card.title}</h3>
								<Icon path={mdiArrowRight} size={0.8} />
							</div>
						</CardHeader>
						<CardContent>
							<p>{card.description}</p>
						</CardContent>
					</Card>
				</Link>
			</article>
		))}
	</div>
);
