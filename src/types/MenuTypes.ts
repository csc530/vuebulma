type BulmaSubMenuItem = BulmaMenuItem & {
	/** The submenu's items
	 *
	 * Do not use BulmaMenuItem types as it will not be rendered*/
	items: any[];
};
type BulmaMenuItem = {
	/** The menu's label */
	label: string;
	/** The menu's items */
	items?: BulmaSubMenuItem[] | any
};
export type BulmaMenu = BulmaMenuItem[];

// https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export function isBulmaMenuItem(menu: BulmaMenuItem): menu is BulmaMenuItem {
	return menu.label !== undefined;
}