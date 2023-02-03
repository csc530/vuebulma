import {BulmaSize, getBulmaSizes} from "../types";

// todo: see if I can just change the case/actions in props tranfomrer method to simplify last type
export type BulmaHeroSize = BulmaSize | 'halfheight' | 'fullheight' | 'fullheight-with-navbar'

export function getBulmaHeroSizes(): BulmaHeroSize[] {
    return [...getBulmaSizes(), 'halfheight', 'fullheight', 'fullheight-with-navbar']
}