export interface BreadcrumbItem extends Link {
	isActive: boolean,
}

export interface Link {
	href: URL | string,
	text: string | (() => string),
}

export const getLinkText = (link: Link): string => {
	if(typeof link.text === 'string') {
		return link.text;
	}
	return link.text();
};

export type TextSizes = 1 | 2 | 3 | 4 | 5 | 6;
export const getHeaderSize=(size: TextSizes): string =>'is-' + Number(size).toFixed().toString();


type StateColours = 'info' | 'danger' | 'warning' | 'success' | 'primary' | 'link';
type Shade = 'white' | 'black' | 'light' | 'dark' | 'default';
type Colours = StateColours | Shade;

// return an array of strings in Colours type
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

export function getColourClass(colour: ColourHelper, type: 'background' | 'text'): string {
	if(!colour.shade || colour.shade === 'default')
		return `has-${type}-${colour.colour}`;
	else if(colour.shade === 'dark' || colour.shade === 'black')
		return `has-${type}-${colour.colour}-dark`;
	return `has-${type}-${colour.colour}-light`;
}
//todo add grayscale option for colour class getters
type Grayscale = 'black-bis' | 'black-ter' | 'grey-darker' | 'grey-dark' | 'grey'
                 | 'grey-light' | 'grey-lighter' | 'white-ter' | 'white-bis';
// return an array of strings in Grayscale type
const getGrayscale = (): Grayscale[] => {
	return ['black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];
};

//? stack question what monstrosity have I created lol
export type Monstrosity = { isDark?: boolean; isLight?: boolean; } & Colours;

export interface ColourIcon{ icon: string ; colour: ColourHelper; }


export type Size = 'small' |'default'| 'medium' | 'large';
export const getSizes = (): Size[] => ['small', 'default', 'medium', 'large'];
export function getSizeClasses(size: Size): string {
	if(size === 'default')
		return '';
	return `is-${size}`;
}