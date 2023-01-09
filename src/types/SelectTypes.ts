export type BulmaOptionGroup = {
	/** The label of the option group */
	label: string;
	/** The options of the option group */
	options: BulmaOption[] | string[];
	/** The disabled state of the option group */
	disabled?: boolean;
}

export type BulmaOption = {
	/** The label of the option */
	label: string;
	/** The value of the option */
	value: any;
	/** The disabled state of the option */
	disabled?: boolean;
}

export function getOptionValue(option: BulmaOption | string): any {
	if(typeof option === 'string')
		return option;
	return option.value;
}

export function isBulmaOptionGroup(option: BulmaOptionGroup | BulmaOption): option is BulmaOptionGroup {
	return option.label !== undefined && Array.isArray((option as BulmaOptionGroup).options);
}

export function isBulmaOption(option: BulmaOptionGroup | BulmaOption): option is BulmaOption {
	return option.label !== undefined && (option as BulmaOption).value !== undefined;
}