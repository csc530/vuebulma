/**
 *
 *  - ancestor: if the tile is the root; has no direct parent tile components
 *  - tile: child of ancestor and no child tiles (all children are 2 ir more levels of tiles)
 *  - parent: has child tile
 *  - child: has no children tile elements
 */
export type BulmaTileContext = "ancestor" | "tile" | "child" | "parent"

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
                                                              ? Acc[number]
                                                              : Enumerate<N, [...Acc, Acc["length"]]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type BulmaTileSize = IntRange<1, 12> | "half" | "full" | "1/4" | "1/3"