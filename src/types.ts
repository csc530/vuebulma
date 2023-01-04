import {Component} from "vue";
import {toBulmaSeparatorClass} from "./types/BreadcrumbTypes";
import {toBulmaAspectRatioClass, toBulmaDimensionsClass} from "./types/ImageTypes";


type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;


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

export function getColourClass(colour: BulmaColourHelper | BulmaColour | ButtonColours, type?: 'background' | 'text'): string {
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
export const getBulmaSizes = (): BulmaSize[] => ['small', 'default', 'medium', 'large'];

export function getSizeClasses(size?: BulmaSize, areClasses?: boolean): string {
	if(!size || size === 'default')
		return 'is-normal';
	return areClasses ? `are-${size}` : `is-${size}`;
}

export type LeftRight = 'left' | 'right';
export const getLeftRight = (): LeftRight[] => ['left', 'right'];

export function getLeftRightClasses(leftRight?: LeftRight): string {
	if(!leftRight)
		return '';
	return `is-${leftRight}`;
}

export type BulmaAlignments = 'center' | LeftRight;
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

export const toIsClassName = (name: string): string => `is-${name}`;

//todo: extend usability to add logic if it's alignment, colour, etc
export function getBulmaClassesFromProps(classes: Record<string, any>, areSizes?: boolean): string[] {
	//todo: replace with switch statement like waterfall of explicit Bulma is/has classes to avoid accidental naming conflict and redundant classes
	const classList: string[] = [];
	const isClasses = Object.keys(classes)
	                        .filter(key => classes[key] && key.includes('is'))
	                        .map(key => {
		                        let className = key.toLowerCase();
		                        if(className === 'isrounded')
			                        return '';
		                        else if(className === 'isdropup')
			                        className = 'is-up';
		                        else if(className === 'isfixed')
			                        className = 'is-fixed-' + classes[key];
		                        // ? no need to check for `-` in key as vue transforms it to camelCase
		                        else {
			                        // ? replace `is` followed by a capital letter with `is-`
			                        const isClassName = key.replace(/is([A-Z])/g, 'is-$1').toLowerCase();
			                        if(isClassName !== className)
				                        className = isClassName;
			                        else
				                        return '';
		                        }
		                        return className;
	                        });
	const hasClasses = Object.keys(classes)
	                         .filter(key => classes[key] && key.includes('has'))
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
			                         className = className.replace('has', 'has-');
		                         return className;
	                         });
	classList.push(...isClasses, ...hasClasses);
	if(classes['colour'])
		classList.push(getColourClass(classes['colour'], null));
	if(classes.alignment)
		classList.push(getAlignmentClasses(classes.alignment));
	if(classes.size)
		classList.push(getSizeClasses(classes.size, areSizes));
	if(classes.separator)
		classList.push(toBulmaSeparatorClass(classes.separator));
	if(classes.aspectRatio)
		classList.push(toBulmaAspectRatioClass(classes.aspectRatio));
	if(classes.dimensions)
		classList.push(toBulmaDimensionsClass(classes.dimensions));
	//remove blank or undefined entries
	return classList.filter(x => x);
}

export function getNavbarItemClasses(item: BulmaNavBarItem): string[] {
	const classes: string[] = [];
	if(!item.dropdown)
		return classes;
	// ? used if statements of explicit properties instead of generic bulma `getBulmaClassesFromProps`
	// ? to avoid any `is` naming conflicts; if the user adds any names prefixed with `is` or `has` adding redundant classes
	classes.push('has-dropdown');
	const {isRight, isDropUp, isArrowless, isBoxed, isHoverable} = item.dropdown;
	if(isDropUp)
		classes.push('has-dropdown-up');
	else if(isRight)
		classes.push('is-right');
	else if(isHoverable)
		classes.push('is-hoverable');
	else if(isBoxed)
		classes.push('is-boxed');
	else if(isArrowless)
		classes.push('is-arrowless');
	else if(item.dropdown.isExpanded)
		classes.push('is-expanded');
	return classes;

}

export function removeDecimals(value: number): string {
	return Number(value).toFixed().toString();
}

export interface Menu {
	/** The menu's label */
	label: string;
	/** The menu's items */
	items: Menu[] | any[];
}

export function isMenu(menu: Menu): menu is Menu {
	return (menu as Menu).label !== undefined && menu.items !== undefined;
}

export interface NavBarDropdownItem {
	/** The dropdown item's label */
	label: string | any;
	/** The dropdown items */
	items: BulmaNavBarItem[];
	isDropUp?: boolean;
	isHoverable?: boolean;
}

export function isNavBarDropdownItem(item: NavBarDropdownItem): item is NavBarDropdownItem {
	return (item as NavBarDropdownItem).label !== undefined && item.items !== undefined;
}

export function isHTMLElement(element: any): element is HTMLElement {
	return element instanceof HTMLElement;
}

export type BulmaNavBarItem = {
	dropdown?: {
		isArrowless?: boolean;
		isBoxed?: boolean;
		isDropUp?: boolean;
		isExpanded?: boolean;
		isHoverable?: boolean;
		isRight?: boolean;
		items: any[];
		label: string;
	};
	href?: string | URL;
	isComponent?: string | Component;
	props?: Record<string, any>
	/** array of slot to pass to the component (only valid with isComponent); null name will be the default slot */
	slot?: { name?: string, content: string }[];
	[other: string]: unknown;
};

/** Colours for a button */
export type ButtonColours = 'text' | 'ghost' | BulmaColour;

export interface BulmaButton {
	/** The button's label */
	label: string;
	tag?: 'button' | 'a';
	colour?: ButtonColours
	isLight?: boolean;
	size?: BulmaSize
	isNormal?: boolean;
	isResponsive?: boolean;
	isFullWidth?: boolean;
	isOutlined?: boolean;
	isInverted?: boolean;
	isRounded?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	hasAddons?: boolean;
	isActive?: boolean;

	onClick(event: Event): void;
}

