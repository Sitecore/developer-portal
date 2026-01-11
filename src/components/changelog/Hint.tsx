import { Alert, AlertTitle } from "@src/components/ui/alert";
import type { Option } from "@src/components/ui/dropdown";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@src/components/ui/tooltip";
import { getSlug } from "@src/lib/utils/stringUtil";
import { Info } from "lucide-react";
import Link from "next/link";

type HintProps = {
	products?: Array<Option>;
	enabled: boolean;
};

export const Hint = ({ products, enabled }: HintProps) => {
	if (!enabled || products === undefined) {
		return null;
	}

	return (
		<Alert variant="default" className="my-4">
			<Info className="h-4 w-4" />
			<AlertTitle>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={`/changelog/${getSlug(products[0].label)}`}
								className="hover:underline"
							>
								Did you know that {products[0].label} has its own changelog
								page?
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>Visit the {products[0].label} changelog page</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</AlertTitle>
		</Alert>
	);
};
