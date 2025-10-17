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

import { button, Colour, graphics, groupbox, horizontal, label, LayoutDirection, tab, tabwindow, textbox } from "openrct2-flexui";
import { pluginName, pluginVersion } from "../environment";
import { onPreviewDraw } from "./mainActions";
import { textButton } from "../const/commonUiConsts";
import { elementSelectors } from "./elementSelector";

export const mainWindow = tabwindow({
    title: pluginName,
    width: 340,
    height: 400,
    colours: [Colour.DarkBrown, Colour.DarkGreen, Colour.DarkGreen],
    static: [
        label({
            width: 70,
            padding: {left: "100%", right:0},
            text: pluginVersion
        })
    ],
    tabs: [
        tab({ // 1st tab
            image: "construction",
            content: [
                groupbox({
                    text: "Preview",
                    content: [
                        graphics({
                            padding: {left: "1w", right: "1w"},
                            width: 270,
                            height: 100, 
                            onDraw: (g) => onPreviewDraw(g)
                        }),
                    ]
                }),
                groupbox({
                    direction: LayoutDirection.Horizontal,
                    text: "Text",
                    content: [
                        textbox({

                        }),
                        button({
                            width: textButton.width,
                            height: textButton.height,
                            text: "Clear"
                        })
                    ]
                }),
                horizontal({
                    content: elementSelectors()
                })

            ]
        }),
        tab({
            image: "construction",
            content: [

            ]
        })
        
    ]
})