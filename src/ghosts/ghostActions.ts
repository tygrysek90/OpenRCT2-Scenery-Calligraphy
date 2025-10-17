/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

import { objectConfig } from "../config/objConfig"
import { usedFor } from "../const/objUsedForEnum"
import { ghostPlaceAction } from "./ghostPlaceAction"
import { GhostRealmArgs } from "./GhostRealmArgs"
import { ghostRemoveAction } from "./ghostRemoveAction"

/**
 * Ghost position calculating and runtime storing functions
 */


/** Stores ghosts (current working set) */
var cemetery: Array<GhostRealmArgs> = []


/**
 * Removes current working set from map and empties cemetery (current working set "stack")
 */
export function exorciseCemetery() {
    cemetery.forEach(ghostStored => {
            ghostRemoveAction(ghostStored)
    })
    cemetery = []
}


/**
 * Finds height to place ghost at given tile
 * @param tile OpenRCT2 Tile reference
 * @returns height of land, if its sloped, height+1 and if there’s water, returns water level (so the ghost will not be sunken underwater)
 */
export function determineGoodHeight(tile: Tile): number | undefined {
    let retVal: number | undefined
    tile.elements.forEach(element => {
        if (element.type == "surface") {
            if (element.waterHeight == 0) {
                if (element.slope == 0) {
                    retVal = element.baseHeight
                }
                else {
                    retVal = element.baseHeight + 1
                }
            }
            else {
                retVal = element.waterHeight/8
            }
        }
    })
    return retVal
}


/**
 * Place a ghost on the game map and write into cemetery storage
 * @param type 
 * @param tile 
 * @param direction 
 */
function setGhost(usedFor: usedFor, xTile: number, yTile: number, direction: Direction, quadrant: number) {
    let tile = map.getTile(xTile, yTile)
    let goodHeight = determineGoodHeight(tile)

    //if (noGhostsOnTile(tile) && goodHeight != undefined) {
    if (goodHeight != undefined) {

        ghostPlaceAction({
            xTile: tile.x,
            yTile: tile.y,
            zBase: goodHeight,
            direction: direction,
            quadrant: quadrant,
            type: "small_scenery",
            object: objectConfig[usedFor].id ?? 0
        })       

        cemetery.push({
            xTile: tile.x,
            yTile: tile.y,
            type: "small_scenery",
            object: objectConfig[usedFor].id ?? 0,
            quadrant: quadrant,
            direction: direction,
        })
    }
}




export function moveStamperGhosts(centre: CoordsXY, num: number, rotation: Direction) {
    exorciseCemetery()
/*     for (let r=0; r<5; r++) {
        for (let c=0; c<3; c++) {
            let p=r*3+c
            if (stamps[num][p] == "x") {
                switch (rotation) {
                    case 0 satisfies Direction:
                        setGhost(GhostConfigRow.quarterTileFlat, (centre.x/mapTileSize)+r, (centre.y/mapTileSize)+c, 0 satisfies Direction)
                        break
                    case 1 satisfies Direction:
                        setGhost(GhostConfigRow.quarterTileFlat, (centre.x/mapTileSize)-c, (centre.y/mapTileSize)+r, 0 satisfies Direction)
                        break
                    case 2 satisfies Direction:
                        setGhost(GhostConfigRow.quarterTileFlat, (centre.x/mapTileSize)+c, (centre.y/mapTileSize)-r, 0 satisfies Direction)
                        break
                    case 3 satisfies Direction:
                        setGhost(GhostConfigRow.quarterTileFlat, (centre.x/mapTileSize)-r, (centre.y/mapTileSize)-c, 0 satisfies Direction)
                }
            }
        }
    } */
}