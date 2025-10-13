/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/


import { register } from "../actions"
import { error } from "../logger/logger"
import { GhostRealmArgs } from "./GhostRealmArgs"



/**
 * Ghost place action
 */
const execute = register<GhostRealmArgs>("sce-cal-set-ghost", ghostPlace)
/** Places a ghost on the map via registered action (multiplayer-aware) */
export function ghostPlaceAction(args:GhostRealmArgs) {
    execute(args)
}

function ghostPlace(args:GhostRealmArgs) {
    let tile = map.getTile(args.xTile, args.yTile)
    let numElements = tile.numElements
    if (args.zBase != undefined) {
        switch (args.type) {
            case "small_scenery":
                let newE = tile.insertElement(numElements) as SmallSceneryElement
                newE.type = "small_scenery"
                newE.baseHeight = args.zBase
                newE.object = args.object
                newE.direction = args.direction
                newE.quadrant = args.quadrant
                newE.isGhost = true
                break
        }
    }
    else {
        error("Call to create a ghost without zBase specified occurred.")
    }
}