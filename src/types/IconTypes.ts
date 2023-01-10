import {BulmaColour, BulmaColourHelper, BulmaSize} from "../types";

export type BulmaColouredIcon = {
	icon?: string;
	colour: BulmaColourHelper | BulmaColour;
}
export type BulmaStackedIcon = {
	icon: (string | BulmaColouredIcon)[]
	stacked: boolean | string
	containerSize?: BulmaSize,
}