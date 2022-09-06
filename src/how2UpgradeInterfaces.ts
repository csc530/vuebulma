import '@/models';

declare module '@/models'{
	interface BreadcrumbItem {
		populate?: () => void,
	}
}