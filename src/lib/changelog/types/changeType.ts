import type {
	ChangeTypeFragment,
	GetAllChangetypesQuery,
} from "@data/gql/generated/graphql";
import { getStringValue, slugify } from "@src/lib/utils/stringUtil";

export type ChangeType = {
	id: string;
	name: string;
	changeType: string;
	type: string;
};

/**
 * Parse a single ChangeType from raw GraphQL data
 * @param rawItem - GraphQL ChangeTypeFragment result
 * @returns Parsed ChangeType
 */
export function parseChangeTypeItem(
	rawItem: ChangeTypeFragment | null | undefined,
): ChangeType {
	if (!rawItem) {
		throw new Error("Invalid ChangeType: rawItem is null or undefined");
	}

	return {
		name: getStringValue(rawItem.changeType),
		changeType: getStringValue(rawItem.changeType),
		id: getStringValue(rawItem.system?.id),
		type: slugify(getStringValue(rawItem.system?.name)),
	};
}

/**
 * Parse multiple ChangeTypes from a GraphQL query result
 */
export function ParseChangeType(
	data: GetAllChangetypesQuery,
): Array<ChangeType> {
	if (!data.manyChangetype?.results) {
		return [];
	}

	return data.manyChangetype.results?.map((x) => parseChangeTypeItem(x));
}
