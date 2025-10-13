/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/


export interface GhostConfig {
    type: ObjectType,
    object: number
}

export enum GhostConfigRow {
    quarterTileFlat
}

export var ghostConfig: GhostConfig[] = [
    {type: "small_scenery", object: 124}
]

