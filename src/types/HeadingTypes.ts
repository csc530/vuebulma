/**Sizes for BulmaHeadingSizes component. 1 is the biggest, 6 is the smallest */
export type BulmaHeadingSizes = 1 | 2 | 3 | 4 | 5 | 6;
export const getBulmaHeadingSizes = (): BulmaHeadingSizes[] => [1, 2, 3, 4, 5, 6]
export const getBulmaHeadingSizeClass = (size: BulmaHeadingSizes): string => 'is-' + removeDecimals(size);
/** The types of headings for the `BulmaHeading` component */
export type BulmaHeadingTypes = 'title' | 'subtitle';
export const getBulmaHeadingTypes = (): BulmaHeadingTypes[] => ['title', 'subtitle'];

function removeDecimals(value: number): string {
	return Number(value).toFixed().toString();
}

1