import Case from "case";
import {toBulmaSeparatorClass} from "./types/BreadcrumbTypes";
import {BulmaButtonColour} from "./types/ButtonTypes";
// ? export all types from ./types/ for build and ease of use
export * from "./types/BreadcrumbTypes";
export * from "./types/ImageTypes";
export * from "./types/HeadingTypes";
export * from "./types/ButtonTypes";
export * from "./types/NavbarTypes";
export * from "./types/MenuTypes";
export * from "./types/SelectTypes";
export * from "./types/PaginationTypes";
export * from "./types/PanelTypes";
export * from "./types/HeroTypes";
export * from "./types/SectionTypes";
export * from "./types/ColumnTypes";
export * from "./types/TileTypes";

export type _EightType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type _TweleveType = _EightType | 9 | 10 | 11 | 12;

export function exhaustion(arg: never) {
    return arg;
}

export type BulmaLink = { vbLink?: string, vbTxt?: string };
export type BulmaStateColour = "info" | "danger" | "warning" | "success" | "primary" | "link" | "default";
export const getBulmaStateColours = (): BulmaStateColour[] => ["info", "danger", "warning", "success", "primary", "link", "default"];
export type BulmaShade = "white" | "black" | "light" | "dark" | "default";
export const getBulmaShades = (): BulmaShade[] => ["white", "black", "light", "dark", "default"];
/** @description Bulma's colours */
export type BulmaColour = BulmaStateColour | BulmaShade;
export const getBulmaColours = (): BulmaColour[] => ["info", "danger", "warning", "success", "primary", "link", "white", "black", "light", "dark", "default"];

export type BulmaColourHelper = {
    shade?: BulmaShade;
    //todo: add bulma 'white ' and 'black' to this type and make compatible in transformer
    colour: BulmaStateColour;
}

export function toBulmaColourClass(colour: BulmaColourHelper | BulmaColour | BulmaButtonColour, type?: "background" | "text"): string {
    if(!colour || colour === "default"|| colour?.colour === "default")
        return "";
    else if(typeof colour === "string")
        if(!type)
            return `is-${colour}`;
        else
            return `has-${type}-${colour}`;
    else if(!colour.shade || colour.shade === "default")
        return `has-${type}-${colour.colour}`;
    else if(colour.shade === "dark" || colour.shade === "black")
        return `has-${type}-${colour.colour}-dark`;
    else if(colour.shade === "light" || colour.shade === "white")
        return `has-${type}-${colour.colour}-light`;

    return "";
}

//todo add grayscale option for colour class getters
export type BulmaGrayscale =
    "black-bis"
    | "black-ter"
    | "grey-darker"
    | "grey-dark"
    | "grey"
    | "grey-light"
    | "grey-lighter"
    | "white-ter"
    | "white-bis";
// return an array of strings in BulmaGrayscale type
const getBulmaGrayscaleValues = (): BulmaGrayscale[] => {
    return ["black-bis", "black-ter", "grey-darker", "grey-dark", "grey", "grey-light", "grey-lighter", "white-ter", "white-bis"];
};


export type BulmaSize = "small" | "default" | "normal" | "medium" | "large";
export const BULMA_SIZES: BulmaSize[] = (() => ["small", "default", "normal", "medium", "large"])();

export function toSizeClasses(size?: BulmaSize, areClasses?: boolean): string {
    if(!size || size === "default")
        return "";
    return areClasses ? `are-${size}` : `is-${size}`;
}

export type BulmaLeftRight = "left" | "right";
export const getBulmaLeftRight = (): BulmaLeftRight[] => ["left", "right"];
export type BulmaAlignment = "center" | BulmaLeftRight;
export const BULMA_ALIGNMENTS: BulmaAlignment[] = (() => ["left", "center", "right"])();

export function toBulmaAlignmentClasses(alignment?: BulmaAlignment): string {
    //todo: check is-left is ever used and can be removed when the value
    if(!alignment)
        return "";
    //todo: double check and verify this is true for all uses; needed for breadcrumb's at least
    else if(alignment === "center")
        return "is-centered";
    return `is-${alignment}`;
}

export function toggleActiveClass(element: HTMLElement) {
    element.classList.toggle("is-active");
}


export function getBulmaClassesFromProps(classes: Record<string, any>, areSizes?: boolean): string[] {
    //todo: replace with switch statement like waterfall of explicit Bulma is/has classes to avoid accidental naming conflict and redundant classes

    const classList = Object.keys(classes)
        .filter(key => classes[key] && (key.startsWith("is") || key.startsWith("has")))
        .map(key => {
            let className = key.toLowerCase();
            if(className === "isdropup")
                className = "is-up";
            else if(className === "isfixed")
                className = "is-fixed-" + classes[key].toLowerCase();
            else if(className === "isdelete")
                return "delete"; //used in bulmabutton delete class
                //? no need to check for `-` in key as vue transforms it to camelCase
            //? append dash (-) to  `has` or `is` followed by a capital letter
            else
                className = Case.kebab(key);
            return className;
        });

    if(classes["colour"])
        classList.push(toBulmaColourClass(classes["colour"]));
    if(classes["alignment"])
        classList.push(toBulmaAlignmentClasses(classes.alignment));
    if(classes.size)
        classList.push(toSizeClasses(classes.size, areSizes));
    if(classes.separator)
        classList.push(toBulmaSeparatorClass(classes.separator));
    if(classes["state"])
        classList.push(toBulmaStateClass(classes.state));
    //remove blank or undefined entries
    return classList.filter(x => x);
}

export function removeDecimals(value: number): string {
    const number = Number(value);
    return Number.isNaN(number) ?
        "" : // throw error
        number.toFixed(0).toString();
}


export type BulmaState = "active" | "hovered" | "focused" | "default";

/** An array of all {@link BulmaState}s */
export const getBulmaStates = (): BulmaState[] => ["active", "hovered", "focused", "default"];

/** Converts a {@link BulmaState} to its bulma class */
export function toBulmaStateClass(state: BulmaState | BulmaInputState): string {
    return state === "default" ? "" : `is-${state}`;
}

export type BulmaInputState = BulmaState | "loading";

/** An array of all {@link BulmaInputState}s */
export const getBulmaInputStates = (): BulmaInputState[] => ["active", "hovered", "focused", "default", "loading"];
export type BulmaMedia = BulmaMobileSizes | "desktop" | "widescreen" | "fullhd";
export type BulmaMobileSizes = "mobile" | "tablet" | "touch"

export const BULMA_MEDIA: BulmaMedia[] = (() => ["mobile", "tablet", "touch", "desktop", "widescreen", "fullhd"])();

export function toResponsiveClass(media: BulmaMedia | BulmaMedia[]): string {
    if(typeof media === "string")
        return `is-${media}`;
    return media.map(m => `is-${m}`).join(" ");
}

export type VBulmaBreakpoint<T> = {
    [key in BulmaMedia]?: T;
};
