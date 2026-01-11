import type {
	GetAllStatusQuery,
	StatusFragment,
} from "@data/gql/generated/graphql";
import { getStringValue } from "@src/lib/utils/stringUtil";

export type Status = {
	id: string;
	name: string;
	identifier: string;
	description: string;
};

export type StatusResults = {
	total: string;
	results: Array<Status>;
};

export const DefaultStatus: Status = {
	id: "pNOVO2dhtESFOSwd4Va84w",
	name: "Available",
	identifier: "available",
	description: "",
};

/**
 * Parse a single Status from raw GraphQL data
 * @param rawItem - GraphQL StatusFragment result
 * @returns Parsed Status
 */
export function parseStatusItem(
	rawItem: StatusFragment | null | undefined,
): Status {
	if (!rawItem) {
		throw new Error("Invalid Status: rawItem is null or undefined");
	}

	return {
		id: getStringValue(rawItem.system?.name),
		name: getStringValue(rawItem.system?.label),
		identifier: getStringValue(rawItem.identifier),
		description: getStringValue(rawItem.description) || "",
	};
}

/**
 * Parse multiple Status items from a GraphQL query result
 */
export function ParseStatus(data: GetAllStatusQuery): Array<Status> {
	if (!data.manyStatus?.results) {
		return [];
	}

	return data.manyStatus?.results.map((x) => parseStatusItem(x));
}
