export type BulmaDimension = 16 | 24 | 32 | 48 | 64 | 96 | 128;

//todo: prefix
export type BulmaAspectRatio =
	'square'
	| '1by1'
	| '5by4'
	| '4by3'
	| '3by2'
	| '5by3'
	| '16by9'
	| '2by1'
	| '3by1'
	| '4by5'
	| '3by4'
	| '2by3'
	| '3by5'
	| '9by16'
	| '1by2'
	| '1by3'

export const BULMA_DIMENSIONS: BulmaDimension[] = (() => [16, 24, 32, 48, 64, 96, 128])();
export const BULMA_ASPECT_RATIOS: BulmaAspectRatio[] = (() => ['square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'])();