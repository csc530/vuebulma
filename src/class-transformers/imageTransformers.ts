import {BulmaAspectRatio, BulmaDimension, removeDecimals} from "../types";

function toBulmaDimensionClass(dimension: BulmaDimension){
	const dim = removeDecimals(dimension);
	return `is-${dim}x${dim}`;
}

function toBulmaAspectRatioClass(aspectRatio: BulmaAspectRatio){
	return `is-${aspectRatio}`;
}

export function toBulmaImageClasses(size: BulmaDimension | BulmaAspectRatio){
	if(!isNaN(Number(size)))
		return toBulmaDimensionClass(Number(size) as BulmaDimension);
	if(typeof size === "string")
		return toBulmaAspectRatioClass(size);
	return;
}