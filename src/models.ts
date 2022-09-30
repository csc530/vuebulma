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