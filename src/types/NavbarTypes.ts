import {Component} from "vue";

/**
 * Classes applied navbar dropdown parent `navbar-item` element
 * @param {BulmaNavbarItem} item - The dropdown item to obtain styles for
 * @returns {string[]} - The list of class names to apply to the dropdown element
 */
export function getNavbarItemClasses(item: BulmaNavbarItem): string[] {
	const classes: string[] = [];
	if(item.isExpanded)
		classes.push('is-expanded');

	if(item.type !== 'dropdown' || !item.dropdown)
		return classes;
	// ? used if statements of explicit properties instead of generic bulma `getBulmaClassesFromProps`
	// ? to avoid any `is` naming conflicts; if the user adds any names prefixed with `is` or `has` adding redundant classes
	classes.push('has-dropdown');
	const {isDropUp, isHoverable} = item.dropdown;

	if(isDropUp)
		classes.push('has-dropdown-up');
	if(isHoverable)
		classes.push('is-hoverable');
	return classes;

}


export function isBulmaNavbarItem(item: BulmaNavbarItem): item is BulmaNavbarItem {
	return item && item.display !== undefined && item.type !== undefined;
}


export type BulmaNavbarItem = {
	/** The type of content to display as a navbar item */
	type: 'simple' | 'dropdown' | 'component' | 'html';
	/** The related content to display
	 * If it's a `dropdown` or `simple` type a string will be the texted displayed */
	display: string | Component | HTMLElement;
	/** The item's link/href */
	link?: string;
	/** The dropdown items and styles */
	dropdown?: {
		/** remove arrow next to dropdown text */
		isArrowless?: boolean;
		/** style dropdown as a box */
		isBoxed?: boolean;
		/** open dropdown upwards */
		isDropUp?: boolean;
		/** make dropdown items appear on hover */
		isHoverable?: boolean;
		/** align dropdown to the right */
		isRight?: boolean;
		/** The dropdown's items */
		items: any[];
	}
	/** Props to pass to the component, only for `component` type */
	props?: Record<string, any>
	/** array of slot to pass to the component (only valid with isComponent)
	 * object key is the slot name and value will be slotted
	 * Only for `component` type */
	slot?: Record<string, string>;
	/** Expand the item to fill remaining navbar space */
	isExpanded?: boolean;
	/** display the item as active */
	isActive?: boolean;
}
export type BulmaNavbarItemTag = 'div' | 'a';