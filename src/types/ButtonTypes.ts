import {BulmaColour, BulmaSize, BulmaState, getBulmaColours} from "../types";

/** Colours for a button */
export type BulmaButtonColour = 'text' | 'ghost' | BulmaColour;

/** An array of all {@link BulmaButtonColour}s */
export const getBulmaButtonColours = (): BulmaButtonColour[] => ['text', 'ghost', ...getBulmaColours()];

export type BulmaButton = {
	tag?: 'button' | 'a';
	label?: string;
	colour?: BulmaButtonColour
	isLight?: boolean;
	size?: BulmaSize
	isResponsive?: boolean;
	isFullWidth?: boolean;
	isOutlined?: boolean;
	isInverted?: boolean;
	isRounded?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	state?: BulmaState;

	onClick(event: Event): void;
}

