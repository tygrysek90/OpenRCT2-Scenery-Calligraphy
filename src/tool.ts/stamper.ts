/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

import { exorciseCemetery } from "../ghosts/ghostActions";
import { debug } from "../logger/logger";
import { toggleGridOverlay } from "./toggleGridOverlay";

/**
 * Stamper 'extra' tool
 */
var rotation: Direction = 0


export function activateStamper(dig: number) {
    toggleGridOverlay(false)
    toggleGridOverlay(true)
    ui.activateTool({
        id: "scenery-calligraphy-ghost",
        cursor: "statue_down",
        filter: ["terrain"],
        onMove: a => moveStamper(a),
        onUp: () => upStamper(),
        onFinish: () => exorciseCemetery()
    });

}

export function rotateStamper() {
    debug(`Stamper rotation ${rotation}`)
    if (rotation == 3 satisfies Direction) {
        rotation = 0 satisfies Direction
    }
    else {
        rotation = <Direction>(rotation + 1) satisfies Direction
    }
}


var lastPos: CoordsXY = {x: -1, y: -1}

function moveStamper(a: ToolEventArgs) {
    if (a.mapCoords != undefined) {
        if (lastPos.x != a.mapCoords.x || lastPos.y != a.mapCoords.y) {
            debug("stamper moves")
            //moveStamperGhosts(a.mapCoords, digit, rotation)
            lastPos = a.mapCoords
        }
    }

}

function upStamper() {

}