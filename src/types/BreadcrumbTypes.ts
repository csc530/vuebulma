/** Separators for BulmaBreadcrumb component */
export type BulmaBreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds' | 'slash';
/** List of separators for BulmaBreadcrumb component */
export const getBulmaBreadcrumbSeparators = (): BulmaBreadcrumbSeparator[] => ['arrow', 'bullet', 'dot', 'succeeds', 'slash'];

/**
 * Convert a separator to a Bulma class
 * @param {BulmaBreadcrumbSeparator} value - The separator type
 * @returns {string} - The Bulma class
 */
export function toBulmaSeparatorClass(value: BulmaBreadcrumbSeparator): string {
	return `has-${value}-separator`;
}