import Case from "case";
import {toBulmaSeparatorClass} from "./types/BreadcrumbTypes";
import {BulmaButtonColour} from "./types/ButtonTypes";
import {toBulmaAspectRatioClass, toBulmaDimensionsClass} from "./types/ImageTypes";
// ? export all types from ./types/ for build and ease of use
export * from './types/BreadcrumbTypes';
export * from './types/ImageTypes';
export * from './types/HeadingTypes';
export * from './types/IconTypes';
export * from './types/ButtonTypes';
export * from './types/NavbarTypes';
export * from './types/MenuTypes';
export * from './types/SelectTypes';


export type BulmaStateColour = 'info' | 'danger' | 'warning' | 'success' | 'primary' | 'link' | 'default';
export const getBulmaStateColours = (): BulmaStateColour[] => ['info', 'danger', 'warning', 'success', 'primary', 'link', 'default'];
export type BulmaShade = 'white' | 'black' | 'light' | 'dark' | 'default';
export const getBulmaShades = (): BulmaShade[] => ['white', 'black', 'light', 'dark', 'default'];
/** @description Bulma's colours */
export type BulmaColour = BulmaStateColour | BulmaShade;
export const getBulmaColours = (): BulmaColour[] => ['info', 'danger', 'warning', 'success', 'primary', 'link', 'white', 'black', 'light', 'dark', 'default'];

export function getBulmaColoursHelpers(shade?: BulmaShade): BulmaColourHelper[] {
	//from GH-copilot (inspired) if it says this is the best way to get values form type and not interface then I guess it is (explicit typing not functional parse)
	// const shades: BulmaShade[] = ['white', 'black', 'light', 'dark', 'default'];
	const states: BulmaStateColour[] = ['info', 'danger', 'warning', 'success', 'primary', 'link'];
	// const colours: BulmaColour[] = [...states, ...shades];
	//set shade to default if not provided
	return states.map<BulmaColourHelper>(colour => ({ colour: colour, shade: shade ? shade : 'default' }));
}

export type BulmaColourHelper = {
	shade?: BulmaShade;
	//todo: add bulma 'white ' and 'black' to this type and make compatible in transformer
	colour: BulmaStateColour;
}

export function toBulmaColourClass(colour: BulmaColourHelper | BulmaColour | BulmaButtonColour, type?: 'background' | 'text'): string {
	if (!colour || colour === 'default')
		return '';
	else if (typeof colour === 'string')
		if (!type)
			return `is-${colour}`;
		else
			return `has-${type}-${colour}`;
	else if (!colour.shade || colour.shade === 'default')
		return `has-${type}-${colour.colour}`;
	else if (colour.shade === 'dark' || colour.shade === 'black')
		return `has-${type}-${colour.colour}-dark`;
	return `has-${type}-${colour.colour}-light`;
}

//todo add grayscale option for colour class getters
export type BulmaGrayscale =
	'black-bis'
	| 'black-ter'
	| 'grey-darker'
	| 'grey-dark'
	| 'grey'
	| 'grey-light'
	| 'grey-lighter'
	| 'white-ter'
	| 'white-bis';
// return an array of strings in BulmaGrayscale type
const getBulmaGrayscaleValues = (): BulmaGrayscale[] => {
	return ['black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];
};


export type BulmaSize = 'small' | 'default' | 'medium' | 'large';

export function getBulmaSizes(): BulmaSize[] { return ['small', 'default', 'medium', 'large']; }

export function toSizeClasses(size?: BulmaSize, areClasses?: boolean): string {
	if (!size || size === 'default')
		return 'is-normal';
	return areClasses ? `are-${size}` : `is-${size}`;
}

export type BulmaLeftRight = 'left' | 'right';
export const getBulmaLeftRight = (): BulmaLeftRight[] => ['left', 'right'];
export type BulmaAlignment = 'center' | BulmaLeftRight;
export const getBulmaAlignments = (): BulmaAlignment[] => ['left', 'center', 'right'];

export function toBulmaAlignmentClasses(alignment?: BulmaAlignment): string {
	//todo: check is-left is ever used and can be removed when the value
	if (!alignment)
		return '';
	//todo: double check and verify this is true for all uses; needed for breadcrumb's at least
	else if (alignment === 'center')
		return 'is-centered';
	return `is-${alignment}`;
}

export function toggleActivation(event: Event, element?: HTMLElement, invoke?: boolean): void {
	if (!invoke) return;
	const target = element ? element : event.target as HTMLElement;
	target.classList.toggle('is-active');
}


export function getBulmaClassesFromProps(classes: Record<string, any>, areSizes?: boolean): string[] {
	//todo: replace with switch statement like waterfall of explicit Bulma is/has classes to avoid accidental naming conflict and redundant classes

	const classList = Object.keys(classes)
	                        .filter(key => classes[key] && (key.startsWith('is') || key.startsWith('has')))
	                        .map(key => {
		                        let className = key.toLowerCase();
		                        if(className === 'isdropup')
			                        className = 'is-up';
		                        else if(className === 'isfixed')
			                        className = 'is-fixed-' + classes[key].toLowerCase();
			                        //? no need to check for `-` in key as vue transforms it to camelCase
		                        //? append dash (-) to  `has` or `is` followed by a capital letter
		                        else
			                        className = Case.kebab(key);
			return className;
		});

	if (classes['colour'])
		classList.push(toBulmaColourClass(classes['colour']));
	if (classes["alignment"])
		classList.push(toBulmaAlignmentClasses(classes.alignment));
	if (classes.size)
		classList.push(toSizeClasses(classes.size, areSizes));
	if (classes.separator)
		classList.push(toBulmaSeparatorClass(classes.separator));
	if (classes.aspectRatio)
		classList.push(toBulmaAspectRatioClass(classes.aspectRatio));
	if (classes.dimensions)
		classList.push(toBulmaDimensionsClass(classes.dimensions));
	if (classes['state'])
		classList.push(toBulmaStateClass(classes.state));
	//remove blank or undefined entries
	return classList.filter(x => x);
}

export function removeDecimals(value: number): string {
	return Number(value).toFixed().toString();
}


export type BulmaState = 'active' | 'hovered' | 'focused' | 'default';

/** An array of all {@link BulmaState}s */
export const getBulmaStates = (): BulmaState[] => ['active', 'hovered', 'focused', 'default'];

/** Converts a {@link BulmaState} to its bulma class */
export function toBulmaStateClass(state: BulmaState | BulmaInputState): string { return state === 'default' ? '' : `is-${state}`; }

export type BulmaInputState = BulmaState | 'loading';

/** An array of all {@link BulmaInputState}s */
export const getBulmaInputStates = (): BulmaInputState[] => ['active', 'hovered', 'focused', 'default', 'loading'];