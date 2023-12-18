import {BulmaSize, BULMA_SIZES} from "../types";

// todo: see if I can just change the case/actions in props transformer method to simplify last type
export type BulmaHeroSize = BulmaSize | 'halfheight' | 'fullheight' | 'fullheight-with-navbar'

export function getBulmaHeroSizes(): BulmaHeroSize[] {
    return [...BULMA_SIZES, 'halfheight', 'fullheight', 'fullheight-with-navbar']
}