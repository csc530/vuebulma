import {BulmaColour, BulmaColourHelper} from "../types";

export type BulmaColouredIcon = {
	icon?: string;
	colour: BulmaColourHelper | BulmaColour;
}
export type BulmaMultiIcon = {
	icon: (string | BulmaColouredIcon)[]
	stacked?: boolean | string
}