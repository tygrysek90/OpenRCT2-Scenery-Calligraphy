/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Scenery-Calligraphy
 * 
 * OpenRCT2-Scenery-Calligraphy
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * Main window
 * GUI definition
 */

import { Colour, tab, tabwindow } from "openrct2-flexui";
import { pluginName } from "./environment";

export const mainWindow = tabwindow({
    title: pluginName,
    width: 300,
    height: 400,
    colours: [Colour.DarkBrown, Colour.DarkGreen, Colour.DarkGreen],
    tabs: [
        tab({
            image: "construction",
            content: [

            ]
        }),
        tab({
            image: "construction",
            content: [

            ]
        })
        
    ]
})