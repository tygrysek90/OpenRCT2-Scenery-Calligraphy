/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

import { Colour } from "openrct2-flexui";

/**
 * GUI functions
 */

export function onPreviewDraw(g: GraphicsContext) {
    g.colour = Colour.Grey
    g.box(0, 0, 269, 99)
}