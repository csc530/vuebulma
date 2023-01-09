import sCase from "case";
import {toBulmaAspectRatioClass, toBulmaDimensionsClass, toBulmaSeparatorClass} from "./types";
import {BulmaButtonColour} from "./types/ButtonTypes";
// ? export all types for build and ease of use
export * from './types/BreadcrumbTypes';
export * from './types/ImageTypes';
export * from './types/HeadingTypes';
export * from './types/IconTypes';
export * from './types/ButtonTypes';
export * from './types/NavbarTypes';
export * from './types/MenuTypes';


//todo: rename prefix
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
	return states.map<BulmaColourHelper>(colour => ({colour: colour, shade: shade ? shade : 'default'}));
}

//todo: rename prefix
export type BulmaColourHelper = {
	shade?: BulmaShade;
	//todo: add bulma 'white ' and 'black' to this type and make compatible in transformer
	colour: BulmaStateColour;
}

export function getColourClass(colour: BulmaColourHelper | BulmaColour | BulmaButtonColour, type?: 'background' | 'text'): string {
	//todo fix to work with default in state colours and for more extensive
	if(!colour || colour === 'default')
		return '';
	else if(typeof colour === 'string')
		if(!type)
			return `is-${colour}`;
		else
			return `has-${type}-${colour}`;
	else if(!colour.shade || colour.shade === 'default')
		return `has-${type}-${colour.colour}`;
	else if(colour.shade === 'dark' || colour.shade === 'black')
		return `has-${type}-${colour.colour}-dark`;
	return `has-${type}-${colour.colour}-light`;
}

//todo add grayscale option for colour class getters
export type Grayscale =
	'black-bis'
	| 'black-ter'
	| 'grey-darker'
	| 'grey-dark'
	| 'grey'
	| 'grey-light'
	| 'grey-lighter'
	| 'white-ter'
	| 'white-bis';
// return an array of strings in Grayscale type
const getGrayscale = (): Grayscale[] => {
	return ['black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];
};

//? stack question what monstrosity have I created lol
export type Monstrosity = { isDark?: boolean; isLight?: boolean; } & BulmaColour;


export type BulmaSize = 'small' | 'default' | 'medium' | 'large';

export function getBulmaSizes(): BulmaSize[] { return ['small', 'default', 'medium', 'large']; }

export function getSizeClasses(size?: BulmaSize, areClasses?: boolean): string {
	if(!size || size === 'default')
		return 'is-normal';
	return areClasses ? `are-${size}` : `is-${size}`;
}

export type BulmaLeftRight = 'left' | 'right';
export const getBulmaLeftRight = (): BulmaLeftRight[] => ['left', 'right'];
export type BulmaAlignments = 'center' | BulmaLeftRight;
export const getBulmaAlignments = (): BulmaAlignments[] => ['left', 'center', 'right'];

//todo: change name of getXClasses to `toBulmaClass`
export function getAlignmentClasses(alignment?: BulmaAlignments): string {
	//todo: check is-left is ever used and can be removed when the value
	if(!alignment)
		return '';
	//todo: double check and verify this is true for all uses; needed for breadcrumb's at least
	else if(alignment === 'center')
		return 'is-centered';
	return `is-${alignment}`;
}

export function toggleActivation(event: Event, element?: HTMLElement, invoke?: boolean): void {
	if(!invoke) return;
	const target = element ? element : event.target as HTMLElement;
	target.classList.toggle('is-active');
}


//todo: extend usability to add logic if it's alignment, colour, etc
export function getBulmaClassesFromProps(classes: Record<string, any>, areSizes?: boolean): string[] {
	//todo: replace with switch statement like waterfall of explicit Bulma is/has classes to avoid accidental naming conflict and redundant classes
	const classList: string[] = [];
	const isClasses = Object.keys(classes)
	                        .filter(key => classes[key] && key.startsWith('is'))
	                        .map(key => {
		                        let className = key.toLowerCase();
		                        if(className === 'isdropup')
			                        className = 'is-up';
		                        else if(className === 'isfixed')
			                        className = 'is-fixed-' + classes[key];
		                        // ? no need to check for `-` in key as vue transforms it to camelCase
		                        else
			                        className = sCase.kebab(key);
		                        return className;
	                        });
	const hasClasses = Object.keys(classes)
	                         .filter(key => classes[key] && key.startsWith('has'))
	                         .map(key => {
		                         let className = key.toLowerCase();
		                         if(className === 'hasicons' && classes[key] !== false) {
			                         className = 'has-icons-';
			                         if(classes[key] === 'both' || classes[key] === true)
				                         className += 'left has-icons-right';
			                         else
				                         className += classes[key];
		                         }
		                         else
			                         // ? replace `has` followed by a capital letter with `has-`
			                         className = sCase.kebab(key)

		                         return className;
	                         });
	classList.push(...isClasses, ...hasClasses);
	if(classes['colour'])
		classList.push(getColourClass(classes['colour']));
	if(classes["alignment"])
		classList.push(getAlignmentClasses(classes.alignment));
	if(classes.size)
		classList.push(getSizeClasses(classes.size, areSizes));
	if(classes.separator)
		classList.push(toBulmaSeparatorClass(classes.separator));
	if(classes.aspectRatio)
		classList.push(toBulmaAspectRatioClass(classes.aspectRatio));
	if(classes.dimensions)
		classList.push(toBulmaDimensionsClass(classes.dimensions));
	if(classes['state'])
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
export function toBulmaStateClass(state: BulmaState | BulmaInputState): string { return state === 'default' ? '' : `is-${state}`;}

export type BulmaInputState = BulmaState | 'loading';

/** An array of all {@link BulmaInputState}s */
export const getBulmaInputStates = (): BulmaInputState[] => ['active', 'hovered', 'focused', 'default', 'loading'];