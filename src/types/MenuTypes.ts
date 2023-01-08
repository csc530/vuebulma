type SubMenuItem = MenuItem & {
	/** The submenu's items
	 *
	 * Do not use MenuItem types as it will not be rendered*/
	items: any[];
};
type MenuItem = {
	/** The menu's label */
	label: string;
	/** The menu's items */
	items?: SubMenuItem[] | any
};
export type Menu = MenuItem[];

// https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export function isMenuItem(menu: MenuItem): menu is MenuItem {
	return menu.label !== undefined;
}