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
import { imgButtonSmall, padCentre, sceneryPreview, textButton } from "../const/commonUiConsts";
import { elementSelector } from "../guiFx/elementSelector";
import { objectSelectionWindow } from "../selectWin/objSelectionWind";
import { usedFor } from "../const/objUsedForEnum";

export const mainWindow = tabwindow({
    title: pluginName,
    width: 3*(6+sceneryPreview.width+imgButtonSmall.width)+12+6,
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
                            width: 280,
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
                    content: [
                        elementSelector(usedFor.Text),
                        elementSelector(usedFor.Outline),
                        elementSelector(usedFor.Background),
                    ]
                }),
                groupbox({
                    width: "1w",
                    direction: LayoutDirection.Horizontal,
                    text: "Tools",
                    content: [
                        horizontal({
                            padding: padCentre,
                            content: [
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    image: 29371,
                                    tooltip: "Select used objects",
                                    onClick: () => objectSelectionWindow.open()
                                }),
                                button({
                                    width: imgButtonSmall.width,
                                    height: imgButtonSmall.height,
                                    text: "R",
                                    tooltip: "Rotate"
                                })
                            ]
                        })

                    ]
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