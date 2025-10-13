/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

import { register } from "../actions"
import { GhostRealmArgs } from "./GhostRealmArgs"

/**
 * Ghost remove action
 */
const execute = register<GhostRealmArgs>("sce-cal-remove-ghost", ghostRemove)
/** Removes a ghost via registered action (multiplayer-compatible) */
export function ghostRemoveAction(args:GhostRealmArgs) {
    execute(args)
}

export function ghostRemove(args: GhostRealmArgs) {
    let tile = map.getTile(args.xTile, args.yTile)
    for (let i=0; i<tile.numElements; i++) {
        switch (tile.elements[i].type) {
            case "small_scenery":
                let smallScE = tile.elements[i] as SmallSceneryElement
                if (args.type == "small_scenery" && smallScE.isGhost == true && smallScE.object == args.object && smallScE.direction == args.direction && smallScE.quadrant == args.quadrant) {
                    tile.removeElement(i)
                }
                break
        }
    }

}