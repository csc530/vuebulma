export interface BreadcrumbItem {
	href: URL | string,
	text: string | (() => string),
	isActive: boolean,
}