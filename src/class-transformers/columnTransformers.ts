import {warn} from "vue";
import {removeDecimals} from "../types";
import {BulmaColumnGapSizes, BulmaColumnSizes} from "../types/ColumnTypes";


export function toGapClass(gap: boolean | BulmaColumnGapSizes){
	if(gap === true || gap === null || gap === undefined)
		return;
	if(gap === false)
		return "is-gapless";
	return `is-variable is-${gap.toString()}`;
}

export function toColumnOffsetClass(offset: BulmaColumnSizes){
	return `is-offset-${getColumnSizeClass(offset)}`;
}

export function toColumnSizeClass(size: BulmaColumnSizes){
	return `is-${getColumnSizeClass(size)}`;
}

function getColumnSizeClass(size: BulmaColumnSizes){
	if(typeof size === "string" && isNaN(Number(size)))
		switch(size) {
			case "full":
				return "full";
			case "4/5":
				return "four-fifths";
			case "3/4":
				return "three-quarters";
			case "2/3":
				return "two-thirds";
			case "3/5":
				return "three-fifths";
			case "half":
				return "half";
			case "2/5":
				return "two-fifths";
			case "1/3":
				return "one-third";
			case "1/4":
				return "one-quarter";
			case "1/5":
				return "one-fifth";
		}
	if(!isNaN(Number(size)))
		return removeDecimals(Number(size));
	warn("Invalid column size", size);
	return;
}
