import {warn} from "vue";
import {VBulmaGapBreakpoint, removeDecimals, VBulmaBreakpoint} from "../types";
import {BulmaColumnGapSizes, BulmaColumnSize} from "../types/ColumnTypes";


export function toGapClass(gapSize: BulmaColumnGapSizes | VBulmaGapBreakpoint |boolean) {
    if(gapSize === true)
        return;
    else if(gapSize === false || gapSize === 0)
        return "is-gapless";
    else if(!gapSize)
        return;

    let gapClasses: string = "";
    if(typeof gapSize === "number")
        gapClasses = `is-${removeDecimals(gapSize)}`;
    else if(typeof gapSize === "object")
        for(const breakpoint in gapSize) {
            let breakpointGapSize = gapSize[breakpoint];
            if(typeof breakpointGapSize !== "number")
                continue;
            gapClasses += `is-${removeDecimals(breakpointGapSize)}-${breakpoint} `;
        }
    else
        return;

    return `is-variable ${gapClasses}`;
}

export function toColumnOffsetClass(offset: BulmaColumnSize) {
    return `is-offset-${getColumnSizeClass(offset)}`;
}

export function toColumnSizeClass(size: BulmaColumnSize | VBulmaBreakpoint<BulmaColumnSize>) {
    let classString = "";
    if(typeof size === "number" || typeof size === "string")
        classString = `is-${getColumnSizeClass(size)}`;
    else if(typeof size === "object")
        for(const breakpoint in size) {
            let breakpointSize = size[breakpoint];
            if(typeof breakpointSize === "number")
                classString += `is-${removeDecimals(breakpointSize)}-${breakpoint} `;
            else if(typeof breakpointSize === "string")
                classString += `is-${toBulmaColumnSizeWord(breakpointSize)}-${breakpoint} `;
        }

    return classString;
}

function getColumnSizeClass(size: BulmaColumnSize) {
    if(typeof size === "string" && isNaN(Number(size)))
        return toBulmaColumnSizeWord(size);
    if(!isNaN(Number(size)))
        return removeDecimals(Number(size));
    warn("Invalid column size", size);
    return;
}

function toBulmaColumnSizeWord(size: Exclude<BulmaColumnSize, number>) {
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
        default:
            return size;
    }
}
