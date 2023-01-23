import {BulmaLink, IconProps} from "../types";

export type BulmaPanelItem = {
	vbType: BulmaPanelType;
	vbTabs?: BulmaLink[];
	vbTxt?: string;
	vbIcon?: IconProps;
	[other: string | symbol | number]: unknown;
};
export type BulmaPanelType = 'block' | 'tabs';
export type BulmaPanelOptions = { number: number, vbType: BulmaPanelType };