/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Measuring-Tape
 * 
 * OpenRCT2-Measuring-Tape
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * Configuration window
 * GUI definition
 */

import { window, Colour, groupbox, LayoutDirection, button, horizontal, vertical, label, textbox, listview, graphics, twoway, checkbox } from "openrct2-flexui"
import { objSelModel } from "./objSelModel"
import { onClickClearSearch,  onHighlightObjectList, onPreviewDraw, onSearchParamChange, onWindowOpen, onWindowClose } from "./objSelActions"
import { pluginName } from "../environment"


/**
 * Main window user interface
 */
export const objectSelectionWindow = window({
    title: `${pluginName} - Object selection`,
    width: {
        value: 550,
        min: 550, 
        max: 1000
    },
    height: {
        value: 450, 
        min: 450, 
        max: 1000
    },
    position: "center",
    colours: [Colour.DarkGreen, Colour.DarkGreen],
    content: [
        // EVERYTHING BELOW type selector
        // two verticals
        groupbox({
            text: objSelModel.objGroupLabel,
            direction: LayoutDirection.Horizontal,
            height: "1w",
            content: [
                // LEFT vertical - list and search
                vertical({
                    content:[
                        horizontal({
                            content:[
                                textbox({
                                    text: twoway(objSelModel.objSearchFilter),
                                    maxLength: 40,
                                    tooltip: "Enter text to search object list",
                                    onChange: () => onSearchParamChange()
                                }),
                                button({
                                    width: 65,
                                    height: 14,
                                    text: "Clear",
                                    onClick: () => onClickClearSearch()
                                })
                                
                            ]
                        }),
                        listview({
                            scrollbars: "vertical",
                            canSelect: true,
                            items: objSelModel.objList,
                            onHighlight: (item) => onHighlightObjectList(item),
                            //onClick: (item) => onClickObjectList(item)
                        }),
                        checkbox({
                            disabled: objSelModel.objCheckFilter.disabled,
                            height: 8,
                            text: "Filter",
                            isChecked: twoway(objSelModel.objCheckFilter.value),
                            onChange: () => onSearchParamChange()
                        })
                    ]
                }),
                // RIGHT vertical - preview
                groupbox({
                    width: 160,
                    content: [
                        vertical({
                            padding: {top: "50%", bottom:"50%"},
                            content: [
                                graphics({
                                    width: 114,
                                    height: 114,
                                    padding: {left: "1w", right: "1w", top: "1w"},
                                    onDraw: (g) => onPreviewDraw(g)
                                }),
                                label({
                                    padding: {bottom: "1w"},
                                    alignment: "centred",
                                    text: objSelModel.objSelectedName
                                }),
                            ]
                        }),
                        
                    ]
                })
            ]
        })
    ],
    onClose: () => onWindowClose(),
    onOpen: () => onWindowOpen(),
})