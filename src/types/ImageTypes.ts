import {removeDecimals} from "../types";

export type BulmaDimension = 16 | 24 | 32 | 48 | 64 | 96 | 128;
export const getDimensions = (): BulmaDimension[] => [16, 24, 32, 48, 64, 96, 128];

export function toBulmaDimensionsClass(dimension?: BulmaDimension): string {
	if(!dimension)
		return '';
	const dim = removeDecimals(dimension);
	return `is-${dim}x${dim}`;
}

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
export const getBulmaAspectRatios = (): BulmaAspectRatio[] => ['square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'];

export function toBulmaAspectRatioClass(aspectRatio?: BulmaAspectRatio): string {
	if(!aspectRatio)
		return '';
	return `is-${aspectRatio}`;
}