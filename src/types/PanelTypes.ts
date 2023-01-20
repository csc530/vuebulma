import {BulmaLink} from "../types";

export type BulmaPanelItem = {
	vbType: BulmaPanelType;
	vbTabs?: BulmaLink[];
	vbTxt?: string;
	[other: string | symbol | number]: unknown;
};
export type BulmaPanelType = 'block' | 'tabs';
export type BulmaPanelOptions = { number: number, vbType: BulmaPanelType };