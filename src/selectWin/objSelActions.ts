/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Measuring-Tape
 * 
 * OpenRCT2-Measuring-Tape
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * Configuration UI functions
 */

import { objSelModel } from "./objSelModel"
import { objectConfig } from "../config/objConfig";
import { usedFor } from "../const/objUsedForEnum";
import { objectLoader } from "../fx/objDataLoader";


/** Image number of currently previewed object */
var previewObjectImage: number | undefined = undefined

export function onHighlightObjectList(num: number) {
    previewObjectImage = objectLoader.images[num]
    objSelModel.objSelectedName.set(objectLoader.names[num])
}



export function onPreviewDraw(g: GraphicsContext) {
    if (previewObjectImage != undefined) {
        g.image(previewObjectImage, 55, 80)
    }
}

export function onCurrentDraw(which: usedFor, g: GraphicsContext) {
    if (objectConfig[which].image)
        g.image(objectConfig[which].image, 55, 80)
}

export function onSearchParamChange() {
    let searchIn = objSelModel.objSearchFilter.get()
    let isFilter = objSelModel.objCheckFilter.value.get()
    objectLoader.filter(searchIn,isFilter)
    objSelModel.objList.set(objectLoader.namesWithIdentifiers)
}

export function onClickClearSearch() {
    objSelModel.objSearchFilter.set("")
    onSearchParamChange()
}



export function purgePreview() {
    previewObjectImage = undefined // todo: this 
    objSelModel.objSelectedName.set("")
}

export function onWindowOpen () {

}

export function onWindowClose() {
    purgePreview()
}
