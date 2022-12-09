export interface BreadcrumbItem extends Link {
	isActive: boolean,
}

export interface Link {
	href: URL | string,
	text: string | (() => string),
}

export const getLinkText = (link: Link): string => {
	if (typeof link.text === 'string') {
		return link.text;
	}
	return link.text();
};

export type TextSizes = 1 | 2 | 3 | 4 | 5 | 6;
export const getHeaderSize = (size: TextSizes): string => 'is-' + removeDecimals(size);


type StateColours = 'info' | 'danger' | 'warning' | 'success' | 'primary' | 'link';
type Shade = 'white' | 'black' | 'light' | 'dark' | 'default';
export type Colours = StateColours | Shade;

export function getColours(shade?: Shade): ColourHelper[] {
	//from GH-copilot (inspired) if it says this is the best way to get values form type and not interface then I guess it is (explicit typing not functional parse)
	// const shades: Shade[] = ['white', 'black', 'light', 'dark', 'default'];
	const states: StateColours[] = ['info', 'danger', 'warning', 'success', 'primary', 'link'];
	// const colours: Colours[] = [...states, ...shades];
	//set shade to default if not provided
	return states.map<ColourHelper>(colour => ({colour: colour, shade: shade ? shade : 'default'}));
}

export type ColourHelper = {
	shade?: Shade;
	colour: StateColours;
};

export function getColourClass(colour: ColourHelper | Colours, type: 'background' | 'text'): string {
	if (typeof colour === 'string')
		return `is-${colour}`;
	else if (!colour.shade || colour.shade === 'default')
		return `has-${type}-${colour.colour}`;
	else if (colour.shade === 'dark' || colour.shade === 'black')
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
export type Monstrosity = { isDark?: boolean; isLight?: boolean; } & Colours;

export interface ColourIcon {
	icon: string;
	colour: ColourHelper;
}


export type Size = 'small' | 'default' | 'medium' | 'large';
export const getSizes = (): Size[] => ['small', 'default', 'medium', 'large'];

export function getSizeClasses(size?: Size): string {
	if (!size || size === 'default')
		return '';
	return `is-${size}`;
}

export type LeftRight = 'left' | 'right';
export const getLeftRight = (): LeftRight[] => ['left', 'right'];

export function getLeftRightClasses(leftRight?: LeftRight): string {
	if (!leftRight)
		return '';
	return `is-${leftRight}`;
}

export type Alignment = 'center' | LeftRight;
export const getAlignments = (): Alignment[] => ['left', 'center', 'right'];

export function getAlignmentClasses(alignment?: Alignment): string {
	if (!alignment)
		return '';
	return `is-${alignment}`;
}

export function toggleActivation(event: Event, element?: HTMLElement, invoke?: boolean): void {
	if (!invoke) return;
	const target = element ? element : event.target as HTMLElement;
	target.classList.toggle('is-active');
}

export const toIsClassName = (name: string): string => `is-${name}`;

//todo: extend usability to add logic if it's alignment, colour, etc
export function getBulma_IS_Classes(classes: Record<string, any>): string[] {
	return Object.keys(classes)
	             .filter(key => key.includes('is') && classes[key])
	             .map<string>(key => {
		             let className = key.toLowerCase();
		             return className.includes('is-') ? className : className.replace('is', 'is-');
	             });

}

export type Dimensions = 16 | 24 | 32 | 48 | 64 | 96 | 128;
export const getDimensions = (): Dimensions[] => [16, 24, 32, 48, 64, 96, 128];

export function getDimensionClasses(dimension?: Dimensions): string {
	if (!dimension)
		return '';
	const dim = removeDecimals(dimension);
	return `is-${dim}x${dim}`;
}

export type AspectRatios =
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
export const getAspectRatios = (): AspectRatios[] => ['square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'];

export function getAspectRatioClasses(aspectRatio?: AspectRatios): string {
	if (!aspectRatio)
		return '';
	return `is-${aspectRatio}`;
}

function removeDecimals(value: number): string {
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
	items: any[];
	isDropUp?: boolean;
	isHoverable?: boolean;
}

export function isNavBarDropdownItem(item: NavBarDropdownItem): item is NavBarDropdownItem {
	return (item as NavBarDropdownItem).label !== undefined && item.items !== undefined;
}

export function isHTMLElement(element: any): element is HTMLElement {
	return element instanceof HTMLElement;
}

export type NavBarItem = object & {
	isComponent?: boolean;
	dropdown?: {
		link: string;
		items: any[];
		isHoverable?: boolean;
		isDropUp?: boolean;
		isBoxed?: boolean;
		isArrowless?: boolean;
		isRight?: boolean;
	};
	href?: string | URL;
};