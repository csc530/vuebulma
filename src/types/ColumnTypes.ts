import {_EightType, _TweleveType} from "../types";

export type BulmaColumnSizes =
	_TweleveType
	| "full"
	| "4/5"
	| "3/4"
	| "2/3"
	| "3/5"
	| "half"
	| "2/5"
	| "1/3"
	| "1/4"
	| "1/5"
export type BulmaColumnGapSizes = 0 | _EightType

export const BULMA_COLUMN_GAP_SIZES: BulmaColumnGapSizes[] = (()=>[0, 1, 2, 3, 4, 5, 6, 7, 8])();
export const BULMA_COLUMN_SIZES: BulmaColumnSizes[] =(()=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "full", "4/5", "3/4", "2/3", "3/5", "half", "2/5", "1/3", "1/4", "1/5"])();