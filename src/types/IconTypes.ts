import {BulmaColour, BulmaColourHelper, BulmaSize} from "../types";

export type BulmaColouredIcon = {
	icon?: string;
	colour: BulmaColourHelper | BulmaColour;
}
export type BulmaMultiIcon = {
	icon: (string | BulmaColouredIcon)[]
	stacked?: boolean | string
}

/**  */
export type IconProps = {
	/**The icon class name with style prefix
	 * @example 'fa-solid', 'fa-shield-cat', [fa-solid, fa-shield-cat]*/
	icon?: string | (string | BulmaColouredIcon)[] | BulmaColouredIcon,
	/** If the icon element will be a display flex; filling space of parent container
	 * @default false*/
	flex?: boolean,
	/** The text to display next to the icon */
	text?: string,
	/**Text and icon's colour*/
	colour?: BulmaColourHelper | BulmaColour,
	/** The size of the icon and text container
	 * @default default */
	containerSize?: BulmaSize,
	/**adds this prefix as a separate class entry to icon element*/
	prefix?: string,
	/** If the text appears before the icon
	 *
	 * requires {@link text} or text slot*/
	textFirst?: boolean,
	/** if the icons will be stacked on top of each other rather than side by side
	 *
	 * if the icon stack needs a class added to it (e.g. fa-stack) then stacked string value will be appended to the icon's span
	 */
	stacked?: boolean | string
}

// type MyComponentProps = InstanceType<typeof BulmaIcon>["$props"];
